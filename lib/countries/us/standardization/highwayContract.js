( function () {
	"use strict";

	//	Publication 28
	//
	//	25 Highway Contract Route Addresses
	//	http://pe.usps.gov/text/pub28/28c2_027.htm
	//
	//	Tweaked a little

	var clean = require( "../../../common/clean" );
	var logStatus = require( "../../../common/logStatus" );

	function performRegExp ( highwayString, regExp ) {
		var highwayParts;
		var cleanHighway;

		logStatus( "parse" );

		if ( !highwayString ) {
			return;
		}
		cleanHighway = clean( highwayString );
		if ( !cleanHighway ) {
			return;
		}
		cleanHighway = cleanHighway.toUpperCase();

		logStatus( "parse", "cleanHighway", cleanHighway );

		cleanHighway = cleanHighway.replace( /#/gi, "" );
		cleanHighway = cleanHighway.replace( /\./gi, "" );
		cleanHighway = cleanHighway.replace( /highway\s*contract\s*route/gi, "HC" );
		cleanHighway = cleanHighway.replace( /highway\s*contract/gi, "HC" );
		cleanHighway = cleanHighway.replace( /highway\s*route/gi, "HC" );
		cleanHighway = cleanHighway.replace( /hwy\s*contract\s*route/gi, "HC" );
		cleanHighway = cleanHighway.replace( /hwy\s*contract/gi, "HC" );
		cleanHighway = cleanHighway.replace( /hwy\s*route/gi, "HC" );

		if ( regExp.test( cleanHighway ) ) {
			highwayParts = cleanHighway.match( regExp );
			cleanHighway = "HC " + highwayParts[ 1 ] + " BOX " + highwayParts[ 2 ];
		}
		else {
			cleanHighway = null;
			logStatus( "parse", null, "test failed" );
		}

		return cleanHighway;
	}

	var highwayContract = {
		highwayParseRegExp: /^(?:\s*|.*?\s+)H\s*(?:C)?\s*(\d+)\s*BOX\s*(\S+)(?:$|\s+.*$)/i,
		highwayMatchRegExp: /^\s*H\s*(?:C)?\s*(\d+)\s*BOX\s*(\S+)\s*$/i,
		parse: function ( highwayString ) {
			return performRegExp( highwayString, this.highwayParseRegExp );
		},
		match: function ( highwayString ) {
			return performRegExp( highwayString, this.highwayMatchRegExp );
		}
	};

	module.exports = highwayContract;

} ).call( this );