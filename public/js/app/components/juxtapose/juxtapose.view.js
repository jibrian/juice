/**
* Juxtapose View
*/
var LayoutViewPrototype = require("layoutview.prototype");
var Backbone = require("backbone");
var _ = require("underscore");
var $ = require("jquery");
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
		"submit": "onSubmit"
	},
	regions: {
		"leftOutput": ".left-output",
		"rightOutput": ".right-output"
	},
	initialize: function(options) {
		// @see layoutview.prototype
		this.inherit(options);
	},
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
	parseJSONStr: function(jsonStr) {
		var keyValStr = jsonStr.substring(1, jsonStr.length - 1);
		return JSON.parse("{" + keyValStr + "}");
	},
	onSubmit: function(e) {
		e.preventDefault();
		var json1 = this.ui.leftTextarea.val().trim();
		var json2 = this.ui.rightTextarea.val().trim();

		this.app.controller.view.model.set({
			"juxtaposeOne": json1,
			"juxtaposeTwo": json2
		});
		this.compareData(e);
	},
	compareData: function(e) {
		switch (e.target["2"].value) {
			case "JSON":
				var json1 = this.parseJSONStr(this.ui.leftTextarea.val());
				var json2 = this.parseJSONStr(this.ui.rightTextarea.val());
				this.appendJSON(json1, json2);
				this.compareJSON(json1, json2);
				break;
		}
	},
	compareJSON: function(json1, json2) {
		var _this = this;
		setTimeout(function() {
			_this.app.vent.trigger("juxtapose:json", {
				json1: json1,
				json2: json2
			});
		});
	},
	onRender: function() {
		var juxtaposedPiped = this.app.controller.view.model.get("juxtaposeOne") && this.app.controller.view.model.get("juxtaposeTwo");
		if (juxtaposedPiped) {
			this.$el.find("form[name='juxtapose']").submit();
		}
	},
	template: function(model) {
		return _.template(templates.components["juxtapose"])(model);
	}
});

