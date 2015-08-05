( function () {
	"use strict";

	var clean = require( "../../clean" );

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
			case "NORTHWEST":
			case "NORTH WEST":
			case "NORTH-WEST":
			case "NW":
				cleanSuffix = "NW";
				break;
			case "NORTHEAST":
			case "NORTH EAST":
			case "NORTH-EAST":
			case "NE":
				cleanSuffix = "NE";
				break;
			case "SOUTHWEST":
			case "SOUTH WEST":
			case "SOUTH-WEST":
			case "SW":
				cleanSuffix = "SW";
				break;
			case "SOUTHEAST":
			case "SOUTH EAST":
			case "SOUTH-EAST":
			case "SE":
				cleanSuffix = "SE";
				break;
			default:
				if ( matchRequired ) {
					cleanSuffix = null;
				}
		}

		return cleanSuffix;
	};

} ).call( this );