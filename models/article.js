const mongoose = require('mongoose');

//Article Schema
const articleSchema = mongoose.Schema({
    Articlename:{ type: String, required:true },
    id: { type: Number, requred:true },
    Time: { type:Date },
    Author: { type:String },
    IPaddress: { type:String },
    URL: { type:String },
    Content: { type:String, requred:true },
    Boo: { type:Array },
    Push: { type:Array }
});

const Article = module.exports = mongoose.model('Article',articleSchema, 'Article');

//===========================Basic Controller===============================
//Get Articles
module.exports.getArticles = function(callback, limit){
    Article.find(callback).limit(limit);
};

//Get one Article
module.exports.getArticleById = function(id ,callback){
    Article.find({id:id}, callback);
};