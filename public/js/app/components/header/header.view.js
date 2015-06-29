/**
* Header Component View
*/
var Marionette = require("marionette");
var Backbone = require("backbone");
var _ = require("underscore");
var templates = require("templates");

module.exports = Marionette.LayoutView.extend({
	tagName: "div",
	className: "header",
	model: new Backbone.Model,
	initialize: function(options) {
		var _this = this;
		this.app = options.app;

		window.addEventListener("scroll", function(e) {
			_this.toggleHeader();			
		}, false);
	},
	toggleHeader: function() {
		this.$el.css("opacity", 1 - (window.pageYOffset / 150));
	},
	template: function(model) {
		return _.template(templates.components.header)(model);
	}
});

