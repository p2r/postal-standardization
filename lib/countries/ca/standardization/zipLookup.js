( function () {
	"use strict";

	function getStateForZip( zipcode ) {
		var state;
		var fsa = zipcode.split( "-" )[ 0 ];
		var postalDistrict = fsa ? fsa[ 0 ] : "";

		switch ( postalDistrict ) {
			case "A":
				state = "NL";
				break;
			case "B":
				state = "NS";
				break;
			case "C":
				state = "PE";
				break;
			case "E":
				state = "NB";
				break;
			case "G":
			case "H":
			case "J":
				state = "QC";
				break;
			case "K":
			case "L":
			case "M":
			case "N":
			case "P":
				state = "ON";
				break;
			case "R":
				state = "MB";
				break;
			case "S":
				state = "SK";
				break;
			case "T":
				state = "AB";
				break;
			case "V":
				state = "BC";
				break;
			case "X":
				state = "NT";
				//	Some are "NU", but will be explicitly called out in JSON.
				break;
			case "Y":
				state = "YT";
				break;
		}

		return state;
	}

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
			if ( zipObj.state ) {
				zipObj.state = clean( zipObj.state );
				state = zipObj.state;
			}
			else {
				state = getStateForZip( zip );
			}

			country = "CA";
			if ( !cities.hasOwnProperty( country ) ) {
				cities[ country ] = {};
			}
			countryObj = cities[ country ];

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
			var state = getStateForZip( zipcode );

			if ( zipcodes.hasOwnProperty( zipcode ) ) {
				zipObj = zipcodes[ zipcode ];
				location.country = zipObj.country || "CA";
				location.city = zipObj.city;
				location.state = zipObj.state ? zipObj.state : state;
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