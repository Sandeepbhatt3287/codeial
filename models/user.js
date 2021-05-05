const mongoose = require ('mongoose');

const userSchema = new mongoose.Schema(
    {
        email:{
            type :String,
            Required: true,
            unique: true
        },
        password:{
            type: String,
            required : true
        },
        name:{
            type:String,
            required:true
        }
    },
     {
        timestamps:true
    });

    const user =mongoose.model('User',userSchema);
    module.exports = User;