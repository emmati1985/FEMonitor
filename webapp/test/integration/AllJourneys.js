jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 facturasSet in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"femonitor/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"femonitor/test/integration/pages/App",
	"femonitor/test/integration/pages/Browser",
	"femonitor/test/integration/pages/Master",
	"femonitor/test/integration/pages/Detail",
	"femonitor/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "femonitor.view."
	});

	sap.ui.require([
		"femonitor/test/integration/MasterJourney",
		"femonitor/test/integration/NavigationJourney",
		"femonitor/test/integration/NotFoundJourney",
		"femonitor/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});
