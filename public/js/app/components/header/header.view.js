/**
* Header Component View
*/
var LayoutViewPrototype = require("layoutview.prototype");
var Backbone = require("backbone");
var _ = require("underscore");
var templates = require("templates");

module.exports = LayoutViewPrototype.extend({
	tagName: "div",
	className: "header",
	model: new Backbone.Model,
	initialize: function(options) {
		// @see itemview.prototype
		this.inherit(options);
		this.listenTo(this.app.vent, "header:shake", this.shakeJuxtaposeLink);
	},
	shakeJuxtaposeLink: function() {
		var $link = this.$el.find("a[href='#juxtapose']");
		$link.addClass("shake");
		setTimeout(function() {
			$link.removeClass("shake");
		}, 500);
	},	
	template: function(model) {
		return _.template(templates.components.header)(model);
	}
});

