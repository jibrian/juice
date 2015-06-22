/**
* Redirect-Trace View
*/
var LayoutViewPrototype = require("layoutview.prototype");
var Backbone = require("backbone");
var templates = require("templates");

module.exports = LayoutViewPrototype.extend({
	tagName: "div",
	id: "redirect-trace",
	className: "component",
	initialize: function(options) {
		// @see layoutview.prototype
		this.inherit(options);
	},
	template: function() {
		return templates.components["redirect-trace"];
	}
});

