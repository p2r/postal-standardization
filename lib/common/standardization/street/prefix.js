( function () {
	"use strict";

	var clean = require( "../../clean" );
	var logStatus = require( "../../logStatus");

	var streetPrefix = {
		prefixes: {
			"EAST": "E",
			"E.": "E",
			"E": "E",
			"NORTH": "N",
			"N.": "N",
			"N": "N",
			"SOUTH": "S",
			"S.": "S",
			"S": "S",
			"WEST": "W",
			"W.": "W",
			"W": "W",
			"NORTHWEST": "NW",
			"NORTH WEST": "NW",
			"NORTH-WEST": "NW",
			"N.W.": "NW",
			"N W": "NW",
			"NW": "NW",
			"NORTHEAST": "NE",
			"NORTH EAST": "NE",
			"NORTH-EAST": "NE",
			"N.E.": "NE",
			"N E": "NE",
			"NE": "NE",
			"SOUTHWEST": "SW",
			"SOUTH WEST": "SW",
			"SOUTH-WEST": "SW",
			"SW": "SW",
			"S.W.": "SW",
			"S W": "SW",
			"SOUTHEAST": "SE",
			"SOUTH EAST": "SE",
			"SOUTH-EAST": "SE",
			"S.E.": "SE",
			"S E": "SE",
			"SE": "SE"
		},
		match: function ( prefix ) {
			var cleanPrefix;

			if ( !prefix ) {
				return;
			}
			cleanPrefix = clean( prefix );
			if ( !cleanPrefix ) {
				return;
			}
			cleanPrefix = cleanPrefix.toUpperCase();

			if ( this.prefixes.hasOwnProperty( cleanPrefix ) ) {
				return this.prefixes[ cleanPrefix ];
			}

			return;
		},
		parse: function ( prefixString ) {
			var prefixParts;
			var prefix;
			var cleanPrefix;

			logStatus( "parse" );

			if ( !prefixString ) {
				return;
			}
			cleanPrefix = clean( prefixString );
			if ( !cleanPrefix ) {
				return;
			}
			cleanPrefix = cleanPrefix.toUpperCase();

			logStatus( "parse", "cleanPrefix", cleanPrefix );

			if ( this.prefixRegExp.test( cleanPrefix ) ) {

				logStatus( "parse", "prefixString", prefixString );

				prefixParts = cleanPrefix.match( this.prefixRegExp );

				logStatus( "parse", "prefixParts", prefixParts );

				if ( prefixParts[ 1 ] !== undefined ) {
					prefix = this.match( prefixParts[ 1 ] );
				}
			}
			else {
				logStatus( "parse", null, "test failed" );
			}

			return prefix;
		}
	};

	var prefix;
	var prefixes = "";

	for ( prefix in streetPrefix.prefixes ) {
		if ( streetPrefix.prefixes.hasOwnProperty( prefix ) ) {
			prefixes += prefixes ? "|" + prefix : prefix;
		}
	}

	streetPrefix.prefixRegExp = new RegExp( "^\\s*(" + prefixes + ")\\s*$", "i" );
	streetPrefix.prefixPartialRegExp = new RegExp( prefixes, "i" );

	module.exports = streetPrefix;

} ).call( this );