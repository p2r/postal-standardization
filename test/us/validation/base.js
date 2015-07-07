"use strict";

/* global describe, it */

var should = require( "should" );

var Postal = require( "../../../lib" ).USPostal;

describe( "Validation Object:", function () {

	it( "Constructor - No Config", function () {
		var postal = new Postal();
		var validation = postal.validation;
		should.exist( validation );
	} );

} );