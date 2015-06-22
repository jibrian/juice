/**
* Header Component View
*/
var Marionette = require("marionette");
var Backbone = require("backbone");
var _ = require("underscore");
var templates = require("templates");

module.exports = Marionette.LayoutView.extend({
	tagName: "div",
	className: "header",
	model: new Backbone.Model,
	initialize: function(options) {
		this.app = options.app;
	},
	template: function(model) {
		return _.template(templates.components.header)(model);
	}
});

