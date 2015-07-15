"use strict";

/* global describe, it */

var should = require( "should" );

var Postal = require( "../../../lib" ).USPostal;

describe( "New Parse Address:", function () {

	var postal = new Postal();

	function verifyAddress( addressString, addressObject ) {
		postal.standardization.newParseAddress( addressString, function ( err, result ) {
			should.not.exist( err );
			should.exist( result );
			result.should.eql( addressObject );
		} );
	}

	it( "United States", function () {

		var addressString = "United States";
		var addressObject = {
			country: "UNITED STATES"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "US", function () {

		var addressString = "US";
		var addressObject = {
			country: "UNITED STATES"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "U.S.", function () {

		var addressString = "U.S.";
		var addressObject = {
			country: "UNITED STATES"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Some Address\\nUnited States", function () {

		var addressString = "Some Address\nUnited States";
		var addressObject = {
			country: "UNITED STATES"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Some Address 80023\\nUnited States", function () {

		var addressString = "Some Address 80023\nUnited States";
		var addressObject = {
			zip: "80023",
			country: "UNITED STATES"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Some Address, United States", function () {

		var addressString = "Some Address, United States";
		var addressObject = {};

		verifyAddress( addressString, addressObject );
	} );

	it( "Some Address, US", function () {

		var addressString = "Some Address, US";
		var addressObject = {};

		verifyAddress( addressString, addressObject );
	} );

	it( "Some Address, U.S.A.", function () {

		var addressString = "Some Address, U.S.A.";
		var addressObject = {};

		verifyAddress( addressString, addressObject );
	} );

	it( "Canada", function () {

		var addressString = "Canada";
		var addressObject = {
			country: "CANADA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Cañada", function () {

		var addressString = "Cañada";
		var addressObject = {
			country: "CANADA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Some Address\\nCA", function () {

		var addressString = "Some Address\nCA";
		var addressObject = {
			country: "CANADA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Some Address, CA", function () {

		var addressString = "Some Address, CA";
		var addressObject = {
			state: "CA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Montreal, QC, H3Z 2Y7 CA", function () {

		var addressString = "Montreal, QC, H3Z 2Y7 CA";
		var addressObject = {
			zip: "H3Z 2Y7",
			country: "CANADA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Montreal, QC, H3Z 2Y7, CA", function () {

		var addressString = "Montreal, QC, H3Z 2Y7, CA";
		var addressObject = {
			zip: "H3Z 2Y7",
			country: "CANADA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Montreal, QC, H3Z 2Y7\\nCA", function () {

		var addressString = "Montreal, QC, H3Z 2Y7\nCA";
		var addressObject = {
			zip: "H3Z 2Y7",
			country: "CANADA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Montreal, QC H3Z 2Y7\\nCA", function () {

		var addressString = "Montreal, QC H3Z 2Y7\nCA";
		var addressObject = {
			zip: "H3Z 2Y7",
			country: "CANADA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Some Address\\nCanada", function () {

		var addressString = "Some Address\nCanada";
		var addressObject = {
			country: "CANADA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Some Address, Canada", function () {

		var addressString = "Some Address, Canada";
		var addressObject = {};

		verifyAddress( addressString, addressObject );
	} );

	it( "Montreal, QC, H3Z 2Y7 Canada", function () {

		var addressString = "Montreal, QC, H3Z 2Y7 Canada";
		var addressObject = {
			zip: "H3Z 2Y7",
			country: "CANADA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Montreal, QC, H3Z 2Y7, Canada", function () {

		var addressString = "Montreal, QC, H3Z 2Y7, Canada";
		var addressObject = {
			zip: "H3Z 2Y7",
			country: "CANADA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Montreal, QC, H3Z 2Y7\\nCanada", function () {

		var addressString = "Montreal, QC, H3Z 2Y7\nCanada";
		var addressObject = {
			zip: "H3Z 2Y7",
			country: "CANADA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Montreal, QC H3Z 2Y7\\nCanada", function () {

		var addressString = "Montreal, QC H3Z 2Y7\nCanada";
		var addressObject = {
			zip: "H3Z 2Y7",
			country: "CANADA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Some Address\\nBénin", function () {

		var addressString = "Some Address\nBénin";
		var addressObject = {
			country: "BENIN"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Street Type Zipcode", function () {

		var addressString = "1005 Gravenstein Hwy 95472";
		var addressObject = {
			// number: "1005",
			// street: "GRAVENSTEIN",
			// type: "HWY",
			zip: "95472"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Street Type, Zipcode", function () {

		var addressString = "1005 Gravenstein Hwy, 95472";
		var addressObject = {
			// number: "1005",
			// street: "GRAVENSTEIN",
			// type: "HWY",
			zip: "95472"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Street Type Suf, Zipcode", function () {

		var addressString = "1005 Gravenstein Hwy N, 95472";
		var addressObject = {
			// number: "1005",
			// street: "GRAVENSTEIN",
			// type: "HWY",
			// suffix: "N",
			zip: "95472"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Street Type Suffix,  Zipcode", function () {

		var addressString = "1005 Gravenstein Highway North, 95472";
		var addressObject = {
			// number: "1005",
			// street: "GRAVENSTEIN",
			// type: "HWY",
			// suffix: "N",
			zip: "95472"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Street Type, City, ST", function () {

		var addressString = "1005 N Gravenstein Highway, Sebastopol, CA";
		var addressObject = {
			// number: "1005",
			// prefix: "N",
			// street: "GRAVENSTEIN",
			// type: "HWY",
			// city: "SEBASTOPOL",
			state: "CA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Street Type, Suite, City, ST", function () {

		var addressString = "1005 N Gravenstein Highway, Suite 500, Sebastopol, CA";
		var addressObject = {
			// number: "1005",
			// prefix: "N",
			// street: "GRAVENSTEIN",
			// type: "HWY",
			// sec_unit_type: "Suite",
			// sec_unit_num: "500",
			// city: "SEBASTOPOL",
			state: "CA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Street Type Suite City, ST", function () {

		var addressString = "1005 N Gravenstein Hwy Suite 500 Sebastopol, CA";
		var addressObject = {
			// number: "1005",
			// prefix: "N",
			// street: "GRAVENSTEIN",
			// type: "HWY",
			// sec_unit_type: "Suite",
			// sec_unit_num: "500",
			// city: "SEBASTOPOL",
			state: "CA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Street Type, City, ST, Zipcode", function () {

		var addressString = "1005 N Gravenstein Highway, Sebastopol, CA, 95472";
		var addressObject = {
			// number: "1005",
			// prefix: "N",
			// street: "GRAVENSTEIN",
			// type: "HWY",
			// city: "SEBASTOPOL",
			state: "CA",
			zip: "95472"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Street Type City ST Zipcode", function () {

		var addressString = "1005 N Gravenstein Highway Sebastopol CA 95472";
		var addressObject = {
			// number: "1005",
			// prefix: "N",
			// street: "GRAVENSTEIN",
			// type: "HWY",
			// city: "SEBASTOPOL",
			state: "CA",
			zip: "95472"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Street Type Suf City ST", function () {

		var addressString = "1005 Gravenstein Hwy N Sebastopol CA";
		var addressObject = {
			// number: "1005",
			// street: "GRAVENSTEIN",
			// type: "HWY",
			// suffix: "N",
			// city: "SEBASTOPOL",
			state: "CA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Street Type Suf, City ST", function () {

		var addressString = "1005 Gravenstein Hwy N, Sebastopol CA";
		var addressObject = {
			// number: "1005",
			// street: "GRAVENSTEIN",
			// type: "HWY",
			// suffix: "N",
			// city: "SEBASTOPOL",
			state: "CA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Street Type, Suff City ST", function () {

		var addressString = "1005 Gravenstein Hwy, N Sebastopol CA";
		var addressObject = {
			// number: "1005",
			// street: "GRAVENSTEIN",
			// type: "HWY",
			// city: "NORTH SEBASTOPOL",
			state: "CA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Street Type, Suffix City ST", function () {

		var addressString = "1005 Gravenstein Hwy, North Sebastopol CA";
		var addressObject = {
			// number: "1005",
			// street: "GRAVENSTEIN",
			// type: "HWY",
			// city: "NORTH SEBASTOPOL",
			state: "CA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Street Type City ST", function () {

		var addressString = "1005 Gravenstein Hwy Sebastopol CA";
		var addressObject = {
			// number: "1005",
			// street: "GRAVENSTEIN",
			// type: "HWY",
			// city: "SEBASTOPOL",
			state: "CA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Street City City ST", function () {

		var addressString = "115 Broadway San Francisco CA";
		var addressObject = {
			// number: "115",
			// street: "BROADWAY",
			// city: "SAN FRANCISCO",
			state: "CA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Street Type, City, ST Zipcode", function () {

		var addressString = "7800 Mill Station Rd, Sebastopol, CA 95472";
		var addressObject = {
			// number: "7800",
			// street: "MILL STATION",
			// type: "RD",
			// city: "SEBASTOPOL",
			state: "CA",
			zip: "95472"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Street Type City ST Zipcode", function () {

		var addressString = "7800 Mill Station Rd Sebastopol CA 95472";
		var addressObject = {
			// number: "7800",
			// street: "MILL STATION",
			// type: "RD",
			// city: "SEBASTOPOL",
			state: "CA",
			zip: "95472"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Street Type Number City ST Zipcode", function () {

		var addressString = "1005 State Highway 116 Sebastopol CA 95472";
		var addressObject = {
			// number: "1005",
			// street: "STATE HIGHWAY 116",
			// city: "SEBASTOPOL",
			state: "CA",
			zip: "95472"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Street. City City", function () {

		var addressString = "1600 Pennsylvania Ave. Washington DC";
		var addressObject = {
			// number: "1600",
			// street: "PENNSYLVANIA",
			// type: "AVE",
			// city: "WASHINGTON",
			state: "DC"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Street Type City City", function () {

		var addressString = "1600 Pennsylvania Avenue Washington DC";
		var addressObject = {
			// number: "1600",
			// street: "PENNSYLVANIA",
			// type: "AVE",
			// city: "WASHINGTON",
			state: "DC"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "NumberLetter StreetNumberLetter, City City ST", function () {

		var addressString = "48S 400E, Salt Lake City UT";
		var addressObject = {
			// number: "48",
			// prefix: "S",
			// street: "400",
			// suffix: "E",
			// city: "SALT LAKE CITY",
			state: "UT"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Pre Street Type #Suite City City ST Zipcode", function () {

		var addressString = "550 S 400 E #3206, Salt Lake City UT 84111";
		var addressObject = {
			// number: "550",
			// prefix: "S",
			// street: "400",
			// suffix: "E",
			// sec_unit_type: "#",
			// sec_unit_num: "3206",
			// city: "SALT LAKE CITY",
			state: "UT",
			zip: "84111"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Pre Street Type Apt Suite City City, ST Zipcode", function () {

		var addressString = "6641 N 2200 W Apt D304 Park City, UT 84098";
		var addressObject = {
			// number: "6641",
			// prefix: "N",
			// street: "2200",
			// suffix: "W",
			// sec_unit_type: "Apt",
			// sec_unit_num: "D304",
			// city: "PARK CITY",
			state: "UT",
			zip: "84098"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Street Type, City, ST", function () {

		var addressString = "100 South St, Philadelphia, PA";
		var addressObject = {
			// number: "100",
			// street: "SOUTH",
			// type: "ST",
			// city: "PHILADELPHIA",
			state: "PA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Pre.Pre. Street Type, City, ST", function () {

		var addressString = "100 S.E. Washington Ave, Minneapolis, MN";
		var addressObject = {
			// number: "100",
			// prefix: "SE.",
			// street: "WASHINGTON",
			// type: "AVE",
			// city: "MINNEAPOLIS",
			state: "MN"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Fraction Street Type, City City, ST", function () {

		var addressString = "3813 1/2 Some Road, Los Angeles, CA";
		var addressObject = {
			// number: "3813",
			// street: "SOME",
			// type: "RD",
			// city: "LOS ANGELES",
			state: "CA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Street & Street City City ST", function () {

		var addressString = "Mission & Valencia San Francisco CA";
		var addressObject = {
			// street1: "MISSION",
			// street2: "VALENCIA",
			// city: "SAN FRANCISCO",
			state: "CA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Street & Street, City ST", function () {

		var addressString = "Mission & Valencia, San Francisco CA";
		var addressObject = {
			// street1: "MISSION",
			// street2: "VALENCIA",
			// city: "SAN FRANCISCO",
			state: "CA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Street Type and Street Type City City ST", function () {

		var addressString = "Mission St and Valencia St San Francisco CA";
		var addressObject = {
			// street1: "MISSION",
			// type1: "ST",
			// street2: "VALENCIA",
			// type2: "ST",
			// city: "SAN FRANCISCO",
			state: "CA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Street Type & Street Type City City ST", function () {

		var addressString = "Mission St & Valencia St San Francisco CA";
		var addressObject = {
			// street1: "MISSION",
			// type1: "ST",
			// street2: "VALENCIA",
			// type2: "ST",
			// city: "SAN FRANCISCO",
			state: "CA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Street and Street Types City City ST", function () {

		var addressString = "Mission and Valencia Sts San Francisco CA";
		var addressObject = {
			// street1: "MISSION",
			// street2: "VALENCIA",
			// type1: "ST",
			// type2: "ST",
			// city: "SAN FRANCISCO",
			state: "CA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Street & Street Types. City City ST ", function () {

		var addressString = "Mission & Valencia Sts. San Francisco CA";
		var addressObject = {
			// street1: "MISSION",
			// street2: "VALENCIA",
			// type1: "ST",
			// type2: "ST",
			// city: "SAN FRANCISCO",
			state: "CA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Street & Street Types City City ST", function () {

		var addressString = "Mission & Valencia Streets San Francisco CA";
		var addressObject = {
			// street1: "MISSION",
			// street2: "VALENCIA",
			// type1: "ST",
			// type2: "ST",
			// city: "SAN FRANCISCO",
			state: "CA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Street Type and Street Type City City ST", function () {

		var addressString = "Mission Avenue and Valencia Street San Francisco CA";
		var addressObject = {
			// street1: "MISSION",
			// type1: "AVE",
			// street2: "VALENCIA",
			// type2: "ST",
			// city: "SAN FRANCISCO",
			state: "CA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Street Type, Pre City City ST", function () {

		var addressString = "1 First St, e San Jose CA";
		var addressObject = {
			// number: "1",
			// street: "FIRST",
			// type: "ST",
			// city: "EAST SAN JOSE",
			state: "CA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Street City, State State", function () {

		var addressString = "123 Maple Rochester, New York";
		var addressObject = {
			// number: "123",
			// street: "MAPLE",
			// city: "ROCHESTER",
			state: "NY"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Pre Street Type Zipcode-Four", function () {

		var addressString = "233 S Wacker Dr 60606-6306";
		var addressObject = {
			// number: "233",
			// prefix: "S",
			// street: "WACKER",
			// type: "DR",
			zip: "60606-6306"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Pre Street Type ZipCodeFour", function () {

		var addressString = "233 S Wacker Dr 606066306";
		var addressObject = {
			// number: "233",
			// prefix: "S",
			// street: "WACKER",
			// type: "DR",
			zip: "60606-6306"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Pre Street Type unit Zipcode", function () {

		var addressString = "233 S Wacker Dr lobby 60606";
		var addressObject = {
			// number: "233",
			// prefix: "S",
			// street: "WACKER",
			// type: "DR",
			// sec_unit_type: "lobby",
			zip: "60606"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Pre Street Type unit Zipcode", function () {

		var addressString = "233 S Wacker Dr lobby 60606";
		var addressObject = {
			// number: "233",
			// prefix: "S",
			// street: "WACKER",
			// type: "DR",
			// sec_unit_type: "lobby",
			zip: "60606"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "#Number Number Pre Street Zipcode", function () {

		var addressString = "#42 233 S Wacker Dr 60606";
		var addressObject = {
			// sec_unit_type: "#",
			// sec_unit_num: "42",
			// number: "233",
			// prefix: "S",
			// street: "WACKER",
			// type: "DR",
			zip: "60606"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "unit unitNumber Street Street, City City ST", function () {

		var addressString = "lt42 99 Some Road, Some City LA";
		var addressObject = {
			// sec_unit_type: "lt",
			// sec_unit_num: "42",
			// number: "99",
			// street: "SOME",
			// type: "RD",
			// city: "SOME CITY",
			state: "LA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Street Type, City, ST Zipcode", function () {

		var addressString = "36401 County Road 43, Eaton, CO 80615";
		var addressObject = {
			// number: "36401",
			// street: "COUNTY ROAD 43",
			// city: "EATON",
			state: "CO",
			zip: "80615"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Street Type Suff, City, ST Zipcode", function () {

		var addressString = "1234 COUNTY HWY 60E, Town, CO 12345";
		var addressObject = {
			// number: "1234",
			// street: "COUNTY HWY 60",
			// suffix: "E",
			// city: "TOWN",
			state: "CO",
			zip: "12345"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Pre. Street", function () {

		var addressString = "321 S. Washington";
		var addressObject = {
			// number: "321",
			// prefix: "S",
			// street: "WASHINGTON"

			//	TODO: Fix - Not true!
			state: "WA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Ampersand Number Street Type, Unit UnitNumber Ampersand", function () {

		var addressString = "\'45 Quaker Ave, Ste 105\'";
		var addressObject = {
			// number: "45",
			// street: "QUAKER",
			// type: "AVE",
			// sec_unit_type: "Ste",
			// sec_unit_num: "105"
		};

		verifyAddress( addressString, addressObject );
	} );

} );