/**
* App Controller
*/
var Marionette = require("marionette");
var $ = require("jquery");

module.exports = AppController = Marionette.Controller.extend({
	initialize: function(options) {
		this.app = options.app;	
		this.app.view = new AppView(options);
	},
	loadModule: function(module, options) {
		this[module](options);
	},
	dashboard: function(options) {
		var dashboardController = new dashboard.Controller({
			app: this.app
		});
		dashboardController.loadView();
	}
});

