import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        require:[true,"Please provide a username"],
        unique:true,
    },
    email:{
        type:String,
        required:[true,"Please provide email"],
        unique:true,
    },
    password:{
        type:String,
        required:[true,"please provide password"],
    },
    isVerfied:{
        type:Boolean,
        default:false,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    forgotPasseodToken:String,
    forgotPasseodTokenExpiry:Date,
    verifyToken:String,
    verifyTokenExpiry:Date,
})

// here we are exporting model to mongoose
const User=mongoose.models.users||mongoose.model("users",userSchema)

export default User;

// here we are creating a model which can talk to our database and moongoose can talk to database

// model refer to how data is tructured and mandaged in a Next.js applicaiton like in the form of 
// Data Representaiton 2 Data Management 3 State Management 4 Validation and Transformation 5 Data Passing 6 API Integration 