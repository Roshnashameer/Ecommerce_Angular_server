const wishlists = require("../models/wishListModel")
exports.addToWishlist = async (req, res) => {
    // userId
    const userId = req.payload
    // product data
    const { id, title, price, description, category, image, rating } = req.body
    try {
        const existingProduct = await wishlists.findOne({ id, userId })
        if (existingProduct) {
            res.status(406).json("product already in your wishlist")
        }
        else {
            const newProduct = new wishlists({
                userId, id, title, price, description, category, image, rating
            })
            await newProduct.save()
            res.status(200).json(newProduct)
        }
    }
    catch (err) {
        res.status(401).json(err)
    }
}
exports.wishlistItems = async (req, res) => {
    const userId = req.payload
    try {
        const products = await wishlists.find({ userId })
        if (products) {
            res.status(200).json(products)
        }
    }
    catch (err) {
        res.status(401).json(err)
    }
}
exports.removeWishList = async (req, res) => {
    const { _id } = req.params
    try {
        const removeItem = await wishlists.findByIdAndDelete({ _id })
        res.status(200).json(removeItem)
    }
    catch (err) {
        res.status(401).json(err)
    }
}