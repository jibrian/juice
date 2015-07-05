/**
* Header Component View
*/
var LayoutViewPrototype = require("layoutview.prototype");
var Backbone = require("backbone");
var _ = require("underscore");
var templates = require("templates");

module.exports = LayoutViewPrototype.extend({
	tagName: "div",
	className: "header",
	model: new Backbone.Model,
	initialize: function(options) {
		// @see itemview.prototype
		this.inherit(options);
	},
	template: function(model) {
		return _.template(templates.components.header)(model);
	}
});

