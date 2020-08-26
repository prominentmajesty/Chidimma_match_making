var express = require('express');
var Users = require('../models/users');
var AdminData = require('../models/adminData');
var {authenticate} = require('../dataBase/auth');
//var {security} = require('../dataBase/admin_auth');
var _ = require('lodash');
var PDF = require('../models/pdfData');
var Vedio = require('../models/vedios');
var AdminCredential = require('../models/adminCredentials');
var path =  require('path');
var multer2 = require('multer');
var multer = require('multer');
var  bcrypt = require('bcrypt');
var fs = require('fs');
/*
 fs.unlink(path.join("public/pdf/" + doc.fileName), (err)=>{
            if(err){
                throw err
            }
*/
var router = express.Router();

const storage = multer.diskStorage({
    destination : (req, res, callBack)=>{
        callBack(null, './public/pdf');
    },
    filename : (req, file, callBack)=>{
        callBack(null, file.originalname);
    }
});
const upload = multer({
    storage 
});

const video_storage = multer2.diskStorage({
    destination : (req, res, callBack)=>{
        callBack(null, './public/video');
    },
    filename : (req, file, callBack)=>{
        callBack(null, file.originalname);
    }
});
const video_upload = multer2({
    video_storage
});

const vedio_image = multer.diskStorage({
    destination : (req, res, callBack)=>{
        callBack(null, './public/videos/videoImages');
    },
    filename : (req, res, callBack)=>{
        callBack(null, file.originalname);
    }
});
const vedio_image_upload = multer({
    vedio_image
});

router.get('/adminSignUp', (req, res)=>{
    res.render('adminSignUp', {
        title : 'Sign Up Admin',
        style : 'adminSignUp.css',
        script : 'adminSignUp.js'
    });
});

router.get('/adminLogin', (req, res)=>{
    var failure_msg = req.flash('failure_msg');
    res.render('adminLogin', {
        title : 'Login Admin',
        style : 'adminLoginCss.css',
        script : 'adminLoginJs.js',
        failure_msg
    });
});

/*router.get('/admindashboard', (req, res)=>{
    
});*/

router.get('/autocomplete/', function(req, res, next){

    var regex = new RegExp(req.query["term"], 'i');
    var get_Result = Vedio.find({title : regex},{'title' : 1}).sort({"createdAt" : -1});
    get_Result.exec(function(err,data){
        var result = [];
        if(!err){
            if(data && data.length && data.length > 0){
                data.forEach(user=>{
                    let obj = { 
                        id : user._id,
                        label : user.title
                    };
                    result.push(obj);
                });
            }
            res.jsonp(result);
        }
    });
});

router.post('/search_on_event', (req, res)=>{
    var search_value = req.body.server_value;
    console.log(search_value);
    Vedio.findOne({title : search_value}).then((doc)=>{
        console.log(`Your Search Data Is ${doc}`);
        res.status(200).send(doc);
    }).catch((err)=>{
        console.log(err);
        res.status(401).send(err);
    });
});

router.get('/retrieveData', (req, res)=>{
    PDF.find({}).then((data)=>{
        res.status(200).json(data);
    },(err)=>{
        console.log(err);
        res.status(400).json(err);
    });
});

router.delete('/getrequest:id', (req, res)=>{
    AdminData.deleteOne({_id : req.params.id}).then((removedItem)=>{
        res.status(200).json({
            removedItem,
            msg : 'Successfuly Deleted !!'
        });
    }, (err)=>{
        console.log(err);
    });
});

router.post('/postMatched', (req, res)=>{
    var adminData = new AdminData({
        ID : req.body.userID,
        email : req.body.userEmail, 
        skills : req.body.userSkills,
        contact : req.body.userContact,
        proffession : req.body.userProffession
    });
    adminData.save().then((returnData)=>{
        console.log(returnData);
        res.status(200).json({
            returnData
        });
    },(err)=>{
        console.log(err);
        res.status(500).json({
            msg : 'Marging proccess failed !!'
        });
    });
});

router.delete('/delete_pdf', (req, res)=>{
    var id = req.body.get_id;
    var hide_file_name = req.body.get_file_name;
    PDF.findOneAndDelete({_id : id}).then((success)=>{
        fs.unlinkSync(path.join("public/pdf/" + hide_file_name));
        console.log(`All these docs : ${success} have been successfuly deleted`);
        res.status(200).json({msg : 'Documents Were Deleted Successfuly'});
    }).catch((err)=>{
        console.log(err);
        res.status(400).json({msg : 'Error In deleting Document'});
    });

});

router.delete('/delete_video:id', (req, res)=>{
    let id = req.params.id
    let get_file_name = req.body.get_file_name;
    let formate_extn = get_file_name.slice(0,-4);
    let make_String = '.JPG';
    const concate_ = formate_extn + make_String;
    
    Vedio.findOneAndDelete({_id : id}).then(()=>{
        console.log('Document Successfuly deleted');
        fs.unlinkSync(path.join("public/video/" + get_file_name));
        fs.unlinkSync(path.join("public/video/video_images/" + concate_ ));
        res.status(200).json({msg : 'Document Successfuly deleted'});
    }, (err)=>{
        console.log(err);
        res.status(200).json({err});
    });
}); 

router.post('/pdf', upload.single('inputFileForPdfUpload'), (req, res)=>{
    var file = req.file;
    var fileName = req.file.originalname;
    console.log(fileName);
    console.log(file);
    
    var pdf = new PDF({
        title : req.body.inputForPdfUpload,
        fileName : fileName
    });  
  
    pdf.save().then((data)=>{
        console.log(data);
        res.status(200).json({
            msg : 'file successfuly uploaded'
        });
    }).catch((err)=>{
        console.log(err);
        res.status(400).json({err});
    });
});

router.post('/vedio_upload', video_upload.single('input_File_For_Video_Upload'), (req, res)=>{
    var title = req.body.input_For_Video_Upload;
    var file = req.file;
    var filename = req.file.originalname;
    console.log(filename);
    console.log(file);

    var vedio = new Vedio({
        title : title,
        fileName : filename,
        fileImage : filename
    });
    vedio.save().then((doc)=>{
        console.log(doc);
        res.status(200).json({
            msg : 'Vedio Successfuly Uploaded'
        })
    },(err)=>{
        console.log(err);
        res.status(400).json({
            err 
        });
    });
});

router.post('/vedio_image_upload', vedio_image_upload.single('input_File_For_Video_Imager_Upload'), (req, res)=>{
    var image_name = req.file.originalname; 
    image_formate = image_name.slice(0,-4);
    var make_String = '.mp4'
    var mp4_format = image_formate + make_String;
    console.log(mp4_format);
    
    Vedio.updateOne({title : image_formate}, {
        $set : {fileImage : mp4_format}, 
        $currentDate : {
            createdAt : true
        }
    },
        {new : true
    }).then((doc)=>{
        console.log(doc);
        res.status(200).json({msg : 'Image Vedio Successfuly Uploaded'});
    })
    .catch((err)=>{
        console.log(err);
        res.status(400).json({err})
    });
});
 
router.post('/sign_upmin', (req, res)=>{
    console.log(req.body.email); 
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var contact = req.body.contact;

    bcrypt.genSalt(10,(err, salt)=>{
        if(err){
            return console.log(err);
        }
        bcrypt.hash(password,salt, (err,hash)=>{
            if(err){
                console.log(`Error : ${err}`);
            }else{
                var adminCredential = new AdminCredential({
                    userName : username,
                    email : email,
                    password : hash,
                    contact : contact
                }); 
                adminCredential.save().then((admin)=>{
                    return admin.generate_Auth_Token();
                }).then((token)=>{
                    console.log(token);
                    res.status(200).json({msg : 'Admin Succesfuly Registered'});
                }).catch((err)=>{  
                    console.log(err);
                    res.status(500).json({err_msg : 'Resgistration Failed'});
                });
            }
        });
    });
});

router.post('/login', function(req, res){
    var body = _.pick(req.body, ['email', 'password']);

    AdminCredential.find_By_Credentials(body.email, body.password).then((admin)=>{
        return admin.generate_Auth_Token().then((token)=>{
            Users.find({}, (err, users)=>{
                if(err){
                    return console.log(err);
                }
                AdminData.find({},(err, doc)=>{
                    if(err){
                        console.log(err);
                    }else{
                        PDF.find({}, (err, pdf)=>{
                            if(err){
                                console.log(err);
                                return res.status(400).json({msg : err});
                            }
                            Vedio.find({}).then((videos_mp4)=>{
                                console.log(videos_mp4); 
                                console.log(admin);               
                                res.render('admindashboard',{
                                title : 'Dashboard-Admin',
                                style : 'admindashboard.css',
                                script : 'admindashboard.js',
                                users,
                                doc,
                                pdf,
                                videos_mp4,
                                token,
                                admin
                            });
                            }, (err)=>{
                                console.log(err);
                            });
                        });
                    }
                });
            });
        });  
    }).catch((e)=>{
        console.log(e)
        res.status(400).send();
    });   
});
module.exports = router;
