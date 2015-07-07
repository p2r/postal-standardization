"use strict";

/* global describe, it */

var should = require( "should" );

var Postal = require( "../../../lib" ).USPostal;

describe( "State/Possession FIPS:", function () {

	var postal = new Postal();

	it( "Geo-StreetAddress-US FIPS to State", function () {
		var fips = {
			"01": "AL",
			"02": "AK",
			"04": "AZ",
			"05": "AR",
			"06": "CA",
			"08": "CO",
			"09": "CT",
			"10": "DE",
			"11": "DC",
			"12": "FL",
			"13": "GA",
			"15": "HI",
			"16": "ID",
			"17": "IL",
			"18": "IN",
			"19": "IA",
			"20": "KS",
			"21": "KY",
			"22": "LA",
			"23": "ME",
			"24": "MD",
			"25": "MA",
			"26": "MI",
			"27": "MN",
			"28": "MS",
			"29": "MO",
			"30": "MT",
			"31": "NE",
			"32": "NV",
			"33": "NH",
			"34": "NJ",
			"35": "NM",
			"36": "NY",
			"37": "NC",
			"38": "ND",
			"39": "OH",
			"40": "OK",
			"41": "OR",
			"42": "PA",
			"44": "RI",
			"45": "SC",
			"46": "SD",
			"47": "TN",
			"48": "TX",
			"49": "UT",
			"50": "VT",
			"51": "VA",
			"53": "WA",
			"54": "WV",
			"55": "WI",
			"56": "WY",
			"72": "PR",
			"78": "VI"
		};
		var fip, expected, abbr;
		for ( fip in fips ) {
			if ( fips.hasOwnProperty( fip ) ) {
				expected = fips[ fip ].toUpperCase();
				abbr = postal.standardization.fips.getStateForCode( fip, true );
				if ( !abbr ) {
					//	Need to assist in test debugging
					expected.should.equal( abbr );
				}
				should.exist( abbr );
				abbr.should.equal( expected );
			}
		}
	} );

it( "Geo-StreetAddress-US State to FIPS", function () {
		var fips = {
			"AL": "01",
			"AK": "02",
			"AZ": "04",
			"AR": "05",
			"CA": "06",
			"CO": "08",
			"CT": "09",
			"DE": "10",
			"DC": "11",
			"FL": "12",
			"GA": "13",
			"HI": "15",
			"ID": "16",
			"IL": "17",
			"IN": "18",
			"IA": "19",
			"KS": "20",
			"KY": "21",
			"LA": "22",
			"ME": "23",
			"MD": "24",
			"MA": "25",
			"MI": "26",
			"MN": "27",
			"MS": "28",
			"MO": "29",
			"MT": "30",
			"NE": "31",
			"NV": "32",
			"NH": "33",
			"NJ": "34",
			"NM": "35",
			"NY": "36",
			"NC": "37",
			"ND": "38",
			"OH": "39",
			"OK": "40",
			"OR": "41",
			"PA": "42",
			"RI": "44",
			"SC": "45",
			"SD": "46",
			"TN": "47",
			"TX": "48",
			"UT": "49",
			"VT": "50",
			"VA": "51",
			"WA": "53",
			"WV": "54",
			"WI": "55",
			"WY": "56",
			"PR": "72",
			"VI": "78"
		};
		var fip, expected, abbr;
		for ( fip in fips ) {
			if ( fips.hasOwnProperty( fip ) ) {
				expected = fips[ fip ].toUpperCase();
				abbr = postal.standardization.fips.getCodeForState( fip, true );
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