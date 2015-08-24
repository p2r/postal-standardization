( function () {
	"use strict";

	//	Publication 28
	//
	//	28 Post Office Box Addresses
	//	http://pe.usps.gov/text/pub28/28c2_037.htm
	//
	//	Tweaked a little

	var clean = require( "../clean" );
	var logStatus = require( "../logStatus");

	function performRegExp ( poBoxString, regExp ) {
		var poBoxParts;
		var cleanPOBox;

		logStatus( "parse" );

		if ( !poBoxString ) {
			return;
		}
		cleanPOBox = clean( poBoxString );
		if ( !cleanPOBox ) {
			return;
		}
		cleanPOBox = cleanPOBox.toUpperCase();

		logStatus( "parse", "cleanPOBox", cleanPOBox );

		cleanPOBox = cleanPOBox.replace( /#/gi, "" );
		cleanPOBox = cleanPOBox.replace( /\./gi, "" );
		cleanPOBox = cleanPOBox.replace( /p\s*o/gi, "PO" );
		cleanPOBox = cleanPOBox.replace( /post\s*office/gi, "PO" );
		cleanPOBox = cleanPOBox.replace( /post\s*off/gi, "PO" );
		cleanPOBox = cleanPOBox.replace( /off(ice)*\s*/gi, "O" );
		cleanPOBox = cleanPOBox.replace( /post\s*/gi, "P" );

		if ( regExp.test( cleanPOBox ) ) {
			poBoxParts = cleanPOBox.match( regExp );
			// 282 Leading Zero
			cleanPOBox = "PO BOX " + poBoxParts[ 1 ].replace( /\-/g, "0" );
		}
		else {
			cleanPOBox = null;
			logStatus( "parse", null, "test failed" );
		}

		return cleanPOBox;
	}

	var poBox = {
		poBoxParseRegExp: /^(?:\s*|.*?\s+)P\s*(?:O)?\s*BOX\s*(?:#?)\s*([\-\d]+)(?:$|\s+.*$)/i,
		poBoxMatchRegExp: /^\s*P\s*(?:O)?\s*BOX\s*(?:#?)\s*([\-\d]+)\s*$/i,
		parse: function ( poBoxString ) {
			return performRegExp( poBoxString, this.poBoxParseRegExp );
		},
		match: function ( poBoxString ) {
			return performRegExp( poBoxString, this.poBoxMatchRegExp );
		}
	};

	module.exports = poBox;

} ).call( this );