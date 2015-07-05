/**
* Redirect-Trace View
*/
var LayoutViewPrototype = require("layoutview.prototype");
var Backbone = require("backbone");
var $ = require("jquery");
var templates = require("templates");

module.exports = LayoutViewPrototype.extend({
	tagName: "div",
	id: "redirect-trace",
	className: "component",
	ui: {
		"urlTextarea": "#url-textarea",
		"submitBtn": "form[name='redirect-trace'] button[type='submit']"
	},
	events: {
		"submit": "traceUrl"
	},
	initialize: function(options) {
		// @see layoutview.prototype
		this.inherit(options);
	},
	/**
	* @param {object} e Event object
	*/
	traceUrl: function(e) {
		e.preventDefault();
		var _this = this;
		$.ajax({
			url: "redirect-trace.php",
			method: "GET",
			dataType: "JSON",
			data: {
				url: $("#url-textarea").val()
			},
			success: function(response) {
				_this.$el.find(".results").append("<div>" + response[0] + "</div>");
				_this.$el.find(".results").append("<div>" + response[1] + "</div>");
			}
		});
		console.log($("#url-textarea").val());
	},	
	template: function() {
		return templates.components["redirect-trace"];
	}
});

