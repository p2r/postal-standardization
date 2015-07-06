( function () {
	"use strict";

	var clean = require( "./clean" );

	module.exports = function ( prefix, matchRequired ) {
		var cleanPrefix = clean( prefix );

		if ( !cleanPrefix ) {
			return null;
		}

		switch ( cleanPrefix ) {
			case "EAST":
			case "E":
				cleanPrefix = "E";
				break;
			case "NORTH":
			case "N":
				cleanPrefix = "N";
				break;
			case "SOUTH":
			case "S":
				cleanPrefix = "S";
				break;
			case "WEST":
			case "W":
				cleanPrefix = "W";
				break;
			default:
				if ( matchRequired ) {
					cleanPrefix = null;
				}
		}

		return cleanPrefix;
	};

} ).call( this );