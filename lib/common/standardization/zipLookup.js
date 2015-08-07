( function () {
	"use strict";

	var clean = require( "../clean.js" );
	var zipcodes = require( "./zipLookup.json" );
	var cities = {};

	var city, cityZips;
	var i, numCities;
	var country, countryObj;
	var state, stateObj;
	var zip, zipObj;

	for ( zip in zipcodes ) {
		if ( zipcodes.hasOwnProperty( zip ) ) {
			zipObj = zipcodes[ zip ];

			country = clean( zipObj.country );
			if ( !cities.hasOwnProperty( country ) ) {
				cities[ country ] = {};
			}
			countryObj = cities[ country ];

			state = clean( zipObj.state );
			if ( !countryObj.hasOwnProperty( state ) ) {
				countryObj[ state ] = {};
			}
			stateObj = countryObj[ state ];

			city = clean( zipObj.city );
			if ( !stateObj.hasOwnProperty( city ) ) {
				stateObj[ city ] = [];
			}
			cityZips = stateObj[ city ];
			if ( cityZips.indexOf( zip ) === -1 ) {
				cityZips.push( zip );
			}

			numCities = zipObj.cities.length;
			for ( i = 0; i < numCities; i++ ) {
				city = zipObj.cities[ i ];

				if ( !stateObj.hasOwnProperty( city ) ) {
					stateObj[ city ] = [];
				}
				cityZips = stateObj[ city ];
				if ( cityZips.indexOf( zip ) === -1 ) {
					cityZips.push( zip );
				}
			}
		}
	}

	module.exports = {
		zipcodes: zipcodes,
		cities: cities,
		getLocationForZip: function( zipcode ) {
			var zipObj;
			var zip = zipcode.split( "-" )[ 0 ];
			var location = {};

			if ( zipcodes.hasOwnProperty( zip ) ) {
				zipObj = zipcodes[ zip ];
				location.country = zipObj.country;
				location.state = zipObj.state;
				location.city = zipObj.city;
			}

			return location;
		},
		getCitiesForZip: function( zipcode ) {
			var zip = zipcode.split( "-" )[ 0 ];
			var cities = [];
			var numCities, i;

			if ( zipcodes.hasOwnProperty( zip ) ) {
				zipObj = zipcodes[ zip ];
				cities.push( zipObj.city );
				numCities = zipObj.cities.length;
				for ( i =0; i < numCities; i++ ) {
					cities.push( zipObj.cities[ i ] );
				}
			}

			return cities;
		},
		getZipsForLocation: function( city, state, country ) {
			var zipcodes;
			var countryObj = country ? cities[ country.toUpperCase() ] : cities.US;
			var stateObj;

			if ( countryObj && state ) {
				stateObj = countryObj[ state.toUpperCase() ];

				if ( stateObj && city ) {
					if ( stateObj.hasOwnProperty( city.toUpperCase() ) ) {
						zipcodes = stateObj[ city.toUpperCase() ];
					}
				}
			}

			return zipcodes;
		}
	};

} ).call( this );