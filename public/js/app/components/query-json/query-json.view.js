/**
* Query-JSON View
*/
var LayoutViewPrototype = require("layoutview.prototype");
var Backbone = require("backbone");
var templates = require("templates");

module.exports = LayoutViewPrototype.extend({
	tagName: "div",
	id: "query-json",
	className: "component",
	behaviors: {},
	ui: {
		"textarea": "textarea",
		"submitBtn": "button[type='submit']"
	},
	events: {
		"submit": "processQuery"
	},
	regions: {
		"json": ".json"
	},
	initialize: function(options) {
		// @see layoutview.prototype
		this.inherit(options);
	},
	processQuery: function(e) {
		e.preventDefault();
		var query = this.ui.textarea.val();
		var json = this.convertQuery(query);
		this.controller.import(["json"], ["json"], {
			app: this.app
		}, {
			app: this.app,
			// @TEST
			model: new Backbone.Model({
				name: json.name,
				age: json.age
			})
		});
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

