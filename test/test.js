"use strict";

/* global before, describe, it */

require( "should" );

var calls = [];

before( function () {
	calls.push( "before" );
} );

describe( "Root", function () {

	it( "Should be a valid suite", function () {
		calls.should.eql( [ "before" ] );
	} );

} );