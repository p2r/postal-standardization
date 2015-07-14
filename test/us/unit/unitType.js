"use strict";

/* global describe, it */

var should = require( "should" );

var Postal = require( "../../../lib" ).USPostal;

describe( "Unit Type:", function () {

	var postal = new Postal();

	it( "APT", function () {
		var names = [
			"APARTMENT",
			"APT"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.unitType( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "APT" );
		}

	} );

	it( "BLDG", function () {
		var names = [
			"BUILDING",
			"BLDG",
			"BLD",
			"BLG"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.unitType( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "BLDG" );
		}

	} );

	it( "FL", function () {
		var names = [
			"FLOOR",
			"FLOR",
			"FLR",
			"FL"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.unitType( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "FL" );
		}

	} );

	it( "STE", function () {
		var names = [
			 "SUITE",
			 "SUIT",
			 "SUTE`",
			 "STE"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.unitType( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "STE" );
		}

	} );

	it( "UNT", function () {
		var names = [
			"UNIT",
			"UNT"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.unitType( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "UNIT" );
		}

	} );

	it( "RM", function () {
		var names = [
			"ROOM",
			"RM"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.unitType( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "RM" );
		}

	} );

	it( "DEPT", function () {
		var names = [
			"DEPARTMENT",
			"DEPT",
			"DPT"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.unitType( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "DEPT" );
		}

	} );

	it( "NUM", function () {
		var names = [
			"NUMBER",
			"NMBR",
			"NUM",
			"NM"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.unitType( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "NUM" );
		}

	} );

} );