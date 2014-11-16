define([
  'jquery',
  'backbone'
], function($, Backbone) {

  // app view
  var App = Backbone.View.extend({
    initialize: function() {
      console.log('HELLO WORLD');
    },
  });
  return App;
});
