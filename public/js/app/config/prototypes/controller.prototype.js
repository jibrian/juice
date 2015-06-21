/**
* Controller Prototype
* A base marionette controller contructor
* Contains methods we want on all controllers
* @requires Controller requires name and type(components/modules) properties
* @constructor
*/
var Marionette = require("marionette");

module.exports = Marionette.Controller.extend({
	/**
	* Attach all references passed by options to the controller
	*  Depends: [name, type]
	* @param {object} options 
	*/
	inherit: function(options) {
		for (var key in options) {
			this[key] = options[key];
		}
	},
	/**
	* Use to inject component into our parent component/modules regions
	* @param {object} region Region of our parent component/module we want to inject into
	*/
	injectInto: function(region) {
		var options = {
			app: this.app
		};

		this.view = new this.app[this.type][this.name].View(options);
		region.show(this.view);
		this.view.render();
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
				var controller = new _this.app.component[components[i]].Controller(options);
				controller.injectInto(_this.view[parentRegions[i]])
			}
		});
	}
});