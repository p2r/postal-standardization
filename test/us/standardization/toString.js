"use strict";

/* global describe, it */

var should = require( "should" );

var Postal = require( "../../../lib" ).USPostal;

describe( "To String:", function () {

	var postal;
	if ( Postal ) {
		postal = new Postal();
	}

	it( "16729 Buckskin Way, Broomfield, CO 80023", function ( done ) {
		if ( !postal ) {
			return done();
		}

		var addressObject = {
			number: "16729",
			street: "BUCKSKIN",
			type: "WAY",
			city: "BROOMFIELD",
			state: "CO",
			zip: "80023"
		};
		var addressStringExp = "16729 BUCKSKIN WAY, BROOMFIELD, CO 80023";
		var addressStringTest = postal.toString( addressObject );
		should.exist( addressStringTest );
		addressStringTest.should.equal( addressStringExp );
	} );

} );