var mongoose =  require('mongoose');
var AutoIncreament = require('mongoose-sequence')(mongoose);
var adminSchema = mongoose.Schema({
    ID : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    skills : {
        type : String,
        required : true
    },
    contact : {
        type : String,
        required : true
    },
    proffession : {
        type : String,
        required : true
    }
});
adminSchema.plugin(AutoIncreament, {id : 'order_seq', inc_field : 'order'});
module.exports = AdminData = mongoose.model('AdminData', adminSchema);