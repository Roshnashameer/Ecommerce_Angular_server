const products = require("../models/productsModel")

exports.getAllProducts = async (req, res) => {
    try {
        const allProducts = await products.find()
        res.status(200).json(allProducts)
    }
    catch (err) {
        res.status(401).json(err)
    }
}
exports.getProduct = async (req, res) => {
    const { id } = req.params;
    
    try {
        const productData = await products.findOne({ _id:id });
        // console.log('Product Data:', productData);
        res.status(200).json(productData)
    }
    catch (err) {
        res.status(401).json(err)
    }
}