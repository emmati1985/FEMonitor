sap.ui.define([], function() {
	"use strict";

	return {
		/**
		 * Rounds the currency value to 2 digits
		 *
		 * @public
		 * @param {string} sValue value to be formatted
		 * @returns {string} formatted currency value with 2 digits
		 */
		currencyValue: function(sValue) {
			if (!sValue) {
				return "";
			}

			return parseFloat(sValue).toFixed(2);
		},
		statusState: function(sStatus) {
			switch (sStatus) {
				case 'Procesado':
					return sap.ui.core.ValueState.Success;
					break;
				case 'No Procesado':
					return sap.ui.core.ValueState.Warning;
					break;
				case 'Error':
					return sap.ui.core.ValueState.Error;
					break;

			}

		}
	};

});