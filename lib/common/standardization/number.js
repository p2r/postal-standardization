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

	var clean = require( "../clean" );
	var logStatus = require( "../logStatus");

	var number = {
		numberRegExp: /^(\d+(?! *\/))?(?:(?: *- *(\d+))| *-? *(?:(\d+) *\/ *(\d+))?)(?:$|\s+.*$)/,
		numberPartialRegExp: /(\d+(?! *\/))?(?:(?: *- *(\d+))| *-? *(?:(\d+) *\/ *(\d+))?)(?:$|\s+.*)/,
		parse: function ( numberString ) {
			var numberFraction;
			var cleanNumber;

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

			if ( this.numberRegExp.test( cleanNumber ) ) {
				numberFraction = cleanNumber.match( this.numberRegExp );

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
			}
			else {
				cleanNumber = null;
				logStatus( "parse", null, "test failed" );
			}

			return cleanNumber;
		}
	};

	module.exports = number;

} ).call( this );