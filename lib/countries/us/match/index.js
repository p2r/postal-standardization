( function () {
	"use strict";

	var commonPostalMatch = require( "../../../common/match" );
	// var xyz = require( "./xyz" );

	function usPostalMatch( postal, config ) {

		commonPostalMatch.call( postal, config );

		// postal.match.xyz = xyz;
	}

	module.exports = usPostalMatch;

} ).call( this );