/**
* Output View
*/
var ItemViewPrototype = require("itemview.prototype");
var templates = require("templates");
var _ = require("underscore");
var Backbone = require("backbone");

module.exports = ItemViewPrototype.extend({
	tagName: "ul",
	id: "output",
	className: "component",
	initialize: function(options) {
		// @see itemview.prototype
		this.inherit(options);
	},
	template: function(model) {
		return _.template(templates.components.output)(model);
	}
});

