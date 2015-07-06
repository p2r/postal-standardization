( function () {
	"use strict";

	var clean = require( "./clean" );

	module.exports = function ( country, matchRequired ) {
		var cleanCountry = clean( country );

		if ( !cleanCountry ) {
			return null;
		}

		//	Publication 28
		//	A3 International Addresses
		//	A31 General Requirements
		//	http://pe.usps.gov/text/pub28/28apa_004.htm
		//
		//	Tweaked a little

		switch ( cleanCountry ) {

			case "AFGHANISTAN":
			case "AF":
			case "AFG":
				cleanCountry = "AFGHANISTAN";
				break;
			case "ALBANIA":
			case "AL":
			case "ALB":
				cleanCountry = "ALBANIA";
				break;
			case "ALGERIA":
			case "DZA":
			case "DZ":
				cleanCountry = "ALGERIA";
				break;
			case "ANDORRA":
			case "AND":
			case "AN":
				cleanCountry = "ANDORRA";
				break;
			case "ANGOLA":
			case "AGO":
			case "AO":
				cleanCountry = "ANGOLA";
				break;
			case "ANGUILLA":
			case "AIA":
			case "AI":
				cleanCountry = "ANGUILLA";
				break;
			case "ANTARCTICA":
			case "ATA":
			case "AQ":
				cleanCountry = "ANTARCTICA";
				break;
			case "ANTIGUA AND BARBUDA":
			case "ANTIGUA & BARBUDA":
			case "ANTIGUAANDBARBUDA":
			case "ANTIGUA BARBUDA":
			case "ANTIGUABARBUDA":
			case "ANTIGUA":
			case "BARBUDA":
			case "ATG":
			case "AG":
				cleanCountry =  "ANTIGUA AND BARBUDA";
				break;
			case "ARGENTINA":
			case "ARG":
			case "AR":
				cleanCountry = "ARGENTINA";
				break;
			case "ARMENIA":
			case "ARM":
			case "AM":
				cleanCountry = "ARMENIA";
				break;
			case "ARUBA":
			case "ABW":
			case "AW":
				cleanCountry = "ARUBA";
				break;
			case "AUSTRALIA":
			case "AUS":
			case "AU":
				cleanCountry = "AUSTRALIA";
				break;
			case "AUSTRIA":
			case "AUT":
			case "AT":
				cleanCountry = "AUSTRIA";
				break;
			case "AZERBAIJAN":
			case "AZE":
			case "AZ":
				cleanCountry = "AZERBAIJAN";
				break;
			case "BAHAMAS, THE":
			case "THE BAHAMAS":
			case "BAHAMAS":
			case "BHS":
			case "BS":
				cleanCountry = "BAHAMAS";
				break;
			case "BAHRAIN":
			case "BHR":
			case "BH":
				cleanCountry = "BAHRAIN";
				break;
			case "BANGLADESH":
			case "BGD":
			case "BD":
				cleanCountry = "BANGLADESH";
				break;
			case "BARBADOS":
			case "BRB":
			case "BB":
				cleanCountry = "BARBADOS";
				break;
			case "BELARUS":
			case "BLR":
			case "BY":
				cleanCountry = "BELARUS";
				break;
			case "BELGIUM":
			case "BEL":
			case "BE":
				cleanCountry = "BELGIUM";
				break;
			case "BELIZE":
			case "BLZ":
			case "BZ":
				cleanCountry = "BELIZE";
				break;
			case "BENIN":
			case "BEN":
			case "BJ":
				cleanCountry = "BENIN";
				break;
			case "BERMUDA":
			case "BMU":
			case "BM":
				cleanCountry = "BERMUDA";
				break;
			case "BHUTAN":
			case "BTN":
			case "BT":
				cleanCountry = "BHUTAN";
				break;
			case "BOLIVIA":
			case "BOL":
			case "BO":
				cleanCountry = "BOLIVIA";
				break;
			case "BONAIRE":
			case "BES":
			case "BQ":
				cleanCountry = "BONAIRE";
				break;
			case "BOSNIA AND HERZEGOVINA":
			case "BOSNIA & HERZEGOVINA":
			case "BOSNIA HERZEGOVINA":
			case "BOSNIA":
			case "HERZEGOVINA":
			case "BIH":
			case "BA":
				cleanCountry = "BOSNIA AND HERZEGOVINA";
				break;
			case "BOTSWANA":
			case "BWA":
			case "BW":
				cleanCountry = "BOTSWANA";
				break;
			case "BOUVET ISLAND":
			case "BOUVETISLAND":
			case "BOUVET ISLE":
			case "BOUVET ISLES":
			case "BOUVET":
			case "BVT":
			case "BV":
				cleanCountry = "BOUVET ISLAND";
				break;
			case "BRITISH INDIAN OCEAN TERRITORY":
			case "BRITISH INDIAN OCEAN":
			case "BRITISH INDIAN TERRITORY":
			case "INDIAN OCEAN TERRITORY":
			case "INDIAN OCEAN":
			case "IOT":
			case "IO":
				cleanCountry = "BRITISH INDIAN OCEAN TERRITORY";
				break;
			case "BRAZIL":
			case "BRA":
			case "BR":
				cleanCountry = "BRAZIL";
				break;
			case "BRUNEI DARUSSALAM":
			case "BRUNEIDARUSSALAM":
			case "DARUSSALAM":
			case "BRUNEI":
			case "BRN":
			case "BN":
				cleanCountry = "BRUNEI";
				break;
			case "BULGARIA":
			case "BGR":
			case "BG":
				cleanCountry = "BULGARIA";
				break;
			case "BURKINA FASO":
			case "BURKINAFASO":
			case "BURKINA":
			case "FASO":
			case "BFA":
			case "BF":
				cleanCountry = "BURKINA FASO";
				break;
			case "BURMA":
			//	No ISO codes for Burma?
				cleanCountry = "BURMA";
				break;
			case "BURUNDI":
			case "BDI":
			case "BI":
				cleanCountry = "BURUNDI";
				break;
			case "CAMBODIA":
			case "KHM":
			case "KH":
				cleanCountry = "CAMBODIA";
				break;
			case "CAMEROON":
			case "CMR":
			case "CM":
				cleanCountry = "CAMEROON";
				break;
			case "CANADA":
			case "CAN":
			case "CA":
				cleanCountry = "CANADA";
				break;
			case "CAPE VERDE":
			case "CAPEVERDE":
			case "CPV":
			case "CV":
				cleanCountry = "CAPE VERDE";
				break;
			case "CAYMAN ISLANDS":
			case "CAYMANISLANDS":
			case "CAYMAN":
			case "CAYMAN ISLES":
			case "CAYMAN ISLE":
			case "CEYMAN ISLANDS":
			case "CEYMANISLANDS":
			case "CEYMAN":
			case "CEYMAN ISLES":
			case "CEYMAN ISLE":
			case "CYM":
			case "KY":
				cleanCountry = "CAYMAN ISLANDS";
				break;
			case "CENTRAL AFRICAN REPUBLIC":
			case "CENTRAL AFRICAN":
			case "AFRICAN REPUBLIC":
			case "CAF":
			case "CF":
				cleanCountry = "CENTRAL AFRICAN REPUBLIC";
				break;
			case "CHAD":
			case "TCD":
			case "TD":
				cleanCountry = "CHAD";
				break;
			case "CHILE":
			case "CHL":
			case "CL":
				cleanCountry = "CHILE";
				break;
			case "CHINA":
			case "CHN":
			case "CN":
				cleanCountry = "CHINA";
				break;
			case "CHRISTMAS ISLAND":
			case "CHRISMAS ISLAND":
			case "CHRISTMASISLAND":
			case "CHRISTMAS ISLES":
			case "CHRISTMAS ISLE":
			case "CHRISTMAS":
			case "CXR":
			case "CX":
				cleanCountry = "CHRISTMAS ISLAND";
				break;
			case "COCOS (KEELING) ISLANDS":
			case "COCOS KEELING ISLANDS":
			case "COCOS ISLANDS":
			case "COCOS ISLES":
			case "COCOS ISLE":
			case "KEELING ISLANDS":
			case "KEELING ISLES":
			case "KEELING ISLE":
			case "COCOS":
			case "KEELING":
			case "CCK":
			case "CC":
				cleanCountry = "COCOS ISLANDS";
				break;
			case "COLOMBIA":
			case "COL":
			case "CO":
				cleanCountry = "COLOMBIA";
				break;
			case "COMOROS":
			case "COM":
			case "KM":
				cleanCountry = "COMOROS";
				break;
			case "CONGO":
			case "COG":
			case "CG":
				cleanCountry = "CONGO";
				break;
			case "CONGO, DEMOCRATIC REPUBLIC OF THE":
			case "DEMOCRATIC REPUBLIC OF THE CONGO":
			case "DEMO REPUBLIC OF THE CONGO":
			case "DEMO. REPUBLIC OF THE CONGO":
			case "DEMOCRATIC REP OF THE CONGO":
			case "DEMOCRATIC REP. OF THE CONGO":
			case "DEMO REP OF THE CONGO":
			case "DEMO. REP OF THE CONGO":
			case "DEMO REP. OF THE CONGO":
			case "DEMO. REP. OF THE CONGO":
			case "CONGO, DEMOCRATIC REPUBLIC OF":
			case "DEMOCRATIC REPUBLIC OF CONGO":
			case "DEMO REPUBLIC OF CONGO":
			case "DEMO. REPUBLIC OF CONGO":
			case "DEMOCRATIC REP OF CONGO":
			case "DEMOCRATIC REP. OF CONGO":
			case "DEMO REP OF CONGO":
			case "DEMO. REP OF CONGO":
			case "DEMO REP. OF CONGO":
			case "DEMO. REP. OF CONGO":
			case "CONGO, DEMOCRATIC REPUBLIC OF THE":
			case "REPUBLIC OF THE CONGO":
			case "REP OF THE CONGO":
			case "REP. OF THE CONGO":
			case "CONGO, REPUBLIC OF":
			case "REPUBLIC OF CONGO":
			case "REPUBLIC OF CONGO":
			case "REPUBLIC OF CONGO":
			case "REP OF CONGO":
			case "REP. OF CONGO":
			case "COD":
			case "CD":
				cleanCountry = "DEMOCRATIC REPUBLIC OF THE CONGO";
				break;
			case "COOK ISLANDS":
			case "COOKISLANDS":
			case "COOK ISLES":
			case "COOK ISLE":
			case "COOK":
			case "COK":
			case "CK":
				cleanCountry = "COOK ISLANDS";
				break;
			case "COSTA RICA":
			case "COSTARICA":
			case "CRI":
			case "CR":
				cleanCountry = "COSTA RICA";
				break;
			case "CÔTE D'IVOIRE":
			case "COTE D'IVOIRE":
			case "COTE DIVOIRE":
			case "COTE IVOIRE":
			case "COTEDIVOIRE":
			case "COTEIVOIRE":
			case "IVORY COAST":
			case "REPUBLIC OF CÔTE D'IVOIRE":
			case "REP OF CÔTE D'IVOIRE":
			case "REP. OF CÔTE D'IVOIRE":
			case "REPUBLIC CÔTE D'IVOIRE":
			case "REP CÔTE D'IVOIRE":
			case "REP. CÔTE D'IVOIRE":
			case "CIV":
			case "CI":
				cleanCountry = "COTE D'IVOIRE";
				break;
			case "CROATIA":
			case "HRV":
			case "HR":
				cleanCountry = "CROATIA";
				break;
			case "CUBA":
			case "CUB":
			case "CU":
				cleanCountry = "CUBA";
				break;
			case "CURACAO":
			case "CURAÇAO":
			case "CUW":
			case "CW":
				cleanCountry = "CURACAO";
				break;
			case "CYPRUS":
			case "CIPRUS":
			case "CYPRYS":
			case "CYP":
			case "CY":
				cleanCountry = "CYPRUS";
				break;
			case "CZECH REPUBLIC":
			case "CZECHOSLOVAKIA":
			case "CZECHOSLOVAKIA REPUBLIC":
			case "CZE":
			case "CZ":
				cleanCountry = "CZECH REPUBLIC";
				break;
			case "DENMARK":
			case "DNK":
			case "DK":
				cleanCountry = "DENMARK";
				break;
			case "DJIBOUTI":
			case "DJI":
			case "DJ":
				cleanCountry = "DJIBOUTI";
				break;
			case "DOMINICA":
			case "DMA":
			case "DM":
				cleanCountry = "DOMINICA";
				break;
			case "DOMINICAN REPUBLIC":
			case "DOMINICANREPUBLIC":
			case "DOM REPUBLIC":
			case "DOM. REPUBLIC":
			case "DOMINICAN REP":
			case "DOMINICAN REP.":
			case "DOM REP":
			case "DOM. REP":
			case "DOM REP.":
			case "DOM. REP.":
			case "DOM":
			case "DOECU":
				cleanCountry = "DOMINICAN REPUBLIC";
				break;
			case "EAST TIMOR":
			case "EASTTIMOR":
			case "E TIMOR":
			case "E. TIMOR":
				cleanCountry = "EAST TIMOR";
				break;
			case "ECUADOR":
			case "ECU":
			case "EC":
				cleanCountry = "ECUADOR";
				break;
			case "EGYPT":
			case "EGY":
			case "EG":
				cleanCountry = "EGYPT";
				break;
			case "EL SALVADOR":
			case "SALVADOR":
			case "SLV":
			case "SV":
				cleanCountry = "EL SALVADOR";
				break;
			case "EQUATORIAL GUINEA":
			case "EQUATORIALGUINEA":
			case "EQU GUINEA":
			case "EQU. GUINEA":
			case "GNQ":
			case "GQ":
				cleanCountry = "EQUATORIAL GUINEA";
				break;
			case "ERITREA":
			case "ERI":
			case "ER":
				cleanCountry = "ERITREA";
				break;
			case "ESTONIA":
			case "EST":
			case "EE":
				cleanCountry = "ESTONIA";
				break;
			case "ETHIOPIA":
			case "ETH":
			case "ET":
				cleanCountry = "ETHIOPIA";
				break;
			case "FALKLAND ISLANDS (MALVINAS)":
			case "FALKLAND ISLANDS":
			case "FALKLAND ISLES":
			case "FALKLAND ISLE":
			case "FALKLAND":
			case "MALVINAS":
			case "FLK":
			case "FK":
				cleanCountry = "FALKLAND ISLANDS";
				break;
			case "FAROE ISLANDS":
			case "FAROE ISLES":
			case "FAROE ISLE":
			case "FAROE":
			case "FRO":
			case "FO":
				cleanCountry = "FAROE ISLANDS";
				break;
			case "FIJI":
			case "FIJI ISLANDS":
			case "FIJI ISLES":
			case "FIJI ISLE":
			case "FJI":
			case "FJ":
				cleanCountry = "FIJI";
				break;
			case "FINLAND":
			case "FIN":
			case "FI":
				cleanCountry = "FINLAND";
				break;
			case "FRANCE":
			case "FRA":
			case "FR":
				cleanCountry = "FRANCE";
				break;
			case "FRENCH GUIANA":
			case "FRENCHGUIANA":
			case "GUIANA":
			case "GUF":
			case "GF":
				cleanCountry = "FRENCH GUIANA";
				break;
			case "FRENCH POLYNESIA":
			case "FRENCHPOLYNESIA":
			case "POLYNESIA":
			case "PYF":
			case "PF":
				cleanCountry = "FRENCH POLYNESIA";
				break;
			case "FRENCH SOUTHERN TERRITORIES":
			case "FRENCHSOUTHERNTERRITORIES":
			case "FRENCH TERRITORIES":
			case "SOUTHERN TERRITORIES":
			case "FRENCH SOUTHERN TERR":
			case "FRENCHSOUTHERNTERR":
			case "FRENCH TERR":
			case "FRENCH SOUTHERN TERR.":
			case "FRENCHSOUTHERNTERR":
			case "FRENCH TERR.":
			case "ATF":
			case "TF":
				cleanCountry = "FRENCH SOUTHERN TERRITORIES";
				break;
			case "GABON":
			case "GAB":
			case "GA":
				cleanCountry = "GABON";
				break;
			case "GAMBIA, THE":
			case "THE GAMBIA":
			case "GAMBIA":
			case "GMB":
			case "GM":
				cleanCountry = "GAMBIA";
				break;
			case "GEORGIA":
			case "GEO":
			case "GE":
				cleanCountry = "GEORGIA";
				break;
			case "GERMANY":
			case "DEU":
			case "DE":
				cleanCountry = "GERMANY";
				break;
			case "GHANA":
			case "GHA":
			case "GH":
				cleanCountry = "GHANA";
				break;
			case "GIBRALTAR":
			case "GIB":
			case "GI":
				cleanCountry = "GIBRALTAR";
				break;
			case "GREECE":
			case "GRC":
			case "GR":
				cleanCountry = "GREECE";
				break;
			case "GREENLAND":
			case "GRL":
			case "GL":
				cleanCountry = "GREENLAND";
				break;
			case "GRENADA":
			case "GRD":
			case "GD":
				cleanCountry = "GRENADA";
				break;
			case "GUADELOUPE":
			case "GLP":
			case "GP":
				cleanCountry = "GUADELOUPE";
				break;
			case "GUAM":
			case "GUM":
			case "GU":
				cleanCountry = "GUAM";
				break;
			case "GUATEMALA":
			case "GTM":
			case "GT":
				cleanCountry = "GUATEMALA";
				break;
			case "GUERNSEY":
			case "GGY":
			case "GG":
				cleanCountry = "GUERNSEY";
				break;
			case "GUINEA":
			case "GIN":
			case "GN":
				cleanCountry = "GUINEA";
				break;
			case "GUINEA-BISSAU":
			case "GUINEA BISSAU":
			case "GUINEABISSAU":
			case "BISSAU":
			case "GNB":
			case "GW":
				cleanCountry = "GUINEA-BISSAU";
				break;
			case "GUYANA":
			case "GUY":
			case "GY":
				cleanCountry = "GUYANA";
				break;
			case "HAITI":
			case "HAITI ISLANDS":
			case "HAITI ISLAND":
			case "HAITI ISLE":
			case "HAITI ISLES":
			case "HIATI":
			case "HTI":
			case "HT":
				cleanCountry = "HAITI";
				break;
			case "HEARD ISLAND AND MCDONALD MCDONALD ISLANDS":
			case "HEARD ISLE AND MCDONALD MCDONALD ISLANDS":
			case "HEARD ISLES AND MCDONALD MCDONALD ISLANDS":
			case "HEARD ISLAND AND MCDONALD MCDONALD ISLES":
			case "HEARD ISLAND AND MCDONALD MCDONALD ISLE":
			case "HEARD ISLAND & MCDONALD MCDONALD ISLANDS":
			case "HEARD ISLE & MCDONALD MCDONALD ISLANDS":
			case "HEARD ISLES & MCDONALD MCDONALD ISLANDS":
			case "HEARD ISLAND & MCDONALD MCDONALD ISLES":
			case "HEARD ISLAND & MCDONALD MCDONALD ISLE":
			case "HEARD ISLAND AND MCDONALD ISLANDS":
			case "HEARD ISLE AND MCDONALD ISLANDS":
			case "HEARD ISLES AND MCDONALD ISLANDS":
			case "HEARD ISLAND AND MCDONALD ISLES":
			case "HEARD ISLAND AND MCDONALD ISLE":
			case "HEARD ISLAND & MCDONALD ISLANDS":
			case "HEARD ISLE & MCDONALD ISLANDS":
			case "HEARD ISLES & MCDONALD ISLANDS":
			case "HEARD ISLAND & MCDONALD ISLES":
			case "HEARD ISLAND & MCDONALD ISLE":
			case "HEARD ISLAND":
			case "HEARD ILSE":
			case "HEARD ISLES":
			case "MCDONALD MCDONALD ISLANDS":
			case "MCDONALD MCDONALD ISLE":
			case "MCDONALD MCDONALD ISLES":
			case "MCDONALD ISLANDS":
			case "MCDONALD ISLE":
			case "MCDONALD ISLES":
			case "HMD":
			case "HM":
				cleanCountry = "HEARD ISLAND AND MCDONALD MCDONALD ISLANDS";
				break;
			case "HOLY SEE (VATICAN CITY STATE)":
			case "HOLY SEE VATICAN CITY STATE":
			case "VATICAN CITY STATE":
			case "HOLY SEE VATICAN CITY":
			case "HOLY SEE":
			case "VATICAN CITY":
			case "VAT":
			case "VA":
				cleanCountry = "HOLY SEE";
				break;
			case "HONDURAS":
			case "HND":
			case "HN":
				cleanCountry = "HONDURAS";
				break;
			case "HONG KONG":
			case "HONGKONG":
			case "HKG":
			case "HK":
				cleanCountry = "HONG KONG";
				break;
			case "HUNGARY":
			case "HUN":
			case "HU":
				cleanCountry = "HUNGARY";
				break;
			case "ICELAND":
			case "ISL":
			case "IS":
				cleanCountry = "ICELAND";
				break;
			case "INDIA":
			case "IND":
			case "IN":
				cleanCountry = "INDIA";
				break;
			case "INDONESIA":
			case "IDN":
			case "ID":
				cleanCountry = "INDONESIA";
				break;
			case "IRAN":
			case "IRAN, ISLAMIC REPUBLIC OF":
			case "ISLAMIC REPUBLIC OF IRAN":
			case "ISLAMIC REPUBLIC IRAN":
			case "ISLAMIC OF IRAN":
			case "REPUBLIC OF IRAN":
			case "ISLAMIC IRAN":
			case "REPUBLIC IRQIRAN":
			case "IRN":
			case "IR":
				cleanCountry = "IRAN";
				break;
			case "IRAQ":
			case "IRQ":
			case "IQ":
				cleanCountry = "IRAQ";
				break;
			case "ISLE OF MAN":
			case "ISLE MAN":
			case "ISLES OF MAN":
			case "ISLES MAN":
			case "ISLAND OF MAN":
			case "ISLAND MAN":
			case "MAN ISLE":
			case "MAN ISLAND":
			case "MAN ISLES":
			case "IMN":
			case "IM":
				cleanCountry = "ISLE OF MAN";
				break;
			case "IRELAND":
			case "IRL":
			case "IE":
				cleanCountry = "IRELAND";
				break;
			case "ISRAEL":
			case "ISR":
			case "IL":
				cleanCountry = "ISRAEL";
				break;
			case "ITALY":
			case "ITA":
			case "IT":
				cleanCountry = "ITALY";
				break;
			case "JAMAICA":
			case "JAM":
			case "JM":
				cleanCountry = "JAMAICA";
				break;
			case "JAPAN":
			case "JPN":
			case "JP":
				cleanCountry = "JAPAN";
				break;
			case "JERSEY":
			case "JEY":
			case "JE":
				cleanCountry = "JERSEY";
				break;
			case "JORDAN":
			case "JOR":
			case "JO":
				cleanCountry = "JORDAN";
				break;
			case "KAZAKHSTAN":
			case "KAZ":
			case "KZ":
				cleanCountry = "KAZAKHSTAN";
				break;
			case "KENYA":
			case "KEN":
			case "KE":
				cleanCountry = "KENYA";
				break;
			case "KIRIBATI":
			case "KIR":
			case "KI":
				cleanCountry = "KIRIBATI";
				break;
			case "KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF":
			case "DEMOCRATIC PEOPLE'S REPUBLIC OF KOREA":
			case "DEMOCRATIC PEOPLES REPUBLIC OF KOREA":
			case "DEMOCRATIC PEOPLE REPUBLIC OF KOREA":
			case "KOREA, DEM. PEOPLE'S REPUBLIC OF":
			case "DEM. PEOPLE'S REPUBLIC OF KOREA":
			case "DEM. PEOPLES REPUBLIC OF KOREA":
			case "DEM. PEOPLE REPUBLIC OF KOREA":
			case "KOREA, DEMOCRATIC PEOPLE'S REP. OF":
			case "DEMOCRATIC PEOPLE'S REP. OF KOREA":
			case "DEMOCRATIC PEOPLES REP. OF KOREA":
			case "DEMOCRATIC PEOPLE REP. OF KOREA":
			case "KOREA, DEM. PEOPLE'S REP. OF":
			case "DEM. PEOPLE'S REP. OF KOREA":
			case "DEM. PEOPLES REP. OF KOREA":
			case "DEM. PEOPLE REP. OF KOREA":
			case "KOREA, NORTH":
			case "KOREA, N":
			case "KOREA, N.":
			case "NORTH KOREA":
			case "NORTHKOREA":
			case "N KOREA":
			case "N. KOREA":
			case "PRK":
			case "KP":
				cleanCountry = "NORTH KOREA";
				break;
			case "KOREA, REPUBLIC OF":
			case "REPUBLIC OF KOREA":
			case "REP OF KOREA":
			case "REP. OF KOREA":
			case "KOREA":
			case "SOUTH KOREA":
			case "KOREA, SOUTH":
			case "S KOREA":
			case "S. KOREA":
			case "KOREA, SOUTH":
			case "KOR":
			case "KR":
				cleanCountry = "SOUTH KOREA";
				break;
			case "KOSOVO":
			case "KOS":
			case "KO":
				cleanCountry = "KOSOVO";
				break;
			case "KUWAIT":
			case "KWT":
			case "KW":
				cleanCountry = "KUWAIT";
				break;
			case "KYRGYZSTAN":
			case "KGZ":
			case "KG":
				cleanCountry = "KYRGYZSTAN";
				break;
			case "LAO PEOPLE'S DEMOCRATIC REPUBLIC":
			case "LAO PEOPLES DEMOCRATIC REPUBLIC":
			case "LAO PEOPLE'S DEM. REPUBLIC":
			case "LAO PEOPLES DEM. REPUBLIC":
			case "LAO PEOPLE'S DEM REPUBLIC":
			case "LAO PEOPLES DEM REPUBLIC":
			case "LAO PEOPLE'S DEMOCRATIC REP.":
			case "LAO PEOPLES DEMOCRATIC REP.":
			case "LAO PEOPLE'S DEMOCRATIC REP":
			case "LAO PEOPLES DEMOCRATIC REP":
			case "LAO PEOPLE'S DEM REP":
			case "LAO PEOPLES DEM REP":
			case "LAO PEOPLE'S DEM REP":
			case "LAO PEOPLES DEM. REP":
			case "LAO PEOPLE'S DEM REP.":
			case "LAO PEOPLES DEM. REP.":
			case "LAO PEOPLE'S REPUBLIC":
			case "LAO PEOPLE'S REP.":
			case "LAO PEOPLE'S REP":
			case "LAO PEOPLES REPUBLIC":
			case "LAO PEOPLES REP.":
			case "LAO PEOPLES REP":
			case "LAO PEOPLE REPUBLIC":
			case "LAO PEOPLE REP.":
			case "LAO PEOPLE REP":
			case "LAOS PEOPLE":
			case "LAOS":
			case "LAO":
			case "LA":
				cleanCountry = "LAOS";
				break;
			case "LATVIA":
			case "LVA":
			case "LV":
				cleanCountry = "LATVIA";
				break;
			case "LEBANON":
			case "LBN":
			case "LB":
				cleanCountry = "LEBANON";
				break;
			case "LESOTHO":
			case "LSO":
			case "LS":
				cleanCountry = "LESOTHO";
				break;
			case "LIBERIA":
			case "LBR":
			case "LR":
				cleanCountry = "LIBERIA";
				break;
			case "LIBYA":
			case "LBY":
			case "LY":
				cleanCountry = "LIBYA";
				break;
			case "LIECHTENSTEIN":
			case "LIE":
			case "LI":
				cleanCountry = "LIECHTENSTEIN";
				break;
			case "LITHUANIA":
			case "LTU":
			case "LT":
				cleanCountry = "LITHUANIA";
				break;
			case "LUXEMBOURG":
			case "LUXEMBURG":
			case "LUXEMBORG":
			case "LUXENBOURG":
			case "LUXENBURG":
			case "LUXENBORG":
			case "LUX":
			case "LU":
				cleanCountry = "LUXEMBOURG";
				break;
			case "MACAU":
			case "MAC":
			case "MO":
				cleanCountry = "MACAU";
				break;
			case "MACEDONIA":
			case "MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF":
			case "THE FORMER YUGOSLAV REPUBLIC OF MACEDONIA":
			case "FORMER YUGOSLAV REPUBLIC OF MACEDONIA":
			case "YUGOSLAV REPUBLIC OF MACEDONIA":
			case "REPUBLIC OF MACEDONIA":
			case "YUGOSLAV":
			case "MKD":
			case "MK":
				cleanCountry = "MACEDONIA";
				break;
			case "MADAGASCAR":
			case "MDG":
			case "MG":
				cleanCountry = "MADAGASCAR";
				break;
			case "MALAWI":
			case "MWI":
			case "MW":
				cleanCountry = "MALAWI";
				break;
			case "MALAYSIA":
			case "MYS":
			case "MY":
				cleanCountry = "MALAYSIA";
				break;
			case "MALDIVES":
			case "MDV":
			case "MV":
				cleanCountry = "MALDIVES";
				break;
			case "MALI":
			case "MLI":
			case "ML":
				cleanCountry = "MALI";
				break;
			case "MALTA":
			case "MLT":
			case "MT":
				cleanCountry = "MALTA";
				break;
			case "MARSHALL ISLANDS":
			case "MARSHALLISLANDS":
			case "MARSHALL ISLES":
			case "MARSHALL ISLE":
			case "MHL":
			case "MH":
				cleanCountry = "MARSHALL ISLANDS";
				break;
			case "MARTINIQUE":
			case "MTQ":
			case "MQ":
				cleanCountry = "MARTINIQUE";
				break;
			case "MAURITANIA":
			case "MRT":
			case "MR":
				cleanCountry = "MAURITANIA";
				break;
			case "MAURITIUS":
			case "MUS":
			case "MU":
				cleanCountry = "MAURITIUS";
				break;
			case "MAYOTTE":
			case "MYT":
			case "YT":
				cleanCountry = "MAYOTTE";
				break;
			case "MEXICO":
			case "MEX":
			case "MX":
				cleanCountry = "MEXICO";
				break;
			case "MICRONESIA, FEDERATED STATES OF":
			case "FEDERATED STATES OF MICRONESIA":
			case "FED STATES OF MICRONESIA":
			case "FED. STATES OF MICRONESIA":
			case "MICRONESIA":
			case "FSM":
			case "FM":
				cleanCountry = "MICRONESIA";
				break;
			case "MOLDOVA":
			case "MDA":
			case "MD":
				cleanCountry = "MOLDOVA";
				break;
			case "MONACO":
			case "MCO":
			case "MC":
				cleanCountry = "MONACO";
				break;
			case "MONGOLIA":
			case "MNG":
			case "MN":
				cleanCountry = "MONGOLIA";
				break;
			case "MONTENEGRO":
			case "MNE":
			case "ME":
				cleanCountry = "MONTENEGRO";
				break;
			case "MOROCCO":
			case "MOROCO":
			case "MORROCO":
			case "MORROCCO":
			case "MAR":
			case "MA":
				cleanCountry = "MOROCCO";
				break;
			case "MYANMAR":
			case "MMR":
			case "MM":
				cleanCountry = "MYANMAR";
				break;
			case "MOZAMBIQUE":
			case "MOZ":
			case "MZ":
				cleanCountry = "MOZAMBIQUE";
				break;
			case "NAMIBIA":
			case "NAM":
			case "NA":
				cleanCountry = "NAMIBIA";
				break;
			case "NAURU":
			case "NARU":
			case "NRU":
			case "NR":
				cleanCountry = "NAURU";
				break;
			case "NEPAL":
			case "NAPAL":
			case "NPL":
			case "NP":
				cleanCountry = "NEPAL";
				break;
			case "NETHERLANDS":
			case "NLD":
			case "NL":
				cleanCountry = "NETHERLANDS";
				break;
			case "NETHERLANDS ANTILLES":
			case "NETHERLANDSANTILLES":
			case "DUTCH ANTILLES":
			case "DUTCHANTILLES":
				cleanCountry = "NETHERLANDS ANTILLES";
				break;
			case "NEW CALEDONIA":
			case "NEWCALEDONIA":
			case "CALEDONIA":
			case "NCL":
			case "NC":
				cleanCountry = "NEW CALEDONIA";
				break;
			case "NEW ZEALAND":
			case "NEWZEALAND":
			case "NZL":
			case "NZ":
				cleanCountry = "NEW ZEALAND";
				break;
			case "NICARAGUA":
			case "NIC":
			case "NI":
				cleanCountry = "NICARAGUA";
				break;
			case "NIGER":
			case "NER":
			case "NE":
				cleanCountry = "NIGER";
				break;
			case "NIGERIA":
			case "NGA":
			case "NG":
				cleanCountry = "NIGERIA";
				break;
			case "NIUE":
			case "NUE":
			case "NIU":
			case "NU":
				cleanCountry = "NIUE";
				break;
			case "NORFOLK ISLAND":
			case "NORFOLKISLAND":
			case "NORFOLK ISLANDS":
			case "NORFOLK ISLE":
			case "NORFOLK ISLES":
			case "NFK":
			case "NF":
				cleanCountry = "NORFOLK ISLAND";
				break;
			case "NORTHERN MARIANA ISLANDS":
			case "NORTHERNMARIANAISLANDS":
			case "N MARIANA ISLANDS":
			case "N. MARIANA ISLANDS":
			case "NORTHERN MARIANA ISLES":
			case "NORTHERNMARIANAISLES":
			case "N MARIANA ISLES":
			case "N. MARIANA ISLES":
			case "NORTHERN MARIANA ISLE":
			case "NORTHERNMARIANAISLE":
			case "N MARIANA ISLE":
			case "N. MARIANA ISLE":
			case "NORTH MARIANA ISLANDS":
			case "NORTHMARIANAISLANDS":
			case "NORTH MARIANA ISLES":
			case "NORTHMARIANAISLES":
			case "NORTH MARIANA ISLE":
			case "NORTHMARIANAISLE":
			case "MNP":
			case "MP":
				cleanCountry = "NORTHERN MARIANA ISLANDS";
				break;
			case "NORWAY":
			case "NOR":
			case "NO":
				cleanCountry = "NORWAY";
				break;
			case "OMAN":
			case "OMN":
			case "OM":
				cleanCountry = "OMAN";
				break;
			case "PAKISTAN":
			case "PAKASTAN":
			case "PAK":
			case "PK":
				cleanCountry = "PAKISTAN";
				break;
			case "PALAU":
			case "PLW":
			case "PW":
				cleanCountry = "PALAU";
				break;
			case "PALESTINE, STATE OF":
			case "STATE OF PALESTINE":
			case "STATEOFPALESTINE":
			case "STATE PALESTINE":
			case "PALESTINE STATE":
			case "PALESTINESTATE":
			case "PALESTINIAN TERRITORIES":
			case "PALESTINIANTERRITORIES":
			case "PALESTINIAN":
			case "PALESTINE":
			case "PALASTINE, STATE OF":
			case "STATE OF PALASTINE":
			case "STATEOFPALASTINE":
			case "STATE PALASTINE":
			case "PALASTINE STATE":
			case "PALASTINESTATE":
			case "PALASTINIAN TERRITORIES":
			case "PALASTINIANTERRITORIES":
			case "PALASTINIAN":
			case "PALASTINE":
			case "PSE":
			case "PS":
				cleanCountry = "PALESTINIAN TERRITORIES";
				break;
			case "PANAMA":
			case "PAN":
			case "PA":
				cleanCountry = "PANAMA";
				break;
			case "PAPUA NEW GUINEA":
			case "PAPUA NEWGUINEA":
			case "PAPUANEWGUINEA":
			case "NEW GUINEA":
			case "PAPUA":
			case "PNG":
			case "PG":
				cleanCountry = "PAPUA NEW GUINEA";
				break;
			case "PARAGUAY":
			case "PRY":
			case "PY":
				cleanCountry = "PARAGUAY";
				break;
			case "PERU":
			case "PER":
			case "PE":
				cleanCountry = "PERU";
				break;
			case "PHILIPPINES":
			case "PHILAPPINES":
			case "PHILIPINES":
			case "PHILAPINES":
			case "FILIPPINES":
			case "FILAPPINES":
			case "FILIPINES":
			case "FILAPINES":
			case "PHL":
			case "PH":
				cleanCountry = "PHILIPPINES";
				break;
			case "POLAND":
			case "POL":
			case "PL":
				cleanCountry = "POLAND";
				break;
			case "PORTUGAL":
			case "PRT":
			case "PT":
				cleanCountry = "PORTUGAL";
				break;
			case "PUERTO RICO":
			case "PUERTORICO":
			case "PEURTO RICO":
			case "PRI":
			case "PR":
				cleanCountry = "PUERTO RICO";
				break;
			case "QATAR":
			case "QAT":
			case "QA":
				cleanCountry = "QATAR";
				break;
			case "ROMANIA":
			case "ROMANA":
			case "ROU":
			case "RO":
				cleanCountry = "ROMANIA";
				break;
			case "RUSSIA":
			case "RUSSIAN FEDERATION":
			case "RUSSIANFEDERATION":
			case "RUSSIAN FEDARATION":
			case "RUSSIANFEDARATION":
			case "USSR":
			case "U.S.S.R.":
			case "U. S. S. R.":
			case "RUS":
			case "RU":
				cleanCountry = "RUSSIA";
				break;
			case "RWANDA":
			case "RWA":
			case "RW":
				cleanCountry = "RWANDA";
				break;
			case "REUNION":
			case "REU":
				cleanCountry = "REUNION";
				break;
			case "SAINT BARTHALEMY":
			case "SAINTBARTHALEMY":
			case "ST BARTHALEMY":
			case "STBARTHALEMY":
			case "ST. BARTHALEMY":
			case "ST.BARTHALEMY":
			case "SAINT BARTHELEMY":
			case "SAINTBARTHELEMY":
			case "ST BARTHELEMY":
			case "STBARTHELEMY":
			case "ST. BARTHELEMY":
			case "ST.BARTHELEMY":
			case "BLM":
			case "BL":
				cleanCountry = "SAINT BARTHALEMY";
				break;
			case "SAINT HELENA":
			case "SAINTHELENA":
			case "ST HELENA":
			case "STHELENA":
			case "ST. HELENA":
			case "ST.HELENA":
			case "SAINT HELLENA":
			case "SAINTHELLENA":
			case "ST HELLENA":
			case "STHELLENA":
			case "ST. HELLENA":
			case "ST.HELLENA":
			case "SAINT HELANA":
			case "SAINTHELANA":
			case "ST HELANA":
			case "STHELANA":
			case "ST. HELANA":
			case "ST.HELANA":
			case "SHN":
			case "SH":
				cleanCountry = "SAINT HELENA";
				break;
			case "SAINT KITTS AND NEVIS":
			case "SAINT KITTS & NEVIS":
			case "ST KITTS AND NEVIS":
			case "ST KITTS & NEVIS":
			case "ST. KITTS AND NEVIS":
			case "ST. KITTS & NEVIS":
			case "KNA":
			case "KN":
				cleanCountry = "SAINT KITTS AND NEVIS";
				break;
			case "SAINT LUCIA":
			case "SAINTLUCIA":
			case "ST LUCIA":
			case "ST. LUCIA":
			case "LCA":
			case "LC":
				cleanCountry = "SAINT LUCIA";
				break;
			case "SAINT PIERRE AND MIQUELON":
			case "SAINT PIERRE & MIQUELON":
			case "ST PIERRE AND MIQUELON":
			case "ST PIERRE & MIQUELON":
			case "ST. PIERRE AND MIQUELON":
			case "ST. PIERRE & MIQUELON":
			case "SPM":
			case "PM":
				cleanCountry = "SAINT PIERRE AND MIQUELON";
				break;
			case "SAINT VINCENT AND THE GRENADINES":
			case "SAINT VINCENT & THE GRENADINES":
			case "SAINT VINCENT AND GRENADINES":
			case "SAINT VINCENT & GRENADINES":
			case "SAINTVINCENTANDTHEGRENADINES":
			case "SAINTVINCENTTHEGRENADINES":
			case "STVINCENTANDTHEGRENADINES":
			case "STVINCENTTHEGRENADINES":
			case "ST. VINCENT AND THE GRENADINES":
			case "ST. VINCENT & THE GRENADINES":
			case "ST. VINCENT AND GRENADINES":
			case "ST. VINCENT & GRENADINES":
			case "ST VINCENT AND THE GRENADINES":
			case "ST VINCENT & THE GRENADINES":
			case "ST VINCENT AND GRENADINES":
			case "ST VINCENT & GRENADINES":
			case "VCT":
			case "VC":
				cleanCountry = "SAINT VINCENT AND THE GRENADINES";
				break;
			case "AMERICAN SAMOA":
			case "AMERICANSAMOA":
			case "SAMOA, AMERICAN":
			case "SAMOA,AMERICAN":
			case "ASM":
			case "AS":
				cleanCountry = "AMERICAN SAMOA";
				break;
			case "SAMOA":
			case "WSM":
			case "WS":
				cleanCountry = "SAMOA";
				break;
			case "SAN MARINO":
			case "SANMARINO":
			case "SAINT MARINO":
			case "ST MARINO":
			case "ST. MARINO":
			case "SMR":
			case "SM":
				cleanCountry = "SAN MARINO";
				break;
			case "SAO TOME AND PRINCIPE":
			case "SAOTOME AND PRINCIPE":
			case "SAOTOMEANDPRINCIPE":
			case "SAOTOME AND PRINCIPE":
			case "SAO TOME & PRINCIPE":
			case "SAOTOME & PRINCIPE":
			case "SAO TOME AND PRINCIPLE":
			case "SAOTOME AND PRINCIPLE":
			case "SAOTOMEANDPRINCIPLE":
			case "SAOTOME AND PRINCIPLE":
			case "SAO TOME & PRINCIPLE":
			case "SAOTOME & PRINCIPLE":
			case "STP":
			case "ST":
				cleanCountry = "SAO TOME AND PRINCIPE";
				break;
			case "SAUDI ARABIA":
			case "SAUDIARABIA":
			case "SAU":
			case "SA":
				cleanCountry = "SAUDI ARABIA";
				break;
			case "SENEGAL":
			case "SENAGAL":
			case "SINEGAL":
			case "SINAGAL":
			case "SYNEGAL":
			case "SYNAGAL":
			case "SENEGUL":
			case "SENAGUL":
			case "SINEGUL":
			case "SINAGUL":
			case "SYNEGUL":
			case "SYNAGUL":
			case "SEN":
			case "SN":
				cleanCountry = "SENEGAL";
				break;
			case "SERBIA":
			case "SRB":
			case "RS":
				cleanCountry = "SERBIA";
				break;
			case "SEYCHELLES":
			case "SEYCHELES":
			case "SAYCHELLES":
			case "SYC":
			case "SC":
				cleanCountry = "SEYCHELLES";
				break;
			case "SIERRA LEONE":
			case "SIERRALEONE":
			case "SLE":
			case "SL":
				cleanCountry = "SIERRA LEONE";
				break;
			case "SINGAPORE":
			case "SGP":
			case "SG":
				cleanCountry = "SINGAPORE";
				break;
			case "SAINT MARTIN (FRENCH PART)":
			case "SAINT MARTIN (FRENCH)":
			case "SAINT MARTIN FRENCH":
			case "SAINT MARTIN - FRENCH PART":
			case "SAINT MARTIN - FRENCH":
			case "ST. MARTIN (FRENCH PART)":
			case "ST. MARTIN (FRENCH)":
			case "ST. MARTIN FRENCH":
			case "ST. MARTIN - FRENCH PART":
			case "ST. MARTIN - FRENCH":
			case "ST MARTIN (FRENCH PART)":
			case "ST MARTIN (FRENCH)":
			case "ST MARTIN FRENCH":
			case "ST MARTIN - FRENCH PART":
			case "ST MARTIN - FRENCH":
			case "SAINT MARTIN":
			case "SAINTMARTIN":
			case "ST MARTIN":
			case "ST. MARTIN":
			case "MAF":
			case "MF":
				cleanCountry = "SINT MAARTEN";
				break;
			case "SINT MAARTEN (DUTCH PART)":
			case "SINT MAARTEN (DUTCH)":
			case "SINT MAARTEN DUTCH":
			case "SINT MAARTEN - DUTCH PART":
			case "SINT MAARTEN - DUTCH":
			case "ST. MAARTEN (DUTCH PART)":
			case "ST. MAARTEN (DUTCH)":
			case "ST. MAARTEN DUTCH":
			case "ST. MAARTEN - DUTCH PART":
			case "ST. MAARTEN - DUTCH":
			case "ST MAARTEN (DUTCH PART)":
			case "ST MAARTEN (DUTCH)":
			case "ST MAARTEN DUTCH":
			case "ST MAARTEN - DUTCH PART":
			case "ST MAARTEN - DUTCH":
			case "SINT MAARTEN":
			case "SINTMAARTEN":
			case "SAINT MAARTEN":
			case "SAINTMAARTEN":
			case "ST MAARTEN":
			case "ST. MAARTEN":
			case "SINT MARTEN":
			case "SINTMARTEN":
			case "SAINT MARTEN":
			case "SAINTMARTEN":
			case "ST MARTEN":
			case "ST. MARTEN":
			case "SXM":
			case "SX":
				cleanCountry = "SINT MAARTEN";
				break;
			case "SLOVAKIA":
			case "SVK":
			case "SK":
				cleanCountry = "SLOVAKIA";
				break;
			case "SLOVENIA":
			case "SVN":
			case "SI":
				cleanCountry = "SLOVENIA";
				break;
			case "SOLOMON ISLANDS":
			case "SOLOMONISLANDS":
			case "SOLOMON ISLES":
			case "SOLOMON ISLE":
			case "SLB":
			case "SB":
				cleanCountry = "SOLOMON ISLANDS";
				break;
			case "SOMALIA":
			case "SOM":
			case "SO":
				cleanCountry = "SOMALIA";
				break;
			case "SOUTH AFRICA":
			case "AFRICA, SOUTH":
			case "S AFRICA":
			case "S. AFRICA":
			case "ZAF":
			case "ZA":
				cleanCountry = "SOUTH AFRICA";
				break;
			case "SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS":
			case "S GEORGIA AND THE SOUTH SANDWICH ISLANDS":
			case "S. GEORGIA AND THE SOUTH SANDWICH ISLANDS":
			case "SOUTH GEORGIA AND THE S SANDWICH ISLANDS":
			case "SOUTH GEORGIA AND THE S. SANDWICH ISLANDS":
			case "S GEORGIA AND THE S SANDWICH ISLANDS":
			case "S GEORGIA AND THE S. SANDWICH ISLANDS":
			case "S. GEORGIA AND THE SOUTH SANDWICH ISLANDS":
			case "S. GEORGIA AND THE S SANDWICH ISLANDS":
			case "S. GEORGIA AND THE S. SANDWICH ISLANDS":
			case "SOUTH GEORGIA AND THE SOUTH SANDWICH ISLES":
			case "S GEORGIA AND THE SOUTH SANDWICH ISLES":
			case "S. GEORGIA AND THE SOUTH SANDWICH ISLES":
			case "SOUTH GEORGIA AND THE S SANDWICH ISLES":
			case "SOUTH GEORGIA AND THE S. SANDWICH ISLES":
			case "S GEORGIA AND THE S SANDWICH ISLES":
			case "S GEORGIA AND THE S. SANDWICH ISLES":
			case "S. GEORGIA AND THE SOUTH SANDWICH ISLES":
			case "S. GEORGIA AND THE S SANDWICH ISLES":
			case "S. GEORGIA AND THE S. SANDWICH ISLES":
			case "SOUTH GEORGIA AND THE SOUTH SANDWICH ISLE":
			case "S GEORGIA AND THE SOUTH SANDWICH ISLE":
			case "S. GEORGIA AND THE SOUTH SANDWICH ISLE":
			case "SOUTH GEORGIA AND THE S SANDWICH ISLE":
			case "SOUTH GEORGIA AND THE S. SANDWICH ISLE":
			case "S GEORGIA AND THE S SANDWICH ISLE":
			case "S GEORGIA AND THE S. SANDWICH ISLE":
			case "S. GEORGIA AND THE SOUTH SANDWICH ISLE":
			case "S. GEORGIA AND THE S SANDWICH ISLE":
			case "S. GEORGIA AND THE S. SANDWICH ISLE":
			case "SOUTH GEORGIA & THE SOUTH SANDWICH ISLANDS":
			case "S GEORGIA & THE SOUTH SANDWICH ISLANDS":
			case "S. GEORGIA & THE SOUTH SANDWICH ISLANDS":
			case "SOUTH GEORGIA & THE S SANDWICH ISLANDS":
			case "SOUTH GEORGIA & THE S. SANDWICH ISLANDS":
			case "S GEORGIA & THE S SANDWICH ISLANDS":
			case "S GEORGIA & THE S. SANDWICH ISLANDS":
			case "S. GEORGIA & THE SOUTH SANDWICH ISLANDS":
			case "S. GEORGIA & THE S SANDWICH ISLANDS":
			case "S. GEORGIA & THE S. SANDWICH ISLANDS":
			case "SOUTH GEORGIA & THE SOUTH SANDWICH ISLES":
			case "S GEORGIA & THE SOUTH SANDWICH ISLES":
			case "S. GEORGIA & THE SOUTH SANDWICH ISLES":
			case "SOUTH GEORGIA & THE S SANDWICH ISLES":
			case "SOUTH GEORGIA & THE S. SANDWICH ISLES":
			case "S GEORGIA & THE S SANDWICH ISLES":
			case "S GEORGIA & THE S. SANDWICH ISLES":
			case "S. GEORGIA & THE SOUTH SANDWICH ISLES":
			case "S. GEORGIA & THE S SANDWICH ISLES":
			case "S. GEORGIA & THE S. SANDWICH ISLES":
			case "SOUTH GEORGIA & THE SOUTH SANDWICH ISLE":
			case "S GEORGIA & THE SOUTH SANDWICH ISLE":
			case "S. GEORGIA & THE SOUTH SANDWICH ISLE":
			case "SOUTH GEORGIA & THE S SANDWICH ISLE":
			case "SOUTH GEORGIA & THE S. SANDWICH ISLE":
			case "S GEORGIA & THE S SANDWICH ISLE":
			case "S GEORGIA & THE S. SANDWICH ISLE":
			case "S. GEORGIA & THE SOUTH SANDWICH ISLE":
			case "S. GEORGIA & THE S SANDWICH ISLE":
			case "S. GEORGIA & THE S. SANDWICH ISLE":
			case "S GEORGIA AND THE SOUTH SANDWICH ISLANDS":
			case "S. GEORGIA AND THE SOUTH SANDWICH ISLANDS":
			case "SOUTH GEORGIA AND THE S SANDWICH ISLANDS":
			case "SOUTH GEORGIA AND THE S. SANDWICH ISLANDS":
			case "S GEORGIA AND THE S SANDWICH ISLANDS":
			case "S GEORGIA AND THE S. SANDWICH ISLANDS":
			case "S. GEORGIA AND THE SOUTH SANDWICH ISLANDS":
			case "S. GEORGIA AND THE S SANDWICH ISLANDS":
			case "S. GEORGIA AND THE S. SANDWICH ISLANDS":
			case "SOUTH GEORGIA AND THE SOUTH SANDWICH ISLES":
			case "S GEORGIA AND THE SOUTH SANDWICH ISLES":
			case "S. GEORGIA AND THE SOUTH SANDWICH ISLES":
			case "SOUTH GEORGIA AND THE S SANDWICH ISLES":
			case "SOUTH GEORGIA AND THE S. SANDWICH ISLES":
			case "S GEORGIA AND THE S SANDWICH ISLES":
			case "S GEORGIA AND THE S. SANDWICH ISLES":
			case "S. GEORGIA AND THE SOUTH SANDWICH ISLES":
			case "S. GEORGIA AND THE S SANDWICH ISLES":
			case "S. GEORGIA AND THE S. SANDWICH ISLES":
			case "SOUTH GEORGIA AND THE SOUTH SANDWICH ISLE":
			case "S GEORGIA AND THE SOUTH SANDWICH ISLE":
			case "S. GEORGIA AND THE SOUTH SANDWICH ISLE":
			case "SOUTH GEORGIA AND THE S SANDWICH ISLE":
			case "SOUTH GEORGIA AND THE S. SANDWICH ISLE":
			case "S GEORGIA AND THE S SANDWICH ISLE":
			case "S GEORGIA AND THE S. SANDWICH ISLE":
			case "S. GEORGIA AND THE SOUTH SANDWICH ISLE":
			case "S. GEORGIA AND THE S SANDWICH ISLE":
			case "S. GEORGIA AND THE S. SANDWICH ISLE":
			case "SOUTH GEORGIA & SOUTH SANDWICH ISLANDS":
			case "S GEORGIA & SOUTH SANDWICH ISLANDS":
			case "S. GEORGIA & SOUTH SANDWICH ISLANDS":
			case "SOUTH GEORGIA & S SANDWICH ISLANDS":
			case "SOUTH GEORGIA & S. SANDWICH ISLANDS":
			case "S GEORGIA & S SANDWICH ISLANDS":
			case "S GEORGIA & S. SANDWICH ISLANDS":
			case "S. GEORGIA & SOUTH SANDWICH ISLANDS":
			case "S. GEORGIA & S SANDWICH ISLANDS":
			case "S. GEORGIA & S. SANDWICH ISLANDS":
			case "SOUTH GEORGIA & SOUTH SANDWICH ISLES":
			case "S GEORGIA & SOUTH SANDWICH ISLES":
			case "S. GEORGIA & SOUTH SANDWICH ISLES":
			case "SOUTH GEORGIA & S SANDWICH ISLES":
			case "SOUTH GEORGIA & S. SANDWICH ISLES":
			case "S GEORGIA & S SANDWICH ISLES":
			case "S GEORGIA & S. SANDWICH ISLES":
			case "S. GEORGIA & SOUTH SANDWICH ISLES":
			case "S. GEORGIA & S SANDWICH ISLES":
			case "S. GEORGIA & S. SANDWICH ISLES":
			case "SOUTH GEORGIA & SOUTH SANDWICH ISLE":
			case "S GEORGIA & SOUTH SANDWICH ISLE":
			case "S. GEORGIA & SOUTH SANDWICH ISLE":
			case "SOUTH GEORGIA & S SANDWICH ISLE":
			case "SOUTH GEORGIA & S. SANDWICH ISLE":
			case "S GEORGIA & S SANDWICH ISLE":
			case "S GEORGIA & S. SANDWICH ISLE":
			case "S. GEORGIA & SOUTH SANDWICH ISLE":
			case "S. GEORGIA & S SANDWICH ISLE":
			case "S. GEORGIA & S. SANDWICH ISLE":
			case "SOUTH GEORGIA":
			case "S GEORGIA":
			case "S. GEORGIA":
			case "THE SOUTH SANDWICH ISLANDS":
			case "THE S. SANDWICH ISLANDS":
			case "THE S SANDWICH ISLANDS":
			case "THE SOUTH SANDWICH ISLES":
			case "THE S. SANDWICH ISLES":
			case "THE S SANDWICH ISLES":
			case "THE SOUTH SANDWICH ISLE":
			case "THE S. SANDWICH ISLE":
			case "THE S SANDWICH ISLE":
			case "SOUTH SANDWICH ISLANDS":
			case "S. SANDWICH ISLANDS":
			case "S SANDWICH ISLANDS":
			case "SOUTH SANDWICH ISLES":
			case "S. SANDWICH ISLES":
			case "S SANDWICH ISLES":
			case "SOUTH SANDWICH ISLE":
			case "S. SANDWICH ISLE":
			case "S SANDWICH ISLE":
			case "GS":
			case "SGS":
				cleanCountry = "SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS";
				break;
			case "SOUTH SUDAN":
			case "SOUTHSUDAN":
			case "S SUDAN":
			case "S. SUDAN":
			case "SSD":
			case "SS":
				cleanCountry = "SOUTH SUDAN";
				break;
			case "SPAIN":
			case "ESP":
			case "ES":
				cleanCountry = "SPAIN";
				break;
			case "SRI LANKA":
			case "SRILANKA":
			case "LKA":
			case "LK":
				cleanCountry = "SRI LANKA";
				break;
			case "SUDAN":
			case "SDN":
			case "SD":
				cleanCountry = "SUDAN";
				break;
			case "SURINAME":
			case "SURNAME":
			case "SUR":
			case "SR":
				cleanCountry = "SURINAME";
				break;
			case "SVALBARD AND JAN MAYEN":
			case "SVALBARD & JAN MAYEN":
			case "SVALBARD":
			case "JAN MAYEN":
			case "SJ":
			case "SJM":
				cleanCountry = "SVALBARD AND JAN MAYEN";
				break;
			case "SWAZILAND":
			case "SWZ":
			case "SZ":
				cleanCountry = "SWAZILAND";
				break;
			case "SWEDEN":
			case "SWE":
			case "SE":
				cleanCountry = "SWEDEN";
				break;
			case "SWITZERLAND":
			case "CHE":
			case "CH":
				cleanCountry = "SWITZERLAND";
				break;
			case "SYRIAN ARAB REPUBLIC":
			case "SYRIAN ARAB REP":
			case "SYRIAN ARAB REP.":
			case "SYRIAN ARAB":
			case "SYRIA ARAB REPUBLIC":
			case "SYRIA ARAB REP":
			case "SYRIA ARAB REP.":
			case "SYRIA ARAB":
			case "SYRIA ARAB":
			case "SYRIA ARAB":
			case "SYRIA ARAB":
			case "SYRIA":
			case "SYR":
			case "SY":
				cleanCountry = "SYRIAN ARAB REPUBLIC";
				break;
			case "TAIWAN":
			case "TAIWAN, PROVINCE OF CHINA":
			case "TAIWAN, CHINA":
			case "TAIWAN,CHINA":
			case "TAIWAN CHINA":
			case "TW":
			case "TWN":
				cleanCountry = "TAIWAN";
				break;
			case "TAJIKISTAN":
			case "TJK":
			case "TJ":
				cleanCountry = "TAJIKISTAN";
				break;
			case "UNITED REPUBLIC OF TANZANIA":
			case "UNITED REP OF TANZANIA":
			case "UNITED REP. OF TANZANIA":
			case "REPUBLIC OF TANZANIA":
			case "REP. OF TANZANIA":
			case "REP OF TANZANIA":
			case "UNITED TANZANIA":
			case "TANZANIA":
			case "TZ":
			case "TZA":
				cleanCountry = "TANZANIA";
				break;
			case "THAILAND":
			case "THA":
			case "TH":
				cleanCountry = "THAILAND";
				break;
			case "TIMOR-LESTE":
			case "TIMORLESTE":
			case "TIMOR LESTE":
			case "TLS":
			case "TL":
				cleanCountry = "TIMOR-LESTE";
				break;
			case "TOGO":
			case "TGO":
			case "TG":
				cleanCountry = "TOGO";
				break;
			case "TOKELAU":
			case "TOKALAU":
			case "TOKELOU":
			case "TK":
			case "TKL":
				cleanCountry = "TOKELAU";
				break;
			case "TONGA":
			case "TON":
			case "TO":
				cleanCountry = "TONGA";
				break;
			case "TRINIDAD AND TOBAGO":
			case "TRINIDADANDTOBAGO":
			case "TRINIDAD & TOBAGO":
			case "TRINIDAD TOBAGO":
			case "TTO":
			case "TT":
				cleanCountry = "TRINIDAD AND TOBAGO";
				break;
			case "TUNISIA":
			case "TUN":
			case "TN":
				cleanCountry = "TUNISIA";
				break;
			case "TURKEY":
			case "TUR":
			case "TR":
				cleanCountry = "TURKEY";
				break;
			case "TURKMENISTAN":
			case "TKM":
			case "TM":
				cleanCountry = "TURKMENISTAN";
				break;
			case "TUVALU":
			case "TUV":
			case "TV":
				cleanCountry = "TUVALU";
				break;
			case "UGANDA":
			case "UGA":
			case "UG":
				cleanCountry = "UGANDA";
				break;
			case "UKRAINE":
			case "UKRAIN":
			case "UKR":
			case "UA":
				cleanCountry = "UKRAINE";
				break;
			case "UNITED ARAB EMIRATES":
			case "UNITEDARABEMIRATES":
			case "UNITED ARAB":
			case "UNITED ARABS":
			case "UNITED EMIRATES":
			case "ARAB EMIRATES":
			case "EMIRATES":
			case "ARE":
			case "AE":
				cleanCountry = "UNITED ARAB EMIRATES";
				break;
			case "UNITED KINGDOM":
			case "UK":
			case "U. K.":
			case "U.K.":
			case "UK.":
			case "U.K":
			case "UNITEDKINGDOM":
			case "GBR":
			case "GB":
				cleanCountry = "UNITED KINGDOM";
				break;
			case "UNITED STATES":
			case "US":
			case "U. S.":
			case "U.S.":
			case "US.":
			case "U.S":
			case "UNITEDSTATES":
			case "UNITED STATES OF AMERICA":
			case "UNITED STATES AMERICA":
			case "USA":
			case "U. S. A.":
			case "US. A.":
			case "U. SA":
			case "U. S. A":
			case "USA.":
			case "US.A.":
			case "U.SA":
			case "U.S.A":
			case "UNITEDSTATESAMERICA":
			case "AMERICA":
			case "USA":
			case "US":
				cleanCountry = "UNITED STATES";
				break;
			case "UNITED STATES MINOR OUTLYING ISLANDS":
			case "US MINOR OUTLYING ISLANDS":
			case "U.S. MINOR OUTLYING ISLANDS":
			case "U. S. MINOR OUTLYING ISLANDS":
			case "UNITED STATES OUTLYING ISLANDS":
			case "US OUTLYING ISLANDS":
			case "U.S. OUTLYING ISLANDS":
			case "U. S. OUTLYING ISLANDS":
			case "UNITED STATES ISLANDS":
			case "US ISLANDS":
			case "U.S. ISLANDS":
			case "U. S. ISLANDS":
			case "UM":
			case "UMI":
				cleanCountry = "UNITED STATES MINOR OUTLYING ISLANDS";
				break;
			case "URUGUAY":
			case "URY":
			case "UY":
				cleanCountry = "URUGUAY";
				break;
			case "UZBEKISTAN":
			case "UZB":
			case "UZ":
				cleanCountry = "UZBEKISTAN";
				break;
			case "VANUATU":
			case "VUT":
			case "VU":
				cleanCountry = "VANUATU";
				break;
			case "VENEZUELA":
			case "VEN":
			case "VE":
				cleanCountry = "VENEZUELA";
				break;
			case "VIETNAM":
			case "VIET NAM":
			case "VNM":
			case "VN":
				cleanCountry = "VIETNAM";
				break;
			case "BRITISH VIRGIN ISLANDS":
			case "BRITISH ISLANDS":
			case "BRITISH VIRGIN ISLES":
			case "BRITISH VIRGIN ISLE":
			case "VG":
			case "VGB":
				cleanCountry = "BRITISH VIRGIN ISLANDS";
				break;
			case "VIRGIN ISLANDS":
			case "US VIRGIN ISLANDS":
			case "US VIRGIN ISLES":
			case "US VIRGIN ISLE":
			case "U.S. VIRGIN ISLANDS":
			case "U.S. VIRGIN ISLES":
			case "U.S. VIRGIN ISLE":
			case "U. S. VIRGIN ISLANDS":
			case "U. S. VIRGIN ISLES":
			case "U. S. VIRGIN ISLE":
			case "VIR":
			case "VI":
				cleanCountry = "US VIRGIN ISLANDS";
				break;
			case "WALLIS AND FUTUNA":
			case "WALLIS & FUTUNA":
			case "WALLIS":
			case "FUTUNA":
			case "WF":
			case "WLF":
				cleanCountry = "WALLIS AND FUTUNA";
				break;
			case "WESTERN SAHARA":
			case "W. SAHARA":
			case "W SAHARA":
			case "SAHARA":
			case "EH":
			case "ESH":
				cleanCountry = "WESTERN SAHARA";
				break;
			case "YEMEN":
			case "YEM":
			case "YE":
				cleanCountry = "YEMEN";
				break;
			case "ZAMBIA":
			case "ZMB":
			case "ZM":
				cleanCountry = "ZAMBIA";
				break;
			case "ZIMBABWE":
			case "ZWE":
			case "ZW":
				cleanCountry = "ZIMBABWE";
				break;
			case "ALAND ISLANDS":
			case "ALAND ISLANDS":
			case "ALAND ISLES":
			case "ALAND ISLE":
			case "AX":
			case "ALA":
				cleanCountry = "ALAND ISLANDS";
				break;
			default:
				if ( matchRequired ) {
					cleanCountry = null;
				}
		}

		return cleanCountry;
	};

} ).call( this );