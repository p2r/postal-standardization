( function () {
	"use strict";

	//	Publication 28
	//
	//	D1 Hyphenated Address Ranges
	//	http://pe.usps.gov/text/pub28/28apd_002.htm
	//
	//	D4 Fractional Addresses
	//	http://pe.usps.gov/text/pub28/28apd_005.htm
	//
	//	Tweaked a little

	var clean = require( "../../clean" );
	var logStatus = require( "../../logStatus");

	var streetNumber = {
		numberRegExp: /^(\d+(?! *\/))?(?:(?: *- *(\d+))| *-? *(?:(\d+) *\/ *(\d+))?)(?:\s*)\s*$/,
		numberPartialRegExp: /(\d+(?! *\/))?(?:(?: *- *(\d+))| *-? *(?:(\d+) *\/ *(\d+))?)(?:\s*)/,
		countRegExp: /^(\d+(?! *\/))?(?:(?: *- *(\d+))| *-? *(?:(\d+) *\/ *(\d+))?)(?:\s*)(ST|ND|RD|TH)?\s*$/,
		countPartialRegExp: /^(\d+(?! *\/))?(?:(?: *- *(\d+))| *-? *(?:(\d+) *\/ *(\d+))?)(?:\s*)(ST|ND|RD|TH)?\s*$/,
		parse: function ( numberString ) {
			var numberFraction;
			var cleanNumber = clean( numberString );

			logStatus( "parse" );

			if ( !numberString ) {
				return;
			}
			cleanNumber = clean( numberString );
			if ( !cleanNumber ) {
				return;
			}
			cleanNumber = cleanNumber.toUpperCase();

			logStatus( "parse", "cleanNumber", cleanNumber );

			if ( this.countRegExp.test( cleanNumber ) ) {
				numberFraction = cleanNumber.match( this.countRegExp );

				logStatus( "parse", "numberFraction", numberFraction );

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
				logStatus( "parse", null, "test failed" );
			}

			return cleanNumber;
		}
	};

	module.exports = streetNumber;

} ).call( this );