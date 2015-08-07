( function () {
	"use strict";

	//	Get zipcodes into JSON array (from file or paste here).
	var zipcodes = [];

	var zipLookup = {};
	var zipObj, newZipObj;
	var i, numZipCodes;
	var zip;

	numZipCodes = zipcodes.length;
	for ( i = 0; i < numZipCodes; i++ ) {
		zipObj = zipcodes[ i ];
		zip = zipObj.zip;
		if ( zip < 1000 ) {
			zip = "00" + zip;
		}
		else {
			if ( zip < 10000 ) {
				zip = "0" + zip;
			}
			else {
				zip = "" + zip;
			}
		}
		newZipObj = {
			type: zipObj.type.toUpperCase(),
			city: zipObj.primary_city.toUpperCase(),
			cities: zipObj.acceptable_cities ? zipObj.acceptable_cities.toUpperCase().split( ", " ) : [],
			state: zipObj.state.toUpperCase(),
			country: zipObj.country.toUpperCase(),
		};

		zipLookup[ zip ] = newZipObj;
	}

	console.info( JSON.stringify( zipLookup, null, "\t" ) );

} ).call( this );