const { deleteFile } = require('../../utils/deleteFile')
const { Product } = require('../models/products')

const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find()
    return res.status(200).json(products)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const postProducts = async (req, res, next) => {
  try {
    const newProducts = new Product(req.body)
    if (req.file) {
      newProducts.image = req.file.path
    }
    const productSaved = await newProducts.save()
    return res.status(201).json(productSaved)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const putProdcuts = async (req, res, next) => {
  try {
    const { id } = req.params
    const newProducts = new Product(req.body)
    newProducts._id = id

    if (req.file) {
      newProducts.image = req.file.path
      const oldProducts = await Product.findById(id)
      deleteFile(oldProducts.image)
    }

    const productUpdated = await Product.findByIdAndUpdate(id, newProducts, { new: true })
    return res.status(200).json(productUpdated)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const deleteProducts = async (req, res, next) => {
  try {
    const { id } = req.params
    const productsDeleted = await Product.findByIdAndDelete(id)
    deleteFile(productsDeleted.image)
    return res.status(200).json(productsDeleted)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

module.exports = { getProducts, postProducts, putProdcuts, deleteProducts }
