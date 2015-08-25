( function () {
	"use strict";

	var commonPostalStandardization = require( "../../../common/standardization" );

	var fips = require( "./fipsStateCodes");
	var highwayContract = require( "./highwayContract");
	var parse = require( "./parse");
	var poBox = require( "./poBox");
	var ruralRoute = require( "./ruralRoute");
	var statePossessionAbbreviations = require( "./statePossessionAbbreviations");
	var zipcode = require( "./zipcode");

	var usPostalStandardization = function ( postal, config ) {

		commonPostalStandardization.call( this, postal, config );

		postal.standardization.poBox = poBox;
		postal.standardization.highwayContract = highwayContract;
		postal.standardization.ruralRoute = ruralRoute;
		postal.standardization.statePossessionAbbreviations = statePossessionAbbreviations;
		postal.standardization.fips = fips;
		postal.standardization.zipcode = zipcode;
		postal.standardization.parse = parse;

		postal.standardization.toAddressString = function ( addressObject ) {

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

			appendToAddressString( addressObject.po_box, true );
			appendToAddressString( addressObject.rural_route, true );
			appendToAddressString( addressObject.highway_contract, true );

			appendToAddressString( addressObject.number );
			appendToAddressString( addressObject.prefix );
			appendToAddressString( addressObject.street );
			appendToAddressString( addressObject.type );
			appendToAddressString( addressObject.suffix );

			appendToAddressString( addressObject.sec_unit_type );
			appendToAddressString( addressObject.sec_unit_num );

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

			return addressString;
		};
	};

	module.exports = usPostalStandardization;

} ).call( this );