( function () {
	"use strict";

	var poBox = require( "./poBox");
	var highwayContract = require( "./highwayContract");
	var ruralRoute = require( "./ruralRoute");
	var statePossessionAbbreviations = require( "./statePossessionAbbreviations");
	var street = require( "./street");
	var unitType = require( "./unitType");
	var country = require( "./country");
	var fips = require( "./fipsStateCodes");
	var zipcode = require( "./zipcode");
	var zipLookup = require( "./zipLookup");
	var number = require( "./number");
	var parse = require( "./parse");

	function postalStandardization( postal, config ) {

		if ( !postal ) {
			return;
		}

		if ( config ) {
			//	TODO: any configuration?
		}

		postal.standardization = {
			standardizeString: function ( string, callback ) {
				var cleanString;

				if ( postal.callbackExists( callback ) ) {
					if ( !string || typeof( string ) !== "string" ) {
						postal.performCallback( callback, "No string provided." );
						return;
					}
					cleanString = string.trim();
					if ( cleanString === "" ) {
						postal.performCallback( callback, "Empty string provided." );
						return;
					}
				}
				else {
					throw new Error( "No callback defined for standardizeString()." );
				}

				//	TODO: Implement
				postal.performCallback( callback, "Not implemented." );
			},
			parseAddress: function ( addressString, callback ) {
				var cleanString;

				if ( postal.callbackExists( callback ) ) {
					if ( !addressString || typeof( addressString ) !== "string" ) {
						postal.performCallback( callback, "No string provided." );
						return;
					}
					cleanString = addressString.trim();
					if ( cleanString === "" ) {
						postal.performCallback( callback, "Empty string provided." );
						return;
					}
				}
				else {
					throw new Error( "No callback defined for parseAddress()." );
				}

				this.parse( cleanString, callback );
			},
			poBox: poBox,
			highwayContract: highwayContract,
			ruralRoute: ruralRoute,
			street: street,
			statePossessionAbbreviations: statePossessionAbbreviations,
			unitType: unitType,
			country: country,
			fips: fips,
			zipcode: zipcode,
			zipLookup: zipLookup,
			number: number,
			parse: parse
		};

	}

	module.exports = postalStandardization;

} ).call( this );