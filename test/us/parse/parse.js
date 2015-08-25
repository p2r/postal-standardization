"use strict";

/* global describe, it */

var should = require( "should" );

var logStatus = require( "../../../lib/common/logStatus" );
var Postal = require( "../../../lib" ).USPostal;

describe( "Parse Address:", function () {

	var postal;
	if ( Postal ) {
		postal = new Postal();
	}

	function verifyAddress( addressString, addressObject, debugLogging ) {
		if ( debugLogging ) {
			logStatus( true );
		}

		if ( !postal ) {
			return;
		}

		postal.standardization.parseAddress( addressString, function ( err, result ) {
			if ( debugLogging ) {
				logStatus( false );
			}
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
			city: "SOME ADDRESS",
			country: "UNITED STATES"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Some Address 80023\\nUnited States", function () {

		var addressString = "Some Address 80023\nUnited States";
		var addressObject = {
			city: "SOME ADDRESS",
			zip: "80023",
			country: "UNITED STATES"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Some Address, United States", function () {

		var addressString = "Some Address, United States";
		var addressObject = {
			city: "SOME ADDRESS",
			country: "UNITED STATES"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Some Address, US", function () {

		var addressString = "Some Address, US";
		var addressObject = {
			city: "SOME ADDRESS",
			country: "UNITED STATES"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Some Address, U.S.A.", function () {

		var addressString = "Some Address, U.S.A.";
		var addressObject = {
			city: "SOME ADDRESS",
			country: "UNITED STATES"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Canada", function () {

		var addressString = "Canada";
		var addressObject = {
			country: "CANADA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Some Address\\nCA", function () {

		var addressString = "Some Address\nCA";
		var addressObject = {
			city: "SOME ADDRESS",
			state: "CA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Some Address, CA", function () {

		var addressString = "Some Address, CA";
		var addressObject = {
			city: "SOME ADDRESS",
			state: "CA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Some Address\\nBénin", function () {

		var addressString = "Some Address\nBénin";
		var addressObject = {
			city: "SOME ADDRESS",
			country: "BENIN"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Street Type Zipcode", function () {
		//	nxtZ

		var addressString = "1005 Gravenstein Hwy 95472";
		var addressObject = {
			number: "1005",
			street: "GRAVENSTEIN",
			type: "HWY",
			zip: "95472"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Street Type, Zipcode", function () {

		var addressString = "1005 Gravenstein Hwy, 95472";
		var addressObject = {
			number: "1005",
			street: "GRAVENSTEIN",
			type: "HWY",
			zip: "95472"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Street Type Suf, Zipcode", function () {
		//	nxtf,Z

		var addressString = "1005 Gravenstein Hwy N, 95472";
		var addressObject = {
			number: "1005",
			street: "GRAVENSTEIN",
			type: "HWY",
			suffix: "N",
			zip: "95472"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Street Type Suffix, Zipcode", function () {
		//	nxtf,Z
		//	nstf,Z

		var addressString = "1005 Gravenstein Highway North, 95472";
		var addressObject = {
			number: "1005",
			street: "GRAVENSTEIN",
			type: "HWY",
			suffix: "N",
			zip: "95472"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Prefix Street Type, City, ST", function () {
		//	npxt,x,S

		var addressString = "1005 N Gravenstein Highway, Sebastopol, CA";
		var addressObject = {
			number: "1005",
			prefix: "N",
			street: "GRAVENSTEIN",
			type: "HWY",
			city: "SEBASTOPOL",
			state: "CA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Street Type, Suite, City, ST", function () {
		//	npxt,uu,x,S

		var addressString = "1005 N Gravenstein Highway, Suite 500, Sebastopol, CA";
		var addressObject = {
			number: "1005",
			prefix: "N",
			street: "GRAVENSTEIN",
			type: "HWY",
			sec_unit_type: "STE",
			sec_unit_num: "500",
			city: "SEBASTOPOL",
			state: "CA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Prefix Street Type Suite Number City, ST", function () {
		//	npxtUxS = npxtuux,S = npstuuc,S

		var addressString = "1005 N Gravenstein Hwy Suite 500 Sebastopol, CA";
		var addressObject = {
			number: "1005",
			prefix: "N",
			street: "GRAVENSTEIN",
			type: "HWY",
			sec_unit_type: "STE",
			sec_unit_num: "500",
			city: "SEBASTOPOL",
			state: "CA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Prefix Street Type, City, ST, Zipcode", function () {

		var addressString = "1005 N Gravenstein Highway, Sebastopol, CA, 95472";
		var addressObject = {
			number: "1005",
			prefix: "N",
			street: "GRAVENSTEIN",
			type: "HWY",
			city: "SEBASTOPOL",
			state: "CA",
			zip: "95472"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Street Type City ST Zipcode", function () {

		var addressString = "1005 N Gravenstein Highway Sebastopol CA 95472";
		var addressObject = {
			number: "1005",
			prefix: "N",
			street: "GRAVENSTEIN",
			type: "HWY",
			city: "SEBASTOPOL",
			state: "CA",
			zip: "95472"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Street Type Suf City ST", function () {

		var addressString = "1005 Gravenstein Hwy N Sebastopol CA";
		var addressObject = {
			number: "1005",
			street: "GRAVENSTEIN",
			type: "HWY",
			suffix: "N",
			city: "SEBASTOPOL",
			state: "CA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Street Type Suf, City ST", function () {

		var addressString = "1005 Gravenstein Hwy N, Sebastopol CA";
		var addressObject = {
			number: "1005",
			street: "GRAVENSTEIN",
			type: "HWY",
			suffix: "N",
			city: "SEBASTOPOL",
			state: "CA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Street Type, Suff City ST", function () {

		var addressString = "1005 Gravenstein Hwy, N Sebastopol CA";
		var addressObject = {
			number: "1005",
			street: "GRAVENSTEIN",
			type: "HWY",
			city: "N SEBASTOPOL",
			state: "CA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Street Type, Suffix City ST", function () {

		var addressString = "1005 Gravenstein Hwy, North Sebastopol CA";
		var addressObject = {
			number: "1005",
			street: "GRAVENSTEIN",
			type: "HWY",
			city: "NORTH SEBASTOPOL",
			state: "CA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Street Type City ST", function () {

		var addressString = "1005 Gravenstein Hwy Sebastopol CA";
		var addressObject = {
			number: "1005",
			street: "GRAVENSTEIN",
			type: "HWY",
			city: "SEBASTOPOL",
			state: "CA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Street City City ST", function () {

		var addressString = "115 Broadway San Francisco CA";
		var addressObject = {
			number: "115",
			street: "BROADWAY",
			city: "SAN FRANCISCO",
			state: "CA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Street Street Type, City, ST Zipcode", function () {
		//	nxxt,x,SZ = nsst,c,SZ

		var addressString = "7800 Mill Station Rd, Sebastopol, CA 95472";
		var addressObject = {
			number: "7800",
			street: "MILL STATION",
			type: "RD",
			city: "SEBASTOPOL",
			state: "CA",
			zip: "95472"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Street Type City ST Zipcode", function () {

		var addressString = "7800 Mill Station Rd Sebastopol CA 95472";
		var addressObject = {
			number: "7800",
			street: "MILL STATION",
			type: "RD",
			city: "SEBASTOPOL",
			state: "CA",
			zip: "95472"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Street Type Number City ST Zipcode", function () {
		//	nxxxxSZ

		var addressString = "1005 State Highway 116 Sebastopol CA 95472";
		var addressObject = {
			number: "1005",
			street: "STATE HIGHWAY 116",
			city: "SEBASTOPOL",
			state: "CA",
			zip: "95472"
		};

		verifyAddress( addressString, addressObject );
	} );

	// it( "Number Street. City City", function () {

	// 	var addressString = "1600 Pennsylvania Ave. Washington DC";
	// 	var addressObject = {
	// 		number: "1600",
	// 		street: "PENNSYLVANIA",
	// 		type: "AVE",
	// 		city: "WASHINGTON",
	// 		state: "DC"
	// 	};

	// 	verifyAddress( addressString, addressObject );
	// } );

	// it( "Number Street Type City City", function () {

	// 	var addressString = "1600 Pennsylvania Avenue Washington DC";
	// 	var addressObject = {
	// 		number: "1600",
	// 		street: "PENNSYLVANIA",
	// 		type: "AVE",
	// 		city: "WASHINGTON",
	// 		state: "DC"
	// 	};

	// 	verifyAddress( addressString, addressObject );
	// } );

	// it( "NumberLetter StreetNumberLetter, City City ST", function () {

	// 	var addressString = "48S 400E, Salt Lake City UT";
	// 	var addressObject = {
	// 		number: "48",
	// 		prefix: "S",
	// 		street: "400",
	// 		suffix: "E",
	// 		city: "SALT LAKE CITY",
	// 		state: "UT"
	// 	};

	// 	verifyAddress( addressString, addressObject );
	// } );

	it( "Number Pre Street Type #Suite City City ST Zipcode", function () {

		var addressString = "550 S 400 E #3206, Salt Lake City UT 84111";
		var addressObject = {
			number: "550",
			prefix: "S",
			street: "400",
			suffix: "E",
			sec_unit_type: "#",
			sec_unit_num: "3206",
			city: "SALT LAKE CITY",
			state: "UT",
			zip: "84111"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Pre Street Type Apt Suite City City, ST Zipcode", function () {

		var addressString = "6641 N 2200 W Apt D304 Park City, UT 84098";
		var addressObject = {
			number: "6641",
			prefix: "N",
			street: "2200",
			suffix: "W",
			sec_unit_type: "APT",
			sec_unit_num: "D304",
			city: "PARK CITY",
			state: "UT",
			zip: "84098"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Street Type, City, ST", function () {

		var addressString = "100 South St, Philadelphia, PA";
		var addressObject = {
			number: "100",
			street: "SOUTH",
			type: "ST",
			city: "PHILADELPHIA",
			state: "PA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Pre.Pre. Street Type, City, ST", function () {

		var addressString = "100 S.E. Washington Ave, Minneapolis, MN";
		var addressObject = {
			number: "100",
			prefix: "SE",
			street: "WASHINGTON",
			type: "AVE",
			city: "MINNEAPOLIS",
			state: "MN"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Fraction Street Type, City City, ST", function () {
		//	nnxt,xx,S

		var addressString = "3813 1/2 Some Road, Los Angeles, CA";
		var addressObject = {
			number: "3813 1/2",
			street: "SOME",
			type: "RD",
			city: "LOS ANGELES",
			state: "CA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Street & Street City City ST", function () {
		//	x&xxxS
		//	s&sxxS

		var addressString = "Mission & Valencia San Francisco CA";
		var addressObject = {
			street1: "MISSION",
			street2: "VALENCIA",
			city: "SAN FRANCISCO",
			state: "CA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Street & Street, City ST", function () {
		//	x&x,xxS
		//	s&s,ccS

		var addressString = "Mission & Valencia, San Francisco CA";
		var addressObject = {
			street1: "MISSION",
			street2: "VALENCIA",
			city: "SAN FRANCISCO",
			state: "CA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Street Type and Street Type City City ST", function () {
		//	st&stxxS
		//	st&stxxS

		var addressString = "Mission St and Valencia St San Francisco CA";
		var addressObject = {
			street1: "MISSION",
			type1: "ST",
			street2: "VALENCIA",
			type2: "ST",
			city: "SAN FRANCISCO",
			state: "CA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Street Type & Street Type City City ST", function () {

		var addressString = "Mission St & Valencia St San Francisco CA";
		var addressObject = {
			street1: "MISSION",
			type1: "ST",
			street2: "VALENCIA",
			type2: "ST",
			city: "SAN FRANCISCO",
			state: "CA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Street and Street Types City City ST", function () {

		var addressString = "Mission and Valencia Sts San Francisco CA";
		var addressObject = {
			street1: "MISSION",
			type1: "ST",
			street2: "VALENCIA",
			type2: "ST",
			city: "SAN FRANCISCO",
			state: "CA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Street & Street Types. City City ST ", function () {

		var addressString = "Mission & Valencia Sts. San Francisco CA";
		var addressObject = {
			street1: "MISSION",
			type1: "ST",
			street2: "VALENCIA",
			type2: "ST",
			city: "SAN FRANCISCO",
			state: "CA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Street & Street Types City City ST", function () {

		var addressString = "Mission & Valencia Streets San Francisco CA";
		var addressObject = {
			street1: "MISSION",
			type1: "ST",
			street2: "VALENCIA",
			type2: "ST",
			city: "SAN FRANCISCO",
			state: "CA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Street Type and Street Type City City ST", function () {

		var addressString = "Mission Avenue and Valencia Street San Francisco CA";
		var addressObject = {
			street1: "MISSION",
			type1: "AVE",
			street2: "VALENCIA",
			type2: "ST",
			city: "SAN FRANCISCO",
			state: "CA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Street Type, Pre City City ST", function () {

		var addressString = "1 First St, e San Jose CA";
		var addressObject = {
			number: "1",
			street: "FIRST",
			type: "ST",
			city: "E SAN JOSE",
			state: "CA"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Street City, State State", function () {

		var addressString = "123 Maple Rochester, New York";
		var addressObject = {
			number: "123",
			street: "MAPLE",
			city: "ROCHESTER",
			state: "NY"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Pre Street Type Zipcode-Four", function () {

		var addressString = "233 S Wacker Dr 60606-6306";
		var addressObject = {
			number: "233",
			prefix: "S",
			street: "WACKER",
			type: "DR",
			zip: "60606-6306"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Pre Street Type ZipCodeFour", function () {

		var addressString = "233 S Wacker Dr 606066306";
		var addressObject = {
			number: "233",
			prefix: "S",
			street: "WACKER",
			type: "DR",
			zip: "60606-6306"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Pre Street Type unit Zipcode", function () {

		var addressString = "233 S Wacker Dr lobby 60606";
		var addressObject = {
			number: "233",
			prefix: "S",
			street: "WACKER",
			type: "DR",
			sec_unit_type: "LBBY",
			zip: "60606"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Unit, Number Pre Street Type, Some City, State Zipcode", function () {

		var addressString = "Lobby, 357 S McCaslin Blvd., Louisville, CO 80027";
		var addressObject = {
			number: "357",
			prefix: "S",
			street: "MCCASLIN",
			type: "BLVD",
			sec_unit_type: "LBBY",
			city: "LOUISVILLE",
			state: "CO",
			zip: "80027"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Pre Street Type unit Zipcode", function () {

		var addressString = "233 S Wacker Dr lobby 60606";
		var addressObject = {
			number: "233",
			prefix: "S",
			street: "WACKER",
			type: "DR",
			sec_unit_type: "LBBY",
			zip: "60606"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "#Number Number Pre Street Zipcode", function () {

		var addressString = "#42 233 S Wacker Dr 60606";
		var addressObject = {
			sec_unit_type: "#",
			sec_unit_num: "42",
			number: "233",
			prefix: "S",
			street: "WACKER",
			type: "DR",
			zip: "60606"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Street Type, City, ST Zipcode", function () {

		var addressString = "36401 County Road 43, Eaton, CO 80615";
		var addressObject = {
			number: "36401",
			street: "COUNTY ROAD 43",
			city: "EATON",
			state: "CO",
			zip: "80615"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Number Street Type Suff, City, ST Zipcode", function () {

		var addressString = "1234 COUNTY HWY 60E, Town, CO 12345";
		var addressObject = {
			number: "1234",
			street: "COUNTY HWY 60E",
			city: "TOWN",
			state: "CO",
			zip: "12345"
		};

		verifyAddress( addressString, addressObject );
	} );

	// it( "Number Pre. Street", function () {

	// 	var addressString = "321 S. Washington";
	// 	var addressObject = {
	// 		number: "321",
	// 		prefix: "S",
	// 		street: "WASHINGTON"
	// 	};

	// 	verifyAddress( addressString, addressObject );
	// } );

	it( "Apostrophe Number Street Type, Unit UnitNumber Apostrophe", function () {

		var addressString = "\'45 Quaker Ave, Ste 105\'";
		var addressObject = {
			number: "45",
			street: "QUAKER",
			type: "AVE",
			sec_unit_type: "STE",
			sec_unit_num: "105",
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "RR 2 BOX 274, Lake Butler, FL 32054", function () {
		//	RRRR,xx,SZ
		//	RRRR,cc,SZ

		var addressString = "RR 2 BOX 274, Lake Butler, FL 32054";
		var addressObject = {
			rural_route: "RR 2 BOX 274",
			city: "LAKE BUTLER",
			state: "FL",
			zip: "32054"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "HC 2 BOX 274, Lake Butler, FL 32054", function () {
		//	HHHH,xx,SZ
		//	HHHH,cc,SZ

		var addressString = "HC 2 BOX 274, Lake Butler, FL 32054";
		var addressObject = {
			highway_contract: "HC 2 BOX 274",
			city: "LAKE BUTLER",
			state: "FL",
			zip: "32054"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "PO Box 233, 5023 W. 120th Ave., Broomfield, CO 80023", function () {
		//	PPP,npxt,x,SZ
		//	PPP,npst,c,SZ

		var addressString = "PO Box 233, 5023 W. 120th Ave., Broomfield, CO 80023";
		var addressObject = {
			po_box: "PO BOX 233",
			number: "5023",
			prefix: "W",
			street: "120TH",
			type: "AVE",
			city: "BROOMFIELD",
			state: "CO",
			zip: "80023"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Experian - July 2015", function () {

		var addressString = "2 Soldier Dr, Sheridan WY 82801-9414";
		var addressObject = {
			number: "2",
			street: "SOLDIER",
			type: "DR",
			city: "SHERIDAN",
			state: "WY",
			zip: "82801-9414"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Experian - May 2015", function () {

		var addressString = "301 S 21st St, Laramie WY 82070-4360";
		var addressObject = {
			number: "301",
			prefix: "S",
			street: "21ST",
			type: "ST",
			city: "LARAMIE",
			state: "WY",
			zip: "82070-4360"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Experian - April 2015", function () {

		var addressString = "12400 S Sheep Horn Rd, Jackson WY 83001-9192";
		var addressObject = {
			number: "12400",
			prefix: "S",
			street: "SHEEP HORN",
			type: "RD",
			city: "JACKSON",
			state: "WY",
			zip: "83001-9192"
		};

		verifyAddress( addressString, addressObject );
	} );

	it( "Experian - March 2015", function () {

		var addressString = "700 Minnesota Ln, Powell WY 82435-2903";
		var addressObject = {
			number: "700",
			street: "MINNESOTA",
			type: "LN",
			city: "POWELL",
			state: "WY",
			zip: "82435-2903"
		};

		verifyAddress( addressString, addressObject );
	} );


	//	Address generated from User Info Gen
	it( "4543 Jagged Rabbit Edge, Elevenmile Homestead, District of Columbia, 20079-7530", function () {

		var addressString = "4543 Jagged Rabbit Edge, Elevenmile Homestead, District of Columbia, 20079-7530";
		var addressObject = {
			number: "4543",
			street: "JAGGED RABBIT EDGE",
			city: "ELEVENMILE HOMESTEAD",
			state: "DC",
			zip: "20079-7530"
		};

		verifyAddress( addressString, addressObject );
	} );

	//	Address generated from User Info Gen
	it( "2774 Dusty Rise, Chistochina, Pennsylvania, 16036-7241", function () {

		var addressString = "2774 Dusty Rise, Chistochina, Pennsylvania, 16036-7241";
		var addressObject = {
			number: "2774",
			street: "DUSTY RISE",
			city: "CHISTOCHINA",
			state: "PA",
			zip: "16036-7241"
		};

		verifyAddress( addressString, addressObject );
	} );

	//	Address generated from User Info Gen
	it( "9430 Cotton Apple Circle, Mars, Oklahoma, 74120-9610", function () {

		var addressString = "9430 Cotton Apple Circle, Mars, Oklahoma, 74120-9610";
		var addressObject = {
			number: "9430",
			street: "COTTON APPLE",
			type: "CIR",
			city: "MARS",
			state: "OK",
			zip: "74120-9610"
		};

		verifyAddress( addressString, addressObject );
	} );

	//	Address generated from User Info Gen
	it( "791 Red Beacon Close, Poverty Hill, North Dakota, 58169-5068", function () {

		var addressString = "791 Red Beacon Close, Poverty Hill, North Dakota, 58169-5068";
		var addressObject = {
			number: "791",
			street: "RED BEACON CLOSE",
			city: "POVERTY HILL",
			state: "ND",
			zip: "58169-5068"
		};

		verifyAddress( addressString, addressObject );
	} );

	//	Address generated from User Info Gen
	it( "6308 Hazy Falls, Stringtown, Tennessee, 38411-2765", function () {

		var addressString = "6308 Hazy Falls, Stringtown, Tennessee, 38411-2765";
		var addressObject = {
			number: "6308",
			street: "HAZY",
			type: "FLS",
			city: "STRINGTOWN",
			state: "TN",
			zip: "38411-2765"
		};

		verifyAddress( addressString, addressObject );
	} );

	//	Address generated from User Info Gen
	it( "354 Grand Embers Private, Steptoe, Florida, 34684-6048", function () {

		var addressString = "354 Grand Embers Private, Steptoe, Florida, 34684-6048";
		var addressObject = {
			number: "354",
			street: "GRAND EMBERS PRIVATE",
			city: "STEPTOE",
			state: "FL",
			zip: "34684-6048"
		};

		verifyAddress( addressString, addressObject );
	} );

	//	Address generated from User Info Gen
	it( "7787 High Anchor Via, Clatskanie, Louisiana, 70402-3561", function () {

		var addressString = "7787 High Anchor Via, Clatskanie, Louisiana, 70402-3561";
		var addressObject = {
			number: "7787",
			street: "HIGH ANCHOR",
			type: "VIA",
			city: "CLATSKANIE",
			state: "LA",
			zip: "70402-3561"
		};

		verifyAddress( addressString, addressObject );
	} );

	//	Address generated from User Info Gen
	it( "7741 Umber Blossom Glen, Little Switzerland, Virginia, 22212-9652", function () {

		var addressString = "7741 Umber Blossom Glen, Little Switzerland, Virginia, 22212-9652";
		var addressObject = {
			number: "7741",
			street: "UMBER BLOSSOM",
			type: "GLN",
			city: "LITTLE SWITZERLAND",
			state: "VA",
			zip: "22212-9652"
		};

		verifyAddress( addressString, addressObject );
	} );

	//	Address generated from User Info Gen
	it( "4394 Honey Knoll, Breidablick, Missouri, 65593-0026", function () {

		var addressString = "4394 Honey Knoll, Breidablick, Missouri, 65593-0026";
		var addressObject = {
			number: "4394",
			street: "HONEY",
			type: "KNL",
			city: "BREIDABLICK",
			state: "MO",
			zip: "65593-0026"
		};

		verifyAddress( addressString, addressObject );
	} );

	//	Address generated from User Info Gen
	it( "9552 Round Ramp, Humorist, Massachusetts, 01828-6975", function () {

		var addressString = "9552 Round Ramp, Humorist, Massachusetts, 01828-6975";
		var addressObject = {
			number: "9552",
			street: "ROUND",
			type: "RAMP",
			city: "HUMORIST",
			state: "MA",
			zip: "01828-6975"
		};

		verifyAddress( addressString, addressObject );
	} );

	//	Address generated from User Info Gen
	it( "8425 Silver Oak Inlet, Sivili Chuchg, South Dakota, 57255-8843", function () {

		var addressString = "8425 Silver Oak Inlet, Sivili Chuchg, South Dakota, 57255-8843";
		var addressObject = {
			number: "8425",
			street: "SILVER OAK",
			type: "INLT",
			city: "SIVILI CHUCHG",
			state: "SD",
			zip: "57255-8843"
		};

		verifyAddress( addressString, addressObject );
	} );

	//	Address generated from User Info Gen
	it( "9265 Amber Hickory Pines, Tiny Town, Alaska, 99567-9030", function () {

		var addressString = "9265 Amber Hickory Pines, Tiny Town, Alaska, 99567-9030";
		var addressObject = {
			number: "9265",
			street: "AMBER HICKORY",
			type: "PNES",
			city: "TINY TOWN",
			state: "AK",
			zip: "99567-9030"
		};

		verifyAddress( addressString, addressObject );
	} );

	//	Address generated from User Info Gen
	it( "80 Misty Panda Point, Wallstreet, Kansas, 67206-4373", function () {

		var addressString = "80 Misty Panda Point, Wallstreet, Kansas, 67206-4373";
		var addressObject = {
			number: "80",
			street: "MISTY PANDA",
			type: "PT",
			city: "WALLSTREET",
			state: "KS",
			zip: "67206-4373"
		};

		verifyAddress( addressString, addressObject );
	} );

	//	Address generated from User Info Gen
	it( "1509 Silent Arbor, Star, North Carolina, 27053-8690", function () {

		var addressString = "1509 Silent Arbor, Star, North Carolina, 27053-8690";
		var addressObject = {
			number: "1509",
			street: "SILENT ARBOR",
			city: "STAR",
			state: "NC",
			zip: "27053-8690"
		};

		verifyAddress( addressString, addressObject );
	} );

	//	Address generated from User Info Gen
	it( "6124 Colonial Ledge, Lesbia, Kansas, 67536-3846", function () {

		var addressString = "6124 Colonial Ledge, Lesbia, Kansas, 67536-3846";
		var addressObject = {
			number: "6124",
			street: "COLONIAL LEDGE",
			city: "LESBIA",
			state: "KS",
			zip: "67536-3846"
		};

		verifyAddress( addressString, addressObject );
	} );

	//	Address generated from User Info Gen
	it( "6702 Tawny Butterfly Autoroute, Pot Creek, Oklahoma, 73309-2621", function () {

		var addressString = "6702 Tawny Butterfly Autoroute, Pot Creek, Oklahoma, 73309-2621";
		var addressObject = {
			number: "6702",
			street: "TAWNY BUTTERFLY AUTOROUTE",
			city: "POT CREEK",
			state: "OK",
			zip: "73309-2621"
		};

		verifyAddress( addressString, addressObject );
	} );

	//	Address generated from User Info Gen
	it( "5140 Quaking Nectar End, Devils Slide, Ohio, 45277-8312", function () {

		var addressString = "5140 Quaking Nectar End, Devils Slide, Ohio, 45277-8312";
		var addressObject = {
			number: "5140",
			street: "QUAKING NECTAR END",
			city: "DEVILS SLIDE",
			state: "OH",
			zip: "45277-8312"
		};

		verifyAddress( addressString, addressObject );
	} );

	//	Address generated from User Info Gen
	it( "3391 Foggy Meadow, Ten Sleep, Kentucky, 41661-1649", function () {

		var addressString = "3391 Foggy Meadow, Ten Sleep, Kentucky, 41661-1649";
		var addressObject = {
			number: "3391",
			street: "FOGGY",
			type: "MDW",
			city: "TEN SLEEP",
			state: "KY",
			zip: "41661-1649"
		};

		verifyAddress( addressString, addressObject );
	} );

	//	Address generated from User Info Gen
	it( "6550 Easy Wharf, Natural Dam, Virginia, 22777-1163", function () {

		var addressString = "6550 Easy Wharf, Natural Dam, Virginia, 22777-1163";
		var addressObject = {
			number: "6550",
			street: "EASY WHARF",
			city: "NATURAL DAM",
			state: "VA",
			zip: "22777-1163"
		};

		verifyAddress( addressString, addressObject );
	} );

	//	Address generated from User Info Gen
	it( "407 Gentle Elk Highway, Munster, Georgia, 39996-3918", function () {

		var addressString = "407 Gentle Elk Highway, Munster, Georgia, 39996-3918";
		var addressObject = {
			number: "407",
			street: "GENTLE ELK",
			type: "HWY",
			city: "MUNSTER",
			state: "GA",
			zip: "39996-3918"
		};

		verifyAddress( addressString, addressObject );
	} );

	//	Address generated from User Info Gen
	it( "7900 Green Cape, Baptist, Maryland, 21285-4191", function () {

		var addressString = "7900 Green Cape, Baptist, Maryland, 21285-4191";
		var addressObject = {
			number: "7900",
			street: "GREEN",
			type: "CPE",
			city: "BAPTIST",
			state: "MD",
			zip: "21285-4191"
		};

		verifyAddress( addressString, addressObject );
	} );

	//	Address generated from User Info Gen
	it( "8680 Old Leaf Crescent, Sinking Valley, Nevada, 89169-8392", function () {

		var addressString = "8680 Old Leaf Crescent, Sinking Valley, Nevada, 89169-8392";
		var addressObject = {
			number: "8680",
			street: "OLD LEAF",
			type: "CRES",
			city: "SINKING VALLEY",
			state: "NV",
			zip: "89169-8392"
		};

		verifyAddress( addressString, addressObject );
	} );

	//	Address generated from User Info Gen
	it( "2053 Noble Cloud Byway, Stopover, Michigan, 48409-8445", function () {

		var addressString = "2053 Noble Cloud Byway, Stopover, Michigan, 48409-8445";
		var addressObject = {
			number: "2053",
			street: "NOBLE CLOUD BYWAY",
			city: "STOPOVER",
			state: "MI",
			zip: "48409-8445"
		};

		verifyAddress( addressString, addressObject );
	} );

	//	Address generated from User Info Gen
	it( "3735 Clear Lake Highlands, Redwine, Georgia, 39972-9498", function () {

		var addressString = "3735 Clear Lake Highlands, Redwine, Georgia, 39972-9498";
		var addressObject = {
			number: "3735",
			street: "CLEAR LAKE HIGHLANDS",
			city: "REDWINE",
			state: "GA",
			zip: "39972-9498"
		};

		verifyAddress( addressString, addressObject );
	} );

	//	Address generated from User Info Gen
	it( "2006 Harvest Grove Mountain, Zylks, Vermont, 05382-4808", function () {

		var addressString = "2006 Harvest Grove Mountain, Zylks, Vermont, 05382-4808";
		var addressObject = {
			number: "2006",
			street: "HARVEST GROVE",
			type: "MTN",
			city: "ZYLKS",
			state: "VT",
			zip: "05382-4808"
		};

		verifyAddress( addressString, addressObject );
	} );

	//	Address generated from User Info Gen
	it( "3170 Sleepy Quail Promenade, Coon Rapids, Illinois, 61507-9346", function () {

		var addressString = "3170 Sleepy Quail Promenade, Coon Rapids, Illinois, 61507-9346";
		var addressObject = {
			number: "3170",
			street: "SLEEPY QUAIL PROMENADE",
			city: "COON RAPIDS",
			state: "IL",
			zip: "61507-9346"
		};

		verifyAddress( addressString, addressObject );
	} );

	//	Address generated from User Info Gen
	it( "8904 Heather Pony Grounds, Foxhome, Arizona, 85638-9263", function () {

		var addressString = "8904 Heather Pony Grounds, Foxhome, Arizona, 85638-9263";
		var addressObject = {
			number: "8904",
			street: "HEATHER PONY GROUNDS",
			city: "FOXHOME",
			state: "AZ",
			zip: "85638-9263"
		};

		verifyAddress( addressString, addressObject );
	} );

	//	Address generated from User Info Gen
	it( "6275 Little Jetty, Cincinnati, Kentucky, 41416-0597", function () {

		var addressString = "6275 Little Jetty, Cincinnati, Kentucky, 41416-0597";
		var addressObject = {
			number: "6275",
			street: "LITTLE JETTY",
			city: "CINCINNATI",
			state: "KY",
			zip: "41416-0597"
		};

		verifyAddress( addressString, addressObject );
	} );

	//	Address generated from User Info Gen
	it( "8680 Rustic Bank, Dukedom, Minnesota, 55783-5206", function () {

		var addressString = "8680 Rustic Bank, Dukedom, Minnesota, 55783-5206";
		var addressObject = {
			number: "8680",
			street: "RUSTIC BANK",
			city: "DUKEDOM",
			state: "MN",
			zip: "55783-5206"
		};

		verifyAddress( addressString, addressObject );
	} );

	//	Address generated from User Info Gen
	it( "3911 Emerald Berry Expressway, Littlelot, Nevada, 89397-5264", function () {

		var addressString = "3911 Emerald Berry Expressway, Littlelot, Nevada, 89397-5264";
		var addressObject = {
			number: "3911",
			street: "EMERALD BERRY",
			type: "EXPY",
			city: "LITTLELOT",
			state: "NV",
			zip: "89397-5264"
		};

		verifyAddress( addressString, addressObject );
	} );

	//	Address generated from User Info Gen
	it( "2103 Stony Pine Glade, Dilly, North Dakota, 58244-6709", function () {

		var addressString = "2103 Stony Pine Glade, Dilly, North Dakota, 58244-6709";
		var addressObject = {
			number: "2103",
			street: "STONY PINE GLADE",
			city: "DILLY",
			state: "ND",
			zip: "58244-6709"
		};

		verifyAddress( addressString, addressObject );
	} );

	//	Address generated from User Info Gen
	it( "5472 Sunny Dale Estates, Poysippi, Michigan, 49129-5457", function () {

		var addressString = "5472 Sunny Dale Estates, Poysippi, Michigan, 49129-5457";
		var addressObject = {
			number: "5472",
			street: "SUNNY DALE",
			type: "ESTS",
			city: "POYSIPPI",
			state: "MI",
			zip: "49129-5457"
		};

		verifyAddress( addressString, addressObject );
	} );

	//	Address generated from User Info Gen
	it( "90 Lost Gate Woods, Pepperbox, Mississippi, 39261-3784", function () {

		var addressString = "90 Lost Gate Woods, Pepperbox, Mississippi, 39261-3784";
		var addressObject = {
			number: "90",
			street: "LOST GATE WOODS",
			city: "PEPPERBOX",
			state: "MS",
			zip: "39261-3784"
		};

		verifyAddress( addressString, addressObject );
	} );

	//	Address generated from User Info Gen
	it( "1814 Quiet Wagon Impasse, Watercolor, Wisconsin, 53848-6026", function () {

		var addressString = "1814 Quiet Wagon Impasse, Watercolor, Wisconsin, 53848-6026";
		var addressObject = {
			number: "1814",
			street: "QUIET WAGON IMPASSE",
			city: "WATERCOLOR",
			state: "WI",
			zip: "53848-6026"
		};

		verifyAddress( addressString, addressObject );
	} );

	//	Address generated from User Info Gen
	it( "3044 Burning Pond Dale, Weeki Wachee, Massachusetts, 01427-4605", function () {

		var addressString = "3044 Burning Pond Dale, Weeki Wachee, Massachusetts, 01427-4605";
		var addressObject = {
			number: "3044",
			street: "BURNING POND",
			type: "DL",
			city: "WEEKI WACHEE",
			state: "MA",
			zip: "01427-4605"
		};

		verifyAddress( addressString, addressObject );
	} );

	//	Address generated from User Info Gen
	it( "9497 Middle Carrefour, Alert, Delaware, 19847-5857", function () {

		var addressString = "9497 Middle Carrefour, Alert, Delaware, 19847-5857";
		var addressObject = {
			number: "9497",
			street: "MIDDLE CARREFOUR",
			city: "ALERT",
			state: "DE",
			zip: "19847-5857"
		};

		verifyAddress( addressString, addressObject );
	} );

	//	Address generated from User Info Gen
	it( "2981 Cinder Square, Hasty Corner, Alabama, 35979-0204", function () {

		var addressString = "2981 Cinder Square, Hasty Corner, Alabama, 35979-0204";
		var addressObject = {
			number: "2981",
			street: "CINDER",
			type: "SQ",
			city: "HASTY CORNER",
			state: "AL",
			zip: "35979-0204"
		};

		verifyAddress( addressString, addressObject );
	} );

	//	Address generated from User Info Gen
	it( "6630 Merry Goose Bay, Parrot, Arizona, 85995-1228", function () {

		var addressString = "6630 Merry Goose Bay, Parrot, Arizona, 85995-1228";
		var addressObject = {
			number: "6630",
			street: "MERRY GOOSE BAY",
			city: "PARROT",
			state: "AZ",
			zip: "85995-1228"
		};

		verifyAddress( addressString, addressObject );
	} );

	//	Address generated from User Info Gen
	it( "4600 Pleasant Row, Pejepscot, Delaware, 19702-9893", function () {

		var addressString = "4600 Pleasant Row, Pejepscot, Delaware, 19702-9893";
		var addressObject = {
			number: "4600",
			street: "PLEASANT",
			type: "ROW",
			city: "PEJEPSCOT",
			state: "DE",
			zip: "19702-9893"
		};

		verifyAddress( addressString, addressObject );
	} );

	//	Address generated from User Info Gen
	it( "1480 Velvet Robin Chase, Robinhood, Iowa, 50941-4823", function () {

		var addressString = "1480 Velvet Robin Chase, Robinhood, Iowa, 50941-4823";
		var addressObject = {
			number: "1480",
			street: "VELVET ROBIN CHASE",
			city: "ROBINHOOD",
			state: "IA",
			zip: "50941-4823"
		};

		verifyAddress( addressString, addressObject );
	} );

	//	Address generated from User Info Gen
	it( "3653 Indian View Cove, Scientists Cliffs, Maryland, 21509-9340", function () {

		var addressString = "3653 Indian View Cove, Scientists Cliffs, Maryland, 21509-9340";
		var addressObject = {
			number: "3653",
			street: "INDIAN VIEW",
			type: "CV",
			city: "SCIENTISTS CLIFFS",
			state: "MD",
			zip: "21509-9340"
		};

		verifyAddress( addressString, addressObject );
	} );

	//	Address generated from User Info Gen
	it( "7036 Dewy Pathway, Swampscott, South Carolina, 29853-5350", function () {

		var addressString = "7036 Dewy Pathway, Swampscott, South Carolina, 29853-5350";
		var addressObject = {
			number: "7036",
			street: "DEWY PATHWAY",
			city: "SWAMPSCOTT",
			state: "SC",
			zip: "29853-5350"
		};

		verifyAddress( addressString, addressObject );
	} );

	//	Address generated from User Info Gen
	it( "7085 Shady Manor, Payment, Kansas, 66773-3157", function () {

		var addressString = "7085 Shady Manor, Payment, Kansas, 66773-3157";
		var addressObject = {
			number: "7085",
			street: "SHADY",
			type: "MNR",
			city: "PAYMENT",
			state: "KS",
			zip: "66773-3157"
		};

		verifyAddress( addressString, addressObject );
	} );

	//	Address generated from User Info Gen
	it( "1542 Fallen Vista, Flanders, Delaware, 19783-3763", function () {

		var addressString = "1542 Fallen Vista, Flanders, Delaware, 19783-3763";
		var addressObject = {
			number: "1542",
			street: "FALLEN",
			type: "VIS",
			city: "FLANDERS",
			state: "DE",
			zip: "19783-3763"
		};

		verifyAddress( addressString, addressObject );
	} );

	//	Address generated from User Info Gen
	it( "1096 Wishing Horse Trail, Bucklesberry, Alabama, 35271-3507", function () {

		var addressString = "1096 Wishing Horse Trail, Bucklesberry, Alabama, 35271-3507";
		var addressObject = {
			number: "1096",
			street: "WISHING HORSE",
			type: "TRL",
			city: "BUCKLESBERRY",
			state: "AL",
			zip: "35271-3507"
		};

		verifyAddress( addressString, addressObject );
	} );

	//	Address generated from User Info Gen
	it( "570 Iron Gate, Hairtown, Ohio, 43605-8701", function () {

		var addressString = "570 Iron Gate, Hairtown, Ohio, 43605-8701";
		var addressObject = {
			number: "570",
			street: "IRON GATE",
			city: "HAIRTOWN",
			state: "OH",
			zip: "43605-8701"
		};

		verifyAddress( addressString, addressObject );
	} );

	//	Address generated from User Info Gen
	it( "6067 Thunder Willow Street, Pungo, Idaho, 83892-4506", function () {

		var addressString = "6067 Thunder Willow Street, Pungo, Idaho, 83892-4506";
		var addressObject = {
			number: "6067",
			street: "THUNDER WILLOW",
			type: "ST",
			city: "PUNGO",
			state: "ID",
			zip: "83892-4506"
		};

		verifyAddress( addressString, addressObject );
	} );

	//	Address generated from User Info Gen
	it( "442 Crystal Field, Tick Ridge, Mississippi, 38635-3965", function () {

		var addressString = "442 Crystal Field, Tick Ridge, Mississippi, 38635-3965";
		var addressObject = {
			number: "442",
			street: "CRYSTAL",
			type: "FLD",
			city: "TICK RIDGE",
			state: "MS",
			zip: "38635-3965"
		};

		verifyAddress( addressString, addressObject );
	} );

	//	Address generated from User Info Gen
	it( "4903 Cozy Pioneer Round, Puttstown, Illinois, 61502-4831", function () {

		var addressString = "4903 Cozy Pioneer Round, Puttstown, Illinois, 61502-4831";
		var addressObject = {
			number: "4903",
			street: "COZY PIONEER ROUND",
			city: "PUTTSTOWN",
			state: "IL",
			zip: "61502-4831"
		};

		verifyAddress( addressString, addressObject );
	} );

	//	Address generated from User Info Gen
	it( "2795 Golden Loop, Moosup Valley, Oklahoma, 74503-7553", function () {

		var addressString = "2795 Golden Loop, Moosup Valley, Oklahoma, 74503-7553";
		var addressObject = {
			number: "2795",
			street: "GOLDEN",
			type: "LOOP",
			city: "MOOSUP VALLEY",
			state: "OK",
			zip: "74503-7553"
		};

		verifyAddress( addressString, addressObject );
	} );

} );