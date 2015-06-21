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

		window.foo = this;
		var _this = this;
		setTimeout(function() {
		_this.loadComponents();	
		}, 2000);
	},
	loadComponents: function() {
		var headerController = new this.app.components.header.Controller({
			app: this.app,
		});
		console.log("headercontroller", headerController);
		console.log(this.view);
		headerController.injectInto(this.view.one);
	}
});	

