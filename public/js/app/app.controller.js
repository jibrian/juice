/**
* App Controller
*/
var Marionette = require("marionette");
var modules = require("modules");

module.exports = Marionette.Controller.extend({
	initialize: function(options) {
		this.app = options.app;	
	},
	loadModule: function(module, options) {
		this[module](options);
	},
	dashboard: function(options) {
		var dashboardController = new modules.dashboard.Controller({
			app: this.app
		});
		dashboardController.loadView();
	}
});

