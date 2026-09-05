const express = require('express');
const router = express.Router();
const Product = require('../models/products');
const { uploadImage, removeImage } = require('../helpers/cloudinary');
const multer = require('multer');
const categorymodel = require('../models/category');
const subCategorymodel = require('../models/subcategory');
const innerCategory = require('../models/innerCategory');
const path = require('path');
const authentication = require('../middlewares/authVerify');
const isAdmin = require('../middlewares/isAdmin');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: multer.diskStorage({}), limits: { fileSize: 50 * 1024 * 1024 } });

const generateVariantCombinations = (variantOptions, productName) => {
    // Filter out empty variant types
    const validVariants = Object.entries(variantOptions).filter(([key, values]) =>
        values && Array.isArray(values) && values.length > 0
    );

    if (validVariants.length === 0) {
        return [];
    }

    // Generate all combinations
    const combinations = [];
    const keys = validVariants.map(([key]) => key);
    const values = validVariants.map(([, vals]) => vals);

    const generateCombos = (current, depth) => {
        if (depth === values.length) {
            combinations.push(current);
            return;
        }

        for (const value of values[depth]) {
            generateCombos([...current, value], depth + 1);
        }
    };

    generateCombos([], 0);

    // Convert combinations to variant objects
    return combinations.map(combo => {
        const options = {};
        keys.forEach((key, index) => {
            options[key] = combo[index];
        });

        // Generate SKU
        const baseSKU = productName.substring(0, 3).toUpperCase().replace(/\s/g, '') || 'PRD';
        const optionString = combo.join('-').toUpperCase().replace(/\s+/g, '');
        const sku = `${baseSKU}-${optionString}`;

        return {
            options: new Map(Object.entries(options)),
            sku: sku,
            stock: 0,
            price: null, // Will use base price
            images: []
        };
    });
};

