( function () {
	"use strict";

	//	Publication 28
	//	C1 Street Suffix Abbreviations
	//	http://pe.usps.gov/text/pub28/28apc_002.htm
	//
	//	Tweaked a little

	var clean = require( "../../clean" );
	var logStatus = require( "../../logStatus");

	var streetSuffix = {
		suffixes: {
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
		match: function ( suffix ) {
			var cleanSuffix;

			if ( !suffix ) {
				return;
			}
			cleanSuffix = clean( suffix );
			if ( !cleanSuffix ) {
				return;
			}
			cleanSuffix = cleanSuffix.toUpperCase();

			if ( this.suffixes.hasOwnProperty( cleanSuffix ) ) {
				return this.suffixes[ cleanSuffix ];
			}

			return;
		},
		parse: function ( suffixString ) {
			var suffixParts;
			var suffix;
			var cleanSuffix;

			logStatus( "parse" );

			if ( !suffixString ) {
				return;
			}
			cleanSuffix = clean( suffixString );
			if ( !cleanSuffix ) {
				return;
			}
			cleanSuffix = cleanSuffix.toUpperCase();

			logStatus( "parse", "cleanSuffix", cleanSuffix );

			if ( this.suffixRegExp.test( cleanSuffix ) ) {

				logStatus( "parse", "suffixString", suffixString );

				suffixParts = cleanSuffix.match( this.suffixRegExp );

				logStatus( "parse", "suffixParts", suffixParts );

				if ( suffixParts[ 1 ] !== undefined ) {
					suffix = this.match( suffixParts[ 1 ] );
				}
			}
			else {
				logStatus( "parse", null, "test failed" );
			}

			return suffix;
		}
	};

	var suffix;
	var suffixes = "";

	for ( suffix in streetSuffix.suffixes ) {
		if ( streetSuffix.suffixes.hasOwnProperty( suffix ) ) {
			suffixes += suffixes ? "|" + suffix : suffix;
		}
	}

	streetSuffix.suffixRegExp = new RegExp( "^\\s*(" + suffixes + ")\\s*$", "i" );

	module.exports = streetSuffix;

} ).call( this );