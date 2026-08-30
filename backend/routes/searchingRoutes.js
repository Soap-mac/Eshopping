const express = require("express");
const router = express.Router();
const Product = require("../models/products")

router.get("/searchProducts", async (req, res) => {

    try {

        const { q } = req.query;


        if (!q || q.trim() === "") {
            return res.status(200).json({
                success: true,
                products: []
            });
        }


        const searchRegex = {
            $regex: q,
            $options: "i"
        };


        const products = await Product.find({

            $or: [

                {
                    name: searchRegex
                },

                {
                    brand: searchRegex
                },

                {
                    catName: searchRegex
                },

                {
                    SubcatName: searchRegex
                },

                {
                    innersubcatName: searchRegex
                }

            ]

        })
            .limit(10)
            .select(
                "name images price oldPrice brand catName SubcatName"
            );


        return res.status(200).json({

            success: true,
            products

        });


    }
    catch (error) {

        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Server error"
        });

    }

});


module.exports = router;

