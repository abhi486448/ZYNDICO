const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

async function registerUserController(req, res){
    const {username, email, password} = req.body

    const isUserAlreadyExist = await userModel.findOne({ email })

    if(isUserAlreadyExist){
        return res.status(409).json({
            message: "User already exist with this email"
        })
    }

    const hashPassword  = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        username, email, password: hashPassword
    })

    const token = jwt.sign(
        {
            userId: user._id
        },
        process.env.JWT_SECRET,
        { expiresIn: "1d"}
    )
    
    res.cookie("token", token)

    res.status(201).json({
        message: "user registered successfully",
        user
    })
}

async function loginUserController(req, res){
    const {email, password} = req.body

    const user = await userModel.findOne( { email })

    if(!user){
        return res.status(404).json({
            message: "user not found with this email"
        })
    }

    const ispassword =await bcrypt.compare(password, user.password)

    if(!ispassword){
        return res.status(401).json({
            message: "invalid user password"
        })
    }

    const token = jwt.sign(
        {
            userId: user._id
        },
        process.env.JWT_SECRET,
        { expiresIn: "1d"}
    )

    res.cookie("token", token)

    res.status(200).json({
        message: "user is logedin",
        user
    })
}

module.exports = {
    registerUserController,
    loginUserController
}