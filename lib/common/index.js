( function () {
	"use strict";

	var postalStandardization = require( "./standardization" );
	var postalMatch = require( "./match" );
	var postalValidation = require( "./validation" );

	var Postal = function ( config ) {

		this.zipcode = {};
		if ( config && config.zipcode && config.zipcode.database ) {
			this.zipcode.database = config.zipcode.database;
		}

		if ( !config ) {
			config = {};
		}

		postalStandardization( this, config );
		postalMatch( this, config );
		postalValidation( this, config );
	};

	Postal.prototype.callbackExists = function ( callback ) {
		if ( callback ) {
			if ( typeof( callback ) === "function" ) {
				return true;
			}
		}
		return false;
	};

	Postal.prototype.performCallback = function ( callback, err, result ) {
		if ( this.callbackExists( callback ) ) {
			callback( err, result );
		}
	};

	module.exports = Postal;

} ).call( this );