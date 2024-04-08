import { errorHandler } from '../../utils/error.js'; 
import User from '../models/user.model.js';  //importing User model
import bcryptjs from 'bcryptjs' //for encrypting password
import jwt from 'jsonwebtoken'; //

export const signup = async (req, res,next) => {
    const { username, email, password } = req.body;
    const hashedpassword = bcryptjs.hashSync(password, 10);
    const newUser = new User ({ username, email, password: hashedpassword});
    try {
        await newUser.save() //save in data base
        res.status(201).json("user crated successfully");  //201 something is crated
        
    } catch (error) {
        next(error);  //redirecting error to middleware
        //next(errorHandler(550,'error from the function'))
    } 
}

export const signin = async (req, res, next) => {
    const {email,password} =  req.body;
    try{
        const validUser = await User.findOne({email});
        if (!validUser) return next(errorHandler(404, 'User not found!'));
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) return next(errorHandler(401, 'Wrong creadentials!'));
        const token = jwt.sign({id:validUser._id}, process.env.JWT_SECRET);  //adding cookie and passing secrate token
        const {password:pass, ...rest} = validUser._doc;  //to remove password from res try without ._doc once
        res
        .cookie('access_token', token, { httpOnly:true})   //addin
        .status(200)
        .json(rest);
        // "Remember Me" for 15 minutes res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
        // save as above res.cookie('rememberme', '1', { maxAge: 900000, httpOnly: true })
        
    }
    catch(error){
        next(error); //error handing from middleware
    }

}