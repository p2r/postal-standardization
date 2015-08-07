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
	var zipLookup = require( "./zipLookup");

	var city = {
		cityRegEx: /^([^,]+)$/i,
		match: function ( cityString, zipcode ) {
			var cleanCity;
			var expectedCities, expectedCity;
			var numCities, i;

			logStatus( "match" );

			if ( !cityString ) {
				return;
			}
			cleanCity = clean( cityString );
			if ( !cleanCity ) {
				return;
			}
			cleanCity = cleanCity.toUpperCase();

			logStatus( "match", "cleanCity", cleanCity );

			if ( zipcode ) {
				expectedCities = zipLookup.getCitiesForZip( zipcode );
				logStatus( "match", "expectedCities", expectedCities );
				numCities = expectedCities ? expectedCities.length : 0;
				for ( i = 0; i < numCities; i++ ) {
					expectedCity = expectedCities[ i ];
					logStatus( "match", "expectedCity", expectedCity );
					if ( cleanCity === expectedCity ) {
						logStatus( "match", "match" );
						return expectedCity;
					}
				}
			}

			return;
		},
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