"use strict";

/* global describe, it */

var should = require( "should" );

var Standardization = require( "../../../lib/us/Standardization" );

describe( "Street Prefixes:", function () {

	var standardization = new Standardization();

	it( "N", function () {
		var names = [
			"NORTH",
			"N"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetPrefix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "N" );
		}

	} );

	it( "S", function () {
		var names = [
			"SOUTH",
			"S"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetPrefix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "S" );
		}

	} );

	it( "E", function () {
		var names = [
			"EAST",
			"E"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetPrefix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "E" );
		}

	} );

	it( "W", function () {
		var names = [
			"WEST",
			"W"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = standardization.streetPrefix( names[ i ], true );
			should.exist( abbr );
			abbr.should.equal( "W" );
		}

	} );

} );