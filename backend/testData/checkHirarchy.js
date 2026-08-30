const mongoose = require("mongoose");

const Category = require("../models/category");
const SubCategory = require("../models/subcategory");
const InnerSubCategory = require("../models/innerCategory");


const MONGO_URI =
    "mongodb://127.0.0.1:27017/shopping";


async function checkHierarchy() {

    try {

        await mongoose.connect(MONGO_URI);

        console.log("MongoDB Connected\n");


        console.log("========== CATEGORIES ==========\n");


        const categories = await Category.find();


        categories.forEach(cat => {

            console.log(
                `CATEGORY: ${cat.name}`
            );

        });



        console.log("\n========== SUB CATEGORIES ==========\n");


        const subCategories = await SubCategory.find()
            .populate("category");


        subCategories.forEach(sub => {


            console.log(
                `SUBCATEGORY: ${sub.name}`
            );


            console.log(
                `  Parent Category: ${sub.category?.name || "NOT FOUND"
                }`
            );


            console.log("--------------------");


        });




        console.log("\n========== INNER SUB CATEGORIES ==========\n");


        const innerCategories = await InnerSubCategory.find()
            .populate("subCategory");


        innerCategories.forEach(inner => {


            console.log(
                `INNER CATEGORY: ${inner.name}`
            );


            console.log(
                `  Parent SubCategory: ${inner.subCategory?.name || "NOT FOUND"
                }`
            );


            console.log("--------------------");


        });



        process.exit(0);


    }
    catch (error) {

        console.log(error);

        process.exit(1);

    }

}



checkHierarchy();