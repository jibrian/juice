/**
* JSON-Query View
*/
var LayoutViewPrototype = require("layoutview.prototype");
var Backbone = require("backbone");
var templates = require("templates");

module.exports = LayoutViewPrototype.extend({
	id: "json-query",
	className: "component",
	ui: {
		"jsonTextarea": "#json-query-json",
		"submitBtn": "button[type='submit']",
		"clearBtn": "button[name='clear']"
	},
	events: {
		"submit": "processJSON",
		"click @ui.clearBtn": "clearInput" 
	},
	regions: {
		"query": ".query"
	},
	initialize: function(options) {
		// @see layoutview.prototype
		this.inherit(options);
	},
	clearInput: function() {
		this.ui.jsonTextarea.val("");
	},
	/**
	* Convert JSON into query string
	* @param {object} e Event object
	*/
	processJSON: function(e) {
		if (e) {
			e.preventDefault();
		}
		// @TODO need to account for commas inside keys or values
		var query = "?";
		var json = this.ui.jsonTextarea.val()
		// strip curly braces and remove quotes
		var keyValStr = json.substring(1, json.length - 1).replace(/\"|\'/g, "");
		var keyValArr = keyValStr.split(",");
		for (var i = 0, len = keyValArr.length; i < len; i++) {
			var keyValPair = keyValArr[i].split(":");
			query += keyValPair[0].trim() + "=" + encodeURIComponent(keyValPair[1].trim())
			// add & if not last key value pair
			if (i < len - 1) {
				query += "&";	
			}
		}

		this.appendQuery(query);
		this.app.controller.view.model.set("json-query", this.ui.jsonTextarea.val());
	},
	appendQuery: function(query) {
		var p = document.createElement("p");
		var text = document.createTextNode(query);
		p.appendChild(text);
		this.$el.find(".query").empty().append(p);
	},
	onRender: function() {
		if (this.app.controller.view.model.get("json-query")) {
			this.ui.jsonTextarea.val(this.app.controller.view.model.get("json-query"));
			this.processJSON();
		}
	},
	template: function() {
		return templates.components["json-query"];
	}
});

