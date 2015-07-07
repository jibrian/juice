/**
* Juxtapose View
*/
var LayoutViewPrototype = require("layoutview.prototype");
var Backbone = require("backbone");
var templates = require("templates");

module.exports = LayoutViewPrototype.extend({
	id: "juxtapose",
	className: "component",
	ui: {
		"leftTextarea": "#left-data",
		"rightTextarea": "#right-data",
		"submitBtn": "button[type='submit']"
	},
	events: {
		"submit": "compareData"
	},
	regions: {
		"ouput": ".output",
	},
	initialize: function(options) {
		// @see layoutview.prototype
		this.inherit(options);
	},
	/**
	* 
	*/
	compareData: function(e) {
		e.preventDefault();
		alert("Coming soon...");
	},
	template: function() {
		return templates.components["juxtapose"];
	}
});

