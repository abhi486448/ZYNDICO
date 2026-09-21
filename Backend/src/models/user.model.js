const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
    },

    email: {
        type: String,
        unique: [true, "user already exist with this email"],
        require: true,
    },

    password: {
        type: String,
        require: true,
    },

    role: {
        type: String,
        default: "user",
        enum: ["user","Admin"],
    },

    addresses: {
        type: String,
    }


})

const userModel = mongoose.model("users", userSchema)

module.exports = userModel