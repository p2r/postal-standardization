( function () {
	"use strict";

	var clean = require( "../clean" );

	module.exports = function ( zipcode ) {

		var postalCodeRegExp;
		var cleanZipcode = clean( zipcode );

		if ( !cleanZipcode ) {
			return null;
		}

		postalCodeRegExp = /^(\d{5})$/;	//	Not valid; forcing to be overridden.
		if ( postalCodeRegExp.test( cleanZipcode ) ) {
			cleanZipcode = cleanZipcode.match( postalCodeRegExp )[ 0 ];
		}
		else {
			cleanZipcode = null;
		}

		return cleanZipcode;
	};

} ).call( this );