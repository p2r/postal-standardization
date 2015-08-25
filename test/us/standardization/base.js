"use strict";

/* global describe, it */

var should = require( "should" );

var Postal = require( "../../../lib" ).USPostal;

describe( "US Standardization Object:", function () {

	it( "Constructor - No Config", function () {
		if ( !Postal ) {
			return;
		}

		var postal = new Postal();
		var standardization = postal.standardization;
		should.exist( standardization );
	} );

} );