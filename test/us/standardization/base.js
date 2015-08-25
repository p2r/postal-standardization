"use strict";

/* global describe, it */

var should = require( "should" );

var Postal = require( "../../../lib" ).USPostal;

describe( "Standardization Object:", function () {

	it( "Constructor - No Config", function ( done ) {
		if ( !Postal ) {
			return done();
		}

		var postal = new Postal();
		var standardization = postal.standardization;
		should.exist( standardization );
	} );

} );