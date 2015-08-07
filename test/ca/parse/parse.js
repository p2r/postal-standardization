"use strict";

/* global describe, it */

var should = require( "should" );

var Postal = require( "../../../lib" ).CAPostal;

describe( "CA Parse Address:", function () {

	var postal = new Postal();

	function verifyAddress( addressString, addressObject ) {
		postal.standardization.parseAddress( addressString, function ( err, result ) {
			should.not.exist( err );
			should.exist( result );
			result.should.eql( addressObject );
		} );
	}

	it( "Canada", function () {

		var addressString = "Canada";
		var addressObject = {
			country: "CANADA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "CA", function () {

		var addressString = "CA";
		var addressObject = {
			country: "CANADA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Some Address\\nCanada", function () {

		var addressString = "Some Address\nCanada";
		var addressObject = {
			//	TODO: Is this the right thing?
			city: "SOME ADDRESS",
			country: "CANADA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Some Address, Canada", function () {

		var addressString = "Some Address, Canada";
		var addressObject = {
			//	TODO: Is this the right thing?
			city: "SOME ADDRESS"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Some Address, CA", function () {

		var addressString = "Some Address, CA";
		var addressObject = {
			//	TODO: Wrong!
			city: "SOME ADDRESS",
			state: "CA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Cañada", function () {

		var addressString = "Cañada";
		var addressObject = {
			country: "CANADA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Some Address\\nCA", function () {

		var addressString = "Some Address\nCA";
		var addressObject = {
			//	TODO: Is this the right thing?
			city: "SOME ADDRESS",
			country: "CANADA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Montreal, QC, H3Z 2Y7 CA", function () {

		var addressString = "Montreal, QC, H3Z 2Y7 CA";
		var addressObject = {
			//	TODO: FIX!
			city: "MONTREAL",
			// state: QC,
			zip: "H3Z 2Y7",
			country: "CANADA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Montreal, QC, H3Z 2Y7, CA", function () {

		var addressString = "Montreal, QC, H3Z 2Y7, CA";
		var addressObject = {
			//	TODO: FIX!
			city: "MONTREAL",
			// state: QC,
			zip: "H3Z 2Y7",
			country: "CANADA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Montreal, QC, H3Z 2Y7\\nCA", function () {

		var addressString = "Montreal, QC, H3Z 2Y7\nCA";
		var addressObject = {
			//	TODO: FIX!
			city: "MONTREAL",
			// state: QC,
			zip: "H3Z 2Y7",
			country: "CANADA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Montreal, QC H3Z 2Y7\\nCA", function () {

		var addressString = "Montreal, QC H3Z 2Y7\nCA";
		var addressObject = {
			//	TODO: FIX!
			city: "MONTREAL",
			// state: QC,
			zip: "H3Z 2Y7",
			country: "CANADA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Some Address\\nCanada", function () {

		var addressString = "Some Address\nCanada";
		var addressObject = {
			//	TODO: Is this the right thing?
			city: "SOME ADDRESS",
			country: "CANADA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Some Address, Canada", function () {

		var addressString = "Some Address, Canada";
		var addressObject = {
			//	TODO: Is this the right thing?
			city: "SOME ADDRESS"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Montreal, QC, H3Z 2Y7 Canada", function () {

		var addressString = "Montreal, QC, H3Z 2Y7 Canada";
		var addressObject = {
			//	TODO: FIX!
			city: "MONTREAL",
			// state: QC,
			zip: "H3Z 2Y7",
			country: "CANADA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Montreal, QC, H3Z 2Y7, Canada", function () {

		var addressString = "Montreal, QC, H3Z 2Y7, Canada";
		var addressObject = {
			//	TODO: FIX!
			city: "MONTREAL",
			// state: QC,
			zip: "H3Z 2Y7",
			country: "CANADA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Montreal, QC, H3Z 2Y7\\nCanada", function () {

		var addressString = "Montreal, QC, H3Z 2Y7\nCanada";
		var addressObject = {
			//	TODO: FIX!
			city: "MONTREAL",
			// state: QC,
			zip: "H3Z 2Y7",
			country: "CANADA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Montreal, QC H3Z 2Y7\\nCanada", function () {

		var addressString = "Montreal, QC H3Z 2Y7\nCanada";
		var addressObject = {
			//	TODO: FIX!
			city: "MONTREAL",
			// state: QC,
			zip: "H3Z 2Y7",
			country: "CANADA"
		};

		verifyAddress( addressString, addressObject );
	} );

} );