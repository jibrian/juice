/**
* App View
*/
var Marionette = require("marionette");
var entities = require("entities");

module.exports = Marionette.LayoutView.extend({
	el: "html",
	regions: {
		"header": "#app-header",
		"main": "#app-main",
		"footer": "#app-footer"
	},
	model: new entities.viewState
});

