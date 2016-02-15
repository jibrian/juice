/**
 * ItemView Prototype
 * A base marionette itemview contructor
 * Contains methods we want on all itemviews
 * @constructor
 */
var Marionette = require("marionette");

module.exports = Marionette.ItemView.extend({
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