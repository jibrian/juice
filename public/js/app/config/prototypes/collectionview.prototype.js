/**
 * CollectionView Prototype
 * A base marionette collectionview contructor
 * Contains methods we want on all collectionview
 * @constructor
 */
var Marionette = require("marionette");

module.exports = Marionette.CollectionView.extend({
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