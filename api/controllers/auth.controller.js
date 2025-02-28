import User from "../models/user.model.js";
import bcrypt from "bcrypt";
// function for signup
export default function  signup(req,res){
    const {username,email,password} = req.body;
    const hashedPassword=bcrypt.hashSync(password,10);
    const newUser =new User({username:username,email:email,password:hashedPassword});
    newUser.save()
        .then(()=>res.status(201).send("User created successfully"))
        .catch(error=>res.status(500).send(error.message));
    // res.status(200).send("OK");
};
