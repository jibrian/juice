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
	/**
	* Loads desired module into our app via app.router
	* @see app.router
	*/
	load: function(module) {
		this[module]();
	},
	/**
	* Use inject method to instantiate module controller and inject into app
	*/
	inject: function(type, controller, options) {
		var type = this.app.utils.processType(type);
		options.app = this.app;
		var controller = new this.app[type][controller].Controller(options);
		// @see controller.prototype
		controller.injectInto(this.app.view.main);
	},
	dashboard: function() {
		this.inject("module", "dashboard", {});
	}
});

