const mongoose = require("mongoose");

const Product = require("../models/products");
const Category = require("../models/category");
const SubCategory = require("../models/subcategory");
const InnerSubCategory = require("../models/innerCategory");

const products = require("./mockProduct");


const MONGO_URI =
    "mongodb://127.0.0.1:27017/shopping";



async function seedProducts() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("MongoDB connected");
        await Product.deleteMany({});
        console.log("Old products deleted");

        const productsToInsert = [];

        for (const product of products) {
            const category = await Category.findOne({
                name: product.catName
            });

            if (!category) {
                console.log(
                    "Missing category:",
                    product.catName
                );
                continue;
            }
            const subCategory = await SubCategory.findOne({
                name: product.SubcatName,
                parentId: category._id
            });

            const innerSubCategory = await InnerSubCategory.findOne({
                name: product.innersubcatName,
                subcategoryId: subCategory?._id
            });
            if (!subCategory) {
                console.log(
                    "Missing subcategory:",
                    product.SubcatName
                );
            }
            if (!innerSubCategory) {
                console.log(
                    "Missing inner category:",
                    product.innersubcatName
                );
            }

            productsToInsert.push({
                name: product.name,
                images: product.images,
                brand: product.brand,
                description: product.description,
                price: product.price,
                oldPrice: product.oldPrice,
                category: category._id,
                subCategory: subCategory?._id,
                innerSubCategory: innerSubCategory?._id,
                catName: product.catName,
                SubcatName: product.SubcatName,
                innersubcatName: product.innersubcatName,
                rating: product.rating,
                discount: product.discount,
                variants: product.variants
            });
        }
        await Product.insertMany(productsToInsert);
        console.log(
            `${productsToInsert.length} new products added`
        );
        process.exit(0);
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
}


seedProducts();