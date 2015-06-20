/**
* App bootstrap
*/
var Marionette = require("marionette");
var $ = require("jquery");
var App = Marionette.Application.extend({
	initialize: function() {
		var options = {
			app: this
		}
		this.controller = new AppController(options);
		this.router = new AppRouter(options);
	}
});

var app = new App();

window.foo = app;

app.on("start", function() {
	Backbone.history.start();
})

app.start();
