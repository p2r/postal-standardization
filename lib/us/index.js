( function () {
	"use strict";

	var inherits = require( "util" ).inherits;
	var GenericPostal = require( "../Postal" );

	var postalStandardization = require( "./postalStandardization" );
	var postalMatch = require( "./postalMatch" );
	var postalValidation = require( "./postalValidation" );

	//	line1				required	a non-constrained string.
    //	line2 							a non-constrained string.
    //	city_name	 		required	a non-constrained string.
    //	postal_code			required	a non-constrained string (see issue #2).
    //	country_code		required	an ISO 3166-1 alpha-2 code.
    //	subdivision_code				an ISO 3166-2 code.

	var USPostal = function ( config ) {

		GenericPostal.call( this, config );

		if ( !config ) {
			config = {};
		}

		postalStandardization( this, config );
		postalMatch( this, config );
		postalValidation( this, config );
	};

	inherits( USPostal, GenericPostal );

	module.exports = USPostal;

} ).call( this );