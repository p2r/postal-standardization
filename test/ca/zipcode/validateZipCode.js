"use strict";

/* global describe, it */

var should = require( "should" );

var Postal = require( "../../../lib" ).CAPostal;

describe( "CA Zip Codes:", function () {

	var postal;
	if ( Postal ) {
		postal = new Postal();
	}

	it( "H3Z 2Y7", function ( done ) {
		if ( !postal ) {
			return done();
		}

		var zipTest = "H3Z 2Y7";
		var zipExp = "H3Z 2Y7";
		var zip = postal.standardization.zipcode( zipTest );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

} );