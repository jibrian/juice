/**
* Header Component Controller
*/
var Marionette = require("marionette");

module.exports = Marionette.Controller.extend({
	initialize: function(options) {
		this.app = options.app;
	},
	loadView: function() {
		var headerView = new HeaderView({
			app: this.app
		});
		headerView.loadView();
	}
});

