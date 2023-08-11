const {Router} = require('express')
const { registerUser } = require('../Controllers/authController')

const userRouter = Router()

userRouter.post('/register', registerUser)


module.exports ={
    userRouter
}