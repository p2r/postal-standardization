( function () {
	"use strict";

	var clean = require( "../clean" );

	module.exports = function ( number, matchRequired ) {

		var numberRegex;
		var streetNumber;
		var cleanNumber = clean( number );

		if ( !cleanNumber ) {
			return null;
		}

		numberRegex = /^((\d+)(?:\s*)(ST|ND|RD|TH)?)$/;

		if ( numberRegex.test( cleanNumber ) ) {
			streetNumber = cleanNumber.match( numberRegex );
			if ( streetNumber[ 3 ] ) {
				cleanNumber = streetNumber[ 2 ] + streetNumber[ 3 ];
			}
			else {
				cleanNumber = streetNumber[ 2 ];
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