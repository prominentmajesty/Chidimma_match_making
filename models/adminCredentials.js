var mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
var admin_Credential_Schema = new mongoose.Schema({
    userName : {
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

    tokens : [{
        access : {
            type : String,
            required : true
        },
        token : {
            type : String,
            required : true
        } 
    }]
});

admin_Credential_Schema.methods.generate_Auth_Token = function(){
    var user = this;
    var access = 'auth';
    var token = jwt.sign({_id : user._id.toHexString(), access}, 'abc123').toString();
    
    user.tokens.push({access, token});
    return user.save().then(()=>{
        return token; 
    });
}

admin_Credential_Schema.statics.find_By_Credentials = function(email, password){
    var Admin = this;

   return Admin.findOne({email}).then((admin)=>{
        if(!admin){
            return Promise.reject();
        }

        return new Promise((resolve, reject)=>{
            bcrypt.compare(password, admin.password, (err, ismatch)=>{
                
                if (ismatch){
                    resolve(admin);
                }else{
                    reject();
                }
            });
        });
    });
}

module.exports = AdminCredential = mongoose.model('AdminCredential', admin_Credential_Schema); 