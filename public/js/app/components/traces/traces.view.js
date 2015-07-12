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
		"dblclick li": "pipe"
	},
	initialize: function(options) {
		// @see itemview.prototype
		this.inherit(options);
	},
	pipe: function(e) {
		this.app.vent.trigger("header:shake", {
			link: "query-json"
		});
		this.app.controller.view.model.set("query", e.currentTarget.innerHTML);
	},
	template: function(model) {
		return _.template(templates.components.traces)(model);
	}
});

