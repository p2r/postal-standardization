"use strict";

/* global describe, it */

var should = require( "should" );

var Postal = require( "../../../lib" ).CAPostal;

describe( "CA Zip Lookup:", function () {

	var postal;
	if ( Postal ) {
		postal = new Postal();
	}

	it( "A0A-1G0", function ( done ) {
		if ( !postal ) {
			return done();
		}

		var zipcode = "A0A-1G0";
		var expLocation = {
			city: "BAY ROBERTS",
			state: "NL",
			country: "CA"
		};
		var location = postal.validation.zipLookup.getLocationForZip( zipcode );
		should.exist( location );
		location.country.should.equal( expLocation.country );
		location.state.should.equal( expLocation.state );
		location.city.should.equal( expLocation.city );
	} );

	it( "L6B-0G2", function ( done ) {
		if ( !postal ) {
			return done();
		}

		var zipcode = "L6B-0G2";
		var expLocation = {
			city: "RICHMOND HILL",
			state: "ON",
			country: "CA"
		};
		var location = postal.validation.zipLookup.getLocationForZip( zipcode );
		should.exist( location );
		location.country.should.equal( expLocation.country );
		location.state.should.equal( expLocation.state );
		location.city.should.equal( expLocation.city );
	} );

} );

describe( "CA Location Lookup:", function () {

	var postal;
	if ( Postal ) {
		postal = new Postal();
	}

	it( "York, ON", function ( done ) {
		if ( !postal ) {
			return done();
		}

		var expZipcode = "L4A-1L9";
		var zipcodes = postal.validation.zipLookup.getZipsForLocation( "York", "ON" );
		should.exist( zipcodes );
		should.exist( zipcodes[ 0 ] );
		zipcodes[ 0 ].should.equal( expZipcode );
	} );

	it( "Murray Harbour, PE", function ( done ) {
		if ( !postal ) {
			return done();
		}

		var expZipcode = "C0A-1V0";
		var zipcodes = postal.validation.zipLookup.getZipsForLocation( "Murray Harbour", "PE" );
		should.exist( zipcodes );
		should.exist( zipcodes[ 0 ] );
		zipcodes[ 0 ].should.equal( expZipcode );
	} );

} );

describe( "CA Cities Lookup:", function () {

	var postal;
	if ( Postal ) {
		postal = new Postal();
	}

	it( "L6B-0G2", function ( done ) {
		if ( !postal ) {
			return done();
		}

		var zipcode = "L6B-0G2";
		var expCities = [
			"RICHMOND HILL"
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

	it( "C0A-1V0", function ( done ) {
		if ( !postal ) {
			return done();
		}

		var zipcode = "C0A-1V0";
		var expCities = [
			"MURRAY HARBOUR"
		];
		var cities = postal.validation.zipLookup.getCitiesForZip( zipcode );
		should.exist( cities );
		should.exist( cities[ 0 ] );
		cities.should.eql( expCities );
	} );

} );