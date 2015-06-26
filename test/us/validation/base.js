"use strict";

/* global describe, it */

var should = require( "should" );

var Validation = require( "../../../lib/us/Validation" );

describe( "Validation Object:", function () {

	it( "Constructor - No Config", function () {
		var validation = new Validation();
		should.exist( validation );
	} );

} );