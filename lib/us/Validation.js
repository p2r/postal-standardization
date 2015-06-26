( function () {
	"use strict";

	function Validation( config ) {

		if ( config ) {
			//	TODO: any configuration?
		}

		this.validate = function ( address, callback ) {
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
		};

	}

	module.exports = Validation;

} ).call( this );