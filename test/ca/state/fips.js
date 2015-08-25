"use strict";

/* global describe, it */

var should = require( "should" );

var Postal = require( "../../../lib" ).CAPostal;

describe( "CA Possession FIPS:", function () {

	var postal;
	if ( Postal ) {
		postal = new Postal();
	}

	it( "Geo-StreetAddress-CA FIPS to Provinces/Territories", function ( done ) {
		if ( !postal ) {
			return done();
		}

		var fips = {
			"10": "NL",
			"11": "PE",
			"12": "NS",
			"13": "NB",
			"24": "QC",
			"35": "ON",
			"46": "MB",
			"47": "SK",
			"48": "AB",
			"59": "BC",
			"60": "YT",
			"61": "NT"
		};
		var fip, expected, abbr;
		for ( fip in fips ) {
			if ( fips.hasOwnProperty( fip ) ) {
				expected = fips[ fip ].toUpperCase();
				abbr = postal.standardization.fips.getStateForCode( fip );
				if ( !abbr ) {
					//	Need to assist in test debugging
					expected.should.equal( abbr );
				}
				should.exist( abbr );
				abbr.should.equal( expected );
			}
		}
	} );

	it( "Geo-StreetAddress-CA Provinces/Territories to FIPS", function ( done ) {
		if ( !postal ) {
			return done();
		}

		var fips = {
			"NL": "10",
			"PE": "11",
			"NS": "12",
			"NB": "13",
			"QC": "24",
			"ON": "35",
			"MB": "46",
			"SK": "47",
			"AB": "48",
			"BC": "59",
			"YT": "60",
			"NT": "61"
		};
		var fip, expected, abbr;
		for ( fip in fips ) {
			if ( fips.hasOwnProperty( fip ) ) {
				expected = fips[ fip ].toUpperCase();
				abbr = postal.standardization.fips.getCodeForState( fip );
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