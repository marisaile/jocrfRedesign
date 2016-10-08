
import $ from 'jquery';
import Handlebars from 'handlebars';
import lscache from 'lscache';
import _ from 'lodash';
import template from 'templates/obsItem.html';
import json2csv from 'json2csv';
import d3 from 'd3';
import dataTable from 'templates/dataTable.html';

// observation specific 
var obsItems = require('components/observation');
var obsItemTemplate; 
var currentIndex = 0;

var interval; 
var timerRunning = false;
var splitCount = 0;
var cumCount = 0;
var points;
var index = 0;
var pointsArray = [];
var testData = [];
var itemData;
var result;
// var pointsTotal;
// var testScore = [];

var model = {
  init: function(){
    var savedData = lscache.get('testData');
    if (savedData) {      
      testData = savedData;
    } else {
      testData = [];
    }
  },
  save: function(){
    var dataToSave = JSON.stringify(testData);
    lscache.set('testData', dataToSave);
  },
  get: function(){
    return testData;
  }
};

// var view = $('script[type="text/x-template"]').html();

var app = {
  init: function(){
    model.init();
    app.compileTemplate();
    app.render();
  },
  render: function(){
    app.bindClickEvents();
  },
  // observation specific
  compileTemplate: function(){
    obsItemTemplate = Handlebars.compile(template);
  },
  startTimer: function(){
    var $startStop = $('.start-stop-button');
    $startStop.on('click', function(){
      if ($startStop.html() === 'Start') {
        if (timerRunning === false) {
          timerRunning = true;
        }
        // startTime = new Date();
        interval = setInterval(function(){
          splitCount++;
          if (splitCount < 10) {
            splitCount = '0' + splitCount;
          }
          $('.split-counter').html('Individual Time: ' + splitCount);
          cumCount++;
          if (cumCount < 10) {
            cumCount = '0' + cumCount;
          }
          $('.cum-counter').html('Cumulative Time: ' + cumCount);
        }, 600);
        $startStop.html('Stop');
        $startStop.css({'background-color': '#FF2603'});
        app.showItem();
      } else {
        app.stopTimer();
        $startStop.html('Start');
        $startStop.css({'background-color': '#01C700'});
      }
    });   
  },
  stopTimer: function(){
    interval = clearInterval(interval);
    if (timerRunning === true) {
      timerRunning = false;
    }
    
    app.displayTimes();
    // app.addPoints();
    itemData = {
      itemNumber: index + 1,
      time: splitCount,
      points: points
    };
    testData.push(itemData);
    model.save();
    splitCount = 0;
  },
  splitTimer: function(){  
    var $split = $('.split-button');
    $split.on('click', function(){
      app.displayTimes();
      itemData = {
        itemNumber: index + 1,
        time: splitCount,
        points: points
      };
      // app.addPoints(); 
      testData.push(itemData);
      model.save();
      splitCount = 0;
    });     
  },
  resetTimer: function(){
    var $reset = $('.reset-button');
    $reset.on('click', function(){
      // interval = clearInterval(interval);
      if (timerRunning === false) {
        app.clearEverything(); 
      } 
    });   
  },
  displayTimes: function(){
    if (splitCount < 10) {
      points = 3;
    } else if (splitCount > 9 && splitCount < 20) {
      points = 2;
    } else if (splitCount > 19 && splitCount < 30){
      points = 1;
    } else {
      points = 0;
    }
    index++;
    app.addPoints();
  },
  clearEverything: function(){
    testData = [];
    splitCount = 0;
    cumCount = 0;
    index = 0;
    
    $('.split-counter').html('Individual Time: ' + '0' + splitCount);
    $('.cum-counter').html('Cumulative Time: ' + '0' + cumCount);
    $('.score').html('Score =');
  },
  addPoints: function(){
    pointsArray.push(points);
    var pointsTotal = _.sum(pointsArray);
    $('.score').html('Score = ' + pointsTotal);
  },
  // observation specific
  showItem: function(){
    $('.item-container').html(obsItemTemplate(obsItems[currentIndex]));
    currentIndex++;
  },
  // createTable: function(){
  //   $('body').html(dataTable);
  //   d3.text(result, function(data) {
  //     var parsedCSV = d3.csv.parseRows(result);

  //     var container = d3.select('.datatable')
  //       .append("table")

  //       .selectAll("tr")
  //         .data(parsedCSV).enter()
  //         .append("tr")

  //       .selectAll("td")
  //         .data(function(d) { return d; }).enter()
  //         .append("td")
  //         .text(function(d) { return d; });
  //   });
  // },
  createCSV: function(){
    $('.create-csv').on('click', function(){
      var fields = ['Item', 'Time', 'Points'];
      try {
        var result = json2csv({ data: testData, fields: fields });
        // app.createTable()
        console.log(result)
      } catch (err) {
          // Errors are thrown for bad options, or if the data is empty and no fields are provided. 
          // Be sure to provide fields if it is possible that your data array will be empty. 
        console.log(err);
      }
    }); 
  },
  bindClickEvents: function(){
    app.startTimer();
    app.splitTimer();
    app.resetTimer();
    app.createCSV();
  }
};

module.exports = app;
