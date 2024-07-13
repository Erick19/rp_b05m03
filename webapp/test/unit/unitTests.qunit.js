/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ns_proy01/proy01/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
