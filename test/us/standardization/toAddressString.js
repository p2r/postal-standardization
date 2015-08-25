"use strict";

/* global describe, it */

var should = require( "should" );

var logStatus = require( "../../../lib/common/logStatus" );

var Postal = require( "../../../lib" ).USPostal;

describe( "US To Address String:", function () {

	var postal;
	if ( Postal ) {
		postal = new Postal();
	}

	function verifyAddress( addressString, debugLogging ) {
		if ( debugLogging ) {
			logStatus( true );
		}

		if ( !postal ) {
			return;
		}
		if ( !addressString ) {
			return;
		}

		postal.standardization.parseAddress( addressString, function ( err, addressObject ) {
			var generatedAddressString;

			should.not.exist( err );
			should.exist( addressObject );

			generatedAddressString = postal.standardization.toAddressString( addressObject );
			should.exist( generatedAddressString );

			generatedAddressString.should.equal( addressString );

			if ( debugLogging ) {
				logStatus( false );
			}
		} );
	}

	it( "16729 BUCKSKIN WAY, BROOMFIELD, CO 80021", function () {
		verifyAddress( this.test.title );
	} );

	it( "5023 W 120TH AVE STE 277, BROOMFIELD, CO 80021", function () {
		verifyAddress( this.test.title );
	} );

	it( "5023 W 120TH AVE # 277, BROOMFIELD, CO 80021", function () {
		verifyAddress( this.test.title );
	} );

	it( "5023 W 120TH AVE # 277, BROOMFIELD, CO 80021-5606", function () {
		verifyAddress( this.test.title );
	} );

	it( "5023 W 120TH AVE # 277, BROOMFIELD, CO 80021-5606, UNITED STATES", function () {
		verifyAddress( this.test.title );
	} );

	it( "SAN FRANCISCO, CA", function () {
		verifyAddress( this.test.title );
	} );

	it( "MISSION & VALENCIA, SAN FRANCISCO, CA", function () {
		verifyAddress( this.test.title );
	} );

	it( "MISSION ST & VALENCIA, SAN FRANCISCO, CA", function () {
		verifyAddress( this.test.title );
	} );

	it( "MISSION ST & VALENCIA AVE, SAN FRANCISCO, CA", function () {
		verifyAddress( this.test.title );
	} );

	it( "MISSION & VALENCIA VTS, SAN FRANCISCO, CA", function () {
		verifyAddress( this.test.title );
	} );

	it( "RR 2 BOX 274, LAKE BUTLER, FL 32054", function () {
		verifyAddress( this.test.title );
	} );

} );