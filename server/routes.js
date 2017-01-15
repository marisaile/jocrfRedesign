'use strict';

var express = require('express');
var router = express.Router();
var _ = require('lodash');
var fs = require('fs');
 
router.get('/*', function indexRouteHandler (req, res) {
  res.render('view', {
    title: "Website Example",
    token: _.uniqueId()
  });
});



module.exports = router;