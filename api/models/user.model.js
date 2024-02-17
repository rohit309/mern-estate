import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        requried:true,
        unique:true,
    },

    email:{
        type:String,
        requried:true,
        unique:true,
    },

    passoword:{
        type:String,
        requried:true,
    }
},{timestamps:true});

const User = mongoose.model('user', userSchema);

export default User;