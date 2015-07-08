( function () {
	"use strict";

	function postalValidation( postal, config ) {

		if ( !postal ) {
			return;
		}

		if ( config ) {
			//	TODO: any configuration?
		}

		postal.validation = {
			validate: function ( address, callback ) {
				if ( this.callbackExists( callback ) ) {
					if ( !address  ) {
						this.performCallback( callback, "Address not provided." );
						return;
					}
				}
				else {
					return;
				}

				//	TODO: Implement
				return;
			}
		};

	}

	module.exports = postalValidation;

} ).call( this );