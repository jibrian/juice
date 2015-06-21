/**
* App Router
* @see app.controller.load
*/
var Backbone = require("backbone");

module.exports = Backbone.Router.extend({
	initialize: function(options) {
		this.app = options.app;
	},
	routes: {
		"(/)": "loadDashboard",
		"dashboard": "loadDashboard"
	},
	loadDashboard: function() {
		this.app.controller.load("dashboard");
	}
});

