"use strict";

/* global describe, it */

var should = require( "should" );

var Postal = require( "../../../lib" ).USPostal;

describe( "Unit Type:", function () {

	var postal;
	if ( Postal ) {
		postal = new Postal();
	}

	it( "APT", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"APARTMENT",
			"APT"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.unitType.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "APT" );
		}

	} );

	it( "BSMT", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"BASEMENT",
			"BSMT"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.unitType.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "BSMT" );
		}

	} );

	it( "BLDG", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"BUILDING",
			"BLDG",
			"BLD",
			"BLG"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.unitType.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "BLDG" );
		}

	} );

	it( "FL", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"FLOOR",
			"FLOR",
			"FLR",
			"FL"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.unitType.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "FL" );
		}

	} );

	it( "FRNT", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"FRONT",
			"FRNT"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.unitType.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "FRNT" );
		}

	} );

	it( "KEY", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"KEY"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.unitType.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "KEY" );
		}

	} );

	it( "LBBY", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"LOBBY",
			"LBBY"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.unitType.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "LBBY" );
		}

	} );

	it( "LOT", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"LOT"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.unitType.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "LOT" );
		}

	} );

	it( "LOWR", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"LOWER",
			"LOWR"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.unitType.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "LOWR" );
		}

	} );

	it( "OFC", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"OFFICE",
			"OFC"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.unitType.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "OFC" );
		}

	} );

	it( "PH", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"PENTHOUSE",
			"PH"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.unitType.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "PH" );
		}

	} );

	it( "PIER", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"PEIR",
			"PIER"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.unitType.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "PIER" );
		}

	} );

	it( "REAR", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"REAR"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.unitType.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "REAR" );
		}

	} );

	it( "SIDE", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"SIDE"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.unitType.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SIDE" );
		}

	} );

	it( "SLIP", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"SLIP",
			"SLP"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.unitType.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SLIP" );
		}

	} );

	it( "SPC", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"SPACE",
			"SPC"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.unitType.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SPC" );
		}

	} );

	it( "STOP", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"STP",
			"STOP"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.unitType.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "STOP" );
		}

	} );

	it( "STE", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			 "SUITE",
			 "SUIT",
			 "SUTE",
			 "STE"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.unitType.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "STE" );
		}

	} );

	it( "SPC", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"SPACE",
			"SPC"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.unitType.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SPC" );
		}

	} );

	it( "TRLR", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"TRAILER",
			"TRLR"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.unitType.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "TRLR" );
		}

	} );

	it( "UNIT", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"UNIT",
			"UNT"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.unitType.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "UNIT" );
		}

	} );

	it( "RM", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"ROOM",
			"RM"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.unitType.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "RM" );
		}

	} );

	it( "DEPT", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"DEPARTMENT",
			"DEPT",
			"DPT"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.unitType.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "DEPT" );
		}

	} );

	it( "NUM", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"NUMBER",
			"NMBR",
			"NUM",
			"NM"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.unitType.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "NUM" );
		}

	} );

	it( "UPPR", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"UPPER",
			"UPER",
			"UPR",
			"UPPR"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.unitType.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "UPPR" );
		}

	} );

} );