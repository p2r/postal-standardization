( function () {
	"use strict";

	var clean = require( "./clean" );

	module.exports = function ( type, matchRequired ) {
		var cleanType = clean( type );

		if ( !cleanType ) {
			return null;
		}

		//	Publication 28
		//	C1 Street Suffix Abbreviations
		//	http://pe.usps.gov/text/pub28/28apc_002.htm
		//
		//	Tweaked a little

		switch ( cleanType ) {
			case "ALLEE":
			case "ALLEY":
			case "ALLY":
			case "ALLE":
			case "ALY":
				cleanType = "ALY";
				break;
			case "ANEX":
			case "ANX":
			case "ANNEX":
			case "ANNX":
			case "ANX":
				cleanType = "ANX";
				break;
			case "ARCADE":
			case "ARC":
				cleanType = "ARC";
				break;
			case "AV":
			case "AVE":
			case "AVEN":
			case "AVENU":
			case "AVENUE":
			case "AVN":
			case "AVNUE":
			case "AVE":
				cleanType = "AVE";
				break;
			case "BAYOO":
			case "BAYOU":
			case "BYU":
				cleanType = "BYU";
				break;
			case "BEACH":
			case "BCH":
				cleanType = "BCH";
				break;
			case "BEND":
			case "BND":
				cleanType = "BND";
				break;
			case "BLUF":
			case "BLUFF":
			case "BLF":
				cleanType = "BLF";
				break;
			case "BLUFFS":
			case "BLUFS":
			case "BLFFS":
			case "BLFS":
				cleanType = "BLFS";
				break;
			case "BOT":
			case "BOTM":
			case "BOTTM":
			case "BOTTOM":
			case "BTM":
				cleanType = "BTM";
				break;
			case "BOUL":
			case "BOULEVARD":
			case "BOULV":
			case "BLVD":
				cleanType = "BLVD";
				break;
			case "BRNCH":
			case "BRCH":
			case "BRANCH":
			case "BR":
				cleanType = "BR";
				break;
			case "BRDGE":
			case "BRIDGE":
			case "BRIDG":
			case "BRG":
				cleanType = "BRG";
				break;
			case "BROOK":
			case "BRK":
				cleanType = "BRK";
				break;
			case "BROOKS":
			case "BRKS":
				cleanType = "BRKS";
				break;
			case "BURG":
			case "BG":
				cleanType = "BG";
				break;
			case "BURGS":
			case "BGS":
				cleanType = "BGS";
				break;
			case "BYPA":
			case "BYPAS":
			case "BYPASS":
			case "BYPS":
			case "BYP":
				cleanType = "BYP";
				break;
			case "CAMP":
			case "CMP":
			case "CP":
				cleanType = "CP";
				break;
			case "CANYN":
			case "CANYON":
			case "CNYN":
			case "CYN":
				cleanType = "CYN";
				break;
			case "CAPE":
			case "CPE":
				cleanType = "CPE";
				break;
			case "CAUSEWAY":
			case "CAUSWA":
			case "CAUSWAY":
			case "CSWY":
				cleanType = "CSWY";
				break;
			case "CEN":
			case "CENT":
			case "CENTER":
			case "CENTR":
			case "CENTRE":
			case "CNTER":
			case "CNTR":
			case "CTR":
				cleanType = "CTR";
				break;
			case "CENTERS":
			case "CTRS":
				cleanType = "CTRS";
				break;
			case "CIRC":
			case "CIRCL":
			case "CIRCLE":
			case "CRCL":
			case "CRCLE":
			case "CIR":
				cleanType = "CIR";
				break;
			case "CIRCLES":
			case "CIRS":
				cleanType = "CIRS";
				break;
			case "CLIFF":
			case "CLF":
				cleanType = "CLF";
				break;
			case "CLIFFS":
			case "CLFS":
				cleanType = "CLFS";
				break;
			case "CLUB":
			case "CLB":
				cleanType = "CLB";
				break;
			case "COMMON":
			case "CMN":
				cleanType = "CMN";
				break;
			case "COMMONS":
			case "CMNS":
				cleanType = "CMNS";
				break;
			case "CORNER":
			case "COR":
				cleanType = "COR";
				break;
			case "CORNERS":
			case "CORS":
				cleanType = "CORS";
				break;
			case "COURSE":
			case "CRSE":
				cleanType = "CRSE";
				break;
			case "COURT":
			case "CRT":
			case "CT":
				cleanType = "CT";
				break;
			case "COURTS":
			case "CRTS":
			case "CTS":
				cleanType = "CTS";
				break;
			case "COVE":
			case "CV":
				cleanType = "CV";
				break;
			case "COVES":
			case "CVS":
				cleanType = "CVS";
				break;
			case "CREEK":
			case "CRK":
			case "CK":
			case "CR":
				cleanType = "CRK";
				break;
			case "CRESCENT":
			case "CRESENT":
			case "CRECENT":
			case "CRSENT":
			case "CRSNT":
			case "CRSCNT":
			case "CRSENT":
			case "CRES":
				cleanType = "CRES";
				break;
			case "CREST":
			case "CRST":
				cleanType = "CRST";
				break;
			case "CROSSING":
			case "CRSSNG":
			case "CRSNG":
			case "CRSSING":
			case "XING":
				cleanType = "XING";
				break;
			case "CROSSROAD":
			case "XRD":
				cleanType = "XRD";
				break;
			case "CROSSROADS":
			case "XRDS":
				cleanType = "XRDS";
				break;
			case "CURVE":
			case "CURV":
				cleanType = "CURV";
				break;
			case "DALE":
			case "DL":
				cleanType = "DL";
				break;
			case "DAM":
			case "DM":
				cleanType = "DM";
				break;
			case "DIV":
			case "DIVIDE":
			case "DVD":
			case "DV":
				cleanType = "DV";
				break;
			case "DRIV":
			case "DRIVE":
			case "DRV":
			case "DR":
				cleanType = "DR";
				break;
			case "DRIVES":
			case "DRS":
				cleanType = "DRS";
				break;
			case "ESTATE":
			case "EST":
				cleanType = "EST";
				break;
			case "ESTATES":
			case "ESTS":
				cleanType = "ESTS";
				break;
			case "EXP":
			case "EXPR":
			case "EXPRESS":
			case "EXPRESSWAY":
			case "EXPW":
			case "EXPY":
				cleanType = "EXPY";
				break;
			case "EXTENSION":
			case "EXTN":
			case "EXTNSN":
			case "EXT":
				cleanType = "EXT";
				break;
			case "EXTENSIONS":
			case "EXTS":
				cleanType = "EXTS";
				break;
			case "FLL":
			case "FALL":
				cleanType = "FALL";
				break;
			case "FALLS":
			case "FLS":
				cleanType = "FLS";
				break;
			case "FERRY":
			case "FRRY":
			case "FRY":
				cleanType = "FRY";
				break;
			case "FIELD":
			case "FLD":
				cleanType = "FLD";
				break;
			case "FIELDS":
			case "FLDS":
				cleanType = "FLDS";
				break;
			case "FLAT":
			case "FLT":
				cleanType = "FLT";
				break;
			case "FLATS":
			case "FLTS":
				cleanType = "FLTS";
				break;
			case "FORD":
			case "FRD":
				cleanType = "FRD";
				break;
			case "FORDS":
			case "FRDS":
				cleanType = "FRDS";
				break;
			case "FOREST":
			case "FORESTS":
			case "FRST":
				cleanType = "FRST";
				break;
			case "FORG":
			case "FORGE":
			case "FRG":
				cleanType = "FRG";
				break;
			case "FORGES":
			case "FRGS":
				cleanType = "FRGS";
				break;
			case "FORK":
			case "FRK":
				cleanType = "FRK";
				break;
			case "FORKS":
			case "FRKS":
				cleanType = "FRKS";
				break;
			case "FORT":
			case "FRT":
			case "FT":
				cleanType = "FT";
				break;
			case "FREEWAY":
			case "FREEWY":
			case "FRWAY":
			case "FRWY":
			case "FWY":
				cleanType = "FWY";
				break;
			case "GARDEN":
			case "GARDN":
			case "GRDEN":
			case "GRDN":
			case "GDN":
				cleanType = "GDN";
				break;
			case "GARDENS":
			case "GRDNS":
			case "GDNS":
				cleanType = "GDNS";
				break;
			case "GATEWAY":
			case "GATEWY":
			case "GATWAY":
			case "GTWAY":
			case "GTWY":
				cleanType = "GTWY";
				break;
			case "GLEN":
			case "GLN":
				cleanType = "GLN";
				break;
			case "GLENS":
			case "GLNS":
				cleanType = "GLNS";
				break;
			case "GREEN":
			case "GRN":
				cleanType = "GRN";
				break;
			case "GREENS":
			case "GRNS":
				cleanType = "GRNS";
				break;
			case "GROV":
			case "GROVE":
			case "GRV":
				cleanType = "GRV";
				break;
			case "GROVES":
			case "GRVS":
				cleanType = "GRVS";
				break;
			case "HARB":
			case "HARBOR":
			case "HARBR":
			case "HRBOR":
			case "HBR":
				cleanType = "HBR";
				break;
			case "HARBORS":
			case "HBRS":
				cleanType = "HBRS";
				break;
			case "HAVEN":
			case "HAVN":
			case "HVN":
				cleanType = "HVN";
				break;
			case "HT":
			case "HEIGHT":
			case "HEIGHTS":
			case "HGTS":
			case "HTS":
				cleanType = "HTS";
				break;
			case "HIGHWAY":
			case "HIGHWY":
			case "HIWAY":
			case "HIWY":
			case "HWAY":
			case "HWY":
				cleanType = "HWY";
				break;
			case "HILL":
			case "HL":
				cleanType = "HL";
				break;
			case "HILLS":
			case "HLS":
				cleanType = "HLS";
				break;
			case "HLLW":
			case "HOLLOW":
			case "HOLLOWS":
			case "HOLWS":
			case "HOLW":
				cleanType = "HOLW";
				break;
			case "INLET":
			case "INLT":
				cleanType = "INLT";
				break;
			case "ISLAND":
			case "ISLND":
			case "IS":
				cleanType = "IS";
				break;
			case "ISLANDS":
			case "ISLNDS":
			case "ISS":
				cleanType = "ISS";
				break;
			case "ISLES":
			case "ISLE":
				cleanType = "ISLE";
				break;
			case "JCTION":
			case "JCTN":
			case "JUNCTION":
			case "JUNCTN":
			case "JUNCTON":
			case "JCT":
				cleanType = "JCT";
				break;
			case "JCTNS":
			case "JUNCTIONS":
			case "JCTS":
				cleanType = "JCTS";
				break;
			case "KEY":
			case "KY":
				cleanType = "KY";
				break;
			case "KEYS":
			case "KYS":
				cleanType = "KYS";
				break;
			case "KNOL":
			case "KNOLL":
			case "KNL":
				cleanType = "KNL";
				break;
			case "KNOLLS":
			case "KNLS":
				cleanType = "KNLS";
				break;
			case "LAKE":
			case "LK":
				cleanType = "LK";
				break;
			case "LAKES":
			case "LKS":
				cleanType = "LKS";
				break;
			case "LAND":
				cleanType = "LAND";
				break;
			case "LANDING":
			case "LNDNG":
			case "LNDG":
				cleanType = "LNDG";
				break;
			case "LANE":
			case "LANES":
			case "LA":
			case "LN":
				cleanType = "LN";
				break;
			case "LIGHT":
			case "LGT":
				cleanType = "LGT";
				break;
			case "LIGHTS":
			case "LGTS":
				cleanType = "LGTS";
				break;
			case "LOAF":
			case "LF":
				cleanType = "LF";
				break;
			case "LOCK":
			case "LCK":
				cleanType = "LCK";
				break;
			case "LOCKS":
			case "LCKS":
				cleanType = "LCKS";
				break;
			case "LDGE":
			case "LODG":
			case "LODGE":
			case "LDG":
				cleanType = "LDG";
				break;
			case "LP":
			case "LOOP":
			case "LOOPS":
				cleanType = "LOOP";
				break;
			case "MALL":
				cleanType = "MALL";
				break;
			case "MANOR":
			case "MNR":
				cleanType = "MNR";
				break;
			case "MANORS":
			case "MNRS":
				cleanType = "MNRS";
				break;
			case "MEADOW":
			case "MDW":
				cleanType = "MDW";
				break;
			case "MEADOWS":
			case "MEDOWS":
			case "MDWS":
				cleanType = "MDWS";
				break;
			case "MEWS":
				cleanType = "MEWS";
				break;
			case "MILL":
			case "ML":
				cleanType = "ML";
				break;
			case "MILLS":
			case "MLS":
				cleanType = "MLS";
				break;
			case "MISSION":
			case "MISSN":
			case "MSSN":
			case "MSN":
				cleanType = "MSN";
				break;
			case "MOTORWAY":
			case "MOTORWY":
			case "MTRWY":
			case "MTWY":
				cleanType = "MTWY";
				break;
			case "MNT":
			case "MOUNT":
			case "MT":
				cleanType = "MT";
				break;
			case "MNTAIN":
			case "MNTN":
			case "MOUNTAIN":
			case "MOUNTIN":
			case "MTIN":
			case "MTN":
				cleanType = "MTN";
				break;
			case "MOUNTAINS":
			case "MNTNS":
			case "MTNS":
				cleanType = "MTNS";
				break;
			case "NECK":
			case "NCK":
				cleanType = "NCK";
				break;
			case "ORCHARD":
			case "ORCHRD":
			case "ORCH":
				cleanType = "ORCH";
				break;
			case "OVL":
			case "OVAL":
				cleanType = "OVAL";
				break;
			case "OVERPASS":
			case "OPAS":
				cleanType = "OPAS";
				break;
			case "PARK":
			case "PK":
			case "PARKS":
			case "PRKS":
			case "PRK":
				cleanType = "PARK";
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
				cleanType = "PKWY";
				break;
			case "PASS":
				cleanType = "PASS";
				break;
			case "PASSAGE":
			case "PSGE":
				cleanType = "PSGE";
				break;
			case "PATHS":
			case "PATH":
				cleanType = "PATH";
				break;
			case "PIKES":
			case "PIKE":
				cleanType = "PIKE";
				break;
			case "PINE":
			case "PNE":
				cleanType = "PNE";
				break;
			case "PINES":
			case "PNES":
				cleanType = "PNES";
				break;
			case "PLACE":
			case "PL":
				cleanType = "PL";
				break;
			case "PLAIN":
			case "PLN":
				cleanType = "PLN";
				break;
			case "PLAINS":
			case "PLAINES":
			case "PLNS":
				cleanType = "PLNS";
				break;
			case "PLAZA":
			case "PLZA":
			case "PLZ":
				cleanType = "PLZ";
				break;
			case "POINT":
			case "PT":
				cleanType = "PT";
				break;
			case "POINTS":
			case "PTS":
				cleanType = "PTS";
				break;
			case "PORT":
			case "PRT":
				cleanType = "PRT";
				break;
			case "PORTS":
			case "PRTS":
				cleanType = "PRTS";
				break;
			case "PRAIRIE":
			case "PRARIE":
			case "PRR":
			case "PR":
				cleanType = "PR";
				break;
			case "RAD":
			case "RADIAL":
			case "RADIEL":
			case "RADL":
				cleanType = "RADL";
				break;
			case "RAMP":
				cleanType = "RAMP";
				break;
			case "RANCH":
			case "RANCHES":
			case "RNCHS":
			case "RNCH":
				cleanType = "RNCH";
				break;
			case "RAPID":
			case "RPD":
				cleanType = "RPD";
				break;
			case "RAPIDS":
			case "RPDS":
				cleanType = "RPDS";
				break;
			case "REST":
			case "RST":
				cleanType = "RST";
				break;
			case "RDGE":
			case "RIDGE":
			case "RDG":
				cleanType = "RDG";
				break;
			case "RIDGES":
			case "RDGS":
				cleanType = "RDGS";
				break;
			case "RIVER":
			case "RVR":
			case "RIVR":
			case "RIV":
				cleanType = "RIV";
				break;
			case "ROAD":
			case "RD":
				cleanType = "RD";
				break;
			case "ROADS":
			case "RDS":
				cleanType = "RDS";
				break;
			case "ROUTE":
			case "RTE":
				cleanType = "RTE";
				break;
			case "ROW":
				cleanType = "ROW";
				break;
			case "RUE":
				cleanType = "RUE";
				break;
			case "RUN":
				cleanType = "RUN";
				break;
			case "SHOAL":
			case "SHL":
				cleanType = "SHL";
				break;
			case "SHOALS":
			case "SHLS":
				cleanType = "SHLS";
				break;
			case "SHOAR":
			case "SHORE":
			case "SHR":
				cleanType = "SHR";
				break;
			case "SHORES":
			case "SHOARS":
			case "SHRS":
				cleanType = "SHRS";
				break;
			case "SKYWAY":
			case "SKYWY":
			case "SKWY":
				cleanType = "SKWY";
				break;
			case "SPNG":
			case "SPRING":
			case "SPRNG":
			case "SPG":
				cleanType = "SPG";
				break;
			case "SPNGS":
			case "SPRINGS":
			case "SPRNGS":
			case "SPGS":
				cleanType = "SPGS";
				break;
			case "SPR":
			case "SPRS":
			case "SPURS":
			case "SPUR":
				cleanType = "SPUR";
				break;
			case "SQR":
			case "SQRE":
			case "SQU":
			case "SQUARE":
			case "SQ":
				cleanType = "SQ";
				break;
			case "SQRS":
			case "SQUARES":
			case "SQS":
				cleanType = "SQS";
				break;
			case "STATION":
			case "STATN":
			case "STN":
			case "STA":
				cleanType = "STA";
				break;
			case "STRAV":
			case "STRAVEN":
			case "STRAVENUE":
			case "STRAVN":
			case "STRVN":
			case "STRVNUE":
			case "STRAVE":
			case "STRA":
				cleanType = "STRA";
				break;
			case "STREAM":
			case "STREME":
			case "STRM":
				cleanType = "STRM";
				break;
			case "STREET":
			case "STRT":
			case "STR":
			case "ST":
				cleanType = "ST";
				break;
			case "STREETS":
			case "STS":
				cleanType = "STS";
				break;
			case "SUMIT":
			case "SUMITT":
			case "SUMMIT":
			case "SMT":
				cleanType = "SMT";
				break;
			case "TERR":
			case "TERRACE":
			case "TER":
				cleanType = "TER";
				break;
			case "THROUGHWAY":
			case "TRWY":
				cleanType = "TRWY";
				break;
			case "TRACE":
			case "TRACES":
			case "TRCE":
				cleanType = "TRCE";
				break;
			case "TRACK":
			case "TRACKS":
			case "TRK":
			case "TRKS":
			case "TRAK":
				cleanType = "TRAK";
				break;
			case "TRAFFICWAY":
			case "TRFY":
				cleanType = "TRFY";
				break;
			case "TRAIL":
			case "TR":
			case "TRAILS":
			case "TRLS":
			case "TRL":
				cleanType = "TRL";
				break;
			case "TRAILER":
			case "TRAILERS":
			case "TRLRS":
			case "TRLR":
				cleanType = "TRLR";
				break;
			case "TUNEL":
			case "TUNLS":
			case "TUNNEL":
			case "TUNNELS":
			case "TUNNL":
			case "TUNL":
				cleanType = "TUNL";
				break;
			case "TRNPK":
			case "TURNPIKE":
			case "TURNPK":
			case "TPK":
			case "TRPK":
			case "TPKE":
				cleanType = "TPKE";
				break;
			case "UNDERPASS":
			case "UNDRPASS":
			case "UNDRPSS":
			case "UDRPSS":
			case "UDRPS":
			case "UPASS":
			case "UPAS":
				cleanType = "UPAS";
				break;
			case "UNION":
			case "UN":
				cleanType = "UN";
				break;
			case "UNIONS":
			case "UNS":
				cleanType = "UNS";
				break;
			case "VALLEY":
			case "VALLY":
			case "VLLY":
			case "VLY":
				cleanType = "VLY";
				break;
			case "VALLEYS":
			case "VLYS":
				cleanType = "VLYS";
				break;
			case "VDCT":
			case "VIADCT":
			case "VIADUCT":
			case "VIA":
				cleanType = "VIA";
				break;
			case "VIEW":
			case "VW":
				cleanType = "VW";
				break;
			case "VIEWS":
			case "VWS":
				cleanType = "VWS";
				break;
			case "VILL":
			case "VILG":
			case "VILLAG":
			case "VILLAGE":
			case "VILLG":
			case "VILLIAGE":
			case "VLG":
				cleanType = "VLG";
				break;
			case "VILLAGES":
			case "VILLS":
			case "VLGS":
				cleanType = "VLGS";
				break;
			case "VILLE":
			case "VL":
				cleanType = "VL";
				break;
			case "VIST":
			case "VISTA":
			case "VST":
			case "VSTA":
			case "VIS":
				cleanType = "VIS";
				break;
			case "WALKS":
			case "WALK":
				cleanType = "WALK";
				break;
			case "WLL":
			case "WALL":
				cleanType = "WALL";
				break;
			case "WAY":
			case "WY":
				cleanType = "WAY";
				break;
			case "WAYS":
				cleanType = "WAYS";
				break;
			case "WELL":
			case "WEL":
			case "WL":
				cleanType = "WL";
				break;
			case "WELLS":
			case "WELS":
			case "WLS":
				cleanType = "WLS";
				break;
			default:
				if ( matchRequired ) {
					cleanType = null;
				}
		}

		return cleanType;
	};

} ).call( this );