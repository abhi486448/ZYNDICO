const userModel = require("../models/user.model")

async function registerUserController(req, res){
    const {name, email, password} = req.body

    const user = await userModel.create({
        name, email, password
    })


    res.status(201).json({
        message: "user registered successfully",
        user
    })
}

async function loginUserController(req, res){
    const {email, password} = req.body

    const user = await userModel.findOne( { email })

    if(!user){
        return res.status(409).json({
            message: "user not found with this email"
        })
    }

    const ispassword = (password === user.password)

    if(!ispassword){
        return res.status(409).json({
            message: "invalid user password"
        })
    }

    res.status(200).json({
        message: "user is logedin",
        user
    })
}

module.exports = {
    registerUserController,
    loginUserController
}