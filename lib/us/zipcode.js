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
			case "US":
				postalCodeRegex = /^((\d{5})(?:(?:\s*[-]?\s*)(\d{4}))?)$/;
				break;
			case "CA":
				postalCodeRegex = /^([A-Z][0-9][A-Z])\s*([0-9][A-Z][0-9])$/;
				break;
			default:
				postalCodeRegex = /^(?:[A-Z0-9]+([- ]?[A-Z0-9]+)*)?$/;
		}

		if ( postalCodeRegex.test( cleanZipcode ) ) {
			console.info( "\n" + cleanZipcode + " = " + JSON.stringify( cleanZipcode.match( postalCodeRegex ), null, "\t" ) );
			cleanZipcode = cleanZipcode.match( postalCodeRegex )[ 0 ];
			cleanZipcode = cleanZipcode.replace( /[^0-9-]/g, "" );
			if ( cleanZipcode.length === 9 ) {
				cleanZipcode = cleanZipcode.substring( 0, 4 ) + "-" + cleanZipcode.substring( 5 );
			}
		}
		else {
			if ( matchRequired ) {
				cleanZipcode = null;
			}
		}

		return cleanZipcode;
	};

} ).call( this );