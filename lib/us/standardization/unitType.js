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
		types: {
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

			if ( this.types.hasOwnProperty( cleanUnit ) ) {
				return this.types[ cleanUnit ];
			}
		},
		parse: function ( unitString ) {
			var unitParts;
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
				unitParts = cleanUnit.match( this.unitRegExp );

				logStatus( "parse", "unitParts", unitParts );

				if ( unitParts[ 2 ] !== undefined ) {
					if ( unitParts[ 1 ] !== undefined ) {
						unitParts[ 1 ] = this.match( unitParts[ 1 ] );
						cleanUnit = unitParts[ 1 ] + " " + unitParts[ 2 ];
					}
					else {
						cleanUnit = "# " + unitParts[ 2 ];
					}
				}
			}
			else {
				logStatus( "parse", null, "test failed" );
				cleanUnit = null;
			}

			return cleanUnit;
		}
	};

	var unit;
	var units = "";

	for ( unit in unitTypes.types ) {
		if ( unitTypes.types.hasOwnProperty( unit ) ) {
			units += units ? "|" + unit : unit;
		}
	}
	logStatus( "unitRegExp", "units", units );
	unitTypes.unitRegExp = new RegExp( "^\\s*(?:(?:(" + units + ")|#)\\s*)(\\S+)$", "i" );

	module.exports = unitTypes;

} ).call( this );