// const dbConnection = require("../config/dbConnect");
// const Product = require("../models/product");

// async function getProducts(req, res) {
//     const product = new Product();
//     try {
//         const products = await product.getProducts();
//         res.json(products[0][0]);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// } 

// async function getProductById(req, res) {
//     const product = new Product();
//     try {
//         const products = await product.getProductById(req.params.id);
//         res.json(products[0][0]);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ error: error.message });
//     }
// }

// // async function createProduct(req, res) {
// //     const product = new Product();
// //     try {
// //         const products = product.createProduct(req.body);
// //         res.json(products[0][0]);
// //     } catch (error) {
// //         res.status(500).json({ error: error.message });
// //     }
// // }
// async function createProduct(req, res) {
//     const product = new Product();
//     try {
//         await product.createProduct(req.body); // ✅ Use `await` to ensure query executes
//         res.json({ message: "Product added successfully!" }); // ✅ Return a success message
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// }


// async function updateProduct(req, res) {
//     const product = new Product();
//     try {
//         const products = product.updateProduct(req.params.id, req.body);
//         res.json(products[0][0]);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// }

// async function deleteProduct(req, res) {
//     const product = new Product();
//     try {
//         const products = product.deleteProduct(req.params.id);
//         res.json(products[0][0]);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// }

// module.exports = {
//     getProducts,
//     getProductById,
//     createProduct,
//     updateProduct,
//     deleteProduct
// }

const Product = require("../models/product");

async function getProducts(req, res) {
    const product = new Product();
    try {
        const products = await product.getProducts();
        if (!products[0] || products[0].length === 0) {
            return res.status(404).json({ error: "No products found" });
        }
        res.json(products[0]); // ✅ Return all products correctly
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getProductById(req, res) {
    const product = new Product();
    try {
        const products = await product.getProductById(req.params.id);
        if (!products[0] || products[0].length === 0) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.json(products[0][0]); // ✅ Return product if found
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function createProduct(req, res) {
    const product = new Product();
    try {
        await product.createProduct(req.body); // ✅ Ensure query executes
        res.json({ message: "Product added successfully!" }); // ✅ Return success message
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function updateProduct(req, res) {
    const product = new Product();
    try {
        await product.updateProduct(req.params.id, req.body); // ✅ Use `await`
        res.json({ message: "Product updated successfully!" }); // ✅ Return success message
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function deleteProduct(req, res) {
    const product = new Product();
    try {
        await product.deleteProduct(req.params.id); // ✅ Use `await`
        res.json({ message: "Product deleted successfully!" }); // ✅ Return success message
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};
