"use strict";

/* global describe, it */

var should = require( "should" );

var Standardization = require( "../../../lib/us/Standardization" );

describe( "State/Possession Abbreviations:", function () {

	var standardization = new Standardization();

	it( "AL", function () {
		var names = [
			"ALABAMA",
			"ALBAMA",
			"ALLABAMA",
			"ALABAMMA",
			"ALA",
			"ALA.",
			"US-AL",
			"AL.",
			"AL"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "AL" );
		}

	} );

	it( "AK", function () {
		var names = [
			"ALASKA",
			"ALSKA",
			"ALLASKA",
			"ALSAKA",
			"ALAS",
			"ALAS.",
			"US-AK",
			"AK.",
			"AK"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "AK" );
		}

	} );

	it( "AS", function () {
		var names = [
			"AMERICAN SAMOA",
			"AMERICAN SAMO",
			"AMERICAN SAMOAH",
			"AMERICAN SAMOH",
			"AMERICA SAMOA",
			"AMERICA SAMO",
			"AMERICA SAMOAH",
			"AMER SAMOA",
			"AMER. SAMOA",
			"AM SAMOA",
			"AM. SAMOA",
			"AS.",
			"AS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "AS" );
		}

	} );

	it( "AZ", function () {
		var names = [
			"ARIZONA",
			"ARZONA",
			"ARIZNA",
			"ARIZONIA",
			"ARZINOA",
			"ARIZ",
			"ARIZ.",
			"US-AZ",
			"AZ.",
			"AZ"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "AZ" );
		}

	} );

	it( "AR", function () {
		var names = [
			"ARKANSAS",
			"ARCANSAS",
			"ARKANSAW",
			"ARC",
			"ARC.",
			"ARK",
			"ARK.",
			"US-AR",
			"AR.",
			"AR"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "AR" );
		}

	} );

	it( "CA", function () {
		var names = [
			"CALIFORNIA",
			"CALIFRONIA",
			"CALIFORNEA",
			"CALAFORNIA",
			"CALAFORNEA",
			"CALFORNIA",
			"CAL",
			"CAL.",
			"CALIF",
			"CALIF.",
			"CALF",
			"CALF.",
			"US-CA",
			"CA.",
			"CA"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "CA" );
		}

	} );

	it( "CO", function () {
		var names = [
			"COLORADO",
			"COLARADO",
			"COLARODO",
			"COLORODO",
			"CALORADO",
			"COLO",
			"COLO.",
			"COL",
			"COL.",
			"US-CO",
			"CO.",
			"CO"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "CO" );
		}

	} );

	it( "CT", function () {
		var names = [
			"CONNECTICUT",
			"CONNECTICUTT",
			"CONNETICUTT",
			"CONNETTICUT",
			"CONNETTICUTT",
			"CONNETICUT",
			"CONN",
			"CONN.",
			"US-CT",
			"CT.",
			"CT"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "CT" );
		}

	} );

	it( "DE", function () {
		var names = [
			"DELAWARE",
			"DELEWARE",
			"DELAWERE",
			"DELAWEAR",
			"DELAWAER",
			"DEL",
			"DEL.",
			"DELA",
			"DELA.",
			"US-DE",
			"DE.",
			"DE"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "DE" );
		}

	} );

	it( "DC", function () {
		var names = [
			"DISTRICT OF COLUMBIA",
			"DISTRICT OF COLOMBIA",
			"DISTRICT OF COLUMBA",
			"DISTRICT COLUMBIA",
			"DISTRICT OF COLUMBIA",
			"WASH DC",
			"WASH. DC",
			"WASH. D.C.",
			"WASH D.C.",
			"D.C",
			"D.C.",
			"WASH D C",
			"WASH. D C",
			"WASH. D. C.",
			"WASH D. C.",
			"D. C",
			"D. C.",
			"DC.",
			"US-DC",
			"DC.",
			"DC"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "DC" );
		}

	} );

	it( "FM", function () {
		var names = [
			"FEDERATED STATES OF MICRONESIA",
			"FEDERATED STATES OF MICRONESA",
			"FEDERATED STATES OF MICRONISIA",
			"FEDERATED STATES OF MICRONISA",
			"FEDARATED STATES OF MICRONESIA",
			"FEDARATED STATES OF MICRONESA",
			"FEDARATED STATES OF MICRONISIA",
			"FEDARATED STATES OF MICRONISA",
			"FED OF MICRONISA",
			"FED MICRONISA",
			"FED. OF MICRONISA",
			"FED. MICRONISA",
			"FED OF MICRO.",
			"FED MICRO.",
			"FED. OF MICRO.",
			"FED. MICRO.",
			"FM.",
			"FM"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "FM" );
		}

	} );

	it( "FL", function () {
		var names = [
			"FLORIDA",
			"FLORIDAS",
			"FLORYDA",
			"FLORDA",
			"FLORDIA",
			"FLORADA",
			"FLA",
			"FLA.",
			"FLOR",
			"FLOR.",
			"US-FL",
			"FL.",
			"FL"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "FL" );
		}

	} );

	it( "GA", function () {
		var names = [
			"GEORGIA",
			"GEORGEIA",
			"GEORGEA",
			"GEORGIA",
			"US-GA",
			"GA.",
			"GA"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "GA" );
		}

	} );

	it( "GU", function () {
		var names = [
			"GUAM",
			"GAUM",
			"GHUAM",
			"GOAM",
			"GU.",
			"GU"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "GU" );
		}

	} );

	it( "HI", function () {
		var names = [
			"HAWAII",
			"HAWAI",
			"HOWAII",
			"HAWII",
			"HAWAAI",
			"HAW",
			"HAW.",
			"H.I.",
			"H.I",
			"US-HI",
			"HI.",
			"HI"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "HI" );
		}

	} );

	it( "ID", function () {
		var names = [
			"IDAHO",
			"IDAHOE",
			"IDEHO",
			"IDA",
			"IDA.",
			"US-ID",
			"ID.",
			"ID"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "ID" );
		}

	} );

	it( "IL", function () {
		var names = [
			"ILLINOIS",
			"ILINOIS",
			"ILLANOIS",
			"ILANOIS",
			"ILINOIS",
			"ILLANOISE",
			"ILANOISE",
			"ILL",
			"ILL.",
			"ILLS",
			"ILLS.",
			"ILL'S",
			"ILL'S.",
			"ILS",
			"ILS.",
			"US-IL",
			"IL.",
			"IL"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "IL" );
		}

	} );

	it( "IN", function () {
		var names = [
			"INDIANA",
			"INDEANA",
			"INDIANNA",
			"INDEANNA",
			"INDIANA",
			"IND",
			"IND.",
			"US-IN",
			"IN.",
			"IN"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "IN" );
		}

	} );

	it( "IA", function () {
		var names = [
			"IOWA",
			"IOWHA",
			"IOAW",
			"IWOA",
			"IOA",
			"IOA.",
			"US-IA",
			"IA.",
			"IA"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "IA" );
		}

	} );

	it( "KS", function () {
		var names = [
			"KANSAS",
			"KANSIS",
			"CANSAS",
			"CANSIS",
			"KA",
			"KA.",
			"KAN",
			"KAN.",
			"US-KS",
			"KS.",
			"KS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "KS" );
		}

	} );

	it( "KY", function () {
		var names = [
			"KENTUCKY",
			"KENTUKY",
			"KENTUCY",
			"KEN",
			"KEN.",
			"KENT",
			"KENT.",
			"US-KY",
			"KY.",
			"KY"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "KY" );
		}

	} );

	it( "LA", function () {
		var names = [
			"LOUISIANA",
			"LOUISIANNA",
			"LUISIANA",
			"LUISIANNA",
			"LOUSIANA",
			"LOUSIANNA",
			"LOUISEIANA",
			"LOUISEIANNA",
			"US-LA",
			"LA.",
			"LA"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "LA" );
		}

	} );

	it( "ME", function () {
		var names = [
			"MAINE",
			"MAIN",
			"MIANE",
			"MIANE",
			"US-ME",
			"ME.",
			"ME"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "ME" );
		}

	} );

	it( "MH", function () {
		var names = [
			"MARSHALL ISLANDS",
			"MARSHALL ISLAND",
			"MARSHALL ISLE",
			"MARSHALL ISLES",
			"MARSHULL ISLANDS",
			"MARSHULL ISLAND",
			"MARSHULL ISLE",
			"MARSHULL ISLES",
			"M.H",
			"M.H.",
			"M. H",
			"M. H.",
			"MH.",
			"MH"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "MH" );
		}

	} );

	it( "MD", function () {
		var names = [
			"MARYLAND",
			"MARY LAND",
			"MARRYLAND",
			"MARLAND",
			"MD",
			"MD",
			"US-MD",
			"MD.",
			"MD"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "MD" );
		}

	} );

	it( "MA", function () {
		var names = [
			"MASSACHUSETTS",
			"MASSACHUSSETTS",
			"MASACHUSETTS",
			"MASACHUSETS",
			"MASSACHUSSETS",
			"MASS",
			"MASS.",
			"US-MA",
			"MA.",
			"MA"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "MA" );
		}

	} );

	it( "MI", function () {
		var names = [
			"MICHIGAN",
			"MICHGAN",
			"MICHAGIN",
			"MICHAGAN",
			"MICHICAN",
			"MICKIGAN",
			"MICKICAN",
			"MICHAGAN",
			"MICHACAN",
			"MICH",
			"MICH.",
			"US-MI",
			"MI.",
			"MI"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "MI" );
		}

	} );

	it( "MN", function () {
		var names = [
			"MINNESOTA",
			"MINESOTA",
			"MINNASOTA",
			"MINNASOTA",
			"MENNESOTA",
			"MENESOTA",
			"MENNASOTA",
			"MENNASOTA",
			"MINN",
			"MINN.",
			"US-MN",
			"MN.",
			"MN"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "MN" );
		}

	} );

	it( "MS", function () {
		var names = [
			"MISSISSIPPI",
			"MISSISSIPI",
			"MISSISIPI",
			"MISSISIPPI",
			"MISISSIPPI",
			"MISISIPPI",
			"MISSISIPPI",
			"MISS",
			"MISS.",
			"US-MS",
			"MS.",
			"MS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "MS" );
		}

	} );

	it( "MO", function () {
		var names = [
			"MISSOURI",
			"MISOURI",
			"MISSOURA",
			"MISOURA",
			"MISORA",
			"MISORI",
			"MISOURY",
			"MISORY",
			"MISSOURY",
			"MISSORY",
			"US-MO",
			"MO.",
			"MO"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "MO" );
		}

	} );

	it( "MT", function () {
		var names = [
			"MONTANA",
			"MONTANNA",
			"MOUNTANA",
			"MOUNTANNA",
			"MONT",
			"MONT.",
			"US-MT",
			"MT.",
			"MT"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "MT" );
		}

	} );

	it( "NE", function () {
		var names = [
			"NEBRASKA",
			"NEWBRASKA",
			"NEBRASCKA",
			"NEWBRASCKA",
			"NEB",
			"NEB.",
			"NEBR",
			"NEBR.",
			"US-NE",
			"NE.",
			"NE"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "NE" );
		}

	} );

	it( "NV", function () {
		var names = [
			"NEVADA",
			"NEVADDA",
			"NEVADAA",
			"NEWVADA",
			"NAVADA",
			"NAVADDA",
			"NEVADAH",
			"NEV",
			"NEV.",
			"US-NV",
			"NV.",
			"NV"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "NV" );
		}

	} );

	it( "NH", function () {
		var names = [
			"NEW HAMPSHIRE",
			"NEWHAMPSHIRE",
			"NEW HEMPSHIRE",
			"NEW HAMPSHIR",
			"NEW HAMSHIRE",
			"NEW HAMSHIR",
			"NEW HAMSURE",
			"NEW HAMPSURE",
			"NEW HEMPSURE",
			"N.H",
			"N.H.",
			"N. H",
			"N. H.",
			"US-NH",
			"NH.",
			"NH"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "NH" );
		}

	} );

	it( "NJ", function () {
		var names = [
			"NEW JERSEY",
			"NEWJERSEY",
			"NEW JURSEY",
			"NEW JURSAY",
			"NEW JERSAY",
			"N.J",
			"N.J.",
			"N. J",
			"N. J.",
			"US-NJ",
			"NJ.",
			"NJ"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "NJ" );
		}

	} );

	it( "NM", function () {
		var names = [
			"NEW MEXICO",
			"NEWMEXICO",
			"NEW MEXACO",
			"N.M",
			"N.M.",
			"N. M",
			"N. M.",
			"US-NM",
			"NM.",
			"NM"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "NM" );
		}

	} );

	it( "NY", function () {
		var names = [
			"NEW YORK",
			"NEW YRK",
			"NEWYORK",
			"N.Y",
			"N.Y.",
			"N. Y",
			"N. Y.",
			"US-NY",
			"NY.",
			"NY"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "NY" );
		}

	} );

	it( "NC", function () {
		var names = [
			"NORTH CAROLINA",
			"NORTHCAROLINA",
			"NORTH CAR",
			"NORTH CAR.",
			"N CAR.",
			"N CAROLINA",
			"N. CAROLINA",
			"N.C",
			"N.C.",
			"N. C",
			"N. C.",
			"US-NC",
			"NC.",
			"NC"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "NC" );
		}

	} );

	it( "ND", function () {
		var names = [
			"NORTH DAKOTA",
			"NORTHDAKOTA",
			"N. DAKOTA",
			"NOR. DAKOTA",
			"NORDAKOTA",
			"NORTH DACOTA",
			"NORTHDACOTA",
			"N. DACOTA",
			"NOR. DACOTA",
			"NORDACOTA",
			"N DAK",
			"NDAK",
			"N DAK.",
			"N. DAK",
			"N. DAK.",
			"NOR DAK.",
			"NOR. DAK",
			"NOR. DAK.",
			"N. D",
			"N. D.",
			"N.D",
			"N.D.",
			"US-ND",
			"ND.",
			"ND"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "ND" );
		}

	} );

	it( "MP", function () {
		var names = [
			"NORTHERN MARIANA ISLANDS",
			"NORTH MARIANA ISLANDS",
			"N. MARIANA ISLANDS",
			"N MARIANA ISLANDS",
			"NORTH MAR ISLANDS",
			"N. MAR ISLANDS",
			"N MAR ISLANDS",
			"NORTH MAR. ISLANDS",
			"N. MAR. ISLANDS",
			"N MAR. ISLANDS",
			"NORTHERN MARIANA ISLAND",
			"NORTH MARIANA ISLAND",
			"N. MARIANA ISLAND",
			"N MARIANA ISLAND",
			"NORTH MAR ISLAND",
			"N. MAR ISLAND",
			"N MAR ISLAND",
			"NORTH MAR. ISLAND",
			"N. MAR. ISLAND",
			"N MAR. ISLAND",
			"NORTHERN MARIANA ISLE",
			"NORTH MARIANA ISLE",
			"N. MARIANA ISLE",
			"N MARIANA ISLE",
			"NORTH MAR ISLE",
			"N. MAR ISLE",
			"N MAR ISLE",
			"NORTH MAR. ISLE",
			"N. MAR. ISLE",
			"N MAR. ISLE",
			"NORTHERN MARIANA ISLES",
			"NORTH MARIANA ISLES",
			"N. MARIANA ISLES",
			"N MARIANA ISLES",
			"NORTH MAR ISLES",
			"N. MAR ISLES",
			"N MAR ISLES",
			"NORTH MAR. ISLES",
			"N. MAR. ISLES",
			"N MAR. ISLES",
			"MP"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "MP" );
		}

	} );

	it( "OH", function () {
		var names = [
			"OHIO",
			"O-HIO",
			"OHI-O",
			"OIHO",
			"O",
			"O.",
			"US-OH",
			"OH.",
			"OH"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "OH" );
		}

	} );

	it( "OK", function () {
		var names = [
			"OKLAHOMA",
			"OKALAHOMA",
			"OKLA",
			"OKLA.",
			"US-OK",
			"OK.",
			"OK"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "OK" );
		}

	} );

	it( "OR", function () {
		var names = [
			"OREGON",
			"OREGONE",
			"ORGONE",
			"ORGON",
			"ORAGON",
			"ORE",
			"ORE.",
			"OREG",
			"OREG.",
			"US-OR",
			"OR.",
			"OR"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "OR" );
		}

	} );

	it( "PW", function () {
		var names = [
			"PALAU",
			"PALUA",
			"PW.",
			"PW"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "PW" );
		}

	} );

	it( "PA", function () {
		var names = [
			"PENNSYLVANIA",
			"PENSYLVANIA",
			"PENSELVANIA",
			"PENSYLVAINIA",
			"PENSYLVIANA",
			"PENSYLVANA",
			"PENNSELVANIA",
			"PENNSYLVAINIA",
			"PENNSYLVIANA",
			"PENNSYLVANA",
			"PENNSYLLVANIA",
			"PENSYLLVANIA",
			"PENSELLVANIA",
			"PENSYLLVAINIA",
			"PENSYLLVIANA",
			"PENSYLLVANA",
			"PENNSELLVANIA",
			"PENNSYLLVAINIA",
			"PENNSYLLVIANA",
			"PENNSYLLVANA",
			"PENN",
			"PENN.",
			"PENNA",
			"PENNA.",
			"US-PA",
			"PA.",
			"PA"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "PA" );
		}

	} );

	it( "PR", function () {
		var names = [
			"PUERTO RICO",
			"PURETO RICO",
			"PURTO RICO",
			"P. R.",
			"P R.",
			"P.R.",
			"PR.",
			"P R",
			"PR"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "PR" );
		}

	} );

	it( "RI", function () {
		var names = [
			"RHODE ISLAND",
			"ROAD ISLAND",
			"RHODE ISLAND",
			"RODE ISLAND",
			"RHOD ISLAND",
			"ROADISLAND",
			"RHODEISLAND",
			"RODEISLAND",
			"RHODISLAND",
			"R. I",
			"R. I.",
			"R I",
			"R I",
			"R.I",
			"US-RI",
			"RI.",
			"RI"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "RI" );
		}

	} );

	it( "SC", function () {
		var names = [
			"SOUTH CAROLINA",
			"SOUTHCAROLINA",
			"SOUT CAROLIN",
			"SOUTH CAROLNA",
			"SOUH CAROLIA",
			"SOUTH CAROLINA",
			"S CAROLINA",
			"S. CAROLINA",
			"SO CAROLINA",
			"SO. CAROLINA",
			"S CAR",
			"S. CAR",
			"SO CAR",
			"SO. CAR",
			"S CAR.",
			"S. CAR.",
			"SO CAR.",
			"SO. CAR.",
			"S CARO",
			"S. CARO",
			"SO CARO",
			"SO. CARO",
			"S CARO.",
			"S. CARO.",
			"SO CARO.",
			"SO. CARO.",
			"S C.",
			"S. C",
			"S.C.",
			"S.C",
			"US-SC",
			"SC.",
			"SC"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "SC" );
		}

	} );

	it( "SD", function () {
		var names = [
			"SOUTH DAKOTA",
			"SOUTHDAKOTA",
			"SOUTHDACOTA",
			"SOUT DAKOT",
			"SOUT DACOT",
			"SOUTH DACOTA",
			"SOUH DAKOTA",
			"SOUH DACOTA",
			"SOUTH DOKOTA",
			"SOUTHDAKOTA",
			"S DAKOTA",
			"S. DAKOTA",
			"SO DAKOTA",
			"SO. DAKOTA",
			"S DAK",
			"SDAK",
			"SODAK",
			"SO.DAK",
			"SO.DAK.",
			"S. DAK",
			"SO DAK",
			"SO. DAK",
			"S DAK.",
			"S. DAK.",
			"SO DAK.",
			"SO. DAK.",
			"S D.",
			"S. D",
			"S.D.",
			"S.D",
			"US-SD",
			"SD.",
			"SD"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "SD" );
		}

	} );

	it( "TN", function () {
		var names = [
			"TENNESSEE",
			"TENESSEE",
			"TENESEE",
			"TENESE",
			"TENNESEE",
			"TENNASSEE",
			"TENASSEE",
			"TENESEE",
			"TENESE",
			"TENNESEE",
			"TENNISSE",
			"TENNISSEE",
			"TENNISEE",
			"TEN",
			"TEN.",
			"TENN",
			"TENN.",
			"US-TN",
			"TN.",
			"TN"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "TN" );
		}

	} );

	it( "TX", function () {
		var names = [
			"TEXAS",
			"TEXIS",
			"TEXES",
			"TEX",
			"TEX.",
			"US-TX",
			"TX.",
			"TX"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "TX" );
		}

	} );

	it( "UT", function () {
		var names = [
			"UTAH",
			"UTES",
			"UTAR",
			"UT"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "UT" );
		}

	} );

	it( "VT", function () {
		var names = [
			"VERMONT",
			"VERMOUNT",
			"VERMONTE",
			"VERMOT",
			"VURMONT",
			"VURMONTE",
			"US-VT",
			"VT.",
			"VT"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "VT" );
		}

	} );

	it( "VI", function () {
		var names = [
			"VIRGIN ISLANDS",
			"VIRGIN ISLAND",
			"VIRGIN ISLE",
			"VIRGIN ISLES",
			"VIRGINE ISLANDS",
			"VIRGINE ISLAND",
			"VIRGINE ISLE",
			"VIRGINE ISLES",
			"VURGIN ISLANDS",
			"VURGIN ISLAND",
			"VURGIN ISLE",
			"VURGIN ISLES",
			"VIRGINISLANDS",
			"V.I.",
			"V.I",
			"V. I.",
			"V. I",
			"US-VI",
			"VI.",
			"VI"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "VI" );
		}

	} );

	it( "VA", function () {
		var names = [
			"VIRGINIA",
			"VIRGINAI",
			"VIRGINA",
			"VERGINIA",
			"VERGINAI",
			"VERGINA",
			"VURGINIA",
			"VURGINAI",
			"VURGINA",
			"VIR",
			"VIR.",
			"VIRG",
			"VIRG.",
			"US-VA",
			"VA.",
			"VA"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "VA" );
		}

	} );

	it( "WA", function () {
		var names = [
			"WASHINGTON",
			"WASHINTON",
			"WASHONGTON",
			"WASHONTON",
			"WASHINGTIN",
			"WASHINTIN",
			"WASHONGTIN",
			"WASHONTIN",
			"WN",
			"WN.",
			"WASH",
			"WASH.",
			"US-WA",
			"WA.",
			"WA"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "WA" );
		}

	} );

	it( "WV", function () {
		var names = [
			"WEST VIRGINIA",
			"WESTVIRGINIA",
			"WEST VIRGINIA",
			"WEST VIRGINAI",
			"WEST VIRGINA",
			"WEST VERGINIA",
			"WEST VERGINAI",
			"WEST VERGINA",
			"WEST VURGINIA",
			"WEST VURGINAI",
			"WEST VURGINA",
			"W VIRGINIA",
			"W VIRGINIA",
			"W VIRGINAI",
			"W VIRGINA",
			"W VERGINIA",
			"W VERGINAI",
			"W VERGINA",
			"W VURGINIA",
			"W VURGINAI",
			"W VURGINA",
			"W. VIRGINIA",
			"W. VIRGINIA",
			"W. VIRGINAI",
			"W. VIRGINA",
			"W. VERGINIA",
			"W. VERGINAI",
			"W. VERGINA",
			"W. VURGINIA",
			"W. VURGINAI",
			"W. VURGINA",
			"W VIRG",
			"W. VIRG",
			"WEST VIRG",
			"W VIRG.",
			"W. VIRG.",
			"WEST VIRG.",
			"W VIR",
			"W. VIR",
			"WEST VIR",
			"W VIR.",
			"W. VIR.",
			"WEST VIR.",
			"W V",
			"W. V.",
			"W. V",
			"W.V",
			"W.V.",
			"US-WV",
			"WV.",
			"WV"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "WV" );
		}

	} );

	it( "WI", function () {
		var names = [
			"WISCONSIN",
			"WISCONSON",
			"WISSCONSIN",
			"WISSCONSON",
			"WISCONSSIN",
			"WISCONSSON",
			"WISSCONSSIN",
			"WISSCONSSON",
			"WIS",
			"WIS.",
			"WISS",
			"WISS.",
			"WISC",
			"WISC.",
			"US-WI",
			"WI.",
			"WI"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "WI" );
		}

	} );

	it( "WY", function () {
		var names = [
			"WYOMING",
			"WHYOMING",
			"WIOMING",
			"WYO",
			"WYO.",
			"US-WY",
			"WY.",
			"WY"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.statePossessionAbbreviations( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "WY" );
		}

	} );

	it( "Geo-StreetAddress-US State Codes", function () {
		var stateCodes = {
			"alabama": "AL",
			"alaska": "AK",
			"american samoa": "AS",
			"arizona": "AZ",
			"arkansas": "AR",
			"california": "CA",
			"colorado": "CO",
			"connecticut": "CT",
			"delaware": "DE",
			"district of columbia": "DC",
			"federated states of micronesia": "FM",
			"florida": "FL",
			"georgia": "GA",
			"guam": "GU",
			"hawaii": "HI",
			"idaho": "ID",
			"illinois": "IL",
			"indiana": "IN",
			"iowa": "IA",
			"kansas": "KS",
			"kentucky": "KY",
			"louisiana": "LA",
			"maine": "ME",
			"marshall islands": "MH",
			"maryland": "MD",
			"massachusetts": "MA",
			"michigan": "MI",
			"minnesota": "MN",
			"mississippi": "MS",
			"missouri": "MO",
			"montana": "MT",
			"nebraska": "NE",
			"nevada": "NV",
			"new hampshire": "NH",
			"new jersey": "NJ",
			"new mexico": "NM",
			"new york": "NY",
			"north carolina": "NC",
			"north dakota": "ND",
			"northern mariana islands": "MP",
			"ohio": "OH",
			"oklahoma": "OK",
			"oregon": "OR",
			"palau": "PW",
			"pennsylvania": "PA",
			"puerto rico": "PR",
			"rhode island": "RI",
			"south carolina": "SC",
			"south dakota": "SD",
			"tennessee": "TN",
			"texas": "TX",
			"utah": "UT",
			"vermont": "VT",
			"virgin islands": "VI",
			"virginia": "VA",
			"washington": "WA",
			"west virginia": "WV",
			"wisconsin": "WI",
			"wyoming": "WY"
		};
		var stateCode, expected, abbr;
		for ( stateCode in stateCodes ) {
			if ( stateCodes.hasOwnProperty( stateCode ) ) {
				expected = stateCodes[ stateCode ].toUpperCase();
				abbr = standardization.statePossessionAbbreviations( stateCode, true );
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