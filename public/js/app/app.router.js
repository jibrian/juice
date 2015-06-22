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
		"(/)": "loadIndex",
		"dashboard": "loadDashboard",
		"query-json": "loadQueryJSON"
	},
	loadIndex: function() {

	},
	loadDashboard: function() {
		this.app.controller.load("dashboard");
	},
	loadQueryJSON: function() {
		this.app.controller.load("query-json");
	}
});

