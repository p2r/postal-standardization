"use strict";

/* global describe, it */

var should = require( "should" );

var Postal = require( "../../../lib" ).USPostal;

describe( "Unit Type:", function () {

	var postal;
	if ( Postal ) {
		postal = new Postal();
	}

	it( "APT", function ( done ) {
		if ( !postal ) {
			return done();
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

	it( "BSMT", function ( done ) {
		if ( !postal ) {
			return done();
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

	it( "BLDG", function ( done ) {
		if ( !postal ) {
			return done();
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

	it( "FL", function ( done ) {
		if ( !postal ) {
			return done();
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

	it( "FRNT", function ( done ) {
		if ( !postal ) {
			return done();
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

	it( "KEY", function ( done ) {
		if ( !postal ) {
			return done();
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

	it( "LBBY", function ( done ) {
		if ( !postal ) {
			return done();
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

	it( "LOT", function ( done ) {
		if ( !postal ) {
			return done();
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

	it( "LOWR", function ( done ) {
		if ( !postal ) {
			return done();
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

	it( "OFC", function ( done ) {
		if ( !postal ) {
			return done();
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

	it( "PH", function ( done ) {
		if ( !postal ) {
			return done();
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

	it( "PIER", function ( done ) {
		if ( !postal ) {
			return done();
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

	it( "REAR", function ( done ) {
		if ( !postal ) {
			return done();
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

	it( "SIDE", function ( done ) {
		if ( !postal ) {
			return done();
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

	it( "SLIP", function ( done ) {
		if ( !postal ) {
			return done();
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

	it( "SPC", function ( done ) {
		if ( !postal ) {
			return done();
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

	it( "STOP", function ( done ) {
		if ( !postal ) {
			return done();
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

	it( "STE", function ( done ) {
		if ( !postal ) {
			return done();
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

	it( "SPC", function ( done ) {
		if ( !postal ) {
			return done();
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

	it( "TRLR", function ( done ) {
		if ( !postal ) {
			return done();
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

	it( "UNIT", function ( done ) {
		if ( !postal ) {
			return done();
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

	it( "RM", function ( done ) {
		if ( !postal ) {
			return done();
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

	it( "DEPT", function ( done ) {
		if ( !postal ) {
			return done();
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

	it( "NUM", function ( done ) {
		if ( !postal ) {
			return done();
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

	it( "UPPR", function ( done ) {
		if ( !postal ) {
			return done();
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