/**
* Dashboard Module View
* Handle views for apps components
*/
var Marionette = require("marionette");
var templates = require("templates");

module.exports = Marionette.LayoutView.extend({
	tagName: "div",
	id: "dashboard",
	className: "module",
	initialize: function(options) {
		this.app = options.app;
	},
	regions: {
		"main": ".main"
	},
	template: function() {
		return templates.modules.dashboard
	}
});

