"use strict";

/* global describe, it */

var should = require( "should" );

var Postal = require( "../../../lib" ).USPostal;

describe( "Street Numbers:", function () {

	var postal;
	if ( Postal ) {
		postal = new Postal();
	}

	describe( "Parse:", function () {

		it( "'123'", function () {
			if ( !postal ) {
				return;
			}

			var numTest = "123";
			var numExp = "123";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'123xyz'", function () {
			if ( !postal ) {
				return;
			}

			var numTest = "123xyz";
			var num = postal.standardization.street.number.parse( numTest );
			should.not.exist( num );
		} );

		it( "'123 xyz'", function () {
			if ( !postal ) {
				return;
			}

			var numTest = "123 xyz";
			var numExp = "123";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'123rd'", function () {
			if ( !postal ) {
				return;
			}

			var numTest = "123rd";
			var numExp = "123RD";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'123rd '", function () {
			if ( !postal ) {
				return;
			}

			var numTest = "123rd ";
			var numExp = "123RD";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'121st'", function () {
			if ( !postal ) {
				return;
			}

			var numTest = "121st";
			var numExp = "121ST";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'121st '", function () {
			if ( !postal ) {
				return;
			}

			var numTest = "121st ";
			var numExp = "121ST";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'121nd'", function () {
			if ( !postal ) {
				return;
			}

			var numTest = "121nd";
			var numExp = "121ND";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'121nd '", function () {
			if ( !postal ) {
				return;
			}

			var numTest = "121nd ";
			var numExp = "121ND";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'121th'", function () {
			if ( !postal ) {
				return;
			}

			var numTest = "121th";
			var numExp = "121TH";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'121th '", function () {
			if ( !postal ) {
				return;
			}

			var numTest = "121th ";
			var numExp = "121TH";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );	it( "'123rd'", function () {
			if ( !postal ) {
				return;
			}

			var numTest = "123rd";
			var numExp = "123RD";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'123 rd '", function () {
			if ( !postal ) {
				return;
			}

			var numTest = "123 rd ";
			var numExp = "123RD";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'121 st'", function () {
			if ( !postal ) {
				return;
			}

			var numTest = "121 st";
			var numExp = "121ST";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'121 st '", function () {
			if ( !postal ) {
				return;
			}

			var numTest = "121 st ";
			var numExp = "121ST";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'122 nd'", function () {
			if ( !postal ) {
				return;
			}

			var numTest = "122 nd";
			var numExp = "122ND";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'122 nd '", function () {
			if ( !postal ) {
				return;
			}

			var numTest = "122 nd ";
			var numExp = "122ND";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'123 th'", function () {
			if ( !postal ) {
				return;
			}

			var numTest = "123 th";
			var numExp = "123TH";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'123 th '", function () {
			if ( !postal ) {
				return;
			}

			var numTest = "123 th ";
			var numExp = "123TH";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'123 1/2'", function () {
			if ( !postal ) {
				return;
			}

			var numTest = "123 1/2";
			var numExp = "123 1/2";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'123 1/3RD'", function () {
			if ( !postal ) {
				return;
			}

			var numTest = "123 1/3RD";
			var numExp = "123 1/3RD";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

	} );

	describe( "Match:", function () {

		it( "'123'", function () {
			if ( !postal ) {
				return;
			}

			var numTest = "123";
			var numExp = "123";
			var num = postal.standardization.street.number.match( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'123xyz'", function () {
			if ( !postal ) {
				return;
			}

			var numTest = "123xyz";
			var num = postal.standardization.street.number.match( numTest );
			should.not.exist( num );
		} );

		it( "'123 xyz'", function () {
			if ( !postal ) {
				return;
			}

			var numTest = "123 xyz";
			var num = postal.standardization.street.number.match( numTest );
			should.not.exist( num );
		} );

		it( "'123rd'", function () {
			if ( !postal ) {
				return;
			}

			var numTest = "123rd";
			var numExp = "123RD";
			var num = postal.standardization.street.number.match( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'123rd '", function () {
			if ( !postal ) {
				return;
			}

			var numTest = "123rd ";
			var numExp = "123RD";
			var num = postal.standardization.street.number.match( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'121st'", function () {
			if ( !postal ) {
				return;
			}

			var numTest = "121st";
			var numExp = "121ST";
			var num = postal.standardization.street.number.match( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'121st '", function () {
			if ( !postal ) {
				return;
			}

			var numTest = "121st ";
			var numExp = "121ST";
			var num = postal.standardization.street.number.match( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'121nd'", function () {
			if ( !postal ) {
				return;
			}

			var numTest = "121nd";
			var numExp = "121ND";
			var num = postal.standardization.street.number.match( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'121nd '", function () {
			if ( !postal ) {
				return;
			}

			var numTest = "121nd ";
			var numExp = "121ND";
			var num = postal.standardization.street.number.match( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'121th'", function () {
			if ( !postal ) {
				return;
			}

			var numTest = "121th";
			var numExp = "121TH";
			var num = postal.standardization.street.number.match( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'121th '", function () {
			if ( !postal ) {
				return;
			}

			var numTest = "121th ";
			var numExp = "121TH";
			var num = postal.standardization.street.number.match( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );	it( "'123rd'", function () {
			if ( !postal ) {
				return;
			}

			var numTest = "123rd";
			var numExp = "123RD";
			var num = postal.standardization.street.number.match( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'123 rd '", function () {
			if ( !postal ) {
				return;
			}

			var numTest = "123 rd ";
			var numExp = "123RD";
			var num = postal.standardization.street.number.match( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'121 st'", function () {
			if ( !postal ) {
				return;
			}

			var numTest = "121 st";
			var numExp = "121ST";
			var num = postal.standardization.street.number.match( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'121 st '", function () {
			if ( !postal ) {
				return;
			}

			var numTest = "121 st ";
			var numExp = "121ST";
			var num = postal.standardization.street.number.match( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'122 nd'", function () {
			if ( !postal ) {
				return;
			}

			var numTest = "122 nd";
			var numExp = "122ND";
			var num = postal.standardization.street.number.match( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'122 nd '", function () {
			if ( !postal ) {
				return;
			}

			var numTest = "122 nd ";
			var numExp = "122ND";
			var num = postal.standardization.street.number.match( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'123 th'", function () {
			if ( !postal ) {
				return;
			}

			var numTest = "123 th";
			var numExp = "123TH";
			var num = postal.standardization.street.number.match( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'123 th '", function () {
			if ( !postal ) {
				return;
			}

			var numTest = "123 th ";
			var numExp = "123TH";
			var num = postal.standardization.street.number.match( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'123 1/2'", function () {
			if ( !postal ) {
				return;
			}

			var numTest = "123 1/2";
			var numExp = "123 1/2";
			var num = postal.standardization.street.number.match( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'123 1/3RD'", function () {
			if ( !postal ) {
				return;
			}

			var numTest = "123 1/3RD";
			var numExp = "123 1/3RD";
			var num = postal.standardization.street.number.match( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

	} );
} );