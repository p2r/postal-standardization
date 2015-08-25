( function () {
	"use strict";

	var zipcode = require( "./zipcode");
	var statePossessionAbbreviations = require( "./statePossessionAbbreviations");
	var street = require( "./street");
	var unitType = require( "./unitType");
	var country = require( "./country");
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
			toAddressString: function ( addressObject ) {

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
						addressString += addressPart;
					}
				}

				var addressString;

				if ( !addressObject ) {
					throw new Error( "No address object to generate string." );
				}

				appendToAddressString( addressObject.number );
				appendToAddressString( addressObject.prefix );
				appendToAddressString( addressObject.street );
				appendToAddressString( addressObject.type );
				appendToAddressString( addressObject.suffix );

				appendToAddressString( addressObject.sec_unit_type );
				appendToAddressString( addressObject.sec_unit_num );

				appendToAddressString( addressObject.city, true );
				appendToAddressString( addressObject.state, true );
				appendToAddressString( addressObject.zip );
				appendToAddressString( addressObject.country, true );

				addressString = addressString.replace( /\n+/g, "\n" );
				addressString = addressString.replace( /,+/g, "," );
				addressString = addressString.replace( /[ ]+/g, " " );

				return addressString;
			},
			zipcode: zipcode,
			statePossessionAbbreviations: statePossessionAbbreviations,
			street: street,
			unitType: unitType,
			country: country,
			number: number,
			parse: parse
		};

	}

	module.exports = postalStandardization;

} ).call( this );