/**
* App View
*/
var Marionette = require("marionette");

module.exports = Marionette.LayoutView.extend({
	el: "body",
	initialize: function(options) {

	},
	regions: {
		"header": "#app-header",
		"main": "#app-main",
		"footer": "#app-footer"
	}
});

