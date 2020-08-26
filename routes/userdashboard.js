var express = require('express');
var adminData = require('../models/adminData');
var PDF = require('../models/pdfData');
var Vedio = require('../models/vedios');
var {authenticate} = require('../dataBase/auth');

var router = express.Router();

router.get('/userdashboard', authenticate, (req, res)=>{
    if(req.user){
        adminData.find({}, (err, doc)=>{
            if(err){
              return console.log(err);
            }
            PDF.find({}, (err, pdf)=>{
                if(err){
                   return console.log(err);
                }
                Vedio.find({}).then((videos_mp4)=>{
                    console.log(videos_mp4); 
                    res.render('userdashboard',{
                        title : 'Dashboard-User',
                        style : 'userdashboard.css',
                        script : 'userdashboard.js',
                        user : req.user,
                        image : req.user.imageFile,
                        doc,
                        pdf,
                        videos_mp4
                    })
                },(err)=>{
                    console.log(err);
                });
            });
        });
    }
});
router.get('/logout', (req, res)=>{
    req.logout();
    req.flash('success_msg', 'You Are Logged out');
    res.redirect('/');
});
module.exports = router;