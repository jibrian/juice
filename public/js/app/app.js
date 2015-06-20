/**
* App bootstrap
*/
var Marionette = require("marionette");
var Backbone = require("backbone");
var AppController = require("app.controller");
var AppRouter = require("app.router");
var AppView = require("app.view");

var components = require("components");

module.exports = Marionette.Application.extend({
	initialize: function(options) {
		var options = {
			app: this
		};
		this.controller = new AppController(options);
		this.router = new AppRouter(options);
		this.view = new AppView(options);

		console.log(components)
	},
	onStart: function() {
		console.log("App started");
		Backbone.history.start();
	}
});
