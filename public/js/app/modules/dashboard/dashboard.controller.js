/**
* Dashboard Module Controller
* @constructor
* @extends controller.prototype
*/
var ControllerPrototype = require("controller.prototype");

module.exports = ControllerPrototype.extend({
	initialize: function(options) {
		// @see controller.prototype
		this.inherit(options);
		this.name = "dashboard";
		this.type = "module";
	}
});	

