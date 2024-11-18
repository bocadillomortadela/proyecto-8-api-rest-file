const { isAuth, isAdmin } = require('../../middlewares/auth')
const { getUsers, register, login, updateUserRole, deleteUser } = require('../controllers/users')

const userRoutes = require('express').Router()

userRoutes.get('/', [isAdmin], getUsers)
userRoutes.post('/register', register)
userRoutes.post('/login', login)
userRoutes.put('/update/:userId', [isAdmin], updateUserRole)
userRoutes.delete('/delete/:userId', [isAuth], deleteUser)

module.exports = { userRoutes }
