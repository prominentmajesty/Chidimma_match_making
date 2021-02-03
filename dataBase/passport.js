const LocalStrategy = require('passport-local').Strategy;
const Users = require('../models/users');
const AdminCredentials = require('../models/adminCredentials');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//load User Model
module.exports = function(passport){
    passport.use('users', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback: true
    }, (req,email, password, done)=>{
        Users.findOne({email : email}).then(user =>{
            if(!user){
                return done(null, false, req.flash('error_msg', 'Incorrect Email Address !!')/*{msg : 'User not registered'}*/)
            }
            bcrypt.compare(password, user.password, (err, isMatch)=>{
                if(err) throw err;
                    
                if(isMatch){
                    return done(null, user);
                }else{
                    return done(null, false, req.flash('error_msg', 'Incorrect Password !!') /*{msg : 'Incorrect Password'}*/);
                }
            });
        }).catch(err =>{
            console.log(err);
        });
    })); 

    passport.serializeUser(function(user, done) {
        done(null, user.id);
        });
        
    passport.deserializeUser(function(id, done) {
    Users.findOne({_id : id}, function(err, user) {
        done(err, user);
        });
    });
}    
    
  /*  passport.serializeUser(function(user, done) {
        done(null, user.id);
      });
      
      passport.deserializeUser(function(id, done) {
        Users.findOne({_id : id}, function(err, user) {
          done(err, user);
        });
      });*/

     /* passport.use('adminCredentials', new localStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, (req, email, password, done) =>{
        AdminCredentials.findOne({email : email}, function (err, admin) {
            if (err) {
                return done(err);
            }

            if (!admin) {
                return done(null, false, req.flash('failure_msg', 'Incorect Username'));
            }
            bcrypt.compare(password, admin.password, (err, isMatch) => {
                if (err) {
                    return done(err);
                }
                if (!isMatch) {
                    return done(null, false, req.flash('failure_msg', 'Incorrect Password'));
                } 
                    return done(null, admin);
            });
        });
    }));*/

    /*function SessionConstructor(userId, userGroup, details) {
        this.userId = userId;
        this.userGroup = userGroup;
        this.details = details;
    }

    passport.serializeUser(function (userObject, done) {
        let userGroup = "users";
        let userPrototype =  Object.getPrototypeOf(userObject);

        if (userPrototype === Users.prototype) {
            userGroup = "users";
        } else if (userPrototype === AdminCredentials.prototype) {
            userGroup = "adminCredentials";
        } 

        let sessionConstructor = new SessionConstructor(userObject.id, userGroup, '');
        done(null,sessionConstructor);
    });

    passport.deserializeUser(function (sessionConstructor, done) {
        if (sessionConstructor.userGroup =='users') {
            Users.findOne({
                _id: sessionConstructor.userId
            }, '-localStrategy.password', function (err, user) { // When using string syntax, prefixing a path with - will flag that path as excluded.
                done(err, user);
            });
        } else if (sessionConstructor.userGroup =='adminCredentials') {
            AdminCredentials.findOne({
                _id: sessionConstructor.userId
            }, '-localStrategy.password', function (err, admin) { // When using string syntax, prefixing a path with - will flag that path as excluded.
                done(err, admin);
            });
        }
    });
}*/

/* 
 passport.serializeUser((obj, done) => {
        if (obj instanceof Users) {
          done(null, { id: obj.id, type: 'Users' });
        } else {
          done(null, { id: obj.id, type: 'AdminCredentials' });
        }
      });
      
      passport.deserializeUser((obj, done) => {
        if (obj.type === 'Users') {
          Users.findOne({_id:obj.id}).then((user) => done(null, user));
        } else {
          AdminCredentials.findOne({_id:obj.id}).then((admin) => done(null, admin));
        }
      });
*/
   /* function SessionConstructor(userId, userGroup, details){
        this.userId = userId;
        this.userGroup = userGroup;
        this.details = details;
    }

    passport.serializeUser(function(userObject, done){
        let userGroup = "users";
        let userPrototype = Object.getPrototypeOf(userObject);
        
        if(userPrototype === Users.prototype){
            userGroup = "users";
        }
        let sessionConstructor = new SessionConstructor(userObject.id, userGroup,'');
        done(null,sessionConstructor);
    });

    passport.deserializeUser(function(sessionConstructor, done){
        if(sessionConstructor.userGroup == 'users'){
            Users.findOne({
                _id : sessionConstructor.userId
            },'-localStrategy.password', function(err, user){
                done(err, user);
            });
        }
    })
}*/

/*module.exports = function(passport){
    passport.use(new localStrategy({usernameField : 'email'},(email, password, done)=>{
        User.findOne({email : email}).then((user)=>{
            if(!user){
                return done(null, false, {message : 'Your Email Does Not Match'});
            }

            bcrypt.compare(password,user.password, (err, isMatch)=>{
                if(err) throw err;

                if(isMatch){
                    return done(null, user);
                }else{
                    return done(null, false, {message : 'Your Password Does Not Match !!'});

                }
            });

        }).catch((err)=>{
            console.log(err);
        });
    }));
}*/