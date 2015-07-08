( function () {
	"use strict";

	var clean = require( "../clean" );

	module.exports.getStateForCode = function ( code, matchRequired ) {
		var cleanCode = clean( code );

		if ( !cleanCode ) {
			return null;
		}

		//	Federal Information Processing Standard State Code
		//	https://en.wikipedia.org/wiki/Federal_Information_Processing_Standard_state_code
		//
		//	Tweaked a little

		switch ( cleanCode ) {
			case "01":
			case "1":
				cleanCode = "AL";
				break;
			case "02":
			case "2":
				cleanCode = "AK";
				break;
			// case "03":
			// 	cleanCode = "AS";
			// 	break;
			case "60":
				cleanCode = "AS";
				break;
			case "04":
			case "4":
				cleanCode = "AZ";
				break;
			case "05":
			case "5":
				cleanCode = "AR";
				break;
			// case "81":
			// 	//	Baker Island
			// 	//	Minor outlying island territory
			// 	cleanCode = "";
			// 	break;
			case "06":
			case "6":
				cleanCode = "CA";
				break;
			// case "07":
			// case "7":
			// 	//	Canal Zone
			// 	cleanCode = "";
			// 	break;
			case "08":
			case "8":
				cleanCode = "CO";
				break;
			case "09":
			case "9":
				cleanCode = "CT";
				break;
			case "10":
				cleanCode = "DE";
				break;
			case "11":
				cleanCode = "DC";
				break;
			case "64":
				cleanCode = "FM";
				break;
			case "12":
				cleanCode = "FL";
				break;
			case "13":
				cleanCode = "GA";
				break;
			case "66":
				cleanCode = "GU";
				break;
			case "15":
				cleanCode = "HI";
				break;
			// case "84":
			// 	//	Howland Island
			// 	//	Minor outlying island territory"
			// 	cleanCode = "";
			// 	break;
			case "16":
				cleanCode = "ID";
				break;
			case "17":
				cleanCode = "IL";
				break;
			case "18":
				cleanCode = "IN";
				break;
			case "19":
				cleanCode = "IA";
				break;
			// case "86":
			// 	//	Jarvis Island
			// 	//	Minor outlying island territory
			// 	cleanCode = "";
			// 	break;
			// case "67":
			// 	//	Johnston Atoll
			// 	//	Minor outlying island territory
			// 	cleanCode = "";
			// 	break;
			case "20":
				cleanCode = "KS";
				break;
			case "21":
				cleanCode = "KY";
				break;
			// case "89":
			// 	//	Kingman Reef
			// 	//	Minor outlying island territory
			// 	cleanCode = "";
			// 	break;
			case "22":
				cleanCode = "LA";
				break;
			case "23":
				cleanCode = "ME";
				break;
			case "68":
				cleanCode = "MH";
				break;
			case "24":
				cleanCode = "MD";
				break;
			case "25":
				cleanCode = "MA";
				break;
			case "26":
				cleanCode = "MI";
				break;
			// case "71":
			// 	//	Midway Islands
			// 	//	Minor outlying island territory
			// 	cleanCode = "";
			// 	break;
			case "27":
				cleanCode = "MN";
				break;
			case "28":
				cleanCode = "MS";
				break;
			case "29":
				cleanCode = "MO";
				break;
			case "30":
				cleanCode = "MT";
				break;
			// case "76":
			// 	//	Navassa Island
			// 	//	Minor outlying island territory
			// 	cleanCode = "";
			// 	break;
			case "31":
				cleanCode = "NE";
				break;
			case "32":
				cleanCode = "NV";
				break;
			case "33":
				cleanCode = "NH";
				break;
			case "34":
				cleanCode = "NJ";
				break;
			case "35":
				cleanCode = "NM";
				break;
			case "36":
				cleanCode = "NY";
				break;
			case "37":
				cleanCode = "NC";
				break;
			case "38":
				cleanCode = "ND";
				break;
			case "69":
				cleanCode = "MP";
				break;
			case "39":
				cleanCode = "OH";
				break;
			case "40":
				cleanCode = "OK";
				break;
			case "41":
				cleanCode = "OR";
				break;
			case "70":
				cleanCode = "PW";
				break;
			// case "95":
			// 	//	Palmyra Atoll
			// 	//	Minor outlying island territory
			// 	cleanCode = "";
			// 	break;
			case "42":
				cleanCode = "PA";
				break;
			// case "43":
			// 	cleanCode = "";
			// 	break;
			case "72":
				cleanCode = "PR";
				break;
			case "44":
				cleanCode = "RI";
				break;
			case "45":
				cleanCode = "SC";
				break;
			case "46":
				cleanCode = "SD";
				break;
			case "47":
				cleanCode = "TN";
				break;
			case "48":
				cleanCode = "TX";
				break;
			case "74":
				cleanCode = "UM";
				break;
			case "49":
				cleanCode = "UT";
				break;
			case "50":
				cleanCode = "VT";
				break;
			// case "52":
			// 	cleanCode = "";
			// 	break;
			case "78":
				cleanCode = "VI";
				break;
			case "51":
				cleanCode = "VA";
				break;
			// case "79":
			// 	//	Wake Island
			// 	//	Minor outlying island territory
			// 	cleanCode = "";
			// 	break;
			case "53":
				cleanCode = "WA";
				break;
			case "54":
				cleanCode = "WV";
				break;
			case "55":
				cleanCode = "WI";
				break;
			case "56":
				cleanCode = "WY";
				break;
			default:
				if ( matchRequired ) {
					cleanCode = null;
				}
		}

		return cleanCode;
	};

	module.exports.getCodeForState = function ( stateCode, matchRequired ) {
		var cleanCode;

		if ( !stateCode ) {
			return null;
		}

		cleanCode = stateCode.toString().trim();
		if ( cleanCode === "" ) {
			return null;
		}

		cleanCode = cleanCode.toUpperCase();

		//	Federal Information Processing Standard State Code
		//	https://en.wikipedia.org/wiki/Federal_Information_Processing_Standard_state_code
		//
		//	Tweaked a little

		switch ( cleanCode ) {
			case "AL":
				cleanCode = "01";
				break;
			case "AK":
				cleanCode = "02";
				break;
			case "AS":
				cleanCode = "60";
				break;
			case "AZ":
				cleanCode = "04";
				break;
			case "AR":
				cleanCode = "05";
				break;
			case "CA":
				cleanCode = "06";
				break;
			case "CO":
				cleanCode = "08";
				break;
			case "CT":
				cleanCode = "09";
				break;
			case "DE":
				cleanCode = "10";
				break;
			case "DC":
				cleanCode = "11";
				break;
			case "FM":
				cleanCode = "64";
				break;
			case "FL":
				cleanCode = "12";
				break;
			case "GA":
				cleanCode = "13";
				break;
			case "GU":
				cleanCode = "66";
				break;
			case "HI":
				cleanCode = "15";
				break;
			case "ID":
				cleanCode = "16";
				break;
			case "IL":
				cleanCode = "17";
				break;
			case "IN":
				cleanCode = "18";
				break;
			case "IA":
				cleanCode = "19";
				break;
			case "KS":
				cleanCode = "20";
				break;
			case "KY":
				cleanCode = "21";
				break;
			case "LA":
				cleanCode = "22";
				break;
			case "ME":
				cleanCode = "23";
				break;
			case "MH":
				cleanCode = "68";
				break;
			case "MD":
				cleanCode = "24";
				break;
			case "MA":
				cleanCode = "25";
				break;
			case "MI":
				cleanCode = "26";
				break;
			case "MN":
				cleanCode = "27";
				break;
			case "MS":
				cleanCode = "28";
				break;
			case "MO":
				cleanCode = "29";
				break;
			case "MT":
				cleanCode = "30";
				break;
			case "NE":
				cleanCode = "31";
				break;
			case "NV":
				cleanCode = "32";
				break;
			case "NH":
				cleanCode = "33";
				break;
			case "NJ":
				cleanCode = "34";
				break;
			case "NM":
				cleanCode = "35";
				break;
			case "NY":
				cleanCode = "36";
				break;
			case "NC":
				cleanCode = "37";
				break;
			case "ND":
				cleanCode = "38";
				break;
			case "MP":
				cleanCode = "69";
				break;
			case "OH":
				cleanCode = "39";
				break;
			case "OK":
				cleanCode = "40";
				break;
			case "OR":
				cleanCode = "41";
				break;
			case "PW":
				cleanCode = "70";
				break;
			case "PA":
				cleanCode = "42";
				break;
			case "PR":
				cleanCode = "72";
				break;
			case "RI":
				cleanCode = "44";
				break;
			case "SC":
				cleanCode = "45";
				break;
			case "SD":
				cleanCode = "46";
				break;
			case "TN":
				cleanCode = "47";
				break;
			case "TX":
				cleanCode = "48";
				break;
			case "UM":
				cleanCode = "74";
				break;
			case "UT":
				cleanCode = "49";
				break;
			case "VT":
				cleanCode = "50";
				break;
			case "VI":
				cleanCode = "78";
				break;
			case "VA":
				cleanCode = "51";
				break;
			case "WA":
				cleanCode = "53";
				break;
			case "WV":
				cleanCode = "54";
				break;
			case "WI":
				cleanCode = "55";
				break;
			case "WY":
				cleanCode = "56";
				break;
			default:
				if ( matchRequired ) {
					cleanCode = null;
				}
		}

		return cleanCode;
	};

} ).call( this );