/**
* App Controller
* @contructor
*/
var Marionette = require("marionette");
var modules = require("modules");

module.exports = Marionette.Controller.extend({
	initialize: function(options) {
		this.app = options.app;	

		// @DEBUG
		console.log("App controller initialized");
	},
	// @see app.router
	load: function(module) {
		this[module]();
	},
	inject: function(controller, options) {
		options.app = this.app;
		var controller = new this.app.modules[controller].Controller(options);
		controller.injectInto(this.app.view.main);
	},
	dashboard: function() {
		this.inject("dashboard", {
			name: "dashboard",
			type: "modules"
		});
	}
});

