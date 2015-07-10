( function () {
	"use strict";

	var country = require( "./country" );
	var zipcode = require( "./zipcode" );
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

				function resetTokens() {
					if ( !words ) {
						console.info( "resetTokens(): No words." );
						words = null;
						part = null;
						if ( !parts ) {
							console.info( "resetTokens(): No parts." );
							parts = null;
							line = null;
						}
					}

					if ( !line ) {
						if ( lines && lines.length ) {
							console.info( "resetTokens(): Getting next line." );
							line = lines.pop();
							if ( line ) {
								line = clean( line );
							}
							console.info( "resetTokens(): line = '" + line + "'" );
						}
						else {
							console.info( "resetTokens(): No lines." );
							lines = null;
						}
					}

					console.info( "addressObject = " + JSON.stringify( addressObject, null, "\t" ) );
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

				function parseWordsForZipCode( country ) {
					var zipcodeString;
					var potentialZipcode;

					while ( words && words.length && !potentialZipcode ) {
						zipcodeString = getNextWord( zipcodeString );
						console.info( "Checking for zipcode: '" + zipcodeString + "'" );
						potentialZipcode = zipcode( zipcodeString, country, true );
					}

					if ( !potentialZipcode ) {
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

					if ( !potentialCountry ) {
						console.info( "Country not found returning: '" + part + "'" );
						parts.push( part );
					}

					return potentialCountry;
				}

				function getCountry() {
					var potentialZip;
					var potentialCountry;

					console.info( "getCountry()" );

					if ( !line ) {
						console.info( "getCountry() - no line to process." );
						addressObject.country = null;
						return;
					}

					potentialCountry = country( line, true );
					if ( potentialCountry ) {
						console.info( "Found country on own line: '" + potentialCountry + "'" );
						addressObject.country = potentialCountry;
						resetTokens();
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
								potentialZip = parseWordsForZipCode( potentialCountry );
								if ( potentialZip ) {
									console.info( "zipcode: '" + potentialZip + "'" );
									console.info( "country: '" + potentialCountry + "'" );
									addressObject.zip = potentialZip;
									addressObject.country = potentialCountry;
									resetTokens();
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
								potentialZip = parseWordsForZipCode( potentialCountry );
								if ( potentialZip ) {
									console.info( "zipcode: '" + potentialZip + "'" );
									console.info( "country: '" + potentialCountry + "'" );
									addressObject.zip = potentialZip;
									addressObject.country = potentialCountry;
									resetTokens();
									return;
								}
							}
						}
					}
					//	Return country, etc. to parts array.
					parts = line.split( "," );
					words = null;
					addressObject.country = null;
				}

				function getZipcode() {
					var potentialZip;

					console.info( "getZipcode()" );

					if ( !line ) {
						console.info( "getZipcode() - no line." );
						addressObject.zip = null;
						return;
					}

					console.info( "getZipcode() line: '" + line + "'" );

					potentialZip = zipcode( line, addressObject.country, true );
					if ( potentialZip ) {
						console.info( "Found zipcode on own line: '" + potentialZip + "'" );
						addressObject.zip = potentialZip;
						resetTokens();
						return;
					}

					parts = line.split( "," );
					part = getNextPart();
					if ( part ) {
						part = clean( part );
						console.info( "Part: '" + part + "'" );
						potentialZip = zipcode( part, addressObject.country, true );
						if ( potentialZip ) {
							console.info( "zipcode: '" + potentialZip + "'" );
							addressObject.zip = potentialZip;
							resetTokens();
							return;
						}
						else {
							console.info( "Part is not potential zipcode: '" + part + "'" );
							words = part.split( /[\s]+/ );
							potentialZip = parseWordsForZipCode( addressObject.country );
							if ( potentialZip ) {
								console.info( "zipcode: '" + potentialZip + "'" );
								addressObject.zip = potentialZip;
								resetTokens();
								return;
							}
						}
					}
					//	Return zipcode, etc. to parts array.
					parts = line.split( "," );
					words = null;
					addressObject.zip = null;
				}

				var lines, line;
				var parts, part;
				var words;

				console.info( "Parsing '" + addressString + "'" );

				if ( addressString && !lines ) {
					lines = addressString.split( /[\n\t]+/ );
					console.info( "Lines: " + JSON.stringify( lines, null, "\t" ) );
				}

				resetTokens();

				console.info( "addressObject = " + JSON.stringify( addressObject, null, "\t" ) );

				if ( !addressObject.hasOwnProperty( "country" ) && !addressObject.hasOwnProperty( "zip" ) && hasMoreToProcess() ) {
					getCountry();
				}
				if ( !addressObject.hasOwnProperty( "zip" ) && hasMoreToProcess() ) {
					getZipcode();
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