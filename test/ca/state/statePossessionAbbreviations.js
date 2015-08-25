"use strict";

/* global describe, it */

var should = require( "should" );

var Postal = require( "../../../lib" ).CAPostal;

describe( "CA Possession Abbreviations:", function () {

	var postal;
	if ( Postal ) {
		postal = new Postal();
	}

	it( "AB", function ( done ) {
		if ( !postal ) {
			return done();
		}

		var names = [
			"ALBERTA",
			"ALTA",
			"ALTA.",
			"CA-AB",
			"AB"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.statePossessionAbbreviations( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "AB" );
		}

	} );

	it( "BC", function ( done ) {
		if ( !postal ) {
			return done();
		}

		var names = [
			"BRITISH COLUMBIA",
			"COLOMBIE-BRITANNIQUE",
			"CB",
			"C B",
			"C.B.",
			"C.-B.",
			"B C",
			"B.C.",
			"CA-BC",
			"BC"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.statePossessionAbbreviations( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "BC" );
		}

	} );

	it( "MB", function ( done ) {
		if ( !postal ) {
			return done();
		}

		var names = [
			"MANITOBA",
			"MANATOBA",
			"MAN",
			"MB",
			"CA-MB"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.statePossessionAbbreviations( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "MB" );
		}

	} );

	it( "NB", function ( done ) {
		if ( !postal ) {
			return done();
		}

		var names = [
			"NEW BRUNSWICK",
			"NEW BRUNSWIK",
			"NEWBRUNSWICK",
			"NEWBRUNSWIK",
			"NOUVEAU-BRUNSWICK",
			"NB",
			"N B",
			"CA-NB"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.statePossessionAbbreviations( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "NB" );
		}

	} );

	it( "NL", function ( done ) {
		if ( !postal ) {
			return done();
		}

		var names = [
			"NEWFOUNDLAND AND LABRADOR",
			"NEWFOUNDLAND & LABRADOR",
			"NEWFOUNDLAND LABRADOR",
			"NEWFOUNDLAND",
			"LABRADOR",
			"LB",
			"L B",
			"NF",
			"N F",
			"NFLD",
			"TERRE-NEUVE-ET-LABRADOR",
			"TERRE-NEUVE",
			"TN",
			"T N",
			"T-N",
			"NL",
			"CA-NL"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.statePossessionAbbreviations( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "NL" );
		}

	} );

	it( "NS", function ( done ) {
		if ( !postal ) {
			return done();
		}

		var names = [
			"NOVA SCOTIA",
			"NOVASCOTIA",
			"N S",
			"NOUVELLE-ECOSSE",
			"NOUVELLE-ÉCOSSE",
			"NE",
			"N E",
			"N-E",
			"N.-É.",
			"NS",
			"CA-NS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.statePossessionAbbreviations( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "NS" );
		}

	} );

	it( "NT", function ( done ) {
		if ( !postal ) {
			return done();
		}

		var names = [
			"NORTHWEST TERRITORIES",
			"NORTHWEST TERRITORY",
			"NORTHWESTTERRITORY",
			"NW TERRITORIES",
			"NW TERRITORY",
			"NWTERRITORIES",
			"NWT",
			"N W T",
			"N.W.T.",
			"N. W. T.",
			"NW T",
			"TERRITOIRES DU NORD-OUEST",
			"TNO",
			"T N O",
			"T.N.O.",
			"CA-NT",
			"NT"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.statePossessionAbbreviations( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "NT" );
		}

	} );

	it( "NU", function ( done ) {
		if ( !postal ) {
			return done();
		}

		var names = [
			"NUNAVUT",
			"NUN",
			"NVT",
			"CA-NU",
			"NU"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.statePossessionAbbreviations( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "NU" );
		}

	} );

	it( "ON", function ( done ) {
		if ( !postal ) {
			return done();
		}

		var names = [
			"ONTARIO",
			"ONT",
			"ON",
			"CA-ON"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.statePossessionAbbreviations( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "ON" );
		}

	} );

	it( "PE", function ( done ) {
		if ( !postal ) {
			return done();
		}

		var names = [
			"PRINCE EDWARD ISLAND",
			"PRINCE EDWARD ISLE",
			"PRINCE EDWARD",
			"PEI",
			"P E I",
			"P.E.I.",
			"ILE-DU-PRINCE-EDOUARD",
			"ÎLE-DU-PRINCE-ÉDOUARD",
			"IPE",
			"I P E",
			"I.P.E.",
			"I-P-E",
			"Î.P.É.",
			"PE",
			"CA-PE"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.statePossessionAbbreviations( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "PE" );
		}

	} );

	it( "QC", function ( done ) {
		if ( !postal ) {
			return done();
		}

		var names = [
			"QUEBEC",
			"QUÉBEC",
			"QUE",
			"QUE.",
			"PQ",
			"P.Q.",
			"P Q",
			"QC",
			"CA-QC"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.statePossessionAbbreviations( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "QC" );
		}

	} );

	it( "SK", function ( done ) {
		if ( !postal ) {
			return done();
		}

		var names = [
			"SASKATCHEWAN",
			"SASK",
			"SASK.",
			"SK",
			"CA-SK"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.statePossessionAbbreviations( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SK" );
		}

	} );

	it( "YT", function ( done ) {
		if ( !postal ) {
			return done();
		}

		var names = [
			"YUKON",
			"YUCON",
			"YUK",
			"YUK.",
			"YT",
			"CA-YT"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.statePossessionAbbreviations( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "YT" );
		}

	} );

} );