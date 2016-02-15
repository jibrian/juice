/**
 * Controller Prototype
 * A base marionette controller contructor
 * Contains methods we want on all controllers
 * @constructor
 * @requires name and type(component/module) properties on initialization
 *   name and type must be consistent through the component
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
	injectInto: function(region, options) {
		var type = this.app.utils.processType(this.type);
		var options = options || {};
		options.app = this.app;
		options.controller = this;

		this.view = new this.app[type][this.name].View(options);
		// render our view to set regions
		this.view.render();
		region.show(this.view);
	},
	/**
	* @param {array} components Array with desired component names
	* @param {array} parentRegions Array with parent layouts region names
	* @param {object} componentOptions Options passed to our controllers
	* @param {object} viewOptions Options passed to our views
	*   which correlate with the components by index
	* @param {string} type Module or component
	*/
	import: function(components, parentRegions, componentOptions, viewOptions, type) {
		var _this = this;
		var componentOptions = componentOptions || {};
		componentOptions.app = this.app;
		// @requires injectInto to attach view to controller
		setTimeout(function() {
			for (var i = 0, len = components.length; i < len; i++) {
				// Need this try for now cause the async calls mess up loading between tabs
				try {
					var controller = new _this.app[type || "components"][components[i]].Controller(componentOptions);
					controller.injectInto(_this.view[parentRegions[i]], viewOptions)
				} catch(err) {}
			}
		});
	}
});