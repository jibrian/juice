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
		"leftSubmit": "button[form='left-data']",
		"rightTextarea": "#right-data",
		"rightSubmit": "button[form='right-data']"
	},
	events: {
		"submit": "processJSON"
	},
	regions: {
		"leftOuput": "#left-subject",
		"rightOuput": "#right-subject"
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
			query += keyValPair[0].trim() + "=" + encodeURIComponent(keyValPair[1].trim())
			// add & if not last key value pair
			if (i < len - 1) {
				query += "&";	
			}
		}

		this.appendQuery(query);
	},
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

