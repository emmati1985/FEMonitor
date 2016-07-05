jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"femonitor/test/integration/NavigationJourneyPhone",
		"femonitor/test/integration/NotFoundJourneyPhone",
		"femonitor/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});

