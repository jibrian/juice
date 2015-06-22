/**
* Header Component View
*/
var Marionette = require("marionette");
var templates = require("templates");

module.exports = Marionette.LayoutView.extend({
	tagName: "div",
	className: "header",
	initialize: function(options) {
		this.app = options.app;
	},
	template: function() {
		return templates.components.header
	}
});

