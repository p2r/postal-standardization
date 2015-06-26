"use strict";

/* global describe, it */

var should = require( "should" );

var Standardization = require( "../../../lib/us/Standardization" );

describe( "Street Suffices:", function () {

	var standardization = new Standardization();

	it( "ALY", function () {
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
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "ALY" );
		}

	} );

	it( "ANX", function () {
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
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "ANX" );
		}

	} );

	it( "ARC", function () {
		var names = [
			"ARCADE",
			"ARC"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "ARC" );
		}

	} );

	it( "AVE", function () {
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
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "AVE" );
		}

	} );

	it( "BYU", function () {
		var names = [
			"BAYOO",
			"BAYOU",
			"BYU",
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "BYU" );
		}

	} );

	it( "BCH", function () {
		var names = [
			"BEACH",
			"BCH"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "BCH" );
		}

	} );

	it( "BND", function () {
		var names = [
			"BEND",
			"BND"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "BND" );
		}

	} );

	it( "BLF", function () {
		var names = [
			"BLUF",
			"BLUFF",
			"BLF"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "BLF" );
		}

	} );

	it( "BLFS", function () {
		var names = [
			"BLUFFS",
			"BLUFS",
			"BLFFS",
			"BLFS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "BLFS" );
		}

	} );

	it( "BTM", function () {
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
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "BTM" );
		}

	} );

	it( "BLVD", function () {
		var names = [
			"BOUL",
			"BOULEVARD",
			"BOULV",
			"BLVD"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "BLVD" );
		}

	} );

	it( "BR", function () {
		var names = [
			"BRNCH",
			"BRCH",
			"BRANCH",
			"BR"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "BR" );
		}

	} );

	it( "BRG", function () {
		var names = [
			"BRDGE",
			"BRIDGE",
			"BRIDG",
			"BRG"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "BRG" );
		}

	} );

	it( "BRK", function () {
		var names = [
			"BROOK",
			"BRK"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "BRK" );
		}

	} );

	it( "BRKS", function () {
		var names = [
			"BROOKS",
			"BRKS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "BRKS" );
		}

	} );

	it( "BRG", function () {
		var names = [
			"BURG",
			"BRG"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "BRG" );
		}

	} );

	it( "BGS", function () {
		var names = [
			"BURGS",
			"BGS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "BGS" );
		}

	} );

	it( "BYP", function () {
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
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "BYP" );
		}

	} );

	it( "CP", function () {
		var names = [
			"CAMP",
			"CMP",
			"CP"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "CP" );
		}

	} );

	it( "CYN", function () {
		var names = [
			"CANYN",
			"CANYON",
			"CNYN",
			"CYN"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "CYN" );
		}

	} );

	it( "CPE", function () {
		var names = [
			"CAPE",
			"CPE"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "CPE" );
		}

	} );

	it( "CSWY", function () {
		var names = [
			"CAUSEWAY",
			"CAUSWA",
			"CSWY"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "CSWY" );
		}

	} );

	it( "CTR", function () {
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
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "CTR" );
		}

	} );

	it( "CTRS", function () {
		var names = [
			"CENTERS",
			"CTRS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "CTRS" );
		}

	} );

	it( "CIR", function () {
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
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "CIR" );
		}

	} );

	it( "CIRS", function () {
		var names = [
			"CIRCLES",
			"CIRS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "CIRS" );
		}

	} );

	it( "CLF", function () {
		var names = [
			"CLIFF",
			"CLF"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "CLF" );
		}

	} );

	it( "CLFS", function () {
		var names = [
			"CLIFFS",
			"CLFS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "CLFS" );
		}

	} );

	it( "CLB", function () {
		var names = [
			"CLUB",
			"CLB"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "CLB" );
		}

	} );

	it( "CMN", function () {
		var names = [
			"COMMON",
			"CMN"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "CMN" );
		}

	} );

	it( "CMNS", function () {
		var names = [
			"COMMONS",
			"CMNS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "CMNS" );
		}

	} );

	it( "COR", function () {
		var names = [
			"CORNER",
			"COR"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "COR" );
		}

	} );

	it( "CORS", function () {
		var names = [
			"CORNERS",
			"CORS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "CORS" );
		}

	} );

	it( "CRSE", function () {
		var names = [
			"COURSE",
			"CRSE"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "CRSE" );
		}

	} );

	it( "CT", function () {
		var names = [
			"COURT",
			"CT"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "CT" );
		}

	} );

	it( "CTS", function () {
		var names = [
			"COURTS",
			"CTS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "CTS" );
		}

	} );

	it( "CV", function () {
		var names = [
			"COVE",
			"CV"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "CV" );
		}

	} );

	it( "CVS", function () {
		var names = [
			"COVES",
			"CVS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "CVS" );
		}

	} );

	it( "CRK", function () {
		var names = [
			"CREEK",
			"CRK"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "CRK" );
		}

	} );

	it( "CRES", function () {
		var names = [
			"CRESCENT",
			"CRSENT",
			"CRSNT",
			"CRES"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "CRES" );
		}

	} );

	it( "CRST", function () {
		var names = [
			"CREST",
			"CRST"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "CRST" );
		}

	} );

	it( "XING", function () {
		var names = [
			"CROSSING",
			"CRSSNG",
			"XING"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "XING" );
		}

	} );

	it( "XRD", function () {
		var names = [
			"CROSSROAD",
			"XRD"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "XRD" );
		}

	} );

	it( "XRDS", function () {
		var names = [
			"CROSSROADS",
			"XRDS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "XRDS" );
		}

	} );

	it( "CURV", function () {
		var names = [
			"CURVE",
			"CURV"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "CURV" );
		}

	} );

	it( "DL", function () {
		var names = [
			"DALE",
			"DL"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "DL" );
		}

	} );

	it( "DM", function () {
		var names = [
			"DAM",
			"DM"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "DM" );
		}

	} );

	it( "DV", function () {
		var names = [
			"DIV",
			"DIVIDE",
			"DVD",
			"DV"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "DV" );
		}

	} );

	it( "DR", function () {
		var names = [
			"DRIV",
			"DRIVE",
			"DRV",
			"DR"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "DR" );
		}

	} );

	it( "DRS", function () {
		var names = [
			"DRIVES",
			"DRS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "DRS" );
		}

	} );

	it( "EST", function () {
		var names = [
			"ESTATE",
			"EST"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "EST" );
		}

	} );

	it( "ESTS", function () {
		var names = [
			"ESTATES",
			"ESTS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "ESTS" );
		}

	} );

	it( "EXPY", function () {
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
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "EXPY" );
		}

	} );

	it( "EXT", function () {
		var names = [
			"EXTENSION",
			"EXTN",
			"EXTNSN",
			"EXT"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "EXT" );
		}

	} );

	it( "EXTS", function () {
		var names = [
			"EXTENSIONS",
			"EXTS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "EXTS" );
		}

	} );

	it( "FALL", function () {
		var names = [
			"FLL",
			"FALL"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "FALL" );
		}

	} );

	it( "FLS", function () {
		var names = [
			"FALLS",
			"FLS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "FLS" );
		}

	} );

	it( "FRY", function () {
		var names = [
			"FERRY",
			"FRRY",
			"FRY"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "FRY" );
		}

	} );

	it( "FLD", function () {
		var names = [
			"FIELD",
			"FLD"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "FLD" );
		}

	} );

	it( "FLDS", function () {
		var names = [
			"FIELDS",
			"FLDS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "FLDS" );
		}

	} );

	it( "FLT", function () {
		var names = [
			"FLAT",
			"FLT"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "FLT" );
		}

	} );

	it( "FLTS", function () {
		var names = [
			"FLATS",
			"FLTS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "FLTS" );
		}

	} );

	it( "FRD", function () {
		var names = [
			"FORD",
			"FRD"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "FRD" );
		}

	} );

	it( "FRDS", function () {
		var names = [
			"FORDS",
			"FRDS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "FRDS" );
		}

	} );

	it( "FRST", function () {
		var names = [
			"FOREST",
			"FORESTS",
			"FRST"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "FRST" );
		}

	} );

	it( "FRG", function () {
		var names = [
			"FORG",
			"FORGE",
			"FRG"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "FRG" );
		}

	} );

	it( "FRGS", function () {
		var names = [
			"FORGES",
			"FRGS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "FRGS" );
		}

	} );

	it( "FRK", function () {
		var names = [
			"FORK",
			"FRK"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "FRK" );
		}

	} );

	it( "FRKS", function () {
		var names = [
			"FORKS",
			"FRKS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "FRKS" );
		}

	} );

	it( "FRT", function () {
		var names = [
			"FORT",
			"FT",
			"FRT"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "FRT" );
		}

	} );

	it( "FWY", function () {
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
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "FWY" );
		}

	} );

	it( "GDN", function () {
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
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "GDN" );
		}

	} );

	it( "GDNS", function () {
		var names = [
			"GARDENS",
			"GRDNS",
			"GDNS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "GDNS" );
		}

	} );

	it( "GTWY", function () {
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
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "GTWY" );
		}

	} );

	it( "GLN", function () {
		var names = [
			"GLEN",
			"GLN"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "GLN" );
		}

	} );

	it( "GLNS", function () {
		var names = [
			"GLENS",
			"GLNS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "GLNS" );
		}

	} );

	it( "GRN", function () {
		var names = [
			"GREEN",
			"GRN"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "GRN" );
		}

	} );

	it( "GRNS", function () {
		var names = [
			"GREENS",
			"GRNS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "GRNS" );
		}

	} );

	it( "GRV", function () {
		var names = [
			"GROV",
			"GROVE",
			"GRV"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "GRV" );
		}

	} );

	it( "GRVS", function () {
		var names = [
			"GROVES",
			"GRVS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "GRVS" );
		}

	} );

	it( "HBR", function () {
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
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "HBR" );
		}

	} );

	it( "HBRS", function () {
		var names = [
			"HARBORS",
			"HBRS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "HBRS" );
		}

	} );

	it( "HVN", function () {
		var names = [
			"HAVEN",
			"HVN"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "HVN" );
		}

	} );

	it( "HTS", function () {
		var names = [
			"HT",
			"HTS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "HTS" );
		}

	} );

	it( "HWY", function () {
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
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "HWY" );
		}

	} );

	it( "HL", function () {
		var names = [
			"HILL",
			"HL"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "HL" );
		}

	} );

	it( "HLS", function () {
		var names = [
			"HILLS",
			"HLS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "HLS" );
		}

	} );

	it( "HOLW", function () {
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
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "HOLW" );
		}

	} );

	it( "INLT", function () {
		var names = [
			"INLET",
			"INLT"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "INLT" );
		}

	} );

	it( "IS", function () {
		var names = [
			"ISLAND",
			"ISLND",
			"IS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "IS" );
		}

	} );

	it( "ISS", function () {
		var names = [
			"ISLANDS",
			"ISLNDS",
			"ISS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "ISS" );
		}

	} );

	it( "ISLE", function () {
		var names = [
			"ISLES",
			"ISLE"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "ISLE" );
		}

	} );

	it( "JCT", function () {
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
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "JCT" );
		}

	} );

	it( "JCTS", function () {
		var names = [
			"JCTNS",
			"JUNCTIONS",
			"JCTS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "JCTS" );
		}

	} );

	it( "KY", function () {
		var names = [
			"KEY",
			"KY"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "KY" );
		}

	} );

	it( "KYS", function () {
		var names = [
			"KEYS",
			"KYS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "KYS" );
		}

	} );

	it( "KNL", function () {
		var names = [
			"KNOL",
			"KNOLL",
			"KNL"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "KNL" );
		}

	} );

	it( "KNLS", function () {
		var names = [
			"KNOLLS",
			"KNLS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "KNLS" );
		}

	} );

	it( "LK", function () {
		var names = [
			"LAKE",
			"LK"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "LK" );
		}

	} );

	it( "LKS", function () {
		var names = [
			"LAKES",
			"LKS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "LKS" );
		}

	} );

	it( "LAND", function () {
		var names = [
			"LAND"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "LAND" );
		}

	} );

	it( "LNDNG", function () {
		var names = [
			"LANDING",
			"LNDNG",
			"LNDG"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "LNDG" );
		}

	} );

	it( "LN", function () {
		var names = [
			"LANE",
			"LN"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "LN" );
		}

	} );

	it( "LGT", function () {
		var names = [
			"LIGHT",
			"LGT"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "LGT" );
		}

	} );

	it( "LGTS", function () {
		var names = [
			"LIGHTS",
			"LGTS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "LGTS" );
		}

	} );

	it( "LF", function () {
		var names = [
			"LOAF",
			"LF"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "LF" );
		}

	} );

	it( "LCK", function () {
		var names = [
			"LOCK",
			"LCK"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "LCK" );
		}

	} );

	it( "LCKS", function () {
		var names = [
			"LOCKS",
			"LCKS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "LCKS" );
		}

	} );

	it( "LDG", function () {
		var names = [
			"LDGE",
			"LODG",
			"LODGE",
			"LDG"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "LDG" );
		}

	} );

	it( "LP", function () {
		var names = [
			"LOOP",
			"LOOPS",
			"LP"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "LP" );
		}

	} );

	it( "MALL", function () {
		var names = [
			"MALL"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "MALL" );
		}

	} );

	it( "MNR", function () {
		var names = [
			"MANOR",
			"MNR"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "MNR" );
		}

	} );

	it( "MNRS", function () {
		var names = [
			"MANORS",
			"MNRS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "MNRS" );
		}

	} );

	it( "MDW", function () {
		var names = [
			"MEADOW",
			"MDW"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "MDW" );
		}

	} );

	it( "MDWS", function () {
		var names = [
			"MEADOWS",
			"MEDOWS",
			"MDWS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "MDWS" );
		}

	} );

	it( "MEWS", function () {
		var names = [
			"MEWS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "MEWS" );
		}

	} );

	it( "ML", function () {
		var names = [
			"MILL",
			"ML"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "ML" );
		}

	} );

	it( "MLS", function () {
		var names = [
			"MILLS",
			"MLS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "MLS" );
		}

	} );

	it( "MSN", function () {
		var names = [
			"MISSION",
			"MISSN",
			"MSSN",
			"MSN"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "MSN" );
		}

	} );

	it( "MTWY", function () {
		var names = [
			"MOTORWAY",
			"MOTORWY",
			"MTRWY",
			"MTWY"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "MTWY" );
		}

	} );

	it( "MT", function () {
		var names = [
			"MNT",
			"MOUNT",
			"MT"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "MT" );
		}

	} );

	it( "MTN", function () {
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
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "MTN" );
		}

	} );

	it( "MTNS", function () {
		var names = [
			"MOUNTAINS",
			"MTNS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "MTNS" );
		}

	} );

	it( "NCK", function () {
		var names = [
			"NECK",
			"NCK"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "NCK" );
		}

	} );

	it( "ORCH", function () {
		var names = [
			"ORCHARD",
			"ORCHRD",
			"ORCH"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "ORCH" );
		}

	} );

	it( "OVL", function () {
		var names = [
			"OVAL",
			"OVL"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "OVL" );
		}

	} );

	it( "OPAS", function () {
		var names = [
			"OVERPASS",
			"OPAS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "OPAS" );
		}

	} );

	it( "PRK", function () {
		var names = [
			"PARK",
			"PRK"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "PRK" );
		}

	} );

	it( "PRKS", function () {
		var names = [
			"PARKS",
			"PRKS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "PRKS" );
		}

	} );

	it( "PKWY", function () {
		var names = [
			"PARKWAY",
			"PARKWY",
			"PKWAY",
			"PKY",
			"PKWY"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "PKWY" );
		}

	} );

	it( "PKWYS", function () {
		var names = [
			"PARKWAYS",
			"PARKWYS",
			"PKWAYS",
			"PKYS",
			"PKWYS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "PKWYS" );
		}

	} );

	it( "PASS", function () {
		var names = [
			"PASS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "PASS" );
		}

	} );

	it( "PSGE", function () {
		var names = [
			"PASSAGE",
			"PSGE"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "PSGE" );
		}

	} );

	it( "PATH", function () {
		var names = [
			"PATHS",
			"PATH"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "PATH" );
		}

	} );

	it( "PIKE", function () {
		var names = [
			"PIKES",
			"PIKE"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "PIKE" );
		}

	} );

	it( "PNE", function () {
		var names = [
			"PINE",
			"PNE"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "PNE" );
		}

	} );

	it( "PNES", function () {
		var names = [
			"PINES",
			"PNES"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "PNES" );
		}

	} );

	it( "PL", function () {
		var names = [
			"PLACE",
			"PL"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "PL" );
		}

	} );

	it( "PLN", function () {
		var names = [
			"PLAIN",
			"PLN"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "PLN" );
		}

	} );

	it( "PLNS", function () {
		var names = [
			"PLAINS",
			"PLNS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "PLNS" );
		}

	} );

	it( "PLZ", function () {
		var names = [
			"PLAZA",
			"PLZA",
			"PLZ"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "PLZ" );
		}

	} );

	it( "PT", function () {
		var names = [
			"POINT",
			"PT"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "PT" );
		}

	} );

	it( "PTS", function () {
		var names = [
			"POINTS",
			"PTS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "PTS" );
		}

	} );

	it( "PRT", function () {
		var names = [
			"PORT",
			"PRT"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "PRT" );
		}

	} );

	it( "PRTS", function () {
		var names = [
			"PORTS",
			"PRTS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "PRTS" );
		}

	} );

	it( "PR", function () {
		var names = [
			"PRAIRIE",
			"PRR",
			"PR"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "PR" );
		}

	} );

	it( "RADL", function () {
		var names = [
			"RAD",
			"RADIAL",
			"RADIEL",
			"RADL"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "RADL" );
		}

	} );

	it( "RAMP", function () {
		var names = [
			"RAMP"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "RAMP" );
		}

	} );

	it( "RNCH", function () {
		var names = [
			"RANCH",
			"RANCHES",
			"RNCHS",
			"RNCH"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "RNCH" );
		}

	} );

	it( "RPD", function () {
		var names = [
			"RAPID",
			"RPD"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "RPD" );
		}

	} );

	it( "RPDS", function () {
		var names = [
			"RAPIDS",
			"RPDS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "RPDS" );
		}

	} );

	it( "RST", function () {
		var names = [
			"REST",
			"RST"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "RST" );
		}

	} );

	it( "RDG", function () {
		var names = [
			"RDGE",
			"RIDGE",
			"RDG"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "RDG" );
		}

	} );

	it( "RDGS", function () {
		var names = [
			"RIDGES",
			"RDGS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "RDGS" );
		}

	} );

	it( "RIV", function () {
		var names = [
			"RIVER",
			"RVR",
			"RIVR",
			"RIV"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "RIV" );
		}

	} );

	it( "RD", function () {
		var names = [
			"ROAD",
			"RD"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "RD" );
		}

	} );

	it( "RDS", function () {
		var names = [
			"ROADS",
			"RDS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "RDS" );
		}

	} );

	it( "RTE", function () {
		var names = [
			"ROUTE",
			"RTE"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "RTE" );
		}

	} );

	it( "ROW", function () {
		var names = [
			"ROW"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "ROW" );
		}

	} );

	it( "RUE", function () {
		var names = [
			"RUE"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "RUE" );
		}

	} );

	it( "RUN", function () {
		var names = [
			"RUN"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "RUN" );
		}

	} );

	it( "SHL", function () {
		var names = [
			"SHOAL",
			"SHL"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "SHL" );
		}

	} );

	it( "SHLS", function () {
		var names = [
			"SHOALS",
			"SHLS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "SHLS" );
		}

	} );

	it( "SHR", function () {
		var names = [
			"SHOAR",
			"SHORE",
			"SHR"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "SHR" );
		}

	} );

	it( "SHRS", function () {
		var names = [
			"SHORES",
			"SHOARS",
			"SHRS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "SHRS" );
		}

	} );

	it( "SPG", function () {
		var names = [
			"SPNG",
			"SPRING",
			"SPRNG",
			"SPG"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "SPG" );
		}

	} );

	it( "SPGS", function () {
		var names = [
			"SPNGS",
			"SPRINGS",
			"SPRNGS",
			"SPGS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "SPGS" );
		}

	} );

	it( "SPUR", function () {
		var names = [
			"SPR",
			"SPUR"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "SPUR" );
		}

	} );

	it( "SPURS", function () {
		var names = [
			"SPRS",
			"SPURS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "SPURS" );
		}

	} );

	it( "SQ", function () {
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
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "SQ" );
		}

	} );

	it( "SQS", function () {
		var names = [
			"SQRS",
			"SQUARES",
			"SQS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "SQS" );
		}

	} );

	it( "STA", function () {
		var names = [
			"STATION",
			"STATN",
			"STN",
			"STA"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "STA" );
		}

	} );

	it( "STRA", function () {
		var names = [
			"STRAV",
			"STRAVEN",
			"STRAVENUE",
			"STRAVN",
			"STRVN",
			"STRVNUE",
			"STRA"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "STRA" );
		}

	} );

	it( "STRM", function () {
		var names = [
			"STREAM",
			"STREME",
			"STRM"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "STRM" );
		}

	} );

	it( "ST", function () {
		var names = [
			"STREET",
			"STRT",
			"STR",
			"ST"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "ST" );
		}

	} );

	it( "STS", function () {
		var names = [
			"STREETS",
			"STS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "STS" );
		}

	} );

	it( "SMT", function () {
		var names = [
			"SUMIT",
			"SUMITT",
			"SUMMIT",
			"SMT"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "SMT" );
		}

	} );

	it( "TER", function () {
		var names = [
			"TERR",
			"TERRACE",
			"TER"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "TER" );
		}

	} );

	it( "TRWY", function () {
		var names = [
			"THROUGHWAY",
			"TRWY"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "TRWY" );
		}

	} );

	it( "TRCE", function () {
		var names = [
			"TRACE",
			"TRACES",
			"TRCE"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "TRCE" );
		}

	} );

	it( "TRAK", function () {
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
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "TRAK" );
		}

	} );

	it( "TRFY", function () {
		var names = [
			"TRAFFICWAY",
			"TRFY"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "TRFY" );
		}

	} );

	it( "TRL", function () {
		var names = [
			"TRAIL",
			"TRAILS",
			"TRLS",
			"TRL"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "TRL" );
		}

	} );

	it( "TRLR", function () {
		var names = [
			"TRAILER",
			"TRAILERS",
			"TRLRS",
			"TRLR"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "TRLR" );
		}

	} );

	it( "TUNL", function () {
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
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "TUNL" );
		}

	} );

	it( "TPKE", function () {
		var names = [
			"TRNPK",
			"TURNPIKE",
			"TURNPK",
			"TPKE"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "TPKE" );
		}

	} );

	it( "UPAS", function () {
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
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "UPAS" );
		}

	} );

	it( "UN", function () {
		var names = [
			"UNION",
			"UN"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "UN" );
		}

	} );

	it( "UNS", function () {
		var names = [
			"UNIONS",
			"UNS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "UNS" );
		}

	} );

	it( "VLY", function () {
		var names = [
			"VALLEY",
			"VALLY",
			"VLLY",
			"VLY"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "VLY" );
		}

	} );

	it( "VLYS", function () {
		var names = [
			"VALLEYS",
			"VLYS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "VLYS" );
		}

	} );

	it( "VIA", function () {
		var names = [
			"VDCT",
			"VIADCT",
			"VIADUCT",
			"VIA"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "VIA" );
		}

	} );

	it( "VW", function () {
		var names = [
			"VIEW",
			"VW"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "VW" );
		}

	} );

	it( "VWS", function () {
		var names = [
			"VIEWS",
			"VWS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "VWS" );
		}

	} );

	it( "VLG", function () {
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
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "VLG" );
		}

	} );

	it( "VLGS", function () {
		var names = [
			"VILLAGES",
			"VILLS",
			"VLGS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "VLGS" );
		}

	} );

	it( "VL", function () {
		var names = [
			"VILLE",
			"VL"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "VL" );
		}

	} );

	it( "VIS", function () {
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
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "VIS" );
		}

	} );

	it( "WALK", function () {
		var names = [
			"WALKS",
			"WALK"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "WALK" );
		}

	} );

	it( "WALL", function () {
		var names = [
			"WLL",
			"WALL"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "WALL" );
		}

	} );

	it( "WY", function () {
		var names = [
			"WAY",
			"WY"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "WY" );
		}

	} );

	it( "WAYS", function () {
		var names = [
			"WAYS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "WAYS" );
		}

	} );

	it( "WL", function () {
		var names = [
			"WELL",
			"WEL",
			"WL"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "WL" );
		}

	} );

	it( "WLS", function () {
		var names = [
			"WELLS",
			"WELS",
			"WLS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetSuffix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "WLS" );
		}

	} );

} );