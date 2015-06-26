( function () {
	"use strict";

	function Match( config ) {

		if ( config ) {
			//	TODO: any configuration?
		}

		this.areSameAddress = function ( address1, address2, callback ) {
			if ( this.callbackExists( callback ) ) {
				if ( !address1  ) {
					this.performCallback( callback, "Address 1 not provided." );
					return;
				}
				if ( !address2  ) {
					this.performCallback( callback, "Address 2 not provided." );
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

	module.exports = Match;

} ).call( this );