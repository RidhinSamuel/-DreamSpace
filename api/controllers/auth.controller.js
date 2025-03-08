import User from "../models/user.model.js";
import errorHandler from "../utils/error.js";
import bcrypt from "bcrypt";
// function for signup
export default function  signup(req,res,next){
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
