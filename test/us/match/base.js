"use strict";

/* global describe, it */

var should = require( "should" );

var Postal = require( "../../../lib" ).USPostal;

describe( "Match Object:", function () {

	it( "Constructor - No Config", function () {
		if ( !Postal ) {
			return;
		}

		var postal = new Postal();
		var match = postal.match;

		should.exist( match );
	} );

} );