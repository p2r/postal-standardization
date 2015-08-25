"use strict";

/* global describe, it */

var should = require( "should" );

var Postal = require( "../../../lib" ).USPostal;

describe( "Rural Routes:", function () {

	var postal;
	if ( Postal ) {
		postal = new Postal();
	}

	it( "'RR 2 BOX 274'", function ( done ) {
		if ( !postal ) {
			return done();
		}

		var ruralTest = "RR 2 BOX 274";
		var ruralExp = "RR 2 BOX 274";
		var ruralRoute = postal.standardization.ruralRoute.parse( ruralTest );
		should.exist( ruralRoute );
		ruralRoute.should.equal( ruralExp );
	} );

	it( "'R 2 BOX 274'", function ( done ) {
		if ( !postal ) {
			return done();
		}

		var ruralTest = "R 2 BOX 274";
		var ruralExp = "RR 2 BOX 274";
		var ruralRoute = postal.standardization.ruralRoute.parse( ruralTest );
		should.exist( ruralRoute );
		ruralRoute.should.equal( ruralExp );
	} );

	it( "'Rural Route 2 Box 274'", function ( done ) {
		if ( !postal ) {
			return done();
		}

		var ruralTest = "Rural Route 2 Box 274";
		var ruralExp = "RR 2 BOX 274";
		var ruralRoute = postal.standardization.ruralRoute.parse( ruralTest );
		should.exist( ruralRoute );
		ruralRoute.should.equal( ruralExp );
	} );

	it( "'Rural Route 2 Box #274'", function ( done ) {
		if ( !postal ) {
			return done();
		}

		var ruralTest = "Rural Route 2 Box #274";
		var ruralExp = "RR 2 BOX 274";
		var ruralRoute = postal.standardization.ruralRoute.parse( ruralTest );
		should.exist( ruralRoute );
		ruralRoute.should.equal( ruralExp );
	} );

	it( "'RuralRoute 2 Box#274'", function ( done ) {
		if ( !postal ) {
			return done();
		}

		var ruralTest = "RuralRoute 2 Box#274";
		var ruralExp = "RR 2 BOX 274";
		var ruralRoute = postal.standardization.ruralRoute.parse( ruralTest );
		should.exist( ruralRoute );
		ruralRoute.should.equal( ruralExp );
	} );

	it( "'RuralRoute 2 Box274'", function ( done ) {
		if ( !postal ) {
			return done();
		}

		var ruralTest = "RuralRoute 2 Box274";
		var ruralExp = "RR 2 BOX 274";
		var ruralRoute = postal.standardization.ruralRoute.parse( ruralTest );
		should.exist( ruralRoute );
		ruralRoute.should.equal( ruralExp );
	} );

	it( "'RuralRoute2Box274'", function ( done ) {
		if ( !postal ) {
			return done();
		}

		var ruralTest = "RuralRoute2Box274";
		var ruralExp = "RR 2 BOX 274";
		var ruralRoute = postal.standardization.ruralRoute.parse( ruralTest );
		should.exist( ruralRoute );
		ruralRoute.should.equal( ruralExp );
	} );

	it( "'Rural Number 2 Box 274'", function ( done ) {
		if ( !postal ) {
			return done();
		}

		var ruralTest = "Rural Number 2 Box 274";
		var ruralExp = "RR 2 BOX 274";
		var ruralRoute = postal.standardization.ruralRoute.parse( ruralTest );
		should.exist( ruralRoute );
		ruralRoute.should.equal( ruralExp );
	} );

	it( "'Rural Number 2 Box #274'", function ( done ) {
		if ( !postal ) {
			return done();
		}

		var ruralTest = "Rural Number 2 Box #274";
		var ruralExp = "RR 2 BOX 274";
		var ruralRoute = postal.standardization.ruralRoute.parse( ruralTest );
		should.exist( ruralRoute );
		ruralRoute.should.equal( ruralExp );
	} );

	it( "'RuralNumber 2 Box#274'", function ( done ) {
		if ( !postal ) {
			return done();
		}

		var ruralTest = "RuralNumber 2 Box#274";
		var ruralExp = "RR 2 BOX 274";
		var ruralRoute = postal.standardization.ruralRoute.parse( ruralTest );
		should.exist( ruralRoute );
		ruralRoute.should.equal( ruralExp );
	} );

	it( "'RuralNumber 2 Box274'", function ( done ) {
		if ( !postal ) {
			return done();
		}

		var ruralTest = "RuralNumber 2 Box274";
		var ruralExp = "RR 2 BOX 274";
		var ruralRoute = postal.standardization.ruralRoute.parse( ruralTest );
		should.exist( ruralRoute );
		ruralRoute.should.equal( ruralExp );
	} );

	it( "'Rural#2 Box 274'", function ( done ) {
		if ( !postal ) {
			return done();
		}

		var ruralTest = "Rural#2 Box 274";
		var ruralExp = "RR 2 BOX 274";
		var ruralRoute = postal.standardization.ruralRoute.parse( ruralTest );
		should.exist( ruralRoute );
		ruralRoute.should.equal( ruralExp );
	} );

	it( "'Rural#2Box274'", function ( done ) {
		if ( !postal ) {
			return done();
		}

		var ruralTest = "Rural#2Box274";
		var ruralExp = "RR 2 BOX 274";
		var ruralRoute = postal.standardization.ruralRoute.parse( ruralTest );
		should.exist( ruralRoute );
		ruralRoute.should.equal( ruralExp );
	} );

	it( "'RuralNumber2Box274'", function ( done ) {
		if ( !postal ) {
			return done();
		}

		var ruralTest = "RuralNumber2Box274";
		var ruralExp = "RR 2 BOX 274";
		var ruralRoute = postal.standardization.ruralRoute.parse( ruralTest );
		should.exist( ruralRoute );
		ruralRoute.should.equal( ruralExp );
	} );

	it( "'Route 2 Box 274'", function ( done ) {
		if ( !postal ) {
			return done();
		}

		var ruralTest = "Route 2 Box 274";
		var ruralExp = "RR 2 BOX 274";
		var ruralRoute = postal.standardization.ruralRoute.parse( ruralTest );
		should.exist( ruralRoute );
		ruralRoute.should.equal( ruralExp );
	} );

	it( "'Route 2 Box #274'", function ( done ) {
		if ( !postal ) {
			return done();
		}

		var ruralTest = "Route 2 Box #274";
		var ruralExp = "RR 2 BOX 274";
		var ruralRoute = postal.standardization.ruralRoute.parse( ruralTest );
		should.exist( ruralRoute );
		ruralRoute.should.equal( ruralExp );
	} );

	it( "'Route 2 Box#274'", function ( done ) {
		if ( !postal ) {
			return done();
		}

		var ruralTest = "Route 2 Box#274";
		var ruralExp = "RR 2 BOX 274";
		var ruralRoute = postal.standardization.ruralRoute.parse( ruralTest );
		should.exist( ruralRoute );
		ruralRoute.should.equal( ruralExp );
	} );

	it( "'Route 2 Box274'", function ( done ) {
		if ( !postal ) {
			return done();
		}

		var ruralTest = "Route 2 Box274";
		var ruralExp = "RR 2 BOX 274";
		var ruralRoute = postal.standardization.ruralRoute.parse( ruralTest );
		should.exist( ruralRoute );
		ruralRoute.should.equal( ruralExp );
	} );

	it( "'Route2Box274'", function ( done ) {
		if ( !postal ) {
			return done();
		}

		var ruralTest = "Route2Box274";
		var ruralExp = "RR 2 BOX 274";
		var ruralRoute = postal.standardization.ruralRoute.parse( ruralTest );
		should.exist( ruralRoute );
		ruralRoute.should.equal( ruralExp );
	} );

	it( "'RR X2 BOX 274'", function ( done ) {
		if ( !postal ) {
			return done();
		}

		var ruralTest = "RR X2 BOX 274";
		var ruralRoute = postal.standardization.ruralRoute.parse( ruralTest );
		should.not.exist( ruralRoute );
	} );

} );