/**
* Redirect-Trace Controller
*/
var ControllerPrototype = require("controller.prototype");
var components = require("marionette");

module.exports = ControllerPrototype.extend({
	name: "redirect-trace",
	type: "component",
	initialize: function(options) {
		// @see controller.prototype
		this.inherit(options);
	}
});

