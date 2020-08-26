var mongoose =  require('mongoose');
var pdfSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    fileName : {
        type : String,
        required : true
    },
});
module.exports = PDF = mongoose.model('PDF', pdfSchema);