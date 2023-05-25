const mongoose = require("mongoose");
const validator = require("validator");


const UserSchema = mongoose.Schema({
    full_name:{
        type:String,
        required: true,
        minLength:3
    },
    email : {
        type : String,
        required : true,
        validate(value){
            if (!validator.isEmail(value)) {
                throw new Error("Invalid email");
            }
        }

    },
    phone :{
        type: Number,
        required : true,
        minLength: 10
    },
    country: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
})

const User = mongoose.model("User", UserSchema);

module.exports = User;