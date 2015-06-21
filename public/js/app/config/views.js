/**
* Views
* An object with all our views for easy access
*/
module.exports = {
	"components": {
		"footer": require("../components/footer/footer.view"),
		"header": require("./../components/header/header.view"),
		"query-json": require("./../components/query-json/header.view")
	},
	"modules": {
		"dashboard": require("./../modules/dashboard/dashboard.view")
	}
}