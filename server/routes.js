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

var writingPromptsPath = __dirname + '/writingPrompts.json';

router.get('/api/writingPrompts', function(req, res){
  // read in the database
    fs.readFile(writingPromptsPath, function(err, data){
      if (err) { console.log(err); }
      // send a response
      res.writeHead(200, {'Content-Type': 'text/json'});
      res.write(data);
      res.end();    
    });
});


// router.post('/api/addPrompt', function(req, res){  
//   var newPrompt = req.body.prompt;
//   fs.write(writingPromptsPath, newPrompt, function(err, data){
//     if (err) { console.log (err); }
//     res.writeHead(200, {'Content-Type': 'text/json'});
//     res.write(newPrompt);
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