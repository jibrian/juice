/**
* Header Component Controller
* @constructor
* @extends controller.prototype
*/
var ControllerPrototype = require("controller.prototype");

module.exports = ControllerPrototype.extend({
	initialize: function(options) {
		// @see controller.prototype
		this.attach(options);
		this.name = "header";
		this.type = "components";
	}
});

