( function () {
	"use strict";

	var clean = require( "../clean" );

	module.exports = function ( state ) {
		var cleanState = clean( state );

		if ( !cleanState ) {
			return null;
		}

		switch ( cleanState ) {
			default:
				cleanState = null;
		}

		return cleanState;
	};

} ).call( this );