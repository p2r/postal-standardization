( function () {
	"use strict";

	var clean = require( "./clean" );
	var country = require( "./country" );

	module.exports = function ( zipcode, countryCode, matchRequired ) {

		var postalCodeRegex;
		var cleanZipcode = clean( zipcode );

		if ( !cleanZipcode ) {
			return null;
		}

		countryCode = country( countryCode || "US", true );
		if ( !countryCode ) {
			countryCode = "US";
		}

		switch ( countryCode ) {
			case "CA":
				postalCodeRegex = /^([A-Z][0-9][A-Z])\s*([0-9][A-Z][0-9])$/;
				if ( postalCodeRegex.test( cleanZipcode ) ) {
					cleanZipcode = cleanZipcode.match( postalCodeRegex )[ 0 ];
				}
				else {
					if ( matchRequired ) {
						cleanZipcode = null;
					}
				}
				break;
			case "US":
				/* falls through */
			default:
				postalCodeRegex = /^((\d{5})(?:(?:(?:\s*-\s*)|(?:\s+))(\d{4}))?)$/;
				if ( postalCodeRegex.test( cleanZipcode ) ) {
					cleanZipcode = cleanZipcode.match( postalCodeRegex )[ 0 ];
					cleanZipcode = cleanZipcode.replace( /[^0-9-]/g, "" );
					if ( cleanZipcode.length === 9 ) {
						cleanZipcode = cleanZipcode.substring( 0, 5 ) + "-" + cleanZipcode.substring( 5 );
					}
				}
				else {
					if ( matchRequired ) {
						cleanZipcode = null;
					}
				}
		}

		return cleanZipcode;
	};

} ).call( this );