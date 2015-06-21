/**
* JSON View
*/
var ItemViewPrototype = require("itemview.prototype");
var templates = require("templates");
var _ = require("underscore");
var Backbone = require("backbone");

module.exports = ItemViewPrototype.extend({
	tagName: "div",
	id: "json",
	className: "component",
	initialize: function(options) {
		// @see itemview.prototype
		this.inherit(options);
		// @DEBUG
		console.log("JSON view initiailized");	
	},
	template: function(model) {
		return _.template(templates.components.json)(model);
	}
});

