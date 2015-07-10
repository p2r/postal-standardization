( function () {
	"use strict";

	var clean = require( "../clean" );

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
			case "NORTHWEST":
			case "NORTH WEST":
			case "NORTH-WEST":
			case "NW":
				cleanPrefix = "NW";
				break;
			case "NORTHEAST":
			case "NORTH EAST":
			case "NORTH-EAST":
			case "NE":
				cleanPrefix = "NE";
				break;
			case "SOUTHWEST":
			case "SOUTH WEST":
			case "SOUTH-WEST":
			case "SW":
				cleanPrefix = "SW";
				break;
			case "SOUTHEAST":
			case "SOUTH EAST":
			case "SOUTH-EAST":
			case "SE":
				cleanPrefix = "SE";
				break;
			default:
				if ( matchRequired ) {
					cleanPrefix = null;
				}
		}

		return cleanPrefix;
	};

} ).call( this );