( function () {
	"use strict";

	var streetType = require( "./type");
	var streetPrefix = require( "./prefix");
	var streetSuffix = require( "./suffix");
	var streetNumber = require( "./number");
	var unitType = require( "../unitType");
	var clean = require( "../../clean");
	var logStatus = require( "../../logStatus");

	module.exports = {
		parse: function ( streetString ) {
			var cleanStreet = clean( streetString );
			var potentialMatch;
			var street = {};
			var words, unusedWords;

			logStatus( "street" );

			if ( !cleanStreet ) {
				return null;
			}

			logStatus( "street", "streetString", streetString );

			words = cleanStreet.split( " " );

			logStatus( "street", "words", words );
			logStatus( "street", "Looking for number." );

			potentialMatch = null;
			unusedWords = [];
			while ( !potentialMatch && words.length ) {
				potentialMatch = streetNumber.parse( words.join( " " ) );
				if ( potentialMatch ) {
					street.number = potentialMatch;
					logStatus( "street", "number", street.number );
				}
				else {
					unusedWords.unshift( words.pop() );
					logStatus( "street", "unusedWords", unusedWords );
				}
			}
			words = unusedWords;
			unusedWords = [];
			potentialMatch = null;

			logStatus( "street", "words", words );
			logStatus( "street", "Looking for secondary address unit." );

			while ( !potentialMatch && words.length ) {
				potentialMatch = unitType.parse( words.join( " " ) );
				if ( potentialMatch ) {
					if ( potentialMatch.hasOwnProperty( "sec_unit_type") ) {
						street.sec_unit_type = potentialMatch.sec_unit_type;
						logStatus( "street", "sec_unit_type", street.sec_unit_type );
					}
					if ( potentialMatch.hasOwnProperty( "sec_unit_num" ) ) {
						street.sec_unit_num = potentialMatch.sec_unit_num;
						logStatus( "street", "sec_unit_num", street.sec_unit_num );
					}
				}
				else {
					unusedWords.push( words.shift() );
					logStatus( "street", "unusedWords", unusedWords );
				}
			}
			words = unusedWords;
			unusedWords = [];
			potentialMatch = null;

			//	There has to be a street number for anything else to be considered a street.
			//	TODO: Verify that this should be true.
			if ( street.number ) {

				logStatus( "street", "words", words );
				logStatus( "street", "Looking for suffix." );

				while ( !potentialMatch && words.length ) {
					potentialMatch = streetSuffix.match( words.join( " " ) );
					if ( potentialMatch ) {
						street.suffix = potentialMatch;
						logStatus( "street", "suffix", street.suffix );
					}
					else {
						unusedWords.push( words.shift() );
						logStatus( "street", "unusedWords", unusedWords );
					}
				}
				words = unusedWords;
				unusedWords = [];
				potentialMatch = null;

				logStatus( "street", "words", words );
				logStatus( "street", "Looking for prefix." );

				while ( !potentialMatch && words.length ) {
					potentialMatch = streetPrefix.match( words.join( " " ) );
					if ( potentialMatch ) {
						street.prefix = potentialMatch;
						logStatus( "street", "prefix", street.prefix );
					}
					else {
						unusedWords.unshift( words.pop() );
						logStatus( "street", "unusedWords", unusedWords );
					}
				}
				words = unusedWords;
				unusedWords = [];
				potentialMatch = null;

				logStatus( "street", "words", words );
				logStatus( "street", "Looking for type." );

				while ( !potentialMatch && words.length ) {
					potentialMatch = streetType.match( words.join( " " ) );
					if ( potentialMatch ) {
						street.type = potentialMatch;
						logStatus( "street", "type", street.type );
					}
					else {
						unusedWords.push( words.shift() );
						logStatus( "street", "unusedWords", unusedWords );
					}
				}
				words = unusedWords;
				unusedWords = [];
				potentialMatch = null;

				logStatus( "street", "words", words );
				logStatus( "street", "Looking for street." );

				street.street = words.join( " " );

				logStatus( "street", "street", street.street );

			}
			else {
				street = null;
			}

			return street;
		},
		type: streetType,
		prefix: streetPrefix,
		suffix: streetSuffix,
		number: streetNumber
	};

} ).call( this );