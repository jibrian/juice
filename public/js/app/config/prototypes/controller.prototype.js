/**
* Controller Prototype
* A base marionette controller contructor
* Contains methods we want on all controllers
* @constructor
*/
var Marionette = require("marionette");

module.exports = Marionette.Controller.extend({
	/**
	* Attach all references passed by options to the controller
	*  Depends: [name, type]
	* @param {object} options 
	*/
	attach: function(options) {
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
		var view = new this.app[this.type][this.name].View(options);
		region.show(view);
	}
});