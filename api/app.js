// importing required modules
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// importing routes
import userRouter from './routes/user.routes.js';
import  {signUpRouter}  from './routes/auth.routes.js';
// env configuration
dotenv.config();
// creating express object
const app=express();
//using middleware 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// connecting to database
mongoose.connect(process.env.CONNECT)
.then(()=>{console.log("Connected to MongoDB successfully");
})
.catch(error=>{
    console.log("Error connecting to MongoDB",error);
})
//seting debug for mongoose remove it in production
mongoose.set('debug',true);
//using routes
app.use("/api/user",userRouter); //testing route
app.use("/api/auth",signUpRouter) // sign up route

//listening to port
app.listen(3000,()=>{
    console.log("server is runingg on port 3000");
});