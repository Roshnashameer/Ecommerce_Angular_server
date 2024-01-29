const express=require('express')
const {jwtMiddleware}=require('../middlewares/jwtMiddlewares')
const { addToWishlist, wishlistItems, removeWishList } = require('../controles/wishlistsControl')
const { addToCart, cartItems, removeCart, emptyCart, incrementCart, decrementCart } = require('../controles/cartControls')
const { getProduct } = require('../controles/productConroles');
pController=require('../controles/productConroles')
userConrol=require('../controles/userControl')

const router=new express.Router()

router.get('/products/all',pController.getAllProducts)
router.post('/user/register',userConrol.register)
router.post('/user/login',userConrol.login)
// add to wishlist
router.post('/user/add-to-wishlist',jwtMiddleware,addToWishlist)
// get user wishlist
router.get('/user/wishlist-items',jwtMiddleware,wishlistItems)
// wishlist remove item
router.delete('/user/remove-wishlist/:_id',jwtMiddleware,removeWishList)
// add to cart
router.post('/user/add-to-cart',jwtMiddleware,addToCart)
// get user cart
router.get('/user/cart-items',jwtMiddleware,cartItems)
// cart remove item
router.delete('/user/remove-cart/:_id',jwtMiddleware,removeCart)

router.get('/user/get-product/:id',  getProduct);
// empty cart
router.delete('/user/empty-cart',jwtMiddleware,emptyCart)
// increment cart
router.get('/user/cart-increment/:id',jwtMiddleware,incrementCart)
// Decrement cart
router.get('/user/cart-decrement/:id',jwtMiddleware,decrementCart)


module.exports=router