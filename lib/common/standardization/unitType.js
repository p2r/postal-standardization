( function () {
	"use strict";

	var clean = require( "../clean");
	var logStatus = require( "../logStatus");

	//	Publication 28
	//	Postal Addressing Standards
	//	Secondary Address Unit Designators
	//	http://pe.usps.gov/text/pub28/28c2_003.htm
	//
	//	Appendix C2
	//	Secondary Unit Designators
	//	http://pe.usps.gov/text/pub28/28apc_003.htm#ep538629
	//
	//	Tweaked a little

	var unitTypes = {
		number_types: {
			APARTMENT: "APT",
			APT: "APT",
			BASEMENT: "BSMT",
			BSMT: "BSMT",
			BUILDING: "BLDG",
			BLDG: "BLDG",
			BLD: "BLDG",
			BLG: "BLDG",
			FLOOR: "FL",
			FLOR: "FL",
			FLR: "FL",
			FL: "FL",
			FRONT: "FRNT",
			FRNT: "FRNT",
			HANGER: "HNGR",
			HNGR: "HNGR",
			KEY: "KEY",
			LOBBY: "LBBY",
			LBBY: "LBBY",
			LOT: "LOT",
			LOWER: "LOWR",
			LOWR: "LOWR",
			OFFICE: "OFC",
			OFICE: "OFC",
			OFC: "OFC",
			PENTHOUSE: "PH",
			PH: "PH",
			PIER: "PIER",
			PEIR: "PIER",
			REAR: "REAR",
			SIDE: "SIDE",
			SLIP: "SLIP",
			SLP: "SLIP",
			SUITE: "STE",
			SUIT: "STE",
			SUTE: "STE",
			STE: "STE",
			SPC: "SPC",
			SPACE: "SPC",
			STOP: "STOP",
			STP: "STOP",
			TRLR: "TRLR",
			TRAILER: "TRLR",
			UNIT: "UNIT",
			UNT: "UNIT",
			UPPR: "UPPR",
			UPPER: "UPPR",
			UPER: "UPPR",
			UPR: "UPPR",
			ROOM: "RM",
			RM: "RM",
			DEPARTMENT: "DEPT",
			DEPT: "DEPT",
			DPT: "DEPT",
			NUMBER: "NUM",
			NMBR: "NUM",
			NUM: "NUM",
			NM: "NUM"
		},
		standalone_types: {
			BASEMENT: "BSMT",
			BSMT: "BSMT",
			FRONT: "FRNT",
			FRNT: "FRNT",
			HANGER: "HNGR",
			HNGR: "HNGR",
			LOBBY: "LBBY",
			LBBY: "LBBY",
			LOWER: "LOWR",
			LOWR: "LOWR",
			OFFICE: "OFC",
			OFICE: "OFC",
			OFC: "OFC",
			PENTHOUSE: "PH",
			PNTHOUSE: "PH",
			PHOUSE: "PH",
			PNTHS: "PH",
			PNTH: "PH",
			PH: "PH",
			PIER: "PIER",
			PEIR: "PIER",
			REAR: "REAR",
			SIDE: "SIDE",
			UPPR: "UPPR",
			UPPER: "UPPR",
			UPER: "UPPR",
			UPR: "UPPR"
		},
		match: function ( unitType ) {
			var cleanUnit;

			if ( !unitType ) {
				return;
			}
			cleanUnit = clean( unitType );
			if ( !cleanUnit ) {
				return;
			}
			cleanUnit = cleanUnit.toUpperCase();

			if ( this.number_types.hasOwnProperty( cleanUnit ) ) {
				return this.number_types[ cleanUnit ];
			}
			if ( this.standalone_types.hasOwnProperty( cleanUnit ) ) {
				return this.standalone_types[ cleanUnit ];
			}
		},
		parse: function ( unitString ) {
			var unitParts;
			var unitObj;
			var cleanUnit;

			logStatus( "parse" );

			if ( !unitString ) {
				return;
			}
			cleanUnit = clean( unitString );
			if ( !cleanUnit ) {
				return;
			}
			cleanUnit = cleanUnit.toUpperCase();

			logStatus( "parse", "cleanUnit", cleanUnit );

			if ( this.unitRegExp.test( cleanUnit ) ) {

				unitObj = {};

				logStatus( "parse", "unitString", unitString );

				unitParts = cleanUnit.match( this.unitRegExp );

				logStatus( "parse", "unitParts", unitParts );

				if ( unitParts[ 1 ] !== undefined ) {
					unitObj.sec_unit_type = this.match( unitParts[ 1 ] );
				}
				else {
					if ( unitParts[ 2 ] !== undefined ) {
						unitObj.sec_unit_type = this.match( unitParts[ 2 ] );
					}
					else {
						unitObj.sec_unit_type = "#";
					}

					if ( unitParts[ 3 ] !== undefined ) {
						unitObj.sec_unit_num = unitParts[ 3 ];
					}
				}
			}
			else {
				logStatus( "parse", null, "test failed" );
			}

			return unitObj;
		}
	};

	var unit;
	var number_units = "";
	var standalone_units = "";

	for ( unit in unitTypes.number_types ) {
		if ( unitTypes.number_types.hasOwnProperty( unit ) ) {
			number_units += number_units ? "|" + unit : unit;
		}
	}
	// logStatus( "unitRegExp", "number_units", number_units );

	for ( unit in unitTypes.standalone_types ) {
		if ( unitTypes.standalone_types.hasOwnProperty( unit ) ) {
			standalone_units += standalone_units ? "|" + unit : unit;
		}
	}
	// logStatus( "unitRegExp", "standalone_units", standalone_units );

	unitTypes.unitRegExp = new RegExp( "^\\s*(?:(" + standalone_units + ")|(?:(?:(" + number_units + ")(?:\\s+|\\s*#\\s*)|#)\\s*)([a-z0-9\\-:\\.]+))\\s*$", "i" );
	unitTypes.unitPartialRegExp = new RegExp( "(?:(" + standalone_units + ")|(?:(?:(" + number_units + ")(?:\\s+|\\s*#\\s*)|#)\\s*)([a-z0-9\\-:\\.]+))", "i" );

	module.exports = unitTypes;

} ).call( this );