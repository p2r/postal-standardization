( function () {
	"use strict";

	function Standardization( config ) {

		if ( config ) {
			//	TODO: any configuration?
		}

		this.standardizeString = function ( string, callback ) {
			var cleanString;

			if ( this.callbackExists( callback ) ) {
				if ( !string || typeof( string ) !== "string" ) {
					this.performCallback( callback, "No string provided." );
					return;
				}
				cleanString = string.trim();
				if ( cleanString === "" ) {
					this.performCallback( callback, "Empty string provided." );
					return;
				}
			}
			else {
				return;
			}

			//	TODO: Implement
			this.performCallback( callback, "Not implemented." );
			return;
		};

	}

	Standardization.prototype.statePossessionAbbreviations = require( "./statePossessionAbbreviations");
	Standardization.prototype.streetSuffix = require( "./streetSuffix");

	module.exports = Standardization;

} ).call( this );