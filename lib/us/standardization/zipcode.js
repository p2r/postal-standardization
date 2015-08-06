( function () {
	"use strict";

	var clean = require( "../clean" );
	var country = require( "./country" );

	module.exports = function ( zipcode, countryCode ) {

		var postalCodeRegex;
		var countryName;
		var cleanZipcode = clean( zipcode );

		if ( !cleanZipcode ) {
			return null;
		}

		countryName = country( countryCode || "UNITED STATES" );
		if ( !countryName ) {
			countryName = "UNITED STATES";
		}

		switch ( countryName ) {
			case "CANADA":
				postalCodeRegex = /^([A-Z][0-9][A-Z])\s*([0-9][A-Z][0-9])$/;
				if ( postalCodeRegex.test( cleanZipcode ) ) {
					cleanZipcode = cleanZipcode.match( postalCodeRegex )[ 0 ];
				}
				else {
					cleanZipcode = null;
				}
				break;
			case "UNITED STATES":
				/* falls through */
			default:
				postalCodeRegex = /^((\d{5})(?:(?:(?:\s*-?\s*)|(?:\s+))(\d{4}))?)$/;
				if ( postalCodeRegex.test( cleanZipcode ) ) {
					cleanZipcode = cleanZipcode.match( postalCodeRegex )[ 0 ];
					cleanZipcode = cleanZipcode.replace( /[^0-9-]/g, "" );
					if ( cleanZipcode.length === 9 ) {
						cleanZipcode = cleanZipcode.substring( 0, 5 ) + "-" + cleanZipcode.substring( 5 );
					}
				}
				else {
					cleanZipcode = null;
				}
		}

		return cleanZipcode;
	};

} ).call( this );