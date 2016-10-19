
import $ from 'jquery';
import Handlebars from 'handlebars';
import lscache from 'lscache';
import _ from 'lodash';
import template from 'templates/tweezerTemplate.html';
import json2csv from 'json2csv';
import d3 from 'd3';
import dataTable from 'templates/dataTable.html';


var twzRows = require('components/tweezerRow');
var tweezerTemplate;
var currentIndex = 0;
var interval; 
var timerRunning = false;
var splitCount = 0;
var cumCount = 0;
var points;
var pointsArray = [];
var testData = [];
var itemData;
var result;
var extraTime = 0;
var pinDropped = 0;
var rowTime;

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

var app = {
  init: function(){
    model.init();
    app.compileTemplates();
    app.render();
  }, 
  render: function(){
    app.bindClickEvents(); 
  },
  compileTemplates: function(){
    tweezerTemplate = Handlebars.compile(template);
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
        app.showRow();
        $startStop.html('Stop');
        $startStop.css({'background-color': '#FF2603'});
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
    // app.addPoints();  
    app.displayTimes();
    itemData = {
      row: currentIndex,
      time: splitCount,
      penalty: extraTime,
      rowTime: rowTime,
      points: points,
      droppedPin: pinDropped
    };

    testData.push(itemData);
    
    model.save();
    splitCount = 0;
  },
  splitTimer: function(){  
    var $split = $('.misc-button');
    $split.on('click', function(){
      // app.addPoints();
      app.displayTimes();
      itemData = {
        row: currentIndex,
        time: splitCount,
        penalty: extraTime,
        rowTime: rowTime,
        points: points,
        droppedPin: pinDropped
      };
      app.showRow();
      
      
      
      testData.push(itemData);  
      model.save();
      splitCount = 0;
    });     
  },
  showRow: function(){
    $('.item-container').html(tweezerTemplate(twzRows[currentIndex]));
    currentIndex++;   
    app.droppedPin();
  },
  // resetTimer: function(){
  //   var $reset = $('.reset-button');
  //   $reset.on('click', function(){
  //     // interval = clearInterval(interval);
  //     if (timerRunning === false) {
  //       app.clearEverything(); 
  //     } 
  //   });   
  // },
  displayTimes: function(){
    if (extraTime > 0) {
      rowTime = splitCount + extraTime;
    } else {
      rowTime = splitCount;
    }
    if (rowTime < 32) {
    points = 8;
    } else if (rowTime === 33 || rowTime === 34) {
      points = 7;
    } else if (rowTime === 35 || rowTime === 36) {
      points = 6;
    } else if (rowTime === 37 || rowTime === 38) {
      points = 5;
    } else if (rowTime === 39 || rowTime === 40) {
      points = 4;
    } else if (rowTime === 41 || rowTime === 42 || rowTime === 43) {
      points = 3;
    } else if (rowTime > 43 && rowTime < 48) {
      points = 2;
    } else if (rowTime > 47) {
      points = 1;
    }
    app.addPoints();
  }, 
  addPoints: function(){
    pointsArray.push(points);
    var pointsTotal = _.sum(pointsArray);
    $('.score').html('Score = ' + pointsTotal);
  },
  droppedPin: function(){
    $('.dropped-pin').click(function(){
      pinDropped++;
      extraTime += 5;
    });  
    pinDropped = 0
    extraTime = 0;
  },
  createTable: function(){
    $('.stopwatch-container').html(dataTable);
    d3.text(result, function(data) {
      var parsedCSV = d3.csv.parseRows(result);

      var container = d3.select('.datatable')
        .append('table')

        .selectAll('tr')
          .data(parsedCSV).enter()
          .append('tr')

        .selectAll('td')
          .data(function(d) { return d; }).enter()
          .append('td')
          .text(function(d) { return d; });
    });
  },
  createCSV: function(){
    $('.create-csv').on('click', function(){
      var fields = ['row', 'time', 'penalty', 'rowTime', 'points', 'droppedPin'];
      try {
        result = json2csv({ data: testData, fields: fields });
        app.createTable();
      } catch (err) {
        console.log(err);
      }
    }); 
  },
  // displayTimes: function(){
  //   $('.time-col').append('Item ' + '' + (index + 1) + ': ' + ' ' + splitTimes[index] + '<br />'); 
  //   if (splitTimes[index] < 10) {
  //     points = 3;
  //   } else if (splitTimes[index] > 9 && splitTimes[index] < 20) {
  //     points = 2;
  //   } else if (splitTimes[index] > 19 && splitTimes[index] < 30){
  //     points = 1;
  //   } else {
  //     points = 0;
  //   }
  //   $('.points-col').append(points + '<br />');
  //   index++;
  // },
  clearEverything: function(){
    testData = [];
    pointsArray = [];
    splitCount = 0;
    cumCount = 0;
    currentIndex = 0;
    $('.time-col').html('<h1>Times</h1');
    $('.points-col').html('<h1>Points</h1>');
    $('.split-counter').html('Individual Time: ' + '0' + splitCount);
    $('.cum-counter').html('Cumulative Time: ' + '0' + cumCount);
    $('.score').html('');
  },
  addPoints: function(){
    pointsArray.push(points);
    var pointsTotal = _.sum(pointsArray);
    $('.score').html('Score = ' + pointsTotal);
  },
  bindClickEvents: function(){
    app.startTimer();
    app.splitTimer();
    app.createCSV();
  }
};

module.exports = app;


