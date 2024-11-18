const { isAuth, isAdmin } = require('../../middlewares/auth')
const upload = require('../../middlewares/file')
const { getProducts, postProducts, putProdcuts, deleteProducts } = require('../controllers/products')

const productsRouter = require('express').Router()

productsRouter.get('/', getProducts)
productsRouter.post('/', [isAuth], upload.single('image'), postProducts)
productsRouter.put('/:id', [isAuth], upload.single('image'), putProdcuts)
productsRouter.delete('/:id', [isAuth], deleteProducts)

module.exports = productsRouter
