/**
* Dashboard Module Controller
* @constructor
* @extends controller.prototype
*/
var ControllerPrototype = require("controller.prototype");

module.exports = ControllerPrototype.extend({
	initialize: function(options) {
		// @see controller.prototype
		this.attach(options);
		this.name = "dashboard";
		this.type = "modules";
		// @see controller.prototype
		this.inject(["header", "header"], ["one", "two"], {
			app: this.app
		});
	}
});	

