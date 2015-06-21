/**
* Header Component Controller
*/
var Marionette = require("marionette");
var components = require("marionette");

module.exports = Marionette.Controller.extend({
	initialize: function(options) {
		this.app = options.app;
	},
	loadView: function() {
		var headerView = new components.header.View({
			app: this.app
		});
	
	}
});

