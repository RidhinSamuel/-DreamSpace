import User from "../models/user.model.js";
import errorHandler from "../utils/error.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
// function for signup
async function  signup(req,res,next){
    const {username,email,password} = req.body;
    const hashedPassword=bcrypt.hashSync(password,10);
    const newUser =new User({username:username,email:email,password:hashedPassword});
    newUser.save()
        .then(()=>res.status(201).json({message:"User created successfully"}))
        // .catch(error=>next(error));
        .catch(error=>{
            console.log("The Error from controller",error);
            next(errorHandler(500,error.message))
        });
    // res.status(200).send("OK");
};
async function signin(req,res,next){
    const {email,password} = req.body;
    console.log(email,password);
    try {
        const validUser=await User.findOne({email:email});
        // const hashedPassword=bcrypt.hashSync(password,10);
        if (!validUser)
            return next(errorHandler(404,"Wrong Credentials!"));
        const isValidPassword=bcrypt.compareSync(password,validUser.password);
        if (!isValidPassword)
            return next(errorHandler(401,"Wrong Credentials!"));
        const {password:a ,...user}=validUser._doc;
        const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET)
        res.cookie('access_token',token,{httpOnly:true,expires:new Date(Date.now()+24*60*60*1000)})
           .status(200)
           .json(user);
    } catch (error) {
        next(errorHandler(500,error.message))
    }
}
export {signup,signin};  //exporting the functions
