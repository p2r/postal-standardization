"use strict";

/* global describe, it */

var should = require( "should" );

var Postal = require( "../../lib" ).CAPostal;

describe( "CA Postal Object:", function () {

	it( "Constructor - No Config", function ( done ) {
		if ( !Postal ) {
			return done();
		}

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