( function () {
	"use strict";

	module.exports = function ( suffix, matchRequired ) {
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
			case "ALLE":
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
			case "ARCADE":
			case "ARC":
				cleanSuffix = "ARC";
				break;
			case "AV":
			case "AVE":
			case "AVEN":
			case "AVENU":
			case "AVENUE":
			case "AVN":
			case "AVNUE":
			case "AVE":
				cleanSuffix = "AVE";
				break;
			case "BAYOO":
			case "BAYOU":
			case "BYU":
				cleanSuffix = "BYU";
				break;
			case "BEACH":
			case "BCH":
				cleanSuffix = "BCH";
				break;
			case "BEND":
			case "BND":
				cleanSuffix = "BND";
				break;
			case "BLUF":
			case "BLUFF":
			case "BLF":
				cleanSuffix = "BLF";
				break;
			case "BLUFFS":
			case "BLUFS":
			case "BLFFS":
			case "BLFS":
				cleanSuffix = "BLFS";
				break;
			case "BOT":
			case "BOTM":
			case "BOTTM":
			case "BOTTOM":
			case "BTM":
				cleanSuffix = "BTM";
				break;
			case "BOUL":
			case "BOULEVARD":
			case "BOULV":
			case "BLVD":
				cleanSuffix = "BLVD";
				break;
			case "BRNCH":
			case "BRCH":
			case "BRANCH":
			case "BR":
				cleanSuffix = "BR";
				break;
			case "BRDGE":
			case "BRIDGE":
			case "BRIDG":
			case "BRG":
				cleanSuffix = "BRG";
				break;
			case "BROOK":
			case "BRK":
				cleanSuffix = "BRK";
				break;
			case "BROOKS":
			case "BRKS":
				cleanSuffix = "BRKS";
				break;
			case "BURG":
			case "BG":
				cleanSuffix = "BG";
				break;
			case "BURGS":
			case "BGS":
				cleanSuffix = "BGS";
				break;
			case "BYPA":
			case "BYPAS":
			case "BYPASS":
			case "BYPS":
			case "BYP":
				cleanSuffix = "BYP";
				break;
			case "CAMP":
			case "CMP":
			case "CP":
				cleanSuffix = "CP";
				break;
			case "CANYN":
			case "CANYON":
			case "CNYN":
			case "CYN":
				cleanSuffix = "CYN";
				break;
			case "CAPE":
			case "CPE":
				cleanSuffix = "CPE";
				break;
			case "CAUSEWAY":
			case "CAUSWA":
			case "CAUSWAY":
			case "CSWY":
				cleanSuffix = "CSWY";
				break;
			case "CEN":
			case "CENT":
			case "CENTER":
			case "CENTR":
			case "CENTRE":
			case "CNTER":
			case "CNTR":
			case "CTR":
				cleanSuffix = "CTR";
				break;
			case "CENTERS":
			case "CTRS":
				cleanSuffix = "CTRS";
				break;
			case "CIRC":
			case "CIRCL":
			case "CIRCLE":
			case "CRCL":
			case "CRCLE":
			case "CIR":
				cleanSuffix = "CIR";
				break;
			case "CIRCLES":
			case "CIRS":
				cleanSuffix = "CIRS";
				break;
			case "CLIFF":
			case "CLF":
				cleanSuffix = "CLF";
				break;
			case "CLIFFS":
			case "CLFS":
				cleanSuffix = "CLFS";
				break;
			case "CLUB":
			case "CLB":
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
			case "CORNER":
			case "COR":
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
			case "CRT":
			case "CT":
				cleanSuffix = "CT";
				break;
			case "COURTS":
			case "CRTS":
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
			case "CK":
			case "CR":
				cleanSuffix = "CRK";
				break;
			case "CRESCENT":
			case "CRESENT":
			case "CRECENT":
			case "CRSENT":
			case "CRSNT":
			case "CRSCNT":
			case "CRSENT":
			case "CRES":
				cleanSuffix = "CRES";
				break;
			case "CREST":
			case "CRST":
				cleanSuffix = "CRST";
				break;
			case "CROSSING":
			case "CRSSNG":
			case "CRSNG":
			case "CRSSING":
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
			case "DVD":
			case "DV":
				cleanSuffix = "DV";
				break;
			case "DRIV":
			case "DRIVE":
			case "DRV":
			case "DR":
				cleanSuffix = "DR";
				break;
			case "DRIVES":
			case "DRS":
				cleanSuffix = "DRS";
				break;
			case "ESTATE":
			case "EST":
				cleanSuffix = "EST";
				break;
			case "ESTATES":
			case "ESTS":
				cleanSuffix = "ESTS";
				break;
			case "EXP":
			case "EXPR":
			case "EXPRESS":
			case "EXPRESSWAY":
			case "EXPW":
			case "EXPY":
				cleanSuffix = "EXPY";
				break;
			case "EXTENSION":
			case "EXTN":
			case "EXTNSN":
			case "EXT":
				cleanSuffix = "EXT";
				break;
			case "EXTENSIONS":
			case "EXTS":
				cleanSuffix = "EXTS";
				break;
			case "FLL":
			case "FALL":
				cleanSuffix = "FALL";
				break;
			case "FALLS":
			case "FLS":
				cleanSuffix = "FLS";
				break;
			case "FERRY":
			case "FRRY":
			case "FRY":
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
			case "FLAT":
			case "FLT":
				cleanSuffix = "FLT";
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
			case "FORESTS":
			case "FRST":
				cleanSuffix = "FRST";
				break;
			case "FORG":
			case "FORGE":
			case "FRG":
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
			case "FRT":
			case "FT":
				cleanSuffix = "FT";
				break;
			case "FREEWAY":
			case "FREEWY":
			case "FRWAY":
			case "FRWY":
			case "FWY":
				cleanSuffix = "FWY";
				break;
			case "GARDEN":
			case "GARDN":
			case "GRDEN":
			case "GRDN":
			case "GDN":
				cleanSuffix = "GDN";
				break;
			case "GARDENS":
			case "GRDNS":
			case "GDNS":
				cleanSuffix = "GDNS";
				break;
			case "GATEWAY":
			case "GATEWY":
			case "GATWAY":
			case "GTWAY":
			case "GTWY":
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
			case "GROVE":
			case "GRV":
				cleanSuffix = "GRV";
				break;
			case "GROVES":
			case "GRVS":
				cleanSuffix = "GRVS";
				break;
			case "HARB":
			case "HARBOR":
			case "HARBR":
			case "HRBOR":
			case "HBR":
				cleanSuffix = "HBR";
				break;
			case "HARBORS":
			case "HBRS":
				cleanSuffix = "HBRS";
				break;
			case "HAVEN":
			case "HAVN":
			case "HVN":
				cleanSuffix = "HVN";
				break;
			case "HT":
			case "HEIGHT":
			case "HEIGHTS":
			case "HGTS":
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
			case "HOLWS":
			case "HOLW":
				cleanSuffix = "HOLW";
				break;
			case "INLET":
			case "INLT":
				cleanSuffix = "INLT";
				break;
			case "ISLAND":
			case "ISLND":
			case "IS":
				cleanSuffix = "IS";
				break;
			case "ISLANDS":
			case "ISLNDS":
			case "ISS":
				cleanSuffix = "ISS";
				break;
			case "ISLES":
			case "ISLE":
				cleanSuffix = "ISLE";
				break;
			case "JCTION":
			case "JCTN":
			case "JUNCTION":
			case "JUNCTN":
			case "JUNCTON":
			case "JCT":
				cleanSuffix = "JCT";
				break;
			case "JCTNS":
			case "JUNCTIONS":
			case "JCTS":
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
			case "KNOL":
			case "KNOLL":
			case "KNL":
				cleanSuffix = "KNL";
				break;
			case "KNOLLS":
			case "KNLS":
				cleanSuffix = "KNLS";
				break;
			case "LAKE":
			case "LK":
				cleanSuffix = "LK";
				break;
			case "LAKES":
			case "LKS":
				cleanSuffix = "LKS";
				break;
			case "LAND":
				cleanSuffix = "LAND";
				break;
			case "LANDING":
			case "LNDNG":
			case "LNDG":
				cleanSuffix = "LNDG";
				break;
			case "LANE":
			case "LANES":
			case "LA":
			case "LN":
				cleanSuffix = "LN";
				break;
			case "LIGHT":
			case "LGT":
				cleanSuffix = "LGT";
				break;
			case "LIGHTS":
			case "LGTS":
				cleanSuffix = "LGTS";
				break;
			case "LOAF":
			case "LF":
				cleanSuffix = "LF";
				break;
			case "LOCK":
			case "LCK":
				cleanSuffix = "LCK";
				break;
			case "LOCKS":
			case "LCKS":
				cleanSuffix = "LCKS";
				break;
			case "LDGE":
			case "LODG":
			case "LODGE":
			case "LDG":
				cleanSuffix = "LDG";
				break;
			case "LP":
			case "LOOP":
			case "LOOPS":
				cleanSuffix = "LOOP";
				break;
			case "MALL":
				cleanSuffix = "MALL";
				break;
			case "MANOR":
			case "MNR":
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
			case "MEADOWS":
			case "MEDOWS":
			case "MDWS":
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
			case "MSSN":
			case "MSN":
				cleanSuffix = "MSN";
				break;
			case "MOTORWAY":
			case "MOTORWY":
			case "MTRWY":
			case "MTWY":
				cleanSuffix = "MTWY";
				break;
			case "MNT":
			case "MOUNT":
			case "MT":
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
			case "MOUNTAINS":
			case "MNTNS":
			case "MTNS":
				cleanSuffix = "MTNS";
				break;
			case "NECK":
			case "NCK":
				cleanSuffix = "NCK";
				break;
			case "ORCHARD":
			case "ORCHRD":
			case "ORCH":
				cleanSuffix = "ORCH";
				break;
			case "OVL":
			case "OVAL":
				cleanSuffix = "OVAL";
				break;
			case "OVERPASS":
			case "OPAS":
				cleanSuffix = "OPAS";
				break;
			case "PARK":
			case "PK":
			case "PARKS":
			case "PRKS":
			case "PRK":
				cleanSuffix = "PARK";
				break;
			case "PARKWAY":
			case "PARKWY":
			case "PKWAY":
			case "PKY":
			case "PARKWAYS":
			case "PARKWYS":
			case "PKWAYS":
			case "PKYS":
			case "PKWYS":
			case "PKWY":
				cleanSuffix = "PKWY";
				break;
			case "PASS":
				cleanSuffix = "PASS";
				break;
			case "PASSAGE":
			case "PSGE":
				cleanSuffix = "PSGE";
				break;
			case "PATHS":
			case "PATH":
				cleanSuffix = "PATH";
				break;
			case "PIKES":
			case "PIKE":
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
			case "PLAINES":
			case "PLNS":
				cleanSuffix = "PLNS";
				break;
			case "PLAZA":
			case "PLZA":
			case "PLZ":
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
			case "PRAIRIE":
			case "PRARIE":
			case "PRR":
			case "PR":
				cleanSuffix = "PR";
				break;
			case "RAD":
			case "RADIAL":
			case "RADIEL":
			case "RADL":
				cleanSuffix = "RADL";
				break;
			case "RAMP":
				cleanSuffix = "RAMP";
				break;
			case "RANCH":
			case "RANCHES":
			case "RNCHS":
			case "RNCH":
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
			case "RDGE":
			case "RIDGE":
			case "RDG":
				cleanSuffix = "RDG";
				break;
			case "RIDGES":
			case "RDGS":
				cleanSuffix = "RDGS";
				break;
			case "RIVER":
			case "RVR":
			case "RIVR":
			case "RIV":
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
			case "SHOAL":
			case "SHL":
				cleanSuffix = "SHL";
				break;
			case "SHOALS":
			case "SHLS":
				cleanSuffix = "SHLS";
				break;
			case "SHOAR":
			case "SHORE":
			case "SHR":
				cleanSuffix = "SHR";
				break;
			case "SHORES":
			case "SHOARS":
			case "SHRS":
				cleanSuffix = "SHRS";
				break;
			case "SKYWAY":
			case "SKYWY":
			case "SKWY":
				cleanSuffix = "SKWY";
				break;
			case "SPNG":
			case "SPRING":
			case "SPRNG":
			case "SPG":
				cleanSuffix = "SPG";
				break;
			case "SPNGS":
			case "SPRINGS":
			case "SPRNGS":
			case "SPGS":
				cleanSuffix = "SPGS";
				break;
			case "SPR":
			case "SPRS":
			case "SPURS":
			case "SPUR":
				cleanSuffix = "SPUR";
				break;
			case "SQR":
			case "SQRE":
			case "SQU":
			case "SQUARE":
			case "SQ":
				cleanSuffix = "SQ";
				break;
			case "SQRS":
			case "SQUARES":
			case "SQS":
				cleanSuffix = "SQS";
				break;
			case "STATION":
			case "STATN":
			case "STN":
			case "STA":
				cleanSuffix = "STA";
				break;
			case "STRAV":
			case "STRAVEN":
			case "STRAVENUE":
			case "STRAVN":
			case "STRVN":
			case "STRVNUE":
			case "STRAVE":
			case "STRA":
				cleanSuffix = "STRA";
				break;
			case "STREAM":
			case "STREME":
			case "STRM":
				cleanSuffix = "STRM";
				break;
			case "STREET":
			case "STRT":
			case "STR":
			case "ST":
				cleanSuffix = "ST";
				break;
			case "STREETS":
			case "STS":
				cleanSuffix = "STS";
				break;
			case "SUMIT":
			case "SUMITT":
			case "SUMMIT":
			case "SMT":
				cleanSuffix = "SMT";
				break;
			case "TERR":
			case "TERRACE":
			case "TER":
				cleanSuffix = "TER";
				break;
			case "THROUGHWAY":
			case "TRWY":
				cleanSuffix = "TRWY";
				break;
			case "TRACE":
			case "TRACES":
			case "TRCE":
				cleanSuffix = "TRCE";
				break;
			case "TRACK":
			case "TRACKS":
			case "TRK":
			case "TRKS":
			case "TRAK":
				cleanSuffix = "TRAK";
				break;
			case "TRAFFICWAY":
			case "TRFY":
				cleanSuffix = "TRFY";
				break;
			case "TRAIL":
			case "TR":
			case "TRAILS":
			case "TRLS":
			case "TRL":
				cleanSuffix = "TRL";
				break;
			case "TRAILER":
			case "TRAILERS":
			case "TRLRS":
			case "TRLR":
				cleanSuffix = "TRLR";
				break;
			case "TUNEL":
			case "TUNLS":
			case "TUNNEL":
			case "TUNNELS":
			case "TUNNL":
			case "TUNL":
				cleanSuffix = "TUNL";
				break;
			case "TRNPK":
			case "TURNPIKE":
			case "TURNPK":
			case "TPK":
			case "TRPK":
			case "TPKE":
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
			case "VALLY":
			case "VLLY":
			case "VLY":
				cleanSuffix = "VLY";
				break;
			case "VALLEYS":
			case "VLYS":
				cleanSuffix = "VLYS";
				break;
			case "VDCT":
			case "VIADCT":
			case "VIADUCT":
			case "VIA":
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
			case "VILLAG":
			case "VILLAGE":
			case "VILLG":
			case "VILLIAGE":
			case "VLG":
				cleanSuffix = "VLG";
				break;
			case "VILLAGES":
			case "VILLS":
			case "VLGS":
				cleanSuffix = "VLGS";
				break;
			case "VILLE":
			case "VL":
				cleanSuffix = "VL";
				break;
			case "VIST":
			case "VISTA":
			case "VST":
			case "VSTA":
			case "VIS":
				cleanSuffix = "VIS";
				break;
			case "WALKS":
			case "WALK":
				cleanSuffix = "WALK";
				break;
			case "WLL":
			case "WALL":
				cleanSuffix = "WALL";
				break;
			case "WAY":
			case "WY":
				cleanSuffix = "WAY";
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
			default:
				if ( matchRequired ) {
					cleanSuffix = null;
				}
		}

		return cleanSuffix;
	};

} ).call( this );