//Router: /api/articles/

var express = require('express');
var router = express.Router();
Article = require('../models/article');

router.get('/',function(req,res){
    Article.getArticles(function(err, articles){
        if(err){
            throw err;
        }
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
        res.setHeader('Access-Control-Allow-Credentials', true); // If needed
        res.json(articles);
    });
});

router.get('/id/:_id',function(req,res){
    Article.getArticleById(req.params._id, function(err, article){
        if(err){
            throw err;
        }
        res.json(article);
    });
});

module.exports = router;