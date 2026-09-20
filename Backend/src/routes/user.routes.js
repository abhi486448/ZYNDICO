const express = require("express")
const userRouter = express.Router()
const userContriller = require("../controller/user.controller")

/**
 * @route POST /api/auth/register
 * @description create user
 */
userRouter.post("/register", userContriller.registerUserController)

/**
 * @route POST /api/auth/login
 * @description login user
 */
userRouter.post("/login", userContriller.loginUserController)

module.exports = userRouter
