( function () {
	"use strict";

	var clean = require( "../clean" );

	module.exports = function ( state ) {
		var cleanState = clean( state );

		if ( !cleanState ) {
			return null;
		}

		//	Publication 28
		//	Appendix B
		//	Two–Letter State and Possession Abbreviations
		//	http://pe.usps.gov/text/pub28/28apb.htm
		//
		//	Combined with Misspelled State Names:
		//	http://www.offices.net/misspelled-state-names.htm
		//
		//	Tweaked a little

		switch ( cleanState ) {
			case "ALABAMA":
			case "ALBAMA":
			case "ALLABAMA":
			case "ALABAMMA":
			case "ALA":
			case "US-AL":
			case "AL":
				cleanState = "AL";
				break;
			case "ALASKA":
			case "ALSKA":
			case "ALLASKA":
			case "ALSAKA":
			case "ALAS":
			case "US-AK":
			case "AK":
				cleanState = "AK";
				break;
			case "AMERICAN SAMOA":
			case "AMERICAN SAMO":
			case "AMERICAN SAMOAH":
			case "AMERICAN SAMOH":
			case "AMERICA SAMOA":
			case "AMERICA SAMO":
			case "AMERICA SAMOAH":
			case "AMER SAMOA":
			case "AM SAMOA":
			case "A S":
			case "AS":
				cleanState = "AS";
				break;
			case "ARIZONA":
			case "ARZONA":
			case "ARIZNA":
			case "ARIZONIA":
			case "ARZINOA":
			case "ARIZ":
			case "US-AZ":
			case "AZ":
				cleanState = "AZ";
				break;
			case "ARKANSAS":
			case "ARCANSAS":
			case "ARKANSAW":
			case "ARC":
			case "ARK":
			case "US-AR":
			case "AR":
				cleanState = "AR";
				break;
			case "CALIFORNIA":
			case "CALIFRONIA":
			case "CALIFORNEA":
			case "CALAFORNIA":
			case "CALAFORNEA":
			case "CALFORNIA":
			case "CAL":
			case "CALIF":
			case "CALF":
			case "US-CA":
			case "CA":
				cleanState = "CA";
				break;
			case "COLORADO":
			case "COLARADO":
			case "COLARODO":
			case "COLORODO":
			case "CALORADO":
			case "COLO":
			case "COL":
			case "US-CO":
			case "CO":
				cleanState = "CO";
				break;
			case "CONNECTICUT":
			case "CONNECTICUTT":
			case "CONNETICUTT":
			case "CONNETTICUT":
			case "CONNETTICUTT":
			case "CONNETICUT":
			case "CONN":
			case "US-CT":
			case "CT":
				cleanState = "CT";
				break;
			case "DELAWARE":
			case "DELEWARE":
			case "DELAWERE":
			case "DELAWEAR":
			case "DELAWAER":
			case "DEL":
			case "DELA":
			case "US-DE":
			case "DE":
				cleanState = "DE";
				break;
			case "DISTRICT OF COLUMBIA":
			case "DISTRICT OF COLOMBIA":
			case "DISTRICT OF COLUMBA":
			case "DISTRICT COLUMBIA":
			case "DISTRICT OF COLUMBIA":
			case "WASH DC":
			case "WASH D C":
			case "US-DC":
			case "DC":
			case "D C":
				cleanState = "DC";
				break;
			case "FEDERATED STATES OF MICRONESIA":
			case "FEDERATED STATES OF MICRONESA":
			case "FEDERATED STATES OF MICRONISIA":
			case "FEDERATED STATES OF MICRONISA":
			case "FEDARATED STATES OF MICRONESIA":
			case "FEDARATED STATES OF MICRONESA":
			case "FEDARATED STATES OF MICRONISIA":
			case "FEDARATED STATES OF MICRONISA":
			case "FED OF MICRONISA":
			case "FED OF MICRO":
			case "FED MICRO":
			case "FED MICRONISA":
			case "FSOM":
			case "F S O M":
			case "FOM":
			case "F O M":
			case "FM":
			case "F M":
				cleanState = "FM";
				break;
			case "FLORIDA":
			case "FLORIDAS":
			case "FLORYDA":
			case "FLORDA":
			case "FLORDIA":
			case "FLORADA":
			case "FLA":
			case "FLOR":
			case "US-FL":
			case "FL":
				cleanState = "FL";
				break;
			case "GEORGIA":
			case "GEORGEIA":
			case "GEORGEA":
			case "GEORGIA":
			case "US-GA":
			case "GA":
				cleanState = "GA";
				break;
			case "GUAM":
			case "GAUM":
			case "GHUAM":
			case "GOAM":
			case "GU":
				cleanState = "GU";
				break;
			case "HAWAII":
			case "HAWAI":
			case "HOWAII":
			case "HAWII":
			case "HAWAAI":
			case "HAW":
			case "US-HI":
			case "HI":
				cleanState = "HI";
				break;
			case "IDAHO":
			case "IDAHOE":
			case "IDEHO":
			case "IDA":
			case "US-ID":
			case "ID":
				cleanState = "ID";
				break;
			case "ILLINOIS":
			case "ILINOIS":
			case "ILLANOIS":
			case "ILANOIS":
			case "ILINOIS":
			case "ILLANOISE":
			case "ILANOISE":
			case "ILL":
			case "ILLS":
			case "ILL'S":
			case "ILS":
			case "US-IL":
			case "IL":
				cleanState = "IL";
				break;
			case "INDIANA":
			case "INDEANA":
			case "INDIANNA":
			case "INDEANNA":
			case "INDIANA":
			case "IND":
			case "US-IN":
			case "IN":
				cleanState = "IN";
				break;
			case "IOWA":
			case "IOWHA":
			case "IOAW":
			case "IWOA":
			case "IOA":
			case "US-IA":
			case "IA":
				cleanState = "IA";
				break;
			case "KANSAS":
			case "KANSIS":
			case "CANSAS":
			case "CANSIS":
			case "KA":
			case "KAN":
			case "US-KS":
			case "KS":
				cleanState = "KS";
				break;
			case "KENTUCKY":
			case "KENTUKY":
			case "KENTUCY":
			case "KEN":
			case "KENT":
			case "US-KY":
			case "KY":
				cleanState = "KY";
				break;
			case "LOUISIANA":
			case "LOUISIANNA":
			case "LUISIANA":
			case "LUISIANNA":
			case "LOUSIANA":
			case "LOUSIANNA":
			case "LOUISEIANA":
			case "LOUISEIANNA":
			case "US-LA":
			case "LA":
				cleanState = "LA";
				break;
			case "MAINE":
			case "MAIN":
			case "MIANE":
			case "MIANE":
			case "US-ME":
			case "ME":
				cleanState = "ME";
				break;
			case "MARSHALL ISLANDS":
			case "MARSHALL ISLAND":
			case "MARSHALL ISLE":
			case "MARSHALL ISLES":
			case "MARSHULL ISLANDS":
			case "MARSHULL ISLAND":
			case "MARSHULL ISLE":
			case "MARSHULL ISLES":
			case "M H":
			case "MH":
				cleanState = "MH";
				break;
			case "MARYLAND":
			case "MARY LAND":
			case "MARRYLAND":
			case "MARLAND":
			case "MD":
			case "MD":
			case "US-MD":
			case "MD":
				cleanState = "MD";
				break;
			case "MASSACHUSETTS":
			case "MASSACHUSSETTS":
			case "MASACHUSETTS":
			case "MASACHUSETS":
			case "MASSACHUSSETS":
			case "MASS":
			case "US-MA":
			case "MA":
				cleanState = "MA";
				break;
			case "MICHIGAN":
			case "MICHGAN":
			case "MICHAGIN":
			case "MICHAGAN":
			case "MICHICAN":
			case "MICKIGAN":
			case "MICKICAN":
			case "MICHAGAN":
			case "MICHACAN":
			case "MICH":
			case "US-MI":
			case "MI":
				cleanState = "MI";
				break;
			case "MINNESOTA":
			case "MINESOTA":
			case "MINNASOTA":
			case "MINNASOTA":
			case "MENNESOTA":
			case "MENESOTA":
			case "MENNASOTA":
			case "MENNASOTA":
			case "MINN":
			case "US-MN":
			case "MN":
				cleanState = "MN";
				break;
			case "MISSISSIPPI":
			case "MISSISSIPI":
			case "MISSISIPI":
			case "MISSISIPPI":
			case "MISISSIPPI":
			case "MISISIPPI":
			case "MISSISIPPI":
			case "MISS":
			case "US-MS":
			case "MS":
				cleanState = "MS";
				break;
			case "MISSOURI":
			case "MISOURI":
			case "MISSOURA":
			case "MISOURA":
			case "MISORA":
			case "MISORI":
			case "MISOURY":
			case "MISORY":
			case "MISSOURY":
			case "MISSORY":
			case "US-MO":
			case "MO":
				cleanState = "MO";
				break;
			case "MONTANA":
			case "MONTANNA":
			case "MOUNTANA":
			case "MOUNTANNA":
			case "MONT":
			case "US-MT":
			case "MT":
				cleanState = "MT";
				break;
			case "NEBRASKA":
			case "NEWBRASKA":
			case "NEBRASCKA":
			case "NEWBRASCKA":
			case "NEB":
			case "NEBR":
			case "US-NE":
			case "NE":
				cleanState = "NE";
				break;
			case "NEVADA":
			case "NEVADDA":
			case "NEVADAA":
			case "NEWVADA":
			case "NAVADA":
			case "NAVADDA":
			case "NEVADAH":
			case "NEV":
			case "US-NV":
			case "NV":
				cleanState = "NV";
				break;
			case "NEW HAMPSHIRE":
			case "NEWHAMPSHIRE":
			case "NEW HEMPSHIRE":
			case "NEW HAMPSHIR":
			case "NEW HAMSHIRE":
			case "NEW HAMSHIR":
			case "NEW HAMSURE":
			case "NEW HAMPSURE":
			case "NEW HEMPSURE":
			case "US-NH":
			case "N H":
			case "NH":
				cleanState = "NH";
				break;
			case "NEW JERSEY":
			case "NEWJERSEY":
			case "NEW JURSEY":
			case "NEW JURSAY":
			case "NEW JERSAY":
			case "US-NJ":
			case "N J":
			case "NJ":
				cleanState = "NJ";
				break;
			case "NEW MEXICO":
			case "NEWMEXICO":
			case "NEW MEXACO":
			case "US-NM":
			case "N M":
			case "NM":
				cleanState = "NM";
				break;
			case "NEW YORK":
			case "NEW YRK":
			case "NEWYORK":
			case "US-NY":
			case "N Y":
			case "NY":
				cleanState = "NY";
				break;
			case "NORTH CAROLINA":
			case "NORTHCAROLINA":
			case "NORTH CAR":
			case "N CAROLINA":
			case "N CAR":
			case "US-NC":
			case "N C":
			case "NC":
				cleanState = "NC";
				break;
			case "NORTH DAKOTA":
			case "NORTHDAKOTA":
			case "NORDAKOTA":
			case "NORTH DACOTA":
			case "NORTHDACOTA":
			case "NORDACOTA":
			case "N DAK":
			case "N DACOTA":
			case "N DAKOTA":
			case "NOR DACOTA":
			case "NOR DAKOTA":
			case "NOR DAC":
			case "NOR DAK":
			case "NDAK":
			case "NDAC":
			case "US-ND":
			case "N D":
			case "ND":
				cleanState = "ND";
				break;
			case "NORTHERN MARIANA ISLANDS":
			case "NORTH MARIANA ISLANDS":
			case "N MARIANA ISLANDS":
			case "NORTH MAR ISLANDS":
			case "N MAR ISLANDS":
			case "NORTHERN MARIANA ISLAND":
			case "NORTH MARIANA ISLAND":
			case "N MARIANA ISLAND":
			case "NORTH MAR ISLAND":
			case "N MAR ISLAND":
			case "NORTHERN MARIANA ISLE":
			case "NORTH MARIANA ISLE":
			case "N MARIANA ISLE":
			case "NORTH MAR ISLE":
			case "N MAR ISLE":
			case "NORTHERN MARIANA ISLES":
			case "NORTH MARIANA ISLES":
			case "N MARIANA ISLES":
			case "NORTH MAR ISLES":
			case "N MAR ISLES":
			case "M P":
			case "MP":
				cleanState = "MP";
				break;
			case "OHIO":
			case "O-HIO":
			case "OHI-O":
			case "OIHO":
			case "O":
			case "US-OH":
			case "OH":
				cleanState = "OH";
				break;
			case "OKLAHOMA":
			case "OKALAHOMA":
			case "OKLA":
			case "US-OK":
			case "OK":
				cleanState = "OK";
				break;
			case "OREGON":
			case "OREGONE":
			case "ORGONE":
			case "ORGON":
			case "ORAGON":
			case "ORE":
			case "OREG":
			case "US-OR":
			case "OR":
				cleanState = "OR";
				break;
			case "PALAU":
			case "PALUA":
			case "PW":
				cleanState = "PW";
				break;
			case "PENNSYLVANIA":
			case "PENSYLVANIA":
			case "PENSELVANIA":
			case "PENSYLVAINIA":
			case "PENSYLVIANA":
			case "PENSYLVANA":
			case "PENNSELVANIA":
			case "PENNSYLVAINIA":
			case "PENNSYLVIANA":
			case "PENNSYLVANA":
			case "PENNSYLLVANIA":
			case "PENSYLLVANIA":
			case "PENSELLVANIA":
			case "PENSYLLVAINIA":
			case "PENSYLLVIANA":
			case "PENSYLLVANA":
			case "PENNSELLVANIA":
			case "PENNSYLLVAINIA":
			case "PENNSYLLVIANA":
			case "PENNSYLLVANA":
			case "PENN":
			case "PENNA":
			case "US-PA":
			case "PA":
				cleanState = "PA";
				break;
			case "PUERTO RICO":
			case "PURETO RICO":
			case "PURTO RICO":
			case "P R":
			case "PR":
				cleanState = "PR";
				break;
			case "RHODE ISLAND":
			case "ROAD ISLAND":
			case "RHODE ISLAND":
			case "RODE ISLAND":
			case "RHOD ISLAND":
			case "ROADISLAND":
			case "RHODEISLAND":
			case "RODEISLAND":
			case "RHODISLAND":
			case "R I":
			case "US-RI":
			case "RI":
				cleanState = "RI";
				break;
			case "SOUTH CAROLINA":
			case "SOUTHCAROLINA":
			case "SOUT CAROLIN":
			case "SOUTH CAROLNA":
			case "SOUH CAROLIA":
			case "SOUTH CAROLINA":
			case "S CAROLINA":
			case "SO CAROLINA":
			case "S CAR":
			case "SO CAR":
			case "S CARO":
			case "SO CARO":
			case "US-SC":
			case "S C":
			case "SC":
				cleanState = "SC";
				break;
			case "SOUTH DAKOTA":
			case "SOUTHDAKOTA":
			case "SOUTHDACOTA":
			case "SOUT DAKOT":
			case "SOUT DACOT":
			case "SOUTH DACOTA":
			case "SOUH DAKOTA":
			case "SOUH DACOTA":
			case "SOUTH DOKOTA":
			case "SOUTHDAKOTA":
			case "S DAKOTA":
			case "SO DAKOTA":
			case "S DAK":
			case "SDAK":
			case "SODAK":
			case "SO DAK":
			case "US-SD":
			case "S D":
			case "SD":
				cleanState = "SD";
				break;
			case "TENNESSEE":
			case "TENESSEE":
			case "TENESEE":
			case "TENESE":
			case "TENNESEE":
			case "TENNASSEE":
			case "TENASSEE":
			case "TENESEE":
			case "TENESE":
			case "TENNESEE":
			case "TENNISSE":
			case "TENNISSEE":
			case "TENNISEE":
			case "TEN":
			case "TENN":
			case "US-TN":
			case "TN":
				cleanState = "TN";
				break;
			case "TEXAS":
			case "TEXIS":
			case "TEXES":
			case "TEX":
			case "US-TX":
			case "TX":
				cleanState = "TX";
				break;
			case "UTAH":
			case "UTES":
			case "UTAR":
			case "UT":
				cleanState = "UT";
				break;
			case "VERMONT":
			case "VERMOUNT":
			case "VERMONTE":
			case "VERMOT":
			case "VURMONT":
			case "VURMONTE":
			case "US-VT":
			case "VT":
				cleanState = "VT";
				break;
			case "VIRGIN ISLANDS":
			case "VIRGIN ISLAND":
			case "VIRGIN ISLE":
			case "VIRGIN ISLES":
			case "VIRGINE ISLANDS":
			case "VIRGINE ISLAND":
			case "VIRGINE ISLE":
			case "VIRGINE ISLES":
			case "VURGIN ISLANDS":
			case "VURGIN ISLAND":
			case "VURGIN ISLE":
			case "VURGIN ISLES":
			case "VIRGINISLANDS":
			case "US-VI":
			case "V I":
			case "VI":
				cleanState = "VI";
				break;
			case "VIRGINIA":
			case "VIRGINAI":
			case "VIRGINA":
			case "VERGINIA":
			case "VERGINAI":
			case "VERGINA":
			case "VURGINIA":
			case "VURGINAI":
			case "VURGINA":
			case "VIR":
			case "VIRG":
			case "US-VA":
			case "VA":
				cleanState = "VA";
				break;
			case "WASHINGTON":
			case "WASHINTON":
			case "WASHONGTON":
			case "WASHONTON":
			case "WASHINGTIN":
			case "WASHINTIN":
			case "WASHONGTIN":
			case "WASHONTIN":
			case "WN":
			case "WASH":
			case "US-WA":
			case "WA":
				cleanState = "WA";
				break;
			case "WEST VIRGINIA":
			case "WESTVIRGINIA":
			case "WEST VIRGINIA":
			case "WEST VIRGINAI":
			case "WEST VIRGINA":
			case "WEST VERGINIA":
			case "WEST VERGINAI":
			case "WEST VERGINA":
			case "WEST VURGINIA":
			case "WEST VURGINAI":
			case "WEST VURGINA":
			case "W VIRGINIA":
			case "W VIRGINIA":
			case "W VIRGINAI":
			case "W VIRGINA":
			case "W VERGINIA":
			case "W VERGINAI":
			case "W VERGINA":
			case "W VURGINIA":
			case "W VURGINAI":
			case "W VURGINA":
			case "W VIRG":
			case "WEST VIRG":
			case "W VIR":
			case "WEST VIR":
			case "US-WV":
			case "W V":
			case "WV":
				cleanState = "WV";
				break;
			case "WISCONSIN":
			case "WISCONSON":
			case "WISSCONSIN":
			case "WISSCONSON":
			case "WISCONSSIN":
			case "WISCONSSON":
			case "WISSCONSSIN":
			case "WISSCONSSON":
			case "WIS":
			case "WISS":
			case "WISC":
			case "US-WI":
			case "WI":
				cleanState = "WI";
				break;
			case "WYOMING":
			case "WHYOMING":
			case "WIOMING":
			case "WYO":
			case "US-WY":
			case "WY":
				cleanState = "WY";
				break;
			case "ARMED FORCES EUROPE, THE MIDDLE EAST AND CANADA":
			case "ARMED FORCES EUROPE, THE MIDDLE EAST, AND CANADA":
			case "ARMED FORCES EUROPE, MIDDLE EAST AND CANADA":
			case "ARMED FORCES EUROPE, MIDDLE EAST, AND CANADA":
			case "ARMED FORCES MIDDLE EAST":
			case "ARMED FORCES CANADA":
			case "ARMED FORCES EUROPE, THE MIDDLE EAST, & CANADA":
			case "ARMED FORCES EUROPE, THE MIDDLE EAST & CANADA":
			case "ARMED FORCES EUROPE, MIDDLE EAST, & CANADA":
			case "ARMED FORCES EUROPE, MIDDLE EAST & CANADA":
			case "ARMED FORCES EUROPE, THE MIDDLE EAST AND CANADA":
			case "ARMED FORCES EUROPE, THE MIDDLE EAST, AND CANADA":
			case "AF EUROPE, MIDDLE EAST AND CANADA":
			case "AF EUROPE, MIDDLE EAST, AND CANADA":
			case "AF MIDDLE EAST":
			case "AF CANADA":
			case "AF EUROPE, THE MIDDLE EAST, & CANADA":
			case "AF EUROPE, THE MIDDLE EAST & CANADA":
			case "AF EUROPE, MIDDLE EAST, & CANADA":
			case "AF EUROPE, MIDDLE EAST & CANADA":
			case "A E":
			case "AE":
				cleanState = "AE";
				break;
			case "ARMED FORCES PACIFIC":
			case "AF PACIFIC":
			case "A F PACIFIC":
			case "A P":
			case "AP":
				cleanState = "AP";
				break;
			case "ARMED FORCES AMERICAS":
			case "ARMED FORCES AMERICA":
			case "AF AMERICAS":
			case "A F AMERICAS":
			case "AF AMERICA":
			case "A F AMERICA":
			case "A A":
			case "AA":
				cleanState = "AA";
				break;
			default:
				cleanState = null;
		}

		return cleanState;
	};

} ).call( this );