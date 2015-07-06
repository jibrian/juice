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
		"submitBtn": "button[type='submit']"
	},
	events: {
		"submit": "processJSON"
	},
	regions: {
		"query": ".query"
	},
	initialize: function(options) {
		// @see layoutview.prototype
		this.inherit(options);
	},
	/**
	* Convert JSON into query string
	* @param {object} e Event object
	*/
	processJSON: function(e) {
		e.preventDefault();
		// @TODO need to account for commas inside keys or values
		var query = "?";
		var json = this.ui.jsonTextarea.val()
		// strip curly braces and remove quotes
		var keyValStr = json.substring(1, json.length - 1).replace(/\"||\'/g, "");
		var keyValArr = keyValStr.split(",");
		for (var i = 0, len = keyValArr.length; i < len; i++) {
			var keyValPair = keyValArr[i].split(":");
			// Account for last key value pair and don't add &
			if (i === len - 1) {
				query += keyValPair[0].trim() + "=" + encodeURIComponent(keyValPair[1].trim())
			} else {
				query += keyValPair[0].trim() + "=" + encodeURIComponent(keyValPair[1].trim()) + "&";
			}
		}

		this.appendQuery(query);
	},
	/**
	*
	*/
	appendQuery: function(query) {
		var p = document.createElement("p");
		var text = document.createTextNode(query);
		p.appendChild(text);
		this.$el.find(".query").empty().append(p);
	},
	template: function() {
		return templates.components["json-query"];
	}
});

