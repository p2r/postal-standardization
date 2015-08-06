( function () {
	"use strict";

	var clean = require( "../../clean" );

	module.exports = function ( number ) {

		var numberRegex;
		var numberFraction;
		var cleanNumber = clean( number );

		if ( !cleanNumber ) {
			return null;
		}

		//	Publication 28
		//
		//	D1 Hyphenated Address Ranges
		//	http://pe.usps.gov/text/pub28/28apd_002.htm
		//
		//	D4 Fractional Addresses
		//	http://pe.usps.gov/text/pub28/28apd_005.htm
		//
		//	Tweaked a little

		numberRegex = /^(\d+(?! *\/))?(?:(?: *- *(\d+))| *-? *(?:(\d+) *\/ *(\d+))?)(?:\s*)(ST|ND|RD|TH)?\s*$/;

		if ( numberRegex.test( cleanNumber ) ) {
			numberFraction = cleanNumber.match( numberRegex );

			// console.info( cleanNumber + " = " + JSON.stringify( numberFraction, null, "\t" ) );

			if ( numberFraction[ 1 ] !== undefined && numberFraction[ 3 ] !== undefined && numberFraction[ 4 ] !== undefined ) {
				cleanNumber = numberFraction[ 1 ] + " " + numberFraction[ 3 ] + "/" + numberFraction[ 4 ];
			}
			else {
				if ( numberFraction[ 1 ] !== undefined && numberFraction[ 2 ] !== undefined ) {
					cleanNumber = numberFraction[ 1 ] + "-" + numberFraction[ 2 ];
				}
				else {
					if ( numberFraction[ 1 ] !== undefined ) {
						cleanNumber = numberFraction[ 1 ];
					}
					else {
						if ( numberFraction[ 3 ] !== undefined && numberFraction[ 4 ] !== undefined ) {
							cleanNumber = numberFraction[ 3 ] + "/" + numberFraction[ 4 ];
						}
						else {
							cleanNumber = "";
						}
					}
				}
			}

			//	Add ST/ND/etc. to end, if exists
			if ( numberFraction[ 5 ] ) {
				cleanNumber = cleanNumber + numberFraction[ 5 ];
			}

		}
		else {
			cleanNumber = null;
		}

		return cleanNumber;
	};

} ).call( this );