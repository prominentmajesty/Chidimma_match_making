var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var connect_Flash = require('connect-flash');
//var express_Session = require('express-session');
//const cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
//var passport = require('passport');
const passport = require('passport');
var config = require('./dataBase/mongodb');
var index = require('./routes/index');
var admin = require('./routes/admin');
var userdashboard = require('./routes/userdashboard');

var app = express();

require('./dataBase/passport')(passport);

var port = process.env.PORT || 3000;
mongoose.set('useCreateIndex', true); 

mongoose.connect(config.connector.connector, {
    useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }, function(){
        console.log('Data Base Connected Successfully');
    });
app.use(express.static('./public'));
app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main',
    partialsDir: 'views/partials',
    helpers : {
        base64ArrayBuffer : require('./utils/base64ArrayBuffer'),
        formater : require('./utils/formater'),
        image_converter : require('./utils/image_converter')
    }
}));
app.set('view engine', '.hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(cookieParser(config.session.cookie_Key));
app.use(cookieSession({
    maxAge : 24 * 60 * 60 * 1000,
    keys :[config.session.cookie_Key] 
}));
/*app.use(express_Session({
    secret: config.session.cookie_Key,
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 300000 
    }
}));*/
app.use(passport.initialize());
app.use(passport.session());
app.use(connect_Flash());
app.use((req,res,next)=>{
    res.locals.success_msg = req.flash('success_msg');
   // res.locals.error_msg = req.flash('error_msg'); 
   // res.locals.error = req.flash('error'); 
    next();
  }); 
app.use('/', index);
app.use('/admin', admin);
app.use('/userdashboard', userdashboard)
  app.listen(port, ()=>{
    console.log(`Cool !! app is up and running @ port ${port}`);
  });