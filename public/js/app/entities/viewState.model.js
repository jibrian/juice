/**
* Browser Local Storage Model
*/
var Backbone = require("backbone");

var ViewStateModel = Backbone.Model.extend({
	defaults: function() {
		return {
			"juxtaposeOne": "",
			"juxtaposeTwo": "",
			"query": ""
		}
	},
});

module.exports = ViewStateModel