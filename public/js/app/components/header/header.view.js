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
	shakeJuxtaposeLink: function(options) {
		var $link = this.$el.find("a[href='#" + options.link + "']");
		$link.addClass("shake-pulse force-link-hover");
		setTimeout(function() {
			$link.removeClass("shake-pulse force-link-hover");
		}, 750);
	},	
	template: function(model) {
		return _.template(templates.components.header)(model);
	}
});

