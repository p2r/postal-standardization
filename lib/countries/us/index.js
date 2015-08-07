( function () {
	"use strict";

	var inherits = require( "util" ).inherits;
	var Postal = require( "../../common" );

	var postalStandardization = require( "./standardization" );
	var postalMatch = require( "./match" );
	var postalValidation = require( "./validation" );

	var USPostal = function ( config ) {

		Postal.call( this, config );

		if ( !config ) {
			config = {};
		}

		postalStandardization( this, config );
		postalMatch( this, config );
		postalValidation( this, config );
	};

	inherits( USPostal, Postal );

	module.exports = USPostal;

} ).call( this );