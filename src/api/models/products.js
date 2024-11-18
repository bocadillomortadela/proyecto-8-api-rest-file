const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: {
      type: String,
      required: true,
      enum: ['T-shirts', 'Pants', 'Shoes', 'Jackets', 'Hoodies']
    },
    size: {
      type: [String],
      enum: ['S', 'M', 'L', 'XL']
    }
  },
  {
    timestamps: true,
    collection: 'products'
  }
)

const Product = mongoose.model('products', productSchema, 'products')
module.exports = { Product }
