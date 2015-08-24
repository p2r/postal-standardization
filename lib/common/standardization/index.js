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
			// standardizeString: function ( string, callback ) {
			// 	var cleanString;

			// 	if ( postal.callbackExists( callback ) ) {
			// 		if ( !string || typeof( string ) !== "string" ) {
			// 			postal.performCallback( callback, "No string provided." );
			// 			return;
			// 		}
			// 		cleanString = string.trim();
			// 		if ( cleanString === "" ) {
			// 			postal.performCallback( callback, "Empty string provided." );
			// 			return;
			// 		}
			// 	}
			// 	else {
			// 		throw new Error( "No callback defined for standardizeString()." );
			// 	}

			// 	//	TODO: Implement
			// 	postal.performCallback( callback, "Not implemented." );
			// },
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
			toString: function ( addressObject ) {

				function appendToAddressString( addressPart, standalone ) {
					if ( addressPart ) {
						if ( !addressString ) {
							addressString = "";
						}
						else {
							if ( addressString ) {
								addressString += standalone ? ", " : " ";
							}
						}
					}
				}

				var addressString;

				if ( !addressObject ) {
					throw new Error( "No address object to generate string." );
				}

				appendToAddressString( addressObject.po_box, true );
				appendToAddressString( addressObject.rural_route, true );
				appendToAddressString( addressObject.highway_contract, true );
				appendToAddressString( addressObject.number );
				appendToAddressString( addressObject.prefix );
				appendToAddressString( addressObject.street );
				appendToAddressString( addressObject.suffix );

				if ( addressObject.street1 ) {
					appendToAddressString( addressObject.prefix1 );
					appendToAddressString( addressObject.street1 );
					appendToAddressString( addressObject.type1 );
					appendToAddressString( addressObject.suffix1 );
					appendToAddressString( "&" );
					appendToAddressString( addressObject.prefix2 );
					appendToAddressString( addressObject.street2 );
					appendToAddressString( addressObject.type2 );
					appendToAddressString( addressObject.suffix2 );
				}

				appendToAddressString( addressObject.unit, true );
				appendToAddressString( addressObject.city, true );
				appendToAddressString( addressObject.state, true );
				appendToAddressString( addressObject.zip );
				appendToAddressString( addressObject.country, true );

				addressString = addressString.replace( /\n+/g, "\n" );
				addressString = addressString.replace( /,+/g, "," );
				addressString = addressString.replace( /[ ]+/g, " " );

				console.info( "BLAH!" );
				console.info( addressString );

				return addressString;
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