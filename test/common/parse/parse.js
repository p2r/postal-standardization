"use strict";

/* global describe, it */

var should = require( "should" );

var logStatus = require( "../../../lib/common/logStatus" );
var Postal = require( "../../../lib" ).USPostal;

describe( "Parse Address:", function () {

	var postal = new Postal();

	function verifyAddress( addressString, addressObject, debugLogging ) {
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
			city: "SOME ADDRESS",
			country: "UNITED STATES"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Some Address 80023\\nUnited States", function () {

		var addressString = "Some Address 80023\nUnited States";
		var addressObject = {
			city: "SOME ADDRESS",
			zip: "80023",
			country: "UNITED STATES"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Some Address, United States", function () {

		var addressString = "Some Address, United States";
		var addressObject = {
			city: "SOME ADDRESS",
			country: "UNITED STATES"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Some Address, US", function () {

		var addressString = "Some Address, US";
		var addressObject = {
			city: "SOME ADDRESS",
			country: "UNITED STATES"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Some Address, U.S.A.", function () {

		var addressString = "Some Address, U.S.A.";
		var addressObject = {
			city: "SOME ADDRESS",
			country: "UNITED STATES"
		};

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
			city: "SOME ADDRESS",
			state: "CA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Some Address, CA", function () {

		var addressString = "Some Address, CA";
		var addressObject = {
			city: "SOME ADDRESS",
			state: "CA"
		};

		verifyAddress( addressString, addressObject );
	} );

} );