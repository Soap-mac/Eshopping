
// Image helper
const img = (id) =>
    `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`;


// Variant helper
const createVariants = (
    values,
    baseSku,
    basePrice,
    images
) => {
    return values.map((value, index) => ({
        options: value.options,

        sku: `${baseSku}-${index + 1}`,

        price: value.price || basePrice,

        stock: Math.floor(Math.random() * 80) + 20,

        images
    }));
};



const products = [

    /* ===========================
            FASHION
       =========================== */


    /* -------- MEN SHIRTS -------- */


    /* ===========================
        MEN'S SHIRTS
   =========================== */


    {
        name: "Slim Fit Oxford Formal Shirt",

        images: [
            img("photo-1603252109303-2751441dd157"),
            img("photo-1598032895397-b9472444bf93"),
            img("photo-1588359348347-9bc6cbb6f8a6"),
            img("photo-1620012253295-c15cc3e65df4")
        ],

        brand: "Van Heusen",

        description:
            "Premium slim fit Oxford cotton shirt designed for office wear and formal occasions.",

        price: 1599,
        oldPrice: 2499,

        catName: "Fashion",
        SubcatName: "Mens",
        innersubcatName: "Shirts",

        rating: 4.6,
        discount: 36,

        variants: [
            {
                options: {
                    Size: "M",
                    Color: "White",
                    Material: "Cotton"
                },
                sku: "FASH-M-SHIRT-001-WHT",
                price: 1599,
                stock: 50,
                images: [
                    img("photo-1603252109303-2751441dd157")
                ]
            },
            {
                options: {
                    Size: "L",
                    Color: "Blue",
                    Material: "Cotton"
                },
                sku: "FASH-M-SHIRT-001-BLU",
                price: 1599,
                stock: 40,
                images: [
                    img("photo-1598032895397-b9472444bf93")
                ]
            }
        ]
    },



    {
        name: "Premium Linen Casual Shirt",

        images: [
            img("photo-1617127365659-c47fa864d8bc"),
            img("photo-1627225924765-552d49cf47ad"),
            img("photo-1602810318383-e386cc2a3ccf"),
            img("photo-1596755094514-f87e34085b2c")
        ],

        brand: "Allen Solly",

        description:
            "Breathable linen casual shirt perfect for summer outings and smart casual looks.",

        price: 1799,
        oldPrice: 2799,

        catName: "Fashion",
        SubcatName: "Mens",
        innersubcatName: "Shirts",

        rating: 4.5,
        discount: 35,

        variants: [
            {
                options: {
                    Size: "M",
                    Color: "Beige",
                    Material: "Linen"
                },

                sku: "FASH-M-SHIRT-002-BEI",

                price: 1799,

                stock: 35,

                images: [
                    img("photo-1617127365659-c47fa864d8bc")
                ]
            }
        ]

    },



    {
        name: "Checked Casual Cotton Shirt",

        images: [
            img("photo-1598033129183-c4f50c736f10"),
            img("photo-1607345366928-199ea26cfe3e"),
            img("photo-1602810318383-e386cc2a3ccf"),
            img("photo-1596755094514-f87e34085b2c")
        ],

        brand: "Peter England",

        description:
            "Classic checked cotton shirt with comfortable fit for everyday wear.",

        price: 1299,

        oldPrice: 1999,

        catName: "Fashion",
        SubcatName: "Mens",
        innersubcatName: "Shirts",

        rating: 4.4,

        discount: 35,


        variants: [
            {
                options: {
                    Size: "L",
                    Color: "Blue Check",
                    Material: "Cotton"
                },

                sku: "FASH-M-SHIRT-003-BCHK",

                price: 1299,

                stock: 60,

                images: [
                    img("photo-1598033129183-c4f50c736f10")
                ]
            }
        ]

    },



    {
        name: "Denim Overshirt Jacket",

        images: [
            img("photo-1543076447-215ad9ba6923"),
            img("photo-1578681994506-b8f463449011"),
            img("photo-1602810318383-e386cc2a3ccf"),
            img("photo-1596755094514-f87e34085b2c")
        ],

        brand: "Levi's",

        description:
            "Premium denim overshirt with rugged design for casual streetwear styling.",

        price: 2499,

        oldPrice: 3999,

        catName: "Fashion",
        SubcatName: "Mens",
        innersubcatName: "Shirts",

        rating: 4.7,

        discount: 37,


        variants: [
            {
                options: {
                    Size: "XL",
                    Color: "Blue",
                    Material: "Denim"
                },

                sku: "FASH-M-SHIRT-004-DNM",

                price: 2499,

                stock: 25,

                images: [
                    img("photo-1543076447-215ad9ba6923")
                ]
            }
        ]

    },




    {
        name: "Premium Black Formal Shirt",

        images: [
            img("photo-1598033129183-c4f50c736f10"),
            img("photo-1603252109303-2751441dd157"),
            img("photo-1588359348347-9bc6cbb6f8a6"),
            img("photo-1620012253295-c15cc3e65df4")
        ],

        brand: "Louis Philippe",

        description:
            "Elegant black formal shirt crafted for premium business styling.",

        price: 2199,

        oldPrice: 3299,

        catName: "Fashion",
        SubcatName: "Mens",
        innersubcatName: "Shirts",

        rating: 4.8,

        discount: 33,


        variants: [
            {
                options: {
                    Size: "M",
                    Color: "Black",
                    Material: "Cotton"
                },

                sku: "FASH-M-SHIRT-005-BLK",

                price: 2199,

                stock: 30,

                images: [
                    img("photo-1598033129183-c4f50c736f10")
                ]
            }
        ]

    },





    /* ===========================
            MEN'S T-SHIRTS
       =========================== */


    {
        name: "Oversized Premium Cotton T-Shirt",

        images: [
            img("photo-1521572163474-6864f9cf17ab"),
            img("photo-1503341504253-dff4815485f1"),
            img("photo-1515886657613-9f3515b0c78f"),
            img("photo-1485230895905-ec40ba36b9bc")
        ],

        brand: "H&M",

        description:
            "Heavy GSM oversized cotton t-shirt with relaxed streetwear fit.",

        price: 899,

        oldPrice: 1499,

        catName: "Fashion",
        SubcatName: "Mens",
        innersubcatName: "T-Shirts",

        rating: 4.6,

        discount: 40,


        variants: [
            {
                options: {
                    Size: "L",
                    Color: "Black",
                    Material: "Cotton"
                },

                sku: "FASH-M-TSHIRT-001-BLK",

                price: 899,

                stock: 80,

                images: [
                    img("photo-1521572163474-6864f9cf17ab")
                ]
            }
        ]

    },



    {
        name: "Classic Polo T-Shirt",

        images: [
            img("photo-1627225924765-552d49cf47ad"),
            img("photo-1503341504253-dff4815485f1"),
            img("photo-1523381294911-8d3cead13475"),
            img("photo-1485968579580-b6d095142e6e")
        ],

        brand: "U.S. Polo Assn",

        description:
            "Classic polo t-shirt with premium collar design and comfortable cotton fabric.",

        price: 1199,

        oldPrice: 1799,

        catName: "Fashion",
        SubcatName: "Mens",
        innersubcatName: "T-Shirts",

        rating: 4.7,

        discount: 33,


        variants: [
            {
                options: {
                    Size: "M",
                    Color: "Navy Blue",
                    Material: "Cotton"
                },

                sku: "FASH-M-TSHIRT-002-NVY",

                price: 1199,

                stock: 55,

                images: [
                    img("photo-1627225924765-552d49cf47ad")
                ]
            }
        ]

    },



    {
        name: "Graphic Printed Streetwear T-Shirt",

        images: [
            img("photo-1523381294911-8d3cead13475"),
            img("photo-1503341455253-b2e723bb3dbb"),
            img("photo-1515886657613-9f3515b0c78f"),
            img("photo-1521572163474-6864f9cf17ab")
        ],

        brand: "Bewakoof",

        description:
            "Trendy graphic printed t-shirt designed for casual street fashion.",

        price: 799,

        oldPrice: 1299,

        catName: "Fashion",
        SubcatName: "Mens",
        innersubcatName: "T-Shirts",

        rating: 4.5,

        discount: 38,


        variants: [
            {
                options: {
                    Size: "XL",
                    Color: "White",
                    Material: "Cotton"
                },

                sku: "FASH-M-TSHIRT-003-WHT",

                price: 799,

                stock: 100,

                images: [
                    img("photo-1523381294911-8d3cead13475")
                ]
            }
        ]

    },


    {
        name: "Premium Oxford Cotton Shirt",

        images: [
            img("photo-1598032895397-b9472444bf93"),
            img("photo-1603252109303-2751441dd157"),
            img("photo-1596755389378-c31d21fd1273"),
            img("photo-1602810318383-e386cc2a3ccf")
        ],

        brand: "Allen Cooper",

        description:
            "Premium oxford cotton shirt with a structured collar and comfortable regular fit. Perfect for office and smart casual wear.",


        price: 1499,

        oldPrice: 1999,

        catName: "Fashion",

        SubcatName: "Mens",

        innersubcatName: "Shirts",


        rating: 4.6,

        discount: 25,


        variants: createVariants(
            [
                {
                    options: {
                        Size: "M",
                        Color: "White"
                    }
                },

                {
                    options: {
                        Size: "L",
                        Color: "Blue"
                    }
                },

                {
                    options: {
                        Size: "XL",
                        Color: "Black"
                    }
                }
            ],

            "OXFORD-SHIRT",

            1499,

            [
                img("photo-1598032895397-b9472444bf93"),
                img("photo-1603252109303-2751441dd157")
            ]
        )

    },



    {
        name: "Slim Fit Linen Casual Shirt",

        images: [
            img("photo-1621072156002-e2fccdc0b176"),
            img("photo-1594938298603-c8148c4dae35"),
            img("photo-1598032895397-b9472444bf93"),
            img("photo-1603252109303-2751441dd157")
        ],

        brand: "Urban Monkey",

        description:
            "Lightweight linen blend shirt designed for summer comfort with a modern slim fit.",


        price: 1799,

        oldPrice: 2299,

        catName: "Fashion",

        SubcatName: "Mens",

        innersubcatName: "Shirts",

        rating: 4.5,

        discount: 22,


        variants: createVariants(
            [
                {
                    options: {
                        Size: "M",
                        Color: "Beige"
                    }
                },
                {
                    options: {
                        Size: "L",
                        Color: "Olive"
                    }
                },
                {
                    options: {
                        Size: "XL",
                        Color: "White"
                    }
                }
            ],

            "LINEN-SHIRT",

            1799,

            [
                img("photo-1621072156002-e2fccdc0b176"),
                img("photo-1594938298603-c8148c4dae35")
            ]
        )

    },



    {
        name: "Classic Checked Casual Shirt",

        images: [
            img("photo-1598032895397-b9472444bf93"),
            img("photo-1621072156002-e2fccdc0b176"),
            img("photo-1596755389378-c31d21fd1273"),
            img("photo-1602810318383-e386cc2a3ccf")
        ],


        brand: "Roadster",

        description:
            "Soft cotton checked shirt with a casual pattern suitable for everyday styling.",


        price: 1299,

        oldPrice: 1699,


        catName: "Fashion",

        SubcatName: "Mens",

        innersubcatName: "Shirts",


        rating: 4.4,

        discount: 18,


        variants: createVariants(
            [
                {
                    options: {
                        Size: "S",
                        Color: "Red Check"
                    }
                },

                {
                    options: {
                        Size: "M",
                        Color: "Blue Check"
                    }
                },

                {
                    options: {
                        Size: "L",
                        Color: "Green Check"
                    }
                }
            ],


            "CHECK-SHIRT",

            1299,


            [
                img("photo-1598032895397-b9472444bf93"),
                img("photo-1596755389378-c31d21fd1273")
            ]
        )

    },

    /* ===========================
            MEN T-SHIRTS
       =========================== */


    {
        name: "Premium Cotton Crew Neck T-Shirt",

        images: [
            img("photo-1521572163474-6864f9cf17ab"),
            img("photo-1503341504253-dff4815485f1"),
            img("photo-1523381210434-271e8be1f52b"),
            img("photo-1515886657613-9f3515b0c78f")
        ],

        brand: "Roadster",

        description:
            "100% premium cotton crew neck t-shirt with a comfortable fit for daily casual wear.",

        price: 699,

        oldPrice: 999,

        catName: "Fashion",

        SubcatName: "Mens",

        innersubcatName: "T-Shirts",

        rating: 4.5,

        discount: 30,


        variants: createVariants(
            [
                {
                    options: {
                        Size: "S",
                        Color: "Black"
                    }
                },

                {
                    options: {
                        Size: "M",
                        Color: "White"
                    }
                },

                {
                    options: {
                        Size: "L",
                        Color: "Navy Blue"
                    }
                },

                {
                    options: {
                        Size: "XL",
                        Color: "Grey"
                    }
                }
            ],

            "COTTON-TSHIRT",

            699,

            [
                img("photo-1521572163474-6864f9cf17ab"),
                img("photo-1503341504253-dff4815485f1")
            ]
        )
    },



    {
        name: "Oversized Graphic Streetwear T-Shirt",

        images: [
            img("photo-1503341504253-dff4815485f1"),
            img("photo-1523381210434-271e8be1f52b"),
            img("photo-1521572163474-6864f9cf17ab"),
            img("photo-1515886657613-9f3515b0c78f")
        ],


        brand: "Urban Monkey",

        description:
            "Heavyweight oversized t-shirt with premium fabric and modern streetwear graphics.",


        price: 899,

        oldPrice: 1299,


        catName: "Fashion",

        SubcatName: "Mens",

        innersubcatName: "T-Shirts",


        rating: 4.7,

        discount: 31,


        variants: createVariants(
            [
                {
                    options: {
                        Size: "M",
                        Color: "Black"
                    }
                },

                {
                    options: {
                        Size: "L",
                        Color: "Brown"
                    }
                },

                {
                    options: {
                        Size: "XL",
                        Color: "Cream"
                    }
                }
            ],

            "OVERSIZED-TSHIRT",

            899,


            [
                img("photo-1503341504253-dff4815485f1"),
                img("photo-1523381210434-271e8be1f52b")
            ]
        )
    },




    {
        name: "Premium Polo T-Shirt",

        images: [
            img("photo-1581655353564-df123a1eb820"),
            img("photo-1521572163474-6864f9cf17ab"),
            img("photo-1503341504253-dff4815485f1"),
            img("photo-1515886657613-9f3515b0c78f")
        ],


        brand: "Allen Cooper",

        description:
            "Classic pique polo t-shirt with premium collar design and breathable cotton fabric.",


        price: 1199,

        oldPrice: 1599,


        catName: "Fashion",

        SubcatName: "Mens",

        innersubcatName: "T-Shirts",


        rating: 4.6,

        discount: 25,


        variants: createVariants(
            [
                {
                    options: {
                        Size: "M",
                        Color: "White"
                    }
                },

                {
                    options: {
                        Size: "L",
                        Color: "Blue"
                    }
                },

                {
                    options: {
                        Size: "XL",
                        Color: "Black"
                    }
                }
            ],


            "POLO-TSHIRT",

            1199,


            [
                img("photo-1581655353564-df123a1eb820"),
                img("photo-1521572163474-6864f9cf17ab")
            ]
        )
    },


    /* ===========================
        MEN'S T-SHIRTS
        CONTINUED
   =========================== */


    {
        name: "Premium Henley Neck T-Shirt",

        images: [
            img("photo-1503341504253-dff4815485f1"),
            img("photo-1521572163474-6864f9cf17ab"),
            img("photo-1503342217505-b0a15ec3261c"),
            img("photo-1523381294911-8d3cead13475")
        ],

        brand: "Roadster",

        description:
            "Comfortable henley neck t-shirt made with soft premium cotton fabric.",

        price: 999,

        oldPrice: 1499,

        catName: "Fashion",
        SubcatName: "Mens",
        innersubcatName: "T-Shirts",

        rating: 4.5,

        discount: 33,


        variants: [
            {
                options: {
                    Size: "L",
                    Color: "Olive Green",
                    Material: "Cotton"
                },

                sku: "FASH-M-TSHIRT-004-OLV",

                price: 999,

                stock: 70,

                images: [
                    img("photo-1503341504253-dff4815485f1")
                ]
            }
        ]

    },




    {
        name: "Dry Fit Sports T-Shirt",

        images: [
            img("photo-1517836357463-d25dfeac3438"),
            img("photo-1538805060514-97d9cc17730c"),
            img("photo-1579952363873-27f3bade9f55"),
            img("photo-1526401485004-2aa7c6b0d93b")
        ],

        brand: "Nike",

        description:
            "Lightweight dry fit sports t-shirt designed for workouts and running.",

        price: 1499,

        oldPrice: 2499,

        catName: "Fashion",
        SubcatName: "Mens",
        innersubcatName: "T-Shirts",

        rating: 4.8,

        discount: 40,


        variants: [
            {
                options: {
                    Size: "M",
                    Color: "Black",
                    Material: "Polyester"
                },

                sku: "FASH-M-TSHIRT-005-BLK",

                price: 1499,

                stock: 45,

                images: [
                    img("photo-1517836357463-d25dfeac3438")
                ]
            }
        ]

    },



    {
        name: "Minimal Solid Cotton T-Shirt",

        images: [
            img("photo-1521572163474-6864f9cf17ab"),
            img("photo-1503342217505-b0a15ec3261c"),
            img("photo-1485968579580-b6d095142e6e"),
            img("photo-1523381294911-8d3cead13475")
        ],

        brand: "H&M",

        description:
            "Minimal solid colour t-shirt suitable for everyday casual outfits.",

        price: 699,

        oldPrice: 999,

        catName: "Fashion",
        SubcatName: "Mens",
        innersubcatName: "T-Shirts",

        rating: 4.4,

        discount: 30,


        variants: [
            {
                options: {
                    Size: "XL",
                    Color: "Grey",
                    Material: "Cotton"
                },

                sku: "FASH-M-TSHIRT-006-GRY",

                price: 699,

                stock: 120,

                images: [
                    img("photo-1521572163474-6864f9cf17ab")
                ]
            }
        ]

    },

    /* ===========================
              TROUSERS
       =========================== */


    {
        name: "Slim Fit Stretch Chino Trousers",

        images: [
            img("photo-1624378439575-d8705ad7ae80"),
            img("photo-1515886657613-9f3515b0c78f"),
            img("photo-1473966968600-fa801b869a1a"),
            img("photo-1485230895905-ec40ba36b9bc")
        ],

        brand: "Jack & Jones",

        description:
            "Slim fit stretch chinos with premium finish for smart casual dressing.",

        price: 1799,

        oldPrice: 2799,

        catName: "Fashion",
        SubcatName: "Mens",
        innersubcatName: "Trousers",

        rating: 4.6,

        discount: 36,


        variants: [
            {
                options: {
                    Size: "32",
                    Color: "Beige",
                    Material: "Cotton Blend"
                },

                sku: "FASH-M-TRS-001-BEI",

                price: 1799,

                stock: 50,

                images: [
                    img("photo-1624378439575-d8705ad7ae80")
                ]
            }
        ]

    },




    {
        name: "Classic Formal Office Trousers",

        images: [
            img("photo-1594938298603-c8148c4dae35"),
            img("photo-1598033129183-c4f50c736f10"),
            img("photo-1624378439575-d8705ad7ae80"),
            img("photo-1473966968600-fa801b869a1a")
        ],

        brand: "Louis Philippe",

        description:
            "Premium formal trousers with wrinkle-resistant fabric for office wear.",

        price: 2299,

        oldPrice: 3499,

        catName: "Fashion",
        SubcatName: "Mens",
        innersubcatName: "Trousers",

        rating: 4.7,

        discount: 34,


        variants: [
            {
                options: {
                    Size: "34",
                    Color: "Black",
                    Material: "Polyester Blend"
                },

                sku: "FASH-M-TRS-002-BLK",

                price: 2299,

                stock: 35,

                images: [
                    img("photo-1594938298603-c8148c4dae35")
                ]
            }
        ]

    },




    {
        name: "Relaxed Fit Cargo Pants",

        images: [
            img("photo-1515886657613-9f3515b0c78f"),
            img("photo-1624378439575-d8705ad7ae80"),
            img("photo-1473966968600-fa801b869a1a"),
            img("photo-1485230895905-ec40ba36b9bc")
        ],

        brand: "Urban Ranger",

        description:
            "Utility cargo pants with multiple pockets and relaxed streetwear fit.",

        price: 1599,

        oldPrice: 2499,

        catName: "Fashion",
        SubcatName: "Mens",
        innersubcatName: "Trousers",

        rating: 4.5,

        discount: 36,


        variants: [
            {
                options: {
                    Size: "32",
                    Color: "Olive",
                    Material: "Cotton"
                },

                sku: "FASH-M-TRS-003-OLV",

                price: 1599,

                stock: 65,

                images: [
                    img("photo-1515886657613-9f3515b0c78f")
                ]
            }
        ]

    },




    {
        name: "Premium Black Slim Trousers",

        images: [
            img("photo-1594938298603-c8148c4dae35"),
            img("photo-1624378439575-d8705ad7ae80"),
            img("photo-1473966968600-fa801b869a1a"),
            img("photo-1485230895905-ec40ba36b9bc")
        ],

        brand: "Raymond",

        description:
            "Elegant slim trousers designed for premium formal styling.",

        price: 2499,

        oldPrice: 3999,

        catName: "Fashion",
        SubcatName: "Mens",
        innersubcatName: "Trousers",

        rating: 4.8,

        discount: 38,


        variants: [
            {
                options: {
                    Size: "36",
                    Color: "Black",
                    Material: "Wool Blend"
                },

                sku: "FASH-M-TRS-004-BLK",

                price: 2499,

                stock: 30,

                images: [
                    img("photo-1594938298603-c8148c4dae35")
                ]
            }
        ]

    },




    {
        name: "Blue Denim Jeans",

        images: [
            img("photo-1542272604-787c3835535d"),
            img("photo-1541099649105-f69ad21f3246"),
            img("photo-1584370848010-d7fe6bc767ec"),
            img("photo-1515886657613-9f3515b0c78f")
        ],

        brand: "Levi's",

        description:
            "Classic blue denim jeans with durable fabric and comfortable fit.",

        price: 2999,

        oldPrice: 4499,

        catName: "Fashion",
        SubcatName: "Mens",
        innersubcatName: "Trousers",

        rating: 4.9,

        discount: 33,


        variants: [
            {
                options: {
                    Size: "32",
                    Color: "Blue",
                    Material: "Denim"
                },

                sku: "FASH-M-TRS-005-BLU",

                price: 2999,

                stock: 55,

                images: [
                    img("photo-1542272604-787c3835535d")
                ]
            }
        ]

    },


    /* ===========================
            MEN TROUSERS
       =========================== */


    {
        name: "Slim Fit Chino Trousers",

        images: [
            img("photo-1473966968600-fa801b869a1a"),
            img("photo-1624378439575-d8705ad7ae80"),
            img("photo-1594938298603-c8148c4dae35"),
            img("photo-1598033129183-c4f50c736f10")
        ],


        brand: "Allen Cooper",

        description:
            "Stretch cotton chino trousers with slim fit design suitable for office and casual occasions.",


        price: 1499,

        oldPrice: 1999,


        catName: "Fashion",

        SubcatName: "Mens",

        innersubcatName: "Trousers",


        rating: 4.5,

        discount: 25,


        variants: createVariants(
            [
                {
                    options: {
                        Size: "30",
                        Color: "Khaki"
                    }
                },

                {
                    options: {
                        Size: "32",
                        Color: "Black"
                    }
                },

                {
                    options: {
                        Size: "34",
                        Color: "Navy"
                    }
                }
            ],

            "CHINO-TROUSER",

            1499,


            [
                img("photo-1473966968600-fa801b869a1a"),
                img("photo-1624378439575-d8705ad7ae80")
            ]
        )
    },


    {
        name: "Premium Formal Dress Trousers",

        images: [
            img("photo-1594938298603-c8148c4dae35"),
            img("photo-1598033129183-c4f50c736f10"),
            img("photo-1624378439575-d8705ad7ae80"),
            img("photo-1473966968600-fa801b869a1a")
        ],


        brand: "Van Heusen",

        description:
            "Tailored formal trousers with elegant finishing for professional wear.",


        price: 1799,

        oldPrice: 2399,


        catName: "Fashion",

        SubcatName: "Mens",

        innersubcatName: "Trousers",


        rating: 4.8,

        discount: 25,


        variants: createVariants(
            [
                {
                    options: {
                        Size: "30",
                        Color: "Grey"
                    }
                },

                {
                    options: {
                        Size: "32",
                        Color: "Black"
                    }
                },

                {
                    options: {
                        Size: "36",
                        Color: "Navy"
                    }
                }
            ],

            "FORMAL-TROUSER",

            1799,


            [
                img("photo-1594938298603-c8148c4dae35"),
                img("photo-1598033129183-c4f50c736f10")
            ]
        )
    },


    {
        name: "Relaxed Cargo Utility Trousers",

        images: [
            img("photo-1515886657613-9f3515b0c78f"),
            img("photo-1624378439575-d8705ad7ae80"),
            img("photo-1473966968600-fa801b869a1a"),
            img("photo-1598033129183-c4f50c736f10")
        ],


        brand: "StreetForm",

        description:
            "Durable cargo trousers with multiple pockets and relaxed streetwear fit.",


        price: 1599,

        oldPrice: 2199,


        catName: "Fashion",

        SubcatName: "Mens",

        innersubcatName: "Trousers",


        rating: 4.4,

        discount: 27,


        variants: createVariants(
            [
                {
                    options: {
                        Size: "30",
                        Color: "Olive"
                    }
                },

                {
                    options: {
                        Size: "32",
                        Color: "Black"
                    }
                },

                {
                    options: {
                        Size: "34",
                        Color: "Brown"
                    }
                }
            ],


            "CARGO-TROUSER",

            1599,


            [
                img("photo-1515886657613-9f3515b0c78f"),
                img("photo-1624378439575-d8705ad7ae80")
            ]
        )
    },


    /* ===========================
            WOMEN DRESSES
       =========================== */


    {
        name: "Floral Summer Midi Dress",

        images: [
            img("photo-1515372039744-b8f02a3ae446"),
            img("photo-1496747611176-843222e1e57c"),
            img("photo-1595777457583-95e059d581b8"),
            img("photo-1566174053879-31528523f8ae")
        ],

        brand: "Libas",

        description:
            "Elegant floral midi dress made with lightweight fabric, perfect for casual outings and summer styling.",

        price: 1899,

        oldPrice: 2499,

        catName: "Fashion",

        SubcatName: "Womens",

        innersubcatName: "Dresses",

        rating: 4.7,

        discount: 24,


        variants: createVariants(
            [
                {
                    options: {
                        Size: "S",
                        Color: "Blue Floral"
                    }
                },

                {
                    options: {
                        Size: "M",
                        Color: "Pink Floral"
                    }
                },

                {
                    options: {
                        Size: "L",
                        Color: "White Floral"
                    }
                }
            ],

            "FLORAL-DRESS",

            1899,

            [
                img("photo-1515372039744-b8f02a3ae446"),
                img("photo-1496747611176-843222e1e57c")
            ]
        )
    },



    {
        name: "Elegant Party Wear Maxi Dress",

        images: [
            img("photo-1566174053879-31528523f8ae"),
            img("photo-1595777457583-95e059d581b8"),
            img("photo-1515372039744-b8f02a3ae446"),
            img("photo-1496747611176-843222e1e57c")
        ],


        brand: "Aurelia",

        description:
            "Premium maxi dress with flowing silhouette designed for festive occasions and evening events.",


        price: 2999,

        oldPrice: 3999,


        catName: "Fashion",

        SubcatName: "Womens",

        innersubcatName: "Dresses",


        rating: 4.8,

        discount: 25,


        variants: createVariants(
            [
                {
                    options: {
                        Size: "S",
                        Color: "Black"
                    }
                },

                {
                    options: {
                        Size: "M",
                        Color: "Wine"
                    }
                },

                {
                    options: {
                        Size: "L",
                        Color: "Green"
                    }
                }
            ],


            "MAXI-DRESS",

            2999,

            [
                img("photo-1566174053879-31528523f8ae"),
                img("photo-1595777457583-95e059d581b8")
            ]
        )
    },



    {
        name: "Casual Cotton Shirt Dress",

        images: [
            img("photo-1496747611176-843222e1e57c"),
            img("photo-1515372039744-b8f02a3ae446"),
            img("photo-1566174053879-31528523f8ae"),
            img("photo-1595777457583-95e059d581b8")
        ],


        brand: "Allen Solly",

        description:
            "Comfortable cotton shirt dress with a modern casual look for everyday wear.",


        price: 1599,

        oldPrice: 2199,


        catName: "Fashion",

        SubcatName: "Womens",

        innersubcatName: "Dresses",


        rating: 4.5,

        discount: 27,


        variants: createVariants(
            [
                {
                    options: {
                        Size: "S",
                        Color: "Yellow"
                    }
                },

                {
                    options: {
                        Size: "M",
                        Color: "Blue"
                    }
                },

                {
                    options: {
                        Size: "XL",
                        Color: "White"
                    }
                }
            ],

            "SHIRT-DRESS",

            1599,

            [
                img("photo-1496747611176-843222e1e57c"),
                img("photo-1515372039744-b8f02a3ae446")
            ]
        )
    },




    /* ===========================
            WOMEN TOPS
       =========================== */


    {
        name: "Premium Ribbed Casual Top",

        images: [
            img("photo-1434389677669-e08b4cac3105"),
            img("photo-1485968579580-b6d095142e6e"),
            img("photo-1506629905607-d0f4c0a7b6b8"),
            img("photo-1485230895905-ec40ba36b9bc")
        ],


        brand: "H&M",

        description:
            "Soft ribbed casual top with comfortable stretch fabric and modern styling.",


        price: 899,

        oldPrice: 1299,


        catName: "Fashion",

        SubcatName: "Womens",

        innersubcatName: "Tops",


        rating: 4.6,

        discount: 30,


        variants: createVariants(
            [
                {
                    options: {
                        Size: "S",
                        Color: "White"
                    }
                },

                {
                    options: {
                        Size: "M",
                        Color: "Black"
                    }
                },

                {
                    options: {
                        Size: "L",
                        Color: "Pink"
                    }
                }
            ],

            "RIBBED-TOP",

            899,

            [
                img("photo-1434389677669-e08b4cac3105"),
                img("photo-1485968579580-b6d095142e6e")
            ]
        )
    },



    {
        name: "Women's Printed Casual Top",

        images: [
            img("photo-1485968579580-b6d095142e6e"),
            img("photo-1434389677669-e08b4cac3105"),
            img("photo-1485230895905-ec40ba36b9bc"),
            img("photo-1506629905607-d0f4c0a7b6b8")
        ],


        brand: "FabAlley",

        description:
            "Trendy printed top with lightweight fabric suitable for casual and office wear.",


        price: 1199,

        oldPrice: 1699,


        catName: "Fashion",

        SubcatName: "Womens",

        innersubcatName: "Tops",


        rating: 4.4,

        discount: 29,


        variants: createVariants(
            [
                {
                    options: {
                        Size: "S",
                        Color: "Blue Print"
                    }
                },

                {
                    options: {
                        Size: "M",
                        Color: "Red Print"
                    }
                },

                {
                    options: {
                        Size: "L",
                        Color: "White Print"
                    }
                }
            ],

            "PRINTED-TOP",

            1199,

            [
                img("photo-1485968579580-b6d095142e6e"),
                img("photo-1434389677669-e08b4cac3105")
            ]
        )
    },



    {
        name: "Office Wear Formal Top",

        images: [
            img("photo-1506629905607-d0f4c0a7b6b8"),
            img("photo-1434389677669-e08b4cac3105"),
            img("photo-1485230895905-ec40ba36b9bc"),
            img("photo-1485968579580-b6d095142e6e")
        ],


        brand: "Van Heusen",

        description:
            "Elegant formal top designed for professional office outfits.",


        price: 1399,

        oldPrice: 1899,


        catName: "Fashion",

        SubcatName: "Womens",

        innersubcatName: "Tops",


        rating: 4.7,

        discount: 26,


        variants: createVariants(
            [
                {
                    options: {
                        Size: "S",
                        Color: "White"
                    }
                },

                {
                    options: {
                        Size: "M",
                        Color: "Beige"
                    }
                },

                {
                    options: {
                        Size: "L",
                        Color: "Black"
                    }
                }
            ],

            "FORMAL-TOP",

            1399,

            [
                img("photo-1506629905607-d0f4c0a7b6b8"),
                img("photo-1434389677669-e08b4cac3105")
            ]
        )
    },



    /* ===========================
            WOMEN JEANS
       =========================== */


    {
        name: "High Rise Skinny Fit Jeans",

        images: [
            img("photo-1541099649105-f69ad21f3246"),
            img("photo-1584370848010-d7fe6bc767ec"),
            img("photo-1475178626620-a4d0740d3c8c"),
            img("photo-1594938298603-c8148c4dae35")
        ],

        brand: "Levi's",

        description:
            "Classic high rise skinny jeans with stretch denim for all-day comfort.",


        price: 1999,

        oldPrice: 2999,


        catName: "Fashion",

        SubcatName: "Womens",

        innersubcatName: "Jeans",


        rating: 4.8,

        discount: 33,


        variants: createVariants(
            [
                {
                    options: {
                        Size: "28",
                        Color: "Blue"
                    }
                },

                {
                    options: {
                        Size: "30",
                        Color: "Black"
                    }
                },

                {
                    options: {
                        Size: "32",
                        Color: "Grey"
                    }
                }
            ],


            "SKINNY-JEANS",

            1999,

            [
                img("photo-1541099649105-f69ad21f3246"),
                img("photo-1584370848010-d7fe6bc767ec")
            ]
        )
    },



    {
        name: "Wide Leg Denim Jeans",

        images: [
            img("photo-1584370848010-d7fe6bc767ec"),
            img("photo-1541099649105-f69ad21f3246"),
            img("photo-1475178626620-a4d0740d3c8c"),
            img("photo-1594938298603-c8148c4dae35")
        ],


        brand: "Wrangler",

        description:
            "Relaxed wide leg denim jeans with modern street fashion styling.",


        price: 2299,

        oldPrice: 3299,


        catName: "Fashion",

        SubcatName: "Womens",

        innersubcatName: "Jeans",


        rating: 4.6,

        discount: 30,


        variants: createVariants(
            [
                {
                    options: {
                        Size: "28",
                        Color: "Light Blue"
                    }
                },

                {
                    options: {
                        Size: "30",
                        Color: "Dark Blue"
                    }
                },

                {
                    options: {
                        Size: "32",
                        Color: "Black"
                    }
                }
            ],


            "WIDE-JEANS",

            2299,

            [
                img("photo-1584370848010-d7fe6bc767ec"),
                img("photo-1541099649105-f69ad21f3246")
            ]
        )
    },



    {
        name: "Classic Straight Fit Jeans",

        images: [
            img("photo-1475178626620-a4d0740d3c8c"),
            img("photo-1541099649105-f69ad21f3246"),
            img("photo-1584370848010-d7fe6bc767ec"),
            img("photo-1594938298603-c8148c4dae35")
        ],


        brand: "Lee",

        description:
            "Straight fit denim jeans with timeless design and durable fabric.",


        price: 1899,

        oldPrice: 2599,


        catName: "Fashion",

        SubcatName: "Womens",

        innersubcatName: "Jeans",


        rating: 4.5,

        discount: 27,


        variants: createVariants(
            [
                {
                    options: {
                        Size: "28",
                        Color: "Blue"
                    }
                },

                {
                    options: {
                        Size: "30",
                        Color: "Indigo"
                    }
                },

                {
                    options: {
                        Size: "32",
                        Color: "Black"
                    }
                }
            ],

            "STRAIGHT-JEANS",

            1899,

            [
                img("photo-1475178626620-a4d0740d3c8c"),
                img("photo-1541099649105-f69ad21f3246")
            ]
        )
    },


    /* ===========================
            MEN FOOTWEAR
       =========================== */


    {
        name: "Premium Leather Formal Shoes",

        images: [
            img("photo-1614252235316-8c857d38b5f4"),
            img("photo-1543163521-1bf539c55dd2"),
            img("photo-1616401784845-180882ba9ba8"),
            img("photo-1514989940723-e8e51635b782")
        ],

        brand: "Hush Puppies",

        description:
            "Premium leather formal shoes with cushioned sole and elegant design for office and formal occasions.",

        price: 2999,

        oldPrice: 3999,

        catName: "Fashion",

        SubcatName: "Footwear",

        innersubcatName: "Men's Footwear",

        rating: 4.7,

        discount: 25,


        variants: createVariants(
            [
                {
                    options: {
                        Size: "8",
                        Color: "Black"
                    }
                },

                {
                    options: {
                        Size: "9",
                        Color: "Brown"
                    }
                },

                {
                    options: {
                        Size: "10",
                        Color: "Black"
                    }
                }
            ],

            "FORMAL-SHOES",

            2999,

            [
                img("photo-1614252235316-8c857d38b5f4"),
                img("photo-1543163521-1bf539c55dd2")
            ]
        )
    },




    {
        name: "Running Sports Shoes",

        images: [
            img("photo-1542291026-7eec264c27ff"),
            img("photo-1600185365483-26d7a4cc7519"),
            img("photo-1560769629-975ec94e6a86"),
            img("photo-1539185441755-769473a23570")
        ],


        brand: "Nike",

        description:
            "Lightweight running shoes with breathable mesh upper and responsive cushioning.",


        price: 4999,

        oldPrice: 6999,


        catName: "Fashion",

        SubcatName: "Footwear",

        innersubcatName: "Men's Footwear",


        rating: 4.8,

        discount: 28,


        variants: createVariants(
            [
                {
                    options: {
                        Size: "8",
                        Color: "Black"
                    }
                },

                {
                    options: {
                        Size: "9",
                        Color: "White"
                    }
                },

                {
                    options: {
                        Size: "10",
                        Color: "Blue"
                    }
                }
            ],

            "RUNNING-SHOES",

            4999,

            [
                img("photo-1542291026-7eec264c27ff"),
                img("photo-1600185365483-26d7a4cc7519")
            ]
        )
    },




    {
        name: "Casual Sneakers",

        images: [
            img("photo-1560769629-975ec94e6a86"),
            img("photo-1542291026-7eec264c27ff"),
            img("photo-1600185365483-26d7a4cc7519"),
            img("photo-1539185441755-769473a23570")
        ],


        brand: "Puma",

        description:
            "Everyday casual sneakers with stylish design and comfortable sole.",


        price: 2499,

        oldPrice: 3499,


        catName: "Fashion",

        SubcatName: "Footwear",

        innersubcatName: "Men's Footwear",


        rating: 4.5,

        discount: 29,


        variants: createVariants(
            [
                {
                    options: {
                        Size: "7",
                        Color: "White"
                    }
                },

                {
                    options: {
                        Size: "9",
                        Color: "Grey"
                    }
                },

                {
                    options: {
                        Size: "10",
                        Color: "Black"
                    }
                }
            ],

            "CASUAL-SNEAKER",

            2499,

            [
                img("photo-1560769629-975ec94e6a86"),
                img("photo-1542291026-7eec264c27ff")
            ]
        )
    },




    /* ===========================
            WOMEN FOOTWEAR
       =========================== */


    {
        name: "Women's Premium Heels",

        images: [
            img("photo-1543163521-1bf539c55dd2"),
            img("photo-1515347619252-60a4bf4fff4f"),
            img("photo-1562183241-b937e95585b6"),
            img("photo-1603487742131-4160ec999306")
        ],


        brand: "Metro",

        description:
            "Elegant women's heels designed for parties, weddings and formal occasions.",


        price: 1999,

        oldPrice: 2999,


        catName: "Fashion",

        SubcatName: "Footwear",

        innersubcatName: "Women's Footwear",


        rating: 4.6,

        discount: 33,


        variants: createVariants(
            [
                {
                    options: {
                        Size: "5",
                        Color: "Black"
                    }
                },

                {
                    options: {
                        Size: "6",
                        Color: "Red"
                    }
                },

                {
                    options: {
                        Size: "7",
                        Color: "Beige"
                    }
                }
            ],

            "WOMEN-HEELS",

            1999,

            [
                img("photo-1543163521-1bf539c55dd2"),
                img("photo-1515347619252-60a4bf4fff4f")
            ]
        )
    },




    {
        name: "Women's Casual Sneakers",

        images: [
            img("photo-1595950653106-6c9ebd614d3a"),
            img("photo-1460353581641-37baddab0fa2"),
            img("photo-1549298916-b41d501d3772"),
            img("photo-1495555961986-6d4c1ecb7be3")
        ],


        brand: "Adidas",

        description:
            "Comfortable casual sneakers with modern styling for everyday outfits.",


        price: 2799,

        oldPrice: 3999,


        catName: "Fashion",

        SubcatName: "Footwear",

        innersubcatName: "Women's Footwear",


        rating: 4.7,

        discount: 30,


        variants: createVariants(
            [
                {
                    options: {
                        Size: "5",
                        Color: "White"
                    }
                },

                {
                    options: {
                        Size: "6",
                        Color: "Pink"
                    }
                },

                {
                    options: {
                        Size: "7",
                        Color: "Black"
                    }
                }
            ],

            "WOMEN-SNEAKER",

            2799,

            [
                img("photo-1595950653106-6c9ebd614d3a"),
                img("photo-1460353581641-37baddab0fa2")
            ]
        )
    },




    {
        name: "Women's Flat Sandals",

        images: [
            img("photo-1603487742131-4160ec999306"),
            img("photo-1515347619252-60a4bf4fff4f"),
            img("photo-1562183241-b937e95585b6"),
            img("photo-1543163521-1bf539c55dd2")
        ],


        brand: "Bata",

        description:
            "Comfortable flat sandals with stylish design suitable for daily wear.",


        price: 999,

        oldPrice: 1499,


        catName: "Fashion",

        SubcatName: "Footwear",

        innersubcatName: "Women's Footwear",


        rating: 4.4,

        discount: 33,


        variants: createVariants(
            [
                {
                    options: {
                        Size: "5",
                        Color: "Brown"
                    }
                },

                {
                    options: {
                        Size: "6",
                        Color: "Black"
                    }
                },

                {
                    options: {
                        Size: "7",
                        Color: "Tan"
                    }
                }
            ],

            "WOMEN-SANDAL",

            999,

            [
                img("photo-1603487742131-4160ec999306"),
                img("photo-1515347619252-60a4bf4fff4f")
            ]
        )
    },


    /* ===========================
            ELECTRONICS
       =========================== */


    /* ===========================
            SMARTPHONES
       =========================== */


    {
        name: "Galaxy Ultra Pro Smartphone",

        images: [
            img("photo-1511707171634-5f897ff02aa9"),
            img("photo-1598327105666-5b89351aff97"),
            img("photo-1605236453806-6ff36851218e"),
            img("photo-1510557880182-3d4d3cba35a5")
        ],

        brand: "Samsung",

        description:
            "Flagship smartphone with powerful processor, AMOLED display, professional camera system and long-lasting battery.",


        price: 69999,

        oldPrice: 79999,


        catName: "Electronics",

        SubcatName: "Mobile Accessories",

        innersubcatName: "Smartphones",


        rating: 4.8,

        discount: 12,


        variants: [
            {
                options: {
                    RAM: "12GB",
                    Storage: "256GB",
                    Color: "Black"
                },

                sku: "GALAXY-ULTRA-256-BLK",

                price: 69999,

                stock: 35,

                images: [
                    img("photo-1511707171634-5f897ff02aa9"),
                    img("photo-1598327105666-5b89351aff97")
                ]
            },


            {
                options: {
                    RAM: "12GB",
                    Storage: "512GB",
                    Color: "Silver"
                },

                sku: "GALAXY-ULTRA-512-SLV",

                price: 79999,

                stock: 20,

                images: [
                    img("photo-1605236453806-6ff36851218e"),
                    img("photo-1510557880182-3d4d3cba35a5")
                ]
            }
        ]

    },




    {
        name: "Pixel Pro AI Smartphone",

        images: [
            img("photo-1598327105666-5b89351aff97"),
            img("photo-1511707171634-5f897ff02aa9"),
            img("photo-1510557880182-3d4d3cba35a5"),
            img("photo-1605236453806-6ff36851218e")
        ],


        brand: "Google",

        description:
            "AI-powered smartphone featuring advanced camera processing, clean Android experience and premium OLED display.",


        price: 59999,

        oldPrice: 69999,


        catName: "Electronics",

        SubcatName: "Mobile Accessories",

        innersubcatName: "Smartphones",


        rating: 4.7,

        discount: 14,


        variants: [
            {
                options: {
                    RAM: "8GB",
                    Storage: "128GB",
                    Color: "Obsidian"
                },

                sku: "PIXEL-PRO-128",

                price: 59999,

                stock: 25,

                images: [
                    img("photo-1598327105666-5b89351aff97"),
                    img("photo-1511707171634-5f897ff02aa9")
                ]
            },


            {
                options: {
                    RAM: "12GB",
                    Storage: "256GB",
                    Color: "Porcelain"
                },

                sku: "PIXEL-PRO-256",

                price: 67999,

                stock: 15,

                images: [
                    img("photo-1510557880182-3d4d3cba35a5"),
                    img("photo-1605236453806-6ff36851218e")
                ]
            }
        ]

    },




    {
        name: "OnePlus Performance 5G Smartphone",

        images: [
            img("photo-1510557880182-3d4d3cba35a5"),
            img("photo-1605236453806-6ff36851218e"),
            img("photo-1598327105666-5b89351aff97"),
            img("photo-1511707171634-5f897ff02aa9")
        ],


        brand: "OnePlus",

        description:
            "High-performance 5G smartphone with fast charging, smooth display and flagship-level performance.",


        price: 44999,

        oldPrice: 54999,


        catName: "Electronics",

        SubcatName: "Mobile Accessories",

        innersubcatName: "Smartphones",


        rating: 4.6,

        discount: 18,


        variants: [
            {
                options: {
                    RAM: "8GB",
                    Storage: "128GB",
                    Color: "Blue"
                },

                sku: "ONEPLUS-128-BLUE",

                price: 44999,

                stock: 40,

                images: [
                    img("photo-1510557880182-3d4d3cba35a5"),
                    img("photo-1605236453806-6ff36851218e")
                ]
            },


            {
                options: {
                    RAM: "16GB",
                    Storage: "256GB",
                    Color: "Black"
                },

                sku: "ONEPLUS-256-BLACK",

                price: 52999,

                stock: 18,

                images: [
                    img("photo-1598327105666-5b89351aff97"),
                    img("photo-1511707171634-5f897ff02aa9")
                ]
            }
        ]

    },




    /* ===========================
            MOBILE ACCESSORIES
       =========================== */


    {
        name: "Wireless Fast Charging Power Bank",

        images: [
            img("photo-1609592424845-5b4d5a6c7e7f"),
            img("photo-1585338107529-13afc5f02586"),
            img("photo-1609091839311-d5365f9ff1c5"),
            img("photo-1622445275576-721325763afe")
        ],

        brand: "Anker",

        description:
            "High capacity power bank with fast charging support and compact portable design.",


        price: 2499,

        oldPrice: 3499,


        catName: "Electronics",

        SubcatName: "Mobile Accessories",

        innersubcatName: "Accessories",


        rating: 4.7,

        discount: 28,


        variants: [
            {
                options: {
                    Capacity: "10000mAh",
                    Color: "Black"
                },

                sku: "POWERBANK-10K-BLK",

                price: 2499,

                stock: 50,

                images: [
                    img("photo-1609592424845-5b4d5a6c7e7f"),
                    img("photo-1585338107529-13afc5f02586")
                ]
            },


            {
                options: {
                    Capacity: "20000mAh",
                    Color: "Blue"
                },

                sku: "POWERBANK-20K-BLU",

                price: 3499,

                stock: 30,

                images: [
                    img("photo-1609091839311-d5365f9ff1c5"),
                    img("photo-1622445275576-721325763afe")
                ]
            }
        ]

    },




    {
        name: "Premium Wireless Earbuds",

        images: [
            img("photo-1590658268037-6bf12165a8df"),
            img("photo-1606220945770-b5b6c2c55bf1"),
            img("photo-1588423771073-b8903fbb85b5"),
            img("photo-1600294037681-c80b4cb5b434")
        ],


        brand: "Sony",

        description:
            "True wireless earbuds with active noise cancellation and immersive sound quality.",


        price: 4999,

        oldPrice: 6999,


        catName: "Electronics",

        SubcatName: "Mobile Accessories",

        innersubcatName: "Accessories",


        rating: 4.8,

        discount: 28,


        variants: [
            {
                options: {
                    Color: "Black",
                    Connectivity: "Bluetooth 5.3"
                },

                sku: "EARBUDS-BLK",

                price: 4999,

                stock: 45,

                images: [
                    img("photo-1590658268037-6bf12165a8df"),
                    img("photo-1606220945770-b5b6c2c55bf1")
                ]
            }
        ]

    },



    /* ===========================
            LAPTOPS
       =========================== */


    {
        name: "MacBook Air M Series Laptop",

        images: [
            img("photo-1517336714731-489689fd1ca8"),
            img("photo-1496181133206-80ce9b88a853"),
            img("photo-1512941937669-90a1b58e7e9c"),
            img("photo-1541807084-5c52b6b3adef")
        ],

        brand: "Apple",

        description:
            "Premium lightweight laptop with powerful performance, stunning display and all-day battery life.",

        price: 89999,

        oldPrice: 99999,


        catName: "Electronics",

        SubcatName: "Computer Accessories",

        innersubcatName: "Laptops",


        rating: 4.9,

        discount: 10,


        variants: [
            {
                options: {
                    RAM: "8GB",
                    Storage: "256GB SSD",
                    Color: "Silver"
                },

                sku: "MACBOOK-AIR-256",

                price: 89999,

                stock: 25,

                images: [
                    img("photo-1517336714731-489689fd1ca8"),
                    img("photo-1496181133206-80ce9b88a853")
                ]
            },


            {
                options: {
                    RAM: "16GB",
                    Storage: "512GB SSD",
                    Color: "Space Grey"
                },

                sku: "MACBOOK-AIR-512",

                price: 109999,

                stock: 12,

                images: [
                    img("photo-1512941937669-90a1b58e7e9c"),
                    img("photo-1541807084-5c52b6b3adef")
                ]
            }
        ]

    },




    {
        name: "Premium Gaming Laptop",

        images: [
            img("photo-1603302576837-37561b2e2302"),
            img("photo-1593642702821-c8da6771f0c6"),
            img("photo-1588872657578-7efd1f1555ed"),
            img("photo-1525547719571-a2d4ac8945e2")
        ],


        brand: "ASUS",

        description:
            "High performance gaming laptop with dedicated graphics, fast refresh display and powerful processor.",


        price: 79999,

        oldPrice: 94999,


        catName: "Electronics",

        SubcatName: "Computer Accessories",

        innersubcatName: "Laptops",


        rating: 4.7,

        discount: 16,


        variants: [
            {
                options: {
                    RAM: "16GB",
                    Storage: "512GB SSD",
                    Processor: "Intel i7",
                    Color: "Black"
                },

                sku: "GAMING-LAPTOP-I7",

                price: 79999,

                stock: 18,

                images: [
                    img("photo-1603302576837-37561b2e2302"),
                    img("photo-1593642702821-c8da6771f0c6")
                ]
            },


            {
                options: {
                    RAM: "32GB",
                    Storage: "1TB SSD",
                    Processor: "Intel i9",
                    Color: "Grey"
                },

                sku: "GAMING-LAPTOP-I9",

                price: 109999,

                stock: 8,

                images: [
                    img("photo-1588872657578-7efd1f1555ed"),
                    img("photo-1525547719571-a2d4ac8945e2")
                ]
            }
        ]

    },




    {
        name: "UltraBook Professional Laptop",

        images: [
            img("photo-1496181133206-80ce9b88a853"),
            img("photo-1517336714731-489689fd1ca8"),
            img("photo-1541807084-5c52b6b3adef"),
            img("photo-1593642632823-8f785ba67e45")
        ],

        brand: "Lenovo",

        description:
            "Slim professional laptop designed for students and working professionals with excellent portability.",


        price: 64999,

        oldPrice: 74999,


        catName: "Electronics",

        SubcatName: "Computer Accessories",

        innersubcatName: "Laptops",


        rating: 4.6,

        discount: 13,


        variants: [
            {
                options: {
                    RAM: "16GB",
                    Storage: "512GB SSD",
                    Processor: "Intel i5",
                    Color: "Silver"
                },

                sku: "ULTRABOOK-I5",

                price: 64999,

                stock: 22,

                images: [
                    img("photo-1496181133206-80ce9b88a853"),
                    img("photo-1517336714731-489689fd1ca8")
                ]
            }
        ]

    },




    /* ===========================
            COMPUTER PERIPHERALS
       =========================== */


    {
        name: "Mechanical RGB Gaming Keyboard",

        images: [
            img("photo-1587829741301-dc798b83add3"),
            img("photo-1595225476474-87563907a212"),
            img("photo-1618384887929-16ec33fab9ef"),
            img("photo-1587202372775-e229f172b9d7")
        ],

        brand: "Logitech",

        description:
            "Mechanical gaming keyboard with RGB lighting and responsive switches.",


        price: 4999,

        oldPrice: 6999,


        catName: "Electronics",

        SubcatName: "Computer Accessories",

        innersubcatName: "Peripherals",


        rating: 4.7,

        discount: 28,


        variants: [
            {
                options: {
                    Type: "Mechanical",
                    Connectivity: "Wired"
                },

                sku: "RGB-KEYBOARD",

                price: 4999,

                stock: 35,

                images: [
                    img("photo-1587829741301-dc798b83add3"),
                    img("photo-1595225476474-87563907a212")
                ]
            }
        ]

    },




    {
        name: "Wireless Ergonomic Mouse",

        images: [
            img("photo-1527814050087-3793815479db"),
            img("photo-1615663245857-ac93bb7c39e7"),
            img("photo-1527864550417-7fd91fc51a46"),
            img("photo-1563297007-0686b7003af7")
        ],

        brand: "Logitech",

        description:
            "Comfortable wireless mouse with precise tracking and long battery life.",


        price: 1999,

        oldPrice: 2999,


        catName: "Electronics",

        SubcatName: "Computer Accessories",

        innersubcatName: "Peripherals",


        rating: 4.5,

        discount: 33,


        variants: [
            {
                options: {
                    Connectivity: "Wireless",
                    Color: "Black"
                },

                sku: "WIRELESS-MOUSE",

                price: 1999,

                stock: 60,

                images: [
                    img("photo-1527814050087-3793815479db"),
                    img("photo-1527864550417-7fd91fc51a46")
                ]
            }
        ]

    },




    /* ===========================
            HEADPHONES
       =========================== */


    {
        name: "Premium Noise Cancelling Headphones",

        images: [
            img("photo-1505740420928-5e560c06d30e"),
            img("photo-1546435770-a3e426bf472b"),
            img("photo-1484704849700-f032a568e944"),
            img("photo-1524678606370-a47ad25cb82a")
        ],


        brand: "Sony",

        description:
            "Over-ear wireless headphones with active noise cancellation and premium sound quality.",


        price: 8999,

        oldPrice: 11999,


        catName: "Electronics",

        SubcatName: "Audio",

        innersubcatName: "Headphones",


        rating: 4.8,

        discount: 25,


        variants: [
            {
                options: {
                    Connectivity: "Bluetooth",
                    Color: "Black"
                },

                sku: "SONY-ANC-BLK",

                price: 8999,

                stock: 30,

                images: [
                    img("photo-1505740420928-5e560c06d30e"),
                    img("photo-1546435770-a3e426bf472b")
                ]
            }
        ]

    },




    {
        name: "Studio Wireless Headphones",

        images: [
            img("photo-1484704849700-f032a568e944"),
            img("photo-1524678606370-a47ad25cb82a"),
            img("photo-1505740420928-5e560c06d30e"),
            img("photo-1546435770-a3e426bf472b")
        ],


        brand: "JBL",

        description:
            "Studio-quality wireless headphones delivering deep bass and clear vocals.",


        price: 5999,

        oldPrice: 7999,


        catName: "Electronics",

        SubcatName: "Audio",

        innersubcatName: "Headphones",


        rating: 4.6,

        discount: 25,


        variants: [
            {
                options: {
                    Connectivity: "Bluetooth 5.2",
                    Color: "Blue"
                },

                sku: "JBL-STUDIO-BLU",

                price: 5999,

                stock: 40,

                images: [
                    img("photo-1484704849700-f032a568e944"),
                    img("photo-1524678606370-a47ad25cb82a")
                ]
            }
        ]

    },


    /* ===========================
            SPEAKERS
       =========================== */


    {
        name: "Premium Bluetooth Portable Speaker",

        images: [
            img("photo-1608043152269-423dbba4e7e1"),
            img("photo-1589003077984-894e133dabab"),
            img("photo-1545454675-3531b543be5d"),
            img("photo-1602874801006-e26b9d6b9f72")
        ],

        brand: "JBL",

        description:
            "Portable Bluetooth speaker with powerful audio output, deep bass and long battery backup.",


        price: 4999,

        oldPrice: 6999,


        catName: "Electronics",

        SubcatName: "Audio",

        innersubcatName: "Speakers",


        rating: 4.8,

        discount: 28,


        variants: [
            {
                options: {
                    Connectivity: "Bluetooth 5.3",
                    Color: "Black",
                    Output: "20W"
                },

                sku: "JBL-SPEAKER-BLK",

                price: 4999,

                stock: 35,

                images: [
                    img("photo-1608043152269-423dbba4e7e1"),
                    img("photo-1589003077984-894e133dabab")
                ]
            },


            {
                options: {
                    Connectivity: "Bluetooth 5.3",
                    Color: "Blue",
                    Output: "20W"
                },

                sku: "JBL-SPEAKER-BLU",

                price: 4999,

                stock: 25,

                images: [
                    img("photo-1545454675-3531b543be5d"),
                    img("photo-1602874801006-e26b9d6b9f72")
                ]
            }
        ]

    },




    {
        name: "Smart Home Voice Speaker",

        images: [
            img("photo-1589492477829-5e65395b66cc"),
            img("photo-1543512214-318c7553f230"),
            img("photo-1608043152269-423dbba4e7e1"),
            img("photo-1589003077984-894e133dabab")
        ],


        brand: "Amazon",

        description:
            "Smart speaker with voice assistant, smart home controls and premium audio experience.",


        price: 4499,

        oldPrice: 5999,


        catName: "Electronics",

        SubcatName: "Audio",

        innersubcatName: "Speakers",


        rating: 4.6,

        discount: 25,


        variants: [
            {
                options: {
                    Connectivity: "WiFi",
                    Color: "Charcoal"
                },

                sku: "SMART-SPEAKER-CHAR",

                price: 4499,

                stock: 40,

                images: [
                    img("photo-1589492477829-5e65395b66cc"),
                    img("photo-1543512214-318c7553f230")
                ]
            }
        ]

    },




    {
        name: "Premium Soundbar System",

        images: [
            img("photo-1545454675-3531b543be5d"),
            img("photo-1602874801006-e26b9d6b9f72"),
            img("photo-1589003077984-894e133dabab"),
            img("photo-1608043152269-423dbba4e7e1")
        ],


        brand: "Sony",

        description:
            "Home theatre soundbar with immersive surround sound and wireless subwoofer support.",


        price: 12999,

        oldPrice: 16999,


        catName: "Electronics",

        SubcatName: "Audio",

        innersubcatName: "Speakers",


        rating: 4.7,

        discount: 24,


        variants: [
            {
                options: {
                    Channels: "5.1",
                    Connectivity: "Bluetooth",
                    Color: "Black"
                },

                sku: "SONY-SOUNDBAR-51",

                price: 12999,

                stock: 15,

                images: [
                    img("photo-1545454675-3531b543be5d"),
                    img("photo-1602874801006-e26b9d6b9f72")
                ]
            }
        ]

    },


    /* ===========================
            BEAUTY
       =========================== */


    /* ===========================
            FACE CARE
       =========================== */


    {
        name: "Vitamin C Brightening Face Serum",

        images: [
            img("photo-1620916566398-39f1143ab7be"),
            img("photo-1556228578-8c89e6adf883"),
            img("photo-1608248543803-ba4f8c70ae0b"),
            img("photo-1612817288484-6f916006741a")
        ],

        brand: "The Ordinary",

        description:
            "Lightweight vitamin C serum that helps improve skin brightness and provides antioxidant protection.",


        price: 899,

        oldPrice: 1299,


        catName: "Beauty",

        SubcatName: "Skincare",

        innersubcatName: "Face Care",


        rating: 4.7,

        discount: 30,


        variants: [
            {
                options: {
                    SkinType: "All Skin Types",
                    Size: "30ml"
                },

                sku: "VITC-SERUM-30",

                price: 899,

                stock: 50,

                images: [
                    img("photo-1620916566398-39f1143ab7be"),
                    img("photo-1556228578-8c89e6adf883")
                ]
            },


            {
                options: {
                    SkinType: "Sensitive Skin",
                    Size: "60ml"
                },

                sku: "VITC-SERUM-60",

                price: 1399,

                stock: 25,

                images: [
                    img("photo-1608248543803-ba4f8c70ae0b"),
                    img("photo-1612817288484-6f916006741a")
                ]
            }
        ]

    },




    {
        name: "Hydrating Aloe Vera Face Gel",

        images: [
            img("photo-1612817288484-6f916006741a"),
            img("photo-1608248543803-ba4f8c70ae0b"),
            img("photo-1556228578-8c89e6adf883"),
            img("photo-1620916566398-39f1143ab7be")
        ],


        brand: "Mamaearth",

        description:
            "Refreshing aloe vera face gel providing deep hydration and soothing care for the skin.",


        price: 399,

        oldPrice: 599,


        catName: "Beauty",

        SubcatName: "Skincare",

        innersubcatName: "Face Care",


        rating: 4.5,

        discount: 33,


        variants: [
            {
                options: {
                    SkinType: "Dry Skin",
                    Size: "150ml"
                },

                sku: "ALOE-GEL-150",

                price: 399,

                stock: 80,

                images: [
                    img("photo-1612817288484-6f916006741a"),
                    img("photo-1608248543803-ba4f8c70ae0b")
                ]
            },


            {
                options: {
                    SkinType: "All Skin Types",
                    Size: "300ml"
                },

                sku: "ALOE-GEL-300",

                price: 699,

                stock: 45,

                images: [
                    img("photo-1556228578-8c89e6adf883"),
                    img("photo-1620916566398-39f1143ab7be")
                ]
            }
        ]

    },




    {
        name: "Gentle Foaming Face Cleanser",

        images: [
            img("photo-1556228578-8c89e6adf883"),
            img("photo-1612817288484-6f916006741a"),
            img("photo-1620916566398-39f1143ab7be"),
            img("photo-1608248543803-ba4f8c70ae0b")
        ],


        brand: "Cetaphil",

        description:
            "Dermatologist-tested gentle cleanser suitable for daily face cleansing.",


        price: 549,

        oldPrice: 699,


        catName: "Beauty",

        SubcatName: "Skincare",

        innersubcatName: "Face Care",


        rating: 4.8,

        discount: 21,


        variants: [
            {
                options: {
                    SkinType: "Sensitive Skin",
                    Size: "125ml"
                },

                sku: "CETAPHIL-CLEAN-125",

                price: 549,

                stock: 60,

                images: [
                    img("photo-1556228578-8c89e6adf883"),
                    img("photo-1612817288484-6f916006741a")
                ]
            }
        ]

    },




    /* ===========================
            BODY CARE
       =========================== */


    {
        name: "Shea Butter Body Lotion",

        images: [
            img("photo-1608248543803-ba4f8c70ae0b"),
            img("photo-1556228578-8c89e6adf883"),
            img("photo-1612817288484-6f916006741a"),
            img("photo-1620916566398-39f1143ab7be")
        ],


        brand: "Nivea",

        description:
            "Moisturizing body lotion enriched with shea butter for long-lasting hydration.",


        price: 499,

        oldPrice: 699,


        catName: "Beauty",

        SubcatName: "Skincare",

        innersubcatName: "Body Care",


        rating: 4.6,

        discount: 28,


        variants: [
            {
                options: {
                    Fragrance: "Shea Butter",
                    Size: "400ml"
                },

                sku: "BODY-LOTION-SHEA",

                price: 499,

                stock: 70,

                images: [
                    img("photo-1608248543803-ba4f8c70ae0b"),
                    img("photo-1556228578-8c89e6adf883")
                ]
            },


            {
                options: {
                    Fragrance: "Aloe Vera",
                    Size: "600ml"
                },

                sku: "BODY-LOTION-ALOE",

                price: 699,

                stock: 40,

                images: [
                    img("photo-1612817288484-6f916006741a"),
                    img("photo-1620916566398-39f1143ab7be")
                ]
            }
        ]

    },




    {
        name: "Luxury Body Scrub",

        images: [
            img("photo-1556228578-8c89e6adf883"),
            img("photo-1608248543803-ba4f8c70ae0b"),
            img("photo-1612817288484-6f916006741a"),
            img("photo-1620916566398-39f1143ab7be")
        ],


        brand: "Body Shop",

        description:
            "Exfoliating body scrub that removes dead skin and leaves skin feeling smooth.",


        price: 799,

        oldPrice: 1099,


        catName: "Beauty",

        SubcatName: "Skincare",

        innersubcatName: "Body Care",


        rating: 4.5,

        discount: 27,


        variants: [
            {
                options: {
                    Fragrance: "Coconut",
                    Size: "250ml"
                },

                sku: "BODY-SCRUB-COCO",

                price: 799,

                stock: 35,

                images: [
                    img("photo-1556228578-8c89e6adf883"),
                    img("photo-1608248543803-ba4f8c70ae0b")
                ]
            }
        ]

    },




    {
        name: "Vitamin E Body Oil",

        images: [
            img("photo-1620916566398-39f1143ab7be"),
            img("photo-1608248543803-ba4f8c70ae0b"),
            img("photo-1556228578-8c89e6adf883"),
            img("photo-1612817288484-6f916006741a")
        ],


        brand: "Forest Essentials",

        description:
            "Nourishing body oil with vitamin E formula for smooth and glowing skin.",


        price: 999,

        oldPrice: 1499,


        catName: "Beauty",

        SubcatName: "Skincare",

        innersubcatName: "Body Care",


        rating: 4.7,

        discount: 33,


        variants: [
            {
                options: {
                    Formula: "Vitamin E",
                    Size: "100ml"
                },

                sku: "BODY-OIL-VITE",

                price: 999,

                stock: 30,

                images: [
                    img("photo-1620916566398-39f1143ab7be"),
                    img("photo-1608248543803-ba4f8c70ae0b")
                ]
            }
        ]

    },


    // id="beauty-haircare-part"

    /* ===========================
            HAIRCARE
       =========================== */


    /* ===========================
            SHAMPOO & CONDITIONER
       =========================== */


    {
        name: "Argan Oil Repair Shampoo",

        images: [
            img("photo-1556228720-195a672e8a03"),
            img("photo-1608248543803-ba4f8c70ae0b"),
            img("photo-1612817288484-6f916006741a"),
            img("photo-1620916566398-39f1143ab7be")
        ],


        brand: "L'Oreal Paris",

        description:
            "Repair shampoo enriched with argan oil that helps restore damaged hair and improves smoothness.",


        price: 499,

        oldPrice: 699,


        catName: "Beauty",

        SubcatName: "Haircare",

        innersubcatName: "Shampoo & Conditioner",


        rating: 4.7,

        discount: 28,


        variants: [
            {
                options: {
                    HairType: "Damaged Hair",
                    Size: "340ml"
                },

                sku: "ARGAN-SHAMPOO-340",

                price: 499,

                stock: 65,

                images: [
                    img("photo-1556228720-195a672e8a03"),
                    img("photo-1608248543803-ba4f8c70ae0b")
                ]
            },


            {
                options: {
                    HairType: "Dry Hair",
                    Size: "650ml"
                },

                sku: "ARGAN-SHAMPOO-650",

                price: 799,

                stock: 40,

                images: [
                    img("photo-1612817288484-6f916006741a"),
                    img("photo-1620916566398-39f1143ab7be")
                ]
            }
        ]

    },




    {
        name: "Keratin Smooth Conditioner",

        images: [
            img("photo-1556228578-8c89e6adf883"),
            img("photo-1556228720-195a672e8a03"),
            img("photo-1608248543803-ba4f8c70ae0b"),
            img("photo-1612817288484-6f916006741a")
        ],


        brand: "Tresemme",

        description:
            "Keratin infused conditioner that provides smoothness, shine and frizz control.",


        price: 399,

        oldPrice: 599,


        catName: "Beauty",

        SubcatName: "Haircare",

        innersubcatName: "Shampoo & Conditioner",


        rating: 4.6,

        discount: 33,


        variants: [
            {
                options: {
                    HairType: "Frizzy Hair",
                    Size: "190ml"
                },

                sku: "KERATIN-COND-190",

                price: 399,

                stock: 80,

                images: [
                    img("photo-1556228578-8c89e6adf883"),
                    img("photo-1556228720-195a672e8a03")
                ]
            },


            {
                options: {
                    HairType: "Normal Hair",
                    Size: "580ml"
                },

                sku: "KERATIN-COND-580",

                price: 699,

                stock: 45,

                images: [
                    img("photo-1608248543803-ba4f8c70ae0b"),
                    img("photo-1612817288484-6f916006741a")
                ]
            }
        ]

    },




    {
        name: "Anti Hair Fall Shampoo",

        images: [
            img("photo-1612817288484-6f916006741a"),
            img("photo-1556228720-195a672e8a03"),
            img("photo-1556228578-8c89e6adf883"),
            img("photo-1608248543803-ba4f8c70ae0b")
        ],


        brand: "Mamaearth",

        description:
            "Natural ingredient based shampoo designed to reduce hair fall and strengthen roots.",


        price: 449,

        oldPrice: 649,


        catName: "Beauty",

        SubcatName: "Haircare",

        innersubcatName: "Shampoo & Conditioner",


        rating: 4.5,

        discount: 30,


        variants: [
            {
                options: {
                    HairType: "Weak Hair",
                    Size: "250ml"
                },

                sku: "HAIRFALL-SHAMPOO",

                price: 449,

                stock: 55,

                images: [
                    img("photo-1612817288484-6f916006741a"),
                    img("photo-1556228720-195a672e8a03")
                ]
            }
        ]

    },




    /* ===========================
            HAIR STYLING
       =========================== */


    {
        name: "Professional Hair Styling Wax",

        images: [
            img("photo-1598440947619-2c35fc9aa908"),
            img("photo-1620916566398-39f1143ab7be"),
            img("photo-1556228578-8c89e6adf883"),
            img("photo-1608248543803-ba4f8c70ae0b")
        ],


        brand: "Beardo",

        description:
            "Strong hold hair styling wax for creating modern hairstyles with matte finish.",


        price: 299,

        oldPrice: 499,


        catName: "Beauty",

        SubcatName: "Haircare",

        innersubcatName: "Hair Styling",


        rating: 4.4,

        discount: 40,


        variants: [
            {
                options: {
                    Hold: "Strong",
                    Finish: "Matte",
                    Size: "100g"
                },

                sku: "HAIR-WAX-MATTE",

                price: 299,

                stock: 90,

                images: [
                    img("photo-1598440947619-2c35fc9aa908"),
                    img("photo-1620916566398-39f1143ab7be")
                ]
            }
        ]

    },




    {
        name: "Heat Protection Hair Spray",

        images: [
            img("photo-1598440947619-2c35fc9aa908"),
            img("photo-1608248543803-ba4f8c70ae0b"),
            img("photo-1556228720-195a672e8a03"),
            img("photo-1612817288484-6f916006741a")
        ],


        brand: "Schwarzkopf",

        description:
            "Professional hair spray providing heat protection and long-lasting styling.",


        price: 599,

        oldPrice: 899,


        catName: "Beauty",

        SubcatName: "Haircare",

        innersubcatName: "Hair Styling",


        rating: 4.6,

        discount: 33,


        variants: [
            {
                options: {
                    Hold: "Medium",
                    Size: "200ml"
                },

                sku: "HAIR-SPRAY-200",

                price: 599,

                stock: 45,

                images: [
                    img("photo-1598440947619-2c35fc9aa908"),
                    img("photo-1608248543803-ba4f8c70ae0b")
                ]
            }
        ]

    },




    {
        name: "Curl Defining Hair Cream",

        images: [
            img("photo-1556228720-195a672e8a03"),
            img("photo-1598440947619-2c35fc9aa908"),
            img("photo-1608248543803-ba4f8c70ae0b"),
            img("photo-1612817288484-6f916006741a")
        ],


        brand: "Moroccanoil",

        description:
            "Nourishing styling cream designed to define curls and reduce frizz.",


        price: 999,

        oldPrice: 1399,


        catName: "Beauty",

        SubcatName: "Haircare",

        innersubcatName: "Hair Styling",


        rating: 4.7,

        discount: 28,


        variants: [
            {
                options: {
                    HairType: "Curly Hair",
                    Size: "250ml"
                },

                sku: "CURL-CREAM-250",

                price: 999,

                stock: 25,

                images: [
                    img("photo-1556228720-195a672e8a03"),
                    img("photo-1598440947619-2c35fc9aa908")
                ]
            }
        ]

    },


    /* ===========================
            MAKEUP
       =========================== */


    /* ===========================
            EYES
       =========================== */


    {
        name: "Volume Boost Mascara",

        images: [
            img("photo-1631214540242-5c1b6d4d4b8c"),
            img("photo-1596462502278-27bfdc403348"),
            img("photo-1512496015851-a90fb38ba796"),
            img("photo-1583241800698-9a8f7f5f7b4d")
        ],


        brand: "Maybelline",

        description:
            "Long-lasting mascara that adds volume and definition to eyelashes.",


        price: 499,

        oldPrice: 699,


        catName: "Beauty",

        SubcatName: "Makeup",

        innersubcatName: "Eyes",


        rating: 4.7,

        discount: 28,


        variants: [
            {
                options: {
                    Formula: "Waterproof",
                    Color: "Black",
                    Size: "10ml"
                },

                sku: "MASCARA-BLACK-WP",

                price: 499,

                stock: 80,

                images: [
                    img("photo-1631214540242-5c1b6d4d4b8c"),
                    img("photo-1596462502278-27bfdc403348")
                ]
            }
        ]

    },




    {
        name: "Precision Liquid Eyeliner",

        images: [
            img("photo-1512496015851-a90fb38ba796"),
            img("photo-1631214540242-5c1b6d4d4b8c"),
            img("photo-1596462502278-27bfdc403348"),
            img("photo-1583241800698-9a8f7f5f7b4d")
        ],


        brand: "Lakme",

        description:
            "Highly pigmented liquid eyeliner with smooth application and long wear.",


        price: 299,

        oldPrice: 499,


        catName: "Beauty",

        SubcatName: "Makeup",

        innersubcatName: "Eyes",


        rating: 4.5,

        discount: 40,


        variants: [
            {
                options: {
                    Shade: "Deep Black",
                    Finish: "Matte"
                },

                sku: "EYELINER-BLACK",

                price: 299,

                stock: 100,

                images: [
                    img("photo-1512496015851-a90fb38ba796"),
                    img("photo-1631214540242-5c1b6d4d4b8c")
                ]
            }
        ]

    },




    {
        name: "Professional Eyeshadow Palette",

        images: [
            img("photo-1596462502278-27bfdc403348"),
            img("photo-1583241800698-9a8f7f5f7b4d"),
            img("photo-1512496015851-a90fb38ba796"),
            img("photo-1631214540242-5c1b6d4d4b8c")
        ],


        brand: "Colorbar",

        description:
            "Multi shade eyeshadow palette with highly pigmented colors for everyday and party makeup.",


        price: 1299,

        oldPrice: 1799,


        catName: "Beauty",

        SubcatName: "Makeup",

        innersubcatName: "Eyes",


        rating: 4.6,

        discount: 28,


        variants: [
            {
                options: {
                    Shades: "12 Colors",
                    Finish: "Matte + Shimmer"
                },

                sku: "EYESHADOW-12",

                price: 1299,

                stock: 45,

                images: [
                    img("photo-1596462502278-27bfdc403348"),
                    img("photo-1583241800698-9a8f7f5f7b4d")
                ]
            }
        ]

    },




    /* ===========================
            LIPS
       =========================== */


    {
        name: "Matte Liquid Lipstick",

        images: [
            img("photo-1586495777744-4413f21062fa"),
            img("photo-1591360236480-4ed861025e4c"),
            img("photo-1631730486572-226d1f7b5d08"),
            img("photo-1587017539504-67cfbddac569")
        ],


        brand: "MAC",

        description:
            "Highly pigmented matte liquid lipstick with comfortable long-lasting finish.",


        price: 999,

        oldPrice: 1499,


        catName: "Beauty",

        SubcatName: "Makeup",

        innersubcatName: "Lips",


        rating: 4.8,

        discount: 33,


        variants: [
            {
                options: {
                    Shade: "Ruby Red",
                    Finish: "Matte"
                },

                sku: "LIPSTICK-RUBY",

                price: 999,

                stock: 60,

                images: [
                    img("photo-1586495777744-4413f21062fa"),
                    img("photo-1591360236480-4ed861025e4c")
                ]
            },


            {
                options: {
                    Shade: "Rose Nude",
                    Finish: "Matte"
                },

                sku: "LIPSTICK-NUDE",

                price: 999,

                stock: 50,

                images: [
                    img("photo-1631730486572-226d1f7b5d08"),
                    img("photo-1587017539504-67cfbddac569")
                ]
            }
        ]

    },




    {
        name: "Glossy Lip Gloss",

        images: [
            img("photo-1591360236480-4ed861025e4c"),
            img("photo-1586495777744-4413f21062fa"),
            img("photo-1587017539504-67cfbddac569"),
            img("photo-1631730486572-226d1f7b5d08")
        ],


        brand: "Nykaa",

        description:
            "Hydrating lip gloss that provides glossy shine with smooth application.",


        price: 499,

        oldPrice: 799,


        catName: "Beauty",

        SubcatName: "Makeup",

        innersubcatName: "Lips",


        rating: 4.5,

        discount: 37,


        variants: [
            {
                options: {
                    Shade: "Pink Shine",
                    Finish: "Glossy"
                },

                sku: "LIPGLOSS-PINK",

                price: 499,

                stock: 75,

                images: [
                    img("photo-1591360236480-4ed861025e4c"),
                    img("photo-1586495777744-4413f21062fa")
                ]
            }
        ]

    },




    {
        name: "Nourishing Tinted Lip Balm",

        images: [
            img("photo-1587017539504-67cfbddac569"),
            img("photo-1631730486572-226d1f7b5d08"),
            img("photo-1586495777744-4413f21062fa"),
            img("photo-1591360236480-4ed861025e4c")
        ],


        brand: "Himalaya",

        description:
            "Moisturizing tinted lip balm that keeps lips soft with natural color.",


        price: 199,

        oldPrice: 299,


        catName: "Beauty",

        SubcatName: "Makeup",

        innersubcatName: "Lips",


        rating: 4.4,

        discount: 33,


        variants: [
            {
                options: {
                    Shade: "Cherry",
                    Size: "4.5g"
                },

                sku: "LIPBALM-CHERRY",

                price: 199,

                stock: 120,

                images: [
                    img("photo-1587017539504-67cfbddac569"),
                    img("photo-1631730486572-226d1f7b5d08")
                ]
            }
        ]

    },


    /* ===========================
            BOOKS
       =========================== */


    /* ===========================
            FICTION
       =========================== */


    /* -------- Romance -------- */


    {
        name: "The Love We Never Had",

        images: [
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1512820790803-83ca734da794"),
            img("photo-1532012197267-da84d127e765")
        ],


        brand: "Penguin Random House",

        description:
            "A bestselling romance novel exploring love, relationships and emotional journeys.",


        price: 399,

        oldPrice: 499,


        catName: "Books",

        SubcatName: "Fiction",

        innersubcatName: "Romance",


        rating: 4.6,

        discount: 20,


        variants: [
            {
                options: {
                    Language: "English",
                    Format: "Paperback",
                    Edition: "1st Edition"
                },

                sku: "ROMANCE-BOOK-001",

                price: 399,

                stock: 80,

                images: [
                    img("photo-1544947950-fa07a98d237f"),
                    img("photo-1543002588-bfa74002ed7e")
                ]
            },


            {
                options: {
                    Language: "English",
                    Format: "Hardcover",
                    Edition: "Special Edition"
                },

                sku: "ROMANCE-BOOK-001-HC",

                price: 699,

                stock: 30,

                images: [
                    img("photo-1512820790803-83ca734da794"),
                    img("photo-1532012197267-da84d127e765")
                ]
            }
        ]

    },




    {
        name: "Pride and Prejudice",

        images: [
            img("photo-1532012197267-da84d127e765"),
            img("photo-1512820790803-83ca734da794"),
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1544947950-fa07a98d237f")
        ],


        brand: "Penguin Classics",

        description:
            "Classic romantic literature masterpiece loved by generations of readers.",


        price: 299,

        oldPrice: 399,


        catName: "Books",

        SubcatName: "Fiction",

        innersubcatName: "Romance",


        rating: 4.8,

        discount: 25,


        variants: [
            {
                options: {
                    Language: "English",
                    Format: "Paperback"
                },

                sku: "PRIDE-PREJUDICE",

                price: 299,

                stock: 100,

                images: [
                    img("photo-1532012197267-da84d127e765"),
                    img("photo-1512820790803-83ca734da794")
                ]
            }
        ]

    },




    /* -------- Science Fiction -------- */


    {
        name: "Dune: Science Fiction Epic",

        images: [
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1532012197267-da84d127e765"),
            img("photo-1512820790803-83ca734da794"),
            img("photo-1543002588-bfa74002ed7e")
        ],


        brand: "Ace Books",

        description:
            "Epic science fiction novel featuring futuristic worlds, politics and adventure.",


        price: 499,

        oldPrice: 699,


        catName: "Books",

        SubcatName: "Fiction",

        innersubcatName: "Science Fiction",


        rating: 4.9,

        discount: 28,


        variants: [
            {
                options: {
                    Language: "English",
                    Format: "Paperback",
                    Edition: "2024 Edition"
                },

                sku: "DUNE-SCI-FI",

                price: 499,

                stock: 70,

                images: [
                    img("photo-1544947950-fa07a98d237f"),
                    img("photo-1532012197267-da84d127e765")
                ]
            }
        ]

    },




    {
        name: "The Martian",

        images: [
            img("photo-1512820790803-83ca734da794"),
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1532012197267-da84d127e765"),
            img("photo-1544947950-fa07a98d237f")
        ],


        brand: "Crown Publishing",

        description:
            "Science fiction survival story about an astronaut stranded on Mars.",


        price: 349,

        oldPrice: 499,


        catName: "Books",

        SubcatName: "Fiction",

        innersubcatName: "Science Fiction",


        rating: 4.7,

        discount: 30,


        variants: [
            {
                options: {
                    Language: "English",
                    Format: "Paperback"
                },

                sku: "MARTIAN-SCI-FI",

                price: 349,

                stock: 60,

                images: [
                    img("photo-1512820790803-83ca734da794"),
                    img("photo-1543002588-bfa74002ed7e")
                ]
            }
        ]

    },




    /* ===========================
            NON FICTION
       =========================== */


    /* -------- Biographies -------- */


    {
        name: "Steve Jobs Biography",

        images: [
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1532012197267-da84d127e765"),
            img("photo-1512820790803-83ca734da794"),
            img("photo-1543002588-bfa74002ed7e")
        ],


        brand: "Simon & Schuster",

        description:
            "Detailed biography covering the life, innovation and journey of Steve Jobs.",


        price: 599,

        oldPrice: 799,


        catName: "Books",

        SubcatName: "Non-Fiction",

        innersubcatName: "Biographies",


        rating: 4.8,

        discount: 25,


        variants: [
            {
                options: {
                    Language: "English",
                    Format: "Hardcover"
                },

                sku: "STEVE-JOBS-BIO",

                price: 599,

                stock: 50,

                images: [
                    img("photo-1544947950-fa07a98d237f"),
                    img("photo-1532012197267-da84d127e765")
                ]
            }
        ]

    },




    {
        name: "Wings of Fire",

        images: [
            img("photo-1512820790803-83ca734da794"),
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1532012197267-da84d127e765")
        ],


        brand: "Universities Press",

        description:
            "Inspirational autobiography of Dr. APJ Abdul Kalam covering his journey and achievements.",


        price: 250,

        oldPrice: 350,


        catName: "Books",

        SubcatName: "Non-Fiction",

        innersubcatName: "Biographies",


        rating: 4.9,

        discount: 28,


        variants: [
            {
                options: {
                    Language: "English",
                    Format: "Paperback"
                },

                sku: "WINGS-FIRE",

                price: 250,

                stock: 120,

                images: [
                    img("photo-1512820790803-83ca734da794"),
                    img("photo-1543002588-bfa74002ed7e")
                ]
            }
        ]

    },


    /* ===========================
            SELF HELP
       =========================== */


    {
        name: "Atomic Habits",

        images: [
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1512820790803-83ca734da794"),
            img("photo-1532012197267-da84d127e765"),
            img("photo-1543002588-bfa74002ed7e")
        ],

        brand: "Penguin Random House",

        description:
            "A practical guide to building good habits, breaking bad ones and improving everyday life.",


        price: 499,

        oldPrice: 699,


        catName: "Books",

        SubcatName: "Non-Fiction",

        innersubcatName: "Self-Help",


        rating: 4.9,

        discount: 28,


        variants: [
            {
                options: {
                    Language: "English",
                    Format: "Paperback",
                    Edition: "Updated Edition"
                },

                sku: "ATOMIC-HABITS",

                price: 499,

                stock: 100,

                images: [
                    img("photo-1544947950-fa07a98d237f"),
                    img("photo-1512820790803-83ca734da794")
                ]
            }
        ]

    },




    {
        name: "The Psychology of Money",

        images: [
            img("photo-1512820790803-83ca734da794"),
            img("photo-1532012197267-da84d127e765"),
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1544947950-fa07a98d237f")
        ],


        brand: "Harriman House",

        description:
            "A book about money management, investing behaviour and financial decision making.",


        price: 399,

        oldPrice: 599,


        catName: "Books",

        SubcatName: "Non-Fiction",

        innersubcatName: "Self-Help",


        rating: 4.8,

        discount: 33,


        variants: [
            {
                options: {
                    Language: "English",
                    Format: "Paperback"
                },

                sku: "PSYCHOLOGY-MONEY",

                price: 399,

                stock: 90,

                images: [
                    img("photo-1512820790803-83ca734da794"),
                    img("photo-1532012197267-da84d127e765")
                ]
            }
        ]

    },




    {
        name: "Deep Work",

        images: [
            img("photo-1532012197267-da84d127e765"),
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1512820790803-83ca734da794"),
            img("photo-1544947950-fa07a98d237f")
        ],


        brand: "Grand Central Publishing",

        description:
            "Guide to focused productivity and achieving meaningful results in a distracted world.",


        price: 449,

        oldPrice: 649,


        catName: "Books",

        SubcatName: "Non-Fiction",

        innersubcatName: "Self-Help",


        rating: 4.7,

        discount: 30,


        variants: [
            {
                options: {
                    Language: "English",
                    Format: "Paperback"
                },

                sku: "DEEP-WORK",

                price: 449,

                stock: 70,

                images: [
                    img("photo-1532012197267-da84d127e765"),
                    img("photo-1543002588-bfa74002ed7e")
                ]
            }
        ]

    },




    /* ===========================
            ACADEMIC
       =========================== */


    /* -------- School Textbooks -------- */


    {
        name: "NCERT Mathematics Class 10",

        images: [
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1512820790803-83ca734da794"),
            img("photo-1532012197267-da84d127e765"),
            img("photo-1543002588-bfa74002ed7e")
        ],


        brand: "NCERT",

        description:
            "Official school mathematics textbook for Class 10 students.",


        price: 250,

        oldPrice: 300,


        catName: "Books",

        SubcatName: "Academic",

        innersubcatName: "School-Textbooks",


        rating: 4.8,

        discount: 17,


        variants: [
            {
                options: {
                    Class: "10",
                    Subject: "Mathematics",
                    Language: "English"
                },

                sku: "NCERT-MATH-10",

                price: 250,

                stock: 150,

                images: [
                    img("photo-1544947950-fa07a98d237f"),
                    img("photo-1512820790803-83ca734da794")
                ]
            }
        ]

    },




    {
        name: "Physics Class 12 Textbook",

        images: [
            img("photo-1512820790803-83ca734da794"),
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1532012197267-da84d127e765")
        ],


        brand: "NCERT",

        description:
            "Class 12 physics textbook covering concepts, examples and exercises.",


        price: 300,

        oldPrice: 400,


        catName: "Books",

        SubcatName: "Academic",

        innersubcatName: "School-Textbooks",


        rating: 4.7,

        discount: 25,


        variants: [
            {
                options: {
                    Class: "12",
                    Subject: "Physics",
                    Language: "English"
                },

                sku: "NCERT-PHYSICS-12",

                price: 300,

                stock: 100,

                images: [
                    img("photo-1512820790803-83ca734da794"),
                    img("photo-1543002588-bfa74002ed7e")
                ]
            }
        ]

    },




    /* -------- Competitive Textbooks -------- */


    {
        name: "Data Structures and Algorithms Complete Guide",

        images: [
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1532012197267-da84d127e765"),
            img("photo-1512820790803-83ca734da794"),
            img("photo-1543002588-bfa74002ed7e")
        ],


        brand: "McGraw Hill",

        description:
            "Comprehensive DSA preparation book for programming interviews and competitive exams.",


        price: 799,

        oldPrice: 999,


        catName: "Books",

        SubcatName: "Academic",

        innersubcatName: "Competitive-Textbooks",


        rating: 4.8,

        discount: 20,


        variants: [
            {
                options: {
                    Language: "English",
                    Edition: "3rd Edition",
                    Format: "Paperback"
                },

                sku: "DSA-COMPLETE-GUIDE",

                price: 799,

                stock: 60,

                images: [
                    img("photo-1544947950-fa07a98d237f"),
                    img("photo-1532012197267-da84d127e765")
                ]
            }
        ]

    },




    {
        name: "Cracking the Coding Interview",

        images: [
            img("photo-1532012197267-da84d127e765"),
            img("photo-1512820790803-83ca734da794"),
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1544947950-fa07a98d237f")
        ],


        brand: "CareerCup",

        description:
            "Popular programming interview preparation book containing coding problems and solutions.",


        price: 999,

        oldPrice: 1299,


        catName: "Books",

        SubcatName: "Academic",

        innersubcatName: "Competitive-Textbooks",


        rating: 4.9,

        discount: 23,


        variants: [
            {
                options: {
                    Language: "English",
                    Edition: "6th Edition",
                    Format: "Paperback"
                },

                sku: "CRACK-CODING",

                price: 999,

                stock: 50,

                images: [
                    img("photo-1532012197267-da84d127e765"),
                    img("photo-1512820790803-83ca734da794")
                ]
            }
        ]

    },



    /* ===========================
            GROCERIES
       =========================== */


    /* ===========================
            FRESH PRODUCE
       =========================== */


    /* -------- Fruits -------- */


    {
        name: "Fresh Alphonso Mangoes",

        images: [
            img("photo-1553279768-865429fa0078"),
            img("photo-1591073113125-e46713c829ed"),
            img("photo-1601493700631-2b16ec4b4716"),
            img("photo-1625167171750-419e3812a95d")
        ],


        brand: "Fresh Farm",

        description:
            "Premium quality Alphonso mangoes with naturally sweet taste and fresh farm delivery.",


        price: 499,

        oldPrice: 699,


        catName: "Groceries",

        SubcatName: "Fresh Produce",

        innersubcatName: "Fruits",


        rating: 4.8,

        discount: 28,


        variants: [
            {
                options: {
                    Weight: "1kg",
                    Quality: "Premium"
                },

                sku: "MANGO-ALPHONSO-1KG",

                price: 499,

                stock: 50,

                images: [
                    img("photo-1553279768-865429fa0078"),
                    img("photo-1591073113125-e46713c829ed")
                ]
            },


            {
                options: {
                    Weight: "2kg",
                    Quality: "Premium"
                },

                sku: "MANGO-ALPHONSO-2KG",

                price: 899,

                stock: 30,

                images: [
                    img("photo-1601493700631-2b16ec4b4716"),
                    img("photo-1625167171750-419e3812a95d")
                ]
            }
        ]

    },




    {
        name: "Fresh Red Apples",

        images: [
            img("photo-1560806887-1e4cd0b6cbd6"),
            img("photo-1570913149827-d2ac84ab3f9a"),
            img("photo-1569870499705-504209102861"),
            img("photo-1568702846914-96b305d2aaeb")
        ],


        brand: "Fresh Farm",

        description:
            "Crisp and juicy red apples sourced from premium orchards.",


        price: 199,

        oldPrice: 299,


        catName: "Groceries",

        SubcatName: "Fresh Produce",

        innersubcatName: "Fruits",


        rating: 4.7,

        discount: 33,


        variants: [
            {
                options: {
                    Weight: "1kg",
                    Type: "Red Apple"
                },

                sku: "APPLE-RED-1KG",

                price: 199,

                stock: 100,

                images: [
                    img("photo-1560806887-1e4cd0b6cbd6"),
                    img("photo-1570913149827-d2ac84ab3f9a")
                ]
            },


            {
                options: {
                    Weight: "2kg",
                    Type: "Red Apple"
                },

                sku: "APPLE-RED-2KG",

                price: 379,

                stock: 60,

                images: [
                    img("photo-1569870499705-504209102861"),
                    img("photo-1568702846914-96b305d2aaeb")
                ]
            }
        ]

    },




    {
        name: "Fresh Organic Bananas",

        images: [
            img("photo-1571771894821-ce9b6c11b08e"),
            img("photo-1603833665858-e61d17a86224"),
            img("photo-1528825871115-3581a5387919"),
            img("photo-1574226516831-e1dff420e12f")
        ],


        brand: "Organic Valley",

        description:
            "Naturally grown fresh bananas rich in nutrients and perfect for daily consumption.",


        price: 60,

        oldPrice: 80,


        catName: "Groceries",

        SubcatName: "Fresh Produce",

        innersubcatName: "Fruits",


        rating: 4.5,

        discount: 25,


        variants: [
            {
                options: {
                    Quantity: "6 Pieces",
                    Quality: "Organic"
                },

                sku: "BANANA-6PCS",

                price: 60,

                stock: 120,

                images: [
                    img("photo-1571771894821-ce9b6c11b08e"),
                    img("photo-1603833665858-e61d17a86224")
                ]
            }
        ]

    },




    {
        name: "Fresh Orange Pack",

        images: [
            img("photo-1547514701-42782101795e"),
            img("photo-1582979512210-99b6a53386f9"),
            img("photo-1611080626919-7cf5a9dbab12"),
            img("photo-1619566636858-adf3ef46400b")
        ],


        brand: "Fresh Farm",

        description:
            "Sweet and juicy oranges packed with freshness and natural vitamin C.",


        price: 150,

        oldPrice: 220,


        catName: "Groceries",

        SubcatName: "Fresh Produce",

        innersubcatName: "Fruits",


        rating: 4.6,

        discount: 32,


        variants: [
            {
                options: {
                    Weight: "1kg"
                },

                sku: "ORANGE-1KG",

                price: 150,

                stock: 80,

                images: [
                    img("photo-1547514701-42782101795e"),
                    img("photo-1582979512210-99b6a53386f9")
                ]
            }
        ]

    },




    /* -------- Vegetables -------- */


    {
        name: "Fresh Farm Tomatoes",

        images: [
            img("photo-1546094096-0df4bcaaa337"),
            img("photo-1592924357228-91a4daadcfea"),
            img("photo-1582284540020-8acbe03f4924"),
            img("photo-1595854341625-f33ee10dbf94")
        ],


        brand: "Fresh Farm",

        description:
            "Fresh red tomatoes suitable for cooking salads and everyday meals.",


        price: 50,

        oldPrice: 70,


        catName: "Groceries",

        SubcatName: "Fresh Produce",

        innersubcatName: "Vegetables",


        rating: 4.5,

        discount: 28,


        variants: [
            {
                options: {
                    Weight: "1kg",
                    Type: "Fresh Red Tomato"
                },

                sku: "TOMATO-1KG",

                price: 50,

                stock: 150,

                images: [
                    img("photo-1546094096-0df4bcaaa337"),
                    img("photo-1592924357228-91a4daadcfea")
                ]
            }
        ]

    },




    {
        name: "Fresh Green Broccoli",

        images: [
            img("photo-1459411621453-7b03977f4bfc"),
            img("photo-1584270354949-c26b0d5b4a0c"),
            img("photo-1518977676601-b53f82aba655"),
            img("photo-1597362925123-77861d3fbac7")
        ],


        brand: "Organic Valley",

        description:
            "Fresh green broccoli packed with nutrients and ideal for healthy meals.",


        price: 120,

        oldPrice: 160,


        catName: "Groceries",

        SubcatName: "Fresh Produce",

        innersubcatName: "Vegetables",


        rating: 4.6,

        discount: 25,


        variants: [
            {
                options: {
                    Weight: "500g",
                    Quality: "Organic"
                },

                sku: "BROCCOLI-500G",

                price: 120,

                stock: 45,

                images: [
                    img("photo-1459411621453-7b03977f4bfc"),
                    img("photo-1584270354949-c26b0d5b4a0c")
                ]
            }
        ]

    },




    {
        name: "Fresh Potato Pack",

        images: [
            img("photo-1518977676601-b53f82aba655"),
            img("photo-1592924357228-91a4daadcfea"),
            img("photo-1546094096-0df4bcaaa337"),
            img("photo-1584270354949-c26b0d5b4a0c")
        ],


        brand: "Fresh Farm",

        description:
            "Premium quality potatoes suitable for everyday cooking.",


        price: 60,

        oldPrice: 90,


        catName: "Groceries",

        SubcatName: "Fresh Produce",

        innersubcatName: "Vegetables",


        rating: 4.4,

        discount: 33,


        variants: [
            {
                options: {
                    Weight: "2kg"
                },

                sku: "POTATO-2KG",

                price: 60,

                stock: 200,

                images: [
                    img("photo-1518977676601-b53f82aba655"),
                    img("photo-1592924357228-91a4daadcfea")
                ]
            }
        ]

    },


    /* ===========================
            PACKAGED FOOD
       =========================== */


    /* -------- Snacks -------- */


    {
        name: "Premium Potato Chips",

        images: [
            img("photo-1566478989037-eec170784d0b"),
            img("photo-1581441363689-1f3c3c414635"),
            img("photo-1621939514649-28b12e816c91"),
            img("photo-1600952841320-db92ec4047ca")
        ],


        brand: "Lays",

        description:
            "Crispy potato chips with delicious seasoning and perfect crunch for snacking.",


        price: 50,

        oldPrice: 70,


        catName: "Groceries",

        SubcatName: "Packaged Food",

        innersubcatName: "Snacks",


        rating: 4.7,

        discount: 28,


        variants: [
            {
                options: {
                    Flavor: "Classic Salted",
                    Weight: "52g"
                },

                sku: "LAYS-CLASSIC-52",

                price: 50,

                stock: 120,

                images: [
                    img("photo-1566478989037-eec170784d0b"),
                    img("photo-1581441363689-1f3c3c414635")
                ]
            },


            {
                options: {
                    Flavor: "Magic Masala",
                    Weight: "90g"
                },

                sku: "LAYS-MASALA-90",

                price: 90,

                stock: 80,

                images: [
                    img("photo-1621939514649-28b12e816c91"),
                    img("photo-1600952841320-db92ec4047ca")
                ]
            }
        ]

    },




    {
        name: "Chocolate Cream Cookies",

        images: [
            img("photo-1558961363-fa8fdf82db35"),
            img("photo-1558961363-7b2d8f4f6f87"),
            img("photo-1590080875515-8a3a8dc5735e"),
            img("photo-1589985270826-4b7bb135bc9d")
        ],


        brand: "Oreo",

        description:
            "Crunchy chocolate sandwich cookies filled with smooth vanilla cream.",


        price: 40,

        oldPrice: 60,


        catName: "Groceries",

        SubcatName: "Packaged Food",

        innersubcatName: "Snacks",


        rating: 4.8,

        discount: 33,


        variants: [
            {
                options: {
                    Flavor: "Chocolate",
                    Weight: "120g"
                },

                sku: "OREO-CHOC-120",

                price: 40,

                stock: 150,

                images: [
                    img("photo-1558961363-fa8fdf82db35"),
                    img("photo-1558961363-7b2d8f4f6f87")
                ]
            },


            {
                options: {
                    Flavor: "Vanilla",
                    Weight: "300g"
                },

                sku: "OREO-VANILLA-300",

                price: 120,

                stock: 70,

                images: [
                    img("photo-1590080875515-8a3a8dc5735e"),
                    img("photo-1589985270826-4b7bb135bc9d")
                ]
            }
        ]

    },




    {
        name: "Premium Dark Chocolate Bar",

        images: [
            img("photo-1548907040-4baa42d10919"),
            img("photo-1575377427642-087cf684f1ec"),
            img("photo-1606312619070-d48b4c652a52"),
            img("photo-1511381939415-e44015466834")
        ],


        brand: "Cadbury",

        description:
            "Rich dark chocolate with smooth texture and premium cocoa flavour.",


        price: 150,

        oldPrice: 220,


        catName: "Groceries",

        SubcatName: "Packaged Food",

        innersubcatName: "Snacks",


        rating: 4.6,

        discount: 32,


        variants: [
            {
                options: {
                    Cocoa: "55%",
                    Weight: "100g"
                },

                sku: "DARK-CHOC-100",

                price: 150,

                stock: 90,

                images: [
                    img("photo-1548907040-4baa42d10919"),
                    img("photo-1575377427642-087cf684f1ec")
                ]
            }
        ]

    },




    /* -------- Beverages -------- */


    {
        name: "Premium Instant Coffee Powder",

        images: [
            img("photo-1447933601403-0c6688de566e"),
            img("photo-1495474472287-4d71bcdd2085"),
            img("photo-1514432324607-a09d9b4aefdd"),
            img("photo-1509042239860-f550ce710b93")
        ],


        brand: "Nescafe",

        description:
            "Premium instant coffee powder delivering rich aroma and strong flavour.",


        price: 299,

        oldPrice: 399,


        catName: "Groceries",

        SubcatName: "Packaged Food",

        innersubcatName: "Beverages",


        rating: 4.7,

        discount: 25,


        variants: [
            {
                options: {
                    Type: "Instant Coffee",
                    Weight: "100g"
                },

                sku: "COFFEE-100",

                price: 299,

                stock: 100,

                images: [
                    img("photo-1447933601403-0c6688de566e"),
                    img("photo-1495474472287-4d71bcdd2085")
                ]
            },


            {
                options: {
                    Type: "Instant Coffee",
                    Weight: "200g"
                },

                sku: "COFFEE-200",

                price: 499,

                stock: 60,

                images: [
                    img("photo-1514432324607-a09d9b4aefdd"),
                    img("photo-1509042239860-f550ce710b93")
                ]
            }
        ]

    },




    {
        name: "Mixed Fruit Juice",

        images: [
            img("photo-1600271886742-f049cd451bba"),
            img("photo-1621506289937-a8e4df240d0b"),
            img("photo-1629203851122-3726ecdf080e"),
            img("photo-1544145945-f90425340c7e")
        ],


        brand: "Real",

        description:
            "Refreshing mixed fruit juice made with a blend of natural fruit flavours.",


        price: 120,

        oldPrice: 160,


        catName: "Groceries",

        SubcatName: "Packaged Food",

        innersubcatName: "Beverages",


        rating: 4.5,

        discount: 25,


        variants: [
            {
                options: {
                    Flavor: "Mixed Fruit",
                    Volume: "1L"
                },

                sku: "FRUIT-JUICE-1L",

                price: 120,

                stock: 80,

                images: [
                    img("photo-1600271886742-f049cd451bba"),
                    img("photo-1621506289937-a8e4df240d0b")
                ]
            }
        ]

    },




    {
        name: "Classic Cola Soft Drink",

        images: [
            img("photo-1629203851122-3726ecdf080e"),
            img("photo-1544145945-f90425340c7e"),
            img("photo-1600271886742-f049cd451bba"),
            img("photo-1621506289937-a8e4df240d0b")
        ],


        brand: "Coca Cola",

        description:
            "Classic carbonated soft drink with refreshing cola flavour.",


        price: 40,

        oldPrice: 60,


        catName: "Groceries",

        SubcatName: "Packaged Food",

        innersubcatName: "Beverages",


        rating: 4.6,

        discount: 33,


        variants: [
            {
                options: {
                    Volume: "750ml",
                    Type: "Carbonated Drink"
                },

                sku: "COLA-750",

                price: 40,

                stock: 200,

                images: [
                    img("photo-1629203851122-3726ecdf080e"),
                    img("photo-1544145945-f90425340c7e")
                ]
            },


            {
                options: {
                    Volume: "2L",
                    Type: "Carbonated Drink"
                },

                sku: "COLA-2L",

                price: 90,

                stock: 100,

                images: [
                    img("photo-1600271886742-f049cd451bba"),
                    img("photo-1621506289937-a8e4df240d0b")
                ]
            }
        ]

    },



    /* ===========================
            DAIRY & BAKERY
       =========================== */


    /* -------- Dairy -------- */


    {
        name: "Fresh Full Cream Milk",

        images: [
            img("photo-1563636619-e9143da7973b"),
            img("photo-1550583724-b2692b85b150"),
            img("photo-1600788907416-456578634209"),
            img("photo-1628088062854-d1870b4553da")
        ],

        brand: "Amul",

        description:
            "Fresh full cream milk with rich taste and essential nutrients for daily consumption.",


        price: 70,

        oldPrice: 80,


        catName: "Groceries",

        SubcatName: "Dairy & Bakery",

        innersubcatName: "Dairy",


        rating: 4.8,

        discount: 12,


        variants: [
            {
                options: {
                    Fat: "6%",
                    Volume: "1L"
                },

                sku: "MILK-FULL-1L",

                price: 70,

                stock: 200,

                images: [
                    img("photo-1563636619-e9143da7973b"),
                    img("photo-1550583724-b2692b85b150")
                ]
            },


            {
                options: {
                    Fat: "6%",
                    Volume: "500ml"
                },

                sku: "MILK-FULL-500",

                price: 40,

                stock: 250,

                images: [
                    img("photo-1600788907416-456578634209"),
                    img("photo-1628088062854-d1870b4553da")
                ]
            }
        ]

    },




    {
        name: "Premium Cheddar Cheese",

        images: [
            img("photo-1486297678162-eb2a19b0a32d"),
            img("photo-1628088062854-d1870b4553da"),
            img("photo-1550583724-b2692b85b150"),
            img("photo-1563636619-e9143da7973b")
        ],


        brand: "Britannia",

        description:
            "Premium cheddar cheese slices perfect for sandwiches, burgers and cooking.",


        price: 220,

        oldPrice: 280,


        catName: "Groceries",

        SubcatName: "Dairy & Bakery",

        innersubcatName: "Dairy",


        rating: 4.6,

        discount: 21,


        variants: [
            {
                options: {
                    Type: "Cheddar",
                    Weight: "200g"
                },

                sku: "CHEESE-CHEDDAR-200",

                price: 220,

                stock: 60,

                images: [
                    img("photo-1486297678162-eb2a19b0a32d"),
                    img("photo-1628088062854-d1870b4553da")
                ]
            }
        ]

    },




    {
        name: "Salted Butter Block",

        images: [
            img("photo-1589985270826-4b7bb135bc9d"),
            img("photo-1550583724-b2692b85b150"),
            img("photo-1563636619-e9143da7973b"),
            img("photo-1486297678162-eb2a19b0a32d")
        ],


        brand: "Amul",

        description:
            "Creamy salted butter suitable for breakfast, baking and cooking.",


        price: 120,

        oldPrice: 150,


        catName: "Groceries",

        SubcatName: "Dairy & Bakery",

        innersubcatName: "Dairy",


        rating: 4.7,

        discount: 20,


        variants: [
            {
                options: {
                    Type: "Salted",
                    Weight: "500g"
                },

                sku: "BUTTER-SALTED-500",

                price: 120,

                stock: 90,

                images: [
                    img("photo-1589985270826-4b7bb135bc9d"),
                    img("photo-1550583724-b2692b85b150")
                ]
            }
        ]

    },




    /* -------- Bakery -------- */


    {
        name: "Premium White Bread",

        images: [
            img("photo-1509440159596-0249088772ff"),
            img("photo-1549931319-a545dcf3bc73"),
            img("photo-1586444248902-2f64eddc13df"),
            img("photo-1598373182133-52452f7691ef")
        ],


        brand: "Britannia",

        description:
            "Soft and fresh white bread perfect for breakfast and daily meals.",


        price: 45,

        oldPrice: 60,


        catName: "Groceries",

        SubcatName: "Dairy & Bakery",

        innersubcatName: "Bakery",


        rating: 4.6,

        discount: 25,


        variants: [
            {
                options: {
                    Type: "White Bread",
                    Weight: "400g"
                },

                sku: "BREAD-WHITE-400",

                price: 45,

                stock: 120,

                images: [
                    img("photo-1509440159596-0249088772ff"),
                    img("photo-1549931319-a545dcf3bc73")
                ]
            }
        ]

    },




    {
        name: "Chocolate Truffle Cake",

        images: [
            img("photo-1578985545062-69928b1d9587"),
            img("photo-1551024506-0bccd828d307"),
            img("photo-1606890737304-57a1ca8a5b62"),
            img("photo-1571115177098-24ec42ed204d")
        ],


        brand: "Theobroma",

        description:
            "Rich chocolate truffle cake with premium chocolate layers and creamy frosting.",


        price: 799,

        oldPrice: 999,


        catName: "Groceries",

        SubcatName: "Dairy & Bakery",

        innersubcatName: "Bakery",


        rating: 4.9,

        discount: 20,


        variants: [
            {
                options: {
                    Flavor: "Chocolate",
                    Weight: "500g"
                },

                sku: "TRUFFLE-CAKE-500",

                price: 799,

                stock: 35,

                images: [
                    img("photo-1578985545062-69928b1d9587"),
                    img("photo-1551024506-0bccd828d307")
                ]
            },


            {
                options: {
                    Flavor: "Chocolate",
                    Weight: "1kg"
                },

                sku: "TRUFFLE-CAKE-1KG",

                price: 1499,

                stock: 20,

                images: [
                    img("photo-1606890737304-57a1ca8a5b62"),
                    img("photo-1571115177098-24ec42ed204d")
                ]
            }
        ]

    },




    {
        name: "Butter Croissant Pack",

        images: [
            img("photo-1555507036-ab1f4038808a"),
            img("photo-1509440159596-0249088772ff"),
            img("photo-1549931319-a545dcf3bc73"),
            img("photo-1598373182133-52452f7691ef")
        ],


        brand: "Modern Bakery",

        description:
            "Freshly baked buttery croissants with a flaky golden texture.",


        price: 180,

        oldPrice: 250,


        catName: "Groceries",

        SubcatName: "Dairy & Bakery",

        innersubcatName: "Bakery",


        rating: 4.7,

        discount: 28,


        variants: [
            {
                options: {
                    Quantity: "6 Pieces",
                    Flavor: "Butter"
                },

                sku: "CROISSANT-6PCS",

                price: 180,

                stock: 40,

                images: [
                    img("photo-1555507036-ab1f4038808a"),
                    img("photo-1509440159596-0249088772ff")
                ]
            }
        ]

    },


    // id="home-furniture-part"

    /* ===========================
                HOME
       =========================== */


    /* ===========================
              FURNITURE
       =========================== */


    /* -------- Living Room -------- */


    {
        name: "Modern L Shape Sofa Set",

        images: [
            img("photo-1555041469-a586c61ea9bc"),
            img("photo-1550226891-ef816aed4a98"),
            img("photo-1616486338812-3dadae4b4ace"),
            img("photo-1586023492125-27b2c045efd7")
        ],


        brand: "Urban Ladder",

        description:
            "Premium L shaped sofa with comfortable cushioning and modern design for contemporary living rooms.",


        price: 39999,

        oldPrice: 49999,


        catName: "Home",

        SubcatName: "Furniture",

        innersubcatName: "Living Room",


        rating: 4.8,

        discount: 20,


        variants: [
            {
                options: {
                    Material: "Fabric",
                    Color: "Grey",
                    Size: "7 Seater"
                },

                sku: "SOFA-L-GREY-7",

                price: 39999,

                stock: 15,

                images: [
                    img("photo-1555041469-a586c61ea9bc"),
                    img("photo-1550226891-ef816aed4a98")
                ]
            },


            {
                options: {
                    Material: "Leather",
                    Color: "Brown",
                    Size: "5 Seater"
                },

                sku: "SOFA-LEATHER-BROWN",

                price: 49999,

                stock: 10,

                images: [
                    img("photo-1616486338812-3dadae4b4ace"),
                    img("photo-1586023492125-27b2c045efd7")
                ]
            }
        ]

    },




    {
        name: "Wooden Coffee Table",

        images: [
            img("photo-1532372576444-dda954194ad0"),
            img("photo-1618220179428-22790b461013"),
            img("photo-1594026112284-02bb6f3352fe"),
            img("photo-1600210492486-724fe5c67fb0")
        ],


        brand: "Pepperfry",

        description:
            "Elegant wooden coffee table designed for modern living spaces with durable construction.",


        price: 6999,

        oldPrice: 8999,


        catName: "Home",

        SubcatName: "Furniture",

        innersubcatName: "Living Room",


        rating: 4.6,

        discount: 22,


        variants: [
            {
                options: {
                    Material: "Engineered Wood",
                    Color: "Walnut",
                    Size: "Medium"
                },

                sku: "COFFEE-TABLE-WALNUT",

                price: 6999,

                stock: 25,

                images: [
                    img("photo-1532372576444-dda954194ad0"),
                    img("photo-1618220179428-22790b461013")
                ]
            }
        ]

    },




    {
        name: "Modern Wooden TV Unit",

        images: [
            img("photo-1618221195710-dd6b41faaea6"),
            img("photo-1558997519-83ea9252edf8"),
            img("photo-1600121848594-d8644e57abab"),
            img("photo-1616486338812-3dadae4b4ace")
        ],


        brand: "Godrej Interio",

        description:
            "Stylish TV cabinet with storage compartments suitable for modern homes.",


        price: 14999,

        oldPrice: 19999,


        catName: "Home",

        SubcatName: "Furniture",

        innersubcatName: "Living Room",


        rating: 4.5,

        discount: 25,


        variants: [
            {
                options: {
                    Material: "Wood",
                    Color: "Brown",
                    Width: "6 Feet"
                },

                sku: "TV-UNIT-BROWN-6FT",

                price: 14999,

                stock: 18,

                images: [
                    img("photo-1618221195710-dd6b41faaea6"),
                    img("photo-1558997519-83ea9252edf8")
                ]
            }
        ]

    },




    /* -------- Bed Room -------- */


    {
        name: "Premium King Size Wooden Bed",

        images: [
            img("photo-1505693416388-ac5ce068fe85"),
            img("photo-1616486338812-3dadae4b4ace"),
            img("photo-1617104678098-de229db51175"),
            img("photo-1586023492125-27b2c045efd7")
        ],


        brand: "Wakefit",

        description:
            "Strong wooden king size bed with elegant design and spacious sleeping area.",


        price: 32999,

        oldPrice: 42999,


        catName: "Home",

        SubcatName: "Furniture",

        innersubcatName: "Bed Room",


        rating: 4.8,

        discount: 23,


        variants: [
            {
                options: {
                    Material: "Solid Wood",
                    Size: "King",
                    Color: "Teak"
                },

                sku: "KING-BED-TEAK",

                price: 32999,

                stock: 12,

                images: [
                    img("photo-1505693416388-ac5ce068fe85"),
                    img("photo-1617104678098-de229db51175")
                ]
            }
        ]

    },




    {
        name: "Sliding Door Wardrobe",

        images: [
            img("photo-1595428774223-ef52624120d2"),
            img("photo-1616486338812-3dadae4b4ace"),
            img("photo-1558997519-83ea9252edf8"),
            img("photo-1618221195710-dd6b41faaea6")
        ],


        brand: "IKEA",

        description:
            "Spacious modern wardrobe with sliding doors and multiple storage sections.",


        price: 24999,

        oldPrice: 32999,


        catName: "Home",

        SubcatName: "Furniture",

        innersubcatName: "Bed Room",


        rating: 4.6,

        discount: 24,


        variants: [
            {
                options: {
                    Material: "Engineered Wood",
                    Color: "White",
                    Doors: "2 Sliding Doors"
                },

                sku: "WARDROBE-WHITE-2D",

                price: 24999,

                stock: 15,

                images: [
                    img("photo-1595428774223-ef52624120d2"),
                    img("photo-1616486338812-3dadae4b4ace")
                ]
            }
        ]

    },




    {
        name: "Bedside Table With Drawer",

        images: [
            img("photo-1598300042247-d088f8ab3a91"),
            img("photo-1616486338812-3dadae4b4ace"),
            img("photo-1600210492486-724fe5c67fb0"),
            img("photo-1532372576444-dda954194ad0")
        ],


        brand: "Nilkamal",

        description:
            "Compact bedside table with storage drawer for bedrooms and modern interiors.",


        price: 2999,

        oldPrice: 3999,


        catName: "Home",

        SubcatName: "Furniture",

        innersubcatName: "Bed Room",


        rating: 4.5,

        discount: 25,


        variants: [
            {
                options: {
                    Material: "Wood",
                    Color: "Oak",
                    Drawers: "1"
                },

                sku: "BEDSIDE-OAK",

                price: 2999,

                stock: 40,

                images: [
                    img("photo-1598300042247-d088f8ab3a91"),
                    img("photo-1600210492486-724fe5c67fb0")
                ]
            }
        ]

    },


    // id="home-kitchen-part"

    /* ===========================
          KITCHEN & DINING
       =========================== */


    /* -------- Cookware -------- */


    {
        name: "Non Stick Cookware Set",

        images: [
            img("photo-1584990347449-a2d4e7f6e9f8"),
            img("photo-1556911220-e15b29be8c8f"),
            img("photo-1590794056226-79ef3a8147e1"),
            img("photo-1600566753086-00f18fb6b3ea")
        ],


        brand: "Prestige",

        description:
            "Premium non-stick cookware set including frying pan, kadai and sauce pan for modern kitchens.",


        price: 2499,

        oldPrice: 3499,


        catName: "Home",

        SubcatName: "Kitchen & Dining",

        innersubcatName: "Cookware",


        rating: 4.7,

        discount: 28,


        variants: [
            {
                options: {
                    Material: "Non Stick Aluminium",
                    Pieces: "3 Pieces",
                    Color: "Black"
                },

                sku: "COOKWARE-SET-BLACK",

                price: 2499,

                stock: 40,

                images: [
                    img("photo-1584990347449-a2d4e7f6e9f8"),
                    img("photo-1556911220-e15b29be8c8f")
                ]
            },


            {
                options: {
                    Material: "Granite Coating",
                    Pieces: "5 Pieces",
                    Color: "Grey"
                },

                sku: "COOKWARE-GRANITE-5",

                price: 3999,

                stock: 25,

                images: [
                    img("photo-1590794056226-79ef3a8147e1"),
                    img("photo-1600566753086-00f18fb6b3ea")
                ]
            }
        ]

    },




    {
        name: "Stainless Steel Pressure Cooker",

        images: [
            img("photo-1585515320310-259814833e62"),
            img("photo-1556911220-e15b29be8c8f"),
            img("photo-1590794056226-79ef3a8147e1"),
            img("photo-1600566753086-00f18fb6b3ea")
        ],


        brand: "Hawkins",

        description:
            "Durable stainless steel pressure cooker suitable for everyday cooking.",


        price: 1899,

        oldPrice: 2499,


        catName: "Home",

        SubcatName: "Kitchen & Dining",

        innersubcatName: "Cookware",


        rating: 4.8,

        discount: 24,


        variants: [
            {
                options: {
                    Material: "Stainless Steel",
                    Capacity: "5 Litre"
                },

                sku: "COOKER-STEEL-5L",

                price: 1899,

                stock: 60,

                images: [
                    img("photo-1585515320310-259814833e62"),
                    img("photo-1556911220-e15b29be8c8f")
                ]
            }
        ]

    },




    {
        name: "Premium Granite Frying Pan",

        images: [
            img("photo-1590794056226-79ef3a8147e1"),
            img("photo-1584990347449-a2d4e7f6e9f8"),
            img("photo-1556911220-e15b29be8c8f"),
            img("photo-1600566753086-00f18fb6b3ea")
        ],


        brand: "Wonderchef",

        description:
            "Granite coated frying pan with durable non-stick surface for healthy cooking.",


        price: 999,

        oldPrice: 1499,


        catName: "Home",

        SubcatName: "Kitchen & Dining",

        innersubcatName: "Cookware",


        rating: 4.6,

        discount: 33,


        variants: [
            {
                options: {
                    Material: "Granite Coating",
                    Size: "28cm",
                    Color: "Black"
                },

                sku: "FRYPAN-GRANITE-28",

                price: 999,

                stock: 80,

                images: [
                    img("photo-1590794056226-79ef3a8147e1"),
                    img("photo-1584990347449-a2d4e7f6e9f8")
                ]
            }
        ]

    },




    /* -------- Tableware -------- */


    {
        name: "Elegant Ceramic Dinner Set",

        images: [
            img("photo-1603199506016-b9a594b593c0"),
            img("photo-1547592180-85f173990554"),
            img("photo-1584302179602-e4c3d3fd629d"),
            img("photo-1610701596007-11502861dcfa")
        ],


        brand: "La Opala",

        description:
            "Premium ceramic dinner set with elegant design suitable for everyday and special occasions.",


        price: 2999,

        oldPrice: 3999,


        catName: "Home",

        SubcatName: "Kitchen & Dining",

        innersubcatName: "Tableware",


        rating: 4.7,

        discount: 25,


        variants: [
            {
                options: {
                    Material: "Ceramic",
                    Pieces: "24 Pieces",
                    Color: "White"
                },

                sku: "DINNER-SET-WHITE-24",

                price: 2999,

                stock: 35,

                images: [
                    img("photo-1603199506016-b9a594b593c0"),
                    img("photo-1547592180-85f173990554")
                ]
            }
        ]

    },




    {
        name: "Premium Coffee Mug Set",

        images: [
            img("photo-1514228742587-6b1558fcca3d"),
            img("photo-1577937927133-66ef06acdf18"),
            img("photo-1544787219-7f47ccb76574"),
            img("photo-1509042239860-f550ce710b93")
        ],


        brand: "Milton",

        description:
            "Stylish ceramic coffee mugs perfect for tea, coffee and beverages.",


        price: 799,

        oldPrice: 1199,


        catName: "Home",

        SubcatName: "Kitchen & Dining",

        innersubcatName: "Tableware",


        rating: 4.5,

        discount: 33,


        variants: [
            {
                options: {
                    Material: "Ceramic",
                    Pieces: "4 Mugs",
                    Color: "Multicolor"
                },

                sku: "MUG-SET-4",

                price: 799,

                stock: 70,

                images: [
                    img("photo-1514228742587-6b1558fcca3d"),
                    img("photo-1577937927133-66ef06acdf18")
                ]
            }
        ]

    },




    {
        name: "Crystal Glass Tumbler Set",

        images: [
            img("photo-1505022610485-0249ba5b3675"),
            img("photo-1544145945-f90425340c7e"),
            img("photo-1513558161293-cdaf765ed2fd"),
            img("photo-1603199506016-b9a594b593c0")
        ],


        brand: "Borosil",

        description:
            "Premium glass tumbler set with elegant transparent design for dining tables.",


        price: 699,

        oldPrice: 999,


        catName: "Home",

        SubcatName: "Kitchen & Dining",

        innersubcatName: "Tableware",


        rating: 4.6,

        discount: 30,


        variants: [
            {
                options: {
                    Material: "Glass",
                    Pieces: "6 Glasses",
                    Capacity: "300ml"
                },

                sku: "GLASS-SET-6",

                price: 699,

                stock: 50,

                images: [
                    img("photo-1505022610485-0249ba5b3675"),
                    img("photo-1544145945-f90425340c7e")
                ]
            }
        ]

    },


    // id="home-decor-part"

    /* ===========================
            HOME DECOR
       =========================== */


    /* -------- Lighting -------- */


    {
        name: "Modern LED Ceiling Light",

        images: [
            img("photo-1524484485831-a92ffc0de03f"),
            img("photo-1513506003901-1e6a229e2d15"),
            img("photo-1540932239986-30128078f3c5"),
            img("photo-1507473885765-e6ed057f782c")
        ],


        brand: "Philips",

        description:
            "Modern LED ceiling light with elegant design and energy efficient illumination.",


        price: 2499,

        oldPrice: 3499,


        catName: "Home",

        SubcatName: "Home Decor",

        innersubcatName: "Lighting",


        rating: 4.7,

        discount: 28,


        variants: [
            {
                options: {
                    Type: "LED Ceiling Light",
                    Wattage: "24W",
                    Color: "White"
                },

                sku: "LED-CEILING-24W",

                price: 2499,

                stock: 40,

                images: [
                    img("photo-1524484485831-a92ffc0de03f"),
                    img("photo-1513506003901-1e6a229e2d15")
                ]
            },


            {
                options: {
                    Type: "LED Ceiling Light",
                    Wattage: "36W",
                    Color: "Warm White"
                },

                sku: "LED-CEILING-36W",

                price: 3499,

                stock: 25,

                images: [
                    img("photo-1540932239986-30128078f3c5"),
                    img("photo-1507473885765-e6ed057f782c")
                ]
            }
        ]

    },




    {
        name: "Decorative Table Lamp",

        images: [
            img("photo-1507473885765-e6ed057f782c"),
            img("photo-1513506003901-1e6a229e2d15"),
            img("photo-1540932239986-30128078f3c5"),
            img("photo-1524484485831-a92ffc0de03f")
        ],


        brand: "Halonix",

        description:
            "Elegant table lamp designed to enhance bedroom and living room interiors.",


        price: 1299,

        oldPrice: 1799,


        catName: "Home",

        SubcatName: "Home Decor",

        innersubcatName: "Lighting",


        rating: 4.5,

        discount: 28,


        variants: [
            {
                options: {
                    Material: "Metal + Fabric",
                    Color: "Golden",
                    Height: "18 inch"
                },

                sku: "TABLE-LAMP-GOLD",

                price: 1299,

                stock: 60,

                images: [
                    img("photo-1507473885765-e6ed057f782c"),
                    img("photo-1513506003901-1e6a229e2d15")
                ]
            }
        ]

    },




    {
        name: "Smart RGB LED Lamp",

        images: [
            img("photo-1513506003901-1e6a229e2d15"),
            img("photo-1524484485831-a92ffc0de03f"),
            img("photo-1507473885765-e6ed057f782c"),
            img("photo-1540932239986-30128078f3c5")
        ],


        brand: "Wipro",

        description:
            "Smart RGB LED lamp with adjustable colours and modern home lighting control.",


        price: 1999,

        oldPrice: 2999,


        catName: "Home",

        SubcatName: "Home Decor",

        innersubcatName: "Lighting",


        rating: 4.6,

        discount: 33,


        variants: [
            {
                options: {
                    Connectivity: "WiFi",
                    Colors: "RGB",
                    Power: "12W"
                },

                sku: "SMART-RGB-LAMP",

                price: 1999,

                stock: 35,

                images: [
                    img("photo-1513506003901-1e6a229e2d15"),
                    img("photo-1524484485831-a92ffc0de03f")
                ]
            }
        ]

    },




    /* -------- Furnishing -------- */


    {
        name: "Premium Blackout Curtains",

        images: [
            img("photo-1618220179428-22790b461013"),
            img("photo-1586023492125-27b2c045efd7"),
            img("photo-1616486338812-3dadae4b4ace"),
            img("photo-1558997519-83ea9252edf8")
        ],


        brand: "Spaces",

        description:
            "Premium blackout curtains designed for privacy and stylish room decoration.",


        price: 2499,

        oldPrice: 3499,


        catName: "Home",

        SubcatName: "Home Decor",

        innersubcatName: "Furnishing",


        rating: 4.7,

        discount: 28,


        variants: [
            {
                options: {
                    Material: "Polyester",
                    Color: "Grey",
                    Size: "7 Feet"
                },

                sku: "CURTAIN-GREY-7FT",

                price: 2499,

                stock: 50,

                images: [
                    img("photo-1618220179428-22790b461013"),
                    img("photo-1586023492125-27b2c045efd7")
                ]
            }
        ]

    },




    {
        name: "Decorative Cushion Set",

        images: [
            img("photo-1584100936595-c0654b55a2e2"),
            img("photo-1616627451515-cbc80e5ece35"),
            img("photo-1583845112203-454c6f7b6a19"),
            img("photo-1616486338812-3dadae4b4ace")
        ],


        brand: "Home Centre",

        description:
            "Soft decorative cushions with premium fabric covers for sofas and beds.",


        price: 899,

        oldPrice: 1299,


        catName: "Home",

        SubcatName: "Home Decor",

        innersubcatName: "Furnishing",


        rating: 4.6,

        discount: 30,


        variants: [
            {
                options: {
                    Material: "Cotton",
                    Pieces: "5 Cushions",
                    Color: "Multicolor"
                },

                sku: "CUSHION-SET-5",

                price: 899,

                stock: 70,

                images: [
                    img("photo-1584100936595-c0654b55a2e2"),
                    img("photo-1616627451515-cbc80e5ece35")
                ]
            }
        ]

    },




    {
        name: "Luxury Cotton Bedsheet Set",

        images: [
            img("photo-1583845112203-454c6f7b6a19"),
            img("photo-1616627451515-cbc80e5ece35"),
            img("photo-1584100936595-c0654b55a2e2"),
            img("photo-1616486338812-3dadae4b4ace")
        ],


        brand: "Bombay Dyeing",

        description:
            "Premium cotton bedsheet set with elegant patterns and soft comfortable fabric.",


        price: 1499,

        oldPrice: 2199,


        catName: "Home",

        SubcatName: "Home Decor",

        innersubcatName: "Furnishing",


        rating: 4.8,

        discount: 32,


        variants: [
            {
                options: {
                    Material: "100% Cotton",
                    Size: "King Size",
                    Pattern: "Floral"
                },

                sku: "BEDSHEET-KING-FLORAL",

                price: 1499,

                stock: 45,

                images: [
                    img("photo-1583845112203-454c6f7b6a19"),
                    img("photo-1616627451515-cbc80e5ece35")
                ]
            },


            {
                options: {
                    Material: "100% Cotton",
                    Size: "Queen Size",
                    Pattern: "Geometric"
                },

                sku: "BEDSHEET-QUEEN-GEO",

                price: 1199,

                stock: 60,

                images: [
                    img("photo-1584100936595-c0654b55a2e2"),
                    img("photo-1616486338812-3dadae4b4ace")
                ]
            }
        ]

    },


    /* ===========================
        MORE MEN'S SHIRTS
   =========================== */


    {
        name: "Premium Floral Printed Shirt",

        images: [
            img("photo-1602810318383-e386cc2a3ccf"),
            img("photo-1598033129183-c4f50c736f10"),
            img("photo-1620012253295-c15cc3e65df4"),
            img("photo-1596755094514-f87e34085b2c")
        ],

        brand: "Wrogn",

        description:
            "Trendy floral printed casual shirt with premium cotton fabric for weekend styling.",

        price: 1399,
        oldPrice: 2199,

        catName: "Fashion",
        SubcatName: "Mens",
        innersubcatName: "Shirts",

        rating: 4.5,
        discount: 36,

        variants: [
            {
                options: {
                    Size: "L",
                    Color: "Blue Print",
                    Material: "Cotton"
                },
                sku: "FASH-M-SHIRT-006-FLR",
                price: 1399,
                stock: 45,
                images: [
                    img("photo-1602810318383-e386cc2a3ccf")
                ]
            }
        ]

    },



    {
        name: "Premium Mandarin Collar Shirt",

        images: [
            img("photo-1596755094514-f87e34085b2c"),
            img("photo-1603252109303-2751441dd157"),
            img("photo-1588359348347-9bc6cbb6f8a6"),
            img("photo-1620012253295-c15cc3e65df4")
        ],

        brand: "Manyavar",

        description:
            "Elegant mandarin collar shirt suitable for festive and semi-formal occasions.",

        price: 1899,
        oldPrice: 2999,

        catName: "Fashion",
        SubcatName: "Mens",
        innersubcatName: "Shirts",

        rating: 4.7,
        discount: 37,

        variants: [
            {
                options: {
                    Size: "M",
                    Color: "White",
                    Material: "Cotton"
                },
                sku: "FASH-M-SHIRT-007-WHT",
                price: 1899,
                stock: 35,
                images: [
                    img("photo-1596755094514-f87e34085b2c")
                ]
            }
        ]

    },




    {
        name: "Premium Checked Flannel Shirt",

        images: [
            img("photo-1607345366928-199ea26cfe3e"),
            img("photo-1598033129183-c4f50c736f10"),
            img("photo-1602810318383-e386cc2a3ccf"),
            img("photo-1596755094514-f87e34085b2c")
        ],

        brand: "Levi's",

        description:
            "Warm flannel checked shirt with relaxed fit for casual winter wear.",

        price: 1999,
        oldPrice: 2999,

        catName: "Fashion",
        SubcatName: "Mens",
        innersubcatName: "Shirts",

        rating: 4.6,
        discount: 33,

        variants: [
            {
                options: {
                    Size: "XL",
                    Color: "Red Check",
                    Material: "Flannel Cotton"
                },
                sku: "FASH-M-SHIRT-008-FNL",
                price: 1999,
                stock: 40,
                images: [
                    img("photo-1607345366928-199ea26cfe3e")
                ]
            }
        ]

    },





    /* ===========================
            MORE MEN'S T-SHIRTS
       =========================== */


    {
        name: "Oversized Graphic Streetwear Tee",

        images: [
            img("photo-1521572163474-6864f9cf17ab"),
            img("photo-1503342217505-b0a15ec3261c"),
            img("photo-1515886657613-9f3515b0c78f"),
            img("photo-1485968579580-b6d095142e6e")
        ],

        brand: "Bewakoof",

        description:
            "Oversized graphic t-shirt with modern streetwear inspired designs.",

        price: 899,
        oldPrice: 1499,

        catName: "Fashion",
        SubcatName: "Mens",
        innersubcatName: "T-Shirts",

        rating: 4.6,
        discount: 40,

        variants: [
            {
                options: {
                    Size: "XL",
                    Color: "Black",
                    Material: "Cotton"
                },
                sku: "FASH-M-TSHIRT-007-GRF",
                price: 899,
                stock: 90,
                images: [
                    img("photo-1521572163474-6864f9cf17ab")
                ]
            }
        ]

    },




    {
        name: "Premium Supima Cotton T-Shirt",

        images: [
            img("photo-1523381294911-8d3cead13475"),
            img("photo-1521572163474-6864f9cf17ab"),
            img("photo-1503341504253-dff4815485f1"),
            img("photo-1485230895905-ec40ba36b9bc")
        ],

        brand: "Uniqlo",

        description:
            "Soft Supima cotton t-shirt offering premium comfort and durability.",

        price: 1299,
        oldPrice: 1999,

        catName: "Fashion",
        SubcatName: "Mens",
        innersubcatName: "T-Shirts",

        rating: 4.8,
        discount: 35,

        variants: [
            {
                options: {
                    Size: "L",
                    Color: "Navy",
                    Material: "Supima Cotton"
                },
                sku: "FASH-M-TSHIRT-008-NVY",
                price: 1299,
                stock: 60,
                images: [
                    img("photo-1523381294911-8d3cead13475")
                ]
            }
        ]

    },




    /* ===========================
            MORE TROUSERS
       =========================== */


    {
        name: "Slim Fit Black Chinos",

        images: [
            img("photo-1624378439575-d8705ad7ae80"),
            img("photo-1473966968600-fa801b869a1a"),
            img("photo-1542272604-787c3835535d"),
            img("photo-1594938298603-c8148c4dae35")
        ],

        brand: "H&M",

        description:
            "Slim fit black chinos perfect for office and casual occasions.",

        price: 1699,
        oldPrice: 2499,

        catName: "Fashion",
        SubcatName: "Mens",
        innersubcatName: "Trousers",

        rating: 4.5,
        discount: 32,

        variants: [
            {
                options: {
                    Size: "34",
                    Color: "Black",
                    Material: "Cotton Stretch"
                },
                sku: "FASH-M-TRS-006-BLK",
                price: 1699,
                stock: 55,
                images: [
                    img("photo-1624378439575-d8705ad7ae80")
                ]
            }
        ]

    },




    {
        name: "Classic Blue Slim Jeans",

        images: [
            img("photo-1542272604-787c3835535d"),
            img("photo-1541099649105-f69ad21f3246"),
            img("photo-1584370848010-d7fe6bc767ec"),
            img("photo-1515886657613-9f3515b0c78f")
        ],

        brand: "Wrangler",

        description:
            "Classic slim fit blue jeans with stretch comfort and durable denim.",

        price: 2199,
        oldPrice: 3299,

        catName: "Fashion",
        SubcatName: "Mens",
        innersubcatName: "Trousers",

        rating: 4.6,
        discount: 33,

        variants: [
            {
                options: {
                    Size: "32",
                    Color: "Blue",
                    Material: "Denim"
                },
                sku: "FASH-M-TRS-007-BLU",
                price: 2199,
                stock: 70,
                images: [
                    img("photo-1542272604-787c3835535d")
                ]
            }
        ]

    },





    /* ===========================
              MEN'S FOOTWEAR
       =========================== */


    {
        name: "Air Running Sneakers",

        images: [
            img("photo-1542291026-7eec264c27ff"),
            img("photo-1460353581641-37baddab0fa2"),
            img("photo-1495555961986-6d4c1ecb7be3"),
            img("photo-1549298916-b41d501d3772")
        ],

        brand: "Nike",

        description:
            "Lightweight running sneakers with responsive cushioning for daily workouts.",

        price: 4999,
        oldPrice: 6999,

        catName: "Fashion",
        SubcatName: "Footwear",
        innersubcatName: "Men's Footwear",

        rating: 4.8,
        discount: 28,

        variants: [
            {
                options: {
                    Size: "9",
                    Color: "White",
                    Material: "Mesh"
                },
                sku: "FASH-M-SHOE-001-WHT",
                price: 4999,
                stock: 25,
                images: [
                    img("photo-1542291026-7eec264c27ff")
                ]
            }
        ]

    },




    {
        name: "Classic Leather Formal Shoes",

        images: [
            img("photo-1614252235316-8c857d38b5f4"),
            img("photo-1612817159949-195b6eb9e31a"),
            img("photo-1549298916-b41d501d3772"),
            img("photo-1495555961986-6d4c1ecb7be3")
        ],

        brand: "Bata",

        description:
            "Premium leather formal shoes designed for office and business wear.",

        price: 2499,
        oldPrice: 3999,

        catName: "Fashion",
        SubcatName: "Footwear",
        innersubcatName: "Men's Footwear",

        rating: 4.5,
        discount: 37,

        variants: [
            {
                options: {
                    Size: "10",
                    Color: "Brown",
                    Material: "Leather"
                },
                sku: "FASH-M-SHOE-002-BRN",
                price: 2499,
                stock: 40,
                images: [
                    img("photo-1614252235316-8c857d38b5f4")
                ]
            }
        ]

    },


    /* ===========================
          MEN'S FOOTWEAR
          CONTINUED
   =========================== */


    {
        name: "Premium White Casual Sneakers",

        images: [
            img("photo-1494496195158-c3becb4f2475"),
            img("photo-1542291026-7eec264c27ff"),
            img("photo-1460353581641-37baddab0fa2"),
            img("photo-1549298916-b41d501d3772")
        ],

        brand: "Adidas",

        description:
            "Minimal white sneakers with clean design suitable for everyday casual outfits.",

        price: 3499,
        oldPrice: 4999,

        catName: "Fashion",
        SubcatName: "Footwear",
        innersubcatName: "Men's Footwear",

        rating: 4.7,
        discount: 30,

        variants: [
            {
                options: {
                    Size: "9",
                    Color: "White",
                    Material: "Synthetic Leather"
                },
                sku: "FASH-M-SHOE-003-WHT",
                price: 3499,
                stock: 50,
                images: [
                    img("photo-1494496195158-c3becb4f2475")
                ]
            }
        ]

    },



    {
        name: "Street Style High Top Sneakers",

        images: [
            img("photo-1608231387042-66d1773070a5"),
            img("photo-1542291026-7eec264c27ff"),
            img("photo-1460353581641-37baddab0fa2"),
            img("photo-1549298916-b41d501d3772")
        ],

        brand: "Puma",

        description:
            "High-top sneakers inspired by street fashion with padded ankle support.",

        price: 3999,
        oldPrice: 5999,

        catName: "Fashion",
        SubcatName: "Footwear",
        innersubcatName: "Men's Footwear",

        rating: 4.6,
        discount: 33,

        variants: [
            {
                options: {
                    Size: "10",
                    Color: "Black",
                    Material: "Canvas"
                },

                sku: "FASH-M-SHOE-004-BLK",

                price: 3999,

                stock: 35,

                images: [
                    img("photo-1608231387042-66d1773070a5")
                ]
            }
        ]

    },




    {
        name: "Premium Running Shoes",

        images: [
            img("photo-1542291026-7eec264c27ff"),
            img("photo-1495555961986-6d4c1ecb7be3"),
            img("photo-1460353581641-37baddab0fa2"),
            img("photo-1549298916-b41d501d3772")
        ],

        brand: "ASICS",

        description:
            "Performance running shoes with breathable mesh and advanced cushioning.",

        price: 5499,
        oldPrice: 7999,

        catName: "Fashion",
        SubcatName: "Footwear",
        innersubcatName: "Men's Footwear",

        rating: 4.8,
        discount: 31,

        variants: [
            {
                options: {
                    Size: "9",
                    Color: "Blue",
                    Material: "Mesh"
                },

                sku: "FASH-M-SHOE-005-BLU",

                price: 5499,

                stock: 30,

                images: [
                    img("photo-1542291026-7eec264c27ff")
                ]
            }
        ]

    },




    {
        name: "Classic Brown Leather Loafers",

        images: [
            img("photo-1614252235316-8c857d38b5f4"),
            img("photo-1612817159949-195b6eb9e31a"),
            img("photo-1549298916-b41d501d3772"),
            img("photo-1495555961986-6d4c1ecb7be3")
        ],

        brand: "Red Tape",

        description:
            "Elegant leather loafers designed for semi-formal and casual occasions.",

        price: 2299,
        oldPrice: 3499,

        catName: "Fashion",
        SubcatName: "Footwear",
        innersubcatName: "Men's Footwear",

        rating: 4.5,
        discount: 34,

        variants: [
            {
                options: {
                    Size: "8",
                    Color: "Brown",
                    Material: "Leather"
                },

                sku: "FASH-M-SHOE-006-BRN",

                price: 2299,

                stock: 45,

                images: [
                    img("photo-1614252235316-8c857d38b5f4")
                ]
            }
        ]

    },




    {
        name: "Black Chelsea Leather Boots",

        images: [
            img("photo-1608256246200-53e635b5b65f"),
            img("photo-1614252235316-8c857d38b5f4"),
            img("photo-1549298916-b41d501d3772"),
            img("photo-1495555961986-6d4c1ecb7be3")
        ],

        brand: "Hush Puppies",

        description:
            "Premium Chelsea boots with elastic side panels and leather finish.",

        price: 4999,
        oldPrice: 6999,

        catName: "Fashion",
        SubcatName: "Footwear",
        innersubcatName: "Men's Footwear",

        rating: 4.7,
        discount: 28,

        variants: [
            {
                options: {
                    Size: "10",
                    Color: "Black",
                    Material: "Leather"
                },

                sku: "FASH-M-SHOE-007-BLK",

                price: 4999,

                stock: 20,

                images: [
                    img("photo-1608256246200-53e635b5b65f")
                ]
            }
        ]

    },




    {
        name: "Canvas Casual Slip On Shoes",

        images: [
            img("photo-1525966222134-fcfa99b8ae77"),
            img("photo-1549298916-b41d501d3772"),
            img("photo-1494496195158-c3becb4f2475"),
            img("photo-1460353581641-37baddab0fa2")
        ],

        brand: "Skechers",

        description:
            "Lightweight canvas slip-on shoes for comfortable daily wear.",

        price: 1999,
        oldPrice: 2999,

        catName: "Fashion",
        SubcatName: "Footwear",
        innersubcatName: "Men's Footwear",

        rating: 4.4,
        discount: 33,

        variants: [
            {
                options: {
                    Size: "9",
                    Color: "Grey",
                    Material: "Canvas"
                },

                sku: "FASH-M-SHOE-008-GRY",

                price: 1999,

                stock: 60,

                images: [
                    img("photo-1525966222134-fcfa99b8ae77")
                ]
            }
        ]

    },




    {
        name: "Premium Black Oxford Shoes",

        images: [
            img("photo-1614252235316-8c857d38b5f4"),
            img("photo-1612817159949-195b6eb9e31a"),
            img("photo-1549298916-b41d501d3772"),
            img("photo-1495555961986-6d4c1ecb7be3")
        ],

        brand: "Clarks",

        description:
            "Classic Oxford shoes with premium leather finish for formal events.",

        price: 5999,
        oldPrice: 8999,

        catName: "Fashion",
        SubcatName: "Footwear",
        innersubcatName: "Men's Footwear",

        rating: 4.9,
        discount: 33,

        variants: [
            {
                options: {
                    Size: "9",
                    Color: "Black",
                    Material: "Genuine Leather"
                },

                sku: "FASH-M-SHOE-009-BLK",

                price: 5999,

                stock: 15,

                images: [
                    img("photo-1614252235316-8c857d38b5f4")
                ]
            }
        ]

    },




    {
        name: "Everyday Comfort Walking Shoes",

        images: [
            img("photo-1460353581641-37baddab0fa2"),
            img("photo-1542291026-7eec264c27ff"),
            img("photo-1495555961986-6d4c1ecb7be3"),
            img("photo-1549298916-b41d501d3772")
        ],

        brand: "Skechers",

        description:
            "Comfort walking shoes with memory foam cushioning for daily use.",

        price: 3299,
        oldPrice: 4999,

        catName: "Fashion",
        SubcatName: "Footwear",
        innersubcatName: "Men's Footwear",

        rating: 4.7,
        discount: 34,

        variants: [
            {
                options: {
                    Size: "8",
                    Color: "Grey",
                    Material: "Mesh"
                },

                sku: "FASH-M-SHOE-010-GRY",

                price: 3299,

                stock: 40,

                images: [
                    img("photo-1460353581641-37baddab0fa2")
                ]
            }
        ]

    },

    /* ===========================
        WOMEN'S DRESSES
   =========================== */


    {
        name: "Floral Printed Maxi Dress",

        images: [
            img("photo-1515372039744-b8f02a3ae446"),
            img("photo-1496747611176-843222e1e57c"),
            img("photo-1515886657613-9f3515b0c78f"),
            img("photo-1485968579580-b6d095142e6e")
        ],

        brand: "AND",

        description:
            "Elegant floral maxi dress with lightweight fabric perfect for summer outings and casual occasions.",

        price: 2499,
        oldPrice: 3999,

        catName: "Fashion",
        SubcatName: "Womens",
        innersubcatName: "Dresses",

        rating: 4.7,
        discount: 37,

        variants: [
            {
                options: {
                    Size: "M",
                    Color: "Floral Blue",
                    Material: "Georgette"
                },

                sku: "FASH-W-DRESS-001-FBL",

                price: 2499,

                stock: 35,

                images: [
                    img("photo-1515372039744-b8f02a3ae446")
                ]
            }
        ]

    },




    {
        name: "Elegant Black Party Dress",

        images: [
            img("photo-1539008835657-9e8e9680c956"),
            img("photo-1566174053879-31528523f8ae"),
            img("photo-1595777457583-95e059d581b8"),
            img("photo-1496747611176-843222e1e57c")
        ],

        brand: "Zara",

        description:
            "Premium black party dress with modern silhouette for evening events.",

        price: 3499,
        oldPrice: 5999,

        catName: "Fashion",
        SubcatName: "Womens",
        innersubcatName: "Dresses",

        rating: 4.8,
        discount: 41,

        variants: [
            {
                options: {
                    Size: "S",
                    Color: "Black",
                    Material: "Polyester"
                },

                sku: "FASH-W-DRESS-002-BLK",

                price: 3499,

                stock: 25,

                images: [
                    img("photo-1539008835657-9e8e9680c956")
                ]
            }
        ]

    },




    {
        name: "Cotton Summer Casual Dress",

        images: [
            img("photo-1496747611176-843222e1e57c"),
            img("photo-1515372039744-b8f02a3ae446"),
            img("photo-1506629905607-d9c297d8e0e0"),
            img("photo-1485230895905-ec40ba36b9bc")
        ],

        brand: "H&M",

        description:
            "Comfortable cotton casual dress designed for everyday summer wear.",

        price: 1299,
        oldPrice: 1999,

        catName: "Fashion",
        SubcatName: "Womens",
        innersubcatName: "Dresses",

        rating: 4.5,
        discount: 35,

        variants: [
            {
                options: {
                    Size: "L",
                    Color: "Pink",
                    Material: "Cotton"
                },

                sku: "FASH-W-DRESS-003-PNK",

                price: 1299,

                stock: 60,

                images: [
                    img("photo-1496747611176-843222e1e57c")
                ]
            }
        ]

    },




    {
        name: "Satin Evening Gown",

        images: [
            img("photo-1566174053879-31528523f8ae"),
            img("photo-1539008835657-9e8e9680c956"),
            img("photo-1595777457583-95e059d581b8"),
            img("photo-1496747611176-843222e1e57c")
        ],

        brand: "Forever New",

        description:
            "Luxury satin gown designed for weddings and premium occasions.",

        price: 4999,
        oldPrice: 7999,

        catName: "Fashion",
        SubcatName: "Womens",
        innersubcatName: "Dresses",

        rating: 4.9,
        discount: 37,

        variants: [
            {
                options: {
                    Size: "M",
                    Color: "Wine",
                    Material: "Satin"
                },

                sku: "FASH-W-DRESS-004-WIN",

                price: 4999,

                stock: 20,

                images: [
                    img("photo-1566174053879-31528523f8ae")
                ]
            }
        ]

    },




    {
        name: "Printed A-Line Midi Dress",

        images: [
            img("photo-1515372039744-b8f02a3ae446"),
            img("photo-1496747611176-843222e1e57c"),
            img("photo-1515886657613-9f3515b0c78f"),
            img("photo-1539008835657-9e8e9680c956")
        ],

        brand: "Mango",

        description:
            "Stylish A-line midi dress with comfortable fit and printed design.",

        price: 2199,
        oldPrice: 3499,

        catName: "Fashion",
        SubcatName: "Womens",
        innersubcatName: "Dresses",

        rating: 4.6,
        discount: 37,

        variants: [
            {
                options: {
                    Size: "M",
                    Color: "Green Print",
                    Material: "Rayon"
                },

                sku: "FASH-W-DRESS-005-GRN",

                price: 2199,

                stock: 45,

                images: [
                    img("photo-1515372039744-b8f02a3ae446")
                ]
            }
        ]

    },




    /* ===========================
              WOMEN'S TOPS
       =========================== */


    {
        name: "Premium Ribbed Crop Top",

        images: [
            img("photo-1485968579580-b6d095142e6e"),
            img("photo-1506629905607-d9c297d8e0e0"),
            img("photo-1515886657613-9f3515b0c78f"),
            img("photo-1525507119028-ed4c629a60a3")
        ],

        brand: "H&M",

        description:
            "Trendy ribbed crop top with stretch fabric and modern fit.",

        price: 799,
        oldPrice: 1299,

        catName: "Fashion",
        SubcatName: "Womens",
        innersubcatName: "Tops",

        rating: 4.5,
        discount: 38,

        variants: [
            {
                options: {
                    Size: "S",
                    Color: "White",
                    Material: "Cotton Blend"
                },

                sku: "FASH-W-TOP-001-WHT",

                price: 799,

                stock: 80,

                images: [
                    img("photo-1485968579580-b6d095142e6e")
                ]
            }
        ]

    },




    {
        name: "Oversized Casual Women's Shirt Top",

        images: [
            img("photo-1525507119028-ed4c629a60a3"),
            img("photo-1515886657613-9f3515b0c78f"),
            img("photo-1496747611176-843222e1e57c"),
            img("photo-1485230895905-ec40ba36b9bc")
        ],

        brand: "Forever 21",

        description:
            "Relaxed oversized shirt top suitable for casual everyday styling.",

        price: 1199,
        oldPrice: 1999,

        catName: "Fashion",
        SubcatName: "Womens",
        innersubcatName: "Tops",

        rating: 4.6,
        discount: 40,

        variants: [
            {
                options: {
                    Size: "M",
                    Color: "Blue",
                    Material: "Cotton"
                },

                sku: "FASH-W-TOP-002-BLU",

                price: 1199,

                stock: 55,

                images: [
                    img("photo-1525507119028-ed4c629a60a3")
                ]
            }
        ]

    },


    /* ===========================
        WOMEN'S TOPS
        CONTINUED
   =========================== */


    {
        name: "Elegant Chiffon Party Top",

        images: [
            img("photo-1525507119028-ed4c629a60a3"),
            img("photo-1485968579580-b6d095142e6e"),
            img("photo-1515886657613-9f3515b0c78f"),
            img("photo-1496747611176-843222e1e57c")
        ],

        brand: "Mango",

        description:
            "Elegant chiffon party top with premium flowy fabric for evening styling.",

        price: 1499,
        oldPrice: 2499,

        catName: "Fashion",
        SubcatName: "Womens",
        innersubcatName: "Tops",

        rating: 4.6,
        discount: 40,

        variants: [
            {
                options: {
                    Size: "M",
                    Color: "Black",
                    Material: "Chiffon"
                },
                sku: "FASH-W-TOP-003-BLK",
                price: 1499,
                stock: 40,
                images: [
                    img("photo-1525507119028-ed4c629a60a3")
                ]
            }
        ]

    },



    {
        name: "Women's Linen Casual Shirt Top",

        images: [
            img("photo-1525507119028-ed4c629a60a3"),
            img("photo-1496747611176-843222e1e57c"),
            img("photo-1515886657613-9f3515b0c78f"),
            img("photo-1506629905607-d9c297d8e0e0")
        ],

        brand: "Zara",

        description:
            "Minimal linen shirt top with relaxed fit for casual everyday wear.",

        price: 1999,
        oldPrice: 2999,

        catName: "Fashion",
        SubcatName: "Womens",
        innersubcatName: "Tops",

        rating: 4.7,
        discount: 33,

        variants: [
            {
                options: {
                    Size: "L",
                    Color: "Beige",
                    Material: "Linen"
                },
                sku: "FASH-W-TOP-004-BEI",
                price: 1999,
                stock: 35,
                images: [
                    img("photo-1525507119028-ed4c629a60a3")
                ]
            }
        ]

    },



    {
        name: "Women's Basic Cotton Tank Top",

        images: [
            img("photo-1485968579580-b6d095142e6e"),
            img("photo-1506629905607-d9c297d8e0e0"),
            img("photo-1515886657613-9f3515b0c78f"),
            img("photo-1525507119028-ed4c629a60a3")
        ],

        brand: "H&M",

        description:
            "Comfortable cotton tank top perfect for layering and casual outfits.",

        price: 599,
        oldPrice: 999,

        catName: "Fashion",
        SubcatName: "Womens",
        innersubcatName: "Tops",

        rating: 4.4,
        discount: 40,

        variants: [
            {
                options: {
                    Size: "S",
                    Color: "White",
                    Material: "Cotton"
                },
                sku: "FASH-W-TOP-005-WHT",
                price: 599,
                stock: 100,
                images: [
                    img("photo-1485968579580-b6d095142e6e")
                ]
            }
        ]

    },




    /* ===========================
              WOMEN'S JEANS
       =========================== */


    {
        name: "High Waist Skinny Fit Jeans",

        images: [
            img("photo-1541099649105-f69ad21f3246"),
            img("photo-1542272604-787c3835535d"),
            img("photo-1584370848010-d7fe6bc767ec"),
            img("photo-1515886657613-9f3515b0c78f")
        ],

        brand: "Levi's",

        description:
            "High waist skinny fit jeans with stretch denim for a comfortable fit.",

        price: 2499,
        oldPrice: 3999,

        catName: "Fashion",
        SubcatName: "Womens",
        innersubcatName: "Jeans",

        rating: 4.8,
        discount: 37,

        variants: [
            {
                options: {
                    Size: "28",
                    Color: "Blue",
                    Material: "Denim"
                },
                sku: "FASH-W-JEANS-001-BLU",
                price: 2499,
                stock: 45,
                images: [
                    img("photo-1541099649105-f69ad21f3246")
                ]
            }
        ]

    },




    {
        name: "Wide Leg Denim Jeans",

        images: [
            img("photo-1584370848010-d7fe6bc767ec"),
            img("photo-1542272604-787c3835535d"),
            img("photo-1541099649105-f69ad21f3246"),
            img("photo-1515886657613-9f3515b0c78f")
        ],

        brand: "Roadster",

        description:
            "Trendy wide leg jeans with relaxed silhouette and premium denim fabric.",

        price: 2199,
        oldPrice: 3299,

        catName: "Fashion",
        SubcatName: "Womens",
        innersubcatName: "Jeans",

        rating: 4.6,
        discount: 33,

        variants: [
            {
                options: {
                    Size: "30",
                    Color: "Light Blue",
                    Material: "Denim"
                },
                sku: "FASH-W-JEANS-002-LBL",
                price: 2199,
                stock: 60,
                images: [
                    img("photo-1584370848010-d7fe6bc767ec")
                ]
            }
        ]

    },




    {
        name: "Black High Rise Mom Jeans",

        images: [
            img("photo-1541099649105-f69ad21f3246"),
            img("photo-1584370848010-d7fe6bc767ec"),
            img("photo-1542272604-787c3835535d"),
            img("photo-1515886657613-9f3515b0c78f")
        ],

        brand: "Only",

        description:
            "High rise mom jeans with comfortable fit and classic black wash.",

        price: 2299,
        oldPrice: 3499,

        catName: "Fashion",
        SubcatName: "Womens",
        innersubcatName: "Jeans",

        rating: 4.7,
        discount: 34,

        variants: [
            {
                options: {
                    Size: "28",
                    Color: "Black",
                    Material: "Denim"
                },
                sku: "FASH-W-JEANS-003-BLK",
                price: 2299,
                stock: 50,
                images: [
                    img("photo-1541099649105-f69ad21f3246")
                ]
            }
        ]

    },




    /* ===========================
            WOMEN'S FOOTWEAR
       =========================== */


    {
        name: "Classic Block Heel Sandals",

        images: [
            img("photo-1543163521-1bf539c55dd2"),
            img("photo-1560769629-975ec94e6a86"),
            img("photo-1542291026-7eec264c27ff"),
            img("photo-1460353581641-37baddab0fa2")
        ],

        brand: "Steve Madden",

        description:
            "Elegant block heel sandals designed for parties and special occasions.",

        price: 2999,
        oldPrice: 4999,

        catName: "Fashion",
        SubcatName: "Footwear",
        innersubcatName: "Women's Footwear",

        rating: 4.7,
        discount: 40,

        variants: [
            {
                options: {
                    Size: "7",
                    Color: "Nude",
                    Material: "Synthetic Leather"
                },
                sku: "FASH-W-SHOE-001-NUD",
                price: 2999,
                stock: 30,
                images: [
                    img("photo-1543163521-1bf539c55dd2")
                ]
            }
        ]

    },




    {
        name: "Women's White Lifestyle Sneakers",

        images: [
            img("photo-1494496195158-c3becb4f2475"),
            img("photo-1542291026-7eec264c27ff"),
            img("photo-1460353581641-37baddab0fa2"),
            img("photo-1525966222134-fcfa99b8ae77")
        ],

        brand: "Adidas",

        description:
            "Clean white sneakers with comfortable cushioning for daily casual wear.",

        price: 3999,
        oldPrice: 5999,

        catName: "Fashion",
        SubcatName: "Footwear",
        innersubcatName: "Women's Footwear",

        rating: 4.8,
        discount: 33,

        variants: [
            {
                options: {
                    Size: "6",
                    Color: "White",
                    Material: "Synthetic"
                },
                sku: "FASH-W-SHOE-002-WHT",
                price: 3999,
                stock: 40,
                images: [
                    img("photo-1494496195158-c3becb4f2475")
                ]
            }
        ]

    },




    {
        name: "Women's Ballet Flats",

        images: [
            img("photo-1515562141207-7a88fb7ce338"),
            img("photo-1543163521-1bf539c55dd2"),
            img("photo-1560769629-975ec94e6a86"),
            img("photo-1525966222134-fcfa99b8ae77")
        ],

        brand: "Bata",

        description:
            "Comfortable ballet flats suitable for office and everyday use.",

        price: 1299,
        oldPrice: 1999,

        catName: "Fashion",
        SubcatName: "Footwear",
        innersubcatName: "Women's Footwear",

        rating: 4.5,
        discount: 35,

        variants: [
            {
                options: {
                    Size: "5",
                    Color: "Black",
                    Material: "Faux Leather"
                },
                sku: "FASH-W-SHOE-003-BLK",
                price: 1299,
                stock: 70,
                images: [
                    img("photo-1515562141207-7a88fb7ce338")
                ]
            }
        ]

    },


    /* ===========================
       MORE WOMEN'S DRESSES
   =========================== */


    {
        name: "Women's Floral Wrap Dress",

        images: [
            img("photo-1515372039744-b8f02a3ae446"),
            img("photo-1496747611176-843222e1e57c"),
            img("photo-1515886657613-9f3515b0c78f"),
            img("photo-1539008835657-9e8e9680c956")
        ],

        brand: "Mango",

        description:
            "Beautiful floral wrap dress with flattering fit for casual outings and brunch wear.",

        price: 2799,
        oldPrice: 4499,

        catName: "Fashion",
        SubcatName: "Womens",
        innersubcatName: "Dresses",

        rating: 4.7,
        discount: 38,

        variants: [
            {
                options: {
                    Size: "M",
                    Color: "Yellow Floral",
                    Material: "Rayon"
                },

                sku: "FASH-W-DRESS-006-YLW",

                price: 2799,

                stock: 35,

                images: [
                    img("photo-1515372039744-b8f02a3ae446")
                ]
            }
        ]

    },




    {
        name: "Women's Denim Shirt Dress",

        images: [
            img("photo-1496747611176-843222e1e57c"),
            img("photo-1515886657613-9f3515b0c78f"),
            img("photo-1515372039744-b8f02a3ae446"),
            img("photo-1539008835657-9e8e9680c956")
        ],

        brand: "Levi's",

        description:
            "Stylish denim shirt dress with button closure and comfortable fit.",

        price: 2299,
        oldPrice: 3499,

        catName: "Fashion",
        SubcatName: "Womens",
        innersubcatName: "Dresses",

        rating: 4.6,
        discount: 34,

        variants: [
            {
                options: {
                    Size: "L",
                    Color: "Blue",
                    Material: "Denim"
                },

                sku: "FASH-W-DRESS-007-BLU",

                price: 2299,

                stock: 45,

                images: [
                    img("photo-1496747611176-843222e1e57c")
                ]
            }
        ]

    },




    {
        name: "Women's Casual Cotton Shirt Dress",

        images: [
            img("photo-1515372039744-b8f02a3ae446"),
            img("photo-1496747611176-843222e1e57c"),
            img("photo-1506629905607-d9c297d8e0e0"),
            img("photo-1515886657613-9f3515b0c78f")
        ],

        brand: "H&M",

        description:
            "Comfortable cotton shirt dress for everyday casual styling.",

        price: 1599,
        oldPrice: 2499,

        catName: "Fashion",
        SubcatName: "Womens",
        innersubcatName: "Dresses",

        rating: 4.5,
        discount: 36,

        variants: [
            {
                options: {
                    Size: "M",
                    Color: "White",
                    Material: "Cotton"
                },

                sku: "FASH-W-DRESS-008-WHT",

                price: 1599,

                stock: 70,

                images: [
                    img("photo-1515372039744-b8f02a3ae446")
                ]
            }
        ]

    },




    /* ===========================
              MORE WOMEN JEANS
       =========================== */


    {
        name: "Women's Straight Fit Blue Jeans",

        images: [
            img("photo-1541099649105-f69ad21f3246"),
            img("photo-1542272604-787c3835535d"),
            img("photo-1584370848010-d7fe6bc767ec"),
            img("photo-1515886657613-9f3515b0c78f")
        ],

        brand: "Roadster",

        description:
            "Classic straight fit jeans with comfortable stretch denim.",

        price: 1899,
        oldPrice: 2999,

        catName: "Fashion",
        SubcatName: "Womens",
        innersubcatName: "Jeans",

        rating: 4.5,
        discount: 37,

        variants: [
            {
                options: {
                    Size: "30",
                    Color: "Dark Blue",
                    Material: "Denim"
                },

                sku: "FASH-W-JEANS-004-DBL",

                price: 1899,

                stock: 65,

                images: [
                    img("photo-1541099649105-f69ad21f3246")
                ]
            }
        ]

    },




    {
        name: "Women's Distressed Boyfriend Jeans",

        images: [
            img("photo-1584370848010-d7fe6bc767ec"),
            img("photo-1541099649105-f69ad21f3246"),
            img("photo-1542272604-787c3835535d"),
            img("photo-1515886657613-9f3515b0c78f")
        ],

        brand: "Only",

        description:
            "Relaxed boyfriend jeans with distressed details for street fashion looks.",

        price: 2399,
        oldPrice: 3499,

        catName: "Fashion",
        SubcatName: "Womens",
        innersubcatName: "Jeans",

        rating: 4.6,
        discount: 31,

        variants: [
            {
                options: {
                    Size: "28",
                    Color: "Light Blue",
                    Material: "Denim"
                },

                sku: "FASH-W-JEANS-005-LBL",

                price: 2399,

                stock: 40,

                images: [
                    img("photo-1584370848010-d7fe6bc767ec")
                ]
            }
        ]

    },




    /* ===========================
            WOMEN FOOTWEAR
            CONTINUED
       =========================== */


    {
        name: "Women's Stiletto Party Heels",

        images: [
            img("photo-1543163521-1bf539c55dd2"),
            img("photo-1560769629-975ec94e6a86"),
            img("photo-1515562141207-7a88fb7ce338"),
            img("photo-1494496195158-c3becb4f2475")
        ],

        brand: "Steve Madden",

        description:
            "Elegant stiletto heels designed for parties and premium occasions.",

        price: 3999,
        oldPrice: 5999,

        catName: "Fashion",
        SubcatName: "Footwear",
        innersubcatName: "Women's Footwear",

        rating: 4.8,
        discount: 33,

        variants: [
            {
                options: {
                    Size: "7",
                    Color: "Black",
                    Material: "Synthetic Leather"
                },

                sku: "FASH-W-SHOE-004-BLK",

                price: 3999,

                stock: 25,

                images: [
                    img("photo-1543163521-1bf539c55dd2")
                ]
            }
        ]

    },




    {
        name: "Women's Casual Sneakers",

        images: [
            img("photo-1494496195158-c3becb4f2475"),
            img("photo-1542291026-7eec264c27ff"),
            img("photo-1525966222134-fcfa99b8ae77"),
            img("photo-1460353581641-37baddab0fa2")
        ],

        brand: "Puma",

        description:
            "Comfortable casual sneakers suitable for college and everyday wear.",

        price: 2999,
        oldPrice: 4499,

        catName: "Fashion",
        SubcatName: "Footwear",
        innersubcatName: "Women's Footwear",

        rating: 4.7,
        discount: 33,

        variants: [
            {
                options: {
                    Size: "6",
                    Color: "Pink",
                    Material: "Mesh"
                },

                sku: "FASH-W-SHOE-005-PNK",

                price: 2999,

                stock: 45,

                images: [
                    img("photo-1494496195158-c3becb4f2475")
                ]
            }
        ]

    },




    {
        name: "Women's Flat Sandals",

        images: [
            img("photo-1515562141207-7a88fb7ce338"),
            img("photo-1543163521-1bf539c55dd2"),
            img("photo-1560769629-975ec94e6a86"),
            img("photo-1494496195158-c3becb4f2475")
        ],

        brand: "Bata",

        description:
            "Comfortable flat sandals with elegant design for daily use.",

        price: 999,
        oldPrice: 1499,

        catName: "Fashion",
        SubcatName: "Footwear",
        innersubcatName: "Women's Footwear",

        rating: 4.4,
        discount: 33,

        variants: [
            {
                options: {
                    Size: "5",
                    Color: "Brown",
                    Material: "Faux Leather"
                },

                sku: "FASH-W-SHOE-006-BRN",

                price: 999,

                stock: 90,

                images: [
                    img("photo-1515562141207-7a88fb7ce338")
                ]
            }
        ]

    },




    {
        name: "Women's Premium Leather Loafers",

        images: [
            img("photo-1515562141207-7a88fb7ce338"),
            img("photo-1525966222134-fcfa99b8ae77"),
            img("photo-1494496195158-c3becb4f2475"),
            img("photo-1560769629-975ec94e6a86")
        ],

        brand: "Clarks",

        description:
            "Premium loafers combining comfort and formal fashion.",

        price: 3499,
        oldPrice: 5499,

        catName: "Fashion",
        SubcatName: "Footwear",
        innersubcatName: "Women's Footwear",

        rating: 4.7,
        discount: 36,

        variants: [
            {
                options: {
                    Size: "6",
                    Color: "Tan",
                    Material: "Leather"
                },

                sku: "FASH-W-SHOE-007-TAN",

                price: 3499,

                stock: 30,

                images: [
                    img("photo-1515562141207-7a88fb7ce338")
                ]
            }
        ]

    },


    /* ===========================
          SMARTPHONES
   =========================== */


    {
        name: "iPhone 15 Pro Max",

        images: [
            img("photo-1592899677977-9c10ca588bbd"),
            img("photo-1511707171634-5f897ff02aa9"),
            img("photo-1598327105666-5b89351aff97"),
            img("photo-1510557880182-3d4d3cba35a5")
        ],

        brand: "Apple",

        description:
            "Apple iPhone 15 Pro Max with titanium design, A17 Pro chip and advanced camera system.",

        price: 134999,

        oldPrice: 149999,

        catName: "Electronics",
        SubcatName: "Mobile Accessories",
        innersubcatName: "Smartphones",

        rating: 4.9,

        discount: 10,


        variants: [
            {
                options: {
                    Storage: "256GB",
                    Color: "Natural Titanium",
                    RAM: "8GB"
                },

                sku: "ELEC-PHONE-001-IP15PM",

                price: 134999,

                stock: 15,

                images: [
                    img("photo-1592899677977-9c10ca588bbd")
                ]
            }
        ]

    },




    {
        name: "Samsung Galaxy S25 Ultra",

        images: [
            img("photo-1610945265064-0e34e5519bbf"),
            img("photo-1511707171634-5f897ff02aa9"),
            img("photo-1598327105666-5b89351aff97"),
            img("photo-1510557880182-3d4d3cba35a5")
        ],

        brand: "Samsung",

        description:
            "Premium Android flagship smartphone with AI features, powerful processor and pro-grade camera.",

        price: 124999,

        oldPrice: 139999,

        catName: "Electronics",
        SubcatName: "Mobile Accessories",
        innersubcatName: "Smartphones",

        rating: 4.8,

        discount: 11,


        variants: [
            {
                options: {
                    Storage: "256GB",
                    Color: "Titanium Black",
                    RAM: "12GB"
                },

                sku: "ELEC-PHONE-002-S25U",

                price: 124999,

                stock: 20,

                images: [
                    img("photo-1610945265064-0e34e5519bbf")
                ]
            }
        ]

    },




    {
        name: "Google Pixel 9 Pro",

        images: [
            img("photo-1598327105666-5b89351aff97"),
            img("photo-1511707171634-5f897ff02aa9"),
            img("photo-1510557880182-3d4d3cba35a5"),
            img("photo-1610945265064-0e34e5519bbf")
        ],

        brand: "Google",

        description:
            "Google Pixel 9 Pro with advanced AI camera, pure Android experience and Tensor processor.",

        price: 99999,

        oldPrice: 109999,

        catName: "Electronics",
        SubcatName: "Mobile Accessories",
        innersubcatName: "Smartphones",

        rating: 4.7,

        discount: 9,


        variants: [
            {
                options: {
                    Storage: "256GB",
                    Color: "Obsidian",
                    RAM: "16GB"
                },

                sku: "ELEC-PHONE-003-PIX9",

                price: 99999,

                stock: 18,

                images: [
                    img("photo-1598327105666-5b89351aff97")
                ]
            }
        ]

    },




    {
        name: "OnePlus 13 5G",

        images: [
            img("photo-1598327105666-5b89351aff97"),
            img("photo-1511707171634-5f897ff02aa9"),
            img("photo-1592899677977-9c10ca588bbd"),
            img("photo-1510557880182-3d4d3cba35a5")
        ],

        brand: "OnePlus",

        description:
            "Performance focused flagship smartphone with Snapdragon processor and fast charging.",

        price: 69999,

        oldPrice: 79999,

        catName: "Electronics",
        SubcatName: "Mobile Accessories",
        innersubcatName: "Smartphones",

        rating: 4.6,

        discount: 12,


        variants: [
            {
                options: {
                    Storage: "256GB",
                    Color: "Black Eclipse",
                    RAM: "12GB"
                },

                sku: "ELEC-PHONE-004-OP13",

                price: 69999,

                stock: 30,

                images: [
                    img("photo-1598327105666-5b89351aff97")
                ]
            }
        ]

    },




    {
        name: "Samsung Galaxy A55 5G",

        images: [
            img("photo-1610945265064-0e34e5519bbf"),
            img("photo-1598327105666-5b89351aff97"),
            img("photo-1511707171634-5f897ff02aa9"),
            img("photo-1510557880182-3d4d3cba35a5")
        ],

        brand: "Samsung",

        description:
            "Mid-range 5G smartphone with AMOLED display and premium glass design.",

        price: 34999,

        oldPrice: 39999,

        catName: "Electronics",
        SubcatName: "Mobile Accessories",
        innersubcatName: "Smartphones",

        rating: 4.5,

        discount: 13,


        variants: [
            {
                options: {
                    Storage: "128GB",
                    Color: "Awesome Navy",
                    RAM: "8GB"
                },

                sku: "ELEC-PHONE-005-A55",

                price: 34999,

                stock: 50,

                images: [
                    img("photo-1610945265064-0e34e5519bbf")
                ]
            }
        ]

    },




    {
        name: "iPhone 14",

        images: [
            img("photo-1592899677977-9c10ca588bbd"),
            img("photo-1510557880182-3d4d3cba35a5"),
            img("photo-1511707171634-5f897ff02aa9"),
            img("photo-1598327105666-5b89351aff97")
        ],

        brand: "Apple",

        description:
            "iPhone 14 with powerful A15 Bionic chip and dual camera system.",

        price: 59999,

        oldPrice: 69999,

        catName: "Electronics",
        SubcatName: "Mobile Accessories",
        innersubcatName: "Smartphones",

        rating: 4.8,

        discount: 14,


        variants: [
            {
                options: {
                    Storage: "128GB",
                    Color: "Midnight",
                    RAM: "6GB"
                },

                sku: "ELEC-PHONE-006-IP14",

                price: 59999,

                stock: 25,

                images: [
                    img("photo-1592899677977-9c10ca588bbd")
                ]
            }
        ]

    },


    {
        name: "Nothing Phone 3",

        images: [
            img("photo-1598327105666-5b89351aff97"),
            img("photo-1511707171634-5f897ff02aa9"),
            img("photo-1510557880182-3d4d3cba35a5"),
            img("photo-1592899677977-9c10ca588bbd")
        ],

        brand: "Nothing",

        description:
            "Unique transparent design smartphone with clean software experience.",

        price: 44999,

        oldPrice: 49999,

        catName: "Electronics",
        SubcatName: "Mobile Accessories",
        innersubcatName: "Smartphones",

        rating: 4.4,

        discount: 10,


        variants: [
            {
                options: {
                    Storage: "256GB",
                    Color: "Black",
                    RAM: "12GB"
                },

                sku: "ELEC-PHONE-007-NOTH3",

                price: 44999,

                stock: 22,

                images: [
                    img("photo-1598327105666-5b89351aff97")
                ]
            }
        ]

    },


    /* ===========================
        MOBILE ACCESSORIES
   =========================== */


    {
        name: "MagSafe Silicone Case for iPhone",

        images: [
            img("photo-1601593346740-925612772716"),
            img("photo-1592899677977-9c10ca588bbd"),
            img("photo-1511707171634-5f897ff02aa9"),
            img("photo-1510557880182-3d4d3cba35a5")
        ],

        brand: "Apple",

        description:
            "Premium silicone protective case with MagSafe compatibility and soft-touch finish.",

        price: 3999,

        oldPrice: 4999,

        catName: "Electronics",
        SubcatName: "Mobile Accessories",
        innersubcatName: "Accessories",

        rating: 4.8,

        discount: 20,


        variants: [
            {
                options: {
                    Color: "Black",
                    Compatible: "iPhone 15 Pro Max"
                },

                sku: "ELEC-ACC-001-MAGSAFE",

                price: 3999,

                stock: 40,

                images: [
                    img("photo-1601593346740-925612772716")
                ]
            }
        ]

    },




    {
        name: "Samsung Fast Wireless Charger",

        images: [
            img("photo-1587033411391-5d9e51cce126"),
            img("photo-1609592424204-1a7b2d7e9e31"),
            img("photo-1583863788434-e58a36330cf0"),
            img("photo-1516321318423-f06f85e504b3")
        ],

        brand: "Samsung",

        description:
            "Fast wireless charging pad compatible with Samsung Galaxy devices.",

        price: 2499,

        oldPrice: 3499,

        catName: "Electronics",
        SubcatName: "Mobile Accessories",
        innersubcatName: "Accessories",

        rating: 4.6,

        discount: 28,


        variants: [
            {
                options: {
                    Color: "Black",
                    Power: "15W"
                },

                sku: "ELEC-ACC-002-WCHARGER",

                price: 2499,

                stock: 60,

                images: [
                    img("photo-1587033411391-5d9e51cce126")
                ]
            }
        ]

    },




    {
        name: "120W GaN Fast Charger",

        images: [
            img("photo-1583863788434-e58a36330cf0"),
            img("photo-1609592424204-1a7b2d7e9e31"),
            img("photo-1587033411391-5d9e51cce126"),
            img("photo-1516321318423-f06f85e504b3")
        ],

        brand: "Anker",

        description:
            "Compact GaN fast charger supporting USB-C PD fast charging technology.",

        price: 2999,

        oldPrice: 4499,

        catName: "Electronics",
        SubcatName: "Mobile Accessories",
        innersubcatName: "Accessories",

        rating: 4.7,

        discount: 33,


        variants: [
            {
                options: {
                    Ports: "2 USB-C + 1 USB-A",
                    Power: "120W"
                },

                sku: "ELEC-ACC-003-GAN120",

                price: 2999,

                stock: 80,

                images: [
                    img("photo-1583863788434-e58a36330cf0")
                ]
            }
        ]

    },




    {
        name: "20000mAh Fast Charging Power Bank",

        images: [
            img("photo-1609592424204-1a7b2d7e9e31"),
            img("photo-1587033411391-5d9e51cce126"),
            img("photo-1583863788434-e58a36330cf0"),
            img("photo-1516321318423-f06f85e504b3")
        ],

        brand: "Portronics",

        description:
            "High capacity power bank with fast charging support and dual USB ports.",

        price: 1799,

        oldPrice: 2499,

        catName: "Electronics",
        SubcatName: "Mobile Accessories",
        innersubcatName: "Accessories",

        rating: 4.5,

        discount: 28,


        variants: [
            {
                options: {
                    Capacity: "20000mAh",
                    Color: "Black"
                },

                sku: "ELEC-ACC-004-PBANK",

                price: 1799,

                stock: 100,

                images: [
                    img("photo-1609592424204-1a7b2d7e9e31")
                ]
            }
        ]

    },




    {
        name: "Tempered Glass Screen Protector",

        images: [
            img("photo-1609592424204-1a7b2d7e9e31"),
            img("photo-1601593346740-925612772716"),
            img("photo-1511707171634-5f897ff02aa9"),
            img("photo-1598327105666-5b89351aff97")
        ],

        brand: "Spigen",

        description:
            "9H hardness tempered glass protector with edge-to-edge protection.",

        price: 699,

        oldPrice: 999,

        catName: "Electronics",
        SubcatName: "Mobile Accessories",
        innersubcatName: "Accessories",

        rating: 4.4,

        discount: 30,


        variants: [
            {
                options: {
                    Compatible: "Universal",
                    Pack: "2 Pieces"
                },

                sku: "ELEC-ACC-005-TEMP",

                price: 699,

                stock: 150,

                images: [
                    img("photo-1609592424204-1a7b2d7e9e31")
                ]
            }
        ]

    },




    {
        name: "Magnetic Car Phone Holder",

        images: [
            img("photo-1516321318423-f06f85e504b3"),
            img("photo-1583863788434-e58a36330cf0"),
            img("photo-1601593346740-925612772716"),
            img("photo-1609592424204-1a7b2d7e9e31")
        ],

        brand: "Portronics",

        description:
            "Strong magnetic car phone mount for navigation and hands-free usage.",

        price: 999,

        oldPrice: 1499,

        catName: "Electronics",
        SubcatName: "Mobile Accessories",
        innersubcatName: "Accessories",

        rating: 4.5,

        discount: 33,


        variants: [
            {
                options: {
                    Mount: "Dashboard",
                    Color: "Black"
                },

                sku: "ELEC-ACC-006-CARMOUNT",

                price: 999,

                stock: 90,

                images: [
                    img("photo-1516321318423-f06f85e504b3")
                ]
            }
        ]

    },




    {
        name: "Apple AirTag Tracker",

        images: [
            img("photo-1598327105666-5b89351aff97"),
            img("photo-1510557880182-3d4d3cba35a5"),
            img("photo-1601593346740-925612772716"),
            img("photo-1587033411391-5d9e51cce126")
        ],

        brand: "Apple",

        description:
            "Bluetooth tracking device to locate personal items using Find My network.",

        price: 3499,

        oldPrice: 3999,

        catName: "Electronics",
        SubcatName: "Mobile Accessories",
        innersubcatName: "Accessories",

        rating: 4.7,

        discount: 12,


        variants: [
            {
                options: {
                    Pack: "Single",
                    Color: "White"
                },

                sku: "ELEC-ACC-007-AIRTAG",

                price: 3499,

                stock: 30,

                images: [
                    img("photo-1598327105666-5b89351aff97")
                ]
            }
        ]

    },




    {
        name: "Premium Smart Watch",

        images: [
            img("photo-1523275335684-37898b6baf30"),
            img("photo-1546868871-7041f2a55e12"),
            img("photo-1579586337278-3befd40fd17a"),
            img("photo-1508685096489-7aacd0927c7e")
        ],

        brand: "Apple",

        description:
            "Advanced smartwatch with health tracking, notifications and fitness features.",

        price: 39999,

        oldPrice: 44999,

        catName: "Electronics",
        SubcatName: "Mobile Accessories",
        innersubcatName: "Accessories",

        rating: 4.8,

        discount: 11,


        variants: [
            {
                options: {
                    Color: "Midnight",
                    Size: "45mm"
                },

                sku: "ELEC-ACC-008-WATCH",

                price: 39999,

                stock: 20,

                images: [
                    img("photo-1523275335684-37898b6baf30")
                ]
            }
        ]

    },


    /* ===========================
            LAPTOPS
   =========================== */


    {
        name: "Apple MacBook Pro M4",

        images: [
            img("photo-1517336714731-489689fd1ca8"),
            img("photo-1517336714731-489689fd1ca8"),
            img("photo-1496181133206-80ce9b88a853"),
            img("photo-1541807084-5c52b6b3adef")
        ],

        brand: "Apple",

        description:
            "MacBook Pro powered by M4 chip with Liquid Retina XDR display and professional performance.",

        price: 169999,

        oldPrice: 189999,

        catName: "Electronics",
        SubcatName: "Computer Accessories",
        innersubcatName: "Laptops",

        rating: 4.9,

        discount: 10,


        variants: [
            {
                options: {
                    RAM: "16GB",
                    Storage: "512GB SSD",
                    Processor: "Apple M4"
                },

                sku: "ELEC-LAP-001-MBP-M4",

                price: 169999,

                stock: 12,

                images: [
                    img("photo-1517336714731-489689fd1ca8")
                ]
            }
        ]

    },




    {
        name: "Apple MacBook Air M3",

        images: [
            img("photo-1517336714731-489689fd1ca8"),
            img("photo-1496181133206-80ce9b88a853"),
            img("photo-1541807084-5c52b6b3adef"),
            img("photo-1525547719571-a2d4ac8945e2")
        ],

        brand: "Apple",

        description:
            "Ultra thin MacBook Air with M3 chip, Retina display and all-day battery life.",

        price: 99999,

        oldPrice: 114999,

        catName: "Electronics",
        SubcatName: "Computer Accessories",
        innersubcatName: "Laptops",

        rating: 4.8,

        discount: 13,


        variants: [
            {
                options: {
                    RAM: "8GB",
                    Storage: "256GB SSD",
                    Processor: "Apple M3"
                },

                sku: "ELEC-LAP-002-MBA-M3",

                price: 99999,

                stock: 25,

                images: [
                    img("photo-1517336714731-489689fd1ca8")
                ]
            }
        ]

    },




    {
        name: "Dell XPS 14 Laptop",

        images: [
            img("photo-1496181133206-80ce9b88a853"),
            img("photo-1541807084-5c52b6b3adef"),
            img("photo-1517336714731-489689fd1ca8"),
            img("photo-1525547719571-a2d4ac8945e2")
        ],

        brand: "Dell",

        description:
            "Premium Dell XPS laptop with OLED display and powerful Intel processor.",

        price: 149999,

        oldPrice: 169999,

        catName: "Electronics",
        SubcatName: "Computer Accessories",
        innersubcatName: "Laptops",

        rating: 4.7,

        discount: 12,


        variants: [
            {
                options: {
                    RAM: "32GB",
                    Storage: "1TB SSD",
                    Processor: "Intel Core Ultra 7"
                },

                sku: "ELEC-LAP-003-DELLXPS",

                price: 149999,

                stock: 10,

                images: [
                    img("photo-1496181133206-80ce9b88a853")
                ]
            }
        ]

    },




    {
        name: "Lenovo Yoga Slim 7",

        images: [
            img("photo-1541807084-5c52b6b3adef"),
            img("photo-1525547719571-a2d4ac8945e2"),
            img("photo-1496181133206-80ce9b88a853"),
            img("photo-1517336714731-489689fd1ca8")
        ],

        brand: "Lenovo",

        description:
            "Slim premium laptop with OLED display, Intel processor and lightweight design.",

        price: 89999,

        oldPrice: 99999,

        catName: "Electronics",
        SubcatName: "Computer Accessories",
        innersubcatName: "Laptops",

        rating: 4.7,

        discount: 10,


        variants: [
            {
                options: {
                    RAM: "16GB",
                    Storage: "1TB SSD",
                    Processor: "Intel Core Ultra 5"
                },

                sku: "ELEC-LAP-004-YOGA7",

                price: 89999,

                stock: 18,

                images: [
                    img("photo-1541807084-5c52b6b3adef")
                ]
            }
        ]

    },




    {
        name: "ASUS ROG Gaming Laptop",

        images: [
            img("photo-1593642632823-8f785ba67e45"),
            img("photo-1603302576837-37561b2e2302"),
            img("photo-1496181133206-80ce9b88a853"),
            img("photo-1541807084-5c52b6b3adef")
        ],

        brand: "ASUS",

        description:
            "High performance gaming laptop with dedicated graphics and powerful cooling system.",

        price: 129999,

        oldPrice: 149999,

        catName: "Electronics",
        SubcatName: "Computer Accessories",
        innersubcatName: "Laptops",

        rating: 4.8,

        discount: 13,


        variants: [
            {
                options: {
                    RAM: "16GB",
                    Storage: "1TB SSD",
                    GPU: "RTX 4060"
                },

                sku: "ELEC-LAP-005-ROG",

                price: 129999,

                stock: 8,

                images: [
                    img("photo-1593642632823-8f785ba67e45")
                ]
            }
        ]

    },




    {
        name: "HP Spectre x360 OLED Laptop",

        images: [
            img("photo-1525547719571-a2d4ac8945e2"),
            img("photo-1496181133206-80ce9b88a853"),
            img("photo-1541807084-5c52b6b3adef"),
            img("photo-1517336714731-489689fd1ca8")
        ],

        brand: "HP",

        description:
            "Convertible 2-in-1 laptop with OLED touchscreen and premium aluminium body.",

        price: 119999,

        oldPrice: 139999,

        catName: "Electronics",
        SubcatName: "Computer Accessories",
        innersubcatName: "Laptops",

        rating: 4.6,

        discount: 14,


        variants: [
            {
                options: {
                    RAM: "16GB",
                    Storage: "512GB SSD",
                    Processor: "Intel Core Ultra 7"
                },

                sku: "ELEC-LAP-006-SPECTRE",

                price: 119999,

                stock: 15,

                images: [
                    img("photo-1525547719571-a2d4ac8945e2")
                ]
            }
        ]

    },


    {
        name: "Acer Aspire 5 Laptop",

        images: [
            img("photo-1496181133206-80ce9b88a853"),
            img("photo-1541807084-5c52b6b3adef"),
            img("photo-1525547719571-a2d4ac8945e2"),
            img("photo-1517336714731-489689fd1ca8")
        ],

        brand: "Acer",

        description:
            "Affordable productivity laptop suitable for students and office work.",

        price: 49999,

        oldPrice: 59999,

        catName: "Electronics",
        SubcatName: "Computer Accessories",
        innersubcatName: "Laptops",

        rating: 4.5,

        discount: 16,


        variants: [
            {
                options: {
                    RAM: "16GB",
                    Storage: "512GB SSD",
                    Processor: "Intel Core i5"
                },

                sku: "ELEC-LAP-007-ASPIRE",

                price: 49999,

                stock: 35,

                images: [
                    img("photo-1496181133206-80ce9b88a853")
                ]
            }
        ]

    },


    {
        name: "Microsoft Surface Laptop",

        images: [
            img("photo-1517336714731-489689fd1ca8"),
            img("photo-1525547719571-a2d4ac8945e2"),
            img("photo-1541807084-5c52b6b3adef"),
            img("photo-1496181133206-80ce9b88a853")
        ],

        brand: "Microsoft",

        description:
            "Premium Surface laptop with touchscreen display and elegant lightweight design.",

        price: 109999,

        oldPrice: 129999,

        catName: "Electronics",
        SubcatName: "Computer Accessories",
        innersubcatName: "Laptops",

        rating: 4.6,

        discount: 15,


        variants: [
            {
                options: {
                    RAM: "16GB",
                    Storage: "512GB SSD",
                    Processor: "Snapdragon X Elite"
                },

                sku: "ELEC-LAP-008-SURFACE",

                price: 109999,

                stock: 14,

                images: [
                    img("photo-1517336714731-489689fd1ca8")
                ]
            }
        ]

    },

    /* ===========================
          PERIPHERALS
   =========================== */


    {
        name: "Logitech MX Mechanical Keyboard",

        images: [
            img("photo-1587829741301-dc798b83add3"),
            img("photo-1595225476474-87563907a212"),
            img("photo-1589578527966-fdac0f44566c"),
            img("photo-1587825140708-dfaf72ae4b04")
        ],

        brand: "Logitech",

        description:
            "Premium wireless mechanical keyboard with tactile switches and multi-device support.",

        price: 12999,

        oldPrice: 15999,

        catName: "Electronics",
        SubcatName: "Computer Accessories",
        innersubcatName: "Peripherals",

        rating: 4.8,

        discount: 18,


        variants: [
            {
                options: {
                    Color: "Graphite",
                    Connectivity: "Bluetooth"
                },

                sku: "ELEC-PER-001-MXKEY",

                price: 12999,

                stock: 25,

                images: [
                    img("photo-1587829741301-dc798b83add3")
                ]
            }
        ]

    },


    {
        name: "Razer BlackWidow V4 Gaming Keyboard",

        images: [
            img("photo-1618384887929-16ec33fab9ef"),
            img("photo-1587829741301-dc798b83add3"),
            img("photo-1595225476474-87563907a212"),
            img("photo-1589578527966-fdac0f44566c")
        ],

        brand: "Razer",

        description:
            "RGB mechanical gaming keyboard with responsive switches and gaming-focused design.",

        price: 8999,

        oldPrice: 11999,

        catName: "Electronics",
        SubcatName: "Computer Accessories",
        innersubcatName: "Peripherals",

        rating: 4.7,

        discount: 25,


        variants: [
            {
                options: {
                    Switch: "Green Mechanical",
                    Lighting: "RGB"
                },

                sku: "ELEC-PER-002-RAZERKB",

                price: 8999,

                stock: 30,

                images: [
                    img("photo-1618384887929-16ec33fab9ef")
                ]
            }
        ]

    },


    {
        name: "Logitech MX Master 3S Wireless Mouse",

        images: [
            img("photo-1527814050087-3793815479db"),
            img("photo-1527864550417-7fd91fc51a46"),
            img("photo-1563297007-0686b7003af7"),
            img("photo-1615663245857-ac93bb7c39e7")
        ],

        brand: "Logitech",

        description:
            "Premium ergonomic wireless mouse with precision tracking and silent clicks.",

        price: 8999,

        oldPrice: 10999,

        catName: "Electronics",
        SubcatName: "Computer Accessories",
        innersubcatName: "Peripherals",

        rating: 4.8,

        discount: 18,


        variants: [
            {
                options: {
                    Color: "Black",
                    Connectivity: "Bluetooth"
                },

                sku: "ELEC-PER-003-MXMASTER",

                price: 8999,

                stock: 40,

                images: [
                    img("photo-1527814050087-3793815479db")
                ]
            }
        ]

    },


    {
        name: "Razer DeathAdder V3 Gaming Mouse",

        images: [
            img("photo-1527814050087-3793815479db"),
            img("photo-1527864550417-7fd91fc51a46"),
            img("photo-1615663245857-ac93bb7c39e7"),
            img("photo-1563297007-0686b7003af7")
        ],

        brand: "Razer",

        description:
            "High precision gaming mouse with ergonomic design and fast response sensor.",

        price: 6999,

        oldPrice: 8999,

        catName: "Electronics",
        SubcatName: "Computer Accessories",
        innersubcatName: "Peripherals",

        rating: 4.6,

        discount: 22,


        variants: [
            {
                options: {
                    DPI: "30000",
                    Color: "Black"
                },

                sku: "ELEC-PER-004-DEATHADDER",

                price: 6999,

                stock: 35,

                images: [
                    img("photo-1527814050087-3793815479db")
                ]
            }
        ]

    },


    {
        name: "Dell UltraSharp 27 Inch Monitor",

        images: [
            img("photo-1527443224154-c4a3942d3acf"),
            img("photo-1527443224154-c4a3942d3acf"),
            img("photo-1547082299-de196ea013d6"),
            img("photo-1585792180666-f7347c490ee2")
        ],

        brand: "Dell",

        description:
            "Professional 27 inch IPS monitor with accurate colors and high resolution.",

        price: 32999,

        oldPrice: 39999,

        catName: "Electronics",
        SubcatName: "Computer Accessories",
        innersubcatName: "Peripherals",

        rating: 4.7,

        discount: 17,


        variants: [
            {
                options: {
                    Size: "27 inch",
                    Resolution: "4K UHD"
                },

                sku: "ELEC-PER-005-DELLMON",

                price: 32999,

                stock: 15,

                images: [
                    img("photo-1527443224154-c4a3942d3acf")
                ]
            }
        ]

    },


    {
        name: "LG UltraGear Gaming Monitor",

        images: [
            img("photo-1547082299-de196ea013d6"),
            img("photo-1585792180666-f7347c490ee2"),
            img("photo-1527443224154-c4a3942d3acf"),
            img("photo-1496181133206-80ce9b88a853")
        ],

        brand: "LG",

        description:
            "High refresh rate gaming monitor with fast response time and immersive display.",

        price: 29999,

        oldPrice: 36999,

        catName: "Electronics",
        SubcatName: "Computer Accessories",
        innersubcatName: "Peripherals",

        rating: 4.6,

        discount: 19,


        variants: [
            {
                options: {
                    Size: "27 inch",
                    RefreshRate: "144Hz"
                },

                sku: "ELEC-PER-006-LGULTRA",

                price: 29999,

                stock: 20,

                images: [
                    img("photo-1547082299-de196ea013d6")
                ]
            }
        ]

    },




    {
        name: "Logitech Brio 4K Webcam",

        images: [
            img("photo-1587825140708-dfaf72ae4b04"),
            img("photo-1587829741301-dc798b83add3"),
            img("photo-1527814050087-3793815479db"),
            img("photo-1618384887929-16ec33fab9ef")
        ],

        brand: "Logitech",

        description:
            "4K webcam with HDR support for meetings, streaming and content creation.",

        price: 15999,

        oldPrice: 19999,

        catName: "Electronics",
        SubcatName: "Computer Accessories",
        innersubcatName: "Peripherals",

        rating: 4.7,

        discount: 20,


        variants: [
            {
                options: {
                    Resolution: "4K",
                    Connection: "USB-C"
                },

                sku: "ELEC-PER-007-BRIO",

                price: 15999,

                stock: 25,

                images: [
                    img("photo-1587825140708-dfaf72ae4b04")
                ]
            }
        ]

    },




    {
        name: "Samsung Portable External SSD 1TB",

        images: [
            img("photo-1589330694653-ded6df03f754"),
            img("photo-1597872200969-2b65d56bd16b"),
            img("photo-1597848212624-e1f1c7d9f7f5"),
            img("photo-1587033411391-5d9e51cce126")
        ],

        brand: "Samsung",

        description:
            "Portable high speed SSD with USB-C connectivity and durable design.",

        price: 10999,

        oldPrice: 13999,

        catName: "Electronics",
        SubcatName: "Computer Accessories",
        innersubcatName: "Peripherals",

        rating: 4.8,

        discount: 21,


        variants: [
            {
                options: {
                    Storage: "1TB",
                    Interface: "USB-C"
                },

                sku: "ELEC-PER-008-SSD",

                price: 10999,

                stock: 50,

                images: [
                    img("photo-1589330694653-ded6df03f754")
                ]
            }
        ]

    },




    {
        name: "HP Wireless Printer",

        images: [
            img("photo-1612815154858-60aa4c59eaa6"),
            img("photo-1563013544-824ae1b704d3"),
            img("photo-1586281380349-632531db7ed4"),
            img("photo-1516321318423-f06f85e504b3")
        ],

        brand: "HP",

        description:
            "Wireless all-in-one printer for home and office printing needs.",

        price: 8999,

        oldPrice: 10999,

        catName: "Electronics",
        SubcatName: "Computer Accessories",
        innersubcatName: "Peripherals",

        rating: 4.5,

        discount: 18,


        variants: [
            {
                options: {
                    Type: "Inkjet",
                    Connectivity: "WiFi"
                },

                sku: "ELEC-PER-009-PRINTER",

                price: 8999,

                stock: 20,

                images: [
                    img("photo-1612815154858-60aa4c59eaa6")
                ]
            }
        ]

    },




    {
        name: "Aluminium Laptop Stand",

        images: [
            img("photo-1593642632823-8f785ba67e45"),
            img("photo-1525547719571-a2d4ac8945e2"),
            img("photo-1587033411391-5d9e51cce126"),
            img("photo-1601593346740-925612772716")
        ],

        brand: "Portronics",

        description:
            "Ergonomic aluminium laptop stand improving posture and cooling.",

        price: 1499,

        oldPrice: 1999,

        catName: "Electronics",
        SubcatName: "Computer Accessories",
        innersubcatName: "Peripherals",

        rating: 4.6,

        discount: 25,


        variants: [
            {
                options: {
                    Material: "Aluminium",
                    Color: "Silver"
                },

                sku: "ELEC-PER-010-STAND",

                price: 1499,

                stock: 100,

                images: [
                    img("photo-1593642632823-8f785ba67e45")
                ]
            }
        ]

    },


    /* ===========================
          HEADPHONES
   =========================== */


    {
        name: "Apple AirPods Pro 2nd Generation",

        images: [
            img("photo-1600294037681-c80b4cb5b434"),
            img("photo-1588423771073-b8903fbb85b5"),
            img("photo-1590658268037-6bf12165a8df"),
            img("photo-1484704849700-f032a568e944")
        ],

        brand: "Apple",

        description:
            "Premium wireless earbuds with Active Noise Cancellation, Transparency Mode and Spatial Audio.",

        price: 24999,

        oldPrice: 26999,

        catName: "Electronics",
        SubcatName: "Audio",
        innersubcatName: "Headphones",

        rating: 4.9,

        discount: 7,


        variants: [
            {
                options: {
                    Color: "White",
                    Connectivity: "Bluetooth 5.3"
                },

                sku: "ELEC-AUDIO-001-AIRPODSPRO",

                price: 24999,

                stock: 35,

                images: [
                    img("photo-1600294037681-c80b4cb5b434")
                ]
            }
        ]

    },




    {
        name: "Sony WH-1000XM5 Wireless Headphones",

        images: [
            img("photo-1505740420928-5e560c06d30e"),
            img("photo-1484704849700-f032a568e944"),
            img("photo-1495474472287-4d71bcdd2085"),
            img("photo-1524678606370-a47ad25cb82a")
        ],

        brand: "Sony",

        description:
            "Industry-leading noise cancelling wireless headphones with premium sound quality.",

        price: 29999,

        oldPrice: 34999,

        catName: "Electronics",
        SubcatName: "Audio",
        innersubcatName: "Headphones",

        rating: 4.8,

        discount: 14,


        variants: [
            {
                options: {
                    Color: "Black",
                    Battery: "30 Hours"
                },

                sku: "ELEC-AUDIO-002-WH1000XM5",

                price: 29999,

                stock: 25,

                images: [
                    img("photo-1505740420928-5e560c06d30e")
                ]
            }
        ]

    },




    {
        name: "Bose QuietComfort Ultra Headphones",

        images: [
            img("photo-1505740420928-5e560c06d30e"),
            img("photo-1484704849700-f032a568e944"),
            img("photo-1524678606370-a47ad25cb82a"),
            img("photo-1495474472287-4d71bcdd2085")
        ],

        brand: "Bose",

        description:
            "Premium over-ear headphones with immersive audio and advanced noise cancellation.",

        price: 34999,

        oldPrice: 39999,

        catName: "Electronics",
        SubcatName: "Audio",
        innersubcatName: "Headphones",

        rating: 4.7,

        discount: 12,


        variants: [
            {
                options: {
                    Color: "Black",
                    Feature: "Immersive Audio"
                },

                sku: "ELEC-AUDIO-003-BOSEQC",

                price: 34999,

                stock: 15,

                images: [
                    img("photo-1505740420928-5e560c06d30e")
                ]
            }
        ]

    },




    {
        name: "Samsung Galaxy Buds3 Pro",

        images: [
            img("photo-1590658268037-6bf12165a8df"),
            img("photo-1600294037681-c80b4cb5b434"),
            img("photo-1588423771073-b8903fbb85b5"),
            img("photo-1484704849700-f032a568e944")
        ],

        brand: "Samsung",

        description:
            "Premium TWS earbuds with adaptive noise cancellation and AI features.",

        price: 17999,

        oldPrice: 21999,

        catName: "Electronics",
        SubcatName: "Audio",
        innersubcatName: "Headphones",

        rating: 4.6,

        discount: 18,


        variants: [
            {
                options: {
                    Color: "Silver",
                    Battery: "24 Hours"
                },

                sku: "ELEC-AUDIO-004-BUDS3PRO",

                price: 17999,

                stock: 40,

                images: [
                    img("photo-1590658268037-6bf12165a8df")
                ]
            }
        ]

    },




    {
        name: "Sony WF-1000XM5 True Wireless Earbuds",

        images: [
            img("photo-1590658268037-6bf12165a8df"),
            img("photo-1588423771073-b8903fbb85b5"),
            img("photo-1600294037681-c80b4cb5b434"),
            img("photo-1484704849700-f032a568e944")
        ],

        brand: "Sony",

        description:
            "Compact premium earbuds with excellent noise cancellation and high resolution audio.",

        price: 21999,

        oldPrice: 25999,

        catName: "Electronics",
        SubcatName: "Audio",
        innersubcatName: "Headphones",

        rating: 4.7,

        discount: 15,


        variants: [
            {
                options: {
                    Color: "Black",
                    Connectivity: "Bluetooth"
                },

                sku: "ELEC-AUDIO-005-WF1000XM5",

                price: 21999,

                stock: 30,

                images: [
                    img("photo-1590658268037-6bf12165a8df")
                ]
            }
        ]

    },




    {
        name: "JBL Live 660NC Wireless Headphones",

        images: [
            img("photo-1505740420928-5e560c06d30e"),
            img("photo-1524678606370-a47ad25cb82a"),
            img("photo-1484704849700-f032a568e944"),
            img("photo-1495474472287-4d71bcdd2085")
        ],

        brand: "JBL",

        description:
            "Comfortable wireless headphones with powerful bass and adaptive noise cancellation.",

        price: 8999,

        oldPrice: 11999,

        catName: "Electronics",
        SubcatName: "Audio",
        innersubcatName: "Headphones",

        rating: 4.5,

        discount: 25,


        variants: [
            {
                options: {
                    Color: "Blue",
                    Battery: "50 Hours"
                },

                sku: "ELEC-AUDIO-006-JBLLIVE",

                price: 8999,

                stock: 50,

                images: [
                    img("photo-1505740420928-5e560c06d30e")
                ]
            }
        ]

    },




    {
        name: "Razer BlackShark V2 Gaming Headset",

        images: [
            img("photo-1599669454699-248893623440"),
            img("photo-1505740420928-5e560c06d30e"),
            img("photo-1524678606370-a47ad25cb82a"),
            img("photo-1484704849700-f032a568e944")
        ],

        brand: "Razer",

        description:
            "Gaming headset with surround sound, noise cancelling microphone and esports design.",

        price: 7999,

        oldPrice: 9999,

        catName: "Electronics",
        SubcatName: "Audio",
        innersubcatName: "Headphones",

        rating: 4.6,

        discount: 20,


        variants: [
            {
                options: {
                    Connection: "USB",
                    Type: "Gaming"
                },

                sku: "ELEC-AUDIO-007-BLACKSHARK",

                price: 7999,

                stock: 35,

                images: [
                    img("photo-1599669454699-248893623440")
                ]
            }
        ]

    },




    {
        name: "Boat Airdopes 141 TWS Earbuds",

        images: [
            img("photo-1590658268037-6bf12165a8df"),
            img("photo-1600294037681-c80b4cb5b434"),
            img("photo-1588423771073-b8903fbb85b5"),
            img("photo-1484704849700-f032a568e944")
        ],

        brand: "Boat",

        description:
            "Affordable wireless earbuds with low latency mode and long battery life.",

        price: 1299,

        oldPrice: 2999,

        catName: "Electronics",
        SubcatName: "Audio",
        innersubcatName: "Headphones",

        rating: 4.4,

        discount: 56,


        variants: [
            {
                options: {
                    Color: "Black",
                    Battery: "42 Hours"
                },

                sku: "ELEC-AUDIO-008-AIRDOPES",

                price: 1299,

                stock: 150,

                images: [
                    img("photo-1590658268037-6bf12165a8df")
                ]
            }
        ]

    },

    /* ===========================
            SPEAKERS
   =========================== */


    {
        name: "JBL PartyBox 310 Portable Speaker",

        images: [
            img("photo-1608043152269-423dbba4e7e1"),
            img("photo-1608043152269-423dbba4e7e1"),
            img("photo-1545454675-3531b543be5d"),
            img("photo-1589003077984-894e133dabab")
        ],

        brand: "JBL",

        description:
            "High power portable Bluetooth speaker with deep bass, party lights and long battery life.",

        price: 35999,

        oldPrice: 42999,

        catName: "Electronics",
        SubcatName: "Audio",
        innersubcatName: "Speakers",

        rating: 4.8,

        discount: 16,


        variants: [
            {
                options: {
                    Color: "Black",
                    Power: "240W"
                },

                sku: "ELEC-SPK-001-JBL310",

                price: 35999,

                stock: 15,

                images: [
                    img("photo-1608043152269-423dbba4e7e1")
                ]
            }
        ]

    },




    {
        name: "JBL Flip 6 Portable Bluetooth Speaker",

        images: [
            img("photo-1545454675-3531b543be5d"),
            img("photo-1589003077984-894e133dabab"),
            img("photo-1608043152269-423dbba4e7e1"),
            img("photo-1493225457124-a3eb161ffa5f")
        ],

        brand: "JBL",

        description:
            "Compact waterproof Bluetooth speaker with powerful sound and portable design.",

        price: 11999,

        oldPrice: 14999,

        catName: "Electronics",
        SubcatName: "Audio",
        innersubcatName: "Speakers",

        rating: 4.7,

        discount: 20,


        variants: [
            {
                options: {
                    Color: "Blue",
                    Battery: "12 Hours"
                },

                sku: "ELEC-SPK-002-JBLFLIP6",

                price: 11999,

                stock: 50,

                images: [
                    img("photo-1545454675-3531b543be5d")
                ]
            }
        ]

    },




    {
        name: "Bose SoundLink Flex Speaker",

        images: [
            img("photo-1589003077984-894e133dabab"),
            img("photo-1545454675-3531b543be5d"),
            img("photo-1608043152269-423dbba4e7e1"),
            img("photo-1493225457124-a3eb161ffa5f")
        ],

        brand: "Bose",

        description:
            "Premium portable speaker with waterproof design and crystal clear sound.",

        price: 15999,

        oldPrice: 19999,

        catName: "Electronics",
        SubcatName: "Audio",
        innersubcatName: "Speakers",

        rating: 4.7,

        discount: 20,


        variants: [
            {
                options: {
                    Color: "Stone Blue",
                    Connectivity: "Bluetooth"
                },

                sku: "ELEC-SPK-003-BOSEFLEX",

                price: 15999,

                stock: 25,

                images: [
                    img("photo-1589003077984-894e133dabab")
                ]
            }
        ]

    },




    {
        name: "Sony SRS-XB100 Wireless Speaker",

        images: [
            img("photo-1545454675-3531b543be5d"),
            img("photo-1589003077984-894e133dabab"),
            img("photo-1608043152269-423dbba4e7e1"),
            img("photo-1493225457124-a3eb161ffa5f")
        ],

        brand: "Sony",

        description:
            "Compact extra bass Bluetooth speaker with waterproof protection.",

        price: 4499,

        oldPrice: 5999,

        catName: "Electronics",
        SubcatName: "Audio",
        innersubcatName: "Speakers",

        rating: 4.5,

        discount: 25,


        variants: [
            {
                options: {
                    Color: "Black",
                    Battery: "16 Hours"
                },

                sku: "ELEC-SPK-004-SONYXB100",

                price: 4499,

                stock: 80,

                images: [
                    img("photo-1545454675-3531b543be5d")
                ]
            }
        ]

    },




    {
        name: "Marshall Acton III Bluetooth Speaker",

        images: [
            img("photo-1589003077984-894e133dabab"),
            img("photo-1608043152269-423dbba4e7e1"),
            img("photo-1545454675-3531b543be5d"),
            img("photo-1493225457124-a3eb161ffa5f")
        ],

        brand: "Marshall",

        description:
            "Classic Marshall design speaker with rich sound and premium build quality.",

        price: 29999,

        oldPrice: 34999,

        catName: "Electronics",
        SubcatName: "Audio",
        innersubcatName: "Speakers",

        rating: 4.8,

        discount: 14,


        variants: [
            {
                options: {
                    Color: "Black",
                    Connectivity: "Bluetooth 5.2"
                },

                sku: "ELEC-SPK-005-MARSHALL",

                price: 29999,

                stock: 18,

                images: [
                    img("photo-1589003077984-894e133dabab")
                ]
            }
        ]

    },




    {
        name: "Amazon Echo Dot 5th Gen Smart Speaker",

        images: [
            img("photo-1543512214-318c7553f230"),
            img("photo-1589003077984-894e133dabab"),
            img("photo-1608043152269-423dbba4e7e1"),
            img("photo-1545454675-3531b543be5d")
        ],

        brand: "Amazon",

        description:
            "Smart speaker with Alexa voice assistant, smart home control and improved audio.",

        price: 5499,

        oldPrice: 6499,

        catName: "Electronics",
        SubcatName: "Audio",
        innersubcatName: "Speakers",

        rating: 4.6,

        discount: 15,


        variants: [
            {
                options: {
                    Color: "Charcoal",
                    Assistant: "Alexa"
                },

                sku: "ELEC-SPK-006-ECHODOT",

                price: 5499,

                stock: 60,

                images: [
                    img("photo-1543512214-318c7553f230")
                ]
            }
        ]

    },




    {
        name: "Google Nest Audio Smart Speaker",

        images: [
            img("photo-1543512214-318c7553f230"),
            img("photo-1589003077984-894e133dabab"),
            img("photo-1608043152269-423dbba4e7e1"),
            img("photo-1545454675-3531b543be5d")
        ],

        brand: "Google",

        description:
            "Smart speaker with Google Assistant and rich room-filling sound.",

        price: 7999,

        oldPrice: 9999,

        catName: "Electronics",
        SubcatName: "Audio",
        innersubcatName: "Speakers",

        rating: 4.5,

        discount: 20,


        variants: [
            {
                options: {
                    Color: "Chalk",
                    Assistant: "Google Assistant"
                },

                sku: "ELEC-SPK-007-NESTAUDIO",

                price: 7999,

                stock: 35,

                images: [
                    img("photo-1543512214-318c7553f230")
                ]
            }
        ]

    },




    {
        name: "Sony HT-S40R Home Theatre System",

        images: [
            img("photo-1608043152269-423dbba4e7e1"),
            img("photo-1589003077984-894e133dabab"),
            img("photo-1545454675-3531b543be5d"),
            img("photo-1493225457124-a3eb161ffa5f")
        ],

        brand: "Sony",

        description:
            "5.1 channel home theatre system with wireless rear speakers and cinematic sound.",

        price: 28999,

        oldPrice: 34999,

        catName: "Electronics",
        SubcatName: "Audio",
        innersubcatName: "Speakers",

        rating: 4.7,

        discount: 17,


        variants: [
            {
                options: {
                    Channels: "5.1",
                    Power: "600W"
                },

                sku: "ELEC-SPK-008-SONYHT",

                price: 28999,

                stock: 12,

                images: [
                    img("photo-1608043152269-423dbba4e7e1")
                ]
            }
        ]

    },




    {
        name: "Boat Stone 1200 Bluetooth Speaker",

        images: [
            img("photo-1545454675-3531b543be5d"),
            img("photo-1589003077984-894e133dabab"),
            img("photo-1608043152269-423dbba4e7e1"),
            img("photo-1493225457124-a3eb161ffa5f")
        ],

        brand: "Boat",

        description:
            "Affordable portable speaker with powerful bass and RGB lighting.",

        price: 2499,

        oldPrice: 3999,

        catName: "Electronics",
        SubcatName: "Audio",
        innersubcatName: "Speakers",

        rating: 4.4,

        discount: 37,


        variants: [
            {
                options: {
                    Color: "Black",
                    Battery: "9 Hours"
                },

                sku: "ELEC-SPK-009-BOAT1200",

                price: 2499,

                stock: 100,

                images: [
                    img("photo-1545454675-3531b543be5d")
                ]
            }
        ]

    },


    /* ===========================
          FACE CARE
   =========================== */


    {
        name: "Minimalist 10% Niacinamide Face Serum",

        images: [
            img("photo-1620916566398-39f1143ab7be"),
            img("photo-1556228720-195a672e8a03"),
            img("photo-1571781926291-c477ebfd024b"),
            img("photo-1612817288484-6f916006741a")
        ],

        brand: "Minimalist",

        description:
            "Niacinamide serum that helps reduce pores, control oil and improve skin texture.",

        price: 599,

        oldPrice: 699,

        catName: "Beauty",
        SubcatName: "Skincare",
        innersubcatName: "Face Care",

        rating: 4.7,

        discount: 14,


        variants: [
            {
                options: {
                    Size: "30ml",
                    SkinType: "Oily"
                },

                sku: "BEAUTY-FACE-001-NIA",

                price: 599,

                stock: 120,

                images: [
                    img("photo-1620916566398-39f1143ab7be")
                ]
            }
        ]

    },




    {
        name: "The Ordinary Hyaluronic Acid 2% + B5 Serum",

        images: [
            img("photo-1620916566398-39f1143ab7be"),
            img("photo-1556228720-195a672e8a03"),
            img("photo-1571781926291-c477ebfd024b"),
            img("photo-1612817288484-6f916006741a")
        ],

        brand: "The Ordinary",

        description:
            "Hydrating serum with hyaluronic acid that improves skin moisture and smoothness.",

        price: 899,

        oldPrice: 1099,

        catName: "Beauty",
        SubcatName: "Skincare",
        innersubcatName: "Face Care",

        rating: 4.8,

        discount: 18,


        variants: [
            {
                options: {
                    Size: "30ml",
                    SkinType: "All Skin Types"
                },

                sku: "BEAUTY-FACE-002-HA",

                price: 899,

                stock: 80,

                images: [
                    img("photo-1620916566398-39f1143ab7be")
                ]
            }
        ]

    },




    {
        name: "CeraVe Hydrating Facial Cleanser",

        images: [
            img("photo-1556228720-195a672e8a03"),
            img("photo-1612817288484-6f916006741a"),
            img("photo-1571781926291-c477ebfd024b"),
            img("photo-1620916566398-39f1143ab7be")
        ],

        brand: "CeraVe",

        description:
            "Gentle hydrating face cleanser with ceramides and hyaluronic acid.",

        price: 799,

        oldPrice: 999,

        catName: "Beauty",
        SubcatName: "Skincare",
        innersubcatName: "Face Care",

        rating: 4.8,

        discount: 20,


        variants: [
            {
                options: {
                    Size: "236ml",
                    SkinType: "Dry Skin"
                },

                sku: "BEAUTY-FACE-003-CERAVE",

                price: 799,

                stock: 60,

                images: [
                    img("photo-1556228720-195a672e8a03")
                ]
            }
        ]

    },




    {
        name: "Neutrogena Hydro Boost Water Gel",

        images: [
            img("photo-1612817288484-6f916006741a"),
            img("photo-1556228720-195a672e8a03"),
            img("photo-1571781926291-c477ebfd024b"),
            img("photo-1620916566398-39f1143ab7be")
        ],

        brand: "Neutrogena",

        description:
            "Lightweight water gel moisturizer enriched with hyaluronic acid for hydration.",

        price: 699,

        oldPrice: 999,

        catName: "Beauty",
        SubcatName: "Skincare",
        innersubcatName: "Face Care",

        rating: 4.6,

        discount: 30,


        variants: [
            {
                options: {
                    Size: "50g",
                    SkinType: "Combination"
                },

                sku: "BEAUTY-FACE-004-HYDRO",

                price: 699,

                stock: 90,

                images: [
                    img("photo-1612817288484-6f916006741a")
                ]
            }
        ]

    },




    {
        name: "Plum Green Tea Pore Cleansing Face Wash",

        images: [
            img("photo-1556228578-8c89e6adf883"),
            img("photo-1612817288484-6f916006741a"),
            img("photo-1556228720-195a672e8a03"),
            img("photo-1571781926291-c477ebfd024b")
        ],

        brand: "Plum",

        description:
            "Green tea face wash designed for oily and acne-prone skin.",

        price: 399,

        oldPrice: 499,

        catName: "Beauty",
        SubcatName: "Skincare",
        innersubcatName: "Face Care",

        rating: 4.5,

        discount: 20,


        variants: [
            {
                options: {
                    Size: "100ml",
                    SkinType: "Oily"
                },

                sku: "BEAUTY-FACE-005-PLUM",

                price: 399,

                stock: 150,

                images: [
                    img("photo-1556228578-8c89e6adf883")
                ]
            }
        ]

    },




    {
        name: "L'Oréal Paris Revitalift Night Cream",

        images: [
            img("photo-1571781926291-c477ebfd024b"),
            img("photo-1556228720-195a672e8a03"),
            img("photo-1612817288484-6f916006741a"),
            img("photo-1620916566398-39f1143ab7be")
        ],

        brand: "L'Oréal Paris",

        description:
            "Anti-aging night cream with advanced ingredients for firm and hydrated skin.",

        price: 899,

        oldPrice: 1199,

        catName: "Beauty",
        SubcatName: "Skincare",
        innersubcatName: "Face Care",

        rating: 4.5,

        discount: 25,


        variants: [
            {
                options: {
                    Size: "50ml",
                    Use: "Night"
                },

                sku: "BEAUTY-FACE-006-LOREAL",

                price: 899,

                stock: 70,

                images: [
                    img("photo-1571781926291-c477ebfd024b")
                ]
            }
        ]

    },




    {
        name: "Cetaphil Moisturizing Lotion",

        images: [
            img("photo-1556228720-195a672e8a03"),
            img("photo-1612817288484-6f916006741a"),
            img("photo-1571781926291-c477ebfd024b"),
            img("photo-1620916566398-39f1143ab7be")
        ],

        brand: "Cetaphil",

        description:
            "Dermatologist recommended moisturizer suitable for sensitive skin.",

        price: 699,

        oldPrice: 899,

        catName: "Beauty",
        SubcatName: "Skincare",
        innersubcatName: "Face Care",

        rating: 4.7,

        discount: 22,


        variants: [
            {
                options: {
                    Size: "118ml",
                    SkinType: "Sensitive"
                },

                sku: "BEAUTY-FACE-007-CETAPHIL",

                price: 699,

                stock: 100,

                images: [
                    img("photo-1556228720-195a672e8a03")
                ]
            }
        ]

    },




    {
        name: "Mamaearth Vitamin C Face Serum",

        images: [
            img("photo-1620916566398-39f1143ab7be"),
            img("photo-1556228720-195a672e8a03"),
            img("photo-1612817288484-6f916006741a"),
            img("photo-1571781926291-c477ebfd024b")
        ],

        brand: "Mamaearth",

        description:
            "Vitamin C serum that helps brighten skin and improve glow.",

        price: 599,

        oldPrice: 799,

        catName: "Beauty",
        SubcatName: "Skincare",
        innersubcatName: "Face Care",

        rating: 4.4,

        discount: 25,


        variants: [
            {
                options: {
                    Size: "30ml",
                    Ingredient: "Vitamin C"
                },

                sku: "BEAUTY-FACE-008-MAMAC",

                price: 599,

                stock: 100,

                images: [
                    img("photo-1620916566398-39f1143ab7be")
                ]
            }
        ]

    },




    {
        name: "COSRX Advanced Snail 96 Mucin Essence",

        images: [
            img("photo-1612817288484-6f916006741a"),
            img("photo-1556228720-195a672e8a03"),
            img("photo-1620916566398-39f1143ab7be"),
            img("photo-1571781926291-c477ebfd024b")
        ],

        brand: "COSRX",

        description:
            "Korean skincare essence that hydrates and repairs damaged skin barrier.",

        price: 1299,

        oldPrice: 1599,

        catName: "Beauty",
        SubcatName: "Skincare",
        innersubcatName: "Face Care",

        rating: 4.8,

        discount: 19,


        variants: [
            {
                options: {
                    Size: "100ml",
                    SkinType: "All"
                },

                sku: "BEAUTY-FACE-009-COSRX",

                price: 1299,

                stock: 50,

                images: [
                    img("photo-1612817288484-6f916006741a")
                ]
            }
        ]

    },


    /* ===========================
          BODY CARE
   =========================== */


    {
        name: "Nivea Nourishing Body Lotion",

        images: [
            img("photo-1608248543803-ba4f8c70ae0b"),
            img("photo-1611930022073-b7a4ba5fcccd"),
            img("photo-1620917669788-be9d8f6b6a6c"),
            img("photo-1556228578-8c89e6adf883")
        ],

        brand: "Nivea",

        description:
            "Deep moisturizing body lotion enriched with almond oil for soft and smooth skin.",

        price: 399,

        oldPrice: 499,

        catName: "Beauty",
        SubcatName: "Skincare",
        innersubcatName: "Body Care",

        rating: 4.6,

        discount: 20,

        variants: [
            {
                options: {
                    Size: "400ml",
                    SkinType: "Dry Skin"
                },

                sku: "BEAUTY-BODY-001-NIVEA",

                price: 399,

                stock: 100,

                images: [
                    img("photo-1608248543803-ba4f8c70ae0b")
                ]
            }
        ]

    },




    {
        name: "Vaseline Intensive Care Body Lotion",

        images: [
            img("photo-1608248543803-ba4f8c70ae0b"),
            img("photo-1611930022073-b7a4ba5fcccd"),
            img("photo-1620917669788-be9d8f6b6a6c"),
            img("photo-1556228578-8c89e6adf883")
        ],

        brand: "Vaseline",

        description:
            "Fast absorbing body lotion that repairs dry skin and provides long-lasting moisture.",

        price: 299,

        oldPrice: 399,

        catName: "Beauty",
        SubcatName: "Skincare",
        innersubcatName: "Body Care",

        rating: 4.5,

        discount: 25,

        variants: [
            {
                options: {
                    Size: "400ml",
                    Formula: "Deep Restore"
                },

                sku: "BEAUTY-BODY-002-VASELINE",

                price: 299,

                stock: 150,

                images: [
                    img("photo-1608248543803-ba4f8c70ae0b")
                ]
            }
        ]

    },




    {
        name: "The Body Shop Shea Body Butter",

        images: [
            img("photo-1611930022073-b7a4ba5fcccd"),
            img("photo-1608248543803-ba4f8c70ae0b"),
            img("photo-1620917669788-be9d8f6b6a6c"),
            img("photo-1556228578-8c89e6adf883")
        ],

        brand: "The Body Shop",

        description:
            "Rich shea butter body moisturizer for intense hydration and nourishment.",

        price: 1499,

        oldPrice: 1799,

        catName: "Beauty",
        SubcatName: "Skincare",
        innersubcatName: "Body Care",

        rating: 4.7,

        discount: 17,

        variants: [
            {
                options: {
                    Size: "200ml",
                    Ingredient: "Shea Butter"
                },

                sku: "BEAUTY-BODY-003-BODYSHOP",

                price: 1499,

                stock: 40,

                images: [
                    img("photo-1611930022073-b7a4ba5fcccd")
                ]
            }
        ]

    },




    {
        name: "Neutrogena Ultra Sheer Sunscreen SPF 50",

        images: [
            img("photo-1556228578-8c89e6adf883"),
            img("photo-1620917669788-be9d8f6b6a6c"),
            img("photo-1611930022073-b7a4ba5fcccd"),
            img("photo-1608248543803-ba4f8c70ae0b")
        ],

        brand: "Neutrogena",

        description:
            "Lightweight sunscreen with SPF 50 protection and non-greasy finish.",

        price: 699,

        oldPrice: 899,

        catName: "Beauty",
        SubcatName: "Skincare",
        innersubcatName: "Body Care",

        rating: 4.7,

        discount: 22,

        variants: [
            {
                options: {
                    Size: "88ml",
                    SPF: "50"
                },

                sku: "BEAUTY-BODY-004-NEUTRO",

                price: 699,

                stock: 80,

                images: [
                    img("photo-1556228578-8c89e6adf883")
                ]
            }
        ]

    },




    {
        name: "Minimalist SPF 50 PA++++ Sunscreen",

        images: [
            img("photo-1620917669788-be9d8f6b6a6c"),
            img("photo-1556228578-8c89e6adf883"),
            img("photo-1608248543803-ba4f8c70ae0b"),
            img("photo-1611930022073-b7a4ba5fcccd")
        ],

        brand: "Minimalist",

        description:
            "Broad spectrum sunscreen with lightweight texture and no white cast.",

        price: 399,

        oldPrice: 499,

        catName: "Beauty",
        SubcatName: "Skincare",
        innersubcatName: "Body Care",

        rating: 4.6,

        discount: 20,

        variants: [
            {
                options: {
                    Size: "50g",
                    Protection: "SPF 50 PA++++"
                },

                sku: "BEAUTY-BODY-005-MINSPF",

                price: 399,

                stock: 120,

                images: [
                    img("photo-1620917669788-be9d8f6b6a6c")
                ]
            }
        ]

    },




    {
        name: "Dove Deep Moisture Body Wash",

        images: [
            img("photo-1608248543803-ba4f8c70ae0b"),
            img("photo-1611930022073-b7a4ba5fcccd"),
            img("photo-1556228578-8c89e6adf883"),
            img("photo-1620917669788-be9d8f6b6a6c")
        ],

        brand: "Dove",

        description:
            "Gentle moisturizing body wash suitable for daily use.",

        price: 299,

        oldPrice: 399,

        catName: "Beauty",
        SubcatName: "Skincare",
        innersubcatName: "Body Care",

        rating: 4.5,

        discount: 25,

        variants: [
            {
                options: {
                    Size: "800ml",
                    Fragrance: "Deep Moisture"
                },

                sku: "BEAUTY-BODY-006-DOVE",

                price: 299,

                stock: 90,

                images: [
                    img("photo-1608248543803-ba4f8c70ae0b")
                ]
            }
        ]

    },




    {
        name: "Bath & Body Works Japanese Cherry Blossom Mist",

        images: [
            img("photo-1611930022073-b7a4ba5fcccd"),
            img("photo-1608248543803-ba4f8c70ae0b"),
            img("photo-1556228578-8c89e6adf883"),
            img("photo-1620917669788-be9d8f6b6a6c")
        ],

        brand: "Bath & Body Works",

        description:
            "Premium fragrance mist with long-lasting floral notes.",

        price: 1299,

        oldPrice: 1599,

        catName: "Beauty",
        SubcatName: "Skincare",
        innersubcatName: "Body Care",

        rating: 4.6,

        discount: 19,

        variants: [
            {
                options: {
                    Size: "236ml",
                    Fragrance: "Cherry Blossom"
                },

                sku: "BEAUTY-BODY-007-BBW",

                price: 1299,

                stock: 45,

                images: [
                    img("photo-1611930022073-b7a4ba5fcccd")
                ]
            }
        ]

    },




    {
        name: "L'Oréal Paris Glycolic Bright Body Lotion",

        images: [
            img("photo-1620917669788-be9d8f6b6a6c"),
            img("photo-1608248543803-ba4f8c70ae0b"),
            img("photo-1611930022073-b7a4ba5fcccd"),
            img("photo-1556228578-8c89e6adf883")
        ],

        brand: "L'Oréal Paris",

        description:
            "Brightening body lotion with glycolic acid for smoother looking skin.",

        price: 599,

        oldPrice: 799,

        catName: "Beauty",
        SubcatName: "Skincare",
        innersubcatName: "Body Care",

        rating: 4.5,

        discount: 25,

        variants: [
            {
                options: {
                    Size: "250ml",
                    Ingredient: "Glycolic Acid"
                },

                sku: "BEAUTY-BODY-008-LOREAL",

                price: 599,

                stock: 70,

                images: [
                    img("photo-1620917669788-be9d8f6b6a6c")
                ]
            }
        ]

    },




    {
        name: "Tree Hut Shea Sugar Body Scrub",

        images: [
            img("photo-1611930022073-b7a4ba5fcccd"),
            img("photo-1608248543803-ba4f8c70ae0b"),
            img("photo-1620917669788-be9d8f6b6a6c"),
            img("photo-1556228578-8c89e6adf883")
        ],

        brand: "Tree Hut",

        description:
            "Exfoliating sugar body scrub that leaves skin smooth and refreshed.",

        price: 899,

        oldPrice: 1099,

        catName: "Beauty",
        SubcatName: "Skincare",
        innersubcatName: "Body Care",

        rating: 4.7,

        discount: 18,

        variants: [
            {
                options: {
                    Size: "510g",
                    Fragrance: "Coconut"
                },

                sku: "BEAUTY-BODY-009-TREEHUT",

                price: 899,

                stock: 35,

                images: [
                    img("photo-1611930022073-b7a4ba5fcccd")
                ]
            }
        ]

    },




    {
        name: "Aveeno Daily Moisturizing Body Lotion",

        images: [
            img("photo-1608248543803-ba4f8c70ae0b"),
            img("photo-1556228578-8c89e6adf883"),
            img("photo-1611930022073-b7a4ba5fcccd"),
            img("photo-1620917669788-be9d8f6b6a6c")
        ],

        brand: "Aveeno",

        description:
            "Soothing body lotion with oat extract for dry and sensitive skin.",

        price: 999,

        oldPrice: 1299,

        catName: "Beauty",
        SubcatName: "Skincare",
        innersubcatName: "Body Care",

        rating: 4.7,

        discount: 23,

        variants: [
            {
                options: {
                    Size: "354ml",
                    SkinType: "Sensitive"
                },

                sku: "BEAUTY-BODY-010-AVEENO",

                price: 999,

                stock: 50,

                images: [
                    img("photo-1608248543803-ba4f8c70ae0b")
                ]
            }
        ]

    },


    /* ===========================
      SHAMPOO & CONDITIONER
   =========================== */


    {
        name: "L'Oréal Paris Total Repair 5 Shampoo",

        images: [
            img("photo-1535585209827-a15fcdbc4c2d"),
            img("photo-1522337360788-8b13dee7a37e"),
            img("photo-1556228578-8c89e6adf883"),
            img("photo-1598440947619-2c35fc9aa908")
        ],

        brand: "L'Oréal Paris",

        description:
            "Repair shampoo enriched with proteins to strengthen damaged and dry hair.",

        price: 499,

        oldPrice: 599,

        catName: "Beauty",
        SubcatName: "Haircare",
        innersubcatName: "Shampoo & Conditioner",

        rating: 4.5,

        discount: 17,


        variants: [
            {
                options: {
                    Size: "640ml",
                    HairType: "Damaged Hair"
                },

                sku: "BEAUTY-HAIR-001-LOREAL",

                price: 499,

                stock: 100,

                images: [
                    img("photo-1535585209827-a15fcdbc4c2d")
                ]
            }
        ]

    },




    {
        name: "L'Oréal Professionnel Absolut Repair Shampoo",

        images: [
            img("photo-1522337360788-8b13dee7a37e"),
            img("photo-1535585209827-a15fcdbc4c2d"),
            img("photo-1598440947619-2c35fc9aa908"),
            img("photo-1556228578-8c89e6adf883")
        ],

        brand: "L'Oréal Professionnel",

        description:
            "Salon-quality shampoo for repairing damaged hair with professional care.",

        price: 899,

        oldPrice: 1099,

        catName: "Beauty",
        SubcatName: "Haircare",
        innersubcatName: "Shampoo & Conditioner",

        rating: 4.7,

        discount: 18,


        variants: [
            {
                options: {
                    Size: "300ml",
                    HairType: "Damaged"
                },

                sku: "BEAUTY-HAIR-002-LP",

                price: 899,

                stock: 60,

                images: [
                    img("photo-1522337360788-8b13dee7a37e")
                ]
            }
        ]

    },




    {
        name: "Olaplex No.4 Bond Maintenance Shampoo",

        images: [
            img("photo-1535585209827-a15fcdbc4c2d"),
            img("photo-1598440947619-2c35fc9aa908"),
            img("photo-1522337360788-8b13dee7a37e"),
            img("photo-1556228578-8c89e6adf883")
        ],

        brand: "Olaplex",

        description:
            "Premium bond repairing shampoo designed for damaged and chemically treated hair.",

        price: 2499,

        oldPrice: 2999,

        catName: "Beauty",
        SubcatName: "Haircare",
        innersubcatName: "Shampoo & Conditioner",

        rating: 4.8,

        discount: 17,


        variants: [
            {
                options: {
                    Size: "250ml",
                    HairType: "All"
                },

                sku: "BEAUTY-HAIR-003-OLAPLEX",

                price: 2499,

                stock: 30,

                images: [
                    img("photo-1535585209827-a15fcdbc4c2d")
                ]
            }
        ]

    },




    {
        name: "Tresemmé Keratin Smooth Shampoo",

        images: [
            img("photo-1522337360788-8b13dee7a37e"),
            img("photo-1535585209827-a15fcdbc4c2d"),
            img("photo-1598440947619-2c35fc9aa908"),
            img("photo-1556228578-8c89e6adf883")
        ],

        brand: "Tresemmé",

        description:
            "Keratin enriched shampoo that controls frizz and smoothens hair.",

        price: 399,

        oldPrice: 499,

        catName: "Beauty",
        SubcatName: "Haircare",
        innersubcatName: "Shampoo & Conditioner",

        rating: 4.4,

        discount: 20,


        variants: [
            {
                options: {
                    Size: "580ml",
                    HairType: "Frizzy Hair"
                },

                sku: "BEAUTY-HAIR-004-TRES",

                price: 399,

                stock: 120,

                images: [
                    img("photo-1522337360788-8b13dee7a37e")
                ]
            }
        ]

    },




    {
        name: "Dove Intense Repair Shampoo",

        images: [
            img("photo-1535585209827-a15fcdbc4c2d"),
            img("photo-1522337360788-8b13dee7a37e"),
            img("photo-1556228578-8c89e6adf883"),
            img("photo-1598440947619-2c35fc9aa908")
        ],

        brand: "Dove",

        description:
            "Moisturizing shampoo that repairs dry and damaged hair.",

        price: 299,

        oldPrice: 399,

        catName: "Beauty",
        SubcatName: "Haircare",
        innersubcatName: "Shampoo & Conditioner",

        rating: 4.5,

        discount: 25,


        variants: [
            {
                options: {
                    Size: "650ml",
                    HairType: "Dry Hair"
                },

                sku: "BEAUTY-HAIR-005-DOVE",

                price: 299,

                stock: 150,

                images: [
                    img("photo-1535585209827-a15fcdbc4c2d")
                ]
            }
        ]

    },




    {
        name: "Head & Shoulders Anti Dandruff Shampoo",

        images: [
            img("photo-1522337360788-8b13dee7a37e"),
            img("photo-1535585209827-a15fcdbc4c2d"),
            img("photo-1598440947619-2c35fc9aa908"),
            img("photo-1556228578-8c89e6adf883")
        ],

        brand: "Head & Shoulders",

        description:
            "Anti dandruff shampoo that keeps scalp clean and refreshed.",

        price: 349,

        oldPrice: 449,

        catName: "Beauty",
        SubcatName: "Haircare",
        innersubcatName: "Shampoo & Conditioner",

        rating: 4.4,

        discount: 22,


        variants: [
            {
                options: {
                    Size: "675ml",
                    Concern: "Dandruff"
                },

                sku: "BEAUTY-HAIR-006-HS",

                price: 349,

                stock: 100,

                images: [
                    img("photo-1522337360788-8b13dee7a37e")
                ]
            }
        ]

    },




    {
        name: "Mamaearth Onion Hair Fall Control Shampoo",

        images: [
            img("photo-1535585209827-a15fcdbc4c2d"),
            img("photo-1522337360788-8b13dee7a37e"),
            img("photo-1598440947619-2c35fc9aa908"),
            img("photo-1556228578-8c89e6adf883")
        ],

        brand: "Mamaearth",

        description:
            "Onion and plant keratin shampoo designed to reduce hair fall.",

        price: 399,

        oldPrice: 499,

        catName: "Beauty",
        SubcatName: "Haircare",
        innersubcatName: "Shampoo & Conditioner",

        rating: 4.3,

        discount: 20,


        variants: [
            {
                options: {
                    Size: "250ml",
                    Concern: "Hair Fall"
                },

                sku: "BEAUTY-HAIR-007-MAMA",

                price: 399,

                stock: 90,

                images: [
                    img("photo-1535585209827-a15fcdbc4c2d")
                ]
            }
        ]

    },




    {
        name: "OGX Coconut Milk Shampoo",

        images: [
            img("photo-1522337360788-8b13dee7a37e"),
            img("photo-1535585209827-a15fcdbc4c2d"),
            img("photo-1598440947619-2c35fc9aa908"),
            img("photo-1556228578-8c89e6adf883")
        ],

        brand: "OGX",

        description:
            "Coconut milk shampoo that nourishes and strengthens hair.",

        price: 899,

        oldPrice: 1099,

        catName: "Beauty",
        SubcatName: "Haircare",
        innersubcatName: "Shampoo & Conditioner",

        rating: 4.6,

        discount: 18,


        variants: [
            {
                options: {
                    Size: "385ml",
                    HairType: "Dry Hair"
                },

                sku: "BEAUTY-HAIR-008-OGX",

                price: 899,

                stock: 50,

                images: [
                    img("photo-1522337360788-8b13dee7a37e")
                ]
            }
        ]

    },




    {
        name: "Moroccanoil Hydrating Conditioner",

        images: [
            img("photo-1598440947619-2c35fc9aa908"),
            img("photo-1535585209827-a15fcdbc4c2d"),
            img("photo-1522337360788-8b13dee7a37e"),
            img("photo-1556228578-8c89e6adf883")
        ],

        brand: "Moroccanoil",

        description:
            "Luxury argan oil conditioner for soft, hydrated and manageable hair.",

        price: 1899,

        oldPrice: 2299,

        catName: "Beauty",
        SubcatName: "Haircare",
        innersubcatName: "Shampoo & Conditioner",

        rating: 4.7,

        discount: 17,


        variants: [
            {
                options: {
                    Size: "250ml",
                    Ingredient: "Argan Oil"
                },

                sku: "BEAUTY-HAIR-009-MOROCC",

                price: 1899,

                stock: 35,

                images: [
                    img("photo-1598440947619-2c35fc9aa908")
                ]
            }
        ]

    },




    {
        name: "Minimalist Maleic Bond Repair Complex",

        images: [
            img("photo-1535585209827-a15fcdbc4c2d"),
            img("photo-1522337360788-8b13dee7a37e"),
            img("photo-1598440947619-2c35fc9aa908"),
            img("photo-1556228578-8c89e6adf883")
        ],

        brand: "Minimalist",

        description:
            "Hair repair serum treatment designed to strengthen damaged hair bonds.",

        price: 699,

        oldPrice: 799,

        catName: "Beauty",
        SubcatName: "Haircare",
        innersubcatName: "Shampoo & Conditioner",

        rating: 4.5,

        discount: 13,


        variants: [
            {
                options: {
                    Size: "30ml",
                    Concern: "Hair Damage"
                },

                sku: "BEAUTY-HAIR-010-MALEIC",

                price: 699,

                stock: 80,

                images: [
                    img("photo-1535585209827-a15fcdbc4c2d")
                ]
            }
        ]

    },


    /* ===========================
          HAIR STYLING
   =========================== */


    {
        name: "Dyson Supersonic Hair Dryer",

        images: [
            img("photo-1522338242992-e1a54906a8da"),
            img("photo-1522337360788-8b13dee7a37e"),
            img("photo-1598440947619-2c35fc9aa908"),
            img("photo-1535585209827-a15fcdbc4c2d")
        ],

        brand: "Dyson",

        description:
            "Premium hair dryer with intelligent heat control and fast drying technology.",

        price: 39999,

        oldPrice: 45999,

        catName: "Beauty",
        SubcatName: "Haircare",
        innersubcatName: "Hair Styling",

        rating: 4.9,

        discount: 13,

        variants: [
            {
                options: {
                    Color: "Nickel",
                    Technology: "Heat Control"
                },

                sku: "BEAUTY-STYL-001-DYSON",

                price: 39999,

                stock: 10,

                images: [
                    img("photo-1522338242992-e1a54906a8da")
                ]
            }
        ]

    },




    {
        name: "Philips Hair Dryer 1600W",

        images: [
            img("photo-1522338242992-e1a54906a8da"),
            img("photo-1556228578-8c89e6adf883"),
            img("photo-1535585209827-a15fcdbc4c2d"),
            img("photo-1598440947619-2c35fc9aa908")
        ],

        brand: "Philips",

        description:
            "Compact hair dryer with ThermoProtect technology for safe everyday styling.",

        price: 1499,

        oldPrice: 1999,

        catName: "Beauty",
        SubcatName: "Haircare",
        innersubcatName: "Hair Styling",

        rating: 4.5,

        discount: 25,

        variants: [
            {
                options: {
                    Power: "1600W",
                    Color: "Purple"
                },

                sku: "BEAUTY-STYL-002-PHILIPS",

                price: 1499,

                stock: 80,

                images: [
                    img("photo-1522338242992-e1a54906a8da")
                ]
            }
        ]

    },




    {
        name: "Dyson Corrale Hair Straightener",

        images: [
            img("photo-1522337360788-8b13dee7a37e"),
            img("photo-1522338242992-e1a54906a8da"),
            img("photo-1535585209827-a15fcdbc4c2d"),
            img("photo-1556228578-8c89e6adf883")
        ],

        brand: "Dyson",

        description:
            "Cordless hair straightener with intelligent heat control and flexible plates.",

        price: 44999,

        oldPrice: 49999,

        catName: "Beauty",
        SubcatName: "Haircare",
        innersubcatName: "Hair Styling",

        rating: 4.8,

        discount: 10,

        variants: [
            {
                options: {
                    Color: "Nickel",
                    Feature: "Cordless"
                },

                sku: "BEAUTY-STYL-003-CORRALE",

                price: 44999,

                stock: 8,

                images: [
                    img("photo-1522337360788-8b13dee7a37e")
                ]
            }
        ]

    },




    {
        name: "Philips Kerashine Hair Straightener",

        images: [
            img("photo-1522337360788-8b13dee7a37e"),
            img("photo-1522338242992-e1a54906a8da"),
            img("photo-1556228578-8c89e6adf883"),
            img("photo-1535585209827-a15fcdbc4c2d")
        ],

        brand: "Philips",

        description:
            "Ceramic hair straightener with keratin infused plates for smooth styling.",

        price: 2499,

        oldPrice: 2999,

        catName: "Beauty",
        SubcatName: "Haircare",
        innersubcatName: "Hair Styling",

        rating: 4.4,

        discount: 17,

        variants: [
            {
                options: {
                    Plate: "Ceramic",
                    Heat: "210°C"
                },

                sku: "BEAUTY-STYL-004-PHILIPSKS",

                price: 2499,

                stock: 60,

                images: [
                    img("photo-1522337360788-8b13dee7a37e")
                ]
            }
        ]

    },




    {
        name: "Moroccanoil Treatment Hair Serum",

        images: [
            img("photo-1598440947619-2c35fc9aa908"),
            img("photo-1535585209827-a15fcdbc4c2d"),
            img("photo-1556228578-8c89e6adf883"),
            img("photo-1522337360788-8b13dee7a37e")
        ],

        brand: "Moroccanoil",

        description:
            "Luxury argan oil hair serum that adds shine and controls frizz.",

        price: 1799,

        oldPrice: 2199,

        catName: "Beauty",
        SubcatName: "Haircare",
        innersubcatName: "Hair Styling",

        rating: 4.8,

        discount: 18,

        variants: [
            {
                options: {
                    Size: "100ml",
                    Ingredient: "Argan Oil"
                },

                sku: "BEAUTY-STYL-005-MOROCC",

                price: 1799,

                stock: 45,

                images: [
                    img("photo-1598440947619-2c35fc9aa908")
                ]
            }
        ]

    },




    {
        name: "L'Oréal Paris Extraordinary Oil Serum",

        images: [
            img("photo-1598440947619-2c35fc9aa908"),
            img("photo-1535585209827-a15fcdbc4c2d"),
            img("photo-1556228578-8c89e6adf883"),
            img("photo-1522337360788-8b13dee7a37e")
        ],

        brand: "L'Oréal Paris",

        description:
            "Lightweight hair serum that gives shine and reduces dryness.",

        price: 399,

        oldPrice: 499,

        catName: "Beauty",
        SubcatName: "Haircare",
        innersubcatName: "Hair Styling",

        rating: 4.5,

        discount: 20,

        variants: [
            {
                options: {
                    Size: "100ml",
                    HairType: "Dry Hair"
                },

                sku: "BEAUTY-STYL-006-LOREAL",

                price: 399,

                stock: 120,

                images: [
                    img("photo-1598440947619-2c35fc9aa908")
                ]
            }
        ]

    },




    {
        name: "Schwarzkopf Professional Hair Styling Wax",

        images: [
            img("photo-1598440947619-2c35fc9aa908"),
            img("photo-1522338242992-e1a54906a8da"),
            img("photo-1535585209827-a15fcdbc4c2d"),
            img("photo-1556228578-8c89e6adf883")
        ],

        brand: "Schwarzkopf",

        description:
            "Professional styling wax providing strong hold and matte finish.",

        price: 599,

        oldPrice: 799,

        catName: "Beauty",
        SubcatName: "Haircare",
        innersubcatName: "Hair Styling",

        rating: 4.4,

        discount: 25,

        variants: [
            {
                options: {
                    Hold: "Strong",
                    Finish: "Matte"
                },

                sku: "BEAUTY-STYL-007-SCHWARZ",

                price: 599,

                stock: 70,

                images: [
                    img("photo-1598440947619-2c35fc9aa908")
                ]
            }
        ]

    },




    {
        name: "Toni & Guy Sea Salt Texturizing Spray",

        images: [
            img("photo-1598440947619-2c35fc9aa908"),
            img("photo-1535585209827-a15fcdbc4c2d"),
            img("photo-1522338242992-e1a54906a8da"),
            img("photo-1556228578-8c89e6adf883")
        ],

        brand: "Toni & Guy",

        description:
            "Texturizing spray for creating natural waves and beach hairstyles.",

        price: 699,

        oldPrice: 899,

        catName: "Beauty",
        SubcatName: "Haircare",
        innersubcatName: "Hair Styling",

        rating: 4.5,

        discount: 22,

        variants: [
            {
                options: {
                    Size: "200ml",
                    Style: "Wavy"
                },

                sku: "BEAUTY-STYL-008-TG",

                price: 699,

                stock: 50,

                images: [
                    img("photo-1598440947619-2c35fc9aa908")
                ]
            }
        ]

    },




    {
        name: "Wahl Professional Hair Clipper",

        images: [
            img("photo-1598440947619-2c35fc9aa908"),
            img("photo-1522338242992-e1a54906a8da"),
            img("photo-1535585209827-a15fcdbc4c2d"),
            img("photo-1556228578-8c89e6adf883")
        ],

        brand: "Wahl",

        description:
            "Professional hair clipper with precision blades for grooming and styling.",

        price: 2999,

        oldPrice: 3999,

        catName: "Beauty",
        SubcatName: "Haircare",
        innersubcatName: "Hair Styling",

        rating: 4.6,

        discount: 25,

        variants: [
            {
                options: {
                    Blade: "Stainless Steel",
                    Use: "Professional"
                },

                sku: "BEAUTY-STYL-009-WAHL",

                price: 2999,

                stock: 40,

                images: [
                    img("photo-1598440947619-2c35fc9aa908")
                ]
            }
        ]

    },




    {
        name: "Beardo Hair Styling Cream",

        images: [
            img("photo-1598440947619-2c35fc9aa908"),
            img("photo-1535585209827-a15fcdbc4c2d"),
            img("photo-1522338242992-e1a54906a8da"),
            img("photo-1556228578-8c89e6adf883")
        ],

        brand: "Beardo",

        description:
            "Men's hair styling cream providing flexible hold and natural finish.",

        price: 299,

        oldPrice: 399,

        catName: "Beauty",
        SubcatName: "Haircare",
        innersubcatName: "Hair Styling",

        rating: 4.3,

        discount: 25,

        variants: [
            {
                options: {
                    Size: "100g",
                    Finish: "Natural"
                },

                sku: "BEAUTY-STYL-010-BEARDO",

                price: 299,

                stock: 100,

                images: [
                    img("photo-1598440947619-2c35fc9aa908")
                ]
            }
        ]

    },

    /* ===========================
            EYES
   =========================== */


    {
        name: "Maybelline Lash Sensational Mascara",

        images: [
            img("photo-1631214524020-7e18dbb4b1b8"),
            img("photo-1591360236480-4ed861025d84"),
            img("photo-1583241800698-9d8f7e4c7f6e"),
            img("photo-1596462502278-27bfdc403348")
        ],

        brand: "Maybelline",

        description:
            "Volumizing mascara that creates fuller lashes with long-lasting wear.",

        price: 499,

        oldPrice: 599,

        catName: "Beauty",
        SubcatName: "Makeup",
        innersubcatName: "Eyes",

        rating: 4.6,

        discount: 17,


        variants: [
            {
                options: {
                    Shade: "Black",
                    Finish: "Volume"
                },

                sku: "BEAUTY-EYES-001-MAYBELLINE-MASCARA",

                price: 499,

                stock: 100,

                images: [
                    img("photo-1631214524020-7e18dbb4b1b8")
                ]
            }
        ]

    },




    {
        name: "L'Oréal Paris Voluminous Mascara",

        images: [
            img("photo-1591360236480-4ed861025d84"),
            img("photo-1631214524020-7e18dbb4b1b8"),
            img("photo-1583241800698-9d8f7e4c7f6e"),
            img("photo-1596462502278-27bfdc403348")
        ],

        brand: "L'Oréal Paris",

        description:
            "Smudge resistant mascara for dramatic and defined eyelashes.",

        price: 799,

        oldPrice: 999,

        catName: "Beauty",
        SubcatName: "Makeup",
        innersubcatName: "Eyes",

        rating: 4.5,

        discount: 20,


        variants: [
            {
                options: {
                    Shade: "Black",
                    Type: "Waterproof"
                },

                sku: "BEAUTY-EYES-002-LOREAL-MASCARA",

                price: 799,

                stock: 70,

                images: [
                    img("photo-1591360236480-4ed861025d84")
                ]
            }
        ]

    },




    {
        name: "MAC Eye Shadow Palette",

        images: [
            img("photo-1596462502278-27bfdc403348"),
            img("photo-1583241800698-9d8f7e4c7f6e"),
            img("photo-1631214524020-7e18dbb4b1b8"),
            img("photo-1591360236480-4ed861025d84")
        ],

        brand: "MAC",

        description:
            "Professional eyeshadow palette with highly pigmented shades.",

        price: 3500,

        oldPrice: 3999,

        catName: "Beauty",
        SubcatName: "Makeup",
        innersubcatName: "Eyes",

        rating: 4.8,

        discount: 12,


        variants: [
            {
                options: {
                    Shades: "12 Colors",
                    Finish: "Matte + Shimmer"
                },

                sku: "BEAUTY-EYES-003-MAC-PALETTE",

                price: 3500,

                stock: 30,

                images: [
                    img("photo-1596462502278-27bfdc403348")
                ]
            }
        ]

    },




    {
        name: "Huda Beauty Nude Eyeshadow Palette",

        images: [
            img("photo-1596462502278-27bfdc403348"),
            img("photo-1583241800698-9d8f7e4c7f6e"),
            img("photo-1591360236480-4ed861025d84"),
            img("photo-1631214524020-7e18dbb4b1b8")
        ],

        brand: "Huda Beauty",

        description:
            "Luxury nude eyeshadow palette with blendable and long-lasting shades.",

        price: 5200,

        oldPrice: 5999,

        catName: "Beauty",
        SubcatName: "Makeup",
        innersubcatName: "Eyes",

        rating: 4.7,

        discount: 13,


        variants: [
            {
                options: {
                    Shades: "18 Colors",
                    Finish: "Matte"
                },

                sku: "BEAUTY-EYES-004-HUDA-NUDE",

                price: 5200,

                stock: 20,

                images: [
                    img("photo-1596462502278-27bfdc403348")
                ]
            }
        ]

    },




    {
        name: "Lakme Absolute Precision Eyeliner",

        images: [
            img("photo-1583241800698-9d8f7e4c7f6e"),
            img("photo-1631214524020-7e18dbb4b1b8"),
            img("photo-1591360236480-4ed861025d84"),
            img("photo-1596462502278-27bfdc403348")
        ],

        brand: "Lakme",

        description:
            "Precision liquid eyeliner with deep black finish and smooth application.",

        price: 450,

        oldPrice: 550,

        catName: "Beauty",
        SubcatName: "Makeup",
        innersubcatName: "Eyes",

        rating: 4.4,

        discount: 18,


        variants: [
            {
                options: {
                    Shade: "Black",
                    Type: "Liquid"
                },

                sku: "BEAUTY-EYES-005-LAKME-LINER",

                price: 450,

                stock: 120,

                images: [
                    img("photo-1583241800698-9d8f7e4c7f6e")
                ]
            }
        ]

    },




    {
        name: "Maybelline Colossal Kajal",

        images: [
            img("photo-1583241800698-9d8f7e4c7f6e"),
            img("photo-1631214524020-7e18dbb4b1b8"),
            img("photo-1591360236480-4ed861025d84"),
            img("photo-1596462502278-27bfdc403348")
        ],

        brand: "Maybelline",

        description:
            "Deep black kajal with waterproof and smudge resistant formula.",

        price: 199,

        oldPrice: 249,

        catName: "Beauty",
        SubcatName: "Makeup",
        innersubcatName: "Eyes",

        rating: 4.5,

        discount: 20,


        variants: [
            {
                options: {
                    Shade: "Black",
                    Duration: "24 Hours"
                },

                sku: "BEAUTY-EYES-006-MAYBELLINE-KAJAL",

                price: 199,

                stock: 200,

                images: [
                    img("photo-1583241800698-9d8f7e4c7f6e")
                ]
            }
        ]

    },




    {
        name: "Nykaa Rock The Line Kajal",

        images: [
            img("photo-1583241800698-9d8f7e4c7f6e"),
            img("photo-1591360236480-4ed861025d84"),
            img("photo-1631214524020-7e18dbb4b1b8"),
            img("photo-1596462502278-27bfdc403348")
        ],

        brand: "Nykaa",

        description:
            "Intense black kajal with creamy texture and long lasting finish.",

        price: 299,

        oldPrice: 399,

        catName: "Beauty",
        SubcatName: "Makeup",
        innersubcatName: "Eyes",

        rating: 4.3,

        discount: 25,


        variants: [
            {
                options: {
                    Shade: "Black",
                    Formula: "Creamy"
                },

                sku: "BEAUTY-EYES-007-NYKAA-KAJAL",

                price: 299,

                stock: 100,

                images: [
                    img("photo-1583241800698-9d8f7e4c7f6e")
                ]
            }
        ]

    },




    {
        name: "Benefit Cosmetics Brow Pencil",

        images: [
            img("photo-1596462502278-27bfdc403348"),
            img("photo-1631214524020-7e18dbb4b1b8"),
            img("photo-1591360236480-4ed861025d84"),
            img("photo-1583241800698-9d8f7e4c7f6e")
        ],

        brand: "Benefit",

        description:
            "Precision eyebrow pencil for natural looking defined brows.",

        price: 2200,

        oldPrice: 2500,

        catName: "Beauty",
        SubcatName: "Makeup",
        innersubcatName: "Eyes",

        rating: 4.6,

        discount: 12,


        variants: [
            {
                options: {
                    Shade: "Brown",
                    Type: "Pencil"
                },

                sku: "BEAUTY-EYES-008-BENEFIT-BROW",

                price: 2200,

                stock: 25,

                images: [
                    img("photo-1596462502278-27bfdc403348")
                ]
            }
        ]

    },




    {
        name: "e.l.f. Putty Eye Primer",

        images: [
            img("photo-1596462502278-27bfdc403348"),
            img("photo-1583241800698-9d8f7e4c7f6e"),
            img("photo-1631214524020-7e18dbb4b1b8"),
            img("photo-1591360236480-4ed861025d84")
        ],

        brand: "e.l.f.",

        description:
            "Eye primer that improves eyeshadow application and staying power.",

        price: 699,

        oldPrice: 899,

        catName: "Beauty",
        SubcatName: "Makeup",
        innersubcatName: "Eyes",

        rating: 4.5,

        discount: 22,


        variants: [
            {
                options: {
                    Shade: "Cream",
                    Finish: "Matte"
                },

                sku: "BEAUTY-EYES-009-ELF-PRIMER",

                price: 699,

                stock: 60,

                images: [
                    img("photo-1596462502278-27bfdc403348")
                ]
            }
        ]

    },




    {
        name: "Urban Decay Naked Eyeshadow Palette",

        images: [
            img("photo-1596462502278-27bfdc403348"),
            img("photo-1583241800698-9d8f7e4c7f6e"),
            img("photo-1591360236480-4ed861025d84"),
            img("photo-1631214524020-7e18dbb4b1b8")
        ],

        brand: "Urban Decay",

        description:
            "Premium eyeshadow palette with versatile everyday and party shades.",

        price: 4500,

        oldPrice: 5200,

        catName: "Beauty",
        SubcatName: "Makeup",
        innersubcatName: "Eyes",

        rating: 4.7,

        discount: 13,


        variants: [
            {
                options: {
                    Shades: "12 Colors",
                    Finish: "Matte + Metallic"
                },

                sku: "BEAUTY-EYES-010-URBAN",

                price: 4500,

                stock: 15,

                images: [
                    img("photo-1596462502278-27bfdc403348")
                ]
            }
        ]

    },


    /* ===========================
            LIPS
   =========================== */


    {
        name: "MAC Matte Lipstick Ruby Woo",

        images: [
            img("photo-1586495777744-4413f21062fa"),
            img("photo-1631214524020-7e18dbb4b1b8"),
            img("photo-1596462502278-27bfdc403348"),
            img("photo-1522338242992-e1a54906a8da")
        ],

        brand: "MAC",

        description:
            "Iconic matte lipstick with intense colour payoff and long-lasting finish.",

        price: 2100,

        oldPrice: 2500,

        catName: "Beauty",
        SubcatName: "Makeup",
        innersubcatName: "Lips",

        rating: 4.8,

        discount: 16,

        variants: [
            {
                options: {
                    Shade: "Ruby Woo",
                    Finish: "Matte"
                },

                sku: "BEAUTY-LIPS-001-MAC-RUBY",

                price: 2100,

                stock: 40,

                images: [
                    img("photo-1586495777744-4413f21062fa")
                ]
            }
        ]

    },



    {
        name: "Maybelline SuperStay Matte Ink Liquid Lipstick",

        images: [
            img("photo-1586495777744-4413f21062fa"),
            img("photo-1596462502278-27bfdc403348"),
            img("photo-1631214524020-7e18dbb4b1b8"),
            img("photo-1522338242992-e1a54906a8da")
        ],

        brand: "Maybelline",

        description:
            "Long lasting liquid lipstick with intense pigmentation and matte finish.",

        price: 699,

        oldPrice: 799,

        catName: "Beauty",
        SubcatName: "Makeup",
        innersubcatName: "Lips",

        rating: 4.6,

        discount: 13,

        variants: [
            {
                options: {
                    Shade: "Pioneer Red",
                    Finish: "Matte"
                },

                sku: "BEAUTY-LIPS-002-MAYBELLINE",

                price: 699,

                stock: 120,

                images: [
                    img("photo-1586495777744-4413f21062fa")
                ]
            }
        ]

    },



    {
        name: "Lakme Absolute Matte Revolution Lipstick",

        images: [
            img("photo-1586495777744-4413f21062fa"),
            img("photo-1596462502278-27bfdc403348"),
            img("photo-1522338242992-e1a54906a8da"),
            img("photo-1631214524020-7e18dbb4b1b8")
        ],

        brand: "Lakme",

        description:
            "Premium matte lipstick with smooth texture and rich colour.",

        price: 800,

        oldPrice: 999,

        catName: "Beauty",
        SubcatName: "Makeup",
        innersubcatName: "Lips",

        rating: 4.5,

        discount: 20,

        variants: [
            {
                options: {
                    Shade: "Crimson Love",
                    Finish: "Matte"
                },

                sku: "BEAUTY-LIPS-003-LAKME",

                price: 800,

                stock: 80,

                images: [
                    img("photo-1586495777744-4413f21062fa")
                ]
            }
        ]

    },



    {
        name: "Huda Beauty Power Bullet Matte Lipstick",

        images: [
            img("photo-1586495777744-4413f21062fa"),
            img("photo-1522338242992-e1a54906a8da"),
            img("photo-1596462502278-27bfdc403348"),
            img("photo-1631214524020-7e18dbb4b1b8")
        ],

        brand: "Huda Beauty",

        description:
            "Luxury matte lipstick with creamy texture and bold pigmentation.",

        price: 2500,

        oldPrice: 3000,

        catName: "Beauty",
        SubcatName: "Makeup",
        innersubcatName: "Lips",

        rating: 4.7,

        discount: 17,

        variants: [
            {
                options: {
                    Shade: "Interview",
                    Finish: "Matte"
                },

                sku: "BEAUTY-LIPS-004-HUDA",

                price: 2500,

                stock: 25,

                images: [
                    img("photo-1586495777744-4413f21062fa")
                ]
            }
        ]

    },



    {
        name: "Nykaa So Creme Creamy Matte Lipstick",

        images: [
            img("photo-1586495777744-4413f21062fa"),
            img("photo-1596462502278-27bfdc403348"),
            img("photo-1522338242992-e1a54906a8da"),
            img("photo-1631214524020-7e18dbb4b1b8")
        ],

        brand: "Nykaa",

        description:
            "Creamy matte lipstick with comfortable all-day wear.",

        price: 399,

        oldPrice: 499,

        catName: "Beauty",
        SubcatName: "Makeup",
        innersubcatName: "Lips",

        rating: 4.4,

        discount: 20,

        variants: [
            {
                options: {
                    Shade: "Wakeup Makeup",
                    Finish: "Cream Matte"
                },

                sku: "BEAUTY-LIPS-005-NYKAA",

                price: 399,

                stock: 150,

                images: [
                    img("photo-1586495777744-4413f21062fa")
                ]
            }
        ]

    },



    {
        name: "Fenty Beauty Gloss Bomb Universal Lip Gloss",

        images: [
            img("photo-1586495777744-4413f21062fa"),
            img("photo-1522338242992-e1a54906a8da"),
            img("photo-1596462502278-27bfdc403348"),
            img("photo-1631214524020-7e18dbb4b1b8")
        ],

        brand: "Fenty Beauty",

        description:
            "High shine lip gloss with non-sticky comfortable formula.",

        price: 2200,

        oldPrice: 2600,

        catName: "Beauty",
        SubcatName: "Makeup",
        innersubcatName: "Lips",

        rating: 4.8,

        discount: 15,

        variants: [
            {
                options: {
                    Shade: "Fenty Glow",
                    Finish: "Gloss"
                },

                sku: "BEAUTY-LIPS-006-FENTY",

                price: 2200,

                stock: 30,

                images: [
                    img("photo-1586495777744-4413f21062fa")
                ]
            }
        ]

    },



    {
        name: "Dior Lip Glow Oil",

        images: [
            img("photo-1586495777744-4413f21062fa"),
            img("photo-1596462502278-27bfdc403348"),
            img("photo-1522338242992-e1a54906a8da"),
            img("photo-1631214524020-7e18dbb4b1b8")
        ],

        brand: "Dior",

        description:
            "Luxury lip oil that hydrates lips and provides glossy shine.",

        price: 3500,

        oldPrice: 3999,

        catName: "Beauty",
        SubcatName: "Makeup",
        innersubcatName: "Lips",

        rating: 4.7,

        discount: 12,

        variants: [
            {
                options: {
                    Shade: "001 Pink",
                    Finish: "Glossy"
                },

                sku: "BEAUTY-LIPS-007-DIOR",

                price: 3500,

                stock: 20,

                images: [
                    img("photo-1586495777744-4413f21062fa")
                ]
            }
        ]

    },



    {
        name: "Vaseline Lip Therapy Original",

        images: [
            img("photo-1586495777744-4413f21062fa"),
            img("photo-1596462502278-27bfdc403348"),
            img("photo-1522338242992-e1a54906a8da"),
            img("photo-1631214524020-7e18dbb4b1b8")
        ],

        brand: "Vaseline",

        description:
            "Classic petroleum jelly lip balm for moisturized and soft lips.",

        price: 150,

        oldPrice: 199,

        catName: "Beauty",
        SubcatName: "Makeup",
        innersubcatName: "Lips",

        rating: 4.6,

        discount: 25,

        variants: [
            {
                options: {
                    Size: "20g",
                    Type: "Lip Balm"
                },

                sku: "BEAUTY-LIPS-008-VASELINE",

                price: 150,

                stock: 200,

                images: [
                    img("photo-1586495777744-4413f21062fa")
                ]
            }
        ]

    },



    {
        name: "Laneige Lip Sleeping Mask",

        images: [
            img("photo-1586495777744-4413f21062fa"),
            img("photo-1522338242992-e1a54906a8da"),
            img("photo-1596462502278-27bfdc403348"),
            img("photo-1631214524020-7e18dbb4b1b8")
        ],

        brand: "Laneige",

        description:
            "Overnight lip mask that deeply hydrates and repairs dry lips.",

        price: 1200,

        oldPrice: 1500,

        catName: "Beauty",
        SubcatName: "Makeup",
        innersubcatName: "Lips",

        rating: 4.7,

        discount: 20,

        variants: [
            {
                options: {
                    Flavor: "Berry",
                    Size: "8g"
                },

                sku: "BEAUTY-LIPS-009-LANEIGE",

                price: 1200,

                stock: 50,

                images: [
                    img("photo-1586495777744-4413f21062fa")
                ]
            }
        ]

    },



    {
        name: "Colorbar Waterproof Lip Liner",

        images: [
            img("photo-1586495777744-4413f21062fa"),
            img("photo-1631214524020-7e18dbb4b1b8"),
            img("photo-1596462502278-27bfdc403348"),
            img("photo-1522338242992-e1a54906a8da")
        ],

        brand: "Colorbar",

        description:
            "Smooth waterproof lip liner for precise lip definition.",

        price: 399,

        oldPrice: 499,

        catName: "Beauty",
        SubcatName: "Makeup",
        innersubcatName: "Lips",

        rating: 4.4,

        discount: 20,

        variants: [
            {
                options: {
                    Shade: "Nude",
                    Type: "Pencil"
                },

                sku: "BEAUTY-LIPS-010-COLORBAR",

                price: 399,

                stock: 100,

                images: [
                    img("photo-1586495777744-4413f21062fa")
                ]
            }
        ]

    },

    /* ===========================
          ROMANCE BOOKS
   =========================== */


    {
        name: "The Love Hypothesis",

        images: [
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1512820790803-83ca734da794"),
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1532012197267-da84d127e765")
        ],

        brand: "Penguin Random House",

        description:
            "A romantic comedy novel about love, science and unexpected relationships.",

        price: 399,

        oldPrice: 499,

        catName: "Books",
        SubcatName: "Fiction",
        innersubcatName: "Romance",

        rating: 4.6,

        discount: 20,


        variants: [
            {
                options: {
                    Format: "Paperback",
                    Language: "English"
                },

                sku: "BOOK-ROM-001-LOVE-HYP",

                price: 399,

                stock: 80,

                images: [
                    img("photo-1544947950-fa07a98d237f")
                ]
            }
        ]

    },




    {
        name: "It Ends With Us",

        images: [
            img("photo-1512820790803-83ca734da794"),
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1532012197267-da84d127e765")
        ],

        brand: "Atria Books",

        description:
            "A bestselling emotional romance novel exploring love, relationships and difficult choices.",

        price: 349,

        oldPrice: 499,

        catName: "Books",
        SubcatName: "Fiction",
        innersubcatName: "Romance",

        rating: 4.7,

        discount: 30,


        variants: [
            {
                options: {
                    Format: "Paperback",
                    Author: "Colleen Hoover"
                },

                sku: "BOOK-ROM-002-IT-ENDS",

                price: 349,

                stock: 120,

                images: [
                    img("photo-1512820790803-83ca734da794")
                ]
            }
        ]

    },




    {
        name: "It Starts With Us",

        images: [
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1512820790803-83ca734da794"),
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1532012197267-da84d127e765")
        ],

        brand: "Atria Books",

        description:
            "A heartfelt romance sequel about second chances and healing.",

        price: 399,

        oldPrice: 499,

        catName: "Books",
        SubcatName: "Fiction",
        innersubcatName: "Romance",

        rating: 4.5,

        discount: 20,


        variants: [
            {
                options: {
                    Format: "Paperback",
                    Author: "Colleen Hoover"
                },

                sku: "BOOK-ROM-003-START-US",

                price: 399,

                stock: 90,

                images: [
                    img("photo-1543002588-bfa74002ed7e")
                ]
            }
        ]

    },




    {
        name: "Pride and Prejudice",

        images: [
            img("photo-1532012197267-da84d127e765"),
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1512820790803-83ca734da794"),
            img("photo-1543002588-bfa74002ed7e")
        ],

        brand: "Penguin Classics",

        description:
            "A timeless classic romance novel by Jane Austen.",

        price: 299,

        oldPrice: 399,

        catName: "Books",
        SubcatName: "Fiction",
        innersubcatName: "Romance",

        rating: 4.8,

        discount: 25,


        variants: [
            {
                options: {
                    Format: "Paperback",
                    Edition: "Classic"
                },

                sku: "BOOK-ROM-004-PRIDE",

                price: 299,

                stock: 100,

                images: [
                    img("photo-1532012197267-da84d127e765")
                ]
            }
        ]

    },




    {
        name: "The Fault In Our Stars",

        images: [
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1512820790803-83ca734da794"),
            img("photo-1532012197267-da84d127e765")
        ],

        brand: "Dutton Books",

        description:
            "A touching young adult romance about love, life and hope.",

        price: 299,

        oldPrice: 399,

        catName: "Books",
        SubcatName: "Fiction",
        innersubcatName: "Romance",

        rating: 4.6,

        discount: 25,


        variants: [
            {
                options: {
                    Format: "Paperback",
                    Genre: "Young Adult"
                },

                sku: "BOOK-ROM-005-FAULT",

                price: 299,

                stock: 110,

                images: [
                    img("photo-1544947950-fa07a98d237f")
                ]
            }
        ]

    },




    {
        name: "The Notebook",

        images: [
            img("photo-1512820790803-83ca734da794"),
            img("photo-1532012197267-da84d127e765"),
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1543002588-bfa74002ed7e")
        ],

        brand: "Grand Central Publishing",

        description:
            "A classic love story about memories, devotion and lifelong romance.",

        price: 349,

        oldPrice: 449,

        catName: "Books",
        SubcatName: "Fiction",
        innersubcatName: "Romance",

        rating: 4.5,

        discount: 22,


        variants: [
            {
                options: {
                    Format: "Paperback",
                    Author: "Nicholas Sparks"
                },

                sku: "BOOK-ROM-006-NOTEBOOK",

                price: 349,

                stock: 70,

                images: [
                    img("photo-1512820790803-83ca734da794")
                ]
            }
        ]

    },




    {
        name: "Me Before You",

        images: [
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1512820790803-83ca734da794"),
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1532012197267-da84d127e765")
        ],

        brand: "Penguin Books",

        description:
            "A powerful romance novel about love, choices and personal transformation.",

        price: 399,

        oldPrice: 499,

        catName: "Books",
        SubcatName: "Fiction",
        innersubcatName: "Romance",

        rating: 4.7,

        discount: 20,


        variants: [
            {
                options: {
                    Format: "Paperback",
                    Author: "Jojo Moyes"
                },

                sku: "BOOK-ROM-007-ME-BEFORE",

                price: 399,

                stock: 85,

                images: [
                    img("photo-1543002588-bfa74002ed7e")
                ]
            }
        ]

    },




    {
        name: "The Spanish Love Deception",

        images: [
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1532012197267-da84d127e765"),
            img("photo-1512820790803-83ca734da794"),
            img("photo-1543002588-bfa74002ed7e")
        ],

        brand: "Berkley",

        description:
            "A fun enemies-to-lovers romantic comedy.",

        price: 449,

        oldPrice: 549,

        catName: "Books",
        SubcatName: "Fiction",
        innersubcatName: "Romance",

        rating: 4.4,

        discount: 18,


        variants: [
            {
                options: {
                    Format: "Paperback"
                },

                sku: "BOOK-ROM-008-SPANISH",

                price: 449,

                stock: 60,

                images: [
                    img("photo-1544947950-fa07a98d237f")
                ]
            }
        ]

    },




    {
        name: "The Hating Game",

        images: [
            img("photo-1532012197267-da84d127e765"),
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1512820790803-83ca734da794"),
            img("photo-1543002588-bfa74002ed7e")
        ],

        brand: "William Morrow",

        description:
            "A workplace romance featuring rivalry, humor and unexpected feelings.",

        price: 299,

        oldPrice: 399,

        catName: "Books",
        SubcatName: "Fiction",
        innersubcatName: "Romance",

        rating: 4.5,

        discount: 25,


        variants: [
            {
                options: {
                    Format: "Paperback"
                },

                sku: "BOOK-ROM-009-HATING",

                price: 299,

                stock: 75,

                images: [
                    img("photo-1532012197267-da84d127e765")
                ]
            }
        ]

    },




    {
        name: "November 9",

        images: [
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1532012197267-da84d127e765"),
            img("photo-1512820790803-83ca734da794")
        ],

        brand: "Atria Books",

        description:
            "A romantic story about fate, promises and unexpected connections.",

        price: 349,

        oldPrice: 449,

        catName: "Books",
        SubcatName: "Fiction",
        innersubcatName: "Romance",

        rating: 4.5,

        discount: 22,


        variants: [
            {
                options: {
                    Format: "Paperback",
                    Author: "Colleen Hoover"
                },

                sku: "BOOK-ROM-010-NOV9",

                price: 349,

                stock: 80,

                images: [
                    img("photo-1543002588-bfa74002ed7e")
                ]
            }
        ]

    },

    /* ===========================
      SCIENCE FICTION BOOKS
   =========================== */


    {
        name: "Dune",

        images: [
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1512820790803-83ca734da794"),
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1532012197267-da84d127e765")
        ],

        brand: "Ace Books",

        description:
            "Epic science fiction novel about politics, power and survival on the desert planet Arrakis.",

        price: 499,

        oldPrice: 599,

        catName: "Books",
        SubcatName: "Fiction",
        innersubcatName: "Science Fiction",

        rating: 4.8,

        discount: 17,

        variants: [
            {
                options: {
                    Format: "Paperback",
                    Author: "Frank Herbert"
                },

                sku: "BOOK-SCI-001-DUNE",

                price: 499,

                stock: 80,

                images: [
                    img("photo-1544947950-fa07a98d237f")
                ]
            }
        ]

    },




    {
        name: "The Martian",

        images: [
            img("photo-1512820790803-83ca734da794"),
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1532012197267-da84d127e765"),
            img("photo-1543002588-bfa74002ed7e")
        ],

        brand: "Crown Publishing",

        description:
            "A thrilling survival story of an astronaut stranded on Mars using science and engineering.",

        price: 399,

        oldPrice: 499,

        catName: "Books",
        SubcatName: "Fiction",
        innersubcatName: "Science Fiction",

        rating: 4.7,

        discount: 20,

        variants: [
            {
                options: {
                    Format: "Paperback",
                    Author: "Andy Weir"
                },

                sku: "BOOK-SCI-002-MARTIAN",

                price: 399,

                stock: 100,

                images: [
                    img("photo-1512820790803-83ca734da794")
                ]
            }
        ]

    },




    {
        name: "Project Hail Mary",

        images: [
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1512820790803-83ca734da794"),
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1532012197267-da84d127e765")
        ],

        brand: "Ballantine Books",

        description:
            "A space adventure involving humanity's last hope and an unexpected alien friendship.",

        price: 499,

        oldPrice: 599,

        catName: "Books",
        SubcatName: "Fiction",
        innersubcatName: "Science Fiction",

        rating: 4.8,

        discount: 17,

        variants: [
            {
                options: {
                    Format: "Paperback",
                    Author: "Andy Weir"
                },

                sku: "BOOK-SCI-003-HAILMARY",

                price: 499,

                stock: 70,

                images: [
                    img("photo-1543002588-bfa74002ed7e")
                ]
            }
        ]

    },




    {
        name: "Foundation",

        images: [
            img("photo-1532012197267-da84d127e765"),
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1512820790803-83ca734da794"),
            img("photo-1544947950-fa07a98d237f")
        ],

        brand: "Spectra Books",

        description:
            "A legendary science fiction series about predicting the future of human civilization.",

        price: 449,

        oldPrice: 549,

        catName: "Books",
        SubcatName: "Fiction",
        innersubcatName: "Science Fiction",

        rating: 4.6,

        discount: 18,

        variants: [
            {
                options: {
                    Format: "Paperback",
                    Author: "Isaac Asimov"
                },

                sku: "BOOK-SCI-004-FOUNDATION",

                price: 449,

                stock: 60,

                images: [
                    img("photo-1532012197267-da84d127e765")
                ]
            }
        ]

    },




    {
        name: "The Three Body Problem",

        images: [
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1512820790803-83ca734da794"),
            img("photo-1532012197267-da84d127e765")
        ],

        brand: "Tor Books",

        description:
            "A complex science fiction story about alien contact and humanity's future.",

        price: 599,

        oldPrice: 699,

        catName: "Books",
        SubcatName: "Fiction",
        innersubcatName: "Science Fiction",

        rating: 4.5,

        discount: 14,

        variants: [
            {
                options: {
                    Format: "Paperback",
                    Author: "Cixin Liu"
                },

                sku: "BOOK-SCI-005-THREEBODY",

                price: 599,

                stock: 50,

                images: [
                    img("photo-1544947950-fa07a98d237f")
                ]
            }
        ]

    },




    {
        name: "Ender's Game",

        images: [
            img("photo-1512820790803-83ca734da794"),
            img("photo-1532012197267-da84d127e765"),
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1543002588-bfa74002ed7e")
        ],

        brand: "Tor Fantasy",

        description:
            "A young genius trains in space warfare to protect humanity from alien threats.",

        price: 349,

        oldPrice: 449,

        catName: "Books",
        SubcatName: "Fiction",
        innersubcatName: "Science Fiction",

        rating: 4.6,

        discount: 22,

        variants: [
            {
                options: {
                    Format: "Paperback",
                    Author: "Orson Scott Card"
                },

                sku: "BOOK-SCI-006-ENDERS",

                price: 349,

                stock: 90,

                images: [
                    img("photo-1512820790803-83ca734da794")
                ]
            }
        ]

    },




    {
        name: "Ready Player One",

        images: [
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1532012197267-da84d127e765"),
            img("photo-1512820790803-83ca734da794")
        ],

        brand: "Ballantine Books",

        description:
            "A futuristic virtual reality adventure filled with technology and gaming culture.",

        price: 399,

        oldPrice: 499,

        catName: "Books",
        SubcatName: "Fiction",
        innersubcatName: "Science Fiction",

        rating: 4.5,

        discount: 20,

        variants: [
            {
                options: {
                    Format: "Paperback",
                    Theme: "Virtual Reality"
                },

                sku: "BOOK-SCI-007-READYPLAYER",

                price: 399,

                stock: 75,

                images: [
                    img("photo-1543002588-bfa74002ed7e")
                ]
            }
        ]

    },




    {
        name: "Neuromancer",

        images: [
            img("photo-1532012197267-da84d127e765"),
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1512820790803-83ca734da794")
        ],

        brand: "Ace Books",

        description:
            "A cyberpunk science fiction classic about artificial intelligence and hacking.",

        price: 399,

        oldPrice: 499,

        catName: "Books",
        SubcatName: "Fiction",
        innersubcatName: "Science Fiction",

        rating: 4.4,

        discount: 20,

        variants: [
            {
                options: {
                    Format: "Paperback",
                    Genre: "Cyberpunk"
                },

                sku: "BOOK-SCI-008-NEUROMANCER",

                price: 399,

                stock: 45,

                images: [
                    img("photo-1532012197267-da84d127e765")
                ]
            }
        ]

    },




    {
        name: "1984",

        images: [
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1512820790803-83ca734da794"),
            img("photo-1532012197267-da84d127e765"),
            img("photo-1543002588-bfa74002ed7e")
        ],

        brand: "Penguin Classics",

        description:
            "A dystopian science fiction novel exploring surveillance and authoritarian society.",

        price: 299,

        oldPrice: 399,

        catName: "Books",
        SubcatName: "Fiction",
        innersubcatName: "Science Fiction",

        rating: 4.8,

        discount: 25,

        variants: [
            {
                options: {
                    Format: "Paperback",
                    Author: "George Orwell"
                },

                sku: "BOOK-SCI-009-1984",

                price: 299,

                stock: 120,

                images: [
                    img("photo-1544947950-fa07a98d237f")
                ]
            }
        ]

    },




    {
        name: "Do Androids Dream of Electric Sheep?",

        images: [
            img("photo-1512820790803-83ca734da794"),
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1532012197267-da84d127e765")
        ],

        brand: "Del Rey",

        description:
            "A futuristic novel exploring artificial intelligence and what it means to be human.",

        price: 349,

        oldPrice: 449,

        catName: "Books",
        SubcatName: "Fiction",
        innersubcatName: "Science Fiction",

        rating: 4.5,

        discount: 22,

        variants: [
            {
                options: {
                    Format: "Paperback",
                    Author: "Philip K. Dick"
                },

                sku: "BOOK-SCI-010-ANDROID",

                price: 349,

                stock: 55,

                images: [
                    img("photo-1512820790803-83ca734da794")
                ]
            }
        ]

    },


    /* ===========================
        BIOGRAPHY BOOKS
   =========================== */


    {
        name: "Steve Jobs",

        images: [
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1512820790803-83ca734da794"),
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1532012197267-da84d127e765")
        ],

        brand: "Simon & Schuster",

        description:
            "The official biography of Steve Jobs covering his life, Apple journey and innovation philosophy.",

        price: 499,

        oldPrice: 699,

        catName: "Books",
        SubcatName: "Non-Fiction",
        innersubcatName: "Biographies",

        rating: 4.7,

        discount: 28,

        variants: [
            {
                options: {
                    Format: "Paperback",
                    Author: "Walter Isaacson"
                },

                sku: "BOOK-BIO-001-STEVE-JOBS",

                price: 499,

                stock: 90,

                images: [
                    img("photo-1544947950-fa07a98d237f")
                ]
            }
        ]

    },



    {
        name: "Elon Musk",

        images: [
            img("photo-1512820790803-83ca734da794"),
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1532012197267-da84d127e765"),
            img("photo-1543002588-bfa74002ed7e")
        ],

        brand: "Penguin Random House",

        description:
            "The biography of Elon Musk covering Tesla, SpaceX and his vision for the future.",

        price: 599,

        oldPrice: 799,

        catName: "Books",
        SubcatName: "Non-Fiction",
        innersubcatName: "Biographies",

        rating: 4.5,

        discount: 25,

        variants: [
            {
                options: {
                    Format: "Paperback",
                    Author: "Walter Isaacson"
                },

                sku: "BOOK-BIO-002-ELON-MUSK",

                price: 599,

                stock: 70,

                images: [
                    img("photo-1512820790803-83ca734da794")
                ]
            }
        ]

    },



    {
        name: "Wings of Fire",

        images: [
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1532012197267-da84d127e765"),
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1512820790803-83ca734da794")
        ],

        brand: "Universities Press",

        description:
            "Autobiography of Dr. APJ Abdul Kalam describing his journey from childhood to becoming India's Missile Man.",

        price: 250,

        oldPrice: 350,

        catName: "Books",
        SubcatName: "Non-Fiction",
        innersubcatName: "Biographies",

        rating: 4.8,

        discount: 28,

        variants: [
            {
                options: {
                    Format: "Paperback",
                    Language: "English"
                },

                sku: "BOOK-BIO-003-WINGS-FIRE",

                price: 250,

                stock: 200,

                images: [
                    img("photo-1543002588-bfa74002ed7e")
                ]
            }
        ]

    },



    {
        name: "Becoming",

        images: [
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1512820790803-83ca734da794"),
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1532012197267-da84d127e765")
        ],

        brand: "Crown Publishing",

        description:
            "Michelle Obama's inspiring memoir about identity, challenges and leadership.",

        price: 499,

        oldPrice: 699,

        catName: "Books",
        SubcatName: "Non-Fiction",
        innersubcatName: "Biographies",

        rating: 4.7,

        discount: 29,

        variants: [
            {
                options: {
                    Format: "Paperback",
                    Author: "Michelle Obama"
                },

                sku: "BOOK-BIO-004-BECOMING",

                price: 499,

                stock: 80,

                images: [
                    img("photo-1544947950-fa07a98d237f")
                ]
            }
        ]

    },



    {
        name: "Long Walk to Freedom",

        images: [
            img("photo-1532012197267-da84d127e765"),
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1512820790803-83ca734da794"),
            img("photo-1544947950-fa07a98d237f")
        ],

        brand: "Abacus",

        description:
            "Nelson Mandela's autobiography about his struggle against apartheid and leadership journey.",

        price: 599,

        oldPrice: 799,

        catName: "Books",
        SubcatName: "Non-Fiction",
        innersubcatName: "Biographies",

        rating: 4.8,

        discount: 25,

        variants: [
            {
                options: {
                    Format: "Paperback",
                    Author: "Nelson Mandela"
                },

                sku: "BOOK-BIO-005-MANDELA",

                price: 599,

                stock: 50,

                images: [
                    img("photo-1532012197267-da84d127e765")
                ]
            }
        ]

    },



    {
        name: "Shoe Dog",

        images: [
            img("photo-1512820790803-83ca734da794"),
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1532012197267-da84d127e765")
        ],

        brand: "Scribner",

        description:
            "The story of Nike's founder Phil Knight and the creation of a global brand.",

        price: 399,

        oldPrice: 599,

        catName: "Books",
        SubcatName: "Non-Fiction",
        innersubcatName: "Biographies",

        rating: 4.6,

        discount: 33,

        variants: [
            {
                options: {
                    Format: "Paperback",
                    Author: "Phil Knight"
                },

                sku: "BOOK-BIO-006-SHOE-DOG",

                price: 399,

                stock: 90,

                images: [
                    img("photo-1512820790803-83ca734da794")
                ]
            }
        ]

    },



    {
        name: "Einstein: His Life and Universe",

        images: [
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1512820790803-83ca734da794"),
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1532012197267-da84d127e765")
        ],

        brand: "Simon & Schuster",

        description:
            "A detailed biography of Albert Einstein's scientific discoveries and personal life.",

        price: 550,

        oldPrice: 750,

        catName: "Books",
        SubcatName: "Non-Fiction",
        innersubcatName: "Biographies",

        rating: 4.6,

        discount: 27,

        variants: [
            {
                options: {
                    Format: "Paperback",
                    Author: "Walter Isaacson"
                },

                sku: "BOOK-BIO-007-EINSTEIN",

                price: 550,

                stock: 40,

                images: [
                    img("photo-1543002588-bfa74002ed7e")
                ]
            }
        ]

    },



    {
        name: "Open: An Autobiography",

        images: [
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1532012197267-da84d127e765"),
            img("photo-1512820790803-83ca734da794"),
            img("photo-1543002588-bfa74002ed7e")
        ],

        brand: "HarperCollins",

        description:
            "André Agassi's autobiography about tennis, success and personal struggles.",

        price: 450,

        oldPrice: 599,

        catName: "Books",
        SubcatName: "Non-Fiction",
        innersubcatName: "Biographies",

        rating: 4.7,

        discount: 25,

        variants: [
            {
                options: {
                    Format: "Paperback",
                    Author: "Andre Agassi"
                },

                sku: "BOOK-BIO-008-OPEN",

                price: 450,

                stock: 60,

                images: [
                    img("photo-1544947950-fa07a98d237f")
                ]
            }
        ]

    },



    {
        name: "The Diary of a Young Girl",

        images: [
            img("photo-1512820790803-83ca734da794"),
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1532012197267-da84d127e765")
        ],

        brand: "Penguin Classics",

        description:
            "The diary of Anne Frank documenting her life during World War II.",

        price: 299,

        oldPrice: 399,

        catName: "Books",
        SubcatName: "Non-Fiction",
        innersubcatName: "Biographies",

        rating: 4.8,

        discount: 25,

        variants: [
            {
                options: {
                    Format: "Paperback",
                    Author: "Anne Frank"
                },

                sku: "BOOK-BIO-009-ANNE-FRANK",

                price: 299,

                stock: 150,

                images: [
                    img("photo-1512820790803-83ca734da794")
                ]
            }
        ]

    },



    {
        name: "Playing It My Way",

        images: [
            img("photo-1532012197267-da84d127e765"),
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1512820790803-83ca734da794"),
            img("photo-1543002588-bfa74002ed7e")
        ],

        brand: "HarperCollins India",

        description:
            "Sachin Tendulkar's autobiography covering his cricket career and personal journey.",

        price: 399,

        oldPrice: 499,

        catName: "Books",
        SubcatName: "Non-Fiction",
        innersubcatName: "Biographies",

        rating: 4.9,

        discount: 20,

        variants: [
            {
                options: {
                    Format: "Paperback",
                    Author: "Sachin Tendulkar"
                },

                sku: "BOOK-BIO-010-SACHIN",

                price: 399,

                stock: 120,

                images: [
                    img("photo-1532012197267-da84d127e765")
                ]
            }
        ]

    },

    /* ===========================
          SELF HELP BOOKS
   =========================== */


    {
        name: "Atomic Habits",

        images: [
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1512820790803-83ca734da794"),
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1532012197267-da84d127e765")
        ],

        brand: "Avery Publishing",

        description:
            "A practical guide to building good habits and breaking bad ones using proven behavioral science.",

        price: 399,

        oldPrice: 599,

        catName: "Books",
        SubcatName: "Non-Fiction",
        innersubcatName: "Self-Help",

        rating: 4.9,

        discount: 33,

        variants: [
            {
                options: {
                    Format: "Paperback",
                    Author: "James Clear"
                },

                sku: "BOOK-SELF-001-ATOMIC",

                price: 399,

                stock: 200,

                images: [
                    img("photo-1544947950-fa07a98d237f")
                ]
            }
        ]

    },



    {
        name: "The Psychology of Money",

        images: [
            img("photo-1512820790803-83ca734da794"),
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1532012197267-da84d127e765")
        ],

        brand: "Harriman House",

        description:
            "Lessons about wealth, investing and financial decisions through human behavior.",

        price: 299,

        oldPrice: 399,

        catName: "Books",
        SubcatName: "Non-Fiction",
        innersubcatName: "Self-Help",

        rating: 4.8,

        discount: 25,

        variants: [
            {
                options: {
                    Format: "Paperback",
                    Author: "Morgan Housel"
                },

                sku: "BOOK-SELF-002-PSYCHOLOGY-MONEY",

                price: 299,

                stock: 150,

                images: [
                    img("photo-1512820790803-83ca734da794")
                ]
            }
        ]

    },



    {
        name: "Rich Dad Poor Dad",

        images: [
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1512820790803-83ca734da794"),
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1532012197267-da84d127e765")
        ],

        brand: "Plata Publishing",

        description:
            "A personal finance classic explaining money mindset and financial independence.",

        price: 299,

        oldPrice: 499,

        catName: "Books",
        SubcatName: "Non-Fiction",
        innersubcatName: "Self-Help",

        rating: 4.7,

        discount: 40,

        variants: [
            {
                options: {
                    Format: "Paperback",
                    Author: "Robert Kiyosaki"
                },

                sku: "BOOK-SELF-003-RICH-DAD",

                price: 299,

                stock: 180,

                images: [
                    img("photo-1543002588-bfa74002ed7e")
                ]
            }
        ]

    },



    {
        name: "Deep Work",

        images: [
            img("photo-1532012197267-da84d127e765"),
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1512820790803-83ca734da794"),
            img("photo-1543002588-bfa74002ed7e")
        ],

        brand: "Grand Central Publishing",

        description:
            "Strategies for focused work and achieving high-value productivity.",

        price: 350,

        oldPrice: 499,

        catName: "Books",
        SubcatName: "Non-Fiction",
        innersubcatName: "Self-Help",

        rating: 4.6,

        discount: 30,

        variants: [
            {
                options: {
                    Format: "Paperback",
                    Author: "Cal Newport"
                },

                sku: "BOOK-SELF-004-DEEP-WORK",

                price: 350,

                stock: 90,

                images: [
                    img("photo-1532012197267-da84d127e765")
                ]
            }
        ]

    },



    {
        name: "Think and Grow Rich",

        images: [
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1512820790803-83ca734da794"),
            img("photo-1532012197267-da84d127e765")
        ],

        brand: "Fingerprint Publishing",

        description:
            "A classic success philosophy book about mindset, ambition and achievement.",

        price: 199,

        oldPrice: 299,

        catName: "Books",
        SubcatName: "Non-Fiction",
        innersubcatName: "Self-Help",

        rating: 4.6,

        discount: 33,

        variants: [
            {
                options: {
                    Format: "Paperback",
                    Author: "Napoleon Hill"
                },

                sku: "BOOK-SELF-005-THINK-GROW",

                price: 199,

                stock: 250,

                images: [
                    img("photo-1544947950-fa07a98d237f")
                ]
            }
        ]

    },



    {
        name: "The 7 Habits of Highly Effective People",

        images: [
            img("photo-1512820790803-83ca734da794"),
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1532012197267-da84d127e765")
        ],

        brand: "Simon & Schuster",

        description:
            "A guide to personal effectiveness, leadership and better decision making.",

        price: 450,

        oldPrice: 599,

        catName: "Books",
        SubcatName: "Non-Fiction",
        innersubcatName: "Self-Help",

        rating: 4.8,

        discount: 25,

        variants: [
            {
                options: {
                    Format: "Paperback",
                    Author: "Stephen Covey"
                },

                sku: "BOOK-SELF-006-7-HABITS",

                price: 450,

                stock: 100,

                images: [
                    img("photo-1512820790803-83ca734da794")
                ]
            }
        ]

    },



    {
        name: "Ikigai",

        images: [
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1532012197267-da84d127e765"),
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1512820790803-83ca734da794")
        ],

        brand: "Penguin Life",

        description:
            "A Japanese philosophy book about finding purpose and living a meaningful life.",

        price: 250,

        oldPrice: 399,

        catName: "Books",
        SubcatName: "Non-Fiction",
        innersubcatName: "Self-Help",

        rating: 4.5,

        discount: 37,

        variants: [
            {
                options: {
                    Format: "Paperback",
                    Language: "English"
                },

                sku: "BOOK-SELF-007-IKIGAI",

                price: 250,

                stock: 170,

                images: [
                    img("photo-1543002588-bfa74002ed7e")
                ]
            }
        ]

    },



    {
        name: "Mindset",

        images: [
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1512820790803-83ca734da794"),
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1532012197267-da84d127e765")
        ],

        brand: "Ballantine Books",

        description:
            "Explores how adopting a growth mindset can improve learning and success.",

        price: 399,

        oldPrice: 499,

        catName: "Books",
        SubcatName: "Non-Fiction",
        innersubcatName: "Self-Help",

        rating: 4.7,

        discount: 20,

        variants: [
            {
                options: {
                    Format: "Paperback",
                    Author: "Carol Dweck"
                },

                sku: "BOOK-SELF-008-MINDSET",

                price: 399,

                stock: 80,

                images: [
                    img("photo-1544947950-fa07a98d237f")
                ]
            }
        ]

    },



    {
        name: "Can't Hurt Me",

        images: [
            img("photo-1512820790803-83ca734da794"),
            img("photo-1532012197267-da84d127e765"),
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1543002588-bfa74002ed7e")
        ],

        brand: "Lioncrest Publishing",

        description:
            "David Goggins shares his journey of overcoming limitations and building mental toughness.",

        price: 499,

        oldPrice: 699,

        catName: "Books",
        SubcatName: "Non-Fiction",
        innersubcatName: "Self-Help",

        rating: 4.8,

        discount: 28,

        variants: [
            {
                options: {
                    Format: "Paperback",
                    Author: "David Goggins"
                },

                sku: "BOOK-SELF-009-CANT-HURT",

                price: 499,

                stock: 100,

                images: [
                    img("photo-1512820790803-83ca734da794")
                ]
            }
        ]

    },



    {
        name: "Make Your Bed",

        images: [
            img("photo-1532012197267-da84d127e765"),
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1512820790803-83ca734da794")
        ],

        brand: "Grand Central Publishing",

        description:
            "Simple life lessons from a Navy SEAL about discipline and leadership.",

        price: 299,

        oldPrice: 399,

        catName: "Books",
        SubcatName: "Non-Fiction",
        innersubcatName: "Self-Help",

        rating: 4.6,

        discount: 25,

        variants: [
            {
                options: {
                    Format: "Paperback",
                    Author: "William H. McRaven"
                },

                sku: "BOOK-SELF-010-MAKE-BED",

                price: 299,

                stock: 120,

                images: [
                    img("photo-1532012197267-da84d127e765")
                ]
            }
        ]

    },

    /* ===========================
      SCHOOL TEXTBOOKS
   =========================== */


    {
        name: "NCERT Mathematics Class 10",

        images: [
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1512820790803-83ca734da794"),
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1532012197267-da84d127e765")
        ],

        brand: "NCERT",

        description:
            "Official NCERT Mathematics textbook for Class 10 students following CBSE curriculum.",

        price: 120,

        oldPrice: 150,

        catName: "Books",
        SubcatName: "Academic",
        innersubcatName: "School-Textbooks",

        rating: 4.8,

        discount: 20,

        variants: [
            {
                options: {
                    Class: "10",
                    Subject: "Mathematics"
                },

                sku: "BOOK-SCHOOL-001-NCERT-MATH10",

                price: 120,

                stock: 300,

                images: [
                    img("photo-1543002588-bfa74002ed7e")
                ]
            }
        ]

    },



    {
        name: "NCERT Science Class 10",

        images: [
            img("photo-1512820790803-83ca734da794"),
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1532012197267-da84d127e765")
        ],

        brand: "NCERT",

        description:
            "Official Science textbook covering Physics, Chemistry and Biology concepts for Class 10.",

        price: 150,

        oldPrice: 180,

        catName: "Books",
        SubcatName: "Academic",
        innersubcatName: "School-Textbooks",

        rating: 4.7,

        discount: 17,

        variants: [
            {
                options: {
                    Class: "10",
                    Subject: "Science"
                },

                sku: "BOOK-SCHOOL-002-NCERT-SCI10",

                price: 150,

                stock: 250,

                images: [
                    img("photo-1512820790803-83ca734da794")
                ]
            }
        ]

    },



    {
        name: "NCERT Physics Class 12",

        images: [
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1532012197267-da84d127e765"),
            img("photo-1512820790803-83ca734da794"),
            img("photo-1543002588-bfa74002ed7e")
        ],

        brand: "NCERT",

        description:
            "Class 12 Physics textbook covering mechanics, electricity, optics and modern physics.",

        price: 220,

        oldPrice: 260,

        catName: "Books",
        SubcatName: "Academic",
        innersubcatName: "School-Textbooks",

        rating: 4.8,

        discount: 15,

        variants: [
            {
                options: {
                    Class: "12",
                    Subject: "Physics"
                },

                sku: "BOOK-SCHOOL-003-NCERT-PHY12",

                price: 220,

                stock: 200,

                images: [
                    img("photo-1544947950-fa07a98d237f")
                ]
            }
        ]

    },



    {
        name: "NCERT Chemistry Class 12",

        images: [
            img("photo-1532012197267-da84d127e765"),
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1512820790803-83ca734da794"),
            img("photo-1544947950-fa07a98d237f")
        ],

        brand: "NCERT",

        description:
            "Class 12 Chemistry textbook for CBSE board preparation.",

        price: 210,

        oldPrice: 250,

        catName: "Books",
        SubcatName: "Academic",
        innersubcatName: "School-Textbooks",

        rating: 4.7,

        discount: 16,

        variants: [
            {
                options: {
                    Class: "12",
                    Subject: "Chemistry"
                },

                sku: "BOOK-SCHOOL-004-NCERT-CHEM12",

                price: 210,

                stock: 180,

                images: [
                    img("photo-1532012197267-da84d127e765")
                ]
            }
        ]

    },



    {
        name: "NCERT Biology Class 12",

        images: [
            img("photo-1512820790803-83ca734da794"),
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1532012197267-da84d127e765")
        ],

        brand: "NCERT",

        description:
            "Class 12 Biology textbook covering genetics, ecology and human biology.",

        price: 250,

        oldPrice: 300,

        catName: "Books",
        SubcatName: "Academic",
        innersubcatName: "School-Textbooks",

        rating: 4.8,

        discount: 17,

        variants: [
            {
                options: {
                    Class: "12",
                    Subject: "Biology"
                },

                sku: "BOOK-SCHOOL-005-NCERT-BIO12",

                price: 250,

                stock: 150,

                images: [
                    img("photo-1512820790803-83ca734da794")
                ]
            }
        ]

    },



    {
        name: "RD Sharma Mathematics Class 12",

        images: [
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1532012197267-da84d127e765"),
            img("photo-1512820790803-83ca734da794"),
            img("photo-1544947950-fa07a98d237f")
        ],

        brand: "Dhanpat Rai Publications",

        description:
            "Popular mathematics reference book for CBSE board examination preparation.",

        price: 650,

        oldPrice: 750,

        catName: "Books",
        SubcatName: "Academic",
        innersubcatName: "School-Textbooks",

        rating: 4.7,

        discount: 13,

        variants: [
            {
                options: {
                    Class: "12",
                    Subject: "Mathematics"
                },

                sku: "BOOK-SCHOOL-006-RDSH12",

                price: 650,

                stock: 90,

                images: [
                    img("photo-1543002588-bfa74002ed7e")
                ]
            }
        ]

    },



    {
        name: "HC Verma Concepts of Physics Volume 1",

        images: [
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1512820790803-83ca734da794"),
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1532012197267-da84d127e765")
        ],

        brand: "Bharati Bhawan",

        description:
            "Conceptual physics book widely used by school students preparing for competitive exams.",

        price: 450,

        oldPrice: 550,

        catName: "Books",
        SubcatName: "Academic",
        innersubcatName: "School-Textbooks",

        rating: 4.9,

        discount: 18,

        variants: [
            {
                options: {
                    Subject: "Physics",
                    Volume: "1"
                },

                sku: "BOOK-SCHOOL-007-HCV1",

                price: 450,

                stock: 120,

                images: [
                    img("photo-1544947950-fa07a98d237f")
                ]
            }
        ]

    },



    {
        name: "S Chand Biology Class 11",

        images: [
            img("photo-1532012197267-da84d127e765"),
            img("photo-1512820790803-83ca734da794"),
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1543002588-bfa74002ed7e")
        ],

        brand: "S Chand",

        description:
            "Comprehensive biology textbook for senior secondary students.",

        price: 500,

        oldPrice: 600,

        catName: "Books",
        SubcatName: "Academic",
        innersubcatName: "School-Textbooks",

        rating: 4.5,

        discount: 17,

        variants: [
            {
                options: {
                    Class: "11",
                    Subject: "Biology"
                },

                sku: "BOOK-SCHOOL-008-SCHAND-BIO11",

                price: 500,

                stock: 70,

                images: [
                    img("photo-1532012197267-da84d127e765")
                ]
            }
        ]

    },



    {
        name: "Computer Science With Python Class 12",

        images: [
            img("photo-1512820790803-83ca734da794"),
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1532012197267-da84d127e765")
        ],

        brand: "Sumita Arora",

        description:
            "Computer Science textbook covering Python programming and CBSE syllabus.",

        price: 450,

        oldPrice: 550,

        catName: "Books",
        SubcatName: "Academic",
        innersubcatName: "School-Textbooks",

        rating: 4.6,

        discount: 18,

        variants: [
            {
                options: {
                    Class: "12",
                    Subject: "Computer Science"
                },

                sku: "BOOK-SCHOOL-009-PYTHON12",

                price: 450,

                stock: 100,

                images: [
                    img("photo-1512820790803-83ca734da794")
                ]
            }
        ]

    },



    {
        name: "Together With Mathematics Class 10",

        images: [
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1512820790803-83ca734da794"),
            img("photo-1532012197267-da84d127e765")
        ],

        brand: "Rachna Sagar",

        description:
            "CBSE practice book with solved examples and examination questions.",

        price: 350,

        oldPrice: 450,

        catName: "Books",
        SubcatName: "Academic",
        innersubcatName: "School-Textbooks",

        rating: 4.5,

        discount: 22,

        variants: [
            {
                options: {
                    Class: "10",
                    Subject: "Mathematics"
                },

                sku: "BOOK-SCHOOL-010-TOGETHER-MATH",

                price: 350,

                stock: 80,

                images: [
                    img("photo-1543002588-bfa74002ed7e")
                ]
            }
        ]

    },

    /* ===========================
   COMPETITIVE TEXTBOOKS
   =========================== */


    {
        name: "Concepts of Physics HC Verma Volume 2",

        images: [
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1512820790803-83ca734da794"),
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1532012197267-da84d127e765")
        ],

        brand: "Bharati Bhawan",

        description:
            "Advanced physics concepts and numerical problems for JEE preparation.",

        price: 480,

        oldPrice: 600,

        catName: "Books",
        SubcatName: "Academic",
        innersubcatName: "Competitive-Textbooks",

        rating: 4.9,

        discount: 20,

        variants: [
            {
                options: {
                    Exam: "JEE",
                    Subject: "Physics",
                    Volume: "2"
                },

                sku: "BOOK-COMP-001-HCV2",

                price: 480,

                stock: 100,

                images: [
                    img("photo-1544947950-fa07a98d237f")
                ]
            }
        ]

    },



    {
        name: "JEE Main Mathematics Arihant",

        images: [
            img("photo-1512820790803-83ca734da794"),
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1532012197267-da84d127e765")
        ],

        brand: "Arihant Publications",

        description:
            "Complete mathematics preparation book with solved questions for JEE Main.",

        price: 650,

        oldPrice: 800,

        catName: "Books",
        SubcatName: "Academic",
        innersubcatName: "Competitive-Textbooks",

        rating: 4.7,

        discount: 19,

        variants: [
            {
                options: {
                    Exam: "JEE Main",
                    Subject: "Mathematics"
                },

                sku: "BOOK-COMP-002-JEE-MATH",

                price: 650,

                stock: 80,

                images: [
                    img("photo-1512820790803-83ca734da794")
                ]
            }
        ]

    },



    {
        name: "Problems in General Physics IE Irodov",

        images: [
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1532012197267-da84d127e765"),
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1512820790803-83ca734da794")
        ],

        brand: "Arihant",

        description:
            "A challenging physics problem book for advanced competitive exam preparation.",

        price: 550,

        oldPrice: 700,

        catName: "Books",
        SubcatName: "Academic",
        innersubcatName: "Competitive-Textbooks",

        rating: 4.8,

        discount: 21,

        variants: [
            {
                options: {
                    Exam: "JEE Advanced",
                    Subject: "Physics"
                },

                sku: "BOOK-COMP-003-IRODOV",

                price: 550,

                stock: 60,

                images: [
                    img("photo-1543002588-bfa74002ed7e")
                ]
            }
        ]

    },



    {
        name: "NCERT Biology Class 11 and 12 Combo",

        images: [
            img("photo-1532012197267-da84d127e765"),
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1512820790803-83ca734da794"),
            img("photo-1543002588-bfa74002ed7e")
        ],

        brand: "NCERT",

        description:
            "Complete Biology NCERT textbook combo for NEET preparation.",

        price: 450,

        oldPrice: 550,

        catName: "Books",
        SubcatName: "Academic",
        innersubcatName: "Competitive-Textbooks",

        rating: 4.9,

        discount: 18,

        variants: [
            {
                options: {
                    Exam: "NEET",
                    Subject: "Biology",
                    Class: "11 + 12"
                },

                sku: "BOOK-COMP-004-NEET-BIO",

                price: 450,

                stock: 200,

                images: [
                    img("photo-1532012197267-da84d127e765")
                ]
            }
        ]

    },



    {
        name: "MTG NEET Previous Year Papers",

        images: [
            img("photo-1512820790803-83ca734da794"),
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1532012197267-da84d127e765")
        ],

        brand: "MTG Learning Media",

        description:
            "Chapter-wise solved previous year papers for NEET aspirants.",

        price: 399,

        oldPrice: 499,

        catName: "Books",
        SubcatName: "Academic",
        innersubcatName: "Competitive-Textbooks",

        rating: 4.6,

        discount: 20,

        variants: [
            {
                options: {
                    Exam: "NEET",
                    Type: "Previous Papers"
                },

                sku: "BOOK-COMP-005-MTG-NEET",

                price: 399,

                stock: 120,

                images: [
                    img("photo-1512820790803-83ca734da794")
                ]
            }
        ]

    },



    {
        name: "GATE Computer Science Made Easy",

        images: [
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1512820790803-83ca734da794"),
            img("photo-1532012197267-da84d127e765")
        ],

        brand: "Arihant",

        description:
            "Complete GATE Computer Science preparation guide covering core subjects.",

        price: 750,

        oldPrice: 900,

        catName: "Books",
        SubcatName: "Academic",
        innersubcatName: "Competitive-Textbooks",

        rating: 4.7,

        discount: 17,

        variants: [
            {
                options: {
                    Exam: "GATE",
                    Branch: "Computer Science"
                },

                sku: "BOOK-COMP-006-GATE-CS",

                price: 750,

                stock: 70,

                images: [
                    img("photo-1544947950-fa07a98d237f")
                ]
            }
        ]

    },



    {
        name: "Cracking the Coding Interview",

        images: [
            img("photo-1512820790803-83ca734da794"),
            img("photo-1532012197267-da84d127e765"),
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1543002588-bfa74002ed7e")
        ],

        brand: "CareerCup",

        description:
            "Programming interview preparation book with algorithms and coding problems.",

        price: 900,

        oldPrice: 1100,

        catName: "Books",
        SubcatName: "Academic",
        innersubcatName: "Competitive-Textbooks",

        rating: 4.8,

        discount: 18,

        variants: [
            {
                options: {
                    Language: "English",
                    Topic: "Programming Interviews"
                },

                sku: "BOOK-COMP-007-CTCI",

                price: 900,

                stock: 50,

                images: [
                    img("photo-1512820790803-83ca734da794")
                ]
            }
        ]

    },



    {
        name: "Quantitative Aptitude for Competitive Examinations",

        images: [
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1512820790803-83ca734da794"),
            img("photo-1532012197267-da84d127e765")
        ],

        brand: "RS Aggarwal",

        description:
            "Popular aptitude book for placement tests and government exams.",

        price: 450,

        oldPrice: 550,

        catName: "Books",
        SubcatName: "Academic",
        innersubcatName: "Competitive-Textbooks",

        rating: 4.7,

        discount: 18,

        variants: [
            {
                options: {
                    Subject: "Aptitude",
                    Exam: "Placement"
                },

                sku: "BOOK-COMP-008-RS-AGGARWAL",

                price: 450,

                stock: 150,

                images: [
                    img("photo-1543002588-bfa74002ed7e")
                ]
            }
        ]

    },



    {
        name: "Lucent General Knowledge",

        images: [
            img("photo-1532012197267-da84d127e765"),
            img("photo-1512820790803-83ca734da794"),
            img("photo-1543002588-bfa74002ed7e"),
            img("photo-1544947950-fa07a98d237f")
        ],

        brand: "Lucent Publications",

        description:
            "Comprehensive general knowledge book for UPSC and government exams.",

        price: 350,

        oldPrice: 450,

        catName: "Books",
        SubcatName: "Academic",
        innersubcatName: "Competitive-Textbooks",

        rating: 4.6,

        discount: 22,

        variants: [
            {
                options: {
                    Exam: "UPSC",
                    Subject: "General Knowledge"
                },

                sku: "BOOK-COMP-009-LUCENT-GK",

                price: 350,

                stock: 200,

                images: [
                    img("photo-1532012197267-da84d127e765")
                ]
            }
        ]

    },



    {
        name: "Indian Polity by Laxmikanth",

        images: [
            img("photo-1544947950-fa07a98d237f"),
            img("photo-1532012197267-da84d127e765"),
            img("photo-1512820790803-83ca734da794"),
            img("photo-1543002588-bfa74002ed7e")
        ],

        brand: "McGraw Hill",

        description:
            "The standard reference book for Indian Constitution and polity preparation.",

        price: 700,

        oldPrice: 850,

        catName: "Books",
        SubcatName: "Academic",
        innersubcatName: "Competitive-Textbooks",

        rating: 4.9,

        discount: 18,

        variants: [
            {
                options: {
                    Exam: "UPSC",
                    Subject: "Indian Polity"
                },

                sku: "BOOK-COMP-010-LAXMIKANTH",

                price: 700,

                stock: 100,

                images: [
                    img("photo-1544947950-fa07a98d237f")
                ]
            }
        ]

    },

    /* ===========================
        GROCERIES
        FRESH PRODUCE
        FRUITS
   =========================== */


    {
        name: "Fresh Royal Gala Apples 1kg",

        images: [
            img("photo-1560806887-1e4cd0b6cbd6"),
            img("photo-1570913149827-d2ac84ab3f9a"),
            img("photo-1567306226416-28f0efdc88ce")
        ],

        brand: "Fresh Farm",

        description:
            "Crisp and juicy Royal Gala apples selected from premium farms.",

        price: 180,

        oldPrice: 220,

        catName: "Groceries",
        SubcatName: "Fresh Produce",
        innersubcatName: "Fruits",

        rating: 4.7,

        discount: 18,

        variants: [
            {
                options: {
                    Weight: "1 kg"
                },

                sku: "GROC-FRUIT-001-APPLE",

                price: 180,

                stock: 100,

                images: [
                    img("photo-1560806887-1e4cd0b6cbd6")
                ]
            }
        ]

    },



    {
        name: "Alphonso Mangoes Premium Box",

        images: [
            img("photo-1553279768-865429fa0078"),
            img("photo-1601493700631-2b16ec4b4716"),
            img("photo-1625167171758-7d9c5f8d7f9b")
        ],

        brand: "Fresh Farm",

        description:
            "Sweet and naturally ripened Alphonso mangoes perfect for summer.",

        price: 499,

        oldPrice: 650,

        catName: "Groceries",
        SubcatName: "Fresh Produce",
        innersubcatName: "Fruits",

        rating: 4.9,

        discount: 23,

        variants: [
            {
                options: {
                    Weight: "2 kg"
                },

                sku: "GROC-FRUIT-002-MANGO",

                price: 499,

                stock: 50,

                images: [
                    img("photo-1553279768-865429fa0078")
                ]
            }
        ]

    },



    {
        name: "Fresh Bananas Premium Robusta",

        images: [
            img("photo-1571771894821-ce9b6c11b08e"),
            img("photo-1603833665858-e61d17a86224"),
            img("photo-1528825871115-3581a5387919")
        ],

        brand: "Fresh Farm",

        description:
            "Naturally sweet bananas packed with essential nutrients.",

        price: 60,

        oldPrice: 80,

        catName: "Groceries",
        SubcatName: "Fresh Produce",
        innersubcatName: "Fruits",

        rating: 4.6,

        discount: 25,

        variants: [
            {
                options: {
                    Weight: "1 dozen"
                },

                sku: "GROC-FRUIT-003-BANANA",

                price: 60,

                stock: 200,

                images: [
                    img("photo-1571771894821-ce9b6c11b08e")
                ]
            }
        ]

    },



    {
        name: "Fresh Strawberries Premium Pack",

        images: [
            img("photo-1464965911861-746a04b4bca6"),
            img("photo-1518635017498-87f514b751ba"),
            img("photo-1485921325833-c519f76c4927")
        ],

        brand: "Fresh Farm",

        description:
            "Fresh juicy strawberries perfect for desserts and healthy snacks.",

        price: 220,

        oldPrice: 300,

        catName: "Groceries",
        SubcatName: "Fresh Produce",
        innersubcatName: "Fruits",

        rating: 4.8,

        discount: 27,

        variants: [
            {
                options: {
                    Weight: "500g"
                },

                sku: "GROC-FRUIT-004-STRAWBERRY",

                price: 220,

                stock: 70,

                images: [
                    img("photo-1464965911861-746a04b4bca6")
                ]
            }
        ]

    },



    {
        name: "Imported Kiwi Fruit",

        images: [
            img("photo-1585059895524-72359e06133a"),
            img("photo-1618897996318-5a901fa6ca71"),
            img("photo-1592924357228-91a4daadcfea")
        ],

        brand: "Fresh Farm",

        description:
            "Premium imported kiwi fruits rich in vitamins and antioxidants.",

        price: 250,

        oldPrice: 320,

        catName: "Groceries",
        SubcatName: "Fresh Produce",
        innersubcatName: "Fruits",

        rating: 4.5,

        discount: 22,

        variants: [
            {
                options: {
                    Weight: "6 Pieces"
                },

                sku: "GROC-FRUIT-005-KIWI",

                price: 250,

                stock: 60,

                images: [
                    img("photo-1585059895524-72359e06133a")
                ]
            }
        ]

    },



    {
        name: "Fresh Oranges",

        images: [
            img("photo-1547514701-42782101795e"),
            img("photo-1582979512210-99b6a53386f9"),
            img("photo-1611080626919-7cf5a9dbab12")
        ],

        brand: "Fresh Farm",

        description:
            "Fresh juicy oranges with natural sweetness.",

        price: 120,

        oldPrice: 150,

        catName: "Groceries",
        SubcatName: "Fresh Produce",
        innersubcatName: "Fruits",

        rating: 4.6,

        discount: 20,

        variants: [
            {
                options: {
                    Weight: "1 kg"
                },

                sku: "GROC-FRUIT-006-ORANGE",

                price: 120,

                stock: 120,

                images: [
                    img("photo-1547514701-42782101795e")
                ]
            }
        ]

    },



    {
        name: "Premium Green Grapes",

        images: [
            img("photo-1599819177689-4b0c3b7f3f2e"),
            img("photo-1537640538966-79f369143f8f"),
            img("photo-1596363505729-4190a9506133")
        ],

        brand: "Fresh Farm",

        description:
            "Seedless green grapes with refreshing taste.",

        price: 160,

        oldPrice: 200,

        catName: "Groceries",
        SubcatName: "Fresh Produce",
        innersubcatName: "Fruits",

        rating: 4.7,

        discount: 20,

        variants: [
            {
                options: {
                    Weight: "500g"
                },

                sku: "GROC-FRUIT-007-GRAPES",

                price: 160,

                stock: 90,

                images: [
                    img("photo-1537640538966-79f369143f8f")
                ]
            }
        ]

    },



    {
        name: "Fresh Pomegranate",

        images: [
            img("photo-1541344999736-83eca272f6fc"),
            img("photo-1615485290382-441e4d049cb5"),
            img("photo-1597854308173-0c5b6f8a8c1f")
        ],

        brand: "Fresh Farm",

        description:
            "Premium pomegranate filled with juicy ruby-red seeds.",

        price: 220,

        oldPrice: 280,

        catName: "Groceries",
        SubcatName: "Fresh Produce",
        innersubcatName: "Fruits",

        rating: 4.8,

        discount: 21,

        variants: [
            {
                options: {
                    Weight: "1 kg"
                },

                sku: "GROC-FRUIT-008-POMEGRANATE",

                price: 220,

                stock: 80,

                images: [
                    img("photo-1541344999736-83eca272f6fc")
                ]
            }
        ]

    },



    {
        name: "Fresh Pineapple",

        images: [
            img("photo-1589820296156-2454bb8a6ad1"),
            img("photo-1550258987-190a2d41a8ba"),
            img("photo-1619566636858-adf3ef46400b")
        ],

        brand: "Fresh Farm",

        description:
            "Sweet tropical pineapple freshly harvested.",

        price: 90,

        oldPrice: 120,

        catName: "Groceries",
        SubcatName: "Fresh Produce",
        innersubcatName: "Fruits",

        rating: 4.5,

        discount: 25,

        variants: [
            {
                options: {
                    Weight: "1 Piece"
                },

                sku: "GROC-FRUIT-009-PINEAPPLE",

                price: 90,

                stock: 100,

                images: [
                    img("photo-1589820296156-2454bb8a6ad1")
                ]
            }
        ]

    },



    {
        name: "Dragon Fruit Premium",

        images: [
            img("photo-1527325678964-54921661f888"),
            img("photo-1519996529931-28324d5a630e"),
            img("photo-1592924357228-91a4daadcfea")
        ],

        brand: "Fresh Farm",

        description:
            "Exotic dragon fruit rich in antioxidants and nutrients.",

        price: 300,

        oldPrice: 400,

        catName: "Groceries",
        SubcatName: "Fresh Produce",
        innersubcatName: "Fruits",

        rating: 4.6,

        discount: 25,

        variants: [
            {
                options: {
                    Weight: "1 kg"
                },

                sku: "GROC-FRUIT-010-DRAGON",

                price: 300,

                stock: 40,

                images: [
                    img("photo-1527325678964-54921661f888")
                ]
            }
        ]

    },

    /* ===========================
        GROCERIES
        FRESH PRODUCE
        VEGETABLES
   =========================== */


    {
        name: "Fresh Red Tomatoes",

        images: [
            img("photo-1546094096-0df4bcaaa337"),
            img("photo-1592924357228-91a4daadcfea"),
            img("photo-1561136594-7f68413baa99")
        ],

        brand: "Fresh Farm",

        description:
            "Fresh red tomatoes sourced from farms, perfect for cooking and salads.",

        price: 50,

        oldPrice: 70,

        catName: "Groceries",
        SubcatName: "Fresh Produce",
        innersubcatName: "Vegetables",

        rating: 4.6,

        discount: 28,

        variants: [
            {
                options: {
                    Weight: "1 kg"
                },

                sku: "GROC-VEG-001-TOMATO",

                price: 50,

                stock: 200,

                images: [
                    img("photo-1546094096-0df4bcaaa337")
                ]
            }
        ]

    },



    {
        name: "Premium Potato",

        images: [
            img("photo-1518977676601-b53f82aba655"),
            img("photo-1518977676601-b53f82aba655"),
            img("photo-1508313880080-c4bef0730395")
        ],

        brand: "Fresh Farm",

        description:
            "Fresh farm potatoes suitable for fries, curries and everyday cooking.",

        price: 45,

        oldPrice: 60,

        catName: "Groceries",
        SubcatName: "Fresh Produce",
        innersubcatName: "Vegetables",

        rating: 4.7,

        discount: 25,

        variants: [
            {
                options: {
                    Weight: "2 kg"
                },

                sku: "GROC-VEG-002-POTATO",

                price: 45,

                stock: 250,

                images: [
                    img("photo-1518977676601-b53f82aba655")
                ]
            }
        ]

    },



    {
        name: "Fresh Onion",

        images: [
            img("photo-1508747703725-719777637510"),
            img("photo-1518843875459-f738682238a6"),
            img("photo-1598514982901-ae62764ae75f")
        ],

        brand: "Fresh Farm",

        description:
            "Premium quality onions with natural freshness and long shelf life.",

        price: 55,

        oldPrice: 80,

        catName: "Groceries",
        SubcatName: "Fresh Produce",
        innersubcatName: "Vegetables",

        rating: 4.5,

        discount: 31,

        variants: [
            {
                options: {
                    Weight: "2 kg"
                },

                sku: "GROC-VEG-003-ONION",

                price: 55,

                stock: 180,

                images: [
                    img("photo-1508747703725-719777637510")
                ]
            }
        ]

    },



    {
        name: "Organic Carrots",

        images: [
            img("photo-1447175008436-054170c2e979"),
            img("photo-1598170845058-32b9d6a5da37"),
            img("photo-1590868309235-ea34bed7bd7f")
        ],

        brand: "Organic Farm",

        description:
            "Crisp organic carrots rich in nutrients and naturally sweet.",

        price: 80,

        oldPrice: 120,

        catName: "Groceries",
        SubcatName: "Fresh Produce",
        innersubcatName: "Vegetables",

        rating: 4.8,

        discount: 33,

        variants: [
            {
                options: {
                    Weight: "1 kg"
                },

                sku: "GROC-VEG-004-CARROT",

                price: 80,

                stock: 100,

                images: [
                    img("photo-1447175008436-054170c2e979")
                ]
            }
        ]

    },



    {
        name: "Fresh Green Capsicum",

        images: [
            img("photo-1563565375-f3fdfdbefa83"),
            img("photo-1566385101042-1a0aa0c1268c"),
            img("photo-1604977042946-1eecc30f269e")
        ],

        brand: "Fresh Farm",

        description:
            "Crunchy green capsicum ideal for pizzas, salads and cooking.",

        price: 90,

        oldPrice: 120,

        catName: "Groceries",
        SubcatName: "Fresh Produce",
        innersubcatName: "Vegetables",

        rating: 4.6,

        discount: 25,

        variants: [
            {
                options: {
                    Weight: "500g"
                },

                sku: "GROC-VEG-005-CAPSICUM",

                price: 90,

                stock: 80,

                images: [
                    img("photo-1563565375-f3fdfdbefa83")
                ]
            }
        ]

    },



    {
        name: "Fresh Broccoli",

        images: [
            img("photo-1459411621453-7b03977f4bfc"),
            img("photo-1584270354949-c26b0d5b4a0c"),
            img("photo-1630698467166-3b2d1b6d5c0f")
        ],

        brand: "Organic Farm",

        description:
            "Premium fresh broccoli packed with vitamins and minerals.",

        price: 140,

        oldPrice: 180,

        catName: "Groceries",
        SubcatName: "Fresh Produce",
        innersubcatName: "Vegetables",

        rating: 4.7,

        discount: 22,

        variants: [
            {
                options: {
                    Weight: "500g"
                },

                sku: "GROC-VEG-006-BROCCOLI",

                price: 140,

                stock: 60,

                images: [
                    img("photo-1459411621453-7b03977f4bfc")
                ]
            }
        ]

    },



    {
        name: "Fresh Spinach Leaves",

        images: [
            img("photo-1576045057995-568f588f82fb"),
            img("photo-1599488615731-7e5c6b3b4e6c"),
            img("photo-1622206151226-18ca2c9ab4a1")
        ],

        brand: "Organic Farm",

        description:
            "Fresh green spinach leaves perfect for healthy meals.",

        price: 40,

        oldPrice: 60,

        catName: "Groceries",
        SubcatName: "Fresh Produce",
        innersubcatName: "Vegetables",

        rating: 4.5,

        discount: 33,

        variants: [
            {
                options: {
                    Weight: "250g"
                },

                sku: "GROC-VEG-007-SPINACH",

                price: 40,

                stock: 150,

                images: [
                    img("photo-1576045057995-568f588f82fb")
                ]
            }
        ]

    },



    {
        name: "Fresh Cucumber",

        images: [
            img("photo-1449300079323-02e209d9d3a6"),
            img("photo-1604977042946-1eecc30f269e"),
            img("photo-1592924357228-91a4daadcfea")
        ],

        brand: "Fresh Farm",

        description:
            "Fresh crunchy cucumbers perfect for salads and healthy snacks.",

        price: 45,

        oldPrice: 70,

        catName: "Groceries",
        SubcatName: "Fresh Produce",
        innersubcatName: "Vegetables",

        rating: 4.6,

        discount: 35,

        variants: [
            {
                options: {
                    Weight: "1 kg"
                },

                sku: "GROC-VEG-008-CUCUMBER",

                price: 45,

                stock: 120,

                images: [
                    img("photo-1449300079323-02e209d9d3a6")
                ]
            }
        ]

    },



    {
        name: "Button Mushrooms",

        images: [
            img("photo-1504545102780-26774c1bb073"),
            img("photo-1518977676601-b53f82aba655"),
            img("photo-1589647363585-f4a7d3877b10")
        ],

        brand: "Organic Farm",

        description:
            "Fresh button mushrooms suitable for soups, pasta and cooking.",

        price: 180,

        oldPrice: 250,

        catName: "Groceries",
        SubcatName: "Fresh Produce",
        innersubcatName: "Vegetables",

        rating: 4.7,

        discount: 28,

        variants: [
            {
                options: {
                    Weight: "500g"
                },

                sku: "GROC-VEG-009-MUSHROOM",

                price: 180,

                stock: 50,

                images: [
                    img("photo-1504545102780-26774c1bb073")
                ]
            }
        ]

    },



    {
        name: "Green Peas Premium",

        images: [
            img("photo-1587735243615-c03f25aaff15"),
            img("photo-1615485290382-441e4d049cb5"),
            img("photo-1592924357228-91a4daadcfea")
        ],

        brand: "Fresh Farm",

        description:
            "Fresh green peas perfect for Indian dishes and frozen storage.",

        price: 120,

        oldPrice: 160,

        catName: "Groceries",
        SubcatName: "Fresh Produce",
        innersubcatName: "Vegetables",

        rating: 4.6,

        discount: 25,

        variants: [
            {
                options: {
                    Weight: "1 kg"
                },

                sku: "GROC-VEG-010-PEAS",

                price: 120,

                stock: 90,

                images: [
                    img("photo-1587735243615-c03f25aaff15")
                ]
            }
        ]

    },

    /* ===========================
      GROCERIES
      PACKAGED FOOD
      SNACKS
   =========================== */


    {
        name: "Lay's Classic Salted Chips",

        images: [
            img("photo-1566478989037-eec170784d0b"),
            img("photo-1621447504864-d8686e12698c"),
            img("photo-1600952841320-db92ec4047ca")
        ],

        brand: "Lay's",

        description:
            "Classic salted potato chips with a crispy texture and delicious taste.",

        price: 30,

        oldPrice: 40,

        catName: "Groceries",
        SubcatName: "Packaged Food",
        innersubcatName: "Snacks",

        rating: 4.6,

        discount: 25,

        variants: [
            {
                options: {
                    Weight: "52g"
                },

                sku: "GROC-SNACK-001-LAYS",

                price: 30,

                stock: 300,

                images: [
                    img("photo-1566478989037-eec170784d0b")
                ]
            }
        ]

    },



    {
        name: "Kurkure Masala Munch",

        images: [
            img("photo-1600952841320-db92ec4047ca"),
            img("photo-1621447504864-d8686e12698c"),
            img("photo-1566478989037-eec170784d0b")
        ],

        brand: "Kurkure",

        description:
            "Crunchy corn snacks with spicy masala flavor.",

        price: 20,

        oldPrice: 25,

        catName: "Groceries",
        SubcatName: "Packaged Food",
        innersubcatName: "Snacks",

        rating: 4.5,

        discount: 20,

        variants: [
            {
                options: {
                    Weight: "90g"
                },

                sku: "GROC-SNACK-002-KURKURE",

                price: 20,

                stock: 250,

                images: [
                    img("photo-1600952841320-db92ec4047ca")
                ]
            }
        ]

    },



    {
        name: "Oreo Original Chocolate Cream Biscuits",

        images: [
            img("photo-1558961363-fa8fdf82db35"),
            img("photo-1586444248902-2f64eddc13df"),
            img("photo-1558961363-fa8fdf82db35")
        ],

        brand: "Oreo",

        description:
            "Classic chocolate sandwich biscuits filled with vanilla cream.",

        price: 40,

        oldPrice: 50,

        catName: "Groceries",
        SubcatName: "Packaged Food",
        innersubcatName: "Snacks",

        rating: 4.8,

        discount: 20,

        variants: [
            {
                options: {
                    Weight: "120g"
                },

                sku: "GROC-SNACK-003-OREO",

                price: 40,

                stock: 200,

                images: [
                    img("photo-1558961363-fa8fdf82db35")
                ]
            }
        ]

    },



    {
        name: "Parle-G Original Biscuits",

        images: [
            img("photo-1558961363-fa8fdf82db35"),
            img("photo-1586444248902-2f64eddc13df"),
            img("photo-1606313564200-e75d5e30476b")
        ],

        brand: "Parle",

        description:
            "India's favourite glucose biscuits loved by generations.",

        price: 20,

        oldPrice: 25,

        catName: "Groceries",
        SubcatName: "Packaged Food",
        innersubcatName: "Snacks",

        rating: 4.7,

        discount: 20,

        variants: [
            {
                options: {
                    Weight: "800g"
                },

                sku: "GROC-SNACK-004-PARLE",

                price: 20,

                stock: 500,

                images: [
                    img("photo-1558961363-fa8fdf82db35")
                ]
            }
        ]

    },



    {
        name: "Haldiram's Aloo Bhujia",

        images: [
            img("photo-1601050690597-df0568f70950"),
            img("photo-1621939514649-280e2ee25f60"),
            img("photo-1603899122634-f086ca5f5ddd")
        ],

        brand: "Haldiram's",

        description:
            "Traditional Indian spicy namkeen snack made with potatoes and spices.",

        price: 120,

        oldPrice: 150,

        catName: "Groceries",
        SubcatName: "Packaged Food",
        innersubcatName: "Snacks",

        rating: 4.8,

        discount: 20,

        variants: [
            {
                options: {
                    Weight: "400g"
                },

                sku: "GROC-SNACK-005-HALDIRAM",

                price: 120,

                stock: 150,

                images: [
                    img("photo-1601050690597-df0568f70950")
                ]
            }
        ]

    },



    {
        name: "Dark Chocolate 70% Cocoa",

        images: [
            img("photo-1549007994-cb92caebd54b"),
            img("photo-1606313564200-e75d5e30476b"),
            img("photo-1575377427642-087cf684f29d")
        ],

        brand: "Lindt",

        description:
            "Premium dark chocolate with rich cocoa flavour.",

        price: 250,

        oldPrice: 300,

        catName: "Groceries",
        SubcatName: "Packaged Food",
        innersubcatName: "Snacks",

        rating: 4.7,

        discount: 17,

        variants: [
            {
                options: {
                    Weight: "100g"
                },

                sku: "GROC-SNACK-006-CHOCOLATE",

                price: 250,

                stock: 80,

                images: [
                    img("photo-1549007994-cb92caebd54b")
                ]
            }
        ]

    },



    {
        name: "Britannia Good Day Cashew Cookies",

        images: [
            img("photo-1558961363-fa8fdf82db35"),
            img("photo-1586444248902-2f64eddc13df"),
            img("photo-1519869325930-281384150729")
        ],

        brand: "Britannia",

        description:
            "Crunchy cashew cookies perfect with tea and coffee.",

        price: 35,

        oldPrice: 50,

        catName: "Groceries",
        SubcatName: "Packaged Food",
        innersubcatName: "Snacks",

        rating: 4.6,

        discount: 30,

        variants: [
            {
                options: {
                    Weight: "200g"
                },

                sku: "GROC-SNACK-007-BRITANNIA",

                price: 35,

                stock: 220,

                images: [
                    img("photo-1558961363-fa8fdf82db35")
                ]
            }
        ]

    },



    {
        name: "Mixed Dry Fruits Premium Pack",

        images: [
            img("photo-1596591868231-05e6f28f9a2e"),
            img("photo-1600185365483-26d7a4cc7519"),
            img("photo-1508061253366-f7da158b6f9f")
        ],

        brand: "Nutraj",

        description:
            "Premium almonds, cashews, raisins and walnuts mix.",

        price: 599,

        oldPrice: 799,

        catName: "Groceries",
        SubcatName: "Packaged Food",
        innersubcatName: "Snacks",

        rating: 4.8,

        discount: 25,

        variants: [
            {
                options: {
                    Weight: "500g"
                },

                sku: "GROC-SNACK-008-DRYFRUIT",

                price: 599,

                stock: 70,

                images: [
                    img("photo-1596591868231-05e6f28f9a2e")
                ]
            }
        ]

    },



    {
        name: "Too Yumm Multigrain Chips",

        images: [
            img("photo-1566478989037-eec170784d0b"),
            img("photo-1600952841320-db92ec4047ca"),
            img("photo-1621447504864-d8686e12698c")
        ],

        brand: "Too Yumm",

        description:
            "Healthy baked multigrain chips with less oil.",

        price: 50,

        oldPrice: 70,

        catName: "Groceries",
        SubcatName: "Packaged Food",
        innersubcatName: "Snacks",

        rating: 4.5,

        discount: 28,

        variants: [
            {
                options: {
                    Weight: "60g"
                },

                sku: "GROC-SNACK-009-TOOYUMM",

                price: 50,

                stock: 100,

                images: [
                    img("photo-1566478989037-eec170784d0b")
                ]
            }
        ]

    },



    {
        name: "Maggi Instant Noodles",

        images: [
            img("photo-1552611052-33e04de081de"),
            img("photo-1585032226651-759b368d7246"),
            img("photo-1601050690597-df0568f70950")
        ],

        brand: "Nestle",

        description:
            "Classic instant noodles ready in minutes.",

        price: 14,

        oldPrice: 20,

        catName: "Groceries",
        SubcatName: "Packaged Food",
        innersubcatName: "Snacks",

        rating: 4.8,

        discount: 30,

        variants: [
            {
                options: {
                    Weight: "70g"
                },

                sku: "GROC-SNACK-010-MAGGI",

                price: 14,

                stock: 500,

                images: [
                    img("photo-1552611052-33e04de081de")
                ]
            }
        ]

    },


    /* ===========================
      GROCERIES
      PACKAGED FOOD
      BEVERAGES
   =========================== */


    {
        name: "Coca Cola Soft Drink",

        images: [
            img("photo-1629203851122-3726ecdf080e"),
            img("photo-1622483767028-3f66f32aef97"),
            img("photo-1581636625402-29b2a704ef13")
        ],

        brand: "Coca Cola",

        description:
            "Refreshing carbonated soft drink with classic cola flavour.",

        price: 40,

        oldPrice: 50,

        catName: "Groceries",
        SubcatName: "Packaged Food",
        innersubcatName: "Beverages",

        rating: 4.7,

        discount: 20,

        variants: [
            {
                options: {
                    Volume: "750ml"
                },

                sku: "GROC-BEV-001-COCACOLA",

                price: 40,

                stock: 300,

                images: [
                    img("photo-1629203851122-3726ecdf080e")
                ]
            }
        ]

    },



    {
        name: "Pepsi Black Zero Sugar",

        images: [
            img("photo-1629203851122-3726ecdf080e"),
            img("photo-1622483767028-3f66f32aef97"),
            img("photo-1613478223719-2ab802602423")
        ],

        brand: "Pepsi",

        description:
            "Sugar-free cola beverage with refreshing taste.",

        price: 45,

        oldPrice: 60,

        catName: "Groceries",
        SubcatName: "Packaged Food",
        innersubcatName: "Beverages",

        rating: 4.5,

        discount: 25,

        variants: [
            {
                options: {
                    Volume: "750ml"
                },

                sku: "GROC-BEV-002-PEPSI",

                price: 45,

                stock: 200,

                images: [
                    img("photo-1629203851122-3726ecdf080e")
                ]
            }
        ]

    },



    {
        name: "Fanta Orange Drink",

        images: [
            img("photo-1624517452488-04869289c4ca"),
            img("photo-1622483767028-3f66f32aef97"),
            img("photo-1581636625402-29b2a704ef13")
        ],

        brand: "Fanta",

        description:
            "Orange flavoured sparkling drink with fruity taste.",

        price: 40,

        oldPrice: 50,

        catName: "Groceries",
        SubcatName: "Packaged Food",
        innersubcatName: "Beverages",

        rating: 4.6,

        discount: 20,

        variants: [
            {
                options: {
                    Volume: "750ml"
                },

                sku: "GROC-BEV-003-FANTA",

                price: 40,

                stock: 250,

                images: [
                    img("photo-1624517452488-04869289c4ca")
                ]
            }
        ]

    },



    {
        name: "Sprite Lemon Lime Drink",

        images: [
            img("photo-1625772299849-2f7e31c3d0b1"),
            img("photo-1622483767028-3f66f32aef97"),
            img("photo-1629203851122-3726ecdf080e")
        ],

        brand: "Sprite",

        description:
            "Lemon and lime flavoured refreshing carbonated beverage.",

        price: 40,

        oldPrice: 50,

        catName: "Groceries",
        SubcatName: "Packaged Food",
        innersubcatName: "Beverages",

        rating: 4.6,

        discount: 20,

        variants: [
            {
                options: {
                    Volume: "750ml"
                },

                sku: "GROC-BEV-004-SPRITE",

                price: 40,

                stock: 250,

                images: [
                    img("photo-1625772299849-2f7e31c3d0b1")
                ]
            }
        ]

    },



    {
        name: "Real Mixed Fruit Juice",

        images: [
            img("photo-1600271886742-f049cd451bba"),
            img("photo-1542444459-db63c7e4f5c1"),
            img("photo-1606787366850-de6330128bfc")
        ],

        brand: "Real",

        description:
            "100% fruit juice blend with multiple fruit flavours.",

        price: 120,

        oldPrice: 150,

        catName: "Groceries",
        SubcatName: "Packaged Food",
        innersubcatName: "Beverages",

        rating: 4.5,

        discount: 20,

        variants: [
            {
                options: {
                    Volume: "1 Litre"
                },

                sku: "GROC-BEV-005-REALJUICE",

                price: 120,

                stock: 100,

                images: [
                    img("photo-1600271886742-f049cd451bba")
                ]
            }
        ]

    },



    {
        name: "Tropicana Orange Juice",

        images: [
            img("photo-1546173159-315724a31696"),
            img("photo-1600271886742-f049cd451bba"),
            img("photo-1542444459-db63c7e4f5c1")
        ],

        brand: "Tropicana",

        description:
            "Premium orange juice made from selected oranges.",

        price: 140,

        oldPrice: 180,

        catName: "Groceries",
        SubcatName: "Packaged Food",
        innersubcatName: "Beverages",

        rating: 4.7,

        discount: 22,

        variants: [
            {
                options: {
                    Volume: "1 Litre"
                },

                sku: "GROC-BEV-006-TROPICANA",

                price: 140,

                stock: 90,

                images: [
                    img("photo-1546173159-315724a31696")
                ]
            }
        ]

    },



    {
        name: "Red Bull Energy Drink",

        images: [
            img("photo-1554866585-cd94860890b7"),
            img("photo-1622483767028-3f66f32aef97"),
            img("photo-1581636625402-29b2a704ef13")
        ],

        brand: "Red Bull",

        description:
            "Energy drink with caffeine and taurine for instant refreshment.",

        price: 125,

        oldPrice: 150,

        catName: "Groceries",
        SubcatName: "Packaged Food",
        innersubcatName: "Beverages",

        rating: 4.6,

        discount: 17,

        variants: [
            {
                options: {
                    Volume: "250ml"
                },

                sku: "GROC-BEV-007-REDBULL",

                price: 125,

                stock: 80,

                images: [
                    img("photo-1554866585-cd94860890b7")
                ]
            }
        ]

    },



    {
        name: "Nescafe Classic Instant Coffee",

        images: [
            img("photo-1495474472287-4d71bcdd2085"),
            img("photo-1447933601403-0c6688de566e"),
            img("photo-1514432324607-a09d9b4aefdd")
        ],

        brand: "Nescafe",

        description:
            "Instant coffee powder with rich aroma and strong flavour.",

        price: 250,

        oldPrice: 300,

        catName: "Groceries",
        SubcatName: "Packaged Food",
        innersubcatName: "Beverages",

        rating: 4.8,

        discount: 17,

        variants: [
            {
                options: {
                    Weight: "100g"
                },

                sku: "GROC-BEV-008-NESCAFE",

                price: 250,

                stock: 120,

                images: [
                    img("photo-1495474472287-4d71bcdd2085")
                ]
            }
        ]

    },



    {
        name: "Tata Tea Premium",

        images: [
            img("photo-1597318181409-cf64d0b5d8a2"),
            img("photo-1544787219-7f47ccb76574"),
            img("photo-1594631252845-4f7e1f3b5c7a")
        ],

        brand: "Tata",

        description:
            "Premium tea leaves delivering strong taste and aroma.",

        price: 220,

        oldPrice: 280,

        catName: "Groceries",
        SubcatName: "Packaged Food",
        innersubcatName: "Beverages",

        rating: 4.7,

        discount: 21,

        variants: [
            {
                options: {
                    Weight: "500g"
                },

                sku: "GROC-BEV-009-TATATEA",

                price: 220,

                stock: 150,

                images: [
                    img("photo-1597318181409-cf64d0b5d8a2")
                ]
            }
        ]

    },



    {
        name: "Bournvita Health Drink",

        images: [
            img("photo-1606313564200-e75d5e30476b"),
            img("photo-1577805947697-89e18249d767"),
            img("photo-1590080875515-8a3a8dc5735e")
        ],

        brand: "Cadbury",

        description:
            "Chocolate malt health drink powder for children and adults.",

        price: 320,

        oldPrice: 400,

        catName: "Groceries",
        SubcatName: "Packaged Food",
        innersubcatName: "Beverages",

        rating: 4.6,

        discount: 20,

        variants: [
            {
                options: {
                    Weight: "500g"
                },

                sku: "GROC-BEV-010-BOURNVITA",

                price: 320,

                stock: 100,

                images: [
                    img("photo-1606313564200-e75d5e30476b")
                ]
            }
        ]

    },


    /* ===========================
      GROCERIES
      DAIRY & BAKERY
      DAIRY
   =========================== */


    {
        name: "Amul Taaza Toned Milk",

        images: [
            img("photo-1563636619-e9143da7973b"),
            img("photo-1550583724-b2692b85b150"),
            img("photo-1600788907416-456578634209")
        ],

        brand: "Amul",

        description:
            "Fresh toned milk rich in calcium and protein for daily consumption.",

        price: 32,

        oldPrice: 35,

        catName: "Groceries",
        SubcatName: "Dairy & Bakery",
        innersubcatName: "Dairy",

        rating: 4.8,

        discount: 10,

        variants: [
            {
                options: {
                    Quantity: "500ml"
                },

                sku: "GROC-DAIRY-001-AMUL-MILK",

                price: 32,

                stock: 300,

                images: [
                    img("photo-1563636619-e9143da7973b")
                ]
            }
        ]

    },



    {
        name: "Mother Dairy Full Cream Milk",

        images: [
            img("photo-1550583724-b2692b85b150"),
            img("photo-1563636619-e9143da7973b"),
            img("photo-1600788907416-456578634209")
        ],

        brand: "Mother Dairy",

        description:
            "Full cream milk with rich taste and high nutritional value.",

        price: 38,

        oldPrice: 45,

        catName: "Groceries",
        SubcatName: "Dairy & Bakery",
        innersubcatName: "Dairy",

        rating: 4.7,

        discount: 15,

        variants: [
            {
                options: {
                    Quantity: "500ml"
                },

                sku: "GROC-DAIRY-002-MOTHER-MILK",

                price: 38,

                stock: 250,

                images: [
                    img("photo-1550583724-b2692b85b150")
                ]
            }
        ]

    },



    {
        name: "Amul Fresh Paneer",

        images: [
            img("photo-1628088062854-d1870b4553da"),
            img("photo-1598514982901-ae62764ae75f"),
            img("photo-1631452180519-c014fe946bc7")
        ],

        brand: "Amul",

        description:
            "Soft and fresh paneer perfect for Indian dishes.",

        price: 110,

        oldPrice: 140,

        catName: "Groceries",
        SubcatName: "Dairy & Bakery",
        innersubcatName: "Dairy",

        rating: 4.8,

        discount: 21,

        variants: [
            {
                options: {
                    Weight: "200g"
                },

                sku: "GROC-DAIRY-003-PANEER",

                price: 110,

                stock: 120,

                images: [
                    img("photo-1628088062854-d1870b4553da")
                ]
            }
        ]

    },



    {
        name: "Amul Butter",

        images: [
            img("photo-1589985270826-4b7bb135bc9d"),
            img("photo-1621939514649-280e2ee25f60"),
            img("photo-1589985270826-4b7bb135bc9d")
        ],

        brand: "Amul",

        description:
            "Creamy salted butter made from fresh milk.",

        price: 58,

        oldPrice: 65,

        catName: "Groceries",
        SubcatName: "Dairy & Bakery",
        innersubcatName: "Dairy",

        rating: 4.9,

        discount: 11,

        variants: [
            {
                options: {
                    Weight: "100g"
                },

                sku: "GROC-DAIRY-004-BUTTER",

                price: 58,

                stock: 200,

                images: [
                    img("photo-1589985270826-4b7bb135bc9d")
                ]
            }
        ]

    },



    {
        name: "Amul Processed Cheese Slices",

        images: [
            img("photo-1486297678162-eb2a19b0a32d"),
            img("photo-1618164435735-413d3b066c1c"),
            img("photo-1552767059-ce182ead6c1b")
        ],

        brand: "Amul",

        description:
            "Smooth processed cheese slices for sandwiches and burgers.",

        price: 140,

        oldPrice: 180,

        catName: "Groceries",
        SubcatName: "Dairy & Bakery",
        innersubcatName: "Dairy",

        rating: 4.7,

        discount: 22,

        variants: [
            {
                options: {
                    Pack: "10 Slices"
                },

                sku: "GROC-DAIRY-005-CHEESE",

                price: 140,

                stock: 100,

                images: [
                    img("photo-1486297678162-eb2a19b0a32d")
                ]
            }
        ]

    },



    {
        name: "Nestle Milkmaid Condensed Milk",

        images: [
            img("photo-1606313564200-e75d5e30476b"),
            img("photo-1551024506-0bccd828d307"),
            img("photo-1589985270826-4b7bb135bc9d")
        ],

        brand: "Nestle",

        description:
            "Sweetened condensed milk for desserts and baking.",

        price: 130,

        oldPrice: 160,

        catName: "Groceries",
        SubcatName: "Dairy & Bakery",
        innersubcatName: "Dairy",

        rating: 4.6,

        discount: 18,

        variants: [
            {
                options: {
                    Weight: "380g"
                },

                sku: "GROC-DAIRY-006-MILKMAID",

                price: 130,

                stock: 80,

                images: [
                    img("photo-1606313564200-e75d5e30476b")
                ]
            }
        ]

    },



    {
        name: "Epigamia Greek Yogurt",

        images: [
            img("photo-1488477181946-6428a0291777"),
            img("photo-1571212515416-fca4c5d0f2d8"),
            img("photo-1488900128323-21503983a07e")
        ],

        brand: "Epigamia",

        description:
            "High protein Greek yogurt with creamy texture.",

        price: 70,

        oldPrice: 90,

        catName: "Groceries",
        SubcatName: "Dairy & Bakery",
        innersubcatName: "Dairy",

        rating: 4.6,

        discount: 22,

        variants: [
            {
                options: {
                    Flavour: "Plain",
                    Weight: "90g"
                },

                sku: "GROC-DAIRY-007-YOGURT",

                price: 70,

                stock: 100,

                images: [
                    img("photo-1488477181946-6428a0291777")
                ]
            }
        ]

    },



    {
        name: "Amul Pure Cow Ghee",

        images: [
            img("photo-1628088062854-d1870b4553da"),
            img("photo-1601050690597-df0568f70950"),
            img("photo-1589985270826-4b7bb135bc9d")
        ],

        brand: "Amul",

        description:
            "Pure cow ghee with rich aroma for cooking and sweets.",

        price: 650,

        oldPrice: 750,

        catName: "Groceries",
        SubcatName: "Dairy & Bakery",
        innersubcatName: "Dairy",

        rating: 4.9,

        discount: 13,

        variants: [
            {
                options: {
                    Weight: "1 litre"
                },

                sku: "GROC-DAIRY-008-GHEE",

                price: 650,

                stock: 70,

                images: [
                    img("photo-1628088062854-d1870b4553da")
                ]
            }
        ]

    },



    {
        name: "Kwality Walls Vanilla Ice Cream",

        images: [
            img("photo-1563805042-7684c019e1cb"),
            img("photo-1497034825429-c343d7c6a68f"),
            img("photo-1570197788417-0e82375c9371")
        ],

        brand: "Kwality Walls",

        description:
            "Creamy vanilla ice cream made with rich dairy ingredients.",

        price: 180,

        oldPrice: 220,

        catName: "Groceries",
        SubcatName: "Dairy & Bakery",
        innersubcatName: "Dairy",

        rating: 4.7,

        discount: 18,

        variants: [
            {
                options: {
                    Weight: "700ml"
                },

                sku: "GROC-DAIRY-009-ICECREAM",

                price: 180,

                stock: 60,

                images: [
                    img("photo-1563805042-7684c019e1cb")
                ]
            }
        ]

    },



    {
        name: "Amul Chocolate Flavoured Milk",

        images: [
            img("photo-1576186726115-4d51596775d1"),
            img("photo-1600788907416-456578634209"),
            img("photo-1550583724-b2692b85b150")
        ],

        brand: "Amul",

        description:
            "Ready-to-drink chocolate flavoured milk.",

        price: 35,

        oldPrice: 45,

        catName: "Groceries",
        SubcatName: "Dairy & Bakery",
        innersubcatName: "Dairy",

        rating: 4.6,

        discount: 22,

        variants: [
            {
                options: {
                    Quantity: "200ml"
                },

                sku: "GROC-DAIRY-010-CHOCO-MILK",

                price: 35,

                stock: 150,

                images: [
                    img("photo-1576186726115-4d51596775d1")
                ]
            }
        ]

    },

    /* ===========================
      GROCERIES
      DAIRY & BAKERY
      BAKERY
   =========================== */


    {
        name: "Britannia White Sandwich Bread",

        images: [
            img("photo-1509440159596-0249088772ff"),
            img("photo-1549931319-a545dcf3bc73"),
            img("photo-1586444248902-2f64eddc13df")
        ],

        brand: "Britannia",

        description:
            "Soft and fresh white bread perfect for sandwiches and breakfast.",

        price: 40,

        oldPrice: 50,

        catName: "Groceries",
        SubcatName: "Dairy & Bakery",
        innersubcatName: "Bakery",

        rating: 4.7,

        discount: 20,

        variants: [
            {
                options: {
                    Weight: "400g"
                },

                sku: "GROC-BAKERY-001-BREAD",

                price: 40,

                stock: 200,

                images: [
                    img("photo-1509440159596-0249088772ff")
                ]
            }
        ]

    },



    {
        name: "Harvest Whole Wheat Bread",

        images: [
            img("photo-1549931319-a545dcf3bc73"),
            img("photo-1509440159596-0249088772ff"),
            img("photo-1586444248902-2f64eddc13df")
        ],

        brand: "Harvest",

        description:
            "Healthy whole wheat bread made with high quality grains.",

        price: 55,

        oldPrice: 70,

        catName: "Groceries",
        SubcatName: "Dairy & Bakery",
        innersubcatName: "Bakery",

        rating: 4.6,

        discount: 21,

        variants: [
            {
                options: {
                    Weight: "400g"
                },

                sku: "GROC-BAKERY-002-WHEAT-BREAD",

                price: 55,

                stock: 150,

                images: [
                    img("photo-1549931319-a545dcf3bc73")
                ]
            }
        ]

    },



    {
        name: "Chocolate Truffle Cake",

        images: [
            img("photo-1578985545062-69928b1d9587"),
            img("photo-1551024506-0bccd828d307"),
            img("photo-1571115177098-24ec42ed204d")
        ],

        brand: "Sweet Truth",

        description:
            "Rich chocolate truffle cake with creamy chocolate layers.",

        price: 599,

        oldPrice: 750,

        catName: "Groceries",
        SubcatName: "Dairy & Bakery",
        innersubcatName: "Bakery",

        rating: 4.8,

        discount: 20,

        variants: [
            {
                options: {
                    Size: "1 kg"
                },

                sku: "GROC-BAKERY-003-CHOCOLATE-CAKE",

                price: 599,

                stock: 40,

                images: [
                    img("photo-1578985545062-69928b1d9587")
                ]
            }
        ]

    },



    {
        name: "Blueberry Muffins Pack",

        images: [
            img("photo-1607958996333-41aef7caefaa"),
            img("photo-1519869325930-281384150729"),
            img("photo-1558961363-fa8fdf82db35")
        ],

        brand: "Mio Amore",

        description:
            "Soft blueberry muffins with delicious fruity flavour.",

        price: 180,

        oldPrice: 220,

        catName: "Groceries",
        SubcatName: "Dairy & Bakery",
        innersubcatName: "Bakery",

        rating: 4.5,

        discount: 18,

        variants: [
            {
                options: {
                    Pack: "6 Pieces"
                },

                sku: "GROC-BAKERY-004-MUFFINS",

                price: 180,

                stock: 60,

                images: [
                    img("photo-1607958996333-41aef7caefaa")
                ]
            }
        ]

    },



    {
        name: "Butter Croissant",

        images: [
            img("photo-1555507036-ab1f4038808a"),
            img("photo-1509440159596-0249088772ff"),
            img("photo-1549931319-a545dcf3bc73")
        ],

        brand: "French Bakery",

        description:
            "Flaky buttery croissants freshly baked with premium ingredients.",

        price: 120,

        oldPrice: 150,

        catName: "Groceries",
        SubcatName: "Dairy & Bakery",
        innersubcatName: "Bakery",

        rating: 4.7,

        discount: 20,

        variants: [
            {
                options: {
                    Pack: "4 Pieces"
                },

                sku: "GROC-BAKERY-005-CROISSANT",

                price: 120,

                stock: 80,

                images: [
                    img("photo-1555507036-ab1f4038808a")
                ]
            }
        ]

    },



    {
        name: "Garlic Bread Loaf",

        images: [
            img("photo-1509440159596-0249088772ff"),
            img("photo-1549931319-a545dcf3bc73"),
            img("photo-1555507036-ab1f4038808a")
        ],

        brand: "Fresh Bake",

        description:
            "Soft garlic flavoured bread perfect with pasta and soups.",

        price: 90,

        oldPrice: 120,

        catName: "Groceries",
        SubcatName: "Dairy & Bakery",
        innersubcatName: "Bakery",

        rating: 4.6,

        discount: 25,

        variants: [
            {
                options: {
                    Weight: "300g"
                },

                sku: "GROC-BAKERY-006-GARLIC-BREAD",

                price: 90,

                stock: 100,

                images: [
                    img("photo-1509440159596-0249088772ff")
                ]
            }
        ]

    },



    {
        name: "Chocolate Brownie Box",

        images: [
            img("photo-1606313564200-e75d5e30476b"),
            img("photo-1558961363-fa8fdf82db35"),
            img("photo-1578985545062-69928b1d9587")
        ],

        brand: "Brownie Heaven",

        description:
            "Rich fudgy chocolate brownies with premium cocoa.",

        price: 250,

        oldPrice: 320,

        catName: "Groceries",
        SubcatName: "Dairy & Bakery",
        innersubcatName: "Bakery",

        rating: 4.8,

        discount: 22,

        variants: [
            {
                options: {
                    Pack: "6 Pieces"
                },

                sku: "GROC-BAKERY-007-BROWNIE",

                price: 250,

                stock: 50,

                images: [
                    img("photo-1606313564200-e75d5e30476b")
                ]
            }
        ]

    },



    {
        name: "Pizza Base Pack",

        images: [
            img("photo-1513104890138-7c749659a591"),
            img("photo-1509440159596-0249088772ff"),
            img("photo-1549931319-a545dcf3bc73")
        ],

        brand: "Fresh Bake",

        description:
            "Ready-to-use pizza bases for homemade pizzas.",

        price: 80,

        oldPrice: 100,

        catName: "Groceries",
        SubcatName: "Dairy & Bakery",
        innersubcatName: "Bakery",

        rating: 4.5,

        discount: 20,

        variants: [
            {
                options: {
                    Pack: "2 Bases"
                },

                sku: "GROC-BAKERY-008-PIZZA-BASE",

                price: 80,

                stock: 120,

                images: [
                    img("photo-1513104890138-7c749659a591")
                ]
            }
        ]

    },



    {
        name: "Chocolate Donuts",

        images: [
            img("photo-1551024506-0bccd828d307"),
            img("photo-1571115177098-24ec42ed204d"),
            img("photo-1607958996333-41aef7caefaa")
        ],

        brand: "Mio Amore",

        description:
            "Soft chocolate glazed donuts with delicious topping.",

        price: 150,

        oldPrice: 200,

        catName: "Groceries",
        SubcatName: "Dairy & Bakery",
        innersubcatName: "Bakery",

        rating: 4.6,

        discount: 25,

        variants: [
            {
                options: {
                    Pack: "6 Pieces"
                },

                sku: "GROC-BAKERY-009-DONUTS",

                price: 150,

                stock: 70,

                images: [
                    img("photo-1551024506-0bccd828d307")
                ]
            }
        ]

    },



    {
        name: "Butter Cookies Premium",

        images: [
            img("photo-1558961363-fa8fdf82db35"),
            img("photo-1586444248902-2f64eddc13df"),
            img("photo-1519869325930-281384150729")
        ],

        brand: "Sunfeast",

        description:
            "Crispy butter cookies with rich buttery flavour.",

        price: 90,

        oldPrice: 120,

        catName: "Groceries",
        SubcatName: "Dairy & Bakery",
        innersubcatName: "Bakery",

        rating: 4.7,

        discount: 25,

        variants: [
            {
                options: {
                    Weight: "300g"
                },

                sku: "GROC-BAKERY-010-BUTTER-COOKIES",

                price: 90,

                stock: 150,

                images: [
                    img("photo-1558961363-fa8fdf82db35")
                ]
            }
        ]

    },

    /* ===========================
          HOME
       FURNITURE
       LIVING ROOM
   =========================== */


    {
        name: "Premium 3 Seater Fabric Sofa",

        images: [
            img("photo-1555041469-a586c61ea9bc"),
            img("photo-1550226891-ef816aed4a98"),
            img("photo-1551298370-9d3d53740c72"),
            img("photo-1618220179428-22790b461013")
        ],

        brand: "Urban Ladder",

        description:
            "Comfortable modern fabric sofa with premium cushioning and durable wooden frame.",

        price: 18999,

        oldPrice: 25000,

        catName: "Home",
        SubcatName: "Furniture",
        innersubcatName: "Living Room",

        rating: 4.7,

        discount: 24,

        variants: [
            {
                options: {
                    Color: "Grey",
                    Seater: "3 Seater"
                },

                sku: "HOME-FURN-001-SOFA",

                price: 18999,

                stock: 20,

                images: [
                    img("photo-1555041469-a586c61ea9bc")
                ]
            }
        ]

    },



    {
        name: "Modern L Shape Corner Sofa",

        images: [
            img("photo-1555041469-a586c61ea9bc"),
            img("photo-1616486338812-3dadae4b4ace"),
            img("photo-1600607687939-ce8a6c25118c"),
            img("photo-1618220179428-22790b461013")
        ],

        brand: "Pepperfry",

        description:
            "Large L-shaped sofa designed for spacious living rooms with comfortable seating.",

        price: 32999,

        oldPrice: 42000,

        catName: "Home",
        SubcatName: "Furniture",
        innersubcatName: "Living Room",

        rating: 4.8,

        discount: 21,

        variants: [
            {
                options: {
                    Color: "Blue",
                    Type: "L Shape"
                },

                sku: "HOME-FURN-002-LSOFA",

                price: 32999,

                stock: 15,

                images: [
                    img("photo-1555041469-a586c61ea9bc")
                ]
            }
        ]

    },



    {
        name: "Wooden Coffee Table",

        images: [
            img("photo-1493663284031-b7e3aefcae8e"),
            img("photo-1616486338812-3dadae4b4ace"),
            img("photo-1600210492486-724fe5c67fb0"),
            img("photo-1618220179428-22790b461013")
        ],

        brand: "IKEA",

        description:
            "Minimal wooden coffee table perfect for modern living rooms.",

        price: 4999,

        oldPrice: 6500,

        catName: "Home",
        SubcatName: "Furniture",
        innersubcatName: "Living Room",

        rating: 4.6,

        discount: 23,

        variants: [
            {
                options: {
                    Material: "Engineered Wood",
                    Color: "Brown"
                },

                sku: "HOME-FURN-003-COFFEE-TABLE",

                price: 4999,

                stock: 40,

                images: [
                    img("photo-1493663284031-b7e3aefcae8e")
                ]
            }
        ]

    },



    {
        name: "Luxury Recliner Chair",

        images: [
            img("photo-1598300042247-d088f8ab3a91"),
            img("photo-1555041469-a586c61ea9bc"),
            img("photo-1616486338812-3dadae4b4ace")
        ],

        brand: "Wakefit",

        description:
            "Ergonomic recliner chair with soft cushioning for relaxation.",

        price: 12999,

        oldPrice: 17000,

        catName: "Home",
        SubcatName: "Furniture",
        innersubcatName: "Living Room",

        rating: 4.7,

        discount: 24,

        variants: [
            {
                options: {
                    Color: "Brown",
                    Material: "Leatherette"
                },

                sku: "HOME-FURN-004-RECLINER",

                price: 12999,

                stock: 25,

                images: [
                    img("photo-1598300042247-d088f8ab3a91")
                ]
            }
        ]

    },



    {
        name: "Modern TV Entertainment Unit",

        images: [
            img("photo-1616486338812-3dadae4b4ace"),
            img("photo-1600210492486-724fe5c67fb0"),
            img("photo-1618220179428-22790b461013")
        ],

        brand: "HomeTown",

        description:
            "Stylish TV cabinet with storage shelves for modern homes.",

        price: 8999,

        oldPrice: 12000,

        catName: "Home",
        SubcatName: "Furniture",
        innersubcatName: "Living Room",

        rating: 4.5,

        discount: 25,

        variants: [
            {
                options: {
                    Size: "6 Feet",
                    Material: "Wood"
                },

                sku: "HOME-FURN-005-TVUNIT",

                price: 8999,

                stock: 30,

                images: [
                    img("photo-1616486338812-3dadae4b4ace")
                ]
            }
        ]

    },



    {
        name: "Accent Lounge Chair",

        images: [
            img("photo-1598300042247-d088f8ab3a91"),
            img("photo-1551298370-9d3d53740c72"),
            img("photo-1618220179428-22790b461013")
        ],

        brand: "Urban Ladder",

        description:
            "Designer accent chair adding style and comfort to living spaces.",

        price: 7999,

        oldPrice: 10000,

        catName: "Home",
        SubcatName: "Furniture",
        innersubcatName: "Living Room",

        rating: 4.6,

        discount: 20,

        variants: [
            {
                options: {
                    Color: "Yellow",
                    Type: "Single Chair"
                },

                sku: "HOME-FURN-006-ACCENT-CHAIR",

                price: 7999,

                stock: 35,

                images: [
                    img("photo-1598300042247-d088f8ab3a91")
                ]
            }
        ]

    },



    {
        name: "Wooden Bookshelf 5 Tier",

        images: [
            img("photo-1594620302200-9a762244a156"),
            img("photo-1616486338812-3dadae4b4ace"),
            img("photo-1600210492486-724fe5c67fb0")
        ],

        brand: "IKEA",

        description:
            "Five-layer bookshelf with strong wooden construction.",

        price: 6999,

        oldPrice: 9000,

        catName: "Home",
        SubcatName: "Furniture",
        innersubcatName: "Living Room",

        rating: 4.7,

        discount: 22,

        variants: [
            {
                options: {
                    Material: "Wood",
                    Shelves: "5"
                },

                sku: "HOME-FURN-007-BOOKSHELF",

                price: 6999,

                stock: 45,

                images: [
                    img("photo-1594620302200-9a762244a156")
                ]
            }
        ]

    },



    {
        name: "Modern Side Table",

        images: [
            img("photo-1493663284031-b7e3aefcae8e"),
            img("photo-1600210492486-724fe5c67fb0"),
            img("photo-1616486338812-3dadae4b4ace")
        ],

        brand: "Pepperfry",

        description:
            "Compact side table suitable for sofas and bedrooms.",

        price: 2499,

        oldPrice: 3500,

        catName: "Home",
        SubcatName: "Furniture",
        innersubcatName: "Living Room",

        rating: 4.5,

        discount: 29,

        variants: [
            {
                options: {
                    Material: "Wood"
                },

                sku: "HOME-FURN-008-SIDE-TABLE",

                price: 2499,

                stock: 60,

                images: [
                    img("photo-1493663284031-b7e3aefcae8e")
                ]
            }
        ]

    },



    {
        name: "Luxury Storage Cabinet",

        images: [
            img("photo-1616486338812-3dadae4b4ace"),
            img("photo-1600210492486-724fe5c67fb0"),
            img("photo-1618220179428-22790b461013")
        ],

        brand: "HomeTown",

        description:
            "Spacious cabinet with elegant design for home storage.",

        price: 10999,

        oldPrice: 14000,

        catName: "Home",
        SubcatName: "Furniture",
        innersubcatName: "Living Room",

        rating: 4.6,

        discount: 21,

        variants: [
            {
                options: {
                    Color: "Walnut",
                    Doors: "3"
                },

                sku: "HOME-FURN-009-CABINET",

                price: 10999,

                stock: 25,

                images: [
                    img("photo-1616486338812-3dadae4b4ace")
                ]
            }
        ]

    },



    {
        name: "Bean Bag Lounge Chair",

        images: [
            img("photo-1598300042247-d088f8ab3a91"),
            img("photo-1555041469-a586c61ea9bc"),
            img("photo-1551298370-9d3d53740c72")
        ],

        brand: "Sofa Company",

        description:
            "Comfortable bean bag chair for casual seating and gaming rooms.",

        price: 2999,

        oldPrice: 4500,

        catName: "Home",
        SubcatName: "Furniture",
        innersubcatName: "Living Room",

        rating: 4.4,

        discount: 33,

        variants: [
            {
                options: {
                    Color: "Black",
                    Size: "Large"
                },

                sku: "HOME-FURN-010-BEANBAG",

                price: 2999,

                stock: 80,

                images: [
                    img("photo-1598300042247-d088f8ab3a91")
                ]
            }
        ]

    },

    /* ===========================
          HOME
       FURNITURE
        BED ROOM
   =========================== */


    {
        name: "King Size Wooden Bed",

        images: [
            img("photo-1505693416388-ac5ce068fe85"),
            img("photo-1616486338812-3dadae4b4ace"),
            img("photo-1540574163026-643ea20ade25"),
            img("photo-1618220179428-22790b461013")
        ],

        brand: "Wakefit",

        description:
            "Premium king size wooden bed with strong frame and modern design.",

        price: 24999,

        oldPrice: 32000,

        catName: "Home",
        SubcatName: "Furniture",
        innersubcatName: "Bed Room",

        rating: 4.8,

        discount: 22,

        variants: [
            {
                options: {
                    Size: "King",
                    Material: "Engineered Wood"
                },

                sku: "HOME-BED-001-KING",

                price: 24999,

                stock: 20,

                images: [
                    img("photo-1505693416388-ac5ce068fe85")
                ]
            }
        ]

    },



    {
        name: "Queen Size Storage Bed",

        images: [
            img("photo-1505693416388-ac5ce068fe85"),
            img("photo-1618220179428-22790b461013"),
            img("photo-1540574163026-643ea20ade25")
        ],

        brand: "Urban Ladder",

        description:
            "Queen size bed with hydraulic storage space underneath.",

        price: 29999,

        oldPrice: 38000,

        catName: "Home",
        SubcatName: "Furniture",
        innersubcatName: "Bed Room",

        rating: 4.7,

        discount: 21,

        variants: [
            {
                options: {
                    Size: "Queen",
                    Storage: "Hydraulic"
                },

                sku: "HOME-BED-002-STORAGE",

                price: 29999,

                stock: 15,

                images: [
                    img("photo-1505693416388-ac5ce068fe85")
                ]
            }
        ]

    },



    {
        name: "6 Door Wooden Wardrobe",

        images: [
            img("photo-1616486338812-3dadae4b4ace"),
            img("photo-1595428774223-ef52624120d2"),
            img("photo-1558997519-83ea9252edf8")
        ],

        brand: "Godrej Interio",

        description:
            "Large wardrobe with multiple compartments for clothes and accessories.",

        price: 21999,

        oldPrice: 28000,

        catName: "Home",
        SubcatName: "Furniture",
        innersubcatName: "Bed Room",

        rating: 4.6,

        discount: 21,

        variants: [
            {
                options: {
                    Doors: "6",
                    Material: "Wood"
                },

                sku: "HOME-BED-003-WARDROBE",

                price: 21999,

                stock: 25,

                images: [
                    img("photo-1616486338812-3dadae4b4ace")
                ]
            }
        ]

    },



    {
        name: "Modern Dressing Table With Mirror",

        images: [
            img("photo-1595428774223-ef52624120d2"),
            img("photo-1616486338812-3dadae4b4ace"),
            img("photo-1558997519-83ea9252edf8")
        ],

        brand: "Pepperfry",

        description:
            "Elegant dressing table with mirror and storage drawers.",

        price: 7999,

        oldPrice: 10000,

        catName: "Home",
        SubcatName: "Furniture",
        innersubcatName: "Bed Room",

        rating: 4.5,

        discount: 20,

        variants: [
            {
                options: {
                    Material: "Engineered Wood"
                },

                sku: "HOME-BED-004-DRESSING",

                price: 7999,

                stock: 35,

                images: [
                    img("photo-1595428774223-ef52624120d2")
                ]
            }
        ]

    },



    {
        name: "Memory Foam Mattress",

        images: [
            img("photo-1584100936595-c0654b55a2e6"),
            img("photo-1618220179428-22790b461013"),
            img("photo-1540574163026-643ea20ade25")
        ],

        brand: "Sleepwell",

        description:
            "Premium memory foam mattress providing comfortable sleep support.",

        price: 12999,

        oldPrice: 16000,

        catName: "Home",
        SubcatName: "Furniture",
        innersubcatName: "Bed Room",

        rating: 4.8,

        discount: 19,

        variants: [
            {
                options: {
                    Size: "Queen",
                    Thickness: "6 inch"
                },

                sku: "HOME-BED-005-MATTRESS",

                price: 12999,

                stock: 40,

                images: [
                    img("photo-1584100936595-c0654b55a2e6")
                ]
            }
        ]

    },



    {
        name: "Bedside Night Stand",

        images: [
            img("photo-1594620302200-9a762244a156"),
            img("photo-1493663284031-b7e3aefcae8e"),
            img("photo-1616486338812-3dadae4b4ace")
        ],

        brand: "IKEA",

        description:
            "Compact bedside table with drawer storage.",

        price: 2499,

        oldPrice: 3500,

        catName: "Home",
        SubcatName: "Furniture",
        innersubcatName: "Bed Room",

        rating: 4.6,

        discount: 29,

        variants: [
            {
                options: {
                    Material: "Wood"
                },

                sku: "HOME-BED-006-NIGHTSTAND",

                price: 2499,

                stock: 70,

                images: [
                    img("photo-1594620302200-9a762244a156")
                ]
            }
        ]

    },



    {
        name: "Study Table With Drawer",

        images: [
            img("photo-1594620302200-9a762244a156"),
            img("photo-1600210492486-724fe5c67fb0"),
            img("photo-1616486338812-3dadae4b4ace")
        ],

        brand: "IKEA",

        description:
            "Modern study table suitable for bedrooms and workspaces.",

        price: 5999,

        oldPrice: 8000,

        catName: "Home",
        SubcatName: "Furniture",
        innersubcatName: "Bed Room",

        rating: 4.7,

        discount: 25,

        variants: [
            {
                options: {
                    Material: "Wood",
                    Storage: "Drawer"
                },

                sku: "HOME-BED-007-STUDYTABLE",

                price: 5999,

                stock: 45,

                images: [
                    img("photo-1594620302200-9a762244a156")
                ]
            }
        ]

    },



    {
        name: "Ergonomic Bedroom Chair",

        images: [
            img("photo-1598300042247-d088f8ab3a91"),
            img("photo-1551298370-9d3d53740c72"),
            img("photo-1618220179428-22790b461013")
        ],

        brand: "Wakefit",

        description:
            "Comfortable chair for bedroom reading and relaxation.",

        price: 4999,

        oldPrice: 6500,

        catName: "Home",
        SubcatName: "Furniture",
        innersubcatName: "Bed Room",

        rating: 4.5,

        discount: 23,

        variants: [
            {
                options: {
                    Color: "Grey"
                },

                sku: "HOME-BED-008-CHAIR",

                price: 4999,

                stock: 50,

                images: [
                    img("photo-1598300042247-d088f8ab3a91")
                ]
            }
        ]

    },



    {
        name: "Wooden Chest Of Drawers",

        images: [
            img("photo-1616486338812-3dadae4b4ace"),
            img("photo-1595428774223-ef52624120d2"),
            img("photo-1600210492486-724fe5c67fb0")
        ],

        brand: "HomeTown",

        description:
            "Multi drawer storage cabinet for bedroom organization.",

        price: 8999,

        oldPrice: 12000,

        catName: "Home",
        SubcatName: "Furniture",
        innersubcatName: "Bed Room",

        rating: 4.6,

        discount: 25,

        variants: [
            {
                options: {
                    Drawers: "5"
                },

                sku: "HOME-BED-009-DRAWERS",

                price: 8999,

                stock: 30,

                images: [
                    img("photo-1616486338812-3dadae4b4ace")
                ]
            }
        ]

    },



    {
        name: "Premium Pillow Set",

        images: [
            img("photo-1584100936595-c0654b55a2e6"),
            img("photo-1618220179428-22790b461013"),
            img("photo-1540574163026-643ea20ade25")
        ],

        brand: "Sleepwell",

        description:
            "Soft microfiber pillows designed for comfortable sleeping.",

        price: 1499,

        oldPrice: 2200,

        catName: "Home",
        SubcatName: "Furniture",
        innersubcatName: "Bed Room",

        rating: 4.7,

        discount: 32,

        variants: [
            {
                options: {
                    Pack: "2 Pillows"
                },

                sku: "HOME-BED-010-PILLOW",

                price: 1499,

                stock: 100,

                images: [
                    img("photo-1584100936595-c0654b55a2e6")
                ]
            }
        ]

    },


    /* ===========================
          HOME
     KITCHEN & DINING
        COOKWARE
   =========================== */


    {
        name: "Prestige Aluminium Pressure Cooker",

        images: [
            img("photo-1584990347449-a2d4d4c5e3b1"),
            img("photo-1600952841320-db92ec4047ca"),
            img("photo-1585515320310-259814833e62")
        ],

        brand: "Prestige",

        description:
            "Durable aluminium pressure cooker suitable for everyday cooking.",

        price: 1599,

        oldPrice: 2200,

        catName: "Home",
        SubcatName: "Kitchen & Dining",
        innersubcatName: "Cookware",

        rating: 4.7,

        discount: 27,

        variants: [
            {
                options: {
                    Capacity: "5 Litre",
                    Material: "Aluminium"
                },

                sku: "HOME-COOK-001-PRESSURE",

                price: 1599,

                stock: 60,

                images: [
                    img("photo-1584990347449-a2d4d4c5e3b1")
                ]
            }
        ]

    },



    {
        name: "Hawkins Stainless Steel Pressure Cooker",

        images: [
            img("photo-1584990347449-a2d4d4c5e3b1"),
            img("photo-1585515320310-259814833e62"),
            img("photo-1600952841320-db92ec4047ca")
        ],

        brand: "Hawkins",

        description:
            "Premium stainless steel pressure cooker with safety features.",

        price: 2499,

        oldPrice: 3200,

        catName: "Home",
        SubcatName: "Kitchen & Dining",
        innersubcatName: "Cookware",

        rating: 4.8,

        discount: 22,

        variants: [
            {
                options: {
                    Capacity: "3.5 Litre",
                    Material: "Stainless Steel"
                },

                sku: "HOME-COOK-002-HAWKINS",

                price: 2499,

                stock: 50,

                images: [
                    img("photo-1584990347449-a2d4d4c5e3b1")
                ]
            }
        ]

    },



    {
        name: "Non Stick Fry Pan",

        images: [
            img("photo-1584990347449-a2d4d4c5e3b1"),
            img("photo-1556911220-bff31c7ae5e4"),
            img("photo-1600566753051-f0b89df2dd90")
        ],

        brand: "Wonderchef",

        description:
            "Non-stick fry pan with comfortable handle for daily cooking.",

        price: 899,

        oldPrice: 1200,

        catName: "Home",
        SubcatName: "Kitchen & Dining",
        innersubcatName: "Cookware",

        rating: 4.6,

        discount: 25,

        variants: [
            {
                options: {
                    Size: "24cm",
                    Material: "Non Stick"
                },

                sku: "HOME-COOK-003-FRYPAN",

                price: 899,

                stock: 100,

                images: [
                    img("photo-1584990347449-a2d4d4c5e3b1")
                ]
            }
        ]

    },



    {
        name: "Granite Coating Kadai",

        images: [
            img("photo-1556911220-bff31c7ae5e4"),
            img("photo-1600566753051-f0b89df2dd90"),
            img("photo-1585515320310-259814833e62")
        ],

        brand: "Prestige",

        description:
            "Granite coated kadai with excellent heat distribution.",

        price: 1499,

        oldPrice: 2000,

        catName: "Home",
        SubcatName: "Kitchen & Dining",
        innersubcatName: "Cookware",

        rating: 4.7,

        discount: 25,

        variants: [
            {
                options: {
                    Size: "28cm",
                    Material: "Granite"
                },

                sku: "HOME-COOK-004-KADAI",

                price: 1499,

                stock: 70,

                images: [
                    img("photo-1556911220-bff31c7ae5e4")
                ]
            }
        ]

    },



    {
        name: "Stainless Steel Cookware Set",

        images: [
            img("photo-1600566753051-f0b89df2dd90"),
            img("photo-1585515320310-259814833e62"),
            img("photo-1556911220-bff31c7ae5e4")
        ],

        brand: "Milton",

        description:
            "Complete stainless steel cookware set for modern kitchens.",

        price: 4999,

        oldPrice: 6500,

        catName: "Home",
        SubcatName: "Kitchen & Dining",
        innersubcatName: "Cookware",

        rating: 4.8,

        discount: 23,

        variants: [
            {
                options: {
                    Pieces: "5",
                    Material: "Stainless Steel"
                },

                sku: "HOME-COOK-005-SET",

                price: 4999,

                stock: 40,

                images: [
                    img("photo-1600566753051-f0b89df2dd90")
                ]
            }
        ]

    },



    {
        name: "Cast Iron Tawa",

        images: [
            img("photo-1556911220-bff31c7ae5e4"),
            img("photo-1585515320310-259814833e62"),
            img("photo-1600566753051-f0b89df2dd90")
        ],

        brand: "Lodge",

        description:
            "Heavy duty cast iron tawa perfect for dosa and roti.",

        price: 1299,

        oldPrice: 1800,

        catName: "Home",
        SubcatName: "Kitchen & Dining",
        innersubcatName: "Cookware",

        rating: 4.7,

        discount: 28,

        variants: [
            {
                options: {
                    Diameter: "28cm",
                    Material: "Cast Iron"
                },

                sku: "HOME-COOK-006-TAWA",

                price: 1299,

                stock: 80,

                images: [
                    img("photo-1556911220-bff31c7ae5e4")
                ]
            }
        ]

    },



    {
        name: "Kitchen Knife Set",

        images: [
            img("photo-1593618998160-e34014e67546"),
            img("photo-1566454419290-57a0589bc6a7"),
            img("photo-1600566753051-f0b89df2dd90")
        ],

        brand: "Pigeon",

        description:
            "Sharp stainless steel knife set for chopping and slicing.",

        price: 999,

        oldPrice: 1500,

        catName: "Home",
        SubcatName: "Kitchen & Dining",
        innersubcatName: "Cookware",

        rating: 4.5,

        discount: 34,

        variants: [
            {
                options: {
                    Pieces: "6"
                },

                sku: "HOME-COOK-007-KNIFE",

                price: 999,

                stock: 90,

                images: [
                    img("photo-1593618998160-e34014e67546")
                ]
            }
        ]

    },



    {
        name: "Wooden Cooking Spoon Set",

        images: [
            img("photo-1556911220-bff31c7ae5e4"),
            img("photo-1600566753051-f0b89df2dd90"),
            img("photo-1593618998160-e34014e67546")
        ],

        brand: "Borosil",

        description:
            "Natural wooden cooking spoons safe for non-stick cookware.",

        price: 399,

        oldPrice: 600,

        catName: "Home",
        SubcatName: "Kitchen & Dining",
        innersubcatName: "Cookware",

        rating: 4.4,

        discount: 33,

        variants: [
            {
                options: {
                    Pieces: "5"
                },

                sku: "HOME-COOK-008-SPOON",

                price: 399,

                stock: 150,

                images: [
                    img("photo-1556911220-bff31c7ae5e4")
                ]
            }
        ]

    },



    {
        name: "Airtight Food Storage Containers",

        images: [
            img("photo-1583947215259-38e31be8751f"),
            img("photo-1600566753051-f0b89df2dd90"),
            img("photo-1556911220-bff31c7ae5e4")
        ],

        brand: "Milton",

        description:
            "Plastic airtight containers for storing kitchen essentials.",

        price: 799,

        oldPrice: 1200,

        catName: "Home",
        SubcatName: "Kitchen & Dining",
        innersubcatName: "Cookware",

        rating: 4.6,

        discount: 33,

        variants: [
            {
                options: {
                    Pieces: "10"
                },

                sku: "HOME-COOK-009-CONTAINERS",

                price: 799,

                stock: 100,

                images: [
                    img("photo-1583947215259-38e31be8751f")
                ]
            }
        ]

    },



    {
        name: "Electric Hand Blender",

        images: [
            img("photo-1585515320310-259814833e62"),
            img("photo-1593618998160-e34014e67546"),
            img("photo-1556911220-bff31c7ae5e4")
        ],

        brand: "Philips",

        description:
            "Hand blender for mixing, whipping and preparing smoothies.",

        price: 1999,

        oldPrice: 2500,

        catName: "Home",
        SubcatName: "Kitchen & Dining",
        innersubcatName: "Cookware",

        rating: 4.5,

        discount: 20,

        variants: [
            {
                options: {
                    Power: "250W"
                },

                sku: "HOME-COOK-010-BLENDER",

                price: 1999,

                stock: 45,

                images: [
                    img("photo-1585515320310-259814833e62")
                ]
            }
        ]

    },

    /* ===========================
          HOME
     KITCHEN & DINING
        COOKWARE
   =========================== */


    {
        name: "Prestige Aluminium Pressure Cooker",

        images: [
            img("photo-1584990347449-a2d4d4c5e3b1"),
            img("photo-1600952841320-db92ec4047ca"),
            img("photo-1585515320310-259814833e62")
        ],

        brand: "Prestige",

        description:
            "Durable aluminium pressure cooker suitable for everyday cooking.",

        price: 1599,

        oldPrice: 2200,

        catName: "Home",
        SubcatName: "Kitchen & Dining",
        innersubcatName: "Cookware",

        rating: 4.7,

        discount: 27,

        variants: [
            {
                options: {
                    Capacity: "5 Litre",
                    Material: "Aluminium"
                },

                sku: "HOME-COOK-001-PRESSURE",

                price: 1599,

                stock: 60,

                images: [
                    img("photo-1584990347449-a2d4d4c5e3b1")
                ]
            }
        ]

    },



    {
        name: "Hawkins Stainless Steel Pressure Cooker",

        images: [
            img("photo-1584990347449-a2d4d4c5e3b1"),
            img("photo-1585515320310-259814833e62"),
            img("photo-1600952841320-db92ec4047ca")
        ],

        brand: "Hawkins",

        description:
            "Premium stainless steel pressure cooker with safety features.",

        price: 2499,

        oldPrice: 3200,

        catName: "Home",
        SubcatName: "Kitchen & Dining",
        innersubcatName: "Cookware",

        rating: 4.8,

        discount: 22,

        variants: [
            {
                options: {
                    Capacity: "3.5 Litre",
                    Material: "Stainless Steel"
                },

                sku: "HOME-COOK-002-HAWKINS",

                price: 2499,

                stock: 50,

                images: [
                    img("photo-1584990347449-a2d4d4c5e3b1")
                ]
            }
        ]

    },



    {
        name: "Non Stick Fry Pan",

        images: [
            img("photo-1584990347449-a2d4d4c5e3b1"),
            img("photo-1556911220-bff31c7ae5e4"),
            img("photo-1600566753051-f0b89df2dd90")
        ],

        brand: "Wonderchef",

        description:
            "Non-stick fry pan with comfortable handle for daily cooking.",

        price: 899,

        oldPrice: 1200,

        catName: "Home",
        SubcatName: "Kitchen & Dining",
        innersubcatName: "Cookware",

        rating: 4.6,

        discount: 25,

        variants: [
            {
                options: {
                    Size: "24cm",
                    Material: "Non Stick"
                },

                sku: "HOME-COOK-003-FRYPAN",

                price: 899,

                stock: 100,

                images: [
                    img("photo-1584990347449-a2d4d4c5e3b1")
                ]
            }
        ]

    },



    {
        name: "Granite Coating Kadai",

        images: [
            img("photo-1556911220-bff31c7ae5e4"),
            img("photo-1600566753051-f0b89df2dd90"),
            img("photo-1585515320310-259814833e62")
        ],

        brand: "Prestige",

        description:
            "Granite coated kadai with excellent heat distribution.",

        price: 1499,

        oldPrice: 2000,

        catName: "Home",
        SubcatName: "Kitchen & Dining",
        innersubcatName: "Cookware",

        rating: 4.7,

        discount: 25,

        variants: [
            {
                options: {
                    Size: "28cm",
                    Material: "Granite"
                },

                sku: "HOME-COOK-004-KADAI",

                price: 1499,

                stock: 70,

                images: [
                    img("photo-1556911220-bff31c7ae5e4")
                ]
            }
        ]

    },



    {
        name: "Stainless Steel Cookware Set",

        images: [
            img("photo-1600566753051-f0b89df2dd90"),
            img("photo-1585515320310-259814833e62"),
            img("photo-1556911220-bff31c7ae5e4")
        ],

        brand: "Milton",

        description:
            "Complete stainless steel cookware set for modern kitchens.",

        price: 4999,

        oldPrice: 6500,

        catName: "Home",
        SubcatName: "Kitchen & Dining",
        innersubcatName: "Cookware",

        rating: 4.8,

        discount: 23,

        variants: [
            {
                options: {
                    Pieces: "5",
                    Material: "Stainless Steel"
                },

                sku: "HOME-COOK-005-SET",

                price: 4999,

                stock: 40,

                images: [
                    img("photo-1600566753051-f0b89df2dd90")
                ]
            }
        ]

    },



    {
        name: "Cast Iron Tawa",

        images: [
            img("photo-1556911220-bff31c7ae5e4"),
            img("photo-1585515320310-259814833e62"),
            img("photo-1600566753051-f0b89df2dd90")
        ],

        brand: "Lodge",

        description:
            "Heavy duty cast iron tawa perfect for dosa and roti.",

        price: 1299,

        oldPrice: 1800,

        catName: "Home",
        SubcatName: "Kitchen & Dining",
        innersubcatName: "Cookware",

        rating: 4.7,

        discount: 28,

        variants: [
            {
                options: {
                    Diameter: "28cm",
                    Material: "Cast Iron"
                },

                sku: "HOME-COOK-006-TAWA",

                price: 1299,

                stock: 80,

                images: [
                    img("photo-1556911220-bff31c7ae5e4")
                ]
            }
        ]

    },



    {
        name: "Kitchen Knife Set",

        images: [
            img("photo-1593618998160-e34014e67546"),
            img("photo-1566454419290-57a0589bc6a7"),
            img("photo-1600566753051-f0b89df2dd90")
        ],

        brand: "Pigeon",

        description:
            "Sharp stainless steel knife set for chopping and slicing.",

        price: 999,

        oldPrice: 1500,

        catName: "Home",
        SubcatName: "Kitchen & Dining",
        innersubcatName: "Cookware",

        rating: 4.5,

        discount: 34,

        variants: [
            {
                options: {
                    Pieces: "6"
                },

                sku: "HOME-COOK-007-KNIFE",

                price: 999,

                stock: 90,

                images: [
                    img("photo-1593618998160-e34014e67546")
                ]
            }
        ]

    },



    {
        name: "Wooden Cooking Spoon Set",

        images: [
            img("photo-1556911220-bff31c7ae5e4"),
            img("photo-1600566753051-f0b89df2dd90"),
            img("photo-1593618998160-e34014e67546")
        ],

        brand: "Borosil",

        description:
            "Natural wooden cooking spoons safe for non-stick cookware.",

        price: 399,

        oldPrice: 600,

        catName: "Home",
        SubcatName: "Kitchen & Dining",
        innersubcatName: "Cookware",

        rating: 4.4,

        discount: 33,

        variants: [
            {
                options: {
                    Pieces: "5"
                },

                sku: "HOME-COOK-008-SPOON",

                price: 399,

                stock: 150,

                images: [
                    img("photo-1556911220-bff31c7ae5e4")
                ]
            }
        ]

    },



    {
        name: "Airtight Food Storage Containers",

        images: [
            img("photo-1583947215259-38e31be8751f"),
            img("photo-1600566753051-f0b89df2dd90"),
            img("photo-1556911220-bff31c7ae5e4")
        ],

        brand: "Milton",

        description:
            "Plastic airtight containers for storing kitchen essentials.",

        price: 799,

        oldPrice: 1200,

        catName: "Home",
        SubcatName: "Kitchen & Dining",
        innersubcatName: "Cookware",

        rating: 4.6,

        discount: 33,

        variants: [
            {
                options: {
                    Pieces: "10"
                },

                sku: "HOME-COOK-009-CONTAINERS",

                price: 799,

                stock: 100,

                images: [
                    img("photo-1583947215259-38e31be8751f")
                ]
            }
        ]

    },



    {
        name: "Electric Hand Blender",

        images: [
            img("photo-1585515320310-259814833e62"),
            img("photo-1593618998160-e34014e67546"),
            img("photo-1556911220-bff31c7ae5e4")
        ],

        brand: "Philips",

        description:
            "Hand blender for mixing, whipping and preparing smoothies.",

        price: 1999,

        oldPrice: 2500,

        catName: "Home",
        SubcatName: "Kitchen & Dining",
        innersubcatName: "Cookware",

        rating: 4.5,

        discount: 20,

        variants: [
            {
                options: {
                    Power: "250W"
                },

                sku: "HOME-COOK-010-BLENDER",

                price: 1999,

                stock: 45,

                images: [
                    img("photo-1585515320310-259814833e62")
                ]
            }
        ]

    },

    /* ===========================
          HOME
     KITCHEN & DINING
        TABLEWARE
   =========================== */


    {
        name: "Borosil Opal Glass Dinner Set",

        images: [
            img("photo-1603199506016-b9a594b593c0"),
            img("photo-1600891964092-4316c288032e"),
            img("photo-1584269600519-112d071b35e6")
        ],

        brand: "Borosil",

        description:
            "Elegant opal glass dinner set with lightweight and durable design.",

        price: 2499,

        oldPrice: 3200,

        catName: "Home",
        SubcatName: "Kitchen & Dining",
        innersubcatName: "Tableware",

        rating: 4.7,

        discount: 22,

        variants: [
            {
                options: {
                    Pieces: "33 Pieces",
                    Material: "Opal Glass"
                },

                sku: "HOME-TABLE-001-DINNER",

                price: 2499,

                stock: 40,

                images: [
                    img("photo-1603199506016-b9a594b593c0")
                ]
            }
        ]

    },



    {
        name: "Ceramic Coffee Mug Set",

        images: [
            img("photo-1514228742587-6b1558fcca3d"),
            img("photo-1544787219-7f47ccb76574"),
            img("photo-1572119865084-43c285814d63")
        ],

        brand: "Ceramic Craft",

        description:
            "Premium ceramic mugs perfect for tea and coffee.",

        price: 799,

        oldPrice: 1200,

        catName: "Home",
        SubcatName: "Kitchen & Dining",
        innersubcatName: "Tableware",

        rating: 4.6,

        discount: 33,

        variants: [
            {
                options: {
                    Pieces: "6 Mugs",
                    Material: "Ceramic"
                },

                sku: "HOME-TABLE-002-MUGS",

                price: 799,

                stock: 100,

                images: [
                    img("photo-1514228742587-6b1558fcca3d")
                ]
            }
        ]

    },



    {
        name: "Stainless Steel Cutlery Set",

        images: [
            img("photo-1594736797933-d0501ba2fe65"),
            img("photo-1529692236671-f1f6cf9683ba"),
            img("photo-1547592180-85f173990554")
        ],

        brand: "Milton",

        description:
            "Premium stainless steel spoon, fork and knife set.",

        price: 1299,

        oldPrice: 1800,

        catName: "Home",
        SubcatName: "Kitchen & Dining",
        innersubcatName: "Tableware",

        rating: 4.7,

        discount: 28,

        variants: [
            {
                options: {
                    Pieces: "24 Pieces",
                    Material: "Steel"
                },

                sku: "HOME-TABLE-003-CUTLERY",

                price: 1299,

                stock: 80,

                images: [
                    img("photo-1594736797933-d0501ba2fe65")
                ]
            }
        ]

    },



    {
        name: "Premium Glass Tumbler Set",

        images: [
            img("photo-1505022610485-0249ba5b3675"),
            img("photo-1610701596007-11502861dcfa"),
            img("photo-1585515320310-259814833e62")
        ],

        brand: "Ocean",

        description:
            "Crystal clear glass tumblers for daily drinking and guests.",

        price: 899,

        oldPrice: 1300,

        catName: "Home",
        SubcatName: "Kitchen & Dining",
        innersubcatName: "Tableware",

        rating: 4.5,

        discount: 31,

        variants: [
            {
                options: {
                    Pieces: "6 Glasses"
                },

                sku: "HOME-TABLE-004-GLASS",

                price: 899,

                stock: 120,

                images: [
                    img("photo-1505022610485-0249ba5b3675")
                ]
            }
        ]

    },



    {
        name: "White Ceramic Dinner Plates Set",

        images: [
            img("photo-1603199506016-b9a594b593c0"),
            img("photo-1584269600519-112d071b35e6"),
            img("photo-1515003197210-e0cd71810b5f")
        ],

        brand: "La Opala",

        description:
            "Minimal white ceramic plates suitable for everyday dining.",

        price: 1599,

        oldPrice: 2200,

        catName: "Home",
        SubcatName: "Kitchen & Dining",
        innersubcatName: "Tableware",

        rating: 4.8,

        discount: 27,

        variants: [
            {
                options: {
                    Pieces: "12 Plates",
                    Material: "Ceramic"
                },

                sku: "HOME-TABLE-005-PLATES",

                price: 1599,

                stock: 60,

                images: [
                    img("photo-1603199506016-b9a594b593c0")
                ]
            }
        ]

    },



    {
        name: "Wooden Serving Tray",

        images: [
            img("photo-1600566753051-f0b89df2dd90"),
            img("photo-1610701596007-11502861dcfa"),
            img("photo-1547592180-85f173990554")
        ],

        brand: "IKEA",

        description:
            "Stylish wooden serving tray for tea, snacks and dining.",

        price: 699,

        oldPrice: 1000,

        catName: "Home",
        SubcatName: "Kitchen & Dining",
        innersubcatName: "Tableware",

        rating: 4.5,

        discount: 30,

        variants: [
            {
                options: {
                    Material: "Wood"
                },

                sku: "HOME-TABLE-006-TRAY",

                price: 699,

                stock: 90,

                images: [
                    img("photo-1600566753051-f0b89df2dd90")
                ]
            }
        ]

    },



    {
        name: "Soup Bowl Ceramic Set",

        images: [
            img("photo-1584269600519-112d071b35e6"),
            img("photo-1515003197210-e0cd71810b5f"),
            img("photo-1603199506016-b9a594b593c0")
        ],

        brand: "La Opala",

        description:
            "Deep ceramic bowls ideal for soups, salads and desserts.",

        price: 999,

        oldPrice: 1400,

        catName: "Home",
        SubcatName: "Kitchen & Dining",
        innersubcatName: "Tableware",

        rating: 4.6,

        discount: 28,

        variants: [
            {
                options: {
                    Pieces: "6 Bowls"
                },

                sku: "HOME-TABLE-007-BOWLS",

                price: 999,

                stock: 70,

                images: [
                    img("photo-1584269600519-112d071b35e6")
                ]
            }
        ]

    },



    {
        name: "Insulated Stainless Steel Bottle",

        images: [
            img("photo-1602143407151-7111542de6e8"),
            img("photo-1523362628745-0c100150b504"),
            img("photo-1600185365483-26d7a4cc7519")
        ],

        brand: "Milton",

        description:
            "Vacuum insulated bottle that keeps beverages hot and cold.",

        price: 899,

        oldPrice: 1200,

        catName: "Home",
        SubcatName: "Kitchen & Dining",
        innersubcatName: "Tableware",

        rating: 4.8,

        discount: 25,

        variants: [
            {
                options: {
                    Capacity: "1 Litre",
                    Material: "Steel"
                },

                sku: "HOME-TABLE-008-BOTTLE",

                price: 899,

                stock: 150,

                images: [
                    img("photo-1602143407151-7111542de6e8")
                ]
            }
        ]

    },



    {
        name: "Glass Tea Cup Set",

        images: [
            img("photo-1514228742587-6b1558fcca3d"),
            img("photo-1544787219-7f47ccb76574"),
            img("photo-1572119865084-43c285814d63")
        ],

        brand: "Borosil",

        description:
            "Transparent glass cups with elegant design for tea lovers.",

        price: 699,

        oldPrice: 1000,

        catName: "Home",
        SubcatName: "Kitchen & Dining",
        innersubcatName: "Tableware",

        rating: 4.6,

        discount: 30,

        variants: [
            {
                options: {
                    Pieces: "6 Cups"
                },

                sku: "HOME-TABLE-009-TEACUP",

                price: 699,

                stock: 100,

                images: [
                    img("photo-1514228742587-6b1558fcca3d")
                ]
            }
        ]

    },



    {
        name: "Marble Design Serving Bowl",

        images: [
            img("photo-1584269600519-112d071b35e6"),
            img("photo-1603199506016-b9a594b593c0"),
            img("photo-1515003197210-e0cd71810b5f")
        ],

        brand: "Home Centre",

        description:
            "Decorative serving bowl with premium marble finish.",

        price: 1199,

        oldPrice: 1600,

        catName: "Home",
        SubcatName: "Kitchen & Dining",
        innersubcatName: "Tableware",

        rating: 4.5,

        discount: 25,

        variants: [
            {
                options: {
                    Material: "Ceramic"
                },

                sku: "HOME-TABLE-010-SERVING-BOWL",

                price: 1199,

                stock: 50,

                images: [
                    img("photo-1584269600519-112d071b35e6")
                ]
            }
        ]

    },

    /* ===========================
          HOME
       HOME DECOR
        LIGHTING
   =========================== */


    {
        name: "Modern LED Ceiling Light",

        images: [
            img("photo-1540932239986-30128078f3c5"),
            img("photo-1507473885765-e6ed057f782c"),
            img("photo-1513506003901-1e6a229e2d15")
        ],

        brand: "Philips",

        description:
            "Modern energy efficient LED ceiling light suitable for living rooms and bedrooms.",

        price: 2499,

        oldPrice: 3500,

        catName: "Home",
        SubcatName: "Home Decor",
        innersubcatName: "Lighting",

        rating: 4.7,

        discount: 29,

        variants: [
            {
                options: {
                    Power: "24W",
                    Color: "White"
                },

                sku: "HOME-LIGHT-001-CEILING",

                price: 2499,

                stock: 60,

                images: [
                    img("photo-1540932239986-30128078f3c5")
                ]
            }
        ]

    },



    {
        name: "Crystal Chandelier Hanging Light",

        images: [
            img("photo-1524484485831-a92ffc0de03f"),
            img("photo-1513506003901-1e6a229e2d15"),
            img("photo-1507473885765-e6ed057f782c")
        ],

        brand: "Halonix",

        description:
            "Elegant crystal chandelier designed for premium home interiors.",

        price: 8999,

        oldPrice: 12000,

        catName: "Home",
        SubcatName: "Home Decor",
        innersubcatName: "Lighting",

        rating: 4.8,

        discount: 25,

        variants: [
            {
                options: {
                    Type: "Chandelier",
                    Bulbs: "6"
                },

                sku: "HOME-LIGHT-002-CHANDELIER",

                price: 8999,

                stock: 25,

                images: [
                    img("photo-1524484485831-a92ffc0de03f")
                ]
            }
        ]

    },



    {
        name: "Minimal Table Lamp",

        images: [
            img("photo-1507473885765-e6ed057f782c"),
            img("photo-1513506003901-1e6a229e2d15"),
            img("photo-1540932239986-30128078f3c5")
        ],

        brand: "IKEA",

        description:
            "Stylish bedside table lamp with warm ambient lighting.",

        price: 1299,

        oldPrice: 1800,

        catName: "Home",
        SubcatName: "Home Decor",
        innersubcatName: "Lighting",

        rating: 4.6,

        discount: 28,

        variants: [
            {
                options: {
                    Color: "Black",
                    Type: "Table Lamp"
                },

                sku: "HOME-LIGHT-003-TABLE",

                price: 1299,

                stock: 100,

                images: [
                    img("photo-1507473885765-e6ed057f782c")
                ]
            }
        ]

    },



    {
        name: "Smart WiFi LED Bulb",

        images: [
            img("photo-1550989460-0adf9ea622e2"),
            img("photo-1513506003901-1e6a229e2d15"),
            img("photo-1507473885765-e6ed057f782c")
        ],

        brand: "Wipro",

        description:
            "Smart LED bulb with adjustable brightness and smartphone control.",

        price: 699,

        oldPrice: 999,

        catName: "Home",
        SubcatName: "Home Decor",
        innersubcatName: "Lighting",

        rating: 4.5,

        discount: 30,

        variants: [
            {
                options: {
                    Power: "12W",
                    Connectivity: "WiFi"
                },

                sku: "HOME-LIGHT-004-SMARTBULB",

                price: 699,

                stock: 150,

                images: [
                    img("photo-1550989460-0adf9ea622e2")
                ]
            }
        ]

    },



    {
        name: "Decorative Floor Lamp",

        images: [
            img("photo-1513506003901-1e6a229e2d15"),
            img("photo-1507473885765-e6ed057f782c"),
            img("photo-1524484485831-a92ffc0de03f")
        ],

        brand: "Home Centre",

        description:
            "Modern floor lamp adding elegance to living room corners.",

        price: 3999,

        oldPrice: 5500,

        catName: "Home",
        SubcatName: "Home Decor",
        innersubcatName: "Lighting",

        rating: 4.6,

        discount: 27,

        variants: [
            {
                options: {
                    Height: "5 Feet"
                },

                sku: "HOME-LIGHT-005-FLOOR",

                price: 3999,

                stock: 40,

                images: [
                    img("photo-1513506003901-1e6a229e2d15")
                ]
            }
        ]

    },



    {
        name: "LED Strip Lights RGB",

        images: [
            img("photo-1550989460-0adf9ea622e2"),
            img("photo-1513506003901-1e6a229e2d15"),
            img("photo-1507473885765-e6ed057f782c")
        ],

        brand: "Syska",

        description:
            "RGB LED strip lights for bedrooms, gaming setups and decoration.",

        price: 899,

        oldPrice: 1400,

        catName: "Home",
        SubcatName: "Home Decor",
        innersubcatName: "Lighting",

        rating: 4.5,

        discount: 36,

        variants: [
            {
                options: {
                    Length: "5 Meter",
                    Color: "RGB"
                },

                sku: "HOME-LIGHT-006-LEDSTRIP",

                price: 899,

                stock: 120,

                images: [
                    img("photo-1550989460-0adf9ea622e2")
                ]
            }
        ]

    },



    {
        name: "Wall Mounted Decorative Light",

        images: [
            img("photo-1540932239986-30128078f3c5"),
            img("photo-1524484485831-a92ffc0de03f"),
            img("photo-1513506003901-1e6a229e2d15")
        ],

        brand: "Halonix",

        description:
            "Modern wall lamp for bedrooms, corridors and balconies.",

        price: 1599,

        oldPrice: 2200,

        catName: "Home",
        SubcatName: "Home Decor",
        innersubcatName: "Lighting",

        rating: 4.6,

        discount: 27,

        variants: [
            {
                options: {
                    Type: "Wall Light"
                },

                sku: "HOME-LIGHT-007-WALL",

                price: 1599,

                stock: 70,

                images: [
                    img("photo-1540932239986-30128078f3c5")
                ]
            }
        ]

    },



    {
        name: "Night Lamp With Sensor",

        images: [
            img("photo-1507473885765-e6ed057f782c"),
            img("photo-1550989460-0adf9ea622e2"),
            img("photo-1513506003901-1e6a229e2d15")
        ],

        brand: "Syska",

        description:
            "Automatic sensor night lamp with soft warm light.",

        price: 499,

        oldPrice: 700,

        catName: "Home",
        SubcatName: "Home Decor",
        innersubcatName: "Lighting",

        rating: 4.4,

        discount: 28,

        variants: [
            {
                options: {
                    Sensor: "Motion"
                },

                sku: "HOME-LIGHT-008-NIGHTLAMP",

                price: 499,

                stock: 200,

                images: [
                    img("photo-1507473885765-e6ed057f782c")
                ]
            }
        ]

    },



    {
        name: "Antique Lantern Decorative Light",

        images: [
            img("photo-1524484485831-a92ffc0de03f"),
            img("photo-1513506003901-1e6a229e2d15"),
            img("photo-1507473885765-e6ed057f782c")
        ],

        brand: "HomeTown",

        description:
            "Vintage style lantern light for decorative home interiors.",

        price: 1199,

        oldPrice: 1800,

        catName: "Home",
        SubcatName: "Home Decor",
        innersubcatName: "Lighting",

        rating: 4.5,

        discount: 33,

        variants: [
            {
                options: {
                    Style: "Antique"
                },

                sku: "HOME-LIGHT-009-LANTERN",

                price: 1199,

                stock: 60,

                images: [
                    img("photo-1524484485831-a92ffc0de03f")
                ]
            }
        ]

    },



    {
        name: "Smart Ceiling Panel Light",

        images: [
            img("photo-1540932239986-30128078f3c5"),
            img("photo-1550989460-0adf9ea622e2"),
            img("photo-1507473885765-e6ed057f782c")
        ],

        brand: "Havells",

        description:
            "Premium LED panel light with bright uniform illumination.",

        price: 1799,

        oldPrice: 2500,

        catName: "Home",
        SubcatName: "Home Decor",
        innersubcatName: "Lighting",

        rating: 4.7,

        discount: 28,

        variants: [
            {
                options: {
                    Power: "18W"
                },

                sku: "HOME-LIGHT-010-PANEL",

                price: 1799,

                stock: 80,

                images: [
                    img("photo-1540932239986-30128078f3c5")
                ]
            }
        ]

    },

    /* ===========================
          HOME
       HOME DECOR
       FURNISHING
   =========================== */


    {
        name: "Premium Cotton Bedsheet Set",

        images: [
            img("photo-1584100936595-c0654b55a2e6"),
            img("photo-1618220179428-22790b461013"),
            img("photo-1600607687939-ce8a6c25118c")
        ],

        brand: "Spaces",

        description:
            "Soft premium cotton bedsheet with matching pillow covers for comfortable sleep.",

        price: 1499,

        oldPrice: 2200,

        catName: "Home",
        SubcatName: "Home Decor",
        innersubcatName: "Furnishing",

        rating: 4.7,

        discount: 32,

        variants: [
            {
                options: {
                    Size: "Queen",
                    Material: "Cotton"
                },

                sku: "HOME-FURNISH-001-BEDSHEET",

                price: 1499,

                stock: 80,

                images: [
                    img("photo-1584100936595-c0654b55a2e6")
                ]
            }
        ]

    },



    {
        name: "Blackout Window Curtains",

        images: [
            img("photo-1618220179428-22790b461013"),
            img("photo-1600607687939-ce8a6c25118c"),
            img("photo-1513694203232-719a280e022f")
        ],

        brand: "D'Decor",

        description:
            "Premium blackout curtains that block sunlight and enhance room privacy.",

        price: 1999,

        oldPrice: 3000,

        catName: "Home",
        SubcatName: "Home Decor",
        innersubcatName: "Furnishing",

        rating: 4.6,

        discount: 33,

        variants: [
            {
                options: {
                    Length: "7 Feet",
                    Color: "Grey"
                },

                sku: "HOME-FURNISH-002-CURTAIN",

                price: 1999,

                stock: 60,

                images: [
                    img("photo-1618220179428-22790b461013")
                ]
            }
        ]

    },



    {
        name: "Decorative Cushion Cover Set",

        images: [
            img("photo-1584100936595-c0654b55a2e6"),
            img("photo-1513694203232-719a280e022f"),
            img("photo-1600607687939-ce8a6c25118c")
        ],

        brand: "Home Centre",

        description:
            "Designer cushion covers to add style to sofas and beds.",

        price: 599,

        oldPrice: 900,

        catName: "Home",
        SubcatName: "Home Decor",
        innersubcatName: "Furnishing",

        rating: 4.5,

        discount: 33,

        variants: [
            {
                options: {
                    Pieces: "5 Covers",
                    Material: "Cotton"
                },

                sku: "HOME-FURNISH-003-CUSHION",

                price: 599,

                stock: 120,

                images: [
                    img("photo-1584100936595-c0654b55a2e6")
                ]
            }
        ]

    },



    {
        name: "Luxury Area Rug",

        images: [
            img("photo-1600166898405-da9535204843"),
            img("photo-1600607687939-ce8a6c25118c"),
            img("photo-1513694203232-719a280e022f")
        ],

        brand: "IKEA",

        description:
            "Soft decorative area rug suitable for bedrooms and living rooms.",

        price: 3499,

        oldPrice: 5000,

        catName: "Home",
        SubcatName: "Home Decor",
        innersubcatName: "Furnishing",

        rating: 4.7,

        discount: 30,

        variants: [
            {
                options: {
                    Size: "5x7 Feet",
                    Material: "Polyester"
                },

                sku: "HOME-FURNISH-004-RUG",

                price: 3499,

                stock: 35,

                images: [
                    img("photo-1600166898405-da9535204843")
                ]
            }
        ]

    },



    {
        name: "Soft Microfiber Blanket",

        images: [
            img("photo-1584100936595-c0654b55a2e6"),
            img("photo-1600607687939-ce8a6c25118c"),
            img("photo-1513694203232-719a280e022f")
        ],

        brand: "Wakefit",

        description:
            "Warm microfiber blanket suitable for winter comfort.",

        price: 1299,

        oldPrice: 1800,

        catName: "Home",
        SubcatName: "Home Decor",
        innersubcatName: "Furnishing",

        rating: 4.6,

        discount: 28,

        variants: [
            {
                options: {
                    Size: "Queen",
                    Material: "Microfiber"
                },

                sku: "HOME-FURNISH-005-BLANKET",

                price: 1299,

                stock: 90,

                images: [
                    img("photo-1584100936595-c0654b55a2e6")
                ]
            }
        ]

    },



    {
        name: "Premium Sofa Cover Set",

        images: [
            img("photo-1600607687939-ce8a6c25118c"),
            img("photo-1513694203232-719a280e022f"),
            img("photo-1584100936595-c0654b55a2e6")
        ],

        brand: "AmazonBasics",

        description:
            "Stretchable sofa cover protecting furniture from dust and stains.",

        price: 1799,

        oldPrice: 2500,

        catName: "Home",
        SubcatName: "Home Decor",
        innersubcatName: "Furnishing",

        rating: 4.5,

        discount: 28,

        variants: [
            {
                options: {
                    Seater: "5 Seater",
                    Material: "Stretch Fabric"
                },

                sku: "HOME-FURNISH-006-SOFACOVER",

                price: 1799,

                stock: 50,

                images: [
                    img("photo-1600607687939-ce8a6c25118c")
                ]
            }
        ]

    },



    {
        name: "Cotton Hand Towel Set",

        images: [
            img("photo-1584100936595-c0654b55a2e6"),
            img("photo-1600607687939-ce8a6c25118c"),
            img("photo-1513694203232-719a280e022f")
        ],

        brand: "Spaces",

        description:
            "Soft absorbent cotton towels for daily bathroom use.",

        price: 799,

        oldPrice: 1200,

        catName: "Home",
        SubcatName: "Home Decor",
        innersubcatName: "Furnishing",

        rating: 4.6,

        discount: 33,

        variants: [
            {
                options: {
                    Pieces: "6 Towels",
                    Material: "Cotton"
                },

                sku: "HOME-FURNISH-007-TOWEL",

                price: 799,

                stock: 100,

                images: [
                    img("photo-1584100936595-c0654b55a2e6")
                ]
            }
        ]

    },



    {
        name: "Anti Slip Floor Mat",

        images: [
            img("photo-1600166898405-da9535204843"),
            img("photo-1600607687939-ce8a6c25118c"),
            img("photo-1513694203232-719a280e022f")
        ],

        brand: "HomeTown",

        description:
            "Soft anti-slip floor mat suitable for bedroom and bathroom.",

        price: 499,

        oldPrice: 800,

        catName: "Home",
        SubcatName: "Home Decor",
        innersubcatName: "Furnishing",

        rating: 4.4,

        discount: 38,

        variants: [
            {
                options: {
                    Size: "2x3 Feet"
                },

                sku: "HOME-FURNISH-008-FLOORMAT",

                price: 499,

                stock: 150,

                images: [
                    img("photo-1600166898405-da9535204843")
                ]
            }
        ]

    },



    {
        name: "Decorative Wall Tapestry",

        images: [
            img("photo-1513694203232-719a280e022f"),
            img("photo-1600607687939-ce8a6c25118c"),
            img("photo-1618220179428-22790b461013")
        ],

        brand: "Home Centre",

        description:
            "Stylish wall tapestry for modern home decoration.",

        price: 899,

        oldPrice: 1400,

        catName: "Home",
        SubcatName: "Home Decor",
        innersubcatName: "Furnishing",

        rating: 4.5,

        discount: 36,

        variants: [
            {
                options: {
                    Size: "Large"
                },

                sku: "HOME-FURNISH-009-TAPESTRY",

                price: 899,

                stock: 70,

                images: [
                    img("photo-1513694203232-719a280e022f")
                ]
            }
        ]

    },



    {
        name: "Premium Table Runner",

        images: [
            img("photo-1600607687939-ce8a6c25118c"),
            img("photo-1513694203232-719a280e022f"),
            img("photo-1600166898405-da9535204843")
        ],

        brand: "IKEA",

        description:
            "Elegant table runner for dining table decoration.",

        price: 699,

        oldPrice: 1000,

        catName: "Home",
        SubcatName: "Home Decor",
        innersubcatName: "Furnishing",

        rating: 4.5,

        discount: 30,

        variants: [
            {
                options: {
                    Length: "6 Feet",
                    Material: "Cotton"
                },

                sku: "HOME-FURNISH-010-TABLERUNNER",

                price: 699,

                stock: 80,

                images: [
                    img("photo-1600607687939-ce8a6c25118c")
                ]
            }
        ]

    },




];

module.exports = products;