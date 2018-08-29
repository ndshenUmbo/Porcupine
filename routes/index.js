var express = require('express');
var router = express.Router();
var articles = require('./articles');
var users = require('./users');
var groups = require('./groups');

var fs = require('fs')

console.log("In router file.");

// ============================Router========================================
router.use('/api/articles', articles);
router.use('/api/users', users);
router.use('/api/groups', groups);

router.get('/api', function(req,res){
    // res.sendFile(__dirname +'/../views/document.html');
    fs.readFile(__dirname +'/../views/document.html', null, function(err, data){
        if(err){
            res.writeHead(404);
            res.write("File not found");    
        }else{
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(data);
        }
        res.end()
    });

});

router.get('/', function(req, res){
    res.send('Test Node.js server with Express');
    res.end();
    console.log("Get a get request!");
});

router.post('/', function(req,res){
    console.log("1");
    res.writeHead(201, {'Content-Type': 'text/plain'});
    res.write("ok");
    console.log("Get a post request!");
    res.end()
});


module.exports = router;