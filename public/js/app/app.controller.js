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
		var _this = this;
		console.log("app controller", this.app);
		var dashboardController = new this.app.modules.dashboard.Controller({
			app: _this.app
		});
		dashboardController.load(this.app.view.main);
	}
});

