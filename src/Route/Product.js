const router = require('express').Router();

const productCtrl = require('../Controller/Product')


router.post('/addProduct', productCtrl.addproduct)

router.get('/allProducts', productCtrl.getproducts);

router.delete('/deleteproduct/:productId', productCtrl.deleteproduct);

router.get('/specificProduct/:name', productCtrl.getProduct);


module.exports = router;