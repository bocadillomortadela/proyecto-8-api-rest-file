const mongoose = require('mongoose')

const brandSchema = new mongoose.Schema(
  {
    brandName: { type: String, required: true },
    image: { type: String, required: true },
    products: [{ type: mongoose.Types.ObjectId, ref: 'products', required: false }]
  },
  {
    timestamps: true,
    collection: 'brands'
  }
)

const Brand = mongoose.model('Brand', brandSchema, 'Brand')
module.exports = { Brand }
