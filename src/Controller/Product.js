const Product = require('../Model/Product');

const productCtrl = {
    addproduct: async (req, res) => {
        console.log(req.body);
        const { name,description,stock,price } = req.body;
        const check = await Product.findOne({ name });
        if (check) return res.status(400).json({ msg: `${check.name} already exists` })
                const product = new Product({
                    name,
                    price,
                    description,
                    stock,
                   })
                product.save()
                    .then(product => {
                           res.json({ product, msg: `${product.name} is added` });
                            
                        })
                    .catch(err => {
                return res.status(201).json({ msg: err.message })
                    
            })
    },

    getproducts: async (req, res) => {
        await Product.find()
              .sort("-createdAt")
                .then(products => {
                    res.json({
                        products
                    })
                   
                })
                .catch(err => {
                    return res.status(201).json({ msg: err.message })
                })
	
		
    },
    
    deleteproduct: (req, res) => {
        console.log(req.params.productId);
        Product.findOne({ _id: req.params.productId })
            .then(product => {
                product.remove()
                    .then(Products => {
                        res.json({ Products, msg: `${Products.name} is deleted` });
                       
                    })
                   
            }).catch(err => {
                return res.status(201).json({ msg: err.message });
     
            })
    },

    getProduct: async (req, res) => {
        await Product.findOne({ name: req.params.name })
			.then(product => {
				res.json({
					product
                })
                
			})
			.catch(err => {
				return res.status(201).json({ msg: err.message })

			})
	},
                
                
}

            

module.exports=productCtrl