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
		"textarea": "#query",
		"select": "#uri-decode",
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
			model: new Backbone.Model(json)
		});

		console.log("Query -> JSON", json);
	},
	convertQuery: function(str) {
		// @TODO need to strip trailing special characters
		var query = str.substring(str.indexOf("?") + 1);
		var pairs = query.split("&");
		var json = {};

		for (var i = 0, len = pairs.length; i < len; i++) {
			var split = pairs[i].split("=");
			var key = this.ui.select.val() === "yes" ? decodeURI(split[0]) : split[0];
			var val = this.ui.select.val() === "yes" ? decodeURI(split[1]) : split[1];
			json[key] = val;
		}

		return json;
	},
	template: function() {
		return templates.components["query-json"];
		//28:d6:7b:7e:95:d3:f6:bf:15:77:61:86:b6:06:89:e5 
	}
});

