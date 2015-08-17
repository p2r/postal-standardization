( function () {
	"use strict";

	var clean = require( "../clean" );
	var country = require( "./country" );
	var zipcode = require( "./zipcode" );
	var state = require( "./statePossessionAbbreviations" );
	var number = require( "./number" );
	var street = require( "./street" );
	var unitType = require( "./unitType" );
	var ruralRoute = require( "./ruralRoute" );
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




	//	Internal DNA location codes
	//		x = Unknown
	//		C = Country
	//		Z = Zip
	//		S = State
	//		R = Rural Route
	//		c = City Name
	//		n = Number
	//		p = Street Prefix
	//		f = Street Suffix
	//		s = Street Name
	//		t = Street Type
	//		u = Unit
	//		U = Unit with value
	//		P = PO Box

	module.exports = function ( addressString, callback ) {

		function processAddress() {

			function parseAddressLines() {

				function getBestLocationString() {

					function removeLocationsWithMatch( propertyRegExp, valueRegExp ) {
						var property, value;
						var propertyMatch;
						var valueMatch;

						for ( property in locationsObj ) {
							if ( locationsObj.hasOwnProperty( property ) ) {
								propertyMatch = propertyRegExp ? false : true;
								valueMatch = valueRegExp ? false : true;

								if ( !propertyMatch && propertyRegExp.test( property ) ) {
									propertyMatch = true;
								}

								if ( propertyMatch && !valueMatch ) {
									value = locationsObj[ property ];

									if ( valueRegExp.test( value ) ) {
										valueMatch = true;
									}
								}

								if ( propertyMatch && valueMatch ) {
									delete locationsObj[ property ];
								}
							}
						}
					}

					function removeLocationsWithoutMatch( propertyRegExp, valueRegExp ) {
						var property, value;
						var propertyMatch;
						var valueMatch;

						for ( property in locationsObj ) {
							if ( locationsObj.hasOwnProperty( property ) ) {
								propertyMatch = propertyRegExp ? true : false;
								valueMatch = valueRegExp ? true : false;

								if ( propertyMatch && !propertyRegExp.test( property ) ) {
									propertyMatch = false;
								}

								if ( !propertyMatch && valueMatch ) {
									value = locationsObj[ property ];

									if ( !valueRegExp.test( value ) ) {
										valueMatch = false;
									}
								}

								if ( !propertyMatch && !valueMatch ) {
									delete locationsObj[ property ];
								}
							}
						}
					}

					function getLocationsWithMatch( propertyRegExp, valueRegExp ) {
						var property, value;
						var properties = null;

						if ( propertyRegExp && !valueRegExp ) {
							return getLocationsWithPropertyMatch( propertyRegExp );
						}
						if ( !propertyRegExp && valueRegExp ) {
							return getLocationsWithValueMatch( valueRegExp );
						}

						for ( property in locationsObj ) {
							if ( locationsObj.hasOwnProperty( property ) ) {
								if ( propertyRegExp.test( property ) ) {
									value = locationsObj[ property ];
									if ( valueRegExp.test( value ) ) {
										if ( !properties ) {
											properties = {};
										}

										properties[ property ] = value;
									}
								}
							}
						}

						return properties;
					}

					function getLocationsWithPropertyMatch( propertyRegExp ) {
						var property;
						var properties = null;

						for ( property in locationsObj ) {
							if ( locationsObj.hasOwnProperty( property ) ) {
								if ( propertyRegExp.test( property ) ) {
									if ( !properties ) {
										properties = {};
									}
									properties[ property ] = locationsObj[ property ];
								}
							}
						}

						return properties;
					}

					function getLocationsWithValueMatch( valueRegExp ) {
						var property, value;
						var properties = null;

						for ( property in locationsObj ) {
							if ( locationsObj.hasOwnProperty( property ) ) {
								value = locationsObj[ property ];
								if ( valueRegExp.test( value ) ) {
									if ( !properties ) {
										properties = {};
									}
									properties[ property ] = value;
								}
							}
						}

						return properties;
					}

					function getLocationScore( location ) {

						function getMarkerScore( marker ) {

							if ( !marker ) {
								return 0;
							}

							switch ( marker ) {
								case "Z":
									return 10;
								case "P":
								case "R":
									return 7;
								case "C":
									return 6;
								case "S":
									return 5;
								case "U":
									return 4;
								case "x":
									return 1;
								case ",":
									return 0;
								default:
									return 2;
							}
						}

						var score = 0;
						var i;
						var locationValue = locationsObj[ location ];
						var length = locationValue ? locationValue.length : 0;

						logStatus( "getMarkerScore", "location", location );
						logStatus( "getMarkerScore", "locationValue", locationValue );

						for ( i = 0; i < length; i++ ) {
							score += getMarkerScore( locationValue[ i ] );
						}

						logStatus( "getMarkerScore", "score", score );

						return score;
					}

					function getHighestLocationScore() {
						var highestScore = 0;
						var score;
						var location;

						for ( location in locationsObj ) {
							if ( locationsObj.hasOwnProperty( location ) ) {
								score = getLocationScore( location );
								logStatus( "getHighestLocationScore", "[" + location + "]:" + locationsObj[ location ] + " = " + score );
								if ( score > highestScore ) {
									highestScore = score;
								}
							}
						}

						return highestScore;
					}

					function removeLocationsWithoutHighestScore() {
						var highestScore = getHighestLocationScore();
						var location, score;

						logStatus( "removeLocationsWithoutHighestScore", "removing those without score of: " + highestScore );

						for ( location in locationsObj ) {
							if ( locationsObj.hasOwnProperty( location ) ) {
								score = getLocationScore( location );
								if ( score !== highestScore ) {
									delete locationsObj[ location ];
								}
							}
						}
					}

					function getLowestLocationUnknowns() {
						var lowestUnknown;
						var count;
						var location;

						for ( location in locationsObj ) {
							if ( locationsObj.hasOwnProperty( location ) ) {
								count = location.match( /x/gi ).length;
								if ( lowestUnknown === undefined || count < lowestUnknown ) {
									lowestUnknown = count;
								}
							}
						}

						return lowestUnknown;
					}

					function removeLocationsWithHigherUnknowns() {
						var lowestUnknown = getLowestLocationUnknowns();
						var location, count;

						for ( location in locationsObj ) {
							if ( locationsObj.hasOwnProperty( location ) ) {
								count = location.match( /x/gi ).length;
								if ( count !== lowestUnknown ) {
									delete locationsObj[ location ];
								}
							}
						}
					}

					var propertyRegExp, valueRegExp;

					if ( Object.keys( locationsObj ).length <= 1 ) {
						return;
					}

					propertyRegExp = /^R*P*U*u*n*p*x*t*f*U*u*P*x*S*Z*C*$/;
					// propertyRegExp = /^(u{0,2}n?p?x+t?f?u{0,2})+x+S?Z?C?$/;
					removeLocationsWithoutMatch( propertyRegExp );
					logStatus( "getBestLocationString", "valid locationsObj", locationsObj );

					//	See if country on its own.
					propertyRegExp = /^C+$/;
					valueRegExp = null;
					if ( getLocationsWithPropertyMatch( propertyRegExp ) ) {
						removeLocationsWithoutMatch( propertyRegExp );

						logStatus( "getBestLocationString", "Found country by its own." );

						if ( Object.keys( locationsObj ).length === 1 ) {
							return;
						}
					}

					//	See if country on its own phrase with zipcode and/or state before it.
					propertyRegExp = /^.*C+$/;
					valueRegExp = null;
					if ( getLocationsWithPropertyMatch( propertyRegExp ) ) {
						logStatus( "getBestLocationString", "Found country at end." );

						valueRegExp = /^.*[SZ]+\,*C+$/;
						if ( getLocationsWithMatch( propertyRegExp, valueRegExp ) ) {
							logStatus( "getBestLocationString", "Found country with zipcode/state before it.");
							removeLocationsWithoutMatch( propertyRegExp, valueRegExp );

							if ( Object.keys( locationsObj ).length === 1 ) {
								return;
							}
						}
						else {
							//	See if the country can be confused with a state (CA, for instance)
							logStatus( "getBestLocationString", "Did not find country with zipcode/state before it.");
							propertyRegExp = /^.*S+$/;
							valueRegExp = null;
							if ( getLocationsWithPropertyMatch( propertyRegExp ) ) {
								logStatus( "getBestLocationString", "Found state at end; removing country only.");
								propertyRegExp = /^.*C+$/;
								valueRegExp = null;
								removeLocationsWithMatch( propertyRegExp );

								if ( Object.keys( locationsObj ).length === 1 ) {
									return;
								}
							}
						}
					}

					//	Remove prefixes at end of phrase.
					propertyRegExp = null;
					valueRegExp = /^.*p+(?:$|\,.*$)/;
					removeLocationsWithMatch( propertyRegExp, valueRegExp );
					if ( Object.keys( locationsObj ).length === 1 ) {
						return;
					}

					//	Remove suffixes at beginning of phrase.
					propertyRegExp = null;
					valueRegExp = /^(?:f+|.*\,f+).*$/;
					removeLocationsWithMatch( propertyRegExp, valueRegExp );
					if ( Object.keys( locationsObj ).length === 1 ) {
						return;
					}

					logStatus( "getBestLocationString", "final locationsObj", locationsObj );

					logStatus( "getBestLocationString", "getHighestLocationScore()", getHighestLocationScore() );
					removeLocationsWithoutHighestScore();
					removeLocationsWithHigherUnknowns();
					logStatus( "getBestLocationString", "Scored locationsObj", locationsObj );

					if ( Object.keys( locationsObj ).length !== 1 ) {
						logStatus( "getBestLocationString", "locationsObj", locationsObj );
					}

					return;
				}

				function generateLocationStrings() {

					function getLocationStrings() {

						function generateMarkerCombinations( arr, i ) {
							var len = markers[ i ].length;
							var j, a;

							for ( j = 0; j < len; j++ ) {
								a = arr.slice( 0 ); // clone arr
								a.push( markers[ i ][ j ] );
								if ( i === max ) {
									locationsArray.push( a );
								}
								else {
									generateMarkerCombinations( a, i + 1 );
								}
							}
						}

						var max = numMarkers - 1;
						var locationsArray = [];
						var numLocations, locationIndex, location;
						var markerIndex, locationMarker;
						var locationKey, locationWords;
						var breakIndex, wordBreak;

						generateMarkerCombinations( [], 0 );

						numLocations = locationsArray.length;
						for ( locationIndex = 0; locationIndex < numLocations; locationIndex++ ) {
							locationWords = "";
							locationKey = "";
							location = locationsArray[ locationIndex ];
							breakIndex = 0;
							wordBreak = breaks[ breakIndex ];

							numMarkers = location.length;
							for ( markerIndex = 0; markerIndex < numMarkers; markerIndex++ ) {
								locationMarker = location[ markerIndex ];

								if ( markerIndex === wordBreak ) {
									locationKey += " ";
									locationWords += " ";
									breakIndex++;
									wordBreak = breaks[ breakIndex ];
								}
								locationKey += locationMarker;
								locationWords += locationMarker;
							}

							//	Split phrase boundaries
							locationKey = locationKey.trim().replace( /\s/g, "," );
							locationWords = locationWords.trim().replace( /\s/g, "," );

							//	Special case
							locationKey = locationKey.replace( /uu/g, "U" );

							//	Remove repeating characters
							locationKey = locationKey.replace( /(.)\1+/g, "$1" );

							//	Remove phrase boundaries
							locationKey = locationKey.replace( /\,/g, "" );

							if ( !locationsObj.hasOwnProperty( locationKey ) ) {
								locationsObj[ locationKey ] = locationWords;
							}
						}
					}

					var breaks = [];
					var numBreaks, lineBreak;
					var line, lineStarts;

					for ( line = 0; line < numLines; line++ ) {
						lineStarts = lineWordStarts[ line ];
						numBreaks = lineStarts.length;
						for ( lineBreak = 0; lineBreak < numBreaks; lineBreak++ ) {
							breaks.push( lineStarts[ lineBreak ] );
						}
					}

					getLocationStrings();
					logStatus( "generateLocationStrings", "locationsObj", locationsObj );
				}

				function addMarker( marker ) {
					var wordIndex = phraseStart + word;
					var wordMarkers = markers[ wordIndex ];

					if ( wordMarkers.indexOf( marker ) === -1 ) {
						markers[ wordIndex ].push( marker );
					}
				}

				var lines, line, numLines, lineString, lineWordStarts, lineStart;
				var phrases, phrase, numPhrases, phraseString, phraseStart;
				var words, word, wordStart, wordEnd, numWords, wordString;
				var markers, marker, numMarkers;
				var locationsObj = {};
				var locationKey, locationValue;
				var unitObj;

				logStatus( "parseAddressLines", "orig addressString", addressString );
				addressString = addressString.replace( /[\'\"\)\(]+/g, "" );
				logStatus( "parseAddressLines", "addressString", addressString );
				numMarkers = addressString.replace( /\s+/g, " " ).trim().split( " " ).length;
				logStatus( "parseAddressLines", "numMarkers", numMarkers );

				markers = new Array( numMarkers );
				for ( marker = 0; marker < numMarkers; marker++ ) {
					markers[ marker ] = [ "x" ];
				}

				//	Build lines from the address (explicit line breaks or tabs).
				if ( addressString && !lines ) {
					lines = addressString.split( /[\n\t]+/ );
				}
				logStatus( "parseAddressLines", "lines", lines );
				numLines = lines.length;
				logStatus( "parseAddressLines", "numLines", numLines );
				lineWordStarts = new Array( numLines );
				lineStart = 0;
				for ( line = 0; line < numLines; line++ ) {
					lineWordStarts[ line ] = [];
					lineWordStarts[ line ].push( lineStart );

					lineString = lines[ line ].replace( /\s+/g, " " ).trim();
					lines[ line ] = lineString;
					lineStart += lineString.split( " " ).length;
				}

				logStatus( "parseAddressLines", "lineWordStarts", lineWordStarts );

				for ( line = 0; line < numLines; line++ ) {
					lineString = lines[ line ];
					logStatus( "parseAddressLines", "lineString", lineString );

					phrases = lineString.split( "," );
					logStatus( "parseAddressLines", "phrases", phrases );
					numPhrases = phrases.length;
					logStatus( "parseAddressLines", "numPhrases", numPhrases );
					phraseStart = lineWordStarts[ line ][ 0 ];
					logStatus( "parseAddressLines", "phraseStart", phraseStart );

					for ( phrase = 0; phrase < numPhrases; phrase++ ) {
						if ( phraseStart !== lineWordStarts[ line ][ 0 ] ) {
							lineWordStarts[ line ].push( phraseStart );
						}
						phraseString = phrases[ phrase ].replace( /\s+/g, " " ).trim();
						logStatus( "parseAddressLines", "phraseString", phraseString );

						words = phraseString.split( " " );
						logStatus( "parseAddressLines", "words", words );
						numWords = words.length;
						logStatus( "parseAddressLines", "numWords", numWords );
						for ( wordStart = 0; wordStart < numWords; wordStart++ ) {
							for ( wordEnd = numWords - 1; wordEnd >= wordStart; wordEnd-- ) {
								logStatus( "parseAddressLines", "wordStart", wordStart );
								logStatus( "parseAddressLines", "wordEnd", wordEnd );
								wordString = "";
								for ( word = wordStart; word <= wordEnd; word++ ) {
									wordString += " " + clean( words[ word ] );
								}
								logStatus( "parseAddressLines", ( lineWordStarts[ line ] + wordStart ) + " - " + ( lineWordStarts[ line ] + wordEnd ) );
								logStatus( "parseAddressLines", "wordString", "'" + wordString.trim() + "'" );

								if ( country( wordString ) ) {
									for ( word = wordStart; word <= wordEnd; word++ ) {
										addMarker( "C" );
										logStatus( "parseAddressLines", "country match", wordString );
									}
								}
								if ( zipcode( wordString ) ) {
									for ( word = wordStart; word <= wordEnd; word++ ) {
										addMarker( "Z" );
										logStatus( "parseAddressLines", "zip match", wordString );
									}
								}
								if ( number.match( wordString ) ) {
									for ( word = wordStart; word <= wordEnd; word++ ) {
										addMarker( "n" );
										logStatus( "parseAddressLines", "number match", wordString );
									}
								}
								if ( ruralRoute.match( wordString ) ) {
									for ( word = wordStart; word <= wordEnd; word++ ) {
										addMarker( "r" );
										logStatus( "parseAddressLines", "route match", wordString );
									}
								}
								if ( state( wordString ) ) {
									for ( word = wordStart; word <= wordEnd; word++ ) {
										addMarker( "S" );
										logStatus( "parseAddressLines", "state match", wordString );
									}
								}
								unitObj = unitType.parse( wordString );
								if ( unitObj ) {
									for ( word = wordStart; word <= wordEnd; word++ ) {
										addMarker( "u" );
										logStatus( "parseAddressLines", "unit match", wordString );
									}
								}
								if ( street.prefix.match( wordString ) ) {
									for ( word = wordStart; word <= wordEnd; word++ ) {
										addMarker( "p" );
										logStatus( "parseAddressLines", "street prefix match", wordString );
									}
								}
								if ( street.suffix.match( wordString ) ) {
									for ( word = wordStart; word <= wordEnd; word++ ) {
										addMarker( "f" );
										logStatus( "parseAddressLines", "street suffix match", wordString );
									}
								}
								if ( street.type.match( wordString ) ) {
									for ( word = wordStart; word <= wordEnd; word++ ) {
										addMarker( "t" );
										logStatus( "parseAddressLines", "street type match", wordString );
									}
								}

							}
						}
						phraseStart += numWords;
					}
				}

				function replaceUnknowns() {
					var matchesRegExp, matches;
					var numx, i;
					var xReplacement;

					matchesRegExp = /(^R?P?u?n?p?)(x+)(t?f?u?P?)(.*)$/;
					if ( matchesRegExp.test( locationValue ) ) {
						matches = locationValue.match( matchesRegExp );
						numx = matches[ 2 ].length;
						xReplacement = "";
						for ( i = 0; i < numx; i++ ) {
							xReplacement += "s";
						}
						locationValue = matches[ 1 ] + xReplacement + matches[ 3 ] + matches[ 4 ];
					}

					matchesRegExp = /(.*?)(x+)(.*)$/;
					if ( matchesRegExp.test( locationValue ) ) {
						matches = locationValue.match( matchesRegExp );
						numx = matches[ 2 ].length;
						xReplacement = "";
						for ( i = 0; i < numx; i++ ) {
							xReplacement += "c";
						}
						locationValue = matches[ 1 ] + xReplacement + matches[ 3 ];
					}

					locationValue = locationValue.replace( /\,/g, "" );
				}

				function generateAddressObject() {
					var phrase = "";
					var type;
					var start, end;
					var wordString = addressString.replace( /[\s\,]+/g, " " ).replace( /\s+/g, " " ).trim();
					var words = wordString.split( " " );
					var numMarkers = locationValue.length;
					var i = 0;
					var index, numWords;
					var unitObj;

					logStatus( "generateAddressObject", "wordString", wordString );

					start = 0;
					end = 0;
					while ( i < numMarkers ) {
						logStatus( "generateAddressObject", "i", i );

						if ( locationValue[ i ] !== locationValue[ i + 1 ] ) {
							type = locationValue[ i ];
							end = i;
							numWords = end - start + 1;
							for ( index = 0; index < numWords; index++ ) {
								phrase += " " + words[ start + index ];
							}
							phrase = clean( phrase );

							logStatus( "generateAddressObject", "phrase", phrase );
							logStatus( "generateAddressObject", "type", type );

							switch ( type ) {
								case "n":
									addressObject.number = number.match( phrase );
									logStatus( "generateAddressObject", "'" + phrase + "' = Number: " + addressObject.number );
									break;
								case "t":
									addressObject.type = street.type.match( phrase );
									logStatus( "generateAddressObject", "'" + phrase + "' = Type: " + addressObject.type );
									break;
								case "p":
									addressObject.prefix = street.prefix.match( phrase );
									logStatus( "generateAddressObject", "'" + phrase + "' = Prefix: " + addressObject.prefix );
									break;
								case "f":
									addressObject.suffix = street.suffix.match( phrase );
									logStatus( "generateAddressObject", "'" + phrase + "' = Suffix: " + addressObject.suffix );
									break;
								case "u":
									unitObj = unitType.parse( phrase );
									if ( unitObj ) {
										logStatus( "generateAddressObject", "unitObj", unitObj );

										if ( unitObj.sec_unit_type ) {
											addressObject.sec_unit_type = unitObj.sec_unit_type;
											logStatus( "generateAddressObject", "'" + phrase + "' = Unit Type: " + addressObject.sec_unit_type );
										}
										if ( unitObj.sec_unit_num ) {
											addressObject.sec_unit_num = unitObj.sec_unit_num;
											logStatus( "generateAddressObject", "'" + phrase + "' = Unit Num: " + addressObject.sec_unit_num );
										}
									}
									break;
								case "s":
									addressObject.street = phrase;
									logStatus( "generateAddressObject", "'" + phrase + "' = Street: " + addressObject.street );
									break;
								case "c":
									addressObject.city = phrase;
									logStatus( "generateAddressObject", "'" + phrase + "' = City: " + addressObject.city );
									break;
								case "C":
									addressObject.country = country( phrase );
									logStatus( "generateAddressObject", "'" + phrase + "' = Country: " + addressObject.country );
									break;
								case "S":
									addressObject.state = state( phrase );
									logStatus( "generateAddressObject", "'" + phrase + "' = State: " + addressObject.state );
									break;
								case "Z":
									addressObject.zip = zipcode( phrase );
									logStatus( "generateAddressObject", "'" + phrase + "' = ZIP: " + addressObject.zip );
									break;
								default:
									logStatus( "generateAddressObject", "'" + phrase + "' = NOT MATCHED: " );
									break;
							}

							start = i + 1;
							end = i + 1;
							phrase = "";
						}

						i++;
					}
				}

				generateLocationStrings();

				getBestLocationString();

				locationKey = Object.keys( locationsObj )[ 0 ];
				locationValue = locationsObj[ locationKey ];
				logStatus( "parseAddressLines", "location[" + locationKey + "] = " + locationValue );

				replaceUnknowns();
				logStatus( "parseAddressLines", locationValue );
				generateAddressObject();

				logStatus( "parseAddressLines", JSON.stringify( addressObject, null, "\t" ) );
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
		logStatus( "parse", "addressString", addressString );

		processAddress();

		callback( null, addressObject );
	};

} ).call( this );