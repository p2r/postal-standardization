"use strict";

/* global describe, it */

var should = require( "should" );

var Postal = require( "../../../lib" ).USPostal;

describe( "US Street Type:", function () {

	var postal;
	if ( Postal ) {
		postal = new Postal();
	}

	it( "ALY", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"ALLEE",
			"ALLEY",
			"ALLY",
			"ALY",
			"ALLE"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "ALY" );
		}

	} );

	it( "ANX", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"ANEX",
			"ANX",
			"ANNEX",
			"ANNX",
			"ANX"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "ANX" );
		}

	} );

	it( "ARC", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"ARCADE",
			"ARC"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "ARC" );
		}

	} );

	it( "AVE", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"AV",
			"AVE",
			"AVEN",
			"AVENU",
			"AVENUE",
			"AVN",
			"AVNUE",
			"AVE"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "AVE" );
		}

	} );

	it( "BYU", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"BAYOO",
			"BAYOU",
			"BYU",
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "BYU" );
		}

	} );

	it( "BCH", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"BEACH",
			"BCH"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "BCH" );
		}

	} );

	it( "BND", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"BEND",
			"BND"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "BND" );
		}

	} );

	it( "BLF", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"BLUF",
			"BLUFF",
			"BLF"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "BLF" );
		}

	} );

	it( "BLFS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"BLUFFS",
			"BLUFS",
			"BLFFS",
			"BLFS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "BLFS" );
		}

	} );

	it( "BTM", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"BOT",
			"BOTM",
			"BOTTM",
			"BOTTOM",
			"BTM"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "BTM" );
		}

	} );

	it( "BLVD", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"BOUL",
			"BOULEVARD",
			"BOULV",
			"BLVD"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "BLVD" );
		}

	} );

	it( "BR", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"BRNCH",
			"BRCH",
			"BRANCH",
			"BR"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "BR" );
		}

	} );

	it( "BRG", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"BRDGE",
			"BRIDGE",
			"BRIDG",
			"BRG"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "BRG" );
		}

	} );

	it( "BRK", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"BROOK",
			"BRK"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "BRK" );
		}

	} );

	it( "BRKS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"BROOKS",
			"BRKS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "BRKS" );
		}

	} );

	it( "BG", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"BURG",
			"BG"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "BG" );
		}

	} );

	it( "BGS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"BURGS",
			"BGS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "BGS" );
		}

	} );

	it( "BYP", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"BYPA",
			"BYPAS",
			"BYPASS",
			"BYPS",
			"BYP"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "BYP" );
		}

	} );

	it( "CP", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"CAMP",
			"CMP",
			"CP"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "CP" );
		}

	} );

	it( "CYN", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"CANYN",
			"CANYON",
			"CNYN",
			"CYN"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "CYN" );
		}

	} );

	it( "CPE", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"CAPE",
			"CPE"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "CPE" );
		}

	} );

	it( "CSWY", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"CAUSEWAY",
			"CAUSWA",
			"CAUSWAY",
			"CSWY"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "CSWY" );
		}

	} );

	it( "CTR", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"CEN",
			"CENT",
			"CENTER",
			"CENTR",
			"CENTRE",
			"CNTER",
			"CNTR",
			"CTR"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "CTR" );
		}

	} );

	it( "CTRS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"CENTERS",
			"CTRS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "CTRS" );
		}

	} );

	it( "CIR", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"CIRC",
			"CIRCL",
			"CIRCLE",
			"CRCL",
			"CRCLE",
			"CIR"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "CIR" );
		}

	} );

	it( "CIRS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"CIRCLES",
			"CIRS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "CIRS" );
		}

	} );

	it( "CLF", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"CLIFF",
			"CLF"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "CLF" );
		}

	} );

	it( "CLFS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"CLIFFS",
			"CLFS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "CLFS" );
		}

	} );

	it( "CLB", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"CLUB",
			"CLB"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "CLB" );
		}

	} );

	it( "CMN", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"COMMON",
			"CMN"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "CMN" );
		}

	} );

	it( "CMNS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"COMMONS",
			"CMNS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "CMNS" );
		}

	} );

	it( "COR", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"CORNER",
			"COR"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "COR" );
		}

	} );

	it( "CORS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"CORNERS",
			"CORS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "CORS" );
		}

	} );

	it( "CRSE", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"COURSE",
			"CRSE"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "CRSE" );
		}

	} );

	it( "CT", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"COURT",
			"CRT",
			"CT"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "CT" );
		}

	} );

	it( "CTS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"COURTS",
			"CRTS",
			"CTS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "CTS" );
		}

	} );

	it( "CV", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"COVE",
			"CV"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "CV" );
		}

	} );

	it( "CVS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"COVES",
			"CVS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "CVS" );
		}

	} );

	it( "CRK", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"CREEK",
			"CRK",
			"CK",
			"CR"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "CRK" );
		}

	} );

	it( "CRES", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"CRESCENT",
			"CRESENT",
			"CRECENT",
			"CRSENT",
			"CRSNT",
			"CRSCNT",
			"CRSENT",
			"CRES"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "CRES" );
		}

	} );

	it( "CRST", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"CREST",
			"CRST"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "CRST" );
		}

	} );

	it( "XING", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"CROSSING",
			"CRSSNG",
			"CRSNG",
			"XING"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "XING" );
		}

	} );

	it( "XRD", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"CROSSROAD",
			"XRD"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "XRD" );
		}

	} );

	it( "XRDS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"CROSSROADS",
			"XRDS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "XRDS" );
		}

	} );

	it( "CURV", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"CURVE",
			"CURV"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "CURV" );
		}

	} );

	it( "DL", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"DALE",
			"DL"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "DL" );
		}

	} );

	it( "DM", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"DAM",
			"DM"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "DM" );
		}

	} );

	it( "DV", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"DIV",
			"DIVIDE",
			"DVD",
			"DV"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "DV" );
		}

	} );

	it( "DR", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"DRIV",
			"DRIVE",
			"DRV",
			"DR"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "DR" );
		}

	} );

	it( "DRS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"DRIVES",
			"DRS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "DRS" );
		}

	} );

	it( "EST", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"ESTATE",
			"EST"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "EST" );
		}

	} );

	it( "ESTS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"ESTATES",
			"ESTS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "ESTS" );
		}

	} );

	it( "EXPY", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"EXP",
			"EXPR",
			"EXPRESS",
			"EXPRESSWAY",
			"EXPW",
			"EXPY"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "EXPY" );
		}

	} );

	it( "EXT", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"EXTENSION",
			"EXTN",
			"EXTNSN",
			"EXT"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "EXT" );
		}

	} );

	it( "EXTS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"EXTENSIONS",
			"EXTS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "EXTS" );
		}

	} );

	it( "FALL", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"FLL",
			"FALL"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "FALL" );
		}

	} );

	it( "FLS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"FALLS",
			"FLS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "FLS" );
		}

	} );

	it( "FRY", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"FERRY",
			"FRRY",
			"FRY"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "FRY" );
		}

	} );

	it( "FLD", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"FIELD",
			"FLD"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "FLD" );
		}

	} );

	it( "FLDS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"FIELDS",
			"FLDS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "FLDS" );
		}

	} );

	it( "FLT", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"FLAT",
			"FLT"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "FLT" );
		}

	} );

	it( "FLTS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"FLATS",
			"FLTS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "FLTS" );
		}

	} );

	it( "FRD", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"FORD",
			"FRD"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "FRD" );
		}

	} );

	it( "FRDS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"FORDS",
			"FRDS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "FRDS" );
		}

	} );

	it( "FRST", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"FOREST",
			"FORESTS",
			"FRST"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "FRST" );
		}

	} );

	it( "FRG", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"FORG",
			"FORGE",
			"FRG"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "FRG" );
		}

	} );

	it( "FRGS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"FORGES",
			"FRGS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "FRGS" );
		}

	} );

	it( "FRK", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"FORK",
			"FRK"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "FRK" );
		}

	} );

	it( "FRKS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"FORKS",
			"FRKS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "FRKS" );
		}

	} );

	it( "FT", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"FORT",
			"FRT",
			"FT"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "FT" );
		}

	} );

	it( "FWY", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"FREEWAY",
			"FREEWY",
			"FRWAY",
			"FRWY",
			"FWY"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "FWY" );
		}

	} );

	it( "GDN", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"GARDEN",
			"GARDN",
			"GRDEN",
			"GRDN",
			"GDN"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "GDN" );
		}

	} );

	it( "GDNS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"GARDENS",
			"GRDNS",
			"GDNS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "GDNS" );
		}

	} );

	it( "GTWY", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"GATEWAY",
			"GATEWY",
			"GATWAY",
			"GTWAY",
			"GTWY"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "GTWY" );
		}

	} );

	it( "GLN", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"GLEN",
			"GLN"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "GLN" );
		}

	} );

	it( "GLNS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"GLENS",
			"GLNS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "GLNS" );
		}

	} );

	it( "GRN", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"GREEN",
			"GRN"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "GRN" );
		}

	} );

	it( "GRNS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"GREENS",
			"GRNS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "GRNS" );
		}

	} );

	it( "GRV", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"GROV",
			"GROVE",
			"GRV"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "GRV" );
		}

	} );

	it( "GRVS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"GROVES",
			"GRVS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "GRVS" );
		}

	} );

	it( "HBR", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"HARB",
			"HARBOR",
			"HARBR",
			"HRBOR",
			"HBR"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "HBR" );
		}

	} );

	it( "HBRS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"HARBORS",
			"HBRS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "HBRS" );
		}

	} );

	it( "HVN", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"HAVEN",
			"HAVN",
			"HVN"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "HVN" );
		}

	} );

	it( "HTS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"HT",
			"HEIGHT",
			"HEIGHTS",
			"HGTS",
			"HTS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "HTS" );
		}

	} );

	it( "HWY", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"HIGHWAY",
			"HIGHWY",
			"HIWAY",
			"HIWY",
			"HWAY",
			"HWY"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "HWY" );
		}

	} );

	it( "HL", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"HILL",
			"HL"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "HL" );
		}

	} );

	it( "HLS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"HILLS",
			"HLS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "HLS" );
		}

	} );

	it( "HOLW", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"HLLW",
			"HOLLOW",
			"HOLLOWS",
			"HOLWS",
			"HOLW"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "HOLW" );
		}

	} );

	it( "INLT", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"INLET",
			"INLT"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "INLT" );
		}

	} );

	it( "IS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"ISLAND",
			"ISLND",
			"IS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "IS" );
		}

	} );

	it( "ISS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"ISLANDS",
			"ISLNDS",
			"ISS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "ISS" );
		}

	} );

	it( "ISLE", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"ISLES",
			"ISLE"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "ISLE" );
		}

	} );

	it( "JCT", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"JCTION",
			"JCTN",
			"JUNCTION",
			"JUNCTN",
			"JUNCTON",
			"JCT"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "JCT" );
		}

	} );

	it( "JCTS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"JCTNS",
			"JUNCTIONS",
			"JCTS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "JCTS" );
		}

	} );

	it( "KY", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"KEY",
			"KY"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "KY" );
		}

	} );

	it( "KYS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"KEYS",
			"KYS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "KYS" );
		}

	} );

	it( "KNL", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"KNOL",
			"KNOLL",
			"KNL"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "KNL" );
		}

	} );

	it( "KNLS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"KNOLLS",
			"KNLS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "KNLS" );
		}

	} );

	it( "LK", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"LAKE",
			"LK"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "LK" );
		}

	} );

	it( "LKS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"LAKES",
			"LKS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "LKS" );
		}

	} );

	it( "LAND", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"LAND"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "LAND" );
		}

	} );

	it( "LNDNG", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"LANDING",
			"LNDNG",
			"LNDG"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "LNDG" );
		}

	} );

	it( "LN", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"LANE",
			"LANES",
			"LA",
			"LN"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "LN" );
		}

	} );

	it( "LGT", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"LIGHT",
			"LGT"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "LGT" );
		}

	} );

	it( "LGTS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"LIGHTS",
			"LGTS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "LGTS" );
		}

	} );

	it( "LF", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"LOAF",
			"LF"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "LF" );
		}

	} );

	it( "LCK", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"LOCK",
			"LCK"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "LCK" );
		}

	} );

	it( "LCKS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"LOCKS",
			"LCKS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "LCKS" );
		}

	} );

	it( "LDG", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"LDGE",
			"LODG",
			"LODGE",
			"LDG"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "LDG" );
		}

	} );

	it( "LP", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"LP",
			"LOOPS",
			"LOOP"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "LOOP" );
		}

	} );

	it( "MALL", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"MALL"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "MALL" );
		}

	} );

	it( "MNR", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"MANOR",
			"MNR"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "MNR" );
		}

	} );

	it( "MNRS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"MANORS",
			"MNRS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "MNRS" );
		}

	} );

	it( "MDW", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"MEADOW",
			"MDW"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "MDW" );
		}

	} );

	it( "MDWS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"MEADOWS",
			"MEDOWS",
			"MDWS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "MDWS" );
		}

	} );

	it( "MEWS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"MEWS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "MEWS" );
		}

	} );

	it( "ML", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"MILL",
			"ML"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "ML" );
		}

	} );

	it( "MLS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"MILLS",
			"MLS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "MLS" );
		}

	} );

	it( "MSN", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"MISSION",
			"MISSN",
			"MSSN",
			"MSN"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "MSN" );
		}

	} );

	it( "MTWY", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"MOTORWAY",
			"MOTORWY",
			"MTRWY",
			"MTWY"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "MTWY" );
		}

	} );

	it( "MT", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"MNT",
			"MOUNT",
			"MT"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "MT" );
		}

	} );

	it( "MTN", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"MNTAIN",
			"MNTN",
			"MOUNTAIN",
			"MOUNTIN",
			"MTIN",
			"MTN"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "MTN" );
		}

	} );

	it( "MTNS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"MOUNTAINS",
			"MNTNS",
			"MTNS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "MTNS" );
		}

	} );

	it( "NCK", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"NECK",
			"NCK"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "NCK" );
		}

	} );

	it( "ORCH", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"ORCHARD",
			"ORCHRD",
			"ORCH"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "ORCH" );
		}

	} );

	it( "OVL", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"OVL",
			"OVAL"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "OVAL" );
		}

	} );

	it( "OPAS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"OVERPASS",
			"OPAS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "OPAS" );
		}

	} );

	it( "PRK", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"PARK",
			"PK",
			"PRK",
			"PARKS",
			"PRKS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "PARK" );
		}

	} );

	it( "PKWY", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"PARKWAY",
			"PARKWY",
			"PKWAY",
			"PKY",
			"PARKWAYS",
			"PARKWYS",
			"PKWAYS",
			"PKYS",
			"PKWYS",
			"PKWY"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "PKWY" );
		}

	} );

	it( "PASS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"PASS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "PASS" );
		}

	} );

	it( "PSGE", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"PASSAGE",
			"PSGE"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "PSGE" );
		}

	} );

	it( "PATH", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"PATHS",
			"PATH"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "PATH" );
		}

	} );

	it( "PIKE", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"PIKES",
			"PIKE"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "PIKE" );
		}

	} );

	it( "PNE", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"PINE",
			"PNE"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "PNE" );
		}

	} );

	it( "PNES", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"PINES",
			"PNES"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "PNES" );
		}

	} );

	it( "PL", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"PLACE",
			"PL"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "PL" );
		}

	} );

	it( "PLN", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"PLAIN",
			"PLN"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "PLN" );
		}

	} );

	it( "PLNS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"PLAINS",
			"PLAINES",
			"PLNS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "PLNS" );
		}

	} );

	it( "PLZ", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"PLAZA",
			"PLZA",
			"PLZ"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "PLZ" );
		}

	} );

	it( "PT", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"POINT",
			"PT"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "PT" );
		}

	} );

	it( "PTS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"POINTS",
			"PTS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "PTS" );
		}

	} );

	it( "PRT", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"PORT",
			"PRT"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "PRT" );
		}

	} );

	it( "PRTS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"PORTS",
			"PRTS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "PRTS" );
		}

	} );

	it( "PR", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"PRAIRIE",
			"PRARIE",
			"PRR",
			"PR"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "PR" );
		}

	} );

	it( "RADL", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"RAD",
			"RADIAL",
			"RADIEL",
			"RADL"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "RADL" );
		}

	} );

	it( "RAMP", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"RAMP"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "RAMP" );
		}

	} );

	it( "RNCH", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"RANCH",
			"RANCHES",
			"RNCHS",
			"RNCH"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "RNCH" );
		}

	} );

	it( "RPD", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"RAPID",
			"RPD"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "RPD" );
		}

	} );

	it( "RPDS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"RAPIDS",
			"RPDS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "RPDS" );
		}

	} );

	it( "RST", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"REST",
			"RST"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "RST" );
		}

	} );

	it( "RDG", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"RDGE",
			"RIDGE",
			"RDG"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "RDG" );
		}

	} );

	it( "RDGS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"RIDGES",
			"RDGS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "RDGS" );
		}

	} );

	it( "RIV", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"RIVER",
			"RVR",
			"RIVR",
			"RIV"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "RIV" );
		}

	} );

	it( "RD", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"ROAD",
			"RD"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "RD" );
		}

	} );

	it( "RDS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"ROADS",
			"RDS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "RDS" );
		}

	} );

	it( "RTE", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"ROUTE",
			"RTE"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "RTE" );
		}

	} );

	it( "ROW", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"ROW"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "ROW" );
		}

	} );

	it( "RUE", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"RUE"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "RUE" );
		}

	} );

	it( "RUN", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"RUN"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "RUN" );
		}

	} );

	it( "SHL", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"SHOAL",
			"SHL"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SHL" );
		}

	} );

	it( "SHLS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"SHOALS",
			"SHLS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SHLS" );
		}

	} );

	it( "SHR", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"SHOAR",
			"SHORE",
			"SHR"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SHR" );
		}

	} );

	it( "SHRS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"SHORES",
			"SHOARS",
			"SHRS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SHRS" );
		}

	} );

	it( "SKWY", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"SKYWAY",
			"SKYWY",
			"SKWY"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SKWY" );
		}

	} );

	it( "SPG", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"SPNG",
			"SPRING",
			"SPRNG",
			"SPG"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SPG" );
		}

	} );

	it( "SPGS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"SPNGS",
			"SPRINGS",
			"SPRNGS",
			"SPGS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SPGS" );
		}

	} );

	it( "SPUR", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"SPR",
			"SPRS",
			"SPURS",
			"SPUR"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SPUR" );
		}

	} );

	it( "SQ", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"SQR",
			"SQRE",
			"SQU",
			"SQUARE",
			"SQ"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SQ" );
		}

	} );

	it( "SQS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"SQRS",
			"SQUARES",
			"SQS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SQS" );
		}

	} );

	it( "STA", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"STATION",
			"STATN",
			"STN",
			"STA"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "STA" );
		}

	} );

	it( "STRA", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"STRAV",
			"STRAVEN",
			"STRAVENUE",
			"STRAVN",
			"STRVN",
			"STRVNUE",
			"STRAVE",
			"STRA"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "STRA" );
		}

	} );

	it( "STRM", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"STREAM",
			"STREME",
			"STRM"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "STRM" );
		}

	} );

	it( "ST", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"STREET",
			"STRT",
			"STR",
			"ST"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "ST" );
		}

	} );

	it( "STS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"STREETS",
			"STS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "STS" );
		}

	} );

	it( "SMT", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"SUMIT",
			"SUMITT",
			"SUMMIT",
			"SMT"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SMT" );
		}

	} );

	it( "TER", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"TERR",
			"TERRACE",
			"TER"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "TER" );
		}

	} );

	it( "TRWY", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"THROUGHWAY",
			"TRWY"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "TRWY" );
		}

	} );

	it( "TRCE", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"TRACE",
			"TRACES",
			"TRCE"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "TRCE" );
		}

	} );

	it( "TRAK", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"TRACK",
			"TRACKS",
			"TRK",
			"TRKS",
			"TRAK"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "TRAK" );
		}

	} );

	it( "TRFY", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"TRAFFICWAY",
			"TRFY"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "TRFY" );
		}

	} );

	it( "TRL", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"TRAIL",
			"TR",
			"TRAILS",
			"TRLS",
			"TRL"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "TRL" );
		}

	} );

	it( "TRLR", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"TRAILER",
			"TRAILERS",
			"TRLRS",
			"TRLR"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "TRLR" );
		}

	} );

	it( "TUNL", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"TUNEL",
			"TUNLS",
			"TUNNEL",
			"TUNNELS",
			"TUNNL",
			"TUNL"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "TUNL" );
		}

	} );

	it( "TPKE", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"TRNPK",
			"TURNPIKE",
			"TURNPK",
			"TPK",
			"TRPK",
			"TPKE"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "TPKE" );
		}

	} );

	it( "UPAS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"UNDERPASS",
			"UNDRPASS",
			"UNDRPSS",
			"UDRPSS",
			"UDRPS",
			"UPASS",
			"UPAS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "UPAS" );
		}

	} );

	it( "UN", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"UNION",
			"UN"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "UN" );
		}

	} );

	it( "UNS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"UNIONS",
			"UNS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "UNS" );
		}

	} );

	it( "VLY", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"VALLEY",
			"VALLY",
			"VLLY",
			"VLY"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "VLY" );
		}

	} );

	it( "VLYS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"VALLEYS",
			"VLYS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "VLYS" );
		}

	} );

	it( "VIA", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"VDCT",
			"VIADCT",
			"VIADUCT",
			"VIA"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "VIA" );
		}

	} );

	it( "VW", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"VIEW",
			"VW"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "VW" );
		}

	} );

	it( "VWS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"VIEWS",
			"VWS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "VWS" );
		}

	} );

	it( "VLG", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"VILL",
			"VILG",
			"VILLAG",
			"VILLAGE",
			"VILLG",
			"VILLIAGE",
			"VLG"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "VLG" );
		}

	} );

	it( "VLGS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"VILLAGES",
			"VILLS",
			"VLGS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "VLGS" );
		}

	} );

	it( "VL", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"VILLE",
			"VL"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "VL" );
		}

	} );

	it( "VIS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"VIST",
			"VISTA",
			"VST",
			"VSTA",
			"VIS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "VIS" );
		}

	} );

	it( "WALK", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"WALKS",
			"WALK"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "WALK" );
		}

	} );

	it( "WALL", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"WLL",
			"WALL"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "WALL" );
		}

	} );

	it( "WAY", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"WAY",
			"WY"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "WAY" );
		}

	} );

	it( "WAYS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"WAYS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "WAYS" );
		}

	} );

	it( "WL", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"WELL",
			"WEL",
			"WL"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "WL" );
		}

	} );

	it( "WLS", function () {
		if ( !postal ) {
			return;
		}

		var names = [
			"WELLS",
			"WELS",
			"WLS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.street.type.match( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "WLS" );
		}

	} );

	it( "Geo-StreetAddress-US", function () {
		if ( !postal ) {
			return;
		}

		var streetTypes = {
			allee: "aly",
			alley: "aly",
			ally: "aly",
			anex: "anx",
			annex: "anx",
			annx: "anx",
			arcade: "arc",
			av: "ave",
			aven: "ave",
			avenu: "ave",
			avenue: "ave",
			avn: "ave",
			avnue: "ave",
			bayoo: "byu",
			bayou: "byu",
			beach: "bch",
			bend: "bnd",
			bluf: "blf",
			bluff: "blf",
			bluffs: "blfs",
			bot: "btm",
			bottm: "btm",
			bottom: "btm",
			boul: "blvd",
			boulevard: "blvd",
			boulv: "blvd",
			branch: "br",
			brdge: "brg",
			bridge: "brg",
			brnch: "br",
			brook: "brk",
			brooks: "brks",
			burg: "bg",
			burgs: "bgs",
			bypa: "byp",
			bypas: "byp",
			bypass: "byp",
			byps: "byp",
			camp: "cp",
			canyn: "cyn",
			canyon: "cyn",
			cape: "cpe",
			causeway: "cswy",
			causway: "cswy",
			cen: "ctr",
			cent: "ctr",
			center: "ctr",
			centers: "ctrs",
			centr: "ctr",
			centre: "ctr",
			circ: "cir",
			circl: "cir",
			circle: "cir",
			circles: "cirs",
			ck: "crk",
			cliff: "clf",
			cliffs: "clfs",
			club: "clb",
			cmp: "cp",
			cnter: "ctr",
			cntr: "ctr",
			cnyn: "cyn",
			common: "cmn",
			corner: "cor",
			corners: "cors",
			course: "crse",
			court: "ct",
			courts: "cts",
			cove: "cv",
			coves: "cvs",
			cr: "crk",
			crcl: "cir",
			crcle: "cir",
			crecent: "cres",
			creek: "crk",
			crescent: "cres",
			cresent: "cres",
			crest: "crst",
			crossing: "xing",
			crossroad: "xrd",
			crscnt: "cres",
			crsent: "cres",
			crsnt: "cres",
			crssing: "xing",
			crssng: "xing",
			crt: "ct",
			curve: "curv",
			dale: "dl",
			dam: "dm",
			div: "dv",
			divide: "dv",
			driv: "dr",
			drive: "dr",
			drives: "drs",
			drv: "dr",
			dvd: "dv",
			estate: "est",
			estates: "ests",
			exp: "expy",
			expr: "expy",
			express: "expy",
			expressway: "expy",
			expw: "expy",
			extension: "ext",
			extensions: "exts",
			extn: "ext",
			extnsn: "ext",
			falls: "fls",
			ferry: "fry",
			field: "fld",
			fields: "flds",
			flat: "flt",
			flats: "flts",
			ford: "frd",
			fords: "frds",
			forest: "frst",
			forests: "frst",
			forg: "frg",
			forge: "frg",
			forges: "frgs",
			fork: "frk",
			forks: "frks",
			fort: "ft",
			freeway: "fwy",
			freewy: "fwy",
			frry: "fry",
			frt: "ft",
			frway: "fwy",
			frwy: "fwy",
			garden: "gdn",
			gardens: "gdns",
			gardn: "gdn",
			gateway: "gtwy",
			gatewy: "gtwy",
			gatway: "gtwy",
			glen: "gln",
			glens: "glns",
			grden: "gdn",
			grdn: "gdn",
			grdns: "gdns",
			green: "grn",
			greens: "grns",
			grov: "grv",
			grove: "grv",
			groves: "grvs",
			gtway: "gtwy",
			harb: "hbr",
			harbor: "hbr",
			harbors: "hbrs",
			harbr: "hbr",
			haven: "hvn",
			havn: "hvn",
			height: "hts",
			heights: "hts",
			hgts: "hts",
			highway: "hwy",
			highwy: "hwy",
			hill: "hl",
			hills: "hls",
			hiway: "hwy",
			hiwy: "hwy",
			hllw: "holw",
			hollow: "holw",
			hollows: "holw",
			holws: "holw",
			hrbor: "hbr",
			ht: "hts",
			hway: "hwy",
			inlet: "inlt",
			island: "is",
			islands: "iss",
			isles: "isle",
			islnd: "is",
			islnds: "iss",
			jction: "jct",
			jctn: "jct",
			jctns: "jcts",
			junction: "jct",
			junctions: "jcts",
			junctn: "jct",
			juncton: "jct",
			key: "ky",
			keys: "kys",
			knol: "knl",
			knoll: "knl",
			knolls: "knls",
			la: "ln",
			lake: "lk",
			lakes: "lks",
			landing: "lndg",
			lane: "ln",
			lanes: "ln",
			ldge: "ldg",
			light: "lgt",
			lights: "lgts",
			lndng: "lndg",
			loaf: "lf",
			lock: "lck",
			locks: "lcks",
			lodg: "ldg",
			lodge: "ldg",
			loops: "loop",
			manor: "mnr",
			manors: "mnrs",
			meadow: "mdw",
			meadows: "mdws",
			medows: "mdws",
			mill: "ml",
			mills: "mls",
			mission: "msn",
			missn: "msn",
			mnt: "mt",
			mntain: "mtn",
			mntn: "mtn",
			mntns: "mtns",
			motorway: "mtwy",
			mount: "mt",
			mountain: "mtn",
			mountains: "mtns",
			mountin: "mtn",
			mssn: "msn",
			mtin: "mtn",
			neck: "nck",
			orchard: "orch",
			orchrd: "orch",
			overpass: "opas",
			ovl: "oval",
			parks: "park",
			parkway: "pkwy",
			parkways: "pkwy",
			parkwy: "pkwy",
			passage: "psge",
			paths: "path",
			pikes: "pike",
			pine: "pne",
			pines: "pnes",
			pk: "park",
			pkway: "pkwy",
			pkwys: "pkwy",
			pky: "pkwy",
			place: "pl",
			plain: "pln",
			plaines: "plns",
			plains: "plns",
			plaza: "plz",
			plza: "plz",
			point: "pt",
			points: "pts",
			port: "prt",
			ports: "prts",
			prairie: "pr",
			prarie: "pr",
			prk: "park",
			prr: "pr",
			rad: "radl",
			radial: "radl",
			radiel: "radl",
			ranch: "rnch",
			ranches: "rnch",
			rapid: "rpd",
			rapids: "rpds",
			rdge: "rdg",
			rest: "rst",
			ridge: "rdg",
			ridges: "rdgs",
			river: "riv",
			rivr: "riv",
			rnchs: "rnch",
			road: "rd",
			roads: "rds",
			route: "rte",
			rvr: "riv",
			shoal: "shl",
			shoals: "shls",
			shoar: "shr",
			shoars: "shrs",
			shore: "shr",
			shores: "shrs",
			skyway: "skwy",
			spng: "spg",
			spngs: "spgs",
			spring: "spg",
			springs: "spgs",
			sprng: "spg",
			sprngs: "spgs",
			spurs: "spur",
			sqr: "sq",
			sqre: "sq",
			sqrs: "sqs",
			squ: "sq",
			square: "sq",
			squares: "sqs",
			station: "sta",
			statn: "sta",
			stn: "sta",
			str: "st",
			strav: "stra",
			strave: "stra",
			straven: "stra",
			stravenue: "stra",
			stravn: "stra",
			stream: "strm",
			street: "st",
			streets: "sts",
			streme: "strm",
			strt: "st",
			strvn: "stra",
			strvnue: "stra",
			sumit: "smt",
			sumitt: "smt",
			summit: "smt",
			terr: "ter",
			terrace: "ter",
			throughway: "trwy",
			tpk: "tpke",
			tr: "trl",
			trace: "trce",
			traces: "trce",
			track: "trak",
			tracks: "trak",
			trafficway: "trfy",
			trail: "trl",
			trails: "trl",
			trk: "trak",
			trks: "trak",
			trls: "trl",
			trnpk: "tpke",
			trpk: "tpke",
			tunel: "tunl",
			tunls: "tunl",
			tunnel: "tunl",
			tunnels: "tunl",
			tunnl: "tunl",
			turnpike: "tpke",
			turnpk: "tpke",
			underpass: "upas",
			union: "un",
			unions: "uns",
			valley: "vly",
			valleys: "vlys",
			vally: "vly",
			vdct: "via",
			viadct: "via",
			viaduct: "via",
			view: "vw",
			views: "vws",
			vill: "vlg",
			villag: "vlg",
			village: "vlg",
			villages: "vlgs",
			ville: "vl",
			villg: "vlg",
			villiage: "vlg",
			vist: "vis",
			vista: "vis",
			vlly: "vly",
			vst: "vis",
			vsta: "vis",
			walks: "walk",
			well: "wl",
			wells: "wls",
			wy: "way"
		};
		var streetType, expected, abbr;
		for ( streetType in streetTypes ) {
			if ( streetTypes.hasOwnProperty( streetType ) ) {
				expected = streetTypes[ streetType ].toUpperCase();
				abbr = postal.standardization.street.type.match( streetType );
				if ( !abbr ) {
					//	Need to assist in test debugging
					expected.should.equal( abbr );
				}
				should.exist( abbr );
				abbr.should.equal( expected );
			}
		}
	} );

} );