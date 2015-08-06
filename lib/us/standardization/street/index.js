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
				potentialMatch = streetNumber( words.join( " " ), true );
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
				potentialMatch = unitType.parse( words.join( " " ), true );
				if ( potentialMatch ) {
					street.unit = potentialMatch;
					logStatus( "street", "unit", street.unit );
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
			if ( street.number ) {

				logStatus( "street", "words", words );
				logStatus( "street", "Looking for suffix." );

				while ( !potentialMatch && words.length ) {
					potentialMatch = streetSuffix( words.join( " " ), true );
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
					potentialMatch = streetPrefix( words.join( " " ), true );
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
					potentialMatch = streetType( words.join( " " ), true );
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