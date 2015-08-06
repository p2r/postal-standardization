( function () {
	"use strict";

	//	Publication 28
	//
	//	???
	//	http://pe.usps.gov/text/pub28/???
	//
	//	Tweaked a little

	var clean = require( "../clean" );
	var logStatus = require( "../logStatus");

	var city = {
		cityRegEx: /^([^,]+)$/i,
		parse: function ( cityString ) {
			var cityParts;
			var cleanCity;

			logStatus( "parse" );

			if ( !cityString ) {
				return;
			}
			cleanCity = clean( cityString );
			if ( !cleanCity ) {
				return;
			}
			cleanCity = cleanCity.toUpperCase();

			logStatus( "parse", "cleanCity", cleanCity );

			if ( this.cityRegEx.test( cleanCity ) ) {
				cityParts = cleanCity.match( this.cityRegEx );
				cleanCity = cityParts[ 1 ];
			}
			else {
				cleanCity = null;
				logStatus( "parse", null, "test failed" );
			}

			return cleanCity;
		}
	};

	module.exports = city;

} ).call( this );