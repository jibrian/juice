/**
* App Controller
* @contructor
*/
var ControllerPrototype = require("controller.prototype");
var modules = require("modules");
var AppView = require("app.view");
var Backbone = require("backbone");

module.exports = ControllerPrototype.extend({
	initialize: function(options) {
		this.app = options.app;	
		this.view = new AppView(options);
		this.import(["header"], ["header"], options);
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
	* Use inject method to instantiate module controller and inject into our app
	*/
	inject: function(type, controller, options) {
		var type = this.app.utils.processType(type);
		options.app = this.app;
		var controller = new this.app[type][controller].Controller(options);
		// @see controller.prototype
		controller.injectInto(this.view.main);
	},
	dashboard: function() {
		this.inject("module", "dashboard", {});
	}
});

