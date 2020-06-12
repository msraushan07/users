const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
       
    },
    age: {
        type: Number,
        default: 0,
        required: true,
        lowercase: true,
        validate(value){
            if(value < 0){
                throw new Error('Age cannot be less than 0')
            }
        }
    },
    email:{
        type: String,
        validate(value){
        if(!validator.isEmail(value))
        {
          throw new Error('Invalid Email ID') 
        }
    }
},
     password: {
         type:String,
         trim: true,
         required: true,
         minLength: 7,
         validate(value){
             if(value.toLowerCase().includes('password'))
                throw new Error('Don\'t include "password"')
         }
     }


})
//Middleware to run 
userSchema.pre('save', async function(next) {       //call next() to end our function
        //const user = this                          //this has access to the document being send
        if(this.isModified("password")){
        this.password =await bcrypt.hash(this.password,8)
        }
         next()
})

const User = mongoose.model('User', userSchema)

module.exports = User