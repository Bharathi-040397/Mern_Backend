const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
	{
	   name: {
			type: 'String',
			required: true,
			trim: true,
			maxlength: 60,
			unique:true,
		},
		description: {
			type: 'String',
			required: true,
		},
		stock : {
			type: 'String',
			required: true,
		},
		price: {
			type: 'String',
			required: true,
		}
		
	},
	{ timestamps: true }
);

module.exports= mongoose.model('Product', ProductSchema);
