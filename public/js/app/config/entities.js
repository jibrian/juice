/**
* Entities (Models/Collections)
* An object with all our models and collections for easy access
*/
module.exports = {
	"components": {
		"traces": require("../entities/components/traces/traces.collection")
	},
	"modules": {

	},
	"localStorage": require("../entities/localStorage.model"),
	"viewState": require("../entities/viewState.model")
}