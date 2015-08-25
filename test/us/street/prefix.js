"use strict";

/* global describe, it */

var should = require( "should" );

var Postal = require( "../../../lib" ).USPostal;

describe( "Street Prefixes:", function () {

	var postal;
	if ( Postal ) {
		postal = new Postal();
	}

	it( "N", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"NORTH",
			"N"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.prefix.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "N" );
		}

	} );

	it( "NE", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"NORTHEAST",
			"NORTH EAST",
			"NORTH-EAST",
			"N E",
			"NE"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.prefix.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "NE" );
		}

	} );

	it( "NW", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"NORTHWEST",
			"NORTH WEST",
			"NORTH-WEST",
			"N W",
			"NW"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.prefix.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "NW" );
		}

	} );

	it( "S", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"SOUTH",
			"S"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.prefix.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "S" );
		}

	} );

	it( "SE", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"SOUTHEAST",
			"SOUTH EAST",
			"SOUTH-EAST",
			"S E",
			"SE"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.prefix.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SE" );
		}

	} );

	it( "SW", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"SOUTHWEST",
			"SOUTH WEST",
			"SOUTH-WEST",
			"S W",
			"SW"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.prefix.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SW" );
		}

	} );

	it( "E", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"EAST",
			"E"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.prefix.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "E" );
		}

	} );

	it( "W", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"WEST",
			"W"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.prefix.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "W" );
		}

	} );

} );