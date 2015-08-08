"use strict";

/* global describe, it */

var should = require( "should" );

var Postal = require( "../../../lib" ).CAPostal;

describe( "CA Zip Lookup:", function () {

	var postal = new Postal();

	it( "A0A-1G0", function () {
		var zipcode = "A0A-1G0";
		var expLocation = {
			city: "BAY ROBERTS",
			state: "NL",
			country: "CA"
		};
		var location = postal.standardization.zipLookup.getLocationForZip( zipcode );
		should.exist( location );
		location.country.should.equal( expLocation.country );
		location.state.should.equal( expLocation.state );
		location.city.should.equal( expLocation.city );
	} );

	it( "L6B-0G2", function () {
		var zipcode = "L6B-0G2";
		var expLocation = {
			city: "RICHMOND HILL",
			state: "ON",
			country: "CA"
		};
		var location = postal.standardization.zipLookup.getLocationForZip( zipcode );
		should.exist( location );
		location.country.should.equal( expLocation.country );
		location.state.should.equal( expLocation.state );
		location.city.should.equal( expLocation.city );
	} );

} );

describe( "CA Location Lookup:", function () {

	var postal = new Postal();

	it( "York, ON", function () {
		var expZipcode = "L4A-1L9";
		var zipcodes = postal.standardization.zipLookup.getZipsForLocation( "York", "ON" );
		should.exist( zipcodes );
		should.exist( zipcodes[ 0 ] );
		zipcodes[ 0 ].should.equal( expZipcode );
	} );

	it( "Murray Harbour, PE", function () {
		var expZipcode = "C0A-1V0";
		var zipcodes = postal.standardization.zipLookup.getZipsForLocation( "Murray Harbour", "PE" );
		should.exist( zipcodes );
		should.exist( zipcodes[ 0 ] );
		zipcodes[ 0 ].should.equal( expZipcode );
	} );

} );

describe( "CA Cities Lookup:", function () {

	var postal = new Postal();

	it( "L6B-0G2", function () {
		var zipcode = "L6B-0G2";
		var expCities = [
			"RICHMOND HILL"
		];
		var location = postal.standardization.zipLookup.getLocationForZip( zipcode );
		var cities = postal.standardization.zipLookup.getCitiesForZip( zipcode );
		should.exist( cities );
		should.exist( location );
		should.exist( location.city );
		should.exist( cities[ 0 ] );
		cities[ 0 ].should.equal( location.city );
		cities.should.eql( expCities );
	} );

	it( "C0A-1V0", function () {
		var zipcode = "C0A-1V0";
		var expCities = [
			"MURRAY HARBOUR"
		];
		var cities = postal.standardization.zipLookup.getCitiesForZip( zipcode );
		should.exist( cities );
		should.exist( cities[ 0 ] );
		cities.should.eql( expCities );
	} );

} );