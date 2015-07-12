/**
* Browser Local Storage Model
*/
var Backbone = require("backbone");

var LocalStorageModel = Backbone.Model.extend({
	defaults: function() {
		return {
			"test": "test"
		}
	},
	initialize: function() {
		this.fetch();
		this.listenTo(this, "change", this.handleChange);
	},
	handleChange: function() {
		this.sync();
	},
	fetch: function() {
		this.set(window.localStorage);
		this.unset("length", {silent: true});
	},
	sync: function() {
		var data = this.toJSON();
		for (var key in data) {
			window.localStorage.setItem(key, data[key]);
		}
	}
});

module.exports = LocalStorageModel