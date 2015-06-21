/**
* LayoutView Prototype
* A base marionette layoutview contructor
* Contains methods we want on all layoutviews
* @constructor
*/
var Marionette = require("marionette");

module.exports = Marionette.LayoutView.extend({
	/**
	* Attach all references passed by options to the controller
	* @param {object} options 
	*/
	inherit: function(options) {
		for (var key in options) {
			this[key] = options[key];
		}
	}
});