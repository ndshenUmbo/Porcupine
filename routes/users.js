//Router: /api/users/

var express = require('express');
var router = express.Router();
User = require('../models/user');

router.get('/',function(req,res){
    User.getUsers(function(err, users){
        if(err){
            throw err;
        }
        res.json(users);
    });
});

router.get('/id/:_id',function(req,res){
    User.getUserById(req.params._id, function(err, user){
        if(err){
            throw err;
        }
        res.json(user);
    });
});

router.get('/name/:name', function(req,res){
    User.getUserByName(req.params.name, function(err, user){
        if(err){
            throw err;
        }
        console.log(user)
        res.json(user)
    });
});

module.exports = router;