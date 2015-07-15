( function () {
	"use strict";

	var country = require( "./country" );
	var zipcode = require( "./zipcode" );
	var state = require( "./statePossessionAbbreviations" );
	var number = require( "./number" );
	var clean = require( "../clean" );

	module.exports = function ( addressString, callback ) {

		function processAddress() {

			function parseAddressLines() {

				function hasMoreToProcess() {
					if ( words && words.length ) {
						return true;
					}

					if ( parts && parts.length ) {
						return true;
					}

					if ( line ) {
						return true;
					}

					if ( lines && lines.length ) {
						return true;
					}

					return false;
				}

				function clearTokens() {
					if ( !words ) {
						words = null;
						part = null;
						if ( !parts ) {
							parts = null;
							line = null;
						}
					}

					rebuildTokens();

					if ( !line ) {
						if ( lines && lines.length ) {
							if ( direction === -1 ) {
								line = lines.pop();
							}
							else {
								line = lines.shift();
							}
							if ( line ) {
								line = clean( line );
							}
						}
						else {
							lines = null;
						}
					}

				}

				function resetTokens( startingLine ) {
					if ( startingLine ) {
						line = startingLine;
					}
					parts = line.split( "," );
					part = null;
					words = null;
				}

				function putBackLine() {
					if ( line ) {
						lines.push( line );
					}
					line = null;
					parts = null;
					part = null;
					words = null;
				}

				function rebuildTokens() {
					if ( words ) {
						part = words.join( " " );
						if ( parts && parts.length > 0 ) {
							line = parts.join( ", " );
							if ( part ) {
								line = line + ", " + part;
							}
						}
						else {
							line = part;
						}
					}
					else {
						part = null;
						if ( parts ) {
							line = parts.join( ", " );
						}
					}
				}

				function getNextWord( aggregated ) {
					var nextWord;

					if ( direction === -1 ) {
						nextWord = words ? words.pop() : null;
					}
					else {
						nextWord = words ? words.shift() : null;
					}

					if ( !nextWord ) {
						return aggregated;
					}

					aggregated = aggregated ? nextWord + " " + aggregated : nextWord;
					aggregated = aggregated.replace( /[\s]+/g, " " );

					aggregated = clean( aggregated );
					return aggregated;
				}

				function getNextPart() {
					var nextPart;

					if ( direction === -1 ) {
						nextPart = parts ? parts.pop() : null;
					}
					else {
						nextPart = parts ? parts.shift() : null;
					}

					return nextPart;
				}

				function parseWordsForState() {
					var stateString;
					var potentialState;

					while ( words && words.length && !potentialState ) {
						stateString = getNextWord( stateString );
						potentialState = state( stateString, true );
					}

					if ( potentialState ) {
						rebuildTokens();
					}
					else {
						parts.push( part );
					}

					return potentialState;
				}

				function parseWordsForZipCode( country ) {
					var zipcodeString;
					var potentialZipcode;

					while ( words && words.length && !potentialZipcode ) {
						zipcodeString = getNextWord( zipcodeString );
						potentialZipcode = zipcode( zipcodeString, country, true );
					}

					if ( potentialZipcode ) {
						rebuildTokens();
					}
					else {
						parts.push( part );
					}

					return potentialZipcode;
				}

				function parseWordsForCountry() {
					var countryString;
					var potentialCountry;

					while ( words && words.length && !potentialCountry ) {
						countryString = getNextWord( countryString );
						potentialCountry = country( countryString, true );
					}

					if ( potentialCountry ) {
						rebuildTokens();
					}
					else {
						parts.push( part );
					}

					return potentialCountry;
				}

				function getCountry() {
					var potentialZipcode;
					var potentialCountry;
					var startingLine;


					if ( !line ) {
						addressObject.country = null;
						return;
					}

					startingLine = line;

					potentialCountry = country( line, true );
					if ( potentialCountry ) {
						addressObject.country = potentialCountry;
						clearTokens();
						return;
					}

					//	If country is not on its own line, ensure that a zipcode is in front
					//		(to prevent states being considered countries)
					parts = line.split( "," );
					part = getNextPart();
					if ( part ) {
						part = clean( part );
						potentialCountry = country( part, true );
						if ( potentialCountry ) {
							part = getNextPart();
							if ( part ) {
								part = clean( part );
								words = part.split( /[\s]+/ );
								potentialZipcode = parseWordsForZipCode( potentialCountry );
								if ( potentialZipcode ) {
									addressObject.zip = potentialZipcode;
									addressObject.country = potentialCountry;
									clearTokens();
									return;
								}
							}
						}
						else {
							words = part.split( /[\s]+/ );
							potentialCountry = parseWordsForCountry();
							if ( potentialCountry ) {
								potentialZipcode = parseWordsForZipCode( potentialCountry );
								if ( potentialZipcode ) {
									addressObject.zip = potentialZipcode;
									addressObject.country = potentialCountry;
									clearTokens();
									return;
								}
							}
						}
					}
					//	Return country, etc. to parts array.
					resetTokens( startingLine );
					addressObject.country = null;
				}

				function getZipcode() {
					var potentialZipcode;

					if ( !line ) {
						addressObject.zip = null;
						return;
					}

					potentialZipcode = zipcode( line, addressObject.country, true );
					if ( potentialZipcode ) {
						addressObject.zip = potentialZipcode;
						clearTokens();
						return;
					}

					parts = line.split( "," );
					part = getNextPart();
					if ( part ) {
						part = clean( part );
						potentialZipcode = zipcode( part, addressObject.country, true );
						if ( potentialZipcode ) {
							addressObject.zip = potentialZipcode;
							clearTokens();
							return;
						}
						else {
							words = part.split( /[\s]+/ );
							potentialZipcode = parseWordsForZipCode( addressObject.country );
							if ( potentialZipcode ) {
								addressObject.zip = potentialZipcode;
								clearTokens();
								return;
							}
						}
					}
					//	Return zipcode, etc. to parts array.
					resetTokens();
					addressObject.zip = null;
				}

				function getState() {
					var potentialState;

					if ( !line ) {
						addressObject.state = null;
						return;
					}

					potentialState = state( line, true );
					if ( potentialState ) {
						addressObject.state = potentialState;
						clearTokens();
						return;
					}

					parts = line.split( "," );
					part = getNextPart();
					if ( part ) {
						part = clean( part );
						potentialState = state( part, true );
						if ( potentialState ) {
							addressObject.state = potentialState;
							clearTokens();
							return;
						}
						else {
							words = part.split( /[\s]+/ );
							potentialState = parseWordsForState();
							if ( potentialState ) {
								addressObject.state = potentialState;
								clearTokens();
								return;
							}
						}
					}
					//	Return state, etc. to parts array.
					resetTokens();
					addressObject.state = null;
				}

				function getNumber() {
					var potentialNumber;

					if ( !line ) {
						addressObject.number = null;
						return;
					}

					potentialNumber = number( line, true );
					if ( potentialNumber ) {
						addressObject.number = potentialNumber;
						clearTokens();
						return;
					}

					parts = line.split( "," );
					part = getNextPart();
					if ( part ) {
						part = clean( part );
						potentialNumber = state( part, true );
						if ( potentialNumber ) {
							addressObject.state = potentialNumber;
							clearTokens();
							return;
						}
						else {
							words = part.split( /[\s]+/ );
							potentialNumber = parseWordsForState();
							if ( potentialNumber ) {
								addressObject.state = potentialNumber;
								clearTokens();
								return;
							}
						}
					}
					//	Return state, etc. to parts array.
					resetTokens();
					addressObject.state = null;
				}

				var direction = -1;
				var lines, line;
				var parts, part;
				var words;


				if ( addressString && !lines ) {
					lines = addressString.split( /[\n\t]+/ );
				}

				clearTokens();


				//	Starting from the end, first.
				if ( !addressObject.hasOwnProperty( "country" ) && !addressObject.hasOwnProperty( "zip" ) && hasMoreToProcess() ) {
					getCountry();
				}
				if ( !addressObject.hasOwnProperty( "zip" ) && hasMoreToProcess() ) {
					getZipcode();
				}
				if ( !addressObject.hasOwnProperty( "state" ) && hasMoreToProcess() ) {
					getState();
				}


				//	Now, put back whatever is left and look from beginning.
				putBackLine();
				direction = 1;

				if ( !addressObject.hasOwnProperty( "number" ) && hasMoreToProcess() ) {
					getNumber();
				}
			}

			var property;

			parseAddressLines();

			//	Cleanup
			for ( property in addressObject ) {
				if ( addressObject.hasOwnProperty( property ) ) {
					if ( addressObject[ property ] === null ) {
						delete addressObject[ property ];
					}
				}
			}
		}

		var addressObject = {};

		processAddress();

		callback( null, addressObject );
	};

} ).call( this );