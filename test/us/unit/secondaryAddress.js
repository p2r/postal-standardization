"use strict";

/* global describe, it */

var should = require( "should" );

var Postal = require( "../../../lib" ).USPostal;

describe( "Parse Secondary Address Units:", function () {

	var postal = new Postal();

	it( "#1", function () {

		var unitAddress = "#1";
		var expAddress = "# 1";
		var secondaryAddress = postal.standardization.unitType.parse( unitAddress );
		should.exist( secondaryAddress );
		secondaryAddress.should.equal( expAddress );

	} );

	it( "# 1", function () {

		var unitAddress = "# 1";
		var expAddress = unitAddress;
		var secondaryAddress = postal.standardization.unitType.parse( unitAddress );
		should.exist( secondaryAddress );
		secondaryAddress.should.equal( expAddress );

	} );

	it( " #  1 ", function () {

		var unitAddress = " #  1 ";
		var expAddress = "# 1";
		var secondaryAddress = postal.standardization.unitType.parse( unitAddress );
		should.exist( secondaryAddress );
		secondaryAddress.should.equal( expAddress );

	} );

	it( "# 12", function () {

		var unitAddress = "# 12";
		var expAddress = unitAddress;
		var secondaryAddress = postal.standardization.unitType.parse( unitAddress );
		should.exist( secondaryAddress );
		secondaryAddress.should.equal( expAddress );

	} );

	it( "# 1A2B", function () {

		var unitAddress = "# 1A2B";
		var expAddress = unitAddress;
		var secondaryAddress = postal.standardization.unitType.parse( unitAddress );
		should.exist( secondaryAddress );
		secondaryAddress.should.equal( expAddress );

	} );

	it( "UNIT 23", function () {

		var unitAddress = "UNIT 23";
		var expAddress = unitAddress;
		var secondaryAddress = postal.standardization.unitType.parse( unitAddress );
		should.exist( secondaryAddress );
		secondaryAddress.should.equal( expAddress );

	} );

	it( "UNIT23", function () {

		var unitAddress = "UNIT23";
		var secondaryAddress = postal.standardization.unitType.parse( unitAddress );
		should.not.exist( secondaryAddress );

	} );

	it( " UNIT 23", function () {

		var unitAddress = " UNIT 23";
		var expAddress = "UNIT 23";
		var secondaryAddress = postal.standardization.unitType.parse( unitAddress );
		should.exist( secondaryAddress );
		secondaryAddress.should.equal( expAddress );

	} );

	it( "UNIT 23 ", function () {

		var unitAddress = "UNIT 23 ";
		var expAddress = "UNIT 23";
		var secondaryAddress = postal.standardization.unitType.parse( unitAddress );
		should.exist( secondaryAddress );
		secondaryAddress.should.equal( expAddress );

	} );

	it( " UNIT 23 ", function () {

		var unitAddress = " UNIT 23 ";
		var expAddress = "UNIT 23";
		var secondaryAddress = postal.standardization.unitType.parse( unitAddress );
		should.exist( secondaryAddress );
		secondaryAddress.should.equal( expAddress );

	} );

	it( " UNIT  23 ", function () {

		var unitAddress = " UNIT  23 ";
		var expAddress = "UNIT 23";
		var secondaryAddress = postal.standardization.unitType.parse( unitAddress );
		should.exist( secondaryAddress );
		secondaryAddress.should.equal( expAddress );

	} );

	it( "UNIT", function () {

		var unitAddress = "UNIT";
		var secondaryAddress = postal.standardization.unitType.parse( unitAddress );
		should.not.exist( secondaryAddress );

	} );

	it( "XYZ", function () {

		var unitAddress = "XYZ";
		var secondaryAddress = postal.standardization.unitType.parse( unitAddress );
		should.not.exist( secondaryAddress );

	} );

	it( "XYZ 123", function () {

		var unitAddress = "XYZ 123";
		var secondaryAddress = postal.standardization.unitType.parse( unitAddress );
		should.not.exist( secondaryAddress );

	} );

	it( "#", function () {

		var unitAddress = "#";
		var secondaryAddress = postal.standardization.unitType.parse( unitAddress );
		should.not.exist( secondaryAddress );

	} );

	it( "UNIT #23", function () {

		var unitAddress = "UNIT #23";
		var expAddress = "UNIT 23";
		var secondaryAddress = postal.standardization.unitType.parse( unitAddress );
		should.exist( secondaryAddress );
		secondaryAddress.should.equal( expAddress );

	} );

	it( "UNIT#23", function () {

		var unitAddress = "UNIT#23";
		var expAddress = "UNIT 23";
		var secondaryAddress = postal.standardization.unitType.parse( unitAddress );
		should.exist( secondaryAddress );
		secondaryAddress.should.equal( expAddress );

	} );

	it( "PHILADELPHIA", function () {

		var unitAddress = "PHILADELPHIA";
		var secondaryAddress = postal.standardization.unitType.parse( unitAddress );
		should.not.exist( secondaryAddress );

	} );

} );