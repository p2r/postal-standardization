( function () {
	"use strict";

	var clean = require( "../../../common/clean" );
	var zipcodes = require( "./zipLookup.json" );
	var cities = {};

	var city, cityZips;
	var country, countryObj;
	var state, stateObj;
	var zip, zipObj;

	for ( zip in zipcodes ) {
		if ( zipcodes.hasOwnProperty( zip ) ) {
			zipObj = zipcodes[ zip ];

			zipObj.city = clean( zipObj.city );
			zipObj.state = clean( zipObj.state );

			country = "CA";
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
		}
	}

	module.exports = {
		zipcodes: zipcodes,
		cities: cities,
		getLocationForZip: function( zipcode ) {
			var zipObj;
			var location = {};

			if ( zipcodes.hasOwnProperty( zipcode ) ) {
				zipObj = zipcodes[ zipcode ];
				location.country = zipObj.country || "CA";
				location.state = zipObj.state;
				location.city = zipObj.city;
			}

			return location;
		},
		getCitiesForZip: function( zipcode ) {
			var cities = [];

			if ( zipcodes.hasOwnProperty( zipcode ) ) {
				zipObj = zipcodes[ zipcode ];
				cities.push( zipObj.city );
			}

			return cities;
		},
		getZipsForLocation: function( city, state, country ) {
			var zipcodes;
			var cleanState = clean( state );
			var cleanCity = clean( city );
			var cleanCountry = clean( country || "CA" );
			var countryObj = cities[ cleanCountry ];
			var stateObj;

			if ( countryObj && state ) {
				state = clean( state );
				stateObj = countryObj[ cleanState ];

				if ( stateObj && city ) {
					if ( stateObj.hasOwnProperty( cleanCity ) ) {
						zipcodes = stateObj[ cleanCity ];
					}
				}
			}

			return zipcodes;
		}
	};

} ).call( this );