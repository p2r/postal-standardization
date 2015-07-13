( function () {
	"use strict";

	var country = require( "./country" );
	var zipcode = require( "./zipcode" );
	var state = require( "./statePossessionAbbreviations" );
	var clean = require( "../clean" );

	module.exports = function ( addressString, callback ) {

		function processAddress() {

			function parseAddressLines() {

				function hasMoreToProcess() {
					if ( words && words.length ) {
						console.info( "hasMoreToProcess(): words exist." );
						return true;
					}

					if ( parts && parts.length ) {
						console.info( "hasMoreToProcess(): parts exist." );
						return true;
					}

					if ( line ) {
						console.info( "hasMoreToProcess(): line exists." );
						return true;
					}

					if ( lines && lines.length ) {
						console.info( "hasMoreToProcess(): lines exist." );
						return true;
					}

					console.info( "hasMoreToProcess(): Nothing more." );
					return false;
				}

				function clearTokens() {
					if ( !words ) {
						console.info( "clearTokens(): No words." );
						words = null;
						part = null;
						if ( !parts ) {
							console.info( "clearTokens(): No parts." );
							parts = null;
							line = null;
						}
					}

					rebuildTokens();

					if ( !line ) {
						if ( lines && lines.length ) {
							console.info( "clearTokens(): Getting next line." );
							line = lines.pop();
							if ( line ) {
								line = clean( line );
							}
							console.info( "clearTokens(): line = " + ( line ? "'" + line + "'" : null ) );
						}
						else {
							console.info( "clearTokens(): No lines." );
							lines = null;
						}
					}

					console.info( "addressObject = " + JSON.stringify( addressObject, null, "\t" ) );
				}

				function resetTokens( startingLine ) {
					if ( startingLine ) {
						line = startingLine;
					}
					parts = line.split( "," );
					part = null;
					words = null;
					console.info( "resetTokens(): " + JSON.stringify( parts, null, "\t" ) );
				}

				function rebuildTokens() {
					if ( words ) {
						console.info( "rebuildTokens(): Words..." );
						part = words.join( " " );
						console.info( "rebuildTokens(): part = '" + part + "'." );
						if ( parts && parts.length > 0 ) {
							line = parts.join( ", " );
							console.info( "rebuildTokens(): line joined = '" + line + "'." );
							if ( part ) {
								line = line + ", " + part;
							}
						}
						else {
							line = part;
						}
						console.info( "rebuildTokens(): line = '" + line + "'." );
					}
					else {
						console.info( "rebuildTokens(): No words." );
						part = null;
						if ( parts ) {
							line = parts.join( ", " );
						}
						console.info( "rebuildTokens(): line = '" + line + "'." );
					}
				}

				function getNextWord( aggregated ) {
					var nextWord = words ? words.pop() : null;

					if ( !nextWord ) {
						return aggregated;
					}

					aggregated = aggregated ? nextWord + " " + aggregated : nextWord;
					aggregated = aggregated.replace( /[\s]+/g, " " );

					aggregated = clean( aggregated );
					console.info( "Aggregated = '" + aggregated + "'" );
					return aggregated;
				}

				function getNextPart() {
					var nextPart = parts ? parts.pop() : null;

					return nextPart;
				}

				function parseWordsForState() {
					var stateString;
					var potentialState;

					while ( words && words.length && !potentialState ) {
						stateString = getNextWord( stateString );
						console.info( "Checking for state: '" + stateString + "'" );
						potentialState = state( stateString, true );
					}

					if ( potentialState ) {
						rebuildTokens();
					}
					else {
						console.info( "State not found returning: '" + part + "'" );
						parts.push( part );
					}

					return potentialState;
				}

				function parseWordsForZipCode( country ) {
					var zipcodeString;
					var potentialZipcode;

					while ( words && words.length && !potentialZipcode ) {
						zipcodeString = getNextWord( zipcodeString );
						console.info( "Checking for zipcode: '" + zipcodeString + "'" );
						potentialZipcode = zipcode( zipcodeString, country, true );
					}

					if ( potentialZipcode ) {
						rebuildTokens();
					}
					else {
						console.info( "Zipcode not found returning: '" + part + "'" );
						parts.push( part );
					}

					return potentialZipcode;
				}

				function parseWordsForCountry() {
					var countryString;
					var potentialCountry;

					while ( words && words.length && !potentialCountry ) {
						countryString = getNextWord( countryString );
						console.info( "Checking for country: '" + countryString + "'" );
						potentialCountry = country( countryString, true );
					}

					if ( potentialCountry ) {
						rebuildTokens();
					}
					else {
						console.info( "Country not found returning: '" + part + "'" );
						parts.push( part );
					}

					return potentialCountry;
				}

				function getCountry() {
					var potentialZipcode;
					var potentialCountry;
					var startingLine;

					console.info( "getCountry()" );

					if ( !line ) {
						console.info( "getCountry() - no line to process." );
						addressObject.country = null;
						return;
					}

					startingLine = line;

					potentialCountry = country( line, true );
					if ( potentialCountry ) {
						console.info( "Found country on own line: '" + potentialCountry + "'" );
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
						console.info( "Part: '" + part + "'" );
						potentialCountry = country( part, true );
						if ( potentialCountry ) {
							console.info( "Potential country: '" + potentialCountry + "'" );
							part = getNextPart();
							if ( part ) {
								part = clean( part );
								console.info( "Checking for zipcode: '" + part + "'" );
								words = part.split( /[\s]+/ );
								potentialZipcode = parseWordsForZipCode( potentialCountry );
								if ( potentialZipcode ) {
									console.info( "zipcode: '" + potentialZipcode + "'" );
									console.info( "country: '" + potentialCountry + "'" );
									addressObject.zip = potentialZipcode;
									addressObject.country = potentialCountry;
									clearTokens();
									return;
								}
							}
						}
						else {
							console.info( "Part is not potential country: '" + part + "'" );
							words = part.split( /[\s]+/ );
							potentialCountry = parseWordsForCountry();
							if ( potentialCountry ) {
								console.info( "Potential country: '" + potentialCountry + "'" );
								potentialZipcode = parseWordsForZipCode( potentialCountry );
								if ( potentialZipcode ) {
									console.info( "zipcode: '" + potentialZipcode + "'" );
									console.info( "country: '" + potentialCountry + "'" );
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

					console.info( "getZipcode()" );

					if ( !line ) {
						console.info( "getZipcode() - no line." );
						addressObject.zip = null;
						return;
					}

					console.info( "getZipcode() line: '" + line + "'" );

					potentialZipcode = zipcode( line, addressObject.country, true );
					if ( potentialZipcode ) {
						console.info( "Found zipcode on own line: '" + potentialZipcode + "'" );
						addressObject.zip = potentialZipcode;
						clearTokens();
						return;
					}

					parts = line.split( "," );
					part = getNextPart();
					if ( part ) {
						part = clean( part );
						console.info( "Part: '" + part + "'" );
						potentialZipcode = zipcode( part, addressObject.country, true );
						if ( potentialZipcode ) {
							console.info( "zipcode: '" + potentialZipcode + "'" );
							addressObject.zip = potentialZipcode;
							clearTokens();
							return;
						}
						else {
							console.info( "Part is not potential zipcode: '" + part + "'" );
							words = part.split( /[\s]+/ );
							potentialZipcode = parseWordsForZipCode( addressObject.country );
							if ( potentialZipcode ) {
								console.info( "zipcode: '" + potentialZipcode + "'" );
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

					console.info( "getState()" );

					if ( !line ) {
						console.info( "getState() - no line." );
						addressObject.state = null;
						return;
					}

					console.info( "getState() line: '" + line + "'" );

					potentialState = state( line, true );
					if ( potentialState ) {
						console.info( "Found state on own line: '" + potentialState + "'" );
						addressObject.state = potentialState;
						clearTokens();
						return;
					}

					parts = line.split( "," );
					part = getNextPart();
					if ( part ) {
						part = clean( part );
						console.info( "Part: '" + part + "'" );
						potentialState = state( part, true );
						if ( potentialState ) {
							console.info( "state: '" + potentialState + "'" );
							addressObject.state = potentialState;
							clearTokens();
							return;
						}
						else {
							console.info( "Part is not potential state: '" + part + "'" );
							words = part.split( /[\s]+/ );
							potentialState = parseWordsForState();
							if ( potentialState ) {
								console.info( "state: '" + potentialState + "'" );
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

				var lines, line;
				var parts, part;
				var words;

				console.info( "Parsing '" + addressString + "'" );

				if ( addressString && !lines ) {
					lines = addressString.split( /[\n\t]+/ );
					console.info( "Lines: " + JSON.stringify( lines, null, "\t" ) );
				}

				clearTokens();

				console.info( "addressObject = " + JSON.stringify( addressObject, null, "\t" ) );

				if ( !addressObject.hasOwnProperty( "country" ) && !addressObject.hasOwnProperty( "zip" ) && hasMoreToProcess() ) {
					getCountry();
				}
				if ( !addressObject.hasOwnProperty( "zip" ) && hasMoreToProcess() ) {
					getZipcode();
				}
				if ( !addressObject.hasOwnProperty( "state" ) && hasMoreToProcess() ) {
					getState();
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