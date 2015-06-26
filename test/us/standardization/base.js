"use strict";

/* global describe, it */

var should = require( "should" );

var Standardization = require( "../../../lib/us/Standardization" );

describe( "Standardization Object:", function () {

	it( "Constructor - No Config", function () {
		var standardization = new Standardization();
		should.exist( standardization );
	} );

} );