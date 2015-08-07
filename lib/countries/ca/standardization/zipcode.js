( function () {
	"use strict";

	var clean = require( "../../../common/clean" );

	module.exports = function ( zipcode ) {
		var postalCodeRegex;
		var cleanZipcode = clean( zipcode );

		if ( !cleanZipcode ) {
			return null;
		}

		postalCodeRegex = /^([A-Z][0-9][A-Z])\s*([0-9][A-Z][0-9])$/;
		if ( postalCodeRegex.test( cleanZipcode ) ) {
			cleanZipcode = cleanZipcode.match( postalCodeRegex )[ 0 ];
		}
		else {
			cleanZipcode = null;
		}

		return cleanZipcode;
	};

} ).call( this );