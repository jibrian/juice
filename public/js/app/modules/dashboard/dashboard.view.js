/**
* Dashboard Module View
* Handle views for apps components
*/
var Marionette = require("marionette");
var templates = require("templates");

module.exports = Marionette.LayoutView.extend({
	tagName: "section",
	id: "dashboard",
	initialize: function(options) {
		this.app = options.app;
	},
	regions: {
		"one": "#one",
		"two": "#two"
	},
	template: function() {
		return templates.modules.dashboard
	}
});

