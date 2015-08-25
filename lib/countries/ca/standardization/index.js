( function () {
	"use strict";

	var postalStandardization = require( "../../../common/standardization" );
	var statePossessionAbbreviations = require( "./statePossessionAbbreviations" );
	var zipcode = require( "./zipcode" );
	var fips = require( "./fipsStateCodes" );

	function canadaPostalStandardization( postal, config ) {

		postalStandardization.call( postal, config );

		postal.standardization.statePossessionAbbreviations = statePossessionAbbreviations;
		postal.standardization.zipcode = zipcode;
		postal.standardization.fips = fips;
	}

	module.exports = canadaPostalStandardization;

} ).call( this );