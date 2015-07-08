( function () {
	"use strict";

	var statePossessionAbbreviations = require( "./statePossessionAbbreviations");
	var streetType = require( "./streetType");
	var streetPrefix = require( "./streetPrefix");
	var streetSuffix = require( "./streetSuffix");
	var country = require( "./country");
	var fips = require( "./fipsStateCodes");
	var zipcode = require( "./zipcode");
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
			statePossessionAbbreviations: statePossessionAbbreviations,
			streetType: streetType,
			streetPrefix: streetPrefix,
			streetSuffix: streetSuffix,
			country: country,
			fips: fips,
			zipcode: zipcode,
			parse: parse
		};

	}

	module.exports = postalStandardization;

} ).call( this );