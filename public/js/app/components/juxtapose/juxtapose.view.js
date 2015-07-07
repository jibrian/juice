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
		"leftOutput": ".left-output",
		"rightOutput": ".right-output"
	},
	initialize: function(options) {
		// @see layoutview.prototype
		this.inherit(options);

		window.foo = this;
	},
	/**
	* @param {object} json1
	* @param {object} json2
	*/
	appendJSON: function(json1, json2) {
		this.controller.import(["json"], ["leftOutput"], {
			app: this.app
		}, {
			model: new Backbone.Model(json1)
		});

		this.controller.import(["json"], ["rightOutput"], {
			app: this.app
		}, {
			model: new Backbone.Model(json2)
		});
	},
	/**
	* @param {string} jsonStr String representation of JSON object
	*/
	parseJSONStr: function(jsonStr) {
		var json = {};
		// strip curly braces and remove quotes
		var keyValStr = jsonStr.substring(1, jsonStr.length - 1).replace(/\"|\'/g, "");
		var keyValArr = keyValStr.split(",");
		for (var i = 0, len = keyValArr.length; i < len; i++) {
			var keyValPair = keyValArr[i].split(":");
			json[keyValPair[0].trim()] = keyValPair[1].trim();
		}

		return json;
	},
	compareData: function(e) {
		e.preventDefault();
		switch (e.target["2"].value) {
			case "JSON":
				this.appendJSON(this.parseJSONStr(this.ui.leftTextarea.val()), this.parseJSONStr(this.ui.rightTextarea.val()));
				break;
		}
	},
	template: function() {
		return templates.components["juxtapose"];
	}
});

