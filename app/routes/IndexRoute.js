/*jslint browser: true, jquery: true */ 
/*global App: true, require: false, Ember: false, module: false*/

App = require("app");
module.exports = App.IndexRoute = Ember.Route.extend({

	model: function() {
		return App.Index.find();
	}
  
});