router.post('/addproduct', authentication, isAdmin, upload.array('files'), async (req, res) => {
    try {
        const {
            name, price, oldPrice, brand, description,
            category, subCategory, innerSubCategory,
            discount, variants, count
        } = req.body;

        const images = req.files;

        // Validation
        if (!name || !price || !brand || !description || !category || !subCategory || !innerSubCategory) {
            return res.status(400).json({ message: 'Fill the important fields' });
        }
        if (!images || images.length === 0) {
            return res.status(400).json({ message: 'Images are required' });
        }
        if (!variants) {
            return res.status(400).json({ message: 'Variants are required' });
        }

        const parsedVariants = JSON.parse(variants);
        const generatedVariants = generateVariantCombinations(parsedVariants, name);

        if (generatedVariants.length === 0) {
            return res.status(400).json({ message: 'At least one variant option is required' });
        }

        generatedVariants[generatedVariants.length - 1].price = price;
        generatedVariants[generatedVariants.length - 1].stock = count;

        const exists = await Product.findOne({ name });

        // Product with this name already exists -> add these as new variants
        // instead of creating a duplicate product.
        if (exists) {
            const duplicate = exists.variants.some(v => v.sku === generatedVariants[0].sku);
            if (duplicate) {
                return res.status(400).json({ message: 'Product already exists' });
            }

            exists.variants.push(...generatedVariants);
            await exists.save();

            return res.status(201).json({
                success: true,
                message: `Added ${generatedVariants.length} new variant(s). This product now has ${exists.variants.length} total.`,
                product: exists
            });
        }

        const cat = await categorymodel.findOne({ name: category });
        const subCat = await subCategorymodel.findOne({ name: subCategory });
        const innerSubCat = await innerCategory.findOne({ name: innerSubCategory });

        if (!cat || !subCat || !innerSubCat) {
            return res.status(400).json({ message: 'Category, Subcategory or innerSubcategory not found' });
        }

        const imgUrls = await Promise.all(images.map(image => uploadImage(image.path)));

        const newproduct = new Product({
            name,
            price,
            oldPrice,
            brand,
            description,
            images: imgUrls,
            category: cat._id,
            subCategory: subCat._id,
            innerSubCategory: innerSubCat._id,
            discount: discount || 0,
            rating: Number(req.body.ratings || 0),
            catName: category,
            SubcatName: subCategory,
            innersubcatName: innerSubCategory,
            variants: generatedVariants
        });

        await newproduct.save();

        return res.status(201).json({
            success: true,
            message: `Product added successfully with ${generatedVariants.length} variants`,
            product: newproduct,
            variantsGenerated: generatedVariants.length
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
});

router.get('/getproducts', async (req, res) => {
    try {
        const {
            page = 1,
            limit = 10,
            category,
            subCategory,
            innerSubCategory,
            brand,
            minPrice,
            maxPrice,
            search,
            sort = '-createdAt',
            inStock
        } = req.query;

        const filter = {};

        if (category) filter.catName = category;
        if (subCategory) filter.SubcatName = subCategory;
        if (innerSubCategory) filter.innersubcatName = innerSubCategory;
        if (brand) filter.brand = new RegExp(brand, 'i');

        if (minPrice || maxPrice) {
            filter.price = {};
            if (minPrice) filter.price.$gte = Number(minPrice);
            if (maxPrice) filter.price.$lte = Number(maxPrice);
        }

        if (search) {
            filter.$or = [
                { name: new RegExp(search, 'i') },
                { description: new RegExp(search, 'i') },
                { brand: new RegExp(search, 'i') }
            ];
        }

        if (inStock === 'true') {
            filter['variants.stock'] = { $gt: 0 };
        }

        const allProducts = await Product.find(filter)
            .populate('category', 'name')
            .populate('subCategory', 'name')
            .populate('innerSubCategory', 'name')
            .sort(sort)
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();

        const count = await Product.countDocuments(filter);

        res.status(200).json({
            allProducts,
            totalPages: Math.ceil(count / limit),
            currentPage: Number(page),
            totalProducts: count,
            message: 'All Products fetched',
            success: true
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

router.get('/getProduct/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findById(id)
            .populate('category', 'name')
            .populate('subCategory', 'name')
            .populate('innerSubCategory', 'name');

        if (!product) {
            return res.status(404).json({ message: 'Product not found', success: false });
        }

        res.status(200).json({
            message: 'Product found',
            product,
            success: true
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

router.delete('/deleteProducts/:id', authentication, isAdmin, async (req, res) => {
    try {
        const { id } = req.params;

        const productToDelete = await Product.findOne({ _id: id });

        if (!productToDelete) {
            return res.status(404).json({ message: 'Product not found', success: false });
        }

        for (const imageUrl of productToDelete.images) {
            try {
                const publicId = imageUrl.split('/').pop().split('.')[0];
                await removeImage('eshopping/' + publicId);
            } catch (imgError) {
                console.log('Failed to remove image from Cloudinary: ' + imgError);
            }
        }

        await Product.deleteOne({ _id: id });

        res.status(200).json({ message: 'Product deleted', success: true });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

router.put('/editProduct/:id', authentication, isAdmin, upload.array('files'), async (req, res) => {
    try {
        const { id } = req.params;
        const {
            name, price, oldPrice, brand, description,
            category, subCategory, innerSubCategory,
            discount, ratings, variants
        } = req.body;

        if (!name || !price || !brand || !description || !category || !subCategory || !innerSubCategory) {
            return res.status(400).json({ message: 'Fill the important fields' });
        }

        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const cat = await categorymodel.findOne({ name: category });
        const subCat = await subCategorymodel.findOne({ name: subCategory });
        const innerSubCat = await innerCategory.findOne({ name: innerSubCategory });

        if (!cat || !subCat || !innerSubCat) {
            return res.status(400).json({ message: 'Category, Subcategory or innerSubcategory not found' });
        }

        product.name = name;
        product.price = price;
        product.oldPrice = oldPrice;
        product.brand = brand;
        product.description = description;
        product.category = cat._id;
        product.subCategory = subCat._id;
        product.innerSubCategory = innerSubCat._id;
        product.catName = category;
        product.SubcatName = subCategory;
        product.innersubcatName = innerSubCategory;
        product.discount = discount || 0;
        product.rating = ratings || 0;

        if (req.files && req.files.length > 0) {
            const imgUrls = await Promise.all(req.files.map(image => uploadImage(image.path)));
            product.images = imgUrls;
        }

        if (variants) {
            const parsedVariants = JSON.parse(variants);

            product.variants = parsedVariants.map(variant => {
                if (!variant.sku) {
                    throw new Error('Each variant must have a unique SKU');
                }
                if (!variant.options || Object.keys(variant.options).length === 0) {
                    throw new Error('Each variant must have at least one option');
                }

                return {
                    options: new Map(Object.entries(variant.options)),
                    sku: variant.sku,
                    price: variant.price || null,
                    stock: variant.stock || 0,
                    images: variant.images || []
                };
            });
        }

        await product.save();

        res.status(200).json({
            message: "Product updated",
            success: true,
            product
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

router.get('/products/:name', async (req, res) => {
    try {
        const name = req.params.name;

        let exist = await Product.find({ catName: name })
            .populate('category', 'name')
            .populate('subCategory', 'name')
            .populate('innerSubCategory', 'name');

        if (exist.length === 0) {
            exist = await Product.find({ SubcatName: name })
                .populate('category', 'name')
                .populate('subCategory', 'name')
                .populate('innerSubCategory', 'name');

            if (exist.length === 0) {
                exist = await Product.find({ innersubcatName: name })
                    .populate('category', 'name')
                    .populate('subCategory', 'name')
                    .populate('innerSubCategory', 'name');

                if (exist.length === 0) {
                    return res.status(404).json({ message: "Products not found", success: false });
                }
            }
        }

        return res.status(200).json({
            message: "Items fetched",
            item: exist,
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
});

router.patch('/updateVariantStock/:productId/:variantId', authentication, isAdmin, async (req, res) => {
    try {
        const { productId, variantId } = req.params;
        const { stock } = req.body;

        if (stock === undefined || stock < 0) {
            return res.status(400).json({ message: 'Valid stock quantity required' });
        }

        const product = await Product.findOneAndUpdate(
            {
                _id: productId,
                'variants._id': variantId
            },
            {
                $set: { 'variants.$.stock': stock }
            },
            { new: true }
        );

        if (!product) {
            return res.status(404).json({ message: 'Product or variant not found' });
        }

        res.status(200).json({
            success: true,
            message: 'Variant stock updated',
            product
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

router.patch('/decreaseVariantStock/:productId/:variantId', authentication, isAdmin, async (req, res) => {
    try {
        const { productId, variantId } = req.params;
        const { quantity } = req.body;

        if (!quantity || quantity <= 0) {
            return res.status(400).json({ message: 'Valid quantity required' });
        }

        const product = await Product.findOneAndUpdate(
            {
                _id: productId,
                'variants._id': variantId,
                'variants.stock': { $gte: quantity }
            },
            {
                $inc: { 'variants.$.stock': -quantity }
            },
            { new: true }
        );

        if (!product) {
            return res.status(400).json({
                message: 'Insufficient stock or product/variant not found',
                success: false
            });
        }

        res.status(200).json({
            success: true,
            message: 'Stock decreased successfully',
            product
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

router.get('/variant/:sku', async (req, res) => {
    try {
        const { sku } = req.params;

        const product = await Product.findOne({ 'variants.sku': sku });

        if (!product) {
            return res.status(404).json({ message: 'Variant not found', success: false });
        }

        const variant = product.variants.find(v => v.sku === sku);

        res.status(200).json({
            success: true,
            product: {
                _id: product._id,
                name: product.name,
                brand: product.brand,
                description: product.description,
                basePrice: product.price,
                images: product.images
            },
            variant
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});


router.get("/relatedProducts/:id", async (req, res) => {

    try {

        const productId = req.params.id;

        const currentProduct = await Product.findById(productId);


        if (!currentProduct) {
            return res.status(404).json({
                message: "Product not found"
            });
        }



        const relatedProducts = await Product.find({

            category: currentProduct.category,

            _id: {
                $ne: productId
            }

        })
            .limit(10);



        res.status(200).json({
            success: true,
            relatedProducts
        });


    }
    catch (error) {

        console.log(error);

        res.status(500).json({
            message: error.message
        });
    }

});

module.exports = router;