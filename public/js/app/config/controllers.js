/**
* Controllers
* An object with all our controllers for easy access
*/
module.exports = {
	"components": {
		"footer": require("../components/footer/footer.controller"),
		"header": require("./../components/header/header.controller"),
		"query-json": require("./../components/query-json/header.controller")
	},
	"modules": {
		"dashboard": require("./../modules/dashboard/dashboard.controller")
	}
}