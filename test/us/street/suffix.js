"use strict";

/* global describe, it */

var should = require( "should" );

var Postal = require( "../../../lib" ).USPostal;

describe( "Street Suffixes:", function () {

	var postal = new Postal();

	it( "N", function () {
		var names = [
			"NORTH",
			"N"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.suffix( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "N" );
		}

	} );

	it( "NE", function () {
		var names = [
			"NORTHEAST",
			"NORTH EAST",
			"NE"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.suffix( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "NE" );
		}

	} );

	it( "NW", function () {
		var names = [
			"NORTHWEST",
			"NORTH WEST",
			"NW"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.suffix( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "NW" );
		}

	} );

	it( "S", function () {
		var names = [
			"SOUTH",
			"S"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.suffix( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "S" );
		}

	} );

	it( "SE", function () {
		var names = [
			"SOUTHEAST",
			"SOUTH EAST",
			"SE"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.suffix( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SE" );
		}

	} );

	it( "SW", function () {
		var names = [
			"SOUTHWEST",
			"SOUTH WEST",
			"SW"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.suffix( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SW" );
		}

	} );

	it( "E", function () {
		var names = [
			"EAST",
			"E"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.suffix( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "E" );
		}

	} );

	it( "W", function () {
		var names = [
			"WEST",
			"W"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.suffix( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "W" );
		}

	} );

} );