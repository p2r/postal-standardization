( function () {
	"use strict";

	var clean = require( "../../../common/clean" );

	module.exports.getStateForCode = function ( code ) {
		var cleanCode = clean( code );

		if ( !cleanCode ) {
			return null;
		}

		switch ( cleanCode ) {
			case "10":
				cleanCode = "NL";
				break;
			case "11":
				cleanCode = "PE";
				break;
			case "12":
				cleanCode = "NS";
				break;
			case "13":
				cleanCode = "NB";
				break;
			case "24":
				cleanCode = "QC";
				break;
			case "35":
				cleanCode = "ON";
				break;
			case "46":
				cleanCode = "MB";
				break;
			case "47":
				cleanCode = "SK";
				break;
			case "48":
				cleanCode = "AB";
				break;
			case "59":
				cleanCode = "BC";
				break;
			case "60":
				cleanCode = "YT";
				break;
			case "61":
				cleanCode = "NT";
				break;
			default:
				cleanCode = null;
		}

		return cleanCode;
	};

	module.exports.getCodeForState = function ( stateCode ) {
		var cleanCode;

		if ( !stateCode ) {
			return null;
		}

		cleanCode = stateCode.toString().trim();
		if ( cleanCode === "" ) {
			return null;
		}

		cleanCode = cleanCode.toUpperCase();

		switch ( cleanCode ) {

			case "NL":
				cleanCode = "10";
				break;
			case "PE":
				cleanCode = "11";
				break;
			case "NS":
				cleanCode = "12";
				break;
			case "NB":
				cleanCode = "13";
				break;
			case "QC":
				cleanCode = "24";
				break;
			case "ON":
				cleanCode = "35";
				break;
			case "MB":
				cleanCode = "46";
				break;
			case "SK":
				cleanCode = "47";
				break;
			case "AB":
				cleanCode = "48";
				break;
			case "BC":
				cleanCode = "59";
				break;
			case "YT":
				cleanCode = "60";
				break;
			case "NT":
				cleanCode = "61";
				break;
			default:
				cleanCode = null;
		}

		return cleanCode;
	};

} ).call( this );