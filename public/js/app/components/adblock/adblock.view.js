/**
* Adblock View
*/
var LayoutViewPrototype = require("layoutview.prototype");
var Backbone = require("backbone");
var $ = require("jquery");
var _ = require("underscore");
var templates = require("templates");

module.exports = LayoutViewPrototype.extend({
	tagName: "div",
	id: "adblock",
	className: "component",
	/**
	* Text file from easylist
	* @see templates.components.easylist
	*/
	easylist: templates.components.easylist,
	ui: {
		"easylistForm": "form[name='easylist']",
		"searchwordInput": "input[name='searchword']"
	},
	events: {
		"submit": "parseEasylist"
	},
	/**
	* Takes user's input and parses the easylist for a match
	* @param {object} e Event object
	*/
	parseEasylist: function(e) {
		e.preventDefault();
		var foo = this.easylist.match(this.ui.searchwordInput.val());
		console.log(foo);
	},
	initialize: function(options) {
		// @see layoutview.prototype
		this.inherit(options);
	},
	template: function(model) {
		return _.template(templates.components["adblock"])(model);
	}
});

