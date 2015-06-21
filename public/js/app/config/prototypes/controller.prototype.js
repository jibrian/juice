/**
* Controller Prototype
* A base marionette controller contructor
* Contains methods we want on all controllers
* @constructor
* @requires name and type(component/module) properties on initialization
*/
var Marionette = require("marionette");

module.exports = Marionette.Controller.extend({
	/**
	* Attach all references passed by options to the controller
	* @param {object} options 
	*/
	inherit: function(options) {
		for (var key in options) {
			this[key] = options[key];
		}
	},
	/**
	* Use to inject component into our parent component/module regions
	* @param {object} region Region of our parent component/module we want to inject into
	*/
	injectInto: function(region) {
		var type = this.app.utils.processType(this.type);
		var options = {
			app: this.app
		};

		this.view = new this.app[type][this.name].View(options);
		// render our view to set regions
		this.view.render();
		region.show(this.view);
	},
	/**
	* @param {array} components Array with desired component names
	* @param {array} parentRegions Array with parent layouts region names
	*   which correlate with the components by index
	*/
	import: function(components, parentRegions, options) {
		var _this = this;
		// @requires injectInto to attach view to controller
		setTimeout(function() {
			for (var i = 0, len = components.length; i < len; i++) {
				var controller = new _this.app.components[components[i]].Controller(options);
				controller.injectInto(_this.view[parentRegions[i]])
			}
		});
	}
});