import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
dotenv.config();

mongoose
    .connect(process.env.mongo)
    .then(() => {
        console.log("conected to DB!");

    })
    .catch((err)=> {
        console.log(err);
    });

const app = express();

//to accept json formatted text
app.use(express.json());

app.listen(3000, () => {
    console.log('server is running on port 3000');
    }
)

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "internal server errorrr";
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    });
});