const mongoose = require ('mongoose');
const bcrypt = require ('bcrypt')

const Schema = mongoose.Schema;

const UseSchema = Schema({
    username:{
        type:String,
        required:[true,"user name"]
    },
    email:{
        type:String,
        required:[true,"email"],
        unique:true,
        match:[A-Za-z0-9]
    },
    password:{
        type:String,
        required:true
    }
})
UserSchema.pre("save",async function(){
    let salt = await bcrypt.getSalt(10);
    this.password = await bcrypt.hash(this.password,salt)

});

UserSchema.methods.checkpassword = function(argument){
    let ok =bcrypt.compare(argument,this.password);
    return ok
}
module.exports = mongoose.model('user',UseSchema)