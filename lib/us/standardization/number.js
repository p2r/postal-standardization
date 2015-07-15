( function () {
	"use strict";

	var clean = require( "../clean" );

	module.exports = function ( number, matchRequired ) {

		var numberRegex;
		var numberFraction;
		var cleanNumber = clean( number );

		if ( !cleanNumber ) {
			return null;
		}

		numberRegex = /^(\d+(?! *\/))? *-? *(?:(\d+) *\/ *(\d+))?(?:$|\s+.*$)/;

		if ( numberRegex.test( cleanNumber ) ) {
			numberFraction = cleanNumber.match( numberRegex );

			if ( numberFraction[ 1 ] !== undefined ) {
				cleanNumber = numberFraction[ 1 ];
				if ( numberFraction[ 2 ] !== undefined ) {
					cleanNumber = cleanNumber + " ";
				}
			}
			else {
				cleanNumber = "";
			}

			if ( numberFraction[ 2 ] !== undefined ) {
				cleanNumber = cleanNumber + numberFraction[ 2 ] + "/" + numberFraction[ 3 ];
			}
		}
		else {
			if ( matchRequired ) {
				cleanNumber = null;
			}
		}

		return cleanNumber;
	};

} ).call( this );