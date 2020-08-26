var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var _ = require('lodash');
var bcrypt = require('bcrypt');
var userSchema = new mongoose.Schema({
    surName : {
        type : String,
        required : true
    },
    firstName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    contact : {
        type : String,
        required : true
    },
    dateOfBirth : {
        type : String,
        required : true
    },
    proffession : {
        type : String,
        required :true,
    },
    skills : {
        type : String,
        required : true
    },
    imageFile : {
        data : Buffer,
        contentType : String
    },
    /*tokens :[{
        access : {
            type : String,
            required : true  
        },
        token : {
            type : String,
            required : true
        }
    }]*/
});

/*userSchema.methods.toJSON = function(){
    var user = this;
     userObject = user.toObject();
     return _.pick(userObject,['_id','email']);
} 

userSchema.methods.generateAuthToken = function (){
    var user = this;
    var access = 'auth';
    var token = jwt.sign({_id : user._id.toHexString(),access},'abc123').toString();
    user.tokens.push({access,token});
   return user.save().then(()=>{
        return token;
    });
};
 
userSchema.statics.findByCredentials = function(email, password){
    var Users = this;
   return Users.findOne({email}).then((user)=>{
        if(!user){ 
            return Promise.reject('User Name Does Not Match');
        }

        return new Promise((resolve, reject)=>{
            bcrypt.compare(password, user.password, (err,res)=>{
                if(res){
                    resolve(user);
                }else{
                    reject('Password Does Not Match');
                }
            });  
        });
   });
}
userSchema.statics.findByToken = function(token){
    var Users = this;
    var decoded;
    try{
       decoded = jwt.verify(token,'abc123');

    }catch(e){
            console.log('Error');
    }
    return Users.findOne({
        '_id': decoded._id,
        'tokens.token' : token,  
        'tokens.access' : 'auth'
    });
}; */
module.exports = Users = mongoose.model('Users',userSchema);