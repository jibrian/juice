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



		var _this = this;	
		setTimeout(function() {
			_this.loadComponents();
		});
	},
	loadComponents: function() {
		var headerController = new this.app.components.header.Controller({
			app: this.app,
		});

		headerController.injectInto(this.view.one);
	}
});	

