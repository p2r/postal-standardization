"use strict";

/* global describe, it */

var should = require( "should" );

var Postal = require( "../../../lib" ).USPostal;

describe( "New Parse Address:", function () {

	var postal = new Postal();

	function verifyAddress( addressString, addressObject ) {
		postal.standardization.newParseAddress( addressString, function ( err, result ) {
			should.not.exist( err );
			should.exist( result );
			result.should.eql( addressObject );
		} );
	}

	it( "United States", function () {

		var addressString = "United States";
		var addressObject = {
			country: "UNITED STATES"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "US", function () {

		var addressString = "US";
		var addressObject = {
			country: "UNITED STATES"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "U.S.", function () {

		var addressString = "U.S.";
		var addressObject = {
			country: "UNITED STATES"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Some Address\\nUnited States", function () {

		var addressString = "Some Address\nUnited States";
		var addressObject = {
			country: "UNITED STATES"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Some Address 80023\\nUnited States", function () {

		var addressString = "Some Address 80023\nUnited States";
		var addressObject = {
			zip: "80023",
			country: "UNITED STATES"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Some Address, United States", function () {

		var addressString = "Some Address, United States";
		var addressObject = {};

		verifyAddress( addressString, addressObject );
	} );

	it( "Some Address, US", function () {

		var addressString = "Some Address, US";
		var addressObject = {};

		verifyAddress( addressString, addressObject );
	} );

	it( "Some Address, U.S.A.", function () {

		var addressString = "Some Address, U.S.A.";
		var addressObject = {};

		verifyAddress( addressString, addressObject );
	} );

	it( "Canada", function () {

		var addressString = "Canada";
		var addressObject = {
			country: "CANADA"
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
			country: "CANADA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Some Address, CA", function () {

		var addressString = "Some Address, CA";
		var addressObject = {};

		verifyAddress( addressString, addressObject );
	} );

	it( "Montreal, QC, H3Z 2Y7 CA", function () {

		var addressString = "Montreal, QC, H3Z 2Y7 CA";
		var addressObject = {
			zip: "H3Z 2Y7",
			country: "CANADA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Montreal, QC, H3Z 2Y7, CA", function () {

		var addressString = "Montreal, QC, H3Z 2Y7, CA";
		var addressObject = {
			zip: "H3Z 2Y7",
			country: "CANADA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Montreal, QC, H3Z 2Y7\\nCA", function () {

		var addressString = "Montreal, QC, H3Z 2Y7\nCA";
		var addressObject = {
			zip: "H3Z 2Y7",
			country: "CANADA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Montreal, QC H3Z 2Y7\\nCA", function () {

		var addressString = "Montreal, QC H3Z 2Y7\nCA";
		var addressObject = {
			zip: "H3Z 2Y7",
			country: "CANADA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Some Address\\nCanada", function () {

		var addressString = "Some Address\nCanada";
		var addressObject = {
			country: "CANADA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Some Address, Canada", function () {

		var addressString = "Some Address, CA";
		var addressObject = {};

		verifyAddress( addressString, addressObject );
	} );

	it( "Montreal, QC, H3Z 2Y7 Canada", function () {

		var addressString = "Montreal, QC, H3Z 2Y7 Canada";
		var addressObject = {
			zip: "H3Z 2Y7",
			country: "CANADA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Montreal, QC, H3Z 2Y7, Canada", function () {

		var addressString = "Montreal, QC, H3Z 2Y7, Canada";
		var addressObject = {
			zip: "H3Z 2Y7",
			country: "CANADA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Montreal, QC, H3Z 2Y7\\nCanada", function () {

		var addressString = "Montreal, QC, H3Z 2Y7\nCanada";
		var addressObject = {
			zip: "H3Z 2Y7",
			country: "CANADA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Montreal, QC H3Z 2Y7\\nCanada", function () {

		var addressString = "Montreal, QC H3Z 2Y7\nCanada";
		var addressObject = {
			zip: "H3Z 2Y7",
			country: "CANADA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Some Address\\nBénin", function () {

		var addressString = "Some Address\nBénin";
		var addressObject = {
			country: "BENIN"
		};

		verifyAddress( addressString, addressObject );
	} );

} );