( function () {
	"use strict";

	var postalValidation = require( "../../../common/validation" );
	var zipLookup = require( "./zipLookup");

	function canadaPostalValidation( postal, config ) {

		postalValidation.call( postal, config );

		postal.validation.zipLookup = zipLookup;
	}

	module.exports = canadaPostalValidation;

} ).call( this );