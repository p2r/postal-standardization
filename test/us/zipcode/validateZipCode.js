"use strict";

/* global describe, it */

var should = require( "should" );

var Postal = require( "../../../lib" ).USPostal;

describe( "Zip Codes:", function () {

	var postal = new Postal();

	it( "'80020'", function () {
		var zipTest = "80020";
		var zipExp = zipTest;
		var zip = postal.standardization.zipcode( zipTest, null, true );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "'80020 '", function () {
		var zipTest = "80020 ";
		var zipExp = "80020";
		var zip = postal.standardization.zipcode( zipTest, null, true );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "'80020'", function () {
		var zipTest = " 80020";
		var zipExp = "80020";
		var zip = postal.standardization.zipcode( zipTest, null, true );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "' 80020 '", function () {
		var zipTest = " 80020 ";
		var zipExp = "80020";
		var zip = postal.standardization.zipcode( zipTest, null, true );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "'80020 US'", function () {
		var zipTest = "80020";
		var zipExp = zipTest;
		var zip = postal.standardization.zipcode( zipTest, "US", true );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "'80020 ZW'", function () {
		var zipTest = "80020";
		var zipExp = zipTest;
		var zip = postal.standardization.zipcode( zipTest, "ZW", true );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "'80020-6823'", function () {
		var zipTest = "80020-6823";
		var zipExp = zipTest;
		var zip = postal.standardization.zipcode( zipTest, null, true );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "'80020 -6823'", function () {
		var zipTest = "80020 -6823";
		var zipExp = "80020-6823";
		var zip = postal.standardization.zipcode( zipTest, null, true );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "'80020- 6823'", function () {
		var zipTest = "80020- 6823";
		var zipExp = "80020-6823";
		var zip = postal.standardization.zipcode( zipTest, null, true );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "'80020 - 6823'", function () {
		var zipTest = "80020 - 6823";
		var zipExp = "80020-6823";
		var zip = postal.standardization.zipcode( zipTest, null, true );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "'80020 6823'", function () {
		var zipTest = "80020 6823";
		var zipExp = "80020-6823";
		var zip = postal.standardization.zipcode( zipTest, null, true );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "'80020  6823'", function () {
		var zipTest = "80020  6823";
		var zipExp = "80020-6823";
		var zip = postal.standardization.zipcode( zipTest, null, true );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "' 80020-6823'", function () {
		var zipTest = " 80020-6823";
		var zipExp = "80020-6823";
		var zip = postal.standardization.zipcode( zipTest, null, true );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "' 80020 -6823'", function () {
		var zipTest = " 80020 -6823";
		var zipExp = "80020-6823";
		var zip = postal.standardization.zipcode( zipTest, null, true );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "' 80020- 6823'", function () {
		var zipTest = " 80020- 6823";
		var zipExp = "80020-6823";
		var zip = postal.standardization.zipcode( zipTest, null, true );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "' 80020 - 6823'", function () {
		var zipTest = " 80020 - 6823";
		var zipExp = "80020-6823";
		var zip = postal.standardization.zipcode( zipTest, null, true );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "'80020-6823 '", function () {
		var zipTest = "80020-6823 ";
		var zipExp = "80020-6823";
		var zip = postal.standardization.zipcode( zipTest, null, true );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "'80020 -6823 '", function () {
		var zipTest = "80020 -6823 ";
		var zipExp = "80020-6823";
		var zip = postal.standardization.zipcode( zipTest, null, true );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "'80020- 6823 '", function () {
		var zipTest = "80020- 6823 ";
		var zipExp = "80020-6823";
		var zip = postal.standardization.zipcode( zipTest, null, true );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "'80020 - 6823 '", function () {
		var zipTest = "80020 - 6823 ";
		var zipExp = "80020-6823";
		var zip = postal.standardization.zipcode( zipTest, null, true );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "' 80020-6823 '", function () {
		var zipTest = " 80020-6823 ";
		var zipExp = "80020-6823";
		var zip = postal.standardization.zipcode( zipTest, null, true );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "' 80020 -6823 '", function () {
		var zipTest = " 80020 -6823 ";
		var zipExp = "80020-6823";
		var zip = postal.standardization.zipcode( zipTest, null, true );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "' 80020- 6823 '", function () {
		var zipTest = " 80020- 6823 ";
		var zipExp = "80020-6823";
		var zip = postal.standardization.zipcode( zipTest, null, true );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "' 80020 - 6823 '", function () {
		var zipTest = " 80020 - 6823 ";
		var zipExp = "80020-6823";
		var zip = postal.standardization.zipcode( zipTest, null, true );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "'800206823'", function () {
		var zipTest = "800206823";
		var zipExp = "80020-6823";
		var zip = postal.standardization.zipcode( zipTest, null, true );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "' 800206823'", function () {
		var zipTest = " 800206823";
		var zipExp = "80020-6823";
		var zip = postal.standardization.zipcode( zipTest, null, true );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "'800206823 '", function () {
		var zipTest = "800206823 ";
		var zipExp = "80020-6823";
		var zip = postal.standardization.zipcode( zipTest, null, true );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "' 800206823 '", function () {
		var zipTest = " 800206823 ";
		var zipExp = "80020-6823";
		var zip = postal.standardization.zipcode( zipTest, null, true );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "'80020 6823'", function () {
		var zipTest = "80020 6823";
		var zipExp = "80020-6823";
		var zip = postal.standardization.zipcode( zipTest, null, true );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "' 80020 6823'", function () {
		var zipTest = " 80020 6823";
		var zipExp = "80020-6823";
		var zip = postal.standardization.zipcode( zipTest, null, true );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "'80020 6823 '", function () {
		var zipTest = "80020 6823 ";
		var zipExp = "80020-6823";
		var zip = postal.standardization.zipcode( zipTest, null, true );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "' 80020 6823 '", function () {
		var zipTest = " 80020 6823 ";
		var zipExp = "80020-6823";
		var zip = postal.standardization.zipcode( zipTest, null, true );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

} );