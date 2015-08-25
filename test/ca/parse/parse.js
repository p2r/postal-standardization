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

	function verifyAddress( done, addressString, addressObject, debugLogging ) {
		if ( debugLogging ) {
			logStatus( true );
		}

		if ( !postal ) {
			return done();
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

	it( "Canada", function ( done ) {

		var addressString = "Canada";
		var addressObject = {
			country: "CANADA"
		};

		verifyAddress( done, addressString, addressObject );
	} );

	it( "CA", function ( done ) {

		var addressString = "CA";
		var addressObject = {
			country: "CANADA"
		};

		verifyAddress( done, addressString, addressObject );
	} );

	it( "Some Address\\nCanada", function ( done ) {

		var addressString = "Some Address\nCanada";
		var addressObject = {
			city: "SOME ADDRESS",
			country: "CANADA"
		};

		verifyAddress( done, addressString, addressObject );
	} );

	it( "Some Address, Canada", function ( done ) {

		var addressString = "Some Address, Canada";
		var addressObject = {
			city: "SOME ADDRESS",
			country: "CANADA"
		};

		verifyAddress( done, addressString, addressObject );
	} );

	it( "Some Address, CA", function ( done ) {

		var addressString = "Some Address, CA";
		var addressObject = {
			city: "SOME ADDRESS",
			state: "CA"
		};

		verifyAddress( done, addressString, addressObject );
	} );

	it( "Cañada", function ( done ) {

		var addressString = "Cañada";
		var addressObject = {
			country: "CANADA"
		};

		verifyAddress( done, addressString, addressObject );
	} );

	it( "Some Address\\nCA", function ( done ) {

		var addressString = "Some Address\nCA";
		var addressObject = {
			//	TODO: FIX!
			city: "SOME ADDRESS",
			// country: "CANADA"
			state: "CA"
		};

		verifyAddress( done, addressString, addressObject );
	} );

	// it( "Montreal, QC, H3Z 2Y7 CA", function ( done ) {

	// 	var addressString = "Montreal, QC, H3Z 2Y7 CA";
	// 	var addressObject = {
	// 		city: "MONTREAL",
	// 		state: "QC",
	// 		zip: "H3Z 2Y7",
	// 		country: "CANADA"
	// 	};

	// 	verifyAddress( done, addressString, addressObject, true );
	// } );

	// it( "Montreal, QC, H3Z 2Y7, CA", function ( done ) {

	// 	var addressString = "Montreal, QC, H3Z 2Y7, CA";
	// 	var addressObject = {
	// 		city: "MONTREAL",
	// 		state: "QC",
	// 		zip: "H3Z 2Y7",
	// 		country: "CANADA"
	// 	};

	// 	verifyAddress( done, addressString, addressObject );
	// } );

	// it( "Montreal, QC, H3Z 2Y7\\nCA", function ( done ) {

	// 	var addressString = "Montreal, QC, H3Z 2Y7\nCA";
	// 	var addressObject = {
	// 		city: "MONTREAL",
	// 		state: "QC",
	// 		zip: "H3Z 2Y7",
	// 		country: "CANADA"
	// 	};

	// 	verifyAddress( done, addressString, addressObject );
	// } );

	// it( "Montreal, QC H3Z 2Y7\\nCA", function ( done ) {

	// 	var addressString = "Montreal, QC H3Z 2Y7\nCA";
	// 	var addressObject = {
	// 		city: "MONTREAL",
	// 		state: "QC",
	// 		zip: "H3Z 2Y7",
	// 		country: "CANADA"
	// 	};

	// 	verifyAddress( done, addressString, addressObject );
	// } );

	it( "Some Address\\nCanada", function ( done ) {

		var addressString = "Some Address\nCanada";
		var addressObject = {
			city: "SOME ADDRESS",
			country: "CANADA"
		};

		verifyAddress( done, addressString, addressObject );
	} );

	it( "Some Address, Canada", function ( done ) {

		var addressString = "Some Address, Canada";
		var addressObject = {
			city: "SOME ADDRESS",
			country: "CANADA"
		};

		verifyAddress( done, addressString, addressObject );
	} );

	// it( "Montreal, QC, H3Z 2Y7 Canada", function ( done ) {

	// 	var addressString = "Montreal, QC, H3Z 2Y7 Canada";
	// 	var addressObject = {
	// 		city: "MONTREAL",
	// 		state: "QC",
	// 		zip: "H3Z 2Y7",
	// 		country: "CANADA"
	// 	};

	// 	verifyAddress( done, addressString, addressObject );
	// } );

	// it( "Montreal, QC, H3Z 2Y7, Canada", function ( done ) {

	// 	var addressString = "Montreal, QC, H3Z 2Y7, Canada";
	// 	var addressObject = {
	// 		city: "MONTREAL",
	// 		state: "QC",
	// 		zip: "H3Z 2Y7",
	// 		country: "CANADA"
	// 	};

	// 	verifyAddress( done, addressString, addressObject );
	// } );

	// it( "Montreal, QC, H3Z 2Y7\\nCanada", function ( done ) {

	// 	var addressString = "Montreal, QC, H3Z 2Y7\nCanada";
	// 	var addressObject = {
	// 		city: "MONTREAL",
	// 		state: "QC",
	// 		zip: "H3Z 2Y7",
	// 		country: "CANADA"
	// 	};

	// 	verifyAddress( done, addressString, addressObject );
	// } );

	// it( "Montreal, QC H3Z 2Y7\\nCanada", function ( done ) {

	// 	var addressString = "Montreal, QC H3Z 2Y7\nCanada";
	// 	var addressObject = {
	// 		city: "MONTREAL",
	// 		state: "QC",
	// 		zip: "H3Z 2Y7",
	// 		country: "CANADA"
	// 	};

	// 	verifyAddress( done, addressString, addressObject );
	// } );

} );