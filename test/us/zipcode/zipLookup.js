"use strict";

/* global describe, it */

var should = require( "should" );

var Postal = require( "../../../lib" ).USPostal;

describe( "Zip Lookup:", function () {

	var postal = new Postal();

	it( "80020", function () {
		var zipcode = "80020";
		var expLocation = {
			country: "US",
			state: "CO",
			city: "BROOMFIELD"
		};
		var location = postal.standardization.zipLookup.getLocationForZip( zipcode );
		should.exist( location );
		location.country.should.equal( expLocation.country );
		location.state.should.equal( expLocation.state );
		location.city.should.equal( expLocation.city );
	} );

	it( "80027", function () {
		var zipcode = "80027";
		var expLocation = {
			country: "US",
			state: "CO",
			city: "LOUISVILLE"
		};
		var location = postal.standardization.zipLookup.getLocationForZip( zipcode );
		should.exist( location );
		location.country.should.equal( expLocation.country );
		location.state.should.equal( expLocation.state );
		location.city.should.equal( expLocation.city );
	} );

} );

describe( "Location Lookup:", function () {

	var postal = new Postal();

	it( "Broomfield, CO", function () {
		var expZipcode = "80020";
		var zipcodes = postal.standardization.zipLookup.getZipsForLocation( "Broomfield", "CO" );
		should.exist( zipcodes );
		should.exist( zipcodes[ 0 ] );
		zipcodes[ 0 ].should.equal( expZipcode );
	} );

	it( "Louisville, CO", function () {
		var expZipcode = "80027";
		var zipcodes = postal.standardization.zipLookup.getZipsForLocation( "Louisville", "CO" );
		should.exist( zipcodes );
		should.exist( zipcodes[ 0 ] );
		zipcodes[ 0 ].should.equal( expZipcode );
	} );

} );