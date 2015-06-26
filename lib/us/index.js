( function () {
	"use strict";

	var inherits = require( "util" ).inherits;
	var GenericPostal = require( "../Postal" );

	var USPostal = function ( config ) {
		var Standardization = require( "./Standardization" );
		var Match = require( "./Match" );

		GenericPostal.call( this, config );

		this.standardization = new Standardization( config );
		this.match = new Match( config );
	};

	inherits( USPostal, GenericPostal );

	module.exports = USPostal;

} ).call( this );