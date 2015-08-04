( function () {
	"use strict";

	var country = require( "./country" );
	var zipcode = require( "./zipcode" );
	var state = require( "./statePossessionAbbreviations" );
	// var number = require( "./number" );
	var streetNumber = require( "./streetNumber" );
	var clean = require( "../clean" );

	module.exports = function ( addressString, callback ) {

		function logStatus( functionName, propertyName, value ) {
			var logString = "";
			var valueString;
			var displayLogging = false;

			if ( displayLogging ) {
				if ( arguments.length > 0 ) {
					if ( value !== undefined ) {
						if ( typeof value === "object" || Array.isArray( value ) ) {
							valueString = JSON.stringify( value, null, "\t" );
						}
						else {
							valueString = "" + value;
						}
					}

					if ( functionName ) {
						logString += functionName + "()";
						if ( propertyName ) {
							logString += ": ";
						}
						else {
							if ( valueString !== undefined ) {
								logString += " = ";
							}
						}
					}
					if ( propertyName ) {
						logString += propertyName + " = ";
					}
					if ( valueString !== undefined ) {
						logString += valueString;
					}
				}

				console.info( logString );
			}
		}

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
					logStatus( "clearTokens" );

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
					logStatus( "resetTokens" );

					if ( startingLine ) {
						line = startingLine;
					}
					if ( !line ) {
						if ( lines ) {
							if ( direction === -1 ) {
								line = lines.pop();
							}
							else {
								line = lines.shift();
							}
						}
					}
					if ( line ) {
						parts = splitLineParts();
					}
					part = null;
					words = null;
				}

				function putBackLine() {
					logStatus( "putBackLine" );

					if ( line ) {
						lines.push( line );
					}
					line = null;
					parts = null;
					part = null;
					words = null;
				}

				function rebuildTokens() {
					logStatus( "rebuildTokens" );

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

				function getNextPhrase( aggregated ) {
					var nextWord;

					logStatus( "getNextPhrase" );

					if ( direction === -1 ) {
						nextWord = words ? words.pop() : null;

						if ( nextWord ) {
							aggregated = aggregated ? nextWord + " " + aggregated : nextWord;
							aggregated = aggregated.replace( /[\s]+/g, " " );
						}
					}
					else {
						words.pop();
						aggregated = words.join( " " );
					}

					aggregated = clean( aggregated );

					logStatus( "getNextPhrase", null, aggregated );

					return aggregated;
				}

				function getNextPart() {
					var nextPart;

					logStatus( "getNextPart" );

					if ( direction === -1 ) {
						nextPart = parts ? parts.pop() : null;
					}
					else {
						nextPart = parts ? parts.shift() : null;
					}

					logStatus( "getNextPart", null, nextPart );

					return nextPart;
				}

				function parseWordsForStreetNumber() {
					var numberString;
					var potentialNumber;

					logStatus( "parseWordsForStreetNumber" );

					while ( words && words.length && !potentialNumber ) {
						numberString = getNextPhrase();
						potentialNumber = streetNumber( numberString, true );
					}

					if ( potentialNumber ) {
						rebuildTokens();
					}
					else {
						parts.push( part );
					}

					logStatus( "parseWordsForStreetNumber", null, potentialNumber );

					return potentialNumber;
				}

				function parseWordsForState() {
					var stateString;
					var potentialState;

					logStatus( "parseWordsForState" );

					while ( words && words.length && !potentialState ) {
						stateString = getNextPhrase( stateString );
						potentialState = state( stateString, true );
					}

					if ( potentialState ) {
						rebuildTokens();
					}
					else {
						parts.push( part );
					}

					logStatus( "parseWordsForState", null, potentialState );

					return potentialState;
				}

				function parseWordsForZipCode( country ) {
					var zipcodeString;
					var potentialZipcode;

					logStatus( "parseWordsForZipCode" );

					while ( words && words.length && !potentialZipcode ) {
						zipcodeString = getNextPhrase( zipcodeString );
						potentialZipcode = zipcode( zipcodeString, country, true );
					}

					if ( potentialZipcode ) {
						rebuildTokens();
					}
					else {
						parts.push( part );
					}

					logStatus( "parseWordsForZipCode", null, potentialZipcode );

					return potentialZipcode;
				}

				function parseWordsForCountry() {
					var countryString;
					var potentialCountry;

					logStatus( "parseWordsForCountry" );

					while ( words && words.length && !potentialCountry ) {
						countryString = getNextPhrase( countryString );
						potentialCountry = country( countryString, true );
					}

					if ( potentialCountry ) {
						rebuildTokens();
					}
					else {
						parts.push( part );
					}

					logStatus( "parseWordsForCountry", null, potentialCountry );

					return potentialCountry;
				}

				function splitLineParts() {
					return line.split( "," );
				}

				function splitPartWords() {
					return part.split( /[\s]+/ );
				}

				function getCountry() {
					var potentialZipcode;
					var potentialCountry;
					var startingLine;

					logStatus( "getCountry" );

					if ( !line ) {
						delete addressObject.country;
						return;
					}

					startingLine = line;

					potentialCountry = country( line, true );
					if ( potentialCountry ) {
						logStatus( "getCountry", "potentialCountry", potentialCountry );
						addressObject.country = potentialCountry;
						clearTokens();
						return;
					}

					//	If country is not on its own line, ensure that a zipcode is in front
					//		To prevent states (CA, etc.) from being considered countries.
					parts = splitLineParts();
					part = getNextPart();
					if ( part ) {
						part = clean( part );
						potentialCountry = country( part, true );
						if ( potentialCountry ) {
							logStatus( "getCountry", "potentialCountry", potentialCountry );
							part = getNextPart();
							if ( part ) {
								part = clean( part );
								words = splitPartWords();
								potentialZipcode = parseWordsForZipCode( potentialCountry );
								if ( potentialZipcode ) {
									logStatus( "getCountry", "potentialZipcode", potentialZipcode );
									addressObject.zip = potentialZipcode;
									addressObject.country = potentialCountry;
									clearTokens();
									return;
								}
							}
						}
						else {
							words = splitPartWords();
							potentialCountry = parseWordsForCountry();
							if ( potentialCountry ) {
								potentialZipcode = parseWordsForZipCode( potentialCountry );
								if ( potentialZipcode ) {
									logStatus( "getCountry", "potentialZipcode", potentialZipcode );
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
					delete addressObject.country;
				}

				function getZipcode() {
					var potentialZipcode;

					logStatus( "getZipCode" );

					if ( !line ) {
						logStatus( "getZipCode", null, "No line" );
						delete addressObject.zip;
						return;
					}

					potentialZipcode = zipcode( line, addressObject.country, true );
					if ( potentialZipcode ) {
						logStatus( "getZipCode", "potentialZipcode", potentialZipcode );
						addressObject.zip = potentialZipcode;
						clearTokens();
						return;
					}

					parts = splitLineParts();
					part = getNextPart();
					if ( part ) {
						part = clean( part );
						logStatus( "getZipCode", "part", part );
						potentialZipcode = zipcode( part, addressObject.country, true );
						if ( potentialZipcode ) {
							logStatus( "getZipCode", "potentialZipcode", potentialZipcode );
							addressObject.zip = potentialZipcode;
							clearTokens();
							return;
						}
						else {
							words = splitPartWords();
							potentialZipcode = parseWordsForZipCode( addressObject.country );
							if ( potentialZipcode ) {
								logStatus( "getZipCode", "potentialZipcode", potentialZipcode );
								addressObject.zip = potentialZipcode;
								clearTokens();
								return;
							}
						}
					}
					//	Return zipcode, etc. to parts array.
					resetTokens();
					delete addressObject.zip;
				}

				function getState() {
					var potentialState;

					logStatus( "getState" );

					if ( !line ) {
						delete addressObject.state;
						return;
					}

					potentialState = state( line, true );
					if ( potentialState ) {
						logStatus( "getState", "potentialState", potentialState );
						addressObject.state = potentialState;
						clearTokens();
						return;
					}

					parts = splitLineParts();
					part = getNextPart();
					if ( part ) {
						part = clean( part );
						potentialState = state( part, true );
						if ( potentialState ) {
							logStatus( "getState", "potentialState", potentialState );
							addressObject.state = potentialState;
							clearTokens();
							return;
						}
						else {
							words = splitPartWords();
							potentialState = parseWordsForState();
							if ( potentialState ) {
								logStatus( "getState", "potentialState", potentialState );
								addressObject.state = potentialState;
								clearTokens();
								return;
							}
						}
					}
					//	Return state, etc. to parts array.
					resetTokens();
					delete addressObject.state;
				}

				function getStreetNumber() {
					var potentialNumber;

					if ( !line ) {
						delete addressObject.number;
						return;
					}

					potentialNumber = streetNumber( line, true );
					if ( potentialNumber ) {
						addressObject.number = potentialNumber;
						clearTokens();
						return;
					}

					parts = splitLineParts();
					part = getNextPart();
					if ( part ) {
						part = clean( part );
						potentialNumber = streetNumber( part, true );
						if ( potentialNumber ) {
							addressObject.number = potentialNumber;
							clearTokens();
							return;
						}
						else {
							words = splitPartWords();
							potentialNumber = parseWordsForStreetNumber();
							if ( potentialNumber ) {
								addressObject.number = potentialNumber;
								clearTokens();
								return;
							}
						}
					}
					//	Return number, etc. to parts array.
					resetTokens();
					delete addressObject.number;
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
				if ( !addressObject.hasOwnProperty( "country" ) && !addressObject.hasOwnProperty(
						"zip" ) && hasMoreToProcess() ) {
					getCountry();
				}
				if ( !addressObject.hasOwnProperty( "zip" ) && hasMoreToProcess() ) {
					getZipcode();
				}
				if ( !addressObject.hasOwnProperty( "state" ) && hasMoreToProcess() ) {
					getState();
				}

				logStatus( null, null, addressObject );

				//	Now, put back whatever is left and look from beginning.
				putBackLine();
				direction = 1;
				resetTokens();

				if ( !addressObject.hasOwnProperty( "number" ) && hasMoreToProcess() ) {
					getStreetNumber();
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
		logStatus();
		logStatus( "newParse", null, addressString );

		processAddress();

		callback( null, addressObject );
	};

} ).call( this );