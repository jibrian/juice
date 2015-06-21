/**
* Header Component View
*/
var Marionette = require("marionette");
var templates = require("templates");

module.exports = Marionette.LayoutView.extend({
	initialize: function(options) {
		this.app = options.app;
	},
	template: templates.header,
});

