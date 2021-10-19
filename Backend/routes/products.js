const express=require('express')
const router=express.Router();

const productcontrollers=require('../controllers/products')

router.get('/products',productcontrollers.getallproducts)

router.get('/products/:pid',productcontrollers.getaproduct)

router.post('/newproduct',productcontrollers.createproduct)

router.put('/updateproduct',productcontrollers.updateproduct)

router.delete('/deleteproduct',productcontrollers.deleteproduct)


//PUT - name,email,password
//PATCH - name

module.exports=router





// SELECT name form Table 