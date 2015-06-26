( function () {
	"use strict";

	//	line1				required	a non-constrained string.
    //	line2 							a non-constrained string.
    //	city_name	 		required	a non-constrained string.
    //	postal_code			required	a non-constrained string (see issue #2).
    //	country_code		required	an ISO 3166-1 alpha-2 code.
    //	subdivision_code				an ISO 3166-2 code.

	var Postal = function ( config ) {

		this.zipcode = {};
		if ( config && config.zipcode && config.zipcode.database ) {
			this.zipcode.database = config.zipcode.database;
		}

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