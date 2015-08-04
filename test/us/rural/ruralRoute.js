"use strict";

/* global describe, it */

var should = require( "should" );

var Postal = require( "../../../lib" ).USPostal;

describe( "Rural Routes:", function () {

	var postal = new Postal();

	it( "'RR 2 BOX 274'", function () {
		var ruralTest = "RR 2 BOX 274";
		var ruralExp = "RR 2 BOX 274";
		var ruralRoute = postal.standardization.ruralRoute( ruralTest, true );
		should.exist( ruralRoute );
		ruralRoute.should.equal( ruralExp );
	} );

	it( "'R 2 BOX 274'", function () {
		var ruralTest = "R 2 BOX 274";
		var ruralExp = "RR 2 BOX 274";
		var ruralRoute = postal.standardization.ruralRoute( ruralTest, true );
		should.exist( ruralRoute );
		ruralRoute.should.equal( ruralExp );
	} );

	it( "'Rural Route 2 Box 274'", function () {
		var ruralTest = "Rural Route 2 Box 274";
		var ruralExp = "RR 2 BOX 274";
		var ruralRoute = postal.standardization.ruralRoute( ruralTest, true );
		should.exist( ruralRoute );
		ruralRoute.should.equal( ruralExp );
	} );

	it( "'Rural Route 2 Box #274'", function () {
		var ruralTest = "Rural Route 2 Box #274";
		var ruralExp = "RR 2 BOX 274";
		var ruralRoute = postal.standardization.ruralRoute( ruralTest, true );
		should.exist( ruralRoute );
		ruralRoute.should.equal( ruralExp );
	} );

	it( "'RuralRoute 2 Box#274'", function () {
		var ruralTest = "RuralRoute 2 Box#274";
		var ruralExp = "RR 2 BOX 274";
		var ruralRoute = postal.standardization.ruralRoute( ruralTest, true );
		should.exist( ruralRoute );
		ruralRoute.should.equal( ruralExp );
	} );

	it( "'RuralRoute 2 Box274'", function () {
		var ruralTest = "RuralRoute 2 Box274";
		var ruralExp = "RR 2 BOX 274";
		var ruralRoute = postal.standardization.ruralRoute( ruralTest, true );
		should.exist( ruralRoute );
		ruralRoute.should.equal( ruralExp );
	} );

	it( "'RuralRoute2Box274'", function () {
		var ruralTest = "RuralRoute2Box274";
		var ruralExp = "RR 2 BOX 274";
		var ruralRoute = postal.standardization.ruralRoute( ruralTest, true );
		should.exist( ruralRoute );
		ruralRoute.should.equal( ruralExp );
	} );

	it( "'Rural Number 2 Box 274'", function () {
		var ruralTest = "Rural Number 2 Box 274";
		var ruralExp = "RR 2 BOX 274";
		var ruralRoute = postal.standardization.ruralRoute( ruralTest, true );
		should.exist( ruralRoute );
		ruralRoute.should.equal( ruralExp );
	} );

	it( "'Rural Number 2 Box #274'", function () {
		var ruralTest = "Rural Number 2 Box #274";
		var ruralExp = "RR 2 BOX 274";
		var ruralRoute = postal.standardization.ruralRoute( ruralTest, true );
		should.exist( ruralRoute );
		ruralRoute.should.equal( ruralExp );
	} );

	it( "'RuralNumber 2 Box#274'", function () {
		var ruralTest = "RuralNumber 2 Box#274";
		var ruralExp = "RR 2 BOX 274";
		var ruralRoute = postal.standardization.ruralRoute( ruralTest, true );
		should.exist( ruralRoute );
		ruralRoute.should.equal( ruralExp );
	} );

	it( "'RuralNumber 2 Box274'", function () {
		var ruralTest = "RuralNumber 2 Box274";
		var ruralExp = "RR 2 BOX 274";
		var ruralRoute = postal.standardization.ruralRoute( ruralTest, true );
		should.exist( ruralRoute );
		ruralRoute.should.equal( ruralExp );
	} );

	it( "'Rural#2 Box 274'", function () {
		var ruralTest = "Rural#2 Box 274";
		var ruralExp = "RR 2 BOX 274";
		var ruralRoute = postal.standardization.ruralRoute( ruralTest, true );
		should.exist( ruralRoute );
		ruralRoute.should.equal( ruralExp );
	} );

	it( "'Rural#2Box274'", function () {
		var ruralTest = "Rural#2Box274";
		var ruralExp = "RR 2 BOX 274";
		var ruralRoute = postal.standardization.ruralRoute( ruralTest, true );
		should.exist( ruralRoute );
		ruralRoute.should.equal( ruralExp );
	} );

	it( "'RuralNumber2Box274'", function () {
		var ruralTest = "RuralNumber2Box274";
		var ruralExp = "RR 2 BOX 274";
		var ruralRoute = postal.standardization.ruralRoute( ruralTest, true );
		should.exist( ruralRoute );
		ruralRoute.should.equal( ruralExp );
	} );

	it( "'Route 2 Box 274'", function () {
		var ruralTest = "Route 2 Box 274";
		var ruralExp = "RR 2 BOX 274";
		var ruralRoute = postal.standardization.ruralRoute( ruralTest, true );
		should.exist( ruralRoute );
		ruralRoute.should.equal( ruralExp );
	} );

	it( "'Route 2 Box #274'", function () {
		var ruralTest = "Route 2 Box #274";
		var ruralExp = "RR 2 BOX 274";
		var ruralRoute = postal.standardization.ruralRoute( ruralTest, true );
		should.exist( ruralRoute );
		ruralRoute.should.equal( ruralExp );
	} );

	it( "'Route 2 Box#274'", function () {
		var ruralTest = "Route 2 Box#274";
		var ruralExp = "RR 2 BOX 274";
		var ruralRoute = postal.standardization.ruralRoute( ruralTest, true );
		should.exist( ruralRoute );
		ruralRoute.should.equal( ruralExp );
	} );

	it( "'Route 2 Box274'", function () {
		var ruralTest = "Route 2 Box274";
		var ruralExp = "RR 2 BOX 274";
		var ruralRoute = postal.standardization.ruralRoute( ruralTest, true );
		should.exist( ruralRoute );
		ruralRoute.should.equal( ruralExp );
	} );

	it( "'Route2Box274'", function () {
		var ruralTest = "Route2Box274";
		var ruralExp = "RR 2 BOX 274";
		var ruralRoute = postal.standardization.ruralRoute( ruralTest, true );
		should.exist( ruralRoute );
		ruralRoute.should.equal( ruralExp );
	} );

	it( "'RR X2 BOX 274'", function () {
		var ruralTest = "RR X2 BOX 274";
		var ruralRoute = postal.standardization.ruralRoute( ruralTest, true );
		should.not.exist( ruralRoute );
	} );

} );