/**
* ItemView Prototype
* A base marionette itemview contructor
* Contains methods we want on all itemviews
* @constructor
* @requires name and type(component/module) properties on initialization
*/
var Marionette = require("marionette");
var _ = require("underscore");
var templates = require("templates");

module.exports = Marionette.ItemView.extend({
	/**
	* Set the default template using the views name and type 
	* @param {object} model Marionette passes the views model to template method
	*/
	template: function(model) {
		return _.template(templates.component[this.name])(model);
	}
});