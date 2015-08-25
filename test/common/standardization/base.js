"use strict";

/* global describe, it */

var should = require( "should" );

var Postal = require( "../../../lib/common" );

describe( "Standardization Object:", function () {

	it( "Constructor - No Config", function () {
		var postal = new Postal();
		var standardization = postal.standardization;
		should.exist( standardization );
	} );

} );