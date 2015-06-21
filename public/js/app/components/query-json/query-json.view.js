/**
* Query-JSON View
*/
var Marionette = require("marionette");
var templates = require("templates");

module.exports = Marionette.ItemView.extend({
	tagName: "div",
	id: "query-json",
	className: "component",
	behaviors: {},
	ui: {
		"textarea": "textarea",
		"submitBtn": "button[type='submit']"
	},
	initialize: function() {
	
	},
	convertQuery: function(str) {
		var query = str.substring(str.indexOf("?") + 1);
		var pairs = query.split("&");
		var json = {};

		for (var i = 0, len = pairs.length; i < len; i++) {
			var split = pairs[i].split("=");
			var key = split[0];
			var val = split[1];
			json[key] = val;
		}

		return json;
	},
	template: function() {
		return templates.components["query-json"];
	}
});

