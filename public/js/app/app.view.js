/**
* App View
*/
var Marionette = require("marionette");

module.exports = Marionette.LayoutView.extend({
	el: "#app",
	initialize: function(options) {

	},
	regions: {
		"header": ".header",
		"main": ".main",
		"footer": ".footer"
	}
});

