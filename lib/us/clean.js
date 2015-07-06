( function () {
	"use strict";

	module.exports = function ( valueString ) {
		var cleanValue;

		if ( !valueString ) {
			return null;
		}

		cleanValue = valueString.trim();
		if ( cleanValue === "" ) {
			return null;
		}

		cleanValue = cleanValue.toUpperCase();

		return cleanValue;
	};

} ).call( this );