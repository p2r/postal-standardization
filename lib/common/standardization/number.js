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

	function performRegExp ( numberString, regExp ) {
		var numberFraction;
		var cleanNumber;

		logStatus( "performRegExp" );

		if ( !numberString ) {
			return;
		}
		cleanNumber = clean( numberString );
		if ( !cleanNumber ) {
			return;
		}
		cleanNumber = cleanNumber.toUpperCase();

		logStatus( "performRegExp", "cleanNumber", cleanNumber );

		if ( regExp.test( cleanNumber ) ) {
			numberFraction = cleanNumber.match( regExp );

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
			logStatus( "performRegExp", null, "test failed" );
		}

		return cleanNumber;
	}

	var number = {
		numberParseRegExp: /^(?:\s*|.*?\s+)(\d+(?! *\/))?(?:(?: *- *(\d+))| *-? *(?:(\d+) *\/ *(\d+))?)(?:$|\s+.*$)/i,
		numberMatchRegExp: /^\s*(\d+(?! *\/))?(?:(?: *- *(\d+))| *-? *(?:(\d+) *\/ *(\d+))?)\s*$/,
		parse: function ( numberString ) {
			return performRegExp( numberString, this.numberParseRegExp );
		},
		match: function ( numberString ) {
			return performRegExp( numberString, this.numberMatchRegExp );
		}
	};

	module.exports = number;

} ).call( this );