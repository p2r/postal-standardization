( function () {
	"use strict";

	var clean = require( "./clean" );

	module.exports = function ( suffix, matchRequired ) {
		var cleanSuffix = clean( suffix );

		if ( !cleanSuffix ) {
			return null;
		}

		switch ( cleanSuffix ) {
			case "EAST":
			case "E":
				cleanSuffix = "E";
				break;
			case "NORTH":
			case "N":
				cleanSuffix = "N";
				break;
			case "SOUTH":
			case "S":
				cleanSuffix = "S";
				break;
			case "WEST":
			case "W":
				cleanSuffix = "W";
				break;
			default:
				if ( matchRequired ) {
					cleanSuffix = null;
				}
		}

		return cleanSuffix;
	};

} ).call( this );