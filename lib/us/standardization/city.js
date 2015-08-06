( function () {
	"use strict";

	var clean = require( "../clean" );

	module.exports = function ( city ) {

		var cityRegex;
		var cityParts;
		var cleanCity = clean( city );

		if ( !cleanCity ) {
			return null;
		}

		//	Publication 28
		//
		//	???
		//	http://pe.usps.gov/text/pub28/???
		//
		//	Tweaked a little

		cityRegex = /^([^,]+)$/i;

		if ( cityRegex.test( cleanCity ) ) {
			cityParts = cleanCity.match( cityRegex );
			cleanCity = cityParts[ 1 ];
		}
		else {
			cleanCity = null;
		}

		return cleanCity;
	};

} ).call( this );