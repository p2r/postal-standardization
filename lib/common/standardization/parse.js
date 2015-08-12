( function () {
	"use strict";

	var country = require( "./country" );
	var zipcode = require( "./zipcode" );
	var state = require( "./statePossessionAbbreviations" );
	var city = require( "./city" );
	var street = require( "./street" );
	var unitType = require( "./unitType" );
	var ruralRoute = require( "./ruralRoute" );
	var clean = require( "../clean" );
	var logStatus = require( "../logStatus" );


	//	23 Delivery Address Line
	//	231 Components
	//
	//	The Delivery Address Line, as matched against the ZIP+4 file, must be broken down into
	//	its individual components on the mailpiece with one space between address elements.
	//
	//	These components are the primary address number, predirectional, street name, suffix,
	//	postdirectional, secondary address indentifier, and secondary address.
	//
	//	The Postal Service uses the parsing logic below to enter address information into the files.
	//	When parsing the Delivery Address Line into the individual components, start from the
	//	right–most element of the address and work toward the left.
	//	Place each element in the appropriate field until all address components are isolated.
	//	This process facilitates matching files with AIS products and produces the correct format
	//	for output to a mailpiece.


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
					logStatus( "clearTokens" );

					if ( !words ) {
						logStatus( "clearTokens", "No words left." );
						words = null;
						part = null;
						if ( !parts ) {
							parts = null;
							line = null;
						}
					}

					rebuildTokens();

					if ( !line ) {
						logStatus( "clearTokens", "No line." );
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
							logStatus( "clearTokens", "line", line );
						}
						else {
							lines = null;
						}
					}

				}

				function resetTokens( startingLine ) {
					logStatus( "resetTokens" );

					if ( startingLine ) {
						logStatus( "resetTokens", "startingLine", startingLine );
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
						logStatus( "resetTokens", "line", line );
						splitLineParts();
						logStatus( "resetTokens", "parts", parts );
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

					logStatus( "rebuildTokens", "words", words );

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

				function parseWordsForState() {
					var stateString;
					var potentialState;

					logStatus( "parseWordsForState" );

					while ( words && words.length && !potentialState ) {
						stateString = getNextPhrase( stateString );
						potentialState = state( stateString );
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
						potentialZipcode = zipcode( zipcodeString, country );
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
						potentialCountry = country( countryString );
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

				function parseWordsForCity( zipcode ) {
					var cityString;
					var potentialCity;

					logStatus( "parseWordsForCity" );

					while ( words && words.length && !potentialCity ) {
						cityString = getNextPhrase( cityString );
						if ( zipcode ) {
							potentialCity = city.match( cityString, zipcode );
						}
						else {
							potentialCity = city.parse( cityString );
						}
					}

					if ( potentialCity ) {
						rebuildTokens();
					}
					else {
						parts.push( part );
					}

					logStatus( "parseWordsForCity", null, potentialCity );

					return potentialCity;
				}

				function splitLineParts() {
					var numParts;
					var thePart;

					parts = line.split( "," );
					numParts = parts.length;
					for ( thePart = 0; thePart < numParts; thePart++ ) {
						parts[ thePart ] = clean( parts[ thePart ] );
					}
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
						logStatus( "getCountry", null, "No line" );
						return;
					}

					if ( addressObject.hasOwnProperty( "country" ) ) {
						logStatus( "getCountry", "Already have country." );
						return;
					}

					startingLine = line;

					potentialCountry = country( line );
					if ( potentialCountry ) {
						logStatus( "getCountry", "potentialCountry", potentialCountry );
						addressObject.country = potentialCountry;
						clearTokens();
						return;
					}

					//	If country is not on its own line, ensure that a zipcode is in front
					//		To prevent states (CA, etc.) from being considered countries.
					splitLineParts();
					part = getNextPart();
					if ( part ) {
						part = clean( part );
						potentialCountry = country( part );
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
						return;
					}

					if ( addressObject.hasOwnProperty( "zip" ) ) {
						logStatus( "getZipcode", "Already have zip code." );
						return;
					}

					potentialZipcode = zipcode( line, addressObject.country );
					if ( potentialZipcode ) {
						logStatus( "getZipCode", "potentialZipcode", potentialZipcode );
						addressObject.zip = potentialZipcode;
						clearTokens();
						return;
					}

					splitLineParts();
					part = getNextPart();
					if ( part ) {
						part = clean( part );
						logStatus( "getZipCode", "part", part );
						potentialZipcode = zipcode( part, addressObject.country );
						if ( potentialZipcode ) {
							logStatus( "getZipCode", "potentialZipcode", potentialZipcode );
							addressObject.zip = potentialZipcode;
							words = [];
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
						logStatus( "getState", null, "No line" );
						return;
					}

					if ( addressObject.hasOwnProperty( "state" ) ) {
						logStatus( "getState", "Already have state." );
						return;
					}

					potentialState = state( line );
					if ( potentialState ) {
						logStatus( "getState", "potentialState", potentialState );
						addressObject.state = potentialState;
						clearTokens();
						return;
					}

					splitLineParts();
					part = getNextPart();
					if ( part ) {
						part = clean( part );
						potentialState = state( part );
						if ( potentialState ) {
							logStatus( "getState", "potentialState", potentialState );
							addressObject.state = potentialState;
							words = [];
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

				function getCityUsingLookup() {
					var potentialCity;

					logStatus( "getCityUsingLookup" );

					if ( !line ) {
						logStatus( "getCityUsingLookup", null, "No line" );
						return;
					}

					if ( addressObject.hasOwnProperty( "city" ) ) {
						logStatus( "getCityUsingLookup", "Already have city." );
						return;
					}

					if ( addressObject.zip ) {
						potentialCity = city.match( line, addressObject.zip );
						if ( potentialCity ) {
							logStatus( "getCityUsingLookup", "potentialCity", potentialCity );
							addressObject.city = potentialCity;
							clearTokens();
							return;
						}

						splitLineParts();
						part = getNextPart();
						if ( part ) {
							part = clean( part );
							potentialCity = city.match( part, addressObject.zip );
							if ( potentialCity ) {
								logStatus( "getCityUsingLookup", "potentialCity", potentialCity );
								addressObject.city = potentialCity;
								words = [];
								clearTokens();
								return;
							}
							else {
								words = splitPartWords();
								potentialCity = parseWordsForCity( addressObject.zip );
								if ( potentialCity ) {
									logStatus( "getCityUsingLookup", "potentialCity", potentialCity );
									addressObject.city = potentialCity;
									clearTokens();
									return;
								}
							}
						}
						//	Return city, etc. to parts array.
						resetTokens();
						delete addressObject.city;
					}

				}

				function getCity() {
					var potentialCity;

					logStatus( "getCity" );

					if ( !line ) {
						logStatus( "getCity", null, "No line" );
						return;
					}

					if ( addressObject.hasOwnProperty( "city" ) ) {
						logStatus( "getCity", "Already have city." );
						return;
					}

					potentialCity = city.parse( line );
					if ( potentialCity ) {
						logStatus( "getCity", "potentialCity", potentialCity );
						addressObject.city = potentialCity;
						clearTokens();
						return;
					}

					splitLineParts();
					part = getNextPart();
					if ( part ) {
						part = clean( part );
						potentialCity = city.parse( part );
						if ( potentialCity ) {
							logStatus( "getCity", "potentialCity", potentialCity );
							addressObject.city = potentialCity;
							words = [];
							clearTokens();
							return;
						}
						else {
							words = splitPartWords();
							potentialCity = parseWordsForCity();
							if ( potentialCity ) {
								logStatus( "getCity", "potentialCity", potentialCity );
								addressObject.city = potentialCity;
								clearTokens();
								return;
							}
						}
					}
					//	Return city, etc. to parts array.
					resetTokens();
					delete addressObject.city;
				}

				function getStreet() {

					function setStreet() {
						if ( potentialStreet.number ) {
							addressObject.number = potentialStreet.number;
						}
						if ( potentialStreet.prefix ) {
							addressObject.prefix = potentialStreet.prefix;
						}
						if ( potentialStreet.street ) {
							addressObject.street = potentialStreet.street;
						}
						if ( potentialStreet.type ) {
							addressObject.type = potentialStreet.type;
						}
						if ( potentialStreet.suffix ) {
							addressObject.suffix = potentialStreet.suffix;
						}
						if ( potentialStreet.sec_unit_type ) {
							addressObject.sec_unit_type = potentialStreet.sec_unit_type;
						}
						if ( potentialStreet.sec_unit_num ) {
							addressObject.sec_unit_num = potentialStreet.sec_unit_num;
						}
					}

					var potentialStreet;

					logStatus( "getStreet", "line", line );

					if ( !line ) {
						logStatus( "getStreet", "No line." );
						return;
					}

					if ( addressObject.hasOwnProperty( "number" ) || addressObject.hasOwnProperty( "street" ) ) {
						logStatus( "getStreet", "Already have street address." );
						return;
					}

					splitLineParts();
					part = getNextPart();
					if ( part ) {
						part = clean( part );
						potentialStreet = street.parse( part );
						if ( potentialStreet ) {
							setStreet();
							words = [];
							clearTokens();
							return;
						}
					}

					//	Return number, etc. to parts array.
					resetTokens();
					delete addressObject.number;
					delete addressObject.prefix;
					delete addressObject.street;
					delete addressObject.type;
					delete addressObject.suffix;
				}

				function getRuralRoute() {
					var potentialRuralRoute;

					logStatus( "getRuralRoute" );

					if ( !line ) {
						logStatus( "getRuralRoute", "No line." );
						return;
					}

					if ( addressObject.hasOwnProperty( "rural_route" ) ) {
						logStatus( "getRuralRoute", "Already have rural route." );
						return;
					}

					logStatus( "getRuralRoute", "line", line );

					potentialRuralRoute = ruralRoute.parse( line );
					if ( potentialRuralRoute ) {
						addressObject.rural_route = potentialRuralRoute;
						clearTokens();
						return;
					}

					splitLineParts();
					part = getNextPart();
					if ( part ) {
						part = clean( part );
						potentialRuralRoute = ruralRoute.parse( part );
						if ( potentialRuralRoute ) {
							addressObject.rural_route = potentialRuralRoute;
							words = [];
							clearTokens();
							return;
						}
					}

					//	Return route, etc. to parts array.
					resetTokens();
					delete addressObject.rural_route;
				}

				function getUnit() {
					var potentialUnit;

					logStatus( "getUnit" );

					if ( !line ) {
						logStatus( "getUnit", "No line." );
						return;
					}

					if ( addressObject.hasOwnProperty( "sec_unit_type" ) || addressObject.hasOwnProperty( "sec_unit_num" ) ) {
						logStatus( "getUnit", "Already have secondary address." );
						return;
					}

					logStatus( "getUnit", "line", line );

					potentialUnit = unitType.parse( line );
					if ( potentialUnit ) {
						if ( potentialUnit.hasOwnProperty( "sec_unit_type" ) ) {
							addressObject.sec_unit_type = potentialUnit.sec_unit_type;
						}
						if ( potentialUnit.hasOwnProperty( "sec_unit_num" ) ) {
							addressObject.sec_unit_num = potentialUnit.sec_unit_num;
						}
						clearTokens();
						return;
					}

					splitLineParts();
					part = getNextPart();
					if ( part ) {
						part = clean( part );
						potentialUnit = unitType.parse( part );
						if ( potentialUnit ) {
							if ( potentialUnit.hasOwnProperty( "sec_unit_type") ) {
								addressObject.sec_unit_type = potentialUnit.sec_unit_type;
							}
							if ( potentialUnit.hasOwnProperty( "sec_unit_num" ) ) {
								addressObject.sec_unit_num = potentialUnit.sec_unit_num;
							}
							words = [];
							clearTokens();
							return;
						}
					}

					//	Return unit, etc. to parts array.
					delete addressObject.sec_unit_type;
					delete addressObject.sec_unit_num;
					resetTokens();
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

				if ( !addressObject.hasOwnProperty( "city" ) && hasMoreToProcess() ) {
					getCityUsingLookup();
				}

				logStatus( null, null, addressObject );

				//	Now, put back whatever is left and look from beginning.
				putBackLine();
				direction = 1;
				resetTokens();
				clearTokens();

				if ( !addressObject.hasOwnProperty( "rural_route" ) && hasMoreToProcess() ) {
					getRuralRoute();
				}

				if ( !addressObject.hasOwnProperty( "sec_unit_type" ) && hasMoreToProcess() ) {
					getUnit();
				}

				if ( !addressObject.hasOwnProperty( "street" ) && hasMoreToProcess() ) {
					getStreet();
				}

				if ( !addressObject.hasOwnProperty( "sec_unit_type" ) && hasMoreToProcess() ) {
					getUnit();
				}

				if ( !addressObject.hasOwnProperty( "city" ) && hasMoreToProcess() ) {
					getCity();
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
		logStatus( "parse", null, addressString );

		processAddress();

		callback( null, addressObject );
	};

} ).call( this );