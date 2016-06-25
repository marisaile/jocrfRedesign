'use strict';

var express = require('express');
var router = express.Router();
var _ = require('lodash');
var fs = require('fs');

// API routes
var todoDatabasePath = __dirname + '/database.json';

router.get('/api', function(req, res){
  // read in the database
  fs.readFile(todoDatabasePath, function(err, data){
    if (err) { console.log(err); }
    // send a response
    res.writeHead(200, {'Content-Type': 'text/json'});
    res.write(data);
    res.end();    
  });
});

router.post('/api', function(req, res){
  var todos = req.body.todos;
  fs.writeFile(todoDatabasePath, todos, function(err){
    if (err) { console.log(err); }
    // respond to the client
    res.writeHead(200, {'Content-Type': 'text/json'});
    res.write(todos);
    res.end();
  });
});

// var bookDatabasePath = __dirname + '/bookDatabase.json';
// router.get('/apiBooks', function(req, res){
//   // read in the database
//   fs.readFile(bookDatabasePath, function(err, data){
//     if (err) { console.log(err); }
//     // send a response
//     res.writeHead(200, {'Content-Type': 'text/json'});
//     res.write(data);
//     res.end();    
//   });
// });

// router.post('/apiBooks', function(req, res){
//   var book = req.body.books;
//   fs.writeFile(bookDatabasePath, books, function(err){
//     if (err) { console.log(err); }
//     // respond to the client
//     res.writeHead(200, {'Content-Type': 'text/json'});
//     res.write(books);
//     res.end();
//   });
// });

// everything route 
router.get('/*', function indexRouteHandler (req, res) {
  res.render('view', {
    title: "Website Example",
    token: _.uniqueId()
  });
});



module.exports = router;