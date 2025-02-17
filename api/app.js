import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
mongoose.set('debug',true);
mongoose.connect(process.env.CONNECT)
    .then(()=>{console.log("Connected to MongoDB successfully");
    })
const app=express();
app.listen(3000,()=>{
    console.log("server is runingg on port 3000");
});