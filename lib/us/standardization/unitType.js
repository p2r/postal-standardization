( function () {
	"use strict";

	var clean = require( "../clean" );

	module.exports = function ( unit, matchRequired ) {
		var cleanUnit = clean( unit );

		if ( !cleanUnit ) {
			return null;
		}

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

		switch ( cleanUnit ) {
			case "APARTMENT":
			case "APT":
				cleanUnit = "APT";
				break;
			case "BASEMENT":
			case "BSMT":
				cleanUnit = "BSMT";
				break;
			case "BUILDING":
			case "BLDG":
			case "BLD":
			case "BLG":
				cleanUnit = "BLDG";
				break;
			case "FLOOR":
			case "FLOR":
			case "FLR":
			case "FL":
				cleanUnit = "FL";
				break;
			case "FRONT":
			case "FRNT":
				cleanUnit = "FRNT";
				break;
			case "HANGER":
			case "HNGR":
				cleanUnit = "HNGR";
				break;
			case "KEY":
				cleanUnit = "KEY";
				break;
			case "LOBBY":
			case "LBBY":
				cleanUnit = "LBBY";
				break;
			case "LOT":
				cleanUnit = "LOT";
				break;
			case "LOWER":
			case "LOWR":
				cleanUnit = "LOWR";
				break;
			case "OFFICE":
			case "OFC":
				cleanUnit = "OFC";
				break;
			case "PENTHOUSE":
			case "PH":
				cleanUnit = "PH";
				break;
			case "PIER":
			case "PEIR":
				cleanUnit = "PIER";
				break;
			case "REAR":
				cleanUnit = "REAR";
				break;
			case "SIDE":
				cleanUnit = "SIDE";
				break;
			case "SLIP":
			case "SLP":
				cleanUnit = "SLIP";
				break;
			case "SUITE":
			case "SUIT":
			case "SUTE`":
			case "STE":
				cleanUnit = "STE";
				break;
			case "SPC":
			case "SPACE":
				cleanUnit = "SPC";
				break;
			case "STOP":
			case "STP":
				cleanUnit = "STOP";
				break;
			case "TRLR":
			case "TRAILER":
				cleanUnit = "TRLR";
				break;
			case "UNIT":
			case "UNT":
				cleanUnit = "UNIT";
				break;
			case "UPPR":
			case "UPPER":
			case "UPER":
			case "UPR":
				cleanUnit = "UPPR";
				break;
			case "ROOM":
			case "RM":
				cleanUnit = "RM";
				break;
			case "DEPARTMENT":
			case "DEPT":
			case "DPT":
				cleanUnit = "DEPT";
				break;
			case "NUMBER":
			case "NMBR":
			case "NUM":
			case "NM":
				cleanUnit = "NUM";
				break;
			default:
				if ( matchRequired ) {
					cleanUnit = null;
				}
		}

		return cleanUnit;
	};

} ).call( this );