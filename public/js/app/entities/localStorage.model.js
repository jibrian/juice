/**
* Browser Local Storage Model
*/
var Backbone = require("backbone");

var LocalStorageModel = Backbone.Model.extend({
	defaults: function() {
		return {
		
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
		// remove length property is it default to localstorage
		this.unset("length", {silent: true});
	},
	sync: function() {
		var data = this.toJSON();
		window.localStorage.clear();

		for (var key in data) {
			window.localStorage.setItem(key, data[key]);
		}
	},
});

module.exports = LocalStorageModel