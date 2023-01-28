const User = require('../models/userModel') ;
const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateToken');
const registerUser = asyncHandler(async(req , res)=>{
    const { name , email , password , pic} = req.body ;

    const userExists = await User.findOne({email})
    //if the user with this email already exist then throw error
    if(userExists){
        res.status(400) ;
        throw new Error('User already exist');
    }
    //if not exist create new user 
    const user = await User.create({
        name ,
        email,
        password,
        pic,
    })

    //if user is successfully created 
    if(user){
        res.status(201).json({
            _id:user._id ,
            name:user.name,
            email:user.email ,
            isAdmin:user.isAdmin,
            pic:user.pic,
            token : generateToken(user._id),
        })
    }
    else{
        res.status(400) ;
        throw new Error("Error Occured")
    }

}) ;

const authUser = asyncHandler(async(req , res)=>{
    const { name , email , password , pic} = req.body ;

    const user = await User.findOne({email}) ;
    if(user && (await user.matchPassword(password))){
        res.json({
            _id:user._id ,
            name:user.name,
            email:user.email ,
            isAdmin:user.isAdmin,
            pic:user.pic,
            token : generateToken(user._id),
        })
    }
    else{
        res.status(400) ;
        throw new Error("Invalid Email or password") ;
    }
  
}) ;

module.exports = {registerUser , authUser} ;