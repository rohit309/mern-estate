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
    },

    avatar:{
        type:String,
        default: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
    }
},{timestamps:true});

//creation of user
const User = mongoose.model('user', userSchema);

//exporting User so we can import it and use it
export default User;