"use strict";

/* global describe, it */

var should = require( "should" );

var Postal = require( "../../../lib" ).USPostal;

describe( "US Parse Secondary Address Units:", function () {

	var postal;
	if ( Postal ) {
		postal = new Postal();
	}

	it( "#1", function () {
		if ( !postal ) {
			return;
		}

		var unitAddress = "#1";
		var expAddress = {
			sec_unit_type: "#",
			sec_unit_num: "1"
		};
		var secondaryAddress = postal.standardization.unitType.parse( unitAddress );
		should.exist( secondaryAddress );
		secondaryAddress.should.eql( expAddress );

	} );

	it( "# 1", function () {
		if ( !postal ) {
			return;
		}

		var unitAddress = "# 1";
		var expAddress = {
			sec_unit_type: "#",
			sec_unit_num: "1"
		};
		var secondaryAddress = postal.standardization.unitType.parse( unitAddress );
		should.exist( secondaryAddress );
		secondaryAddress.should.eql( expAddress );

	} );

	it( " #  1 ", function () {
		if ( !postal ) {
			return;
		}

		var unitAddress = " #  1 ";
		var expAddress = {
			sec_unit_type: "#",
			sec_unit_num: "1"
		};
		var secondaryAddress = postal.standardization.unitType.parse( unitAddress );
		should.exist( secondaryAddress );
		secondaryAddress.should.eql( expAddress );

	} );

	it( "# 12", function () {
		if ( !postal ) {
			return;
		}

		var unitAddress = "# 12";
		var expAddress = {
			sec_unit_type: "#",
			sec_unit_num: "12"
		};
		var secondaryAddress = postal.standardization.unitType.parse( unitAddress );
		should.exist( secondaryAddress );
		secondaryAddress.should.eql( expAddress );

	} );

	it( "# 1A2B", function () {
		if ( !postal ) {
			return;
		}

		var unitAddress = "# 1A2B";
		var expAddress = {
			sec_unit_type: "#",
			sec_unit_num: "1A2B"
		};
		var secondaryAddress = postal.standardization.unitType.parse( unitAddress );
		should.exist( secondaryAddress );
		secondaryAddress.should.eql( expAddress );

	} );

	it( "UNIT 23", function () {
		if ( !postal ) {
			return;
		}

		var unitAddress = "UNIT 23";
		var expAddress = {
			sec_unit_type: "UNIT",
			sec_unit_num: "23"
		};
		var secondaryAddress = postal.standardization.unitType.parse( unitAddress );
		should.exist( secondaryAddress );
		secondaryAddress.should.eql( expAddress );

	} );

	it( "UNIT23", function () {
		if ( !postal ) {
			return;
		}

		var unitAddress = "UNIT23";
		var secondaryAddress = postal.standardization.unitType.parse( unitAddress );
		should.not.exist( secondaryAddress );

	} );

	it( " UNIT 23", function () {
		if ( !postal ) {
			return;
		}

		var unitAddress = " UNIT 23";
		var expAddress = {
			sec_unit_type: "UNIT",
			sec_unit_num: "23"
		};
		var secondaryAddress = postal.standardization.unitType.parse( unitAddress );
		should.exist( secondaryAddress );
		secondaryAddress.should.eql( expAddress );

	} );

	it( "UNIT 23 ", function () {
		if ( !postal ) {
			return;
		}

		var unitAddress = "UNIT 23 ";
		var expAddress = {
			sec_unit_type: "UNIT",
			sec_unit_num: "23"
		};
		var secondaryAddress = postal.standardization.unitType.parse( unitAddress );
		should.exist( secondaryAddress );
		secondaryAddress.should.eql( expAddress );

	} );

	it( " UNIT 23 ", function () {
		if ( !postal ) {
			return;
		}

		var unitAddress = " UNIT 23 ";
		var expAddress = {
			sec_unit_type: "UNIT",
			sec_unit_num: "23"
		};
		var secondaryAddress = postal.standardization.unitType.parse( unitAddress );
		should.exist( secondaryAddress );
		secondaryAddress.should.eql( expAddress );

	} );

	it( " UNIT  23 ", function () {
		if ( !postal ) {
			return;
		}

		var unitAddress = " UNIT  23 ";
		var expAddress = {
			sec_unit_type: "UNIT",
			sec_unit_num: "23"
		};
		var secondaryAddress = postal.standardization.unitType.parse( unitAddress );
		should.exist( secondaryAddress );
		secondaryAddress.should.eql( expAddress );

	} );

	it( "UNIT", function () {
		if ( !postal ) {
			return;
		}

		var unitAddress = "UNIT";
		var secondaryAddress = postal.standardization.unitType.parse( unitAddress );
		should.not.exist( secondaryAddress );

	} );

	it( "XYZ", function () {
		if ( !postal ) {
			return;
		}

		var unitAddress = "XYZ";
		var secondaryAddress = postal.standardization.unitType.parse( unitAddress );
		should.not.exist( secondaryAddress );

	} );

	it( "XYZ 123", function () {
		if ( !postal ) {
			return;
		}

		var unitAddress = "XYZ 123";
		var secondaryAddress = postal.standardization.unitType.parse( unitAddress );
		should.not.exist( secondaryAddress );

	} );

	it( "#", function () {
		if ( !postal ) {
			return;
		}

		var unitAddress = "#";
		var secondaryAddress = postal.standardization.unitType.parse( unitAddress );
		should.not.exist( secondaryAddress );

	} );

	it( "UNIT #23", function () {
		if ( !postal ) {
			return;
		}

		var unitAddress = "UNIT #23";
		var expAddress = {
			sec_unit_type: "UNIT",
			sec_unit_num: "23"
		};
		var secondaryAddress = postal.standardization.unitType.parse( unitAddress );
		should.exist( secondaryAddress );
		secondaryAddress.should.eql( expAddress );

	} );

	it( "UNIT#23", function () {
		if ( !postal ) {
			return;
		}

		var unitAddress = "UNIT#23";
		var expAddress = {
			sec_unit_type: "UNIT",
			sec_unit_num: "23"
		};
		var secondaryAddress = postal.standardization.unitType.parse( unitAddress );
		should.exist( secondaryAddress );
		secondaryAddress.should.eql( expAddress );

	} );

	it( "LOBBY 2", function () {
		if ( !postal ) {
			return;
		}

		var unitAddress = "LOBBY 2";
		var expAddress = {
			sec_unit_type: "LBBY",
			sec_unit_num: "2"
		};
		var secondaryAddress = postal.standardization.unitType.parse( unitAddress );
		should.exist( secondaryAddress );
		secondaryAddress.should.eql( expAddress );

	} );

	it( "LOBBY", function () {
		if ( !postal ) {
			return;
		}

		var unitAddress = "LOBBY";
		var expAddress = {
			sec_unit_type: "LBBY"
		};
		var secondaryAddress = postal.standardization.unitType.parse( unitAddress );
		should.exist( secondaryAddress );
		secondaryAddress.should.eql( expAddress );

	} );

	it( "PHILADELPHIA", function () {
		if ( !postal ) {
			return;
		}

		var unitAddress = "PHILADELPHIA";
		var secondaryAddress = postal.standardization.unitType.parse( unitAddress );
		should.not.exist( secondaryAddress );

	} );

} );