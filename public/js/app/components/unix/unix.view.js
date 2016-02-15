/**
* JSON View
*/
var ItemViewPrototype = require('itemview.prototype');
var templates = require('templates');
var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
var moment = require('moment');

module.exports = ItemViewPrototype.extend({
	tagName: 'ul',
	id: 'unix',
	className: 'component',
	initialize: function(options) {
		// @see itemview.prototype
		this.inherit(options);
		this.listenTo(this.app.vent, 'juxtapose:json', this.filterJSON);
	},
	filterJSON: function(options) {
		// @TODO check for data type match
		var $keys = this.$el.find('.key');
		var $vals = this.$el.find('.value');
		$keys.each(function(index, item) {
			if (options.json1.hasOwnProperty(item.innerHTML) && options.json2.hasOwnProperty(item.innerHTML)) {
				$(item).addClass('match');
				
				if (options.json1[item.innerHTML] === options.json2[item.innerHTML]) {
					$vals.eq(index).addClass('match');
				} else {
					$vals.eq(index).addClass('diff');
				}
			}
		});
	},
	template: function(model) {
		return _.template(templates.components.unix)(model);
	}
});

