"use strict";

/* global describe, it */

var should = require( "should" );

var USPostal = require( "../../lib/us" );

describe( "US Postal Object:", function () {

	it( "Constructor - No Config", function () {
		var usPostal = new USPostal();
		should.exist( usPostal );

		should.exist( usPostal.standardization );
		should.exist( usPostal.match );

		should.exist( usPostal.zipcode );
		should.not.exist( usPostal.zipcode.database );
	} );

} );