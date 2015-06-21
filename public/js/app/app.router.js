/**
* App Router
*/
var Backbone = require("backbone");

module.exports = Backbone.Router.extend({
	initialize: function(options) {
		this.app = options.app;
	},
	routes: {
		"dashboard": "loadDashboard"
	},
	loadDashboard: function() {
		this.app.controller.loadModule("dashboard", {
			app: this.app
		});
	}
});

