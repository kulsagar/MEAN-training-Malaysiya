/**
 * Created by sagakulk on 7/24/2016.
 */

var Notes = require('../model/notes');

exports.fetchTheResult = function(req,res){
    var query = Notes.find();

    query.exec(function(err,result){
        if(err){
            console.log('error occured');
        }
        else{
            res.json(result);
        }
    });
}
exports.create = function(req,res){
    console.log(req.body.memberName);
    console.log(req.body.project);
    console.log(req.body.workYesterday);
    console.log(req.body.workToday);
    console.log(req.body.impediment);
    var n = new Notes({


        memberName:req.body.memberName,
        date:new Date(),
        project:req.body.project,
        workYesterday:req.body.workYesterday,
        workToday:req.body.workToday,
        impediment:req.body.impediment
    });
    n.save(function(err){
        if(err){
            console.log('error occurred');
        }
        else{
            exports.fetchTheResult(req,res);
        }
    });
}
