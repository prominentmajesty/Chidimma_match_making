var {Users} = require('../models/users');
var authenticate = (req, res, next)=>{
     if(!req.user){
        res.redirect('/');
     }else{
         next();
     }
      
    /*var token = req.header('x-auth');
    console.log('Your Token from The Header is : ' + token);
    if(token === undefined){
        console.log('Token Is Undefined');
        res.render('index',{
            title : 'Home',
            style : 'user.css',
            script : 'user.js'
        });
        console.log('Token is Undefined');
    }else{

        Users.findByToken(token).then((user)=>{
            if(!user){
                console.log('Please Try Again');
            }
            
            req.user = user;
            req.token = token;
            next()
   
        }).catch((e)=>{
            console.log('Please You Have An Error');
        });

    }*/
}
module.exports = {authenticate};