import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"; //to import .env file
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
dotenv.config(); //to configure .env 

mongoose
    .connect(process.env.mongo) //calling mongo from .env
    .then(() => {
        console.log("conected to DB!");

    })
    .catch((err)=> {
        console.log(err);
    });

const app = express();

//to accept json formatted text for api
app.use(express.json());

app.listen(3000, () => {
    console.log('server is running on port 3000');
    }
)

app.use('/api/user',userRouter); //router for route/user.route.js
app.use('/api/auth',authRouter); 

//middleware for error
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "internal server errorrr";
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    });
});