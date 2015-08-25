"use strict";

/* global describe, it */

var should = require( "should" );

var Postal = require( "../../../lib" ).USPostal;

describe( "US Zip Codes:", function () {

	var postal;
	if ( Postal ) {
		postal = new Postal();
	}

	it( "'80020'", function () {
		if ( !postal ) {
			return;
		}

		var zipTest = "80020";
		var zipExp = zipTest;
		var zip = postal.standardization.zipcode( zipTest );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "'80020 '", function () {
		if ( !postal ) {
			return;
		}

		var zipTest = "80020 ";
		var zipExp = "80020";
		var zip = postal.standardization.zipcode( zipTest );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "' 80020'", function () {
		if ( !postal ) {
			return;
		}

		var zipTest = " 80020";
		var zipExp = "80020";
		var zip = postal.standardization.zipcode( zipTest );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "' 80020 '", function () {
		if ( !postal ) {
			return;
		}

		var zipTest = " 80020 ";
		var zipExp = "80020";
		var zip = postal.standardization.zipcode( zipTest );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "'80020 US'", function () {
		if ( !postal ) {
			return;
		}

		var zipTest = "80020";
		var zipExp = zipTest;
		var zip = postal.standardization.zipcode( zipTest, "US" );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "'80020 ZW'", function () {
		if ( !postal ) {
			return;
		}

		var zipTest = "80020";
		var zipExp = zipTest;
		var zip = postal.standardization.zipcode( zipTest, "ZW" );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "'80020-6823'", function () {
		if ( !postal ) {
			return;
		}

		var zipTest = "80020-6823";
		var zipExp = zipTest;
		var zip = postal.standardization.zipcode( zipTest );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "'80020 -6823'", function () {
		if ( !postal ) {
			return;
		}

		var zipTest = "80020 -6823";
		var zipExp = "80020-6823";
		var zip = postal.standardization.zipcode( zipTest );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "'80020- 6823'", function () {
		if ( !postal ) {
			return;
		}

		var zipTest = "80020- 6823";
		var zipExp = "80020-6823";
		var zip = postal.standardization.zipcode( zipTest );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "'80020 - 6823'", function () {
		if ( !postal ) {
			return;
		}

		var zipTest = "80020 - 6823";
		var zipExp = "80020-6823";
		var zip = postal.standardization.zipcode( zipTest );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "'80020 6823'", function () {
		if ( !postal ) {
			return;
		}

		var zipTest = "80020 6823";
		var zipExp = "80020-6823";
		var zip = postal.standardization.zipcode( zipTest );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "'80020  6823'", function () {
		if ( !postal ) {
			return;
		}

		var zipTest = "80020  6823";
		var zipExp = "80020-6823";
		var zip = postal.standardization.zipcode( zipTest );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "' 80020-6823'", function () {
		if ( !postal ) {
			return;
		}

		var zipTest = " 80020-6823";
		var zipExp = "80020-6823";
		var zip = postal.standardization.zipcode( zipTest );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "' 80020 -6823'", function () {
		if ( !postal ) {
			return;
		}

		var zipTest = " 80020 -6823";
		var zipExp = "80020-6823";
		var zip = postal.standardization.zipcode( zipTest );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "' 80020- 6823'", function () {
		if ( !postal ) {
			return;
		}

		var zipTest = " 80020- 6823";
		var zipExp = "80020-6823";
		var zip = postal.standardization.zipcode( zipTest );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "' 80020 - 6823'", function () {
		if ( !postal ) {
			return;
		}

		var zipTest = " 80020 - 6823";
		var zipExp = "80020-6823";
		var zip = postal.standardization.zipcode( zipTest );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "'80020-6823 '", function () {
		if ( !postal ) {
			return;
		}

		var zipTest = "80020-6823 ";
		var zipExp = "80020-6823";
		var zip = postal.standardization.zipcode( zipTest );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "'80020 -6823 '", function () {
		if ( !postal ) {
			return;
		}

		var zipTest = "80020 -6823 ";
		var zipExp = "80020-6823";
		var zip = postal.standardization.zipcode( zipTest );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "'80020- 6823 '", function () {
		if ( !postal ) {
			return;
		}

		var zipTest = "80020- 6823 ";
		var zipExp = "80020-6823";
		var zip = postal.standardization.zipcode( zipTest );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "'80020 - 6823 '", function () {
		if ( !postal ) {
			return;
		}

		var zipTest = "80020 - 6823 ";
		var zipExp = "80020-6823";
		var zip = postal.standardization.zipcode( zipTest );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "' 80020-6823 '", function () {
		if ( !postal ) {
			return;
		}

		var zipTest = " 80020-6823 ";
		var zipExp = "80020-6823";
		var zip = postal.standardization.zipcode( zipTest );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "' 80020 -6823 '", function () {
		if ( !postal ) {
			return;
		}

		var zipTest = " 80020 -6823 ";
		var zipExp = "80020-6823";
		var zip = postal.standardization.zipcode( zipTest );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "' 80020- 6823 '", function () {
		if ( !postal ) {
			return;
		}

		var zipTest = " 80020- 6823 ";
		var zipExp = "80020-6823";
		var zip = postal.standardization.zipcode( zipTest );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "' 80020 - 6823 '", function () {
		if ( !postal ) {
			return;
		}

		var zipTest = " 80020 - 6823 ";
		var zipExp = "80020-6823";
		var zip = postal.standardization.zipcode( zipTest );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "'800206823'", function () {
		if ( !postal ) {
			return;
		}

		var zipTest = "800206823";
		var zipExp = "80020-6823";
		var zip = postal.standardization.zipcode( zipTest );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "' 800206823'", function () {
		if ( !postal ) {
			return;
		}

		var zipTest = " 800206823";
		var zipExp = "80020-6823";
		var zip = postal.standardization.zipcode( zipTest );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "'800206823 '", function () {
		if ( !postal ) {
			return;
		}

		var zipTest = "800206823 ";
		var zipExp = "80020-6823";
		var zip = postal.standardization.zipcode( zipTest );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "' 800206823 '", function () {
		if ( !postal ) {
			return;
		}

		var zipTest = " 800206823 ";
		var zipExp = "80020-6823";
		var zip = postal.standardization.zipcode( zipTest );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "'80020 6823'", function () {
		if ( !postal ) {
			return;
		}

		var zipTest = "80020 6823";
		var zipExp = "80020-6823";
		var zip = postal.standardization.zipcode( zipTest );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "' 80020 6823'", function () {
		if ( !postal ) {
			return;
		}

		var zipTest = " 80020 6823";
		var zipExp = "80020-6823";
		var zip = postal.standardization.zipcode( zipTest );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "'80020 6823 '", function () {
		if ( !postal ) {
			return;
		}

		var zipTest = "80020 6823 ";
		var zipExp = "80020-6823";
		var zip = postal.standardization.zipcode( zipTest );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

	it( "' 80020 6823 '", function () {
		if ( !postal ) {
			return;
		}

		var zipTest = " 80020 6823 ";
		var zipExp = "80020-6823";
		var zip = postal.standardization.zipcode( zipTest );
		should.exist( zip );
		zip.should.equal( zipExp );
	} );

} );