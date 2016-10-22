
import $ from 'jquery';
import Handlebars from 'handlebars';
import lscache from 'lscache';
import _ from 'lodash';
import template from 'templates/obsItem.html';
import json2csv from 'json2csv';
import d3 from 'd3';
import dataTable from 'templates/dataTable.html';


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
        $startStop.css({'background-color': '#192837'});
        app.showItem();
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
    itemData = {
      itemNumber: index,
      time: splitCount,
      points: points
    };
    testData.push(itemData);
    model.save();
    splitCount = 0;
  },
  studyPage: function(){  
    var $study = $('.misc-button');
    $study.on('click', function(){
      if (timerRunning === false) {
        timerRunning = true;
        interval = setInterval(function(){ 
          if (splitCount === 50) {
            interval = clearInterval(interval);
            splitCount = 0;
            cumCount = 0;
            $study.css({
              'background-color': '#089D9A'
            });
          } else {
            splitCount++;
            $study.css({
              'background-color': '#5D0A57'
            });
            if (splitCount < 10) {
              splitCount = '0' + splitCount;
            }
            $('.split-counter').html('Individual Time: ' + splitCount);
            cumCount++;
            if (cumCount < 10) {
              cumCount = '0' + cumCount;
            }
            $('.cum-counter').html('Cumulative Time: ' + cumCount);
          }
        }, 600);
      }
    });          
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
    pointsArray = [];
    splitCount = 0;
    cumCount = 0;
    index = 0;
    currentIndex = 0;

    
    $('.split-counter').html('Individual Time: ' + '0' + splitCount);
    $('.cum-counter').html('Cumulative Time: ' + '0' + cumCount);
    $('.item-container').html('');
    $('.score').html('Score =');
  },

  addPoints: function(){
    pointsArray.push(points);
    var pointsTotal = _.sum(pointsArray);
    $('.score').html('Score = ' + pointsTotal);
  },
  showItem: function(){
    $('.item-container').html(obsItemTemplate(obsItems[currentIndex]));
    currentIndex++;
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
      var fields = ['itemNumber', 'time', 'points'];
      try {
        result = json2csv({ data: testData, fields: fields });
        app.createTable();
      } catch (err) {
        console.log(err);
      }
    }); 
  },
  bindClickEvents: function(){
    app.startTimer();
    app.studyPage();
    app.resetTimer();
    app.createCSV();
  }
};

module.exports = app;

// app.displayTimes();
      // itemData = {
      //   itemNumber: index - 1,
      //   time: splitCount,
      //   points: points
      // };
      // // app.addPoints(); 
      // testData.push(itemData);
      // model.save();
