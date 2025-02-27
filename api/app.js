import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.routes.js';
dotenv.config();
mongoose.set('debug',true);
mongoose.connect(process.env.CONNECT)
    .then(()=>{console.log("Connected to MongoDB successfully");
    })
    .catch(error=>{
        console.log("Error connecting to MongoDB",error);
    })
const app=express();

app.use("/api/user",userRouter);

app.listen(3000,()=>{
    console.log("server is runingg on port 3000");
});