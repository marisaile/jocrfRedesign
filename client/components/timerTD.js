
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
var pickedUp = 0;
var pointsTotal;

var model = {
  init: function(){
    testData = [];
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
        interval = setInterval(function(){
          splitCount++;
          var splitCountText = splitCount.toString();
          if (splitCountText.length < 2) {
            splitCountText = '.0' + splitCount;
          } else if (splitCountText.length > 2) {
            splitCountText = splitCountText.slice(0, 1) + '.' + splitCountText.slice(1, 3);
          } else {
            splitCountText = '.' + splitCount;
          }
          $('.split-counter').html('Individual Time: ' + splitCountText);
          cumCount++;
          var cumText = cumCount.toString();
          if (cumText.length < 2) {
            cumText = '.0' + cumText;
          } else if (cumText.length > 2) {
            cumText = cumText.slice(0, 1) + '.' + cumText.slice(1, 3);
          } else {
            cumText = '.' + cumText;
          }
          $('.cum-counter').html('Cumulative Time: ' + cumText);
        }, 600);
        app.showRow();
        $startStop.html('Stop');
        $startStop.css({'background-color': '#19284B'});
      } else {
        app.stopTimer();
        $startStop.html('Start');
        $startStop.css({'background-color': '#17B20A'});
      }
    });   
  },
  stopTimer: function(){
    interval = clearInterval(interval);
    if (timerRunning === true) {
      timerRunning = false;
    } 
    app.displayTimes();
    app.addPoints();
    itemData = {
      row: currentIndex,
      time: splitCount,
      dropped: pinDropped,
      pickedUp: pickedUp,
      penalty: extraTime,
      rowTime: rowTime,
      points: points
    };
    testData.push(itemData);    
    model.save();
    splitCount = 0;
  },
  splitTimer: function(){  
    var $split = $('.misc-button');
    $split.on('click', function(){
      app.displayTimes();
      app.addPoints();
      itemData = {
        row: currentIndex,
        time: splitCount,
        dropped: pinDropped,
        pickedUp: pickedUp,
        penalty: extraTime,
        rowTime: rowTime,
        points: points
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
    app.pickedUp();
  },
  resetTimer: function(){
    var $reset = $('.reset-button');
    $reset.on('click', function(){
      if (timerRunning === false) {
        app.clearEverything(); 
      } 
    });   
  },
  displayTimes: function(){
    if (extraTime > 0) {
      rowTime = splitCount + extraTime;
    } else {
      rowTime = splitCount;
    }
    if (rowTime < 32 || rowTime === 32) {
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
  }, 
  addPoints: function(){
    pointsArray.push(points);
    pointsTotal = _.sum(pointsArray);
    $('.score').html('Score = ' + pointsTotal);
  },
  droppedPin: function(){
    $('.dropped-pin').click(function(){
      pinDropped++;
      extraTime += 5;
    });  
    pinDropped = 0;
    extraTime = 0;
  },
  pickedUp: function(){
    $('.picked-up').click(function(){
      pickedUp++;
      extraTime -= 5;
    });
    pickedUp = 0;
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
    localStorage.clear();
  },
  createCSV: function(){
    $('.create-csv').on('click', function(){
      var fields = ['row', 'time', 'dropped', 'pickedUp', 'penalty', 'rowTime', 'points'];
      try {
        result = json2csv({ data: testData, fields: fields });
        app.createTable();
      } catch (err) {
        console.log(err);
      }
    }); 
  },
  clearEverything: function(){
    testData = [];
    pointsArray = [];
    splitCount = 0;
    cumCount = 0;
    currentIndex = 0;
    extraTime = 0;
    pinDropped = 0;
    pickedUp = 0;

    $('.item-container').html('');
    $('.split-counter').html('Individual Time: ' + '.0' + splitCount);
    $('.cum-counter').html('Cumulative Time: ' + '.0' + cumCount);
    $('.score').html('Score = ');
  },
  bindClickEvents: function(){
    app.startTimer();
    app.splitTimer();
    app.resetTimer();
    app.createCSV();
  }
};

module.exports = app;
