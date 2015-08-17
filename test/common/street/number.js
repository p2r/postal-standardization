"use strict";

/* global describe, it */

var should = require( "should" );

var Postal = require( "../../../lib" ).USPostal;

describe( "Street Numbers:", function () {

	var postal = new Postal();

	describe( "Parse:", function () {

		it( "'123'", function () {
			var numTest = "123";
			var numExp = "123";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'123xyz'", function () {
			var numTest = "123xyz";
			var num = postal.standardization.street.number.parse( numTest );
			should.not.exist( num );
		} );

		it( "'123 xyz'", function () {
			var numTest = "123 xyz";
			var numExp = "123";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'123rd'", function () {
			var numTest = "123rd";
			var numExp = "123RD";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'123rd '", function () {
			var numTest = "123rd ";
			var numExp = "123RD";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'121st'", function () {
			var numTest = "121st";
			var numExp = "121ST";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'121st '", function () {
			var numTest = "121st ";
			var numExp = "121ST";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'121nd'", function () {
			var numTest = "121nd";
			var numExp = "121ND";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'121nd '", function () {
			var numTest = "121nd ";
			var numExp = "121ND";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'121th'", function () {
			var numTest = "121th";
			var numExp = "121TH";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'121th '", function () {
			var numTest = "121th ";
			var numExp = "121TH";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );	it( "'123rd'", function () {
			var numTest = "123rd";
			var numExp = "123RD";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'123 rd '", function () {
			var numTest = "123 rd ";
			var numExp = "123RD";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'121 st'", function () {
			var numTest = "121 st";
			var numExp = "121ST";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'121 st '", function () {
			var numTest = "121 st ";
			var numExp = "121ST";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'122 nd'", function () {
			var numTest = "122 nd";
			var numExp = "122ND";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'122 nd '", function () {
			var numTest = "122 nd ";
			var numExp = "122ND";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'123 th'", function () {
			var numTest = "123 th";
			var numExp = "123TH";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'123 th '", function () {
			var numTest = "123 th ";
			var numExp = "123TH";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'123 1/2'", function () {
			var numTest = "123 1/2";
			var numExp = "123 1/2";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'123 1/3RD'", function () {
			var numTest = "123 1/3RD";
			var numExp = "123 1/3RD";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'123 Street'", function () {
			var numTest = "123 Street";
			var numExp = "123";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'123rd Street'", function () {
			var numTest = "123rd Street";
			var numExp = "123RD";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'123rd Street '", function () {
			var numTest = "123rd Street ";
			var numExp = "123RD";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'121st Street'", function () {
			var numTest = "121st Street";
			var numExp = "121ST";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'121st Street '", function () {
			var numTest = "121st Street ";
			var numExp = "121ST";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'121nd Street'", function () {
			var numTest = "121nd Street";
			var numExp = "121ND";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'121nd Street '", function () {
			var numTest = "121nd Street ";
			var numExp = "121ND";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'121th Street'", function () {
			var numTest = "121th Street";
			var numExp = "121TH";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'121th Street '", function () {
			var numTest = "121th Street ";
			var numExp = "121TH";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'123rd Street'", function () {
			var numTest = "123rd Street";
			var numExp = "123RD";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'123 rd Street '", function () {
			var numTest = "123 rd Street ";
			var numExp = "123RD";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'121 st Street'", function () {
			var numTest = "121 st Street";
			var numExp = "121ST";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'121 st Street '", function () {
			var numTest = "121 st Street ";
			var numExp = "121ST";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'122 nd Street'", function () {
			var numTest = "122 nd Street";
			var numExp = "122ND";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'122 nd Street '", function () {
			var numTest = "122 nd Street ";
			var numExp = "122ND";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'123 th Street'", function () {
			var numTest = "123 th Street";
			var numExp = "123TH";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'123 th Street '", function () {
			var numTest = "123 th Street ";
			var numExp = "123TH";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'123 1/2 Street'", function () {
			var numTest = "123 1/2 Street";
			var numExp = "123 1/2";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'123 1/3RD Street'", function () {
			var numTest = "123 1/3RD Street";
			var numExp = "123 1/3RD";
			var num = postal.standardization.street.number.parse( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

	} );

	describe( "Match:", function () {

		it( "'123'", function () {
			var numTest = "123";
			var numExp = "123";
			var num = postal.standardization.street.number.match( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'123xyz'", function () {
			var numTest = "123xyz";
			var num = postal.standardization.street.number.match( numTest );
			should.not.exist( num );
		} );

		it( "'123 xyz'", function () {
			var numTest = "123 xyz";
			var num = postal.standardization.street.number.match( numTest );
			should.not.exist( num );
		} );

		it( "'123rd'", function () {
			var numTest = "123rd";
			var numExp = "123RD";
			var num = postal.standardization.street.number.match( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'123rd '", function () {
			var numTest = "123rd ";
			var numExp = "123RD";
			var num = postal.standardization.street.number.match( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'121st'", function () {
			var numTest = "121st";
			var numExp = "121ST";
			var num = postal.standardization.street.number.match( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'121st '", function () {
			var numTest = "121st ";
			var numExp = "121ST";
			var num = postal.standardization.street.number.match( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'121nd'", function () {
			var numTest = "121nd";
			var numExp = "121ND";
			var num = postal.standardization.street.number.match( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'121nd '", function () {
			var numTest = "121nd ";
			var numExp = "121ND";
			var num = postal.standardization.street.number.match( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'121th'", function () {
			var numTest = "121th";
			var numExp = "121TH";
			var num = postal.standardization.street.number.match( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'121th '", function () {
			var numTest = "121th ";
			var numExp = "121TH";
			var num = postal.standardization.street.number.match( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );	it( "'123rd'", function () {
			var numTest = "123rd";
			var numExp = "123RD";
			var num = postal.standardization.street.number.match( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'123 rd '", function () {
			var numTest = "123 rd ";
			var numExp = "123RD";
			var num = postal.standardization.street.number.match( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'121 st'", function () {
			var numTest = "121 st";
			var numExp = "121ST";
			var num = postal.standardization.street.number.match( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'121 st '", function () {
			var numTest = "121 st ";
			var numExp = "121ST";
			var num = postal.standardization.street.number.match( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'122 nd'", function () {
			var numTest = "122 nd";
			var numExp = "122ND";
			var num = postal.standardization.street.number.match( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'122 nd '", function () {
			var numTest = "122 nd ";
			var numExp = "122ND";
			var num = postal.standardization.street.number.match( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'123 th'", function () {
			var numTest = "123 th";
			var numExp = "123TH";
			var num = postal.standardization.street.number.match( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'123 th '", function () {
			var numTest = "123 th ";
			var numExp = "123TH";
			var num = postal.standardization.street.number.match( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'123 1/2'", function () {
			var numTest = "123 1/2";
			var numExp = "123 1/2";
			var num = postal.standardization.street.number.match( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'123 1/3RD'", function () {
			var numTest = "123 1/3RD";
			var numExp = "123 1/3RD";
			var num = postal.standardization.street.number.match( numTest );
			should.exist( num );
			num.should.equal( numExp );
		} );

		it( "'123 Street'", function () {
			var numTest = "123 Street";
			var num = postal.standardization.street.number.match( numTest );
			should.not.exist( num );
		} );

		it( "'123rd Street'", function () {
			var numTest = "123rd Street";
			var num = postal.standardization.street.number.match( numTest );
			should.not.exist( num );
		} );

		it( "'123rd Street '", function () {
			var numTest = "123rd Street ";
			var num = postal.standardization.street.number.match( numTest );
			should.not.exist( num );
		} );

		it( "'121st Street'", function () {
			var numTest = "121st Street";
			var num = postal.standardization.street.number.match( numTest );
			should.not.exist( num );
		} );

		it( "'121st Street '", function () {
			var numTest = "121st Street ";
			var num = postal.standardization.street.number.match( numTest );
			should.not.exist( num );
		} );

		it( "'121nd Street'", function () {
			var numTest = "121nd Street";
			var num = postal.standardization.street.number.match( numTest );
			should.not.exist( num );
		} );

		it( "'121nd Street '", function () {
			var numTest = "121nd Street ";
			var num = postal.standardization.street.number.match( numTest );
			should.not.exist( num );
		} );

		it( "'121th Street'", function () {
			var numTest = "121th Street";
			var num = postal.standardization.street.number.match( numTest );
			should.not.exist( num );
		} );

		it( "'121th Street '", function () {
			var numTest = "121th Street ";
			var num = postal.standardization.street.number.match( numTest );
			should.not.exist( num );
		} );

		it( "'123rd' Street", function () {
			var numTest = "123rd Street";
			var num = postal.standardization.street.number.match( numTest );
			should.not.exist( num );
		} );

		it( "'123 rd Street '", function () {
			var numTest = "123 rd Street ";
			var num = postal.standardization.street.number.match( numTest );
			should.not.exist( num );
		} );

		it( "'121 st Street'", function () {
			var numTest = "121 st Street";
			var num = postal.standardization.street.number.match( numTest );
			should.not.exist( num );
		} );

		it( "'121 st Street '", function () {
			var numTest = "121 st Street ";
			var num = postal.standardization.street.number.match( numTest );
			should.not.exist( num );
		} );

		it( "'122 nd Street'", function () {
			var numTest = "122 nd Street";
			var num = postal.standardization.street.number.match( numTest );
			should.not.exist( num );
		} );

		it( "'122 nd Street '", function () {
			var numTest = "122 nd Street ";
			var num = postal.standardization.street.number.match( numTest );
			should.not.exist( num );
		} );

		it( "'123 th Street'", function () {
			var numTest = "123 th Street";
			var num = postal.standardization.street.number.match( numTest );
			should.not.exist( num );
		} );

		it( "'123 th Street '", function () {
			var numTest = "123 th Street ";
			var num = postal.standardization.street.number.match( numTest );
			should.not.exist( num );
		} );

		it( "'123 1/2 Street'", function () {
			var numTest = "123 1/2 Street";
			var num = postal.standardization.street.number.match( numTest );
			should.not.exist( num );
		} );

		it( "'123 1/3RD Street'", function () {
			var numTest = "123 1/3RD Street";
			var num = postal.standardization.street.number.match( numTest );
			should.not.exist( num );
		} );

	} );

} );