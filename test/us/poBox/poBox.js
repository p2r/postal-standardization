"use strict";

/* global describe, it */

var should = require( "should" );

var Postal = require( "../../../lib" ).USPostal;

describe( "PO Box:", function () {

	var postal = new Postal();

	it( "'PO BOX 233'", function () {
		var poBoxTest = "PO BOX 233";
		var poBoxExp = "PO BOX 233";
		var poBox = postal.standardization.poBox.parse( poBoxTest );
		should.exist( poBox );
		poBox.should.equal( poBoxExp );
	} );

	it( "'PO BOX #233'", function () {
		var poBoxTest = "PO BOX #233";
		var poBoxExp = "PO BOX 233";
		var poBox = postal.standardization.poBox.parse( poBoxTest );
		should.exist( poBox );
		poBox.should.equal( poBoxExp );
	} );

	it( "'PO BOX -233'", function () {
		var poBoxTest = "PO BOX -233";
		var poBoxExp = "PO BOX 0233";
		var poBox = postal.standardization.poBox.parse( poBoxTest );
		should.exist( poBox );
		poBox.should.equal( poBoxExp );
	} );

	it( "'PO BOX 0233'", function () {
		var poBoxTest = "PO BOX 0233";
		var poBoxExp = "PO BOX 0233";
		var poBox = postal.standardization.poBox.parse( poBoxTest );
		should.exist( poBox );
		poBox.should.equal( poBoxExp );
	} );

	it( "' PO BOX 233'", function () {
		var poBoxTest = " PO BOX 233";
		var poBoxExp = "PO BOX 233";
		var poBox = postal.standardization.poBox.parse( poBoxTest );
		should.exist( poBox );
		poBox.should.equal( poBoxExp );
	} );

	it( "'PO BOX 233 '", function () {
		var poBoxTest = "PO BOX 233 ";
		var poBoxExp = "PO BOX 233";
		var poBox = postal.standardization.poBox.parse( poBoxTest );
		should.exist( poBox );
		poBox.should.equal( poBoxExp );
	} );

	it( "'P.O. BOX 233'", function () {
		var poBoxTest = "P.O. BOX 233";
		var poBoxExp = "PO BOX 233";
		var poBox = postal.standardization.poBox.parse( poBoxTest );
		should.exist( poBox );
		poBox.should.equal( poBoxExp );
	} );

	it( "'P.O BOX 233'", function () {
		var poBoxTest = "P.O BOX 233";
		var poBoxExp = "PO BOX 233";
		var poBox = postal.standardization.poBox.parse( poBoxTest );
		should.exist( poBox );
		poBox.should.equal( poBoxExp );
	} );

	it( "'PO. BOX 233'", function () {
		var poBoxTest = "PO. BOX 233";
		var poBoxExp = "PO BOX 233";
		var poBox = postal.standardization.poBox.parse( poBoxTest );
		should.exist( poBox );
		poBox.should.equal( poBoxExp );
	} );

	it( "'POBOX 233'", function () {
		var poBoxTest = "POBOX 233";
		var poBoxExp = "PO BOX 233";
		var poBox = postal.standardization.poBox.parse( poBoxTest );
		should.exist( poBox );
		poBox.should.equal( poBoxExp );
	} );

} );