/**
* Dashboard Module Controller
* Meat of application, brokers are app components here
*/
var Marionette = require("marionette");
var components = require("components");

module.exports = Marionette.Controller.extend({
	initialize: function(options) {
		console.log("Dashboard controller initialized");
		this.app = options.app;
	},
	loadView: function() {
		var options = {
			app: this.app
		};
		var queryJSONController = components["query-json"].Controller(options);
	}
});	

