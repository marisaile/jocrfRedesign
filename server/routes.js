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

router.post('/api/suggestions', function(req, res){
  if(
    // !req.body.hasOwnProperty('subject') || 
     !req.body.hasOwnProperty('title') || 
     !req.body.hasOwnProperty('author')) {
    res.statusCode = 400;
    return res.send('Error 400: Post syntax incorrect.');
  }

  var newBook = {
    // subject: req.body.subject,
    title: req.body.title,
    author: req.body.author
  }
  fs.writeFile(__dirname + '/booksSuggestions.json', function(err){
    if (err) { console.log(err); }
    // respond to the client
    res.writeHead(200, {'Content-Type': 'text/json'});
    res.write(newBook);
    res.end();
  });
});

// var stopwatchDatabasePath = __dirname + '/stopwatchDatabase.json';


// router.get('/api/stopwatch', function(req, res){
//   // read in the database
//     fs.readFile(stopwatchDatabasePath, function(err, data){
//       if (err) { console.log(err); }
//       // send a response
//       res.writeHead(200, {'Content-Type': 'text/json'});
//       res.write(data);
//       res.end();    
//     });
// });

// router.post('/api/stopwatch', function(req, res){
//   var times = req.body.times;
//   fs.writeFile(stopwatchDatabasePath, times, function(err){
//     if (err) { console.log(err); }
//     // respond to the client
//     res.writeHead(200, {'Content-Type': 'text/json'});
//     res.write(times.toString());
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