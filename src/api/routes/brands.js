const { isAdmin, isAuth } = require('../../middlewares/auth')
const upload = require('../../middlewares/file')
const { getBrands, postBrand, putBrand, deleteBrand } = require('../controllers/brands')

const brandsRouter = require('express').Router()

brandsRouter.get('/', getBrands)
brandsRouter.post('/', [isAuth], upload.single('image'), postBrand)
brandsRouter.put('/:id', [isAuth], upload.single('image'), putBrand)
brandsRouter.delete('/:id', [isAuth], deleteBrand)

module.exports = brandsRouter
