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
		//	Tweaked a little

		switch ( cleanUnit ) {
			case "APARTMENT":
			case "APT":
				cleanUnit = "APT";
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
			case "SUITE":
			case "SUIT":
			case "SUTE`":
			case "STE":
				cleanUnit = "STE";
				break;
			case "UNIT":
			case "UNT":
				cleanUnit = "UNIT";
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