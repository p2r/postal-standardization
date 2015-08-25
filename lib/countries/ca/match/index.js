( function () {
	"use strict";

	var commonPostalMatch = require( "../../../common/match" );
	// var xyz = require( "./xyz" );

	function canadaPostalMatch( postal, config ) {

		commonPostalMatch.call( postal, config );

		// postal.match.xyz = xyz;
	}

	module.exports = canadaPostalMatch;

} ).call( this );