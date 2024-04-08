import mongoose from 'mongoose';

//creation of schema
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

    password:{
        type:String,
        requried:true,
    }
},{timestamps:true});

//creation of user
const User = mongoose.model('user', userSchema);

//exporting User so we can import it and use it
export default User;