/**
* Traces View
*/
var ItemViewPrototype = require("itemview.prototype");
var templates = require("templates");
var _ = require("underscore");
var Backbone = require("backbone");

module.exports = ItemViewPrototype.extend({
	tagName: "ul",
	id: "traces",
	className: "component",
	events: {
		"click li": "test"
	},
	initialize: function(options) {
		// @see itemview.prototype
		this.inherit(options);
	},
	test: function(e) {
		console.log(e.currentTarget);
	},
	template: function(model) {
		return _.template(templates.components.traces)(model);
	}
});

