sap.ui.define([
		"femonitor/model/GroupSortState",
		"sap/ui/model/json/JSONModel"
	], function (GroupSortState, JSONModel) {
	"use strict";

	QUnit.module("GroupSortState - grouping and sorting", {
		beforeEach: function () {
			this.oModel = new JSONModel({});
			// System under test
			this.oGroupSortState = new GroupSortState(this.oModel, function() {});
		}
	});

	QUnit.test("Should always return a sorter when sorting", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.sort("Importe").length, 1, "The sorting by Importe returned a sorter");
		assert.strictEqual(this.oGroupSortState.sort("Factura").length, 1, "The sorting by Factura returned a sorter");
	});

	QUnit.test("Should return a grouper when grouping", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.group("Importe").length, 1, "The group by Importe returned a sorter");
		assert.strictEqual(this.oGroupSortState.group("None").length, 0, "The sorting by None returned no sorter");
	});


	QUnit.test("Should set the sorting to Importe if the user groupes by Importe", function (assert) {
		// Act + Assert
		this.oGroupSortState.group("Importe");
		assert.strictEqual(this.oModel.getProperty("/sortBy"), "Importe", "The sorting is the same as the grouping");
	});

	QUnit.test("Should set the grouping to None if the user sorts by Factura and there was a grouping before", function (assert) {
		// Arrange
		this.oModel.setProperty("/groupBy", "Importe");

		this.oGroupSortState.sort("Factura");

		// Assert
		assert.strictEqual(this.oModel.getProperty("/groupBy"), "None", "The grouping got reset");
	});
});
