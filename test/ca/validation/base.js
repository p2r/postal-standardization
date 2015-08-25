"use strict";

/* global describe, it */

var should = require( "should" );

var Postal = require( "../../../lib" ).CAPostal;

describe( "CA Validation Object:", function () {

	it( "Constructor - No Config", function ( done ) {
		if ( !Postal ) {
			return done();
		}

		var postal = new Postal();
		var validation = postal.validation;
		should.exist( validation );
	} );

} );