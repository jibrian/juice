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
		console.log("dashboard view", options.app);
		this.app = options.app;
		console.log("Dashboard view initialized");
	},
	template: templates.modules.dashboard
});

