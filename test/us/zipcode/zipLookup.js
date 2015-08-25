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
		var location = postal.validation.zipLookup.getLocationForZip( zipcode );
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
		var location = postal.validation.zipLookup.getLocationForZip( zipcode );
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
		var zipcodes = postal.validation.zipLookup.getZipsForLocation( "Broomfield", "CO" );
		should.exist( zipcodes );
		should.exist( zipcodes[ 0 ] );
		zipcodes[ 0 ].should.equal( expZipcode );
	} );

	it( "Louisville, CO", function () {
		var expZipcode = "80027";
		var zipcodes = postal.validation.zipLookup.getZipsForLocation( "Louisville", "CO" );
		should.exist( zipcodes );
		should.exist( zipcodes[ 0 ] );
		zipcodes[ 0 ].should.equal( expZipcode );
	} );

} );

describe( "Cities Lookup:", function () {

	var postal = new Postal();

	it( "80021", function () {
		var zipcode = "80021";
		var expCities = [
			"BROOMFIELD",
			"WESTMINSTER"
		];
		var location = postal.validation.zipLookup.getLocationForZip( zipcode );
		var cities = postal.validation.zipLookup.getCitiesForZip( zipcode );
		should.exist( cities );
		should.exist( location );
		should.exist( location.city );
		should.exist( cities[ 0 ] );
		cities[ 0 ].should.equal( location.city );
		cities.should.eql( expCities );
	} );

	it( "80019", function () {
		var zipcode = "80019";
		var expCities = [
			"AURORA"
		];
		var cities = postal.validation.zipLookup.getCitiesForZip( zipcode );
		should.exist( cities );
		should.exist( cities[ 0 ] );
		cities.should.eql( expCities );
	} );

} );