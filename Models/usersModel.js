const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please inset your username"],
        unique: true,
        minLength: [3, "Username must be at least 3 characters long"],
        maxLength: [10, "Username can't have more than 10 characters"]
    },
    email: {
        type: String,
        required: [true, "Please inset your email"],
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: [true, "Please inset your password"],
    },
    coins: {
        type: Number
    },
    completedLogos: {
        type: Array
    },
    redeemedCategories:{
        type: Array
    },
    redeemedLevel:{
        type: Array
    }
})

const usersModel = mongoose.model(
    "users", userSchema
)

module.exports = usersModel;