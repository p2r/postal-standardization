"use strict";

/* global describe, it */

var should = require( "should" );

// var logStatus = require( "../../../lib/common/logStatus" );

var Postal = require( "../../../lib" ).USPostal;

describe( "To Address String:", function () {

	var postal;
	if ( Postal ) {
		postal = new Postal();
	}

	it( "16729 Buckskin Way, Broomfield, CO 80023", function () {
		if ( !postal ) {
			return;
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
		var addressStringTest = postal.standardization.toAddressString( addressObject );
		should.exist( addressStringTest );
		addressStringTest.should.equal( addressStringExp );
	} );

} );