"use strict";

/* global describe, it */

var should = require( "should" );

var Match = require( "../../../lib/us/Match" );

describe( "Match Object:", function () {

	it( "Constructor - No Config", function () {
		var match = new Match();
		should.exist( match );
	} );

} );