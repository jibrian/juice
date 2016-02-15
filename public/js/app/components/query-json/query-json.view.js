/**
* Query-JSON View
*/
var LayoutViewPrototype = require("layoutview.prototype");
var Backbone = require("backbone");
var _ = require("underscore");
var templates = require("templates");

module.exports = LayoutViewPrototype.extend({
	id: "query-json",
	className: "component",
	ui: {
		"queryTextarea": "#query",
		"select": "#uri-decode",
		"submitBtn": "button[type='submit']",
		"pipeBtn": ".pipe button[type='button']",
		"clearBtn": "button[name='clear']"
	},
	events: {
		"submit": "onSubmit",
		"click @ui.pipeBtn": "pipe"
	},
	regions: {
		"json": ".json"
	},
	initialize: function(options) {
		// @see layoutview.prototype
		this.inherit(options);
	},
	/**
	* Send results into juxtapose component
	*/
	pipe: function(e) {
		var query = this.ui.queryTextarea.val().trim();
		var json = JSON.stringify(this.convertQuery(query));
		this.app.controller.view.model.set(e.currentTarget.name, json);
		this.app.vent.trigger("header:shake", {
			link: "juxtapose"
		});
	},
	onSubmit: function(e) {
		e.preventDefault();
		var query = this.ui.queryTextarea.val().trim();

		this.app.controller.view.model.set({
			"query": query
		});
		this.processQuery(e);
		this.ui.pipeBtn.removeClass("hide");
	},
	/**
	* Parse query input and convert into JSON
	* @param {object} e Event object
	*/
	processQuery: function() {
		if (!this.ui.queryTextarea.val()) { 
			return; 
		}

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
	onRender: function() {
		var piped = this.app.controller.view.model.get("query");
		if (piped) {
			this.$el.find("form[name='query-json']").submit();
		}
	},
	template: function(model) {
		return _.template(templates.components["query-json"])(model);
	}
});

