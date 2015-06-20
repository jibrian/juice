/**
* App bootstrap
*/
var Marionette = require("marionette");
var Backbone = require("backbone");
var AppController = require("app.controller");

module.exports = Marionette.Application.extend({
	initialize: function() {
		var options = {
			app: this
		};
		// this.controller = new AppController(options);
		// this.router = new AppRouter(options);
	},
	onStart: function() {
		console.log("App started");
		Backbone.history.start();
	}
});
