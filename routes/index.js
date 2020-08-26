var express = require('express');
var Users = require('../models/users');
var adminData = require('../models/adminData');
var bcrypt = require('bcrypt');
var multer = require('multer');
var fs = require('fs');
var _ = require('lodash');
var passport_User = require('passport');
var router = express.Router();

const storage = multer.diskStorage({
    destination : (req, res, callback)=>{
        callback(null, './public/uploads');
    },
    filename : (req, file, callback)=>{
        callback(null, file.originalname);
    }
});
const upload = multer({
    storage
});

router.get('/', function(req, res){
    var error_msg = req.flash('error_msg');

    res.render('index',{
        title : 'Home',
        style : 'user.css',
        script : 'user.js',
        error_msg
    });
});

router.post('/postData', upload.single('customFile'), (req, res)=>{
    var file = req.file;
    var surname = req.body.surname;
    var firstname = req.body.firstname;
    var email = req.body.email;
    var password = req.body.password;
    var contact = req.body.contact;
    var dateofbirth = req.body.dateofbirth;
    var proffession = req.body.forProffession;
    var skills = req.body.skills;
    console.log(firstname);
    Users.findOne({email : email}, (err, returnEmail)=>{
        
        if(err){
           console.log(`Error : ${err}`);
           return res.status(501).send(err);
        
        }else if(returnEmail){
            console.log('email already exist !!');
            return res.status(404).json({msg : 'Email Adress Already Exist !!'});
        
        }else{

            bcrypt.genSalt(10, (err, salt)=>{
                
                if(err){
                     console.log(err);
                }else{
                    bcrypt.hash(password, salt, (err,hash)=>{
                        if(err){
                            console.log(`Erro : ${err}`);
                        }else{
                            const users = new Users({
                                surName : surname,
                                firstName : firstname,
                                email : email,
                                password : hash,
                                contact : contact,
                                dateOfBirth : dateofbirth,
                                proffession : proffession, 
                                skills : skills
                            });                       
                            users.imageFile.data = fs.readFileSync(file.path);
                            users.save().then((user)=>{
                                fs.unlink(file.path, (err)=>{
                                    if(err) {
                                    
                                        throw err
                                    }
                                });
                                console.log(user);
                               res.status(200).json({user});
                               // return users.generateAuthToken();
                           // }).then((token)=>{
                               // res.header('x-auth',token).json({data:users});
                               // console.log(users);
                               // console.log(token);
                            }).catch((err)=>{
                                console.log(err);
                                res.status(400).json({err});
                            });
                        }
                    });
                }

            });
        }
    });
});
router.post('/postLoginData', (req, res,next)=>{
    passport_User.authenticate('users',{
        successRedirect : '/userdashboard/userdashboard',
        failureRedirect : '/',
        failureFlash : true
    })(req, res, next);

    /*var body = _.pick(req.body, ['loginEmail','loginPassword']);
    console.log(req.body.email);
    console.log(req.body.password);
    Users.findByCredentials(req.body.email, req.body.password).then((user)=>{

        return user.generateAuthToken().then((token)=>{
          
        return  res.header('x-auth',token).render('admindashboard',{
                title : 'Dashboard-Admin',
                style : 'admindashboard.css',
                script : 'admindashboard.js',
                data : user
        });
           
            console.log(user);
            console.log(token);
         
        });                 
    }).catch((e)=>{
        
        console.log(e);
        res.status(400).render('index',{
            title : 'Home',
            style : 'user.css',
            script : 'user.js',
            e
        });
     });*/
 })
module.exports = router;