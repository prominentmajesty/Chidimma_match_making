var mongoose = require('mongoose');
var vedioSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
   
    fileName : {
        type : String,
        required : true
    },
    fileImage : {
        type : String,
        required : true
    },
    createdAt: {
        type: String,
        default: new Date().getTime()
    }
});
module.exports = Vedio = mongoose.model('Vedio', vedioSchema);