/**
* JSON Controller
*/
var ControllerPrototype = require("controller.prototype");
var components = require("marionette");

module.exports = ControllerPrototype.extend({
	initialize: function(options) {
		// @see controller.prototype
		this.inherit(options);
		this.name = "json";
		this.type = "component";
	}
});

