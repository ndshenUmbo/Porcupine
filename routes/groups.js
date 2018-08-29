//Router: /api/groups/

var express = require('express');
var router = express.Router();
Group = require('../models/group');

router.get('/topGroup/:limit', function(req,res){
    Group.getTopGroups(req.params.limit, function(err, groups){
        if(err){
            throw err;
        }
        res.json(groups)
    });
});

router.get('/userID/:id', function(req,res){
    Group.getUserGroup(req.params.id, function(err, groupID){
        if(err){
            throw err;
        }
        res.json(groupID)
    });
});

module.exports = router;
