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
		// @see controller.prototype
		this.import(["header"], ["header"], {app: this.app});
	},
	/**
	* Loads desired module into our app via app.router
	* @see app.router
	*/
	load: function(module) {
		this[module]();
	},
	dashboard: function() {
		this.import(["dashboard"], ["main"], {
			app: this.app
		}, {
			app: this.app
		}, "modules");
	},
	// Use quotes to keep component/module name consistent across entire app
	"query-json": function() {
		this.import(["query-json"], ["main"], {
			app: this.app
		}, {
			app: this.app,
			model: this.app.controller.view.model
		});
	},
	"adblock-parse": function() {
		this.import(["adblock-parse"], ["main"], {
			app: this.app
		}, {
			app: this.app
		});
	},
	"redirect-trace": function() {
		this.import(["redirect-trace"], ["main"], {
			app: this.app
		}, {
			app: this.app
		});
	},
	"uri-dencoder": function() {
		this.import(["uri-dencoder"], ["main"], {
			app: this.app
		}, {
			app: this.app
		});
	},
	"json-query": function() {
		this.import(["json-query"], ["main"], {
			app: this.app
		}, {
			app: this.app
		});
	},
	"juxtapose": function() {
		this.import(["juxtapose"], ["main"], {
			app: this.app
		}, {
			app: this.app,
			model: this.app.controller.view.model
		});
	}
});

