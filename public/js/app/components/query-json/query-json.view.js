/**
* Query-JSON View
*/
var LayoutViewPrototype = require("layoutview.prototype");
var Backbone = require("backbone");
var templates = require("templates");

module.exports = LayoutViewPrototype.extend({
	id: "query-json",
	className: "component",
	ui: {
		"queryTextarea": "#query",
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
	/**
	* Parse query input and convert into JSON
	* @param {object} e Event object
	*/
	processQuery: function(e) {
		e.preventDefault();
		if (!this.ui.queryTextarea.val()) { return; }
		var query = this.ui.queryTextarea.val().trim();
		var json = this.convertQuery(query);
		this.loadJSON(json);
	},
	/**
	* Load JSON component 
	*/
	loadJSON: function(json) {
		// @see controller.prototype
		this.controller.import(["json"], ["json"], {
			app: this.app
		}, {
			model: new Backbone.Model(json)
		});
		// Keep this log so user has access to JSON in dev tools
		console.log("Query -> JSON", json);
	},
	convertQuery: function(str) {
		// @TODO need to strip trailing special characters
		var query = str.substring(str.indexOf("?") + 1);
		var pairs = query.split("&");
		var json = {};

		for (var i = 0, len = pairs.length; i < len; i++) {
			var split = pairs[i].split("=");
			var key = this.ui.select.val() === "yes" ? decodeURIComponent(split[0]) : split[0];
			var val = this.ui.select.val() === "yes" ? decodeURIComponent(split[1]) : split[1];
			json[key] = val;
		}

		return json;
	},
	template: function() {
		return templates.components["query-json"];
	}
});

