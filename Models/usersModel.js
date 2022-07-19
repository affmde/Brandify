const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    coins: {
        type: Number
    },
    completedLogos: {
        type: Array
    }
})

const usersModel = mongoose.model(
    "users", userSchema
)

module.exports = usersModel;