"use strict";

/* global describe, it */

var should = require( "should" );

var Postal = require( "../../lib/common" );

describe( "Postal Object:", function () {

	it( "Constructor - No Config", function () {
		var postal = new Postal();
		should.exist( postal );

		should( postal ).have.property( "standardization" );
		should.exist( postal.standardization );

		should( postal ).have.property( "match" );
		should.exist( postal.match );

		should( postal ).have.property( "validation" );
		should.exist( postal.validation );
	} );

} );