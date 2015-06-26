( function () {
	"use strict";

	module.exports = function ( suffix ) {
		var cleanSuffix;

		if ( !suffix ) {
			return null;
		}

		cleanSuffix = suffix.trim();
		if ( cleanSuffix === "" ) {
			return null;
		}

		cleanSuffix = cleanSuffix.toUpperCase();

		//	Publication 28
		//	C1 Street Suffix Abbreviations
		//	http://pe.usps.gov/text/pub28/28apc_002.htm
		//
		//	Tweaked a little

		switch ( cleanSuffix ) {
			case "ALLEE":
			case "ALLEY":
			case "ALLY":
			case "ALY":
				cleanSuffix = "ALY";
				break;
			case "ANEX":
			case "ANX":
			case "ANNEX":
			case "ANNX":
			case "ANX":
				cleanSuffix = "ANX";
				break;
			case "ARC":
			case "ARCADE":
				cleanSuffix = "ARC";
				break;
			case "AV":
			case "AVE":
			case "AVE":
			case "AVEN":
			case "AVENU":
			case "AVENUE":
			case "AVN":
			case "AVNUE":
				cleanSuffix = "AVE";
				break;
			case "BAYOO":
			case "BAYOU":
			case "BYU":
				cleanSuffix = "BYU";
				break;
			case "BCH":
			case "BEACH":
				cleanSuffix = "BCH";
				break;
			case "BEND":
			case "BND":
				cleanSuffix = "BND";
				break;
			case "BLF":
			case "BLUF":
			case "BLUFF":
				cleanSuffix = "BLF";
				break;
			case "BLUFFS":
			case "BLFS":
				cleanSuffix = "BLFS";
				break;
			case "BOT":
			case "BTM":
			case "BOTTM":
			case "BOTTOM":
				cleanSuffix = "BTM";
				break;
			case "BLVD":
			case "BOUL":
			case "BOULEVARD":
			case "BOULV":
				cleanSuffix = "BLVD";
				break;
			case "BR":
			case "BRNCH":
			case "BRANCH":
				cleanSuffix = "BR";
				break;
			case "BRDGE":
			case "BRG":
			case "BRIDGE":
				cleanSuffix = "BRG";
				break;
			case "BRK":
			case "BROOK":
				cleanSuffix = "BRK";
				break;
			case "BROOKS":
			case "BRKS":
				cleanSuffix = "BRKS";
				break;
			case "BURG":
			case "BRG":
				cleanSuffix = "BRG";
				break;
			case "BURGS":
			case "BGS":
				cleanSuffix = "BGS";
				break;
			case "BYP":
			case "BYPA":
			case "BYPAS":
			case "BYPASS":
			case "BYPS":
				cleanSuffix = "BYP";
				break;
			case "CAMP":
			case "CP":
			case "CMP":
				cleanSuffix = "CP";
				break;
			case "CANYN":
			case "CYN":
			case "CANYON":
			case "CNYN":
				cleanSuffix = "CYN";
				break;
			case "CAPE":
			case "CPE":
				cleanSuffix = "CPE";
				break;
			case "CAUSEWAY":
			case "CSWY":
			case "CAUSWA":
				cleanSuffix = "CSWY";
				break;
			case "CEN":
			case "CTR":
			case "CENT":
			case "CENTER":
			case "CENTR":
			case "CENTRE":
			case "CNTER":
			case "CNTR":
				cleanSuffix = "CTR";
				break;
			case "CENTERS":
			case "CTRS":
				cleanSuffix = "CTRS";
				break;
			case "CIR":
			case "CIRC":
			case "CIRCL":
			case "CIRCLE":
			case "CRCL":
			case "CRCLE":
				cleanSuffix = "CIR";
				break;
			case "CIRCLES":
			case "CIRS":
				cleanSuffix = "CIRS";
				break;
			case "CLF":
			case "CLIFF":
				cleanSuffix = "CLF";
				break;
			case "CLFS":
			case "CLIFFS":
				cleanSuffix = "CLFS";
				break;
			case "CLB":
			case "CLUB":
				cleanSuffix = "CLB";
				break;
			case "COMMON":
			case "CMN":
				cleanSuffix = "CMN";
				break;
			case "COMMONS":
			case "CMNS":
				cleanSuffix = "CMNS";
				break;
			case "COR":
			case "CORNER":
				cleanSuffix = "COR";
				break;
			case "CORNERS":
			case "CORS":
				cleanSuffix = "CORS";
				break;
			case "COURSE":
			case "CRSE":
				cleanSuffix = "CRSE";
				break;
			case "COURT":
			case "CT":
				cleanSuffix = "CT";
				break;
			case "COURTS":
			case "CTS":
				cleanSuffix = "CTS";
				break;
			case "COVE":
			case "CV":
				cleanSuffix = "CV";
				break;
			case "COVES":
			case "CVS":
				cleanSuffix = "CVS";
				break;
			case "CREEK":
			case "CRK":
				cleanSuffix = "CRK";
				break;
			case "CRESCENT":
			case "CRES":
			case "CRSENT":
			case "CRSNT":
				cleanSuffix = "CRES";
				break;
			case "CREST":
			case "CRST":
				cleanSuffix = "CRST";
				break;
			case "CROSSING":
			case "CRSSNG":
			case "XING":
				cleanSuffix = "XING";
				break;
			case "CROSSROAD":
			case "XRD":
				cleanSuffix = "XRD";
				break;
			case "CROSSROADS":
			case "XRDS":
				cleanSuffix = "XRDS";
				break;
			case "CURVE":
			case "CURV":
				cleanSuffix = "CURV";
				break;
			case "DALE":
			case "DL":
				cleanSuffix = "DL";
				break;
			case "DAM":
			case "DM":
				cleanSuffix = "DM";
				break;
			case "DIV":
			case "DIVIDE":
			case "DV":
			case "DVD":
				cleanSuffix = "DV";
				break;
			case "DR":
			case "DRIV":
			case "DRIVE":
			case "DRV":
				cleanSuffix = "DR";
				break;
			case "DRIVES":
			case "DRS":
				cleanSuffix = "DRS";
				break;
			case "EST":
			case "ESTATE":
				cleanSuffix = "EST";
				break;
			case "ESTATES":
			case "ESTS":
				cleanSuffix = "ESTS";
				break;
			case "EXP":
			case "EXPY":
			case "EXPR":
			case "EXPRESS":
			case "EXPRESSWAY":
			case "EXPW":
				cleanSuffix = "EXPY";
				break;
			case "EXT":
			case "EXTENSION":
			case "EXTN":
			case "EXTNSN":
				cleanSuffix = "EXT";
				break;
			case "EXTENSIONS":
			case "EXTS":
				cleanSuffix = "EXTS";
				break;
			case "FALL":
			case "FLL":
				cleanSuffix = "FALL";
				break;
			case "FALLS":
			case "FLS":
				cleanSuffix = "FLS";
				break;
			case "FERRY":
			case "FRY":
			case "FRRY":
				cleanSuffix = "FRY";
				break;
			case "FIELD":
			case "FLD":
				cleanSuffix = "FLD";
				break;
			case "FIELDS":
			case "FLDS":
				cleanSuffix = "FLDS";
				break;
			case "":
				cleanSuffix = "";
				break;
			case "FLAT":
			case "FLT":
				cleanSuffix = "";
				break;
			case "FLATS":
			case "FLTS":
				cleanSuffix = "FLTS";
				break;
			case "FORD":
			case "FRD":
				cleanSuffix = "FRD";
				break;
			case "FORDS":
			case "FRDS":
				cleanSuffix = "FRDS";
				break;
			case "FOREST":
			case "FRST":
			case "FORESTS":
				cleanSuffix = "FRST";
				break;
			case "FORG":
			case "FRG":
			case "FORGE":
				cleanSuffix = "FRG";
				break;
			case "FORGES":
			case "FRGS":
				cleanSuffix = "FRGS";
				break;
			case "FORK":
			case "FRK":
				cleanSuffix = "FRK";
				break;
			case "FORKS":
			case "FRKS":
				cleanSuffix = "FRKS";
				break;
			case "FORT":
			case "FT":
			case "FRT":
				cleanSuffix = "FRT";
				break;
			case "FREEWAY":
			case "FWY":
			case "FREEWY":
			case "FRWAY":
			case "FRWY":
				cleanSuffix = "FWY";
				break;
			case "GARDEN":
			case "GDN":
			case "GARDN":
			case "GRDEN":
			case "GRDN":
				cleanSuffix = "GDN";
				break;
			case "GARDENS":
			case "GDNS":
			case "GRDNS":
				cleanSuffix = "GDNS";
				break;
			case "GATEWAY":
			case "GTWY":
			case "GATEWY":
			case "GATWAY":
			case "GTWAY":
				cleanSuffix = "GTWY";
				break;
			case "GLEN":
			case "GLN":
				cleanSuffix = "GLN";
				break;
			case "GLENS":
			case "GLNS":
				cleanSuffix = "GLNS";
				break;
			case "GREEN":
			case "GRN":
				cleanSuffix = "GRN";
				break;
			case "GREENS":
			case "GRNS":
				cleanSuffix = "GRNS";
				break;
			case "GROV":
			case "GRV":
			case "GROVE":
				cleanSuffix = "GRV";
				break;
			case "GROVES":
			case "GRVS":
				cleanSuffix = "GRVS";
				break;
			case "HARB":
			case "HARBOR":
			case "HARBR":
			case "HBR":
			case "HRBOR":
				cleanSuffix = "HBR";
				break;
			case "HARBORS":
			case "HBRS":
				cleanSuffix = "HBRS";
				break;
			case "HAVEN":
			case "HVN":
				cleanSuffix = "HVN";
				break;
			case "HT":
			case "HTS":
				cleanSuffix = "HTS";
				break;
			case "HIGHWAY":
			case "HIGHWY":
			case "HIWAY":
			case "HIWY":
			case "HWAY":
			case "HWY":
				cleanSuffix = "HWY";
				break;
			case "HILL":
			case "HL":
				cleanSuffix = "HL";
				break;
			case "HILLS":
			case "HLS":
				cleanSuffix = "HLS";
				break;
			case "HLLW":
			case "HOLLOW":
			case "HOLLOWS":
			case "HOLW":
			case "HOLWS":
				cleanSuffix = "HOLW";
				break;
			case "INLET":
			case "INLT":
				cleanSuffix = "INLT";
				break;
			case "IS":
			case "ISLAND":
			case "ISLND":
				cleanSuffix = "IS";
				break;
			case "ISLANDS":
			case "ISLNDS":
			case "ISS":
				cleanSuffix = "ISS";
				break;
			case "ISLE":
			case "ISLES":
				cleanSuffix = "ISLE";
				break;
			case "JCT":
			case "JCTION":
			case "JCTN":
			case "JUNCTION":
			case "JUNCTN":
			case "JUNCTON":
				cleanSuffix = "JCT";
				break;
			case "JCTNS":
			case "JCTS":
			case "JUNCTIONS":
				cleanSuffix = "JCTS";
				break;
			case "KEY":
			case "KY":
				cleanSuffix = "KY";
				break;
			case "KEYS":
			case "KYS":
				cleanSuffix = "KYS";
				break;
			case "KNL":
			case "KNOL":
			case "KNOLL":
				cleanSuffix = "KNL";
				break;
			case "KNLS":
			case "KNOLLS":
				cleanSuffix = "KNLS";
				break;
			case "LK":
			case "LAKE":
				cleanSuffix = "LK";
				break;
			case "LKS":
			case "LAKES":
				cleanSuffix = "LKS";
				break;
			case "LAND":
				cleanSuffix = "LAND";
				break;
			case "LANDING":
			case "LNDG":
			case "LNDNG":
				cleanSuffix = "LNDG";
				break;
			case "LANE":
			case "LN":
				cleanSuffix = "LN";
				break;
			case "LGT":
			case "LIGHT":
				cleanSuffix = "LGT";
				break;
			case "LIGHTS":
			case "LGTS":
				cleanSuffix = "LGTS";
				break;
			case "LF":
			case "LOAF":
				cleanSuffix = "LF";
				break;
			case "LCK":
			case "LOCK":
				cleanSuffix = "LCK";
				break;
			case "LCKS":
			case "LOCKS":
				cleanSuffix = "LCKS";
				break;
			case "LDG":
			case "LDGE":
			case "LODG":
			case "LODGE":
				cleanSuffix = "LDG";
				break;
			case "LOOP":
			case "LOOPS":
			case "LP":
				cleanSuffix = "LP";
				break;
			case "MALL":
				cleanSuffix = "MALL";
				break;
			case "MNR":
			case "MANOR":
				cleanSuffix = "MNR";
				break;
			case "MANORS":
			case "MNRS":
				cleanSuffix = "MNRS";
				break;
			case "MEADOW":
			case "MDW":
				cleanSuffix = "MDW";
				break;
			case "MDWS":
			case "MEADOWS":
			case "MEDOWS":
				cleanSuffix = "MDWS";
				break;
			case "MEWS":
				cleanSuffix = "MEWS";
				break;
			case "MILL":
			case "ML":
				cleanSuffix = "ML";
				break;
			case "MILLS":
			case "MLS":
				cleanSuffix = "MLS";
				break;
			case "MISSION":
			case "MISSN":
			case "MSN":
			case "MSSN":
				cleanSuffix = "MSN";
				break;
			case "MOTORWAY":
			case "MOTORWY":
			case "MTRWY":
			case "MTWY":
				cleanSuffix = "MTWY";
				break;
			case "MNT":
			case "MT":
			case "MOUNT":
				cleanSuffix = "MT";
				break;
			case "MNTAIN":
			case "MNTN":
			case "MOUNTAIN":
			case "MOUNTIN":
			case "MTIN":
			case "MTN":
				cleanSuffix = "MTN";
				break;
			case "MTNS":
			case "MOUNTAINS":
				cleanSuffix = "MTNS";
				break;
			case "NCK":
			case "NECK":
				cleanSuffix = "NCK";
				break;
			case "ORCH":
			case "ORCHARD":
			case "ORCHRD":
				cleanSuffix = "ORCH";
				break;
			case "OVAL":
			case "OVL":
				cleanSuffix = "OVL";
				break;
			case "OVERPASS":
			case "OPAS":
				cleanSuffix = "OPAS";
				break;
			case "PARK":
			case "PRK":
				cleanSuffix = "PRK";
				break;
			case "PARKS":
			case "PRKS":
				cleanSuffix = "PRKS";
				break;
			case "PARKWAY":
			case "PARKWY":
			case "PKWAY":
			case "PKWY":
			case "PKY":
				cleanSuffix = "PKWY";
				break;
			case "PARKWAYS":
			case "PARKWYS":
			case "PKWAYS":
			case "PKWYS":
			case "PKYS":
				cleanSuffix = "PKWYS";
				break;
			case "PASS":
				cleanSuffix = "PASS";
				break;
			case "PASSAGE":
			case "PSGE":
				cleanSuffix = "PSGE";
				break;
			case "PATH":
			case "PATHS":
				cleanSuffix = "PATH";
				break;
			case "PIKE":
			case "PIKES":
				cleanSuffix = "PIKE";
				break;
			case "PINE":
			case "PNE":
				cleanSuffix = "PNE";
				break;
			case "PINES":
			case "PNES":
				cleanSuffix = "PNES";
				break;
			case "PLACE":
			case "PL":
				cleanSuffix = "PL";
				break;
			case "PLAIN":
			case "PLN":
				cleanSuffix = "PLN";
				break;
			case "PLAINS":
			case "PLNS":
				cleanSuffix = "PLNS";
				break;
			case "PLAZA":
			case "PLZ":
			case "PLZA":
				cleanSuffix = "PLZ";
				break;
			case "POINT":
			case "PT":
				cleanSuffix = "PT";
				break;
			case "POINTS":
			case "PTS":
				cleanSuffix = "PTS";
				break;
			case "PORT":
			case "PRT":
				cleanSuffix = "PRT";
				break;
			case "PORTS":
			case "PRTS":
				cleanSuffix = "PRTS";
				break;
			case "PR":
			case "PRAIRIE":
			case "PRR":
				cleanSuffix = "PR";
				break;
			case "RAD":
			case "RADL":
			case "RADIAL":
			case "RADIEL":
				cleanSuffix = "RADL";
				break;
			case "RAMP":
				cleanSuffix = "RAMP";
				break;
			case "RANCH":
			case "RANCHES":
			case "RNCH":
			case "RNCHS":
				cleanSuffix = "RNCH";
				break;
			case "RAPID":
			case "RPD":
				cleanSuffix = "RPD";
				break;
			case "RAPIDS":
			case "RPDS":
				cleanSuffix = "RPDS";
				break;
			case "REST":
			case "RST":
				cleanSuffix = "RST";
				break;
			case "RDG":
			case "RDGE":
			case "RIDGE":
				cleanSuffix = "RDG";
				break;
			case "RDGS":
			case "RIDGES":
				cleanSuffix = "RDGS";
				break;
			case "RIV":
			case "RIVER":
			case "RVR":
			case "RIVR":
				cleanSuffix = "RIV";
				break;
			case "ROAD":
			case "RD":
				cleanSuffix = "RD";
				break;
			case "ROADS":
			case "RDS":
				cleanSuffix = "RDS";
				break;
			case "ROUTE":
			case "RTE":
				cleanSuffix = "RTE";
				break;
			case "ROW":
				cleanSuffix = "ROW";
				break;
			case "RUE":
				cleanSuffix = "RUE";
				break;
			case "RUN":
				cleanSuffix = "RUN";
				break;
			case "SHL":
			case "SHOAL":
				cleanSuffix = "SHL";
				break;
			case "SHOALS":
			case "SHLS":
				cleanSuffix = "SHLS";
				break;
			case "SHOAR":
			case "SHR":
			case "SHORE":
				cleanSuffix = "SHR";
				break;
			case "SHORES":
			case "SHOARS":
			case "SHRS":
				cleanSuffix = "SHRS";
				break;
			case "SPG":
			case "SPNG":
			case "SPRING":
			case "SPRNG":
				cleanSuffix = "SPG";
				break;
			case "SPGS":
			case "SPNGS":
			case "SPRINGS":
			case "SPRNGS":
				cleanSuffix = "SPGS";
				break;
			case "SPUR":
			case "SPR":
				cleanSuffix = "SPUR";
				break;
			case "SPURS":
			case "SPRS":
				cleanSuffix = "SPURS";
				break;
			case "SQ":
			case "SQR":
			case "SQRE":
			case "SQU":
			case "SQUARE":
				cleanSuffix = "SQ";
				break;
			case "SQRS":
			case "SQS":
			case "SQUARES":
				cleanSuffix = "SQS";
				break;
			case "STA":
			case "STATION":
			case "STATN":
			case "STN":
				cleanSuffix = "STA";
				break;
			case "STRA":
			case "STRAV":
			case "STRAVEN":
			case "STRAVENUE":
			case "STRAVN":
			case "STRVN":
			case "STRVNUE":
				cleanSuffix = "STRA";
				break;
			case "STREAM":
			case "STRM":
			case "STREME":
				cleanSuffix = "STRM";
				break;
			case "STREET":
			case "STRT":
			case "ST":
			case "STR":
				cleanSuffix = "ST";
				break;
			case "STREETS":
			case "STS":
				cleanSuffix = "STS";
				break;
			case "SMT":
			case "SUMIT":
			case "SUMITT":
			case "SUMMIT":
				cleanSuffix = "SMT";
				break;
			case "TER":
			case "TERR":
			case "TERRACE":
				cleanSuffix = "TER";
				break;
			case "THROUGHWAY":
			case "TRWY":
				cleanSuffix = "TRWY";
				break;
			case "TRACE":
			case "TRCE":
			case "TRACES":
				cleanSuffix = "TRCE";
				break;
			case "TRACK":
			case "TRACKS":
			case "TRAK":
			case "TRK":
			case "TRKS":
				cleanSuffix = "TRAK";
				break;
			case "TRAFFICWAY":
			case "TRFY":
				cleanSuffix = "TRFY";
				break;
			case "TRAIL":
			case "TRAILS":
			case "TRL":
			case "TRLS":
				cleanSuffix = "TRL";
				break;
			case "TRAILER":
			case "TRAILERS":
			case "TRLR":
			case "TRLRS":
				cleanSuffix = "TRLR";
				break;
			case "TUNEL":
			case "TUNL":
			case "TUNLS":
			case "TUNNEL":
			case "TUNNELS":
			case "TUNNL":
				cleanSuffix = "TUNL";
				break;
			case "TRNPK":
			case "TPKE":
			case "TURNPIKE":
			case "TURNPK":
				cleanSuffix = "TPKE";
				break;
			case "UNDERPASS":
			case "UNDRPASS":
			case "UNDRPSS":
			case "UDRPSS":
			case "UDRPS":
			case "UPASS":
			case "UPAS":
				cleanSuffix = "UPAS";
				break;
			case "UNION":
			case "UN":
				cleanSuffix = "UN";
				break;
			case "UNIONS":
			case "UNS":
				cleanSuffix = "UNS";
				break;
			case "VALLEY":
			case "VLY":
			case "VALLY":
			case "VLLY":
				cleanSuffix = "VLY";
				break;
			case "VALLEYS":
			case "VLYS":
				cleanSuffix = "VLYS";
				break;
			case "VDCT":
			case "VIA":
			case "VIADCT":
			case "VIADUCT":
				cleanSuffix = "VIA";
				break;
			case "VIEW":
			case "VW":
				cleanSuffix = "VW";
				break;
			case "VIEWS":
			case "VWS":
				cleanSuffix = "VWS";
				break;
			case "VILL":
			case "VILG":
			case "VLG":
			case "VILLAG":
			case "VILLAGE":
			case "VILLG":
			case "VILLIAGE":
				cleanSuffix = "VLG";
				break;
			case "VILLAGES":
			case "VILLS":
			case "VLGS":
				cleanSuffix = "";
				break;
			case "VILLE":
			case "VL":
				cleanSuffix = "VL";
				break;
			case "VIS":
			case "VIST":
			case "VISTA":
			case "VST":
			case "VSTA":
				cleanSuffix = "VIS";
				break;
			case "WALK":
			case "WALKS":
				cleanSuffix = "WALK";
				break;
			case "WALL":
			case "WLL":
				cleanSuffix = "WALL";
				break;
			case "WAY":
			case "WY":
				cleanSuffix = "WY";
				break;
			case "WAYS":
				cleanSuffix = "WAYS";
				break;
			case "WELL":
			case "WEL":
			case "WL":
				cleanSuffix = "WL";
				break;
			case "WELLS":
			case "WELS":
			case "WLS":
				cleanSuffix = "WLS";
				break;
		}

		return cleanSuffix;
	};

} ).call( this );