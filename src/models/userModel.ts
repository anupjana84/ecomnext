import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:[3,'Enter min 3 Chars']
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:[3,'enter min 3 character']
    }

})

const User =mongoose.models.users || mongoose.model('user', userSchema)
export default User