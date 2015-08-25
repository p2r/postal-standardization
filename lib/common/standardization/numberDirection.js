( function () {
	"use strict";

	//	Publication 28
	//
	//	???
	//	http://pe.usps.gov/text/pub28/???
	//
	//	Tweaked a little

	var clean = require( "../clean" );
	var logStatus = require( "../logStatus");

	function performRegExp ( numberDirectionString, regExp ) {
		var numberDirection;
		var cleanNumberDirection;

		logStatus( "performRegExp" );

		if ( !numberDirectionString ) {
			return;
		}
		cleanNumberDirection = clean( numberDirectionString );
		if ( !cleanNumberDirection ) {
			return;
		}
		cleanNumberDirection = cleanNumberDirection.toUpperCase();

		logStatus( "performRegExp", "cleanNumberDirection", cleanNumberDirection );

		if ( regExp.test( cleanNumberDirection ) ) {
			numberDirection = cleanNumberDirection.match( regExp );

			cleanNumberDirection = {
				number: numberDirection[ 1 ],
				direction: numberDirection[ 2 ]
			};
		}
		else {
			cleanNumberDirection = null;
			logStatus( "performRegExp", null, "test failed" );
		}

		return cleanNumberDirection;
	}

	var numberDirection = {
		numberDirectionParseRegExp: /^(\d+)((?:[NS][EW])|[NSEW])/i,
		numberDirectionMatchRegExp: /^\s*(\d+)((?:[NS][EW])|[NSEW])\s*$/i,
		parse: function ( numberDirectionString ) {
			return performRegExp( numberDirectionString, this.numberDirectionParseRegExp );
		},
		match: function ( numberDirectionString ) {
			return performRegExp( numberDirectionString, this.numberDirectionMatchRegExp );
		}
	};

	module.exports = numberDirection;

} ).call( this );