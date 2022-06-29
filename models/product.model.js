const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name : {type: String, required: true, trim: true, },
  variety : {type: String, required: true, trim: true,  },
  quantity : {type: String, required: true, trim: true,  },
  price : {type: String, required: true, trim: true,  },
  category : {type: String, required: true, trim: true, },
  ownerId : {type: String, required: true, trim: true, },
  }, 
{
  timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;