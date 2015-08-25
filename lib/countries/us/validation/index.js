( function () {
	"use strict";

	var postalValidation = require( "../../../common/validation" );
	var zipLookup = require( "./zipLookup");

	function usPostalValidation( postal, config ) {

		postalValidation.call( postal, config );

		postal.validation.zipLookup = zipLookup;
	}

	module.exports = usPostalValidation;

} ).call( this );