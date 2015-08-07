( function () {
	"use strict";

	var clean = require( "../../../common/clean" );

	//	https://en.wikipedia.org/wiki/Canadian_postal_abbreviations_for_provinces_and_territories

	module.exports = function ( state ) {
		var cleanState = clean( state );

		if ( !cleanState ) {
			return null;
		}

		switch ( cleanState ) {
			case "ALBERTA":
			case "ALTA":
			case "CA-AB":
			case "AB":
				cleanState = "AB";
				break;
			case "BRITISH COLUMBIA":
			case "COLOMBIE-BRITANNIQUE":
			case "CB":
			case "C B":
			case "C-B":
			case "B C":
			case "CA-BC":
			case "BC":
				cleanState = "BC";
				break;
			case "MANITOBA":
			case "MANATOBA":
			case "MAN":
			case "MB":
			case "CA-MB":
				cleanState = "MB";
				break;
			case "NEW BRUNSWICK":
			case "NEW BRUNSWIK":
			case "NEWBRUNSWICK":
			case "NEWBRUNSWIK":
			case "NOUVEAU-BRUNSWICK":
			case "NB":
			case "N B":
			case "CA-NB":
				cleanState = "NB";
				break;
			case "NEWFOUNDLAND AND LABRADOR":
			case "NEWFOUNDLAND & LABRADOR":
			case "NEWFOUNDLAND LABRADOR":
			case "NEWFOUNDLAND":
			case "LABRADOR":
			case "LB":
			case "L B":
			case "NF":
			case "N F":
			case "NFLD":
			case "TERRE-NEUVE-ET-LABRADOR":
			case "TERRE-NEUVE":
			case "TN":
			case "T N":
			case "T-N":
			case "NL":
			case "CA-NL":
				cleanState = "NL";
				break;
			case "NOVA SCOTIA":
			case "NOVASCOTIA":
			case "N S":
			case "NOUVELLE-ECOSSE":
			case "NE":
			case "N E":
			case "N-E":
			case "NS":
			case "CA-NS":
				cleanState = "NS";
				break;
			case "NORTHWEST TERRITORIES":
			case "NORTHWEST TERRITORY":
			case "NORTHWESTTERRITORY":
			case "NW TERRITORIES":
			case "NW TERRITORY":
			case "NWTERRITORIES":
			case "NWT":
			case "N W T":
			case "NW T":
			case "TERRITOIRES DU NORD-OUEST":
			case "TNO":
			case "T N O":
			case "CA-NT":
			case "NT":
				cleanState = "NT";
				break;
			case "NUNAVUT":
			case "NUN":
			case "NVT":
			case "CA-NU":
			case "NU":
				cleanState = "NU";
				break;
			case "ONTARIO":
			case "ONT":
			case "ON":
			case "CA-ON":
				cleanState = "ON";
				break;
			case "PRINCE EDWARD ISLAND":
			case "PRINCE EDWARD ISLE":
			case "PRINCE EDWARD":
			case "PEI":
			case "P E I":
			case "ILE-DU-PRINCE-EDOUARD":
			case "IPE":
			case "I P E":
			case "I-P-E":
			case "PE":
			case "CA-PE":
				cleanState = "PE";
				break;
			case "QUEBEC":
			case "QUE":
			case "PQ":
			case "P Q":
			case "QC":
			case "CA-QC":
				cleanState = "QC";
				break;
			case "SASKATCHEWAN":
			case "SASK":
			case "SK":
			case "CA-SK":
				cleanState = "SK";
				break;
			case "YUKON":
			case "YUCON":
			case "YUK":
			case "YT":
			case "CA-YT":
				cleanState = "YT";
				break;
			default:
				cleanState = null;
		}

		return cleanState;
	};

} ).call( this );