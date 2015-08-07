"use strict";

/* global describe, it */

var should = require( "should" );

var Postal = require( "../../../lib" ).CAPostal;

describe( "CA Standardization Object:", function () {

	it( "Constructor - No Config", function () {
		var postal = new Postal();
		var standardization = postal.standardization;
		should.exist( standardization );
	} );

} );