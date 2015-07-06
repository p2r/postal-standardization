( function () {
	"use strict";

	module.exports = function ( zipcode, matchRequired ) {
		var cleanZipCode;
		// var zipRegEx = "^\\d{5}([\\-]\\d{4})?$";

		if ( !zipcode ) {
			return null;
		}

		cleanZipCode = zipcode.trim();
		if ( cleanZipCode === "" ) {
			return null;
		}

		cleanZipCode = cleanZipCode.toUpperCase();

		if ( !cleanZipCode && matchRequired ) {
			return null;
		}

		return cleanZipCode;
	};

} ).call( this );