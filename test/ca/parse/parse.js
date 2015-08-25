"use strict";

/* global describe, it */

var should = require( "should" );

var logStatus = require( "../../../lib/common/logStatus" );
var Postal = require( "../../../lib" ).CAPostal;

describe( "CA Parse Address:", function () {

	var postal;
	if ( Postal ) {
		postal = new Postal();
	}

	function verifyAddress( addressString, addressObject, debugLogging ) {
		if ( !postal ) {
			return;
		}

		if ( debugLogging ) {
			logStatus( true );
		}
		postal.standardization.parseAddress( addressString, function ( err, result ) {
			if ( debugLogging ) {
				logStatus( false );
			}
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
			city: "SOME ADDRESS",
			country: "CANADA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Some Address, Canada", function () {

		var addressString = "Some Address, Canada";
		var addressObject = {
			city: "SOME ADDRESS",
			country: "CANADA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Some Address, CA", function () {

		var addressString = "Some Address, CA";
		var addressObject = {
			city: "SOME ADDRESS",
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
			city: "SOME ADDRESS",
			country: "CANADA"
		};

		verifyAddress( addressString, addressObject );
	} );

	// it( "Montreal, QC, H3Z 2Y7 CA", function () {

	// 	var addressString = "Montreal, QC, H3Z 2Y7 CA";
	// 	var addressObject = {
	// 		city: "MONTREAL",
	// 		state: "QC",
	// 		zip: "H3Z 2Y7",
	// 		country: "CANADA"
	// 	};

	// 	verifyAddress( addressString, addressObject, true );
	// } );

	// it( "Montreal, QC, H3Z 2Y7, CA", function () {

	// 	var addressString = "Montreal, QC, H3Z 2Y7, CA";
	// 	var addressObject = {
	// 		city: "MONTREAL",
	// 		state: "QC",
	// 		zip: "H3Z 2Y7",
	// 		country: "CANADA"
	// 	};

	// 	verifyAddress( addressString, addressObject );
	// } );

	// it( "Montreal, QC, H3Z 2Y7\\nCA", function () {

	// 	var addressString = "Montreal, QC, H3Z 2Y7\nCA";
	// 	var addressObject = {
	// 		city: "MONTREAL",
	// 		state: "QC",
	// 		zip: "H3Z 2Y7",
	// 		country: "CANADA"
	// 	};

	// 	verifyAddress( addressString, addressObject );
	// } );

	// it( "Montreal, QC H3Z 2Y7\\nCA", function () {

	// 	var addressString = "Montreal, QC H3Z 2Y7\nCA";
	// 	var addressObject = {
	// 		city: "MONTREAL",
	// 		state: "QC",
	// 		zip: "H3Z 2Y7",
	// 		country: "CANADA"
	// 	};

	// 	verifyAddress( addressString, addressObject );
	// } );

	it( "Some Address\\nCanada", function () {

		var addressString = "Some Address\nCanada";
		var addressObject = {
			city: "SOME ADDRESS",
			country: "CANADA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Some Address, Canada", function () {

		var addressString = "Some Address, Canada";
		var addressObject = {
			city: "SOME ADDRESS",
			country: "CANADA"
		};

		verifyAddress( addressString, addressObject );
	} );

	// it( "Montreal, QC, H3Z 2Y7 Canada", function () {

	// 	var addressString = "Montreal, QC, H3Z 2Y7 Canada";
	// 	var addressObject = {
	// 		city: "MONTREAL",
	// 		state: "QC",
	// 		zip: "H3Z 2Y7",
	// 		country: "CANADA"
	// 	};

	// 	verifyAddress( addressString, addressObject );
	// } );

	// it( "Montreal, QC, H3Z 2Y7, Canada", function () {

	// 	var addressString = "Montreal, QC, H3Z 2Y7, Canada";
	// 	var addressObject = {
	// 		city: "MONTREAL",
	// 		state: "QC",
	// 		zip: "H3Z 2Y7",
	// 		country: "CANADA"
	// 	};

	// 	verifyAddress( addressString, addressObject );
	// } );

	// it( "Montreal, QC, H3Z 2Y7\\nCanada", function () {

	// 	var addressString = "Montreal, QC, H3Z 2Y7\nCanada";
	// 	var addressObject = {
	// 		city: "MONTREAL",
	// 		state: "QC",
	// 		zip: "H3Z 2Y7",
	// 		country: "CANADA"
	// 	};

	// 	verifyAddress( addressString, addressObject );
	// } );

	// it( "Montreal, QC H3Z 2Y7\\nCanada", function () {

	// 	var addressString = "Montreal, QC H3Z 2Y7\nCanada";
	// 	var addressObject = {
	// 		city: "MONTREAL",
	// 		state: "QC",
	// 		zip: "H3Z 2Y7",
	// 		country: "CANADA"
	// 	};

	// 	verifyAddress( addressString, addressObject );
	// } );

} );