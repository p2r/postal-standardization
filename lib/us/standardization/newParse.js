( function () {
	"use strict";

	var country = require( "./country" );
	var zipcode = require( "./zipcode" );
	var clean = require( "../clean" );

	module.exports = function ( addressString, callback ) {

		function parseAddressLines() {

			function processAddressLine() {

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
					var potentialCountry = country( clean( line ), true );
					if ( potentialCountry ) {
						console.info( "Found country on own line: '" + potentialCountry + "'" );
						addressObject.country = potentialCountry;
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

				if ( !addressObject.country && !addressObject.zip ) {
					getCountry();
				}

			}

			var line;
			var parts, part;
			var words;
			var property;

			if ( addressString && !lines ) {
				lines = addressString.split( /[\n\t]+/ );
			}

			line = lines.pop();
			if ( line ) {
				processAddressLine();
			}

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
		var lines;

		parseAddressLines();

		callback( null, addressObject );
	};

} ).call( this );