"use strict";

/* global describe, it */

var should = require( "should" );

var Postal = require( "../../../lib" ).USPostal;

describe( "Numbers:", function () {

	var postal = new Postal();

	it( "'123 '", function () {
		var numTest = "123 ";
		var numExp = "123";
		var num = postal.standardization.number( numTest, true );
		should.exist( num );
		num.should.equal( numExp );
	} );

	it( "'1/2 '", function () {
		var numTest = "1/2 ";
		var numExp = "1/2";
		var num = postal.standardization.number( numTest, true );
		should.exist( num );
		num.should.equal( numExp );
	} );

	it( "'123st'", function () {
		var numTest = "123st";
		var num = postal.standardization.number( numTest, true );
		should.not.exist( num );
	} );

	it( "'123st '", function () {
		var numTest = "123st ";
		var num = postal.standardization.number( numTest, true );
		should.not.exist( num );
	} );

	it( "'something123'", function () {
		var numTest = "something123";
		var num = postal.standardization.number( numTest, true );
		should.not.exist( num );
	} );

	it( "'1/2'", function () {
		var numTest = "1/2";
		var numExp = "1/2";
		var num = postal.standardization.number( numTest, true );
		should.exist( num );
		num.should.equal( numExp );
	} );

	it( "'3/4'", function () {
		var numTest = "3/4";
		var numExp = "3/4";
		var num = postal.standardization.number( numTest, true );
		should.exist( num );
		num.should.equal( numExp );
	} );

	it( "'123 street'", function () {
		var numTest = "123 street";
		var numExp = "123";
		var num = postal.standardization.number( numTest, true );
		should.exist( num );
		num.should.equal( numExp );
	} );

	it( "'123 street 456'", function () {
		var numTest = "123 street 456";
		var numExp = "123";
		var num = postal.standardization.number( numTest, true );
		should.exist( num );
		num.should.equal( numExp );
	} );

	it( "'123 street456'", function () {
		var numTest = "123 street456";
		var numExp = "123";
		var num = postal.standardization.number( numTest, true );
		should.exist( num );
		num.should.equal( numExp );
	} );

	it( "'1'", function () {
		var numTest = "1";
		var numExp = "1";
		var num = postal.standardization.number( numTest, true );
		should.exist( num );
		num.should.equal( numExp );
	} );

	it( "'0123'", function () {
		var numTest = "0123";
		var numExp = "0123";
		var num = postal.standardization.number( numTest, true );
		should.exist( num );
		num.should.equal( numExp );
	} );

	it( "'123 4/5'", function () {
		var numTest = "123 4/5";
		var numExp = "123 4/5";
		var num = postal.standardization.number( numTest, true );
		should.exist( num );
		num.should.equal( numExp );
	} );

	it( "'123 1/2'", function () {
		var numTest = "123 1/2";
		var numExp = "123 1/2";
		var num = postal.standardization.number( numTest, true );
		should.exist( num );
		num.should.equal( numExp );
	} );

	it( "'123 10/12'", function () {
		var numTest = "123 10/12";
		var numExp = "123 10/12";
		var num = postal.standardization.number( numTest, true );
		should.exist( num );
		num.should.equal( numExp );
	} );

} );