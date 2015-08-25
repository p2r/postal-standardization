"use strict";

/* global describe, it */

var should = require( "should" );

// var logStatus = require( "../../../lib/common/logStatus" );
var Postal = require( "../../../lib" ).USPostal;

describe( "Address Match Similarity:", function () {

	var postal = new Postal();

	it( "Same Strings - Basic", function () {

		var address1String = "16729 Buckskin Way, Broomfield, CO 80023";
		var address1Object, address2Object;

		postal.standardization.parseAddress( address1String, function ( err, result ) {
			should.not.exist( err );
			should.exist( result );

			address1Object = result;

			postal.standardization.parseAddress( address1String, function ( err, result ) {
				should.not.exist( err );
				should.exist( result );

				address2Object = result;

				postal.match.similarity( address1Object, address2Object, function ( err, result ) {
					should.not.exist( err );
					should.exist( result );

					result.should.equal( 1 );
				} );
			} );
		} );
	} );

	it( "String Object - Basic", function () {

		var address1String = "16729 Buckskin Way, Broomfield, CO 80023";
		var address2String;
		var address1Object, address2Object;

		postal.standardization.parseAddress( address1String, function ( err, result ) {
			should.not.exist( err );
			should.exist( result );

			address1Object = result;
			address2String = postal.toString( address1Object );

			postal.standardization.parseAddress( address1String, function ( err, result ) {
				should.not.exist( err );
				should.exist( result );
				address2Object = result;

				address2Object.should.eql( address1Object );

				postal.match.similarity( address1Object, address2Object, function ( err, result ) {
					should.not.exist( err );
					should.exist( result );

					result.should.equal( 1 );
				} );

			} );
		} );
	} );

	it( "Two Strings - Basic", function () {

		var address1String = "16729 Buckskin Way, Broomfield, CO 80023";
		var address2String = "16729 Buckskin Way, Broomfield, CO 80023";
		var address1Object, address2Object;

		postal.standardization.parseAddress( address1String, function ( err, result ) {
			should.not.exist( err );
			should.exist( result );

			address1Object = result;

			postal.standardization.parseAddress( address2String, function ( err, result ) {
				should.not.exist( err );
				should.exist( result );

				address2Object = result;

				postal.match.similarity( address1Object, address2Object, function ( err, result ) {
					should.not.exist( err );
					should.exist( result );

					result.should.equal( 1 );
				} );
			} );
		} );
	} );

	it( "Strings - Similar, No Unit", function () {

		var address1String = "16729 Buckskin Way #123, Broomfield, CO 80023";
		var address2String = "16729 Buckskin Way, Broomfield, CO 80023";
		var address1Object, address2Object;

		postal.standardization.parseAddress( address1String, function ( err, result ) {
			should.not.exist( err );
			should.exist( result );

			address1Object = result;

			postal.standardization.parseAddress( address2String, function ( err, result ) {
				should.not.exist( err );
				should.exist( result );

				address2Object = result;

				postal.match.similarity( address1Object, address2Object, function ( err, result ) {
					should.not.exist( err );
					should.exist( result );

					// result.should.equal( 0.75 );
					result.should.be.above( 0.7 );
					result.should.be.below( 0.8 );
				} );
			} );
		} );
	} );

	it( "Strings - Similar, No ZIP", function () {

		var address1String = "16729 Buckskin Way, Broomfield, CO";
		var address2String = "16729 Buckskin Way, Broomfield, CO 80023";
		var address1Object, address2Object;

		postal.standardization.parseAddress( address1String, function ( err, result ) {
			should.not.exist( err );
			should.exist( result );

			address1Object = result;

			postal.standardization.parseAddress( address2String, function ( err, result ) {
				should.not.exist( err );
				should.exist( result );

				address2Object = result;

				postal.match.similarity( address1Object, address2Object, function ( err, result ) {
					should.not.exist( err );
					should.exist( result );

					result.should.be.above( 0.8 );
					result.should.be.below( 0.9 );
				} );
			} );
		} );
	} );

	it( "Strings - Similar, Different City", function () {

		var address1String = "16729 Buckskin Way, Westminster, CO 80023";
		var address2String = "16729 Buckskin Way, Broomfield, CO 80023";
		var address1Object, address2Object;

		postal.standardization.parseAddress( address1String, function ( err, result ) {
			should.not.exist( err );
			should.exist( result );

			address1Object = result;

			postal.standardization.parseAddress( address2String, function ( err, result ) {
				should.not.exist( err );
				should.exist( result );

				address2Object = result;

				postal.match.similarity( address1Object, address2Object, function ( err, result ) {
					should.not.exist( err );
					should.exist( result );

					result.should.be.above( 0.8 );
					result.should.be.below( 0.9 );
				} );
			} );
		} );
	} );

	it( "Strings - Similar, Different ZIP", function () {

		var address1String = "16729 Buckskin Way, Broomfield, CO 80021";
		var address2String = "16729 Buckskin Way, Broomfield, CO 80023";
		var address1Object, address2Object;

		postal.standardization.parseAddress( address1String, function ( err, result ) {
			should.not.exist( err );
			should.exist( result );

			address1Object = result;

			postal.standardization.parseAddress( address2String, function ( err, result ) {
				should.not.exist( err );
				should.exist( result );

				address2Object = result;

				postal.match.similarity( address1Object, address2Object, function ( err, result ) {
					should.not.exist( err );
					should.exist( result );

					result.should.be.above( 0.8 );
					result.should.be.below( 0.9 );
				} );
			} );
		} );
	} );

} );