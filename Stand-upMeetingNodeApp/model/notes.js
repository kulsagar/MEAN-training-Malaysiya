/**
 * Created by sagakulk on 7/24/2016.
 */

var mongoose = require('mongoose')

var Notes = mongoose.Schema;

var notesSchema = new Notes({
    memberName:{type:String},
    date:{type:Date},
    project:{type:String},
    workYesterday:{type:String},
    workToday:{type:String},
    impediment:{type:String}
});

module.exports = mongoose.model('Notes',notesSchema);