/**
 * Traces View
 */
var CollectionViewPrototype = require('collectionview.prototype');
var TracesItemView = require('./traces.itemview.js');
var templates = require('templates');
var _ = require('underscore');
var Backbone = require('backbone');

module.exports = CollectionViewPrototype.extend({
	tagName: 'ul',
	id: 'traces',
	className: 'component',
	childView: TracesItemView,
	childViewOptions: function(model, index) {
		return {
			model: model,
			childIndex: index,
			app: this.app
		}
  	},
	initialize: function(options) {
		var _this = this;
		// @see itemview.prototype
		this.inherit(options);
		
		this.listenTo(this.app.vent, 'traces:add', this.fetchTraces); //@listenTo
	},
	fetchTraces: function(url) {
		var _this = this;

		this.collection.fetchByUrl(url).then(function() {
			_this.app.controller.view.model.set('traces', _this.collection.models);
		});
	},
	onRender: function() {
		if (this.app.controller.view.model.get('traces')) {
			this.collection.add(this.app.controller.view.model.get('traces'));
		} 
	},
	template: function(model) {
		return _.template(templates.components.traces)(model);
	}
});

