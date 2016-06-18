
var $ = require('jquery');

// legacy loading for bootstrap
window.jQuery = window.$ = $;
require('bootstrap');

import _ from 'underscore';
import Backbone from 'backbone';
import Handlebars from 'handlebars';
import lscache from 'lscache';

var LearnMenuModel = Backbone.Model.extend({
  defaults: {

  },
  fetch: function() {

  },
  save: function() {
    
  }

});
var model = LearnMenuModel;

var ViewClass = Backbone.View.extend({
  el: '.project-container',
  model: model,
  events: {
    'click .lizard': 'revealInfo',
  },
  initialize: function(){

  },
  render: function(){

  },
  revealInfo: function(){
  	
  },
  closeView: function(){}
});