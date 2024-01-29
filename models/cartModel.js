const mongoose = require("mongoose")
const cartSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },
    rating: {
        rate: {
            type: Number,
            required: true
        },
        count: {
            type: Number,
            required: true
        }
    },
    quantity: {
        type: Number,
        required: true
    },
    grandTotal: {
        type: Number,
        required: true
    }
})
const carts = mongoose.model("carts", cartSchema)
module.exports = carts