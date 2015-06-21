/**
* Dashboard Module Controller
* Meat of application, brokers are app components here
*/
var Marionette = require("marionette");

module.exports = Marionette.Controller.extend({
	initialize: function(options) {
		console.log("dashboard controller", options.app);
		this.app = options.app;
		console.log("Dashboard controller initialized");
	},
	load: function(region) {
		var _this = this;
		var options = {
			app: _this.app
		};
		var dashboardView = new this.app.modules.dashboard.View(options);
		region.show(dashboardView);
	}
});	

