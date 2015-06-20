/**
* Dashboard Module Controller
* Meat of application, brokers are app components here
*/
var Marionette = require("marionette");

module.exports = Marionette.Controller.extend({
	initialize: function(options) {
		console.log("Dashboard controller initialized");
		this.app = options.app;
	},
	loadView: function() {
		var dashboardView = new DashboardView;
		this.app.view.main.show(dashboardView);
	},
});	

