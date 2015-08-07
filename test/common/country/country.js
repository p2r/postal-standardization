"use strict";

/* global describe, it */

var should = require( "should" );

var Postal = require( "../../../lib" ).USPostal;

describe( "Countries:", function () {

	var postal = new Postal();

	it( "AFGHANISTAN", function () {
		var names = [
			"AFGHANISTAN",
			"AF",
			"AFG"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "AFGHANISTAN" );
		}

	} );

	it( "ALBANIA", function () {
		var names = [
			"ALBANIA",
			"AL",
			"ALB"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "ALBANIA" );
		}

	} );

	it( "ALGERIA", function () {
		var names = [
			"ALGERIA",
			"DZA",
			"DZ"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "ALGERIA" );
		}

	} );

	it( "ANDORRA", function () {
		var names = [
			"ANDORRA",
			"AND",
			"AN"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "ANDORRA" );
		}

	} );

	it( "ANGOLA", function () {
		var names = [
			"ANGOLA",
			"AGO",
			"AO"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "ANGOLA" );
		}

	} );

	it( "ANGUILLA", function () {
		var names = [
			"ANGUILLA",
			"AIA",
			"AI"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "ANGUILLA" );
		}

	} );

	it( "ANTARCTICA", function () {
		var names = [
			"ANTARCTICA",
			"ATA",
			"AQ"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "ANTARCTICA" );
		}

	} );

	it( "ANTIGUA AND BARBUDA", function () {
		var names = [
			"ANTIGUA AND BARBUDA",
			"ANTIGUA & BARBUDA",
			"ANTIGUAANDBARBUDA",
			"ANTIGUA BARBUDA",
			"ANTIGUABARBUDA",
			"ANTIGUA",
			"BARBUDA",
			"ATG",
			"AG"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "ANTIGUA AND BARBUDA" );
		}

	} );

	it( "ARGENTINA", function () {
		var names = [
			"ARGENTINA",
			"ARG",
			"AR"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "ARGENTINA" );
		}

	} );

	it( "ARMENIA", function () {
		var names = [
			"ARMENIA",
			"ARM",
			"AM"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "ARMENIA" );
		}

	} );

	it( "ARUBA", function () {
		var names = [
			"ARUBA",
			"ABW",
			"AW"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "ARUBA" );
		}

	} );

	it( "AUSTRALIA", function () {
		var names = [
			"AUSTRALIA",
			"AUS",
			"AU"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "AUSTRALIA" );
		}

	} );

	it( "AUSTRIA", function () {
		var names = [
			"AUSTRIA",
			"AUT",
			"AT"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "AUSTRIA" );
		}

	} );

	it( "AZERBAIJAN", function () {
		var names = [
			"AZERBAIJAN",
			"AZE",
			"AZ"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "AZERBAIJAN" );
		}

	} );

	it( "BAHAMAS", function () {
		var names = [
			"BAHAMAS, THE",
			"THE BAHAMAS",
			"BAHAMAS",
			"BHS",
			"BS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "BAHAMAS" );
		}

	} );

	it( "BAHRAIN", function () {
		var names = [
			"BAHRAIN",
			"BHR",
			"BH"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "BAHRAIN" );
		}

	} );

	it( "BANGLADESH", function () {
		var names = [
			"BANGLADESH",
			"BGD",
			"BD"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "BANGLADESH" );
		}

	} );

	it( "BARBADOS", function () {
		var names = [
			"BARBADOS",
			"BRB",
			"BB"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "BARBADOS" );
		}

	} );

	it( "BELARUS", function () {
		var names = [
			"BELARUS",
			"BLR",
			"BY"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "BELARUS" );
		}

	} );

	it( "BELGIUM", function () {
		var names = [
			"BELGIUM",
			"BEL",
			"BE"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "BELGIUM" );
		}

	} );

	it( "BELIZE", function () {
		var names = [
			"BELIZE",
			"BLZ",
			"BZ"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "BELIZE" );
		}

	} );

	it( "BENIN", function () {
		var names = [
			"BENIN",
			"BEN",
			"BJ"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "BENIN" );
		}

	} );

	it( "BERMUDA", function () {
		var names = [
			"BERMUDA",
			"BMU",
			"BM"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "BERMUDA" );
		}

	} );

	it( "BHUTAN", function () {
		var names = [
			"BHUTAN",
			"BTN",
			"BT"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "BHUTAN" );
		}

	} );

	it( "BOLIVIA", function () {
		var names = [
			"BOLIVIA",
			"BOL",
			"BO"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "BOLIVIA" );
		}

	} );

	it( "BONAIRE", function () {
		var names = [
			"BONAIRE",
			"BES",
			"BQ"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "BONAIRE" );
		}

	} );

	it( "BOSNIA AND HERZEGOVINA", function () {
		var names = [
			"BOSNIA AND HERZEGOVINA",
			"BOSNIA & HERZEGOVINA",
			"BOSNIA HERZEGOVINA",
			"BOSNIA",
			"HERZEGOVINA",
			"BIH",
			"BA"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "BOSNIA AND HERZEGOVINA" );
		}

	} );

	it( "BOTSWANA", function () {
		var names = [
			"BOTSWANA",
			"BWA",
			"BW"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "BOTSWANA" );
		}

	} );

	it( "BOUVET ISLAND", function () {
		var names = [
			"BOUVET ISLAND",
			"BOUVETISLAND",
			"BOUVET ISLE",
			"BOUVET ISLES",
			"BOUVET",
			"BVT",
			"BV"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "BOUVET ISLAND" );
		}

	} );

	it( "BRITISH INDIAN OCEAN TERRITORY", function () {
		var names = [
			"BRITISH INDIAN OCEAN TERRITORY",
			"BRITISH INDIAN OCEAN",
			"BRITISH INDIAN TERRITORY",
			"INDIAN OCEAN TERRITORY",
			"INDIAN OCEAN",
			"IOT",
			"IO"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "BRITISH INDIAN OCEAN TERRITORY" );
		}

	} );

	it( "BRAZIL", function () {
		var names = [
			"BRAZIL",
			"BRA",
			"BR"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "BRAZIL" );
		}

	} );

	it( "BRUNEI", function () {
		var names = [
			"BRUNEI DARUSSALAM",
			"BRUNEIDARUSSALAM",
			"DARUSSALAM",
			"BRUNEI",
			"BRN",
			"BN"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "BRUNEI" );
		}

	} );

	it( "BULGARIA", function () {
		var names = [
			"BULGARIA",
			"BGR",
			"BG"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "BULGARIA" );
		}

	} );

	it( "BURKINA FASO", function () {
		var names = [
			"BURKINA FASO",
			"BURKINAFASO",
			"BURKINA",
			"FASO",
			"BFA",
			"BF"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "BURKINA FASO" );
		}

	} );

	it( "BURMA", function () {
		var names = [
			"BURMA",
			//	No ISO codes for Burma?
			// "",
			// ""
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "BURMA" );
		}

	} );

	it( "BURUNDI", function () {
		var names = [
			"BURUNDI",
			"BDI",
			"BI"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "BURUNDI" );
		}

	} );

	it( "CAMBODIA", function () {
		var names = [
			"CAMBODIA",
			"KHM",
			"KH"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "CAMBODIA" );
		}

	} );

	it( "CAMEROON", function () {
		var names = [
			"CAMEROON",
			"CMR",
			"CM"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "CAMEROON" );
		}

	} );

	it( "CANADA", function () {
		var names = [
			"CANADA",
			"CAN",
			"CA"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "CANADA" );
		}

	} );

	it( "CAPE VERDE", function () {
		var names = [
			"CAPE VERDE",
			"CAPEVERDE",
			"CPV",
			"CV"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "CAPE VERDE" );
		}

	} );

	it( "CAYMAN ISLANDS", function () {
		var names = [
			"CAYMAN ISLANDS",
			"CAYMANISLANDS",
			"CAYMAN",
			"CAYMAN ISLES",
			"CAYMAN ISLE",
			"CEYMAN ISLANDS",
			"CEYMANISLANDS",
			"CEYMAN",
			"CEYMAN ISLES",
			"CEYMAN ISLE",
			"CYM",
			"KY"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "CAYMAN ISLANDS" );
		}

	} );

	it( "CENTRAL AFRICAN REPUBLIC", function () {
		var names = [
			"CENTRAL AFRICAN REPUBLIC",
			"CENTRAL AFRICAN",
			"AFRICAN REPUBLIC",
			"CAF",
			"CF"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "CENTRAL AFRICAN REPUBLIC" );
		}

	} );

	it( "CHAD", function () {
		var names = [
			"CHAD",
			"TCD",
			"TD"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "CHAD" );
		}

	} );

	it( "CHILE", function () {
		var names = [
			"CHILE",
			"CHL",
			"CL"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "CHILE" );
		}

	} );

	it( "CHINA", function () {
		var names = [
			"CHINA",
			"CHN",
			"CN"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "CHINA" );
		}

	} );

	it( "CHRISTMAS ISLAND", function () {
		var names = [
			"CHRISTMAS ISLAND",
			"CHRISMAS ISLAND",
			"CHRISTMASISLAND",
			"CHRISTMAS ISLES",
			"CHRISTMAS ISLE",
			"CHRISTMAS",
			"CXR",
			"CX"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "CHRISTMAS ISLAND" );
		}

	} );

	it( "COCOS ISLANDS", function () {
		var names = [
			"COCOS (KEELING) ISLANDS",
			"COCOS KEELING ISLANDS",
			"COCOS ISLANDS",
			"COCOS ISLES",
			"COCOS ISLE",
			"KEELING ISLANDS",
			"KEELING ISLES",
			"KEELING ISLE",
			"COCOS",
			"KEELING",
			"CCK",
			"CC"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "COCOS ISLANDS" );
		}

	} );

	it( "COLOMBIA", function () {
		var names = [
			"COLOMBIA",
			"COL",
			"CO"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "COLOMBIA" );
		}

	} );

	it( "COMOROS", function () {
		var names = [
			"COMOROS",
			"COM",
			"KM"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "COMOROS" );
		}

	} );

	it( "CONGO", function () {
		var names = [
			"CONGO",
			"COG",
			"CG"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "CONGO" );
		}

	} );

	it( "DEMOCRATIC REPUBLIC OF THE CONGO", function () {
		var names = [
			"CONGO, DEMOCRATIC REPUBLIC OF THE",
			"DEMOCRATIC REPUBLIC OF THE CONGO",
			"DEMO REPUBLIC OF THE CONGO",
			"DEMO. REPUBLIC OF THE CONGO",
			"DEMOCRATIC REP OF THE CONGO",
			"DEMOCRATIC REP. OF THE CONGO",
			"DEMO REP OF THE CONGO",
			"DEMO. REP OF THE CONGO",
			"DEMO REP. OF THE CONGO",
			"DEMO. REP. OF THE CONGO",
			"CONGO, DEMOCRATIC REPUBLIC OF",
			"DEMOCRATIC REPUBLIC OF CONGO",
			"DEMO REPUBLIC OF CONGO",
			"DEMO. REPUBLIC OF CONGO",
			"DEMOCRATIC REP OF CONGO",
			"DEMOCRATIC REP. OF CONGO",
			"DEMO REP OF CONGO",
			"DEMO. REP OF CONGO",
			"DEMO REP. OF CONGO",
			"DEMO. REP. OF CONGO",
			"CONGO, DEMOCRATIC REPUBLIC OF THE",
			"REPUBLIC OF THE CONGO",
			"REP OF THE CONGO",
			"REP. OF THE CONGO",
			"CONGO, REPUBLIC OF",
			"REPUBLIC OF CONGO",
			"REPUBLIC OF CONGO",
			"REPUBLIC OF CONGO",
			"REP OF CONGO",
			"REP. OF CONGO",
			"COD",
			"CD"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "DEMOCRATIC REPUBLIC OF THE CONGO" );
		}

	} );

	it( "COOK ISLANDS", function () {
		var names = [
			"COOK ISLANDS",
			"COOKISLANDS",
			"COOK ISLES",
			"COOK ISLE",
			"COOK",
			"COK",
			"CK"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "COOK ISLANDS" );
		}

	} );

	it( "COSTA RICA", function () {
		var names = [
			"COSTA RICA",
			"COSTARICA",
			"CRI",
			"CR"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "COSTA RICA" );
		}

	} );

	it( "COTE D'IVOIRE", function () {
		var names = [
			"CÔTE D'IVOIRE",
			"COTE D'IVOIRE",
			"COTE DIVOIRE",
			"COTE IVOIRE",
			"COTEDIVOIRE",
			"COTEIVOIRE",
			"IVORY COAST",
			"REPUBLIC OF CÔTE D'IVOIRE",
			"REP OF CÔTE D'IVOIRE",
			"REP. OF CÔTE D'IVOIRE",
			"REPUBLIC CÔTE D'IVOIRE",
			"REP CÔTE D'IVOIRE",
			"REP. CÔTE D'IVOIRE",
			"REPUBLIC OF COTE D'IVOIRE",
			"REP OF COTE D'IVOIRE",
			"REP. OF COTE D'IVOIRE",
			"REPUBLIC COTE D'IVOIRE",
			"REP COTE D'IVOIRE",
			"REP. COTE D'IVOIRE",
			"CIV",
			"CI"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "COTE D'IVOIRE" );
		}

	} );

	it( "CROATIA", function () {
		var names = [
			"CROATIA",
			"HRV",
			"HR"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "CROATIA" );
		}

	} );

	it( "CUBA", function () {
		var names = [
			"CUBA",
			"CUB",
			"CU"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "CUBA" );
		}

	} );

	it( "CURACAO", function () {
		var names = [
			"CURACAO",
			"CURAÇAO",
			"CUW",
			"CW"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "CURACAO" );
		}

	} );

	it( "CYPRUS", function () {
		var names = [
			"CYPRUS",
			"CIPRUS",
			"CYPRYS",
			"CYP",
			"CY"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "CYPRUS" );
		}

	} );

	it( "CZECH REPUBLIC", function () {
		var names = [
			"CZECH REPUBLIC",
			"CZECHOSLOVAKIA",
			"CZECHOSLOVAKIA REPUBLIC",
			"CZE",
			"CZ"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "CZECH REPUBLIC" );
		}

	} );

	it( "DENMARK", function () {
		var names = [
			"DENMARK",
			"DNK",
			"DK"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "DENMARK" );
		}

	} );

	it( "DJIBOUTI", function () {
		var names = [
			"DJIBOUTI",
			"DJI",
			"DJ"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "DJIBOUTI" );
		}

	} );

	it( "DOMINICA", function () {
		var names = [
			"DOMINICA",
			"DMA",
			"DM"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "DOMINICA" );
		}

	} );

	it( "DOMINICAN REPUBLIC", function () {
		var names = [
			"DOMINICAN REPUBLIC",
			"DOMINICANREPUBLIC",
			"DOM REPUBLIC",
			"DOM. REPUBLIC",
			"DOMINICAN REP",
			"DOMINICAN REP.",
			"DOM REP",
			"DOM. REP",
			"DOM REP.",
			"DOM. REP.",
			"DOM",
			"DOECU"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "DOMINICAN REPUBLIC" );
		}

	} );

	it( "EAST TIMOR", function () {
		var names = [
			"EAST TIMOR",
			"EASTTIMOR",
			"E TIMOR",
			"E. TIMOR"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "EAST TIMOR" );
		}

	} );

	it( "ECUADOR", function () {
		var names = [
			"ECUADOR",
			"ECU",
			"EC"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "ECUADOR" );
		}

	} );

	it( "EGYPT", function () {
		var names = [
			"EGYPT",
			"EGY",
			"EG"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "EGYPT" );
		}

	} );

	it( "EL SALVADOR", function () {
		var names = [
			"EL SALVADOR",
			"SALVADOR",
			"SLV",
			"SV"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "EL SALVADOR" );
		}

	} );

	it( "EQUATORIAL GUINEA", function () {
		var names = [
			"EQUATORIAL GUINEA",
			"EQUATORIALGUINEA",
			"EQU GUINEA",
			"EQU. GUINEA",
			"GNQ",
			"GQ"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "EQUATORIAL GUINEA" );
		}

	} );

	it( "ERITREA", function () {
		var names = [
			"ERITREA",
			"ERI",
			"ER"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "ERITREA" );
		}

	} );

	it( "ESTONIA", function () {
		var names = [
			"ESTONIA",
			"EST",
			"EE"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "ESTONIA" );
		}

	} );

	it( "ETHIOPIA", function () {
		var names = [
			"ETHIOPIA",
			"ETH",
			"ET"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "ETHIOPIA" );
		}

	} );

	it( "FALKLAND ISLANDS", function () {
		var names = [
			"FALKLAND ISLANDS (MALVINAS)",
			"FALKLAND ISLANDS",
			"FALKLAND ISLES",
			"FALKLAND ISLE",
			"FALKLAND",
			"MALVINAS",
			"FLK",
			"FK"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "FALKLAND ISLANDS" );
		}

	} );

	it( "FAROE ISLANDS", function () {
		var names = [
			"FAROE ISLANDS",
			"FAROE ISLES",
			"FAROE ISLE",
			"FAROE",
			"FRO",
			"FO"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "FAROE ISLANDS" );
		}

	} );

	it( "FIJI", function () {
		var names = [
			"FIJI",
			"FIJI ISLANDS",
			"FIJI ISLES",
			"FIJI ISLE",
			"FJI",
			"FJ"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "FIJI" );
		}

	} );

	it( "FINLAND", function () {
		var names = [
			"FINLAND",
			"FIN",
			"FI"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "FINLAND" );
		}

	} );

	it( "FRANCE", function () {
		var names = [
			"FRANCE",
			"FRA",
			"FR"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "FRANCE" );
		}

	} );

	it( "FRENCH GUIANA", function () {
		var names = [
			"FRENCH GUIANA",
			"FRENCHGUIANA",
			"GUIANA",
			"GUF",
			"GF"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "FRENCH GUIANA" );
		}

	} );

	it( "FRENCH POLYNESIA", function () {
		var names = [
			"FRENCH POLYNESIA",
			"FRENCHPOLYNESIA",
			"POLYNESIA",
			"PYF",
			"PF"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "FRENCH POLYNESIA" );
		}

	} );

	it( "FRENCH SOUTHERN TERRITORIES", function () {
		var names = [
			"FRENCH SOUTHERN TERRITORIES",
			"FRENCHSOUTHERNTERRITORIES",
			"FRENCH TERRITORIES",
			"SOUTHERN TERRITORIES",
			"FRENCH SOUTHERN TERR",
			"FRENCHSOUTHERNTERR",
			"FRENCH TERR",
			"FRENCH SOUTHERN TERR.",
			"FRENCHSOUTHERNTERR",
			"FRENCH TERR.",
			"ATF",
			"TF"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "FRENCH SOUTHERN TERRITORIES" );
		}

	} );

	it( "GABON", function () {
		var names = [
			"GABON",
			"GAB",
			"GA"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "GABON" );
		}

	} );

	it( "GAMBIA", function () {
		var names = [
			"GAMBIA, THE",
			"THE GAMBIA",
			"GAMBIA",
			"GMB",
			"GM"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "GAMBIA" );
		}

	} );

	it( "GEORGIA", function () {
		var names = [
			"GEORGIA",
			"GEO",
			"GE"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "GEORGIA" );
		}

	} );

	it( "GERMANY", function () {
		var names = [
			"GERMANY",
			"DEU",
			"DE"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "GERMANY" );
		}

	} );

	it( "GHANA", function () {
		var names = [
			"GHANA",
			"GHA",
			"GH"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "GHANA" );
		}

	} );

	it( "GIBRALTAR", function () {
		var names = [
			"GIBRALTAR",
			"GIB",
			"GI"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "GIBRALTAR" );
		}

	} );

	it( "GREECE", function () {
		var names = [
			"GREECE",
			"GRC",
			"GR"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "GREECE" );
		}

	} );

	it( "GREENLAND", function () {
		var names = [
			"GREENLAND",
			"GRL",
			"GL"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "GREENLAND" );
		}

	} );

	it( "GRENADA", function () {
		var names = [
			"GRENADA",
			"GRD",
			"GD"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "GRENADA" );
		}

	} );

	it( "GUADELOUPE", function () {
		var names = [
			"GUADELOUPE",
			"GLP",
			"GP"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "GUADELOUPE" );
		}

	} );

	it( "GUAM", function () {
		var names = [
			"GUAM",
			"GUM",
			"GU"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "GUAM" );
		}

	} );

	it( "GUATEMALA", function () {
		var names = [
			"GUATEMALA",
			"GTM",
			"GT"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "GUATEMALA" );
		}

	} );

	it( "GUERNSEY", function () {
		var names = [
			"GUERNSEY",
			"GGY",
			"GG"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "GUERNSEY" );
		}

	} );

	it( "GUINEA", function () {
		var names = [
			"GUINEA",
			"GIN",
			"GN"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "GUINEA" );
		}

	} );

	it( "GUINEA-BISSAU", function () {
		var names = [
			"GUINEA-BISSAU",
			"GUINEA BISSAU",
			"GUINEABISSAU",
			"BISSAU",
			"GNB",
			"GW"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "GUINEA-BISSAU" );
		}

	} );

	it( "GUYANA", function () {
		var names = [
			"GUYANA",
			"GUY",
			"GY"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "GUYANA" );
		}

	} );

	it( "HAITI", function () {
		var names = [
			"HAITI",
			"HAITI ISLANDS",
			"HAITI ISLAND",
			"HAITI ISLE",
			"HAITI ISLES",
			"HIATI",
			"HTI",
			"HT"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "HAITI" );
		}

	} );

	it( "HEARD ISLAND AND MCDONALD MCDONALD ISLANDS", function () {
		var names = [
			"HEARD ISLAND AND MCDONALD MCDONALD ISLANDS",
			"HEARD ISLE AND MCDONALD MCDONALD ISLANDS",
			"HEARD ISLES AND MCDONALD MCDONALD ISLANDS",
			"HEARD ISLAND AND MCDONALD MCDONALD ISLES",
			"HEARD ISLAND AND MCDONALD MCDONALD ISLE",
			"HEARD ISLAND & MCDONALD MCDONALD ISLANDS",
			"HEARD ISLE & MCDONALD MCDONALD ISLANDS",
			"HEARD ISLES & MCDONALD MCDONALD ISLANDS",
			"HEARD ISLAND & MCDONALD MCDONALD ISLES",
			"HEARD ISLAND & MCDONALD MCDONALD ISLE",
			"HEARD ISLAND AND MCDONALD ISLANDS",
			"HEARD ISLE AND MCDONALD ISLANDS",
			"HEARD ISLES AND MCDONALD ISLANDS",
			"HEARD ISLAND AND MCDONALD ISLES",
			"HEARD ISLAND AND MCDONALD ISLE",
			"HEARD ISLAND & MCDONALD ISLANDS",
			"HEARD ISLE & MCDONALD ISLANDS",
			"HEARD ISLES & MCDONALD ISLANDS",
			"HEARD ISLAND & MCDONALD ISLES",
			"HEARD ISLAND & MCDONALD ISLE",
			"HEARD ISLAND",
			"HEARD ILSE",
			"HEARD ISLES",
			"MCDONALD MCDONALD ISLANDS",
			"MCDONALD MCDONALD ISLE",
			"MCDONALD MCDONALD ISLES",
			"MCDONALD ISLANDS",
			"MCDONALD ISLE",
			"MCDONALD ISLES",
			"HMD",
			"HM"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "HEARD ISLAND AND MCDONALD MCDONALD ISLANDS" );
		}

	} );

	it( "HOLY SEE", function () {
		var names = [
			"HOLY SEE (VATICAN CITY STATE)",
			"HOLY SEE VATICAN CITY STATE",
			"VATICAN CITY STATE",
			"HOLY SEE VATICAN CITY",
			"HOLY SEE",
			"VATICAN CITY",
			"VAT",
			"VA"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "HOLY SEE" );
		}

	} );

	it( "HONDURAS", function () {
		var names = [
			"HONDURAS",
			"HND",
			"HN"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "HONDURAS" );
		}

	} );

	it( "HONG KONG", function () {
		var names = [
			"HONG KONG",
			"HONGKONG",
			"HKG",
			"HK"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "HONG KONG" );
		}

	} );

	it( "HUNGARY", function () {
		var names = [
			"HUNGARY",
			"HUN",
			"HU"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "HUNGARY" );
		}

	} );

	it( "ICELAND", function () {
		var names = [
			"ICELAND",
			"ISL",
			"IS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "ICELAND" );
		}

	} );

	it( "INDIA", function () {
		var names = [
			"INDIA",
			"IND",
			"IN"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "INDIA" );
		}

	} );

	it( "INDONESIA", function () {
		var names = [
			"INDONESIA",
			"IDN",
			"ID"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "INDONESIA" );
		}

	} );

	it( "IRAN", function () {
		var names = [
			"IRAN",
			"IRAN, ISLAMIC REPUBLIC OF",
			"ISLAMIC REPUBLIC OF IRAN",
			"ISLAMIC REPUBLIC IRAN",
			"ISLAMIC OF IRAN",
			"REPUBLIC OF IRAN",
			"ISLAMIC IRAN",
			"REPUBLIC IRQIRAN",
			"IRN",
			"IR"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "IRAN" );
		}

	} );

	it( "IRAQ", function () {
		var names = [
			"IRAQ",
			"IRQ",
			"IQ"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "IRAQ" );
		}

	} );

	it( "ISLE OF MAN", function () {
		var names = [
			"ISLE OF MAN",
			"ISLE MAN",
			"ISLES OF MAN",
			"ISLES MAN",
			"ISLAND OF MAN",
			"ISLAND MAN",
			"MAN ISLE",
			"MAN ISLAND",
			"MAN ISLES",
			"IMN",
			"IM"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "ISLE OF MAN" );
		}

	} );

	it( "IRELAND", function () {
		var names = [
			"IRELAND",
			"IRL",
			"IE"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "IRELAND" );
		}

	} );

	it( "ISRAEL", function () {
		var names = [
			"ISRAEL",
			"ISR",
			"IL"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "ISRAEL" );
		}

	} );

	it( "ITALY", function () {
		var names = [
			"ITALY",
			"ITA",
			"IT"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "ITALY" );
		}

	} );

	it( "JAMAICA", function () {
		var names = [
			"JAMAICA",
			"JAM",
			"JM"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "JAMAICA" );
		}

	} );

	it( "JAPAN", function () {
		var names = [
			"JAPAN",
			"JPN",
			"JP"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "JAPAN" );
		}

	} );

	it( "JERSEY", function () {
		var names = [
			"JERSEY",
			"JEY",
			"JE"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "JERSEY" );
		}

	} );

	it( "JORDAN", function () {
		var names = [
			"JORDAN",
			"JOR",
			"JO"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "JORDAN" );
		}

	} );

	it( "KAZAKHSTAN", function () {
		var names = [
			"KAZAKHSTAN",
			"KAZ",
			"KZ"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "KAZAKHSTAN" );
		}

	} );

	it( "KENYA", function () {
		var names = [
			"KENYA",
			"KEN",
			"KE"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "KENYA" );
		}

	} );

	it( "KIRIBATI", function () {
		var names = [
			"KIRIBATI",
			"KIR",
			"KI"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "KIRIBATI" );
		}

	} );

	it( "NORTH KOREA", function () {
		var names = [
			"KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF",
			"DEMOCRATIC PEOPLE'S REPUBLIC OF KOREA",
			"DEMOCRATIC PEOPLES REPUBLIC OF KOREA",
			"DEMOCRATIC PEOPLE REPUBLIC OF KOREA",
			"KOREA, DEM. PEOPLE'S REPUBLIC OF",
			"DEM. PEOPLE'S REPUBLIC OF KOREA",
			"DEM. PEOPLES REPUBLIC OF KOREA",
			"DEM. PEOPLE REPUBLIC OF KOREA",
			"KOREA, DEMOCRATIC PEOPLE'S REP. OF",
			"DEMOCRATIC PEOPLE'S REP. OF KOREA",
			"DEMOCRATIC PEOPLES REP. OF KOREA",
			"DEMOCRATIC PEOPLE REP. OF KOREA",
			"KOREA, DEM. PEOPLE'S REP. OF",
			"DEM. PEOPLE'S REP. OF KOREA",
			"DEM. PEOPLES REP. OF KOREA",
			"DEM. PEOPLE REP. OF KOREA",
			"KOREA, NORTH",
			"KOREA, N",
			"KOREA, N.",
			"NORTH KOREA",
			"NORTHKOREA",
			"N KOREA",
			"N. KOREA",
			"PRK",
			"KP"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "NORTH KOREA" );
		}

	} );

	it( "SOUTH KOREA", function () {
		var names = [
			"KOREA, REPUBLIC OF",
			"REPUBLIC OF KOREA",
			"REP OF KOREA",
			"REP. OF KOREA",
			"KOREA",
			"SOUTH KOREA",
			"KOREA, SOUTH",
			"S KOREA",
			"S. KOREA",
			"KOR",
			"KR"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SOUTH KOREA" );
		}

	} );

	it( "KOSOVO", function () {
		var names = [
			"KOSOVO",
			"KOS",
			"KO"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "KOSOVO" );
		}

	} );

	it( "KUWAIT", function () {
		var names = [
			"KUWAIT",
			"KWT",
			"KW"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "KUWAIT" );
		}

	} );

	it( "KYRGYZSTAN", function () {
		var names = [
			"KYRGYZSTAN",
			"KGZ",
			"KG"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "KYRGYZSTAN" );
		}

	} );

	it( "LAOS", function () {
		var names = [
			"LAO PEOPLE'S DEMOCRATIC REPUBLIC",
			"LAO PEOPLES DEMOCRATIC REPUBLIC",
			"LAO PEOPLE'S DEM. REPUBLIC",
			"LAO PEOPLES DEM. REPUBLIC",
			"LAO PEOPLE'S DEM REPUBLIC",
			"LAO PEOPLES DEM REPUBLIC",
			"LAO PEOPLE'S DEMOCRATIC REP.",
			"LAO PEOPLES DEMOCRATIC REP.",
			"LAO PEOPLE'S DEMOCRATIC REP",
			"LAO PEOPLES DEMOCRATIC REP",
			"LAO PEOPLE'S DEM REP",
			"LAO PEOPLES DEM REP",
			"LAO PEOPLE'S DEM REP",
			"LAO PEOPLES DEM. REP",
			"LAO PEOPLE'S DEM REP.",
			"LAO PEOPLES DEM. REP.",
			"LAO PEOPLE'S REPUBLIC",
			"LAO PEOPLE'S REP.",
			"LAO PEOPLE'S REP",
			"LAO PEOPLES REPUBLIC",
			"LAO PEOPLES REP.",
			"LAO PEOPLES REP",
			"LAO PEOPLE REPUBLIC",
			"LAO PEOPLE REP.",
			"LAO PEOPLE REP",
			"LAOS PEOPLE",
			"LAOS",
			"LAO",
			"LA"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "LAOS" );
		}

	} );

	it( "LATVIA", function () {
		var names = [
			"LATVIA",
			"LVA",
			"LV"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "LATVIA" );
		}

	} );

	it( "LEBANON", function () {
		var names = [
			"LEBANON",
			"LBN",
			"LB"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "LEBANON" );
		}

	} );

	it( "LESOTHO", function () {
		var names = [
			"LESOTHO",
			"LSO",
			"LS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "LESOTHO" );
		}

	} );

	it( "LIBERIA", function () {
		var names = [
			"LIBERIA",
			"LBR",
			"LR"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "LIBERIA" );
		}

	} );

	it( "LIBYA", function () {
		var names = [
			"LIBYA",
			"LBY",
			"LY"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "LIBYA" );
		}

	} );

	it( "LIECHTENSTEIN", function () {
		var names = [
			"LIECHTENSTEIN",
			"LIE",
			"LI"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "LIECHTENSTEIN" );
		}

	} );

	it( "LITHUANIA", function () {
		var names = [
			"LITHUANIA",
			"LTU",
			"LT"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "LITHUANIA" );
		}

	} );

	it( "LUXEMBOURG", function () {
		var names = [
			"LUXEMBOURG",
			"LUXEMBURG",
			"LUXEMBORG",
			"LUXENBOURG",
			"LUXENBURG",
			"LUXENBORG",
			"LUX",
			"LU"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "LUXEMBOURG" );
		}

	} );

	it( "MACAU", function () {
		var names = [
			"MACAU",
			"MAC",
			"MO"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "MACAU" );
		}

	} );

	it( "MACEDONIA", function () {
		var names = [
			"MACEDONIA",
			"MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF",
			"THE FORMER YUGOSLAV REPUBLIC OF MACEDONIA",
			"FORMER YUGOSLAV REPUBLIC OF MACEDONIA",
			"YUGOSLAV REPUBLIC OF MACEDONIA",
			"REPUBLIC OF MACEDONIA",
			"YUGOSLAV",
			"MKD",
			"MK"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "MACEDONIA" );
		}

	} );

	it( "MADAGASCAR", function () {
		var names = [
			"MADAGASCAR",
			"MDG",
			"MG"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "MADAGASCAR" );
		}

	} );

	it( "MALAWI", function () {
		var names = [
			"MALAWI",
			"MWI",
			"MW"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "MALAWI" );
		}

	} );

	it( "MALAYSIA", function () {
		var names = [
			"MALAYSIA",
			"MYS",
			"MY"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "MALAYSIA" );
		}

	} );

	it( "MALDIVES", function () {
		var names = [
			"MALDIVES",
			"MDV",
			"MV"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "MALDIVES" );
		}

	} );

	it( "MALI", function () {
		var names = [
			"MALI",
			"MLI",
			"ML"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "MALI" );
		}

	} );

	it( "MALTA", function () {
		var names = [
			"MALTA",
			"MLT",
			"MT"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "MALTA" );
		}

	} );

	it( "MARSHALL ISLANDS", function () {
		var names = [
			"MARSHALL ISLANDS",
			"MARSHALLISLANDS",
			"MARSHALL ISLES",
			"MARSHALL ISLE",
			"MHL",
			"MH"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "MARSHALL ISLANDS" );
		}

	} );

	it( "MARTINIQUE", function () {
		var names = [
			"MARTINIQUE",
			"MTQ",
			"MQ"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "MARTINIQUE" );
		}

	} );

	it( "MAURITANIA", function () {
		var names = [
			"MAURITANIA",
			"MRT",
			"MR"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "MAURITANIA" );
		}

	} );

	it( "MAURITIUS", function () {
		var names = [
			"MAURITIUS",
			"MUS",
			"MU"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "MAURITIUS" );
		}

	} );

	it( "MAYOTTE", function () {
		var names = [
			"MAYOTTE",
			"MYT",
			"YT"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "MAYOTTE" );
		}

	} );

	it( "MEXICO", function () {
		var names = [
			"MEXICO",
			"MEX",
			"MX"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "MEXICO" );
		}

	} );

	it( "MICRONESIA", function () {
		var names = [
			"MICRONESIA, FEDERATED STATES OF",
			"FEDERATED STATES OF MICRONESIA",
			"FED STATES OF MICRONESIA",
			"FED. STATES OF MICRONESIA",
			"MICRONESIA",
			"FSM",
			"FM"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "MICRONESIA" );
		}

	} );

	it( "MOLDOVA", function () {
		var names = [
			"MOLDOVA",
			"MDA",
			"MD"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "MOLDOVA" );
		}

	} );

	it( "MONACO", function () {
		var names = [
			"MONACO",
			"MCO",
			"MC"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "MONACO" );
		}

	} );

	it( "MONGOLIA", function () {
		var names = [
			"MONGOLIA",
			"MNG",
			"MN"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "MONGOLIA" );
		}

	} );

	it( "MONTENEGRO", function () {
		var names = [
			"MONTENEGRO",
			"MNE",
			"ME"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "MONTENEGRO" );
		}

	} );

	it( "MOROCCO", function () {
		var names = [
			"MOROCCO",
			"MOROCO",
			"MORROCO",
			"MORROCCO",
			"MAR",
			"MA"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "MOROCCO" );
		}

	} );

	it( "MYANMAR", function () {
		var names = [
			"MYANMAR",
			"MMR",
			"MM"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "MYANMAR" );
		}

	} );

	it( "MOZAMBIQUE", function () {
		var names = [
			"MOZAMBIQUE",
			"MOZ",
			"MZ"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "MOZAMBIQUE" );
		}

	} );

	it( "NAMIBIA", function () {
		var names = [
			"NAMIBIA",
			"NAM",
			"NA"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "NAMIBIA" );
		}

	} );

	it( "NAURU", function () {
		var names = [
			"NAURU",
			"NARU",
			"NRU",
			"NR"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "NAURU" );
		}

	} );

	it( "NEPAL", function () {
		var names = [
			"NEPAL",
			"NAPAL",
			"NPL",
			"NP"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "NEPAL" );
		}

	} );

	it( "NETHERLANDS", function () {
		var names = [
			"NETHERLANDS",
			"NLD",
			"NL"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "NETHERLANDS" );
		}

	} );

	it( "NETHERLANDS ANTILLES", function () {
		var names = [
			"NETHERLANDS ANTILLES",
			"NETHERLANDSANTILLES",
			"DUTCH ANTILLES",
			"DUTCHANTILLES"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "NETHERLANDS ANTILLES" );
		}

	} );

	it( "NEW CALEDONIA", function () {
		var names = [
			"NEW CALEDONIA",
			"NEWCALEDONIA",
			"CALEDONIA",
			"NCL",
			"NC"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "NEW CALEDONIA" );
		}

	} );

	it( "NEW ZEALAND", function () {
		var names = [
			"NEW ZEALAND",
			"NEWZEALAND",
			"NZL",
			"NZ"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "NEW ZEALAND" );
		}

	} );

	it( "NICARAGUA", function () {
		var names = [
			"NICARAGUA",
			"NIC",
			"NI"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "NICARAGUA" );
		}

	} );

	it( "NIGER", function () {
		var names = [
			"NIGER",
			"NER",
			"NE"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "NIGER" );
		}

	} );

	it( "NIGERIA", function () {
		var names = [
			"NIGERIA",
			"NGA",
			"NG"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "NIGERIA" );
		}

	} );

	it( "NIUE", function () {
		var names = [
			"NIUE",
			"NUE",
			"NIU",
			"NU"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "NIUE" );
		}

	} );

	it( "NORFOLK ISLAND", function () {
		var names = [
			"NORFOLK ISLAND",
			"NORFOLKISLAND",
			"NORFOLK ISLANDs",
			"NORFOLK ISLE",
			"NORFOLK ISLES",
			"NFK",
			"NF"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "NORFOLK ISLAND" );
		}

	} );

	it( "NORTHERN MARIANA ISLANDS", function () {
		var names = [
			"NORTHERN MARIANA ISLANDS",
			"NORTHERNMARIANAISLANDS",
			"N MARIANA ISLANDS",
			"N. MARIANA ISLANDS",
			"NORTHERN MARIANA ISLES",
			"NORTHERNMARIANAISLES",
			"N MARIANA ISLES",
			"N. MARIANA ISLES",
			"NORTHERN MARIANA ISLE",
			"NORTHERNMARIANAISLE",
			"N MARIANA ISLE",
			"N. MARIANA ISLE",
			"NORTH MARIANA ISLANDS",
			"NORTHMARIANAISLANDS",
			"NORTH MARIANA ISLES",
			"NORTHMARIANAISLES",
			"NORTH MARIANA ISLE",
			"NORTHMARIANAISLE",
			"MNP",
			"MP"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "NORTHERN MARIANA ISLANDS" );
		}

	} );

	it( "NORWAY", function () {
		var names = [
			"NORWAY",
			"NOR",
			"NO"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "NORWAY" );
		}

	} );

	it( "OMAN", function () {
		var names = [
			"OMAN",
			"OMN",
			"OM"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "OMAN" );
		}

	} );

	it( "PAKISTAN", function () {
		var names = [
			"PAKISTAN",
			"PAKASTAN",
			"PAK",
			"PK"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "PAKISTAN" );
		}

	} );

	it( "PALAU", function () {
		var names = [
			"PALAU",
			"PLW",
			"PW"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "PALAU" );
		}

	} );

	it( "PALESTINIAN TERRITORIES", function () {
		var names = [
			"PALESTINE, STATE OF",
			"STATE OF PALESTINE",
			"STATEOFPALESTINE",
			"STATE PALESTINE",
			"PALESTINE STATE",
			"PALESTINESTATE",
			"PALESTINIAN TERRITORIES",
			"PALESTINIANTERRITORIES",
			"PALESTINIAN",
			"PALESTINE",
			"PALASTINE, STATE OF",
			"STATE OF PALASTINE",
			"STATEOFPALASTINE",
			"STATE PALASTINE",
			"PALASTINE STATE",
			"PALASTINESTATE",
			"PALASTINIAN TERRITORIES",
			"PALASTINIANTERRITORIES",
			"PALASTINIAN",
			"PALASTINE",
			"PSE",
			"PS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "PALESTINIAN TERRITORIES" );
		}

	} );

	it( "PANAMA", function () {
		var names = [
			"PANAMA",
			"PAN",
			"PA"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "PANAMA" );
		}

	} );

	it( "PAPUA NEW GUINEA", function () {
		var names = [
			"PAPUA NEW GUINEA",
			"PAPUA NEWGUINEA",
			"PAPUANEWGUINEA",
			"NEW GUINEA",
			"PAPUA",
			"PNG",
			"PG"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "PAPUA NEW GUINEA" );
		}

	} );

	it( "PARAGUAY", function () {
		var names = [
			"PARAGUAY",
			"PRY",
			"PY"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "PARAGUAY" );
		}

	} );

	it( "PERU", function () {
		var names = [
			"PERU",
			"PER",
			"PE"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "PERU" );
		}

	} );

	it( "PHILIPPINES", function () {
		var names = [
			"PHILIPPINES",
			"PHILAPPINES",
			"PHILIPINES",
			"PHILAPINES",
			"FILIPPINES",
			"FILAPPINES",
			"FILIPINES",
			"FILAPINES",
			"PHL",
			"PH"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "PHILIPPINES" );
		}

	} );

	it( "POLAND", function () {
		var names = [
			"POLAND",
			"POL",
			"PL"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "POLAND" );
		}

	} );

	it( "PORTUGAL", function () {
		var names = [
			"PORTUGAL",
			"PRT",
			"PT"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "PORTUGAL" );
		}

	} );

	it( "PUERTO RICO", function () {
		var names = [
			"PUERTO RICO",
			"PUERTORICO",
			"PEURTO RICO",
			"PRI",
			"PR"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "PUERTO RICO" );
		}

	} );

	it( "QATAR", function () {
		var names = [
			"QATAR",
			"QAT",
			"QA"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "QATAR" );
		}

	} );

	it( "ROMANIA", function () {
		var names = [
			"ROMANIA",
			"ROMANA",
			"ROU",
			"RO"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "ROMANIA" );
		}

	} );

	it( "RUSSIA", function () {
		var names = [
			"RUSSIA",
			"RUSSIAN FEDERATION",
			"RUSSIANFEDERATION",
			"RUSSIAN FEDARATION",
			"RUSSIANFEDARATION",
			"USSR",
			"U.S.S.R.",
			"U. S. S. R.",
			"RUS",
			"RU"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "RUSSIA" );
		}

	} );

	it( "RWANDA", function () {
		var names = [
			"RWANDA",
			"RWA",
			"RW"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "RWANDA" );
		}

	} );

	it( "REUNION", function () {
		var names = [
			"REUNION",
			"REU"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "REUNION" );
		}

	} );

	it( "SAINT BARTHALEMY", function () {
		var names = [
			"SAINT BARTHALEMY",
			"SAINTBARTHALEMY",
			"ST BARTHALEMY",
			"STBARTHALEMY",
			"ST. BARTHALEMY",
			"ST.BARTHALEMY",
			"SAINT BARTHELEMY",
			"SAINTBARTHELEMY",
			"ST BARTHELEMY",
			"STBARTHELEMY",
			"ST. BARTHELEMY",
			"ST.BARTHELEMY",
			"BLM",
			"BL"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SAINT BARTHALEMY" );
		}

	} );

	it( "SAINT HELENA", function () {
		var names = [
			"SAINT HELENA",
			"SAINTHELENA",
			"ST HELENA",
			"STHELENA",
			"ST. HELENA",
			"ST.HELENA",
			"SAINT HELLENA",
			"SAINTHELLENA",
			"ST HELLENA",
			"STHELLENA",
			"ST. HELLENA",
			"ST.HELLENA",
			"SAINT HELANA",
			"SAINTHELANA",
			"ST HELANA",
			"STHELANA",
			"ST. HELANA",
			"ST.HELANA",
			"SHN",
			"SH"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SAINT HELENA" );
		}

	} );

	it( "SAINT KITTS AND NEVIS", function () {
		var names = [
			"SAINT KITTS AND NEVIS",
			"SAINT KITTS & NEVIS",
			"ST KITTS AND NEVIS",
			"ST KITTS & NEVIS",
			"ST. KITTS AND NEVIS",
			"ST. KITTS & NEVIS",
			"KNA",
			"KN"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SAINT KITTS AND NEVIS" );
		}

	} );

	it( "SAINT LUCIA", function () {
		var names = [
			"SAINT LUCIA",
			"SAINTLUCIA",
			"ST LUCIA",
			"ST. LUCIA",
			"LCA",
			"LC"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SAINT LUCIA" );
		}

	} );

	it( "SAINT PIERRE AND MIQUELON", function () {
		var names = [
			"SAINT PIERRE AND MIQUELON",
			"SAINT PIERRE & MIQUELON",
			"ST PIERRE AND MIQUELON",
			"ST PIERRE & MIQUELON",
			"ST. PIERRE AND MIQUELON",
			"ST. PIERRE & MIQUELON",
			"SPM",
			"PM"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SAINT PIERRE AND MIQUELON" );
		}

	} );

	it( "SAINT VINCENT AND THE GRENADINES", function () {
		var names = [
			"SAINT VINCENT AND THE GRENADINES",
			"SAINT VINCENT & THE GRENADINES",
			"SAINT VINCENT AND GRENADINES",
			"SAINT VINCENT & GRENADINES",
			"SAINTVINCENTANDTHEGRENADINES",
			"SAINTVINCENTTHEGRENADINES",
			"STVINCENTANDTHEGRENADINES",
			"STVINCENTTHEGRENADINES",
			"ST. VINCENT AND THE GRENADINES",
			"ST. VINCENT & THE GRENADINES",
			"ST. VINCENT AND GRENADINES",
			"ST. VINCENT & GRENADINES",
			"ST VINCENT AND THE GRENADINES",
			"ST VINCENT & THE GRENADINES",
			"ST VINCENT AND GRENADINES",
			"ST VINCENT & GRENADINES",
			"VCT",
			"VC"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SAINT VINCENT AND THE GRENADINES" );
		}

	} );

	it( "AMERICAN SAMOA", function () {
		var names = [
			"AMERICAN SAMOA",
			"AMERICANSAMOA",
			"SAMOA, AMERICAN",
			"SAMOA,AMERICAN",
			"ASM",
			"AS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "AMERICAN SAMOA" );
		}

	} );

	it( "SAMOA", function () {
		var names = [
			"SAMOA",
			"WSM",
			"WS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SAMOA" );
		}

	} );

	it( "SAN MARINO", function () {
		var names = [
			"SAN MARINO",
			"SANMARINO",
			"SAINT MARINO",
			"ST MARINO",
			"ST. MARINO",
			"SMR",
			"SM"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SAN MARINO" );
		}

	} );

	it( "SAO TOME AND PRINCIPE", function () {
		var names = [
			"SAO TOME AND PRINCIPE",
			"SAOTOME AND PRINCIPE",
			"SAOTOMEANDPRINCIPE",
			"SAOTOME AND PRINCIPE",
			"SAO TOME & PRINCIPE",
			"SAOTOME & PRINCIPE",
			"SAO TOME AND PRINCIPLE",
			"SAOTOME AND PRINCIPLE",
			"SAOTOMEANDPRINCIPLE",
			"SAOTOME AND PRINCIPLE",
			"SAO TOME & PRINCIPLE",
			"SAOTOME & PRINCIPLE",
			"STP",
			"ST"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SAO TOME AND PRINCIPE" );
		}

	} );

	it( "SAUDI ARABIA", function () {
		var names = [
			"SAUDI ARABIA",
			"SAUDIARABIA",
			"SAU",
			"SA"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SAUDI ARABIA" );
		}

	} );

	it( "SENEGAL", function () {
		var names = [
			"SENEGAL",
			"SENAGAL",
			"SINEGAL",
			"SINAGAL",
			"SYNEGAL",
			"SYNAGAL",
			"SENEGUL",
			"SENAGUL",
			"SINEGUL",
			"SINAGUL",
			"SYNEGUL",
			"SYNAGUL",
			"SEN",
			"SN"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SENEGAL" );
		}

	} );

	it( "SERBIA", function () {
		var names = [
			"SERBIA",
			"SRB",
			"RS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SERBIA" );
		}

	} );

	it( "SEYCHELLES", function () {
		var names = [
			"SEYCHELLES",
			"SEYCHELES",
			"SAYCHELLES",
			"SYC",
			"SC"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SEYCHELLES" );
		}

	} );

	it( "SIERRA LEONE", function () {
		var names = [
			"SIERRA LEONE",
			"SIERRALEONE",
			"SLE",
			"SL"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SIERRA LEONE" );
		}

	} );

	it( "SINGAPORE", function () {
		var names = [
			"SINGAPORE",
			"SGP",
			"SG"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SINGAPORE" );
		}

	} );

	it( "SINT MAARTEN", function () {
		var names = [
			"SAINT MARTIN (FRENCH PART)",
			"SAINT MARTIN (FRENCH)",
			"SAINT MARTIN FRENCH",
			"SAINT MARTIN - FRENCH PART",
			"SAINT MARTIN - FRENCH",
			"ST. MARTIN (FRENCH PART)",
			"ST. MARTIN (FRENCH)",
			"ST. MARTIN FRENCH",
			"ST. MARTIN - FRENCH PART",
			"ST. MARTIN - FRENCH",
			"ST MARTIN (FRENCH PART)",
			"ST MARTIN (FRENCH)",
			"ST MARTIN FRENCH",
			"ST MARTIN - FRENCH PART",
			"ST MARTIN - FRENCH",
			"SAINT MARTIN",
			"SAINTMARTIN",
			"ST MARTIN",
			"ST. MARTIN",
			"MAF",
			"MF"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SINT MAARTEN" );
		}

	} );

	it( "SINT MAARTEN", function () {
		var names = [
			"SINT MAARTEN (DUTCH PART)",
			"SINT MAARTEN (DUTCH)",
			"SINT MAARTEN DUTCH",
			"SINT MAARTEN - DUTCH PART",
			"SINT MAARTEN - DUTCH",
			"ST. MAARTEN (DUTCH PART)",
			"ST. MAARTEN (DUTCH)",
			"ST. MAARTEN DUTCH",
			"ST. MAARTEN - DUTCH PART",
			"ST. MAARTEN - DUTCH",
			"ST MAARTEN (DUTCH PART)",
			"ST MAARTEN (DUTCH)",
			"ST MAARTEN DUTCH",
			"ST MAARTEN - DUTCH PART",
			"ST MAARTEN - DUTCH",
			"SINT MAARTEN",
			"SINTMAARTEN",
			"SAINT MAARTEN",
			"SAINTMAARTEN",
			"ST MAARTEN",
			"ST. MAARTEN",
			"SINT MARTEN",
			"SINTMARTEN",
			"SAINT MARTEN",
			"SAINTMARTEN",
			"ST MARTEN",
			"ST. MARTEN",
			"SXM",
			"SX"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SINT MAARTEN" );
		}

	} );

	it( "SLOVAKIA", function () {
		var names = [
			"SLOVAKIA",
			"SVK",
			"SK"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SLOVAKIA" );
		}

	} );

	it( "SLOVENIA", function () {
		var names = [
			"SLOVENIA",
			"SVN",
			"SI"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SLOVENIA" );
		}

	} );

	it( "SOLOMON ISLANDS", function () {
		var names = [
			"SOLOMON ISLANDS",
			"SOLOMONISLANDS",
			"SOLOMON ISLES",
			"SOLOMON ISLE",
			"SLB",
			"SB"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SOLOMON ISLANDS" );
		}

	} );

	it( "SOMALIA", function () {
		var names = [
			"SOMALIA",
			"SOM",
			"SO"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SOMALIA" );
		}

	} );

	it( "SOUTH AFRICA", function () {
		var names = [
			"SOUTH AFRICA",
			"AFRICA, SOUTH",
			"S AFRICA",
			"S. AFRICA",
			"ZAF",
			"ZA"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SOUTH AFRICA" );
		}

	} );

	it( "SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS", function () {
		var names = [
			"SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS",
			"S GEORGIA AND THE SOUTH SANDWICH ISLANDS",
			"S. GEORGIA AND THE SOUTH SANDWICH ISLANDS",
			"SOUTH GEORGIA AND THE S SANDWICH ISLANDS",
			"SOUTH GEORGIA AND THE S. SANDWICH ISLANDS",
			"S GEORGIA AND THE S SANDWICH ISLANDS",
			"S GEORGIA AND THE S. SANDWICH ISLANDS",
			"S. GEORGIA AND THE SOUTH SANDWICH ISLANDS",
			"S. GEORGIA AND THE S SANDWICH ISLANDS",
			"S. GEORGIA AND THE S. SANDWICH ISLANDS",
			"SOUTH GEORGIA AND THE SOUTH SANDWICH ISLES",
			"S GEORGIA AND THE SOUTH SANDWICH ISLES",
			"S. GEORGIA AND THE SOUTH SANDWICH ISLES",
			"SOUTH GEORGIA AND THE S SANDWICH ISLES",
			"SOUTH GEORGIA AND THE S. SANDWICH ISLES",
			"S GEORGIA AND THE S SANDWICH ISLES",
			"S GEORGIA AND THE S. SANDWICH ISLES",
			"S. GEORGIA AND THE SOUTH SANDWICH ISLES",
			"S. GEORGIA AND THE S SANDWICH ISLES",
			"S. GEORGIA AND THE S. SANDWICH ISLES",
			"SOUTH GEORGIA AND THE SOUTH SANDWICH ISLE",
			"S GEORGIA AND THE SOUTH SANDWICH ISLE",
			"S. GEORGIA AND THE SOUTH SANDWICH ISLE",
			"SOUTH GEORGIA AND THE S SANDWICH ISLE",
			"SOUTH GEORGIA AND THE S. SANDWICH ISLE",
			"S GEORGIA AND THE S SANDWICH ISLE",
			"S GEORGIA AND THE S. SANDWICH ISLE",
			"S. GEORGIA AND THE SOUTH SANDWICH ISLE",
			"S. GEORGIA AND THE S SANDWICH ISLE",
			"S. GEORGIA AND THE S. SANDWICH ISLE",
			"SOUTH GEORGIA & THE SOUTH SANDWICH ISLANDS",
			"S GEORGIA & THE SOUTH SANDWICH ISLANDS",
			"S. GEORGIA & THE SOUTH SANDWICH ISLANDS",
			"SOUTH GEORGIA & THE S SANDWICH ISLANDS",
			"SOUTH GEORGIA & THE S. SANDWICH ISLANDS",
			"S GEORGIA & THE S SANDWICH ISLANDS",
			"S GEORGIA & THE S. SANDWICH ISLANDS",
			"S. GEORGIA & THE SOUTH SANDWICH ISLANDS",
			"S. GEORGIA & THE S SANDWICH ISLANDS",
			"S. GEORGIA & THE S. SANDWICH ISLANDS",
			"SOUTH GEORGIA & THE SOUTH SANDWICH ISLES",
			"S GEORGIA & THE SOUTH SANDWICH ISLES",
			"S. GEORGIA & THE SOUTH SANDWICH ISLES",
			"SOUTH GEORGIA & THE S SANDWICH ISLES",
			"SOUTH GEORGIA & THE S. SANDWICH ISLES",
			"S GEORGIA & THE S SANDWICH ISLES",
			"S GEORGIA & THE S. SANDWICH ISLES",
			"S. GEORGIA & THE SOUTH SANDWICH ISLES",
			"S. GEORGIA & THE S SANDWICH ISLES",
			"S. GEORGIA & THE S. SANDWICH ISLES",
			"SOUTH GEORGIA & THE SOUTH SANDWICH ISLE",
			"S GEORGIA & THE SOUTH SANDWICH ISLE",
			"S. GEORGIA & THE SOUTH SANDWICH ISLE",
			"SOUTH GEORGIA & THE S SANDWICH ISLE",
			"SOUTH GEORGIA & THE S. SANDWICH ISLE",
			"S GEORGIA & THE S SANDWICH ISLE",
			"S GEORGIA & THE S. SANDWICH ISLE",
			"S. GEORGIA & THE SOUTH SANDWICH ISLE",
			"S. GEORGIA & THE S SANDWICH ISLE",
			"S. GEORGIA & THE S. SANDWICH ISLE",
			"S GEORGIA AND THE SOUTH SANDWICH ISLANDS",
			"S. GEORGIA AND THE SOUTH SANDWICH ISLANDS",
			"SOUTH GEORGIA AND THE S SANDWICH ISLANDS",
			"SOUTH GEORGIA AND THE S. SANDWICH ISLANDS",
			"S GEORGIA AND THE S SANDWICH ISLANDS",
			"S GEORGIA AND THE S. SANDWICH ISLANDS",
			"S. GEORGIA AND THE SOUTH SANDWICH ISLANDS",
			"S. GEORGIA AND THE S SANDWICH ISLANDS",
			"S. GEORGIA AND THE S. SANDWICH ISLANDS",
			"SOUTH GEORGIA AND THE SOUTH SANDWICH ISLES",
			"S GEORGIA AND THE SOUTH SANDWICH ISLES",
			"S. GEORGIA AND THE SOUTH SANDWICH ISLES",
			"SOUTH GEORGIA AND THE S SANDWICH ISLES",
			"SOUTH GEORGIA AND THE S. SANDWICH ISLES",
			"S GEORGIA AND THE S SANDWICH ISLES",
			"S GEORGIA AND THE S. SANDWICH ISLES",
			"S. GEORGIA AND THE SOUTH SANDWICH ISLES",
			"S. GEORGIA AND THE S SANDWICH ISLES",
			"S. GEORGIA AND THE S. SANDWICH ISLES",
			"SOUTH GEORGIA AND THE SOUTH SANDWICH ISLE",
			"S GEORGIA AND THE SOUTH SANDWICH ISLE",
			"S. GEORGIA AND THE SOUTH SANDWICH ISLE",
			"SOUTH GEORGIA AND THE S SANDWICH ISLE",
			"SOUTH GEORGIA AND THE S. SANDWICH ISLE",
			"S GEORGIA AND THE S SANDWICH ISLE",
			"S GEORGIA AND THE S. SANDWICH ISLE",
			"S. GEORGIA AND THE SOUTH SANDWICH ISLE",
			"S. GEORGIA AND THE S SANDWICH ISLE",
			"S. GEORGIA AND THE S. SANDWICH ISLE",
			"SOUTH GEORGIA & SOUTH SANDWICH ISLANDS",
			"S GEORGIA & SOUTH SANDWICH ISLANDS",
			"S. GEORGIA & SOUTH SANDWICH ISLANDS",
			"SOUTH GEORGIA & S SANDWICH ISLANDS",
			"SOUTH GEORGIA & S. SANDWICH ISLANDS",
			"S GEORGIA & S SANDWICH ISLANDS",
			"S GEORGIA & S. SANDWICH ISLANDS",
			"S. GEORGIA & SOUTH SANDWICH ISLANDS",
			"S. GEORGIA & S SANDWICH ISLANDS",
			"S. GEORGIA & S. SANDWICH ISLANDS",
			"SOUTH GEORGIA & SOUTH SANDWICH ISLES",
			"S GEORGIA & SOUTH SANDWICH ISLES",
			"S. GEORGIA & SOUTH SANDWICH ISLES",
			"SOUTH GEORGIA & S SANDWICH ISLES",
			"SOUTH GEORGIA & S. SANDWICH ISLES",
			"S GEORGIA & S SANDWICH ISLES",
			"S GEORGIA & S. SANDWICH ISLES",
			"S. GEORGIA & SOUTH SANDWICH ISLES",
			"S. GEORGIA & S SANDWICH ISLES",
			"S. GEORGIA & S. SANDWICH ISLES",
			"SOUTH GEORGIA & SOUTH SANDWICH ISLE",
			"S GEORGIA & SOUTH SANDWICH ISLE",
			"S. GEORGIA & SOUTH SANDWICH ISLE",
			"SOUTH GEORGIA & S SANDWICH ISLE",
			"SOUTH GEORGIA & S. SANDWICH ISLE",
			"S GEORGIA & S SANDWICH ISLE",
			"S GEORGIA & S. SANDWICH ISLE",
			"S. GEORGIA & SOUTH SANDWICH ISLE",
			"S. GEORGIA & S SANDWICH ISLE",
			"S. GEORGIA & S. SANDWICH ISLE",
			"SOUTH GEORGIA",
			"S GEORGIA",
			"S. GEORGIA",
			"THE SOUTH SANDWICH ISLANDS",
			"THE S. SANDWICH ISLANDS",
			"THE S SANDWICH ISLANDS",
			"THE SOUTH SANDWICH ISLES",
			"THE S. SANDWICH ISLES",
			"THE S SANDWICH ISLES",
			"THE SOUTH SANDWICH ISLE",
			"THE S. SANDWICH ISLE",
			"THE S SANDWICH ISLE",
			"SOUTH SANDWICH ISLANDS",
			"S. SANDWICH ISLANDS",
			"S SANDWICH ISLANDS",
			"SOUTH SANDWICH ISLES",
			"S. SANDWICH ISLES",
			"S SANDWICH ISLES",
			"SOUTH SANDWICH ISLE",
			"S. SANDWICH ISLE",
			"S SANDWICH ISLE",
			"GS",
			"SGS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS" );
		}

	} );

	it( "SOUTH SUDAN", function () {
		var names = [
			"SOUTH SUDAN",
			"SOUTHSUDAN",
			"S SUDAN",
			"S. SUDAN",
			"SSD",
			"SS"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SOUTH SUDAN" );
		}

	} );

	it( "SPAIN", function () {
		var names = [
			"SPAIN",
			"ESP",
			"ES"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SPAIN" );
		}

	} );

	it( "SRI LANKA", function () {
		var names = [
			"SRI LANKA",
			"SRILANKA",
			"LKA",
			"LK"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SRI LANKA" );
		}

	} );

	it( "SUDAN", function () {
		var names = [
			"SUDAN",
			"SDN",
			"SD"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SUDAN" );
		}

	} );

	it( "SURINAME", function () {
		var names = [
			"SURINAME",
			"SURNAME",
			"SUR",
			"SR"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SURINAME" );
		}

	} );

	it( "SVALBARD AND JAN MAYEN", function () {
		var names = [
			"SVALBARD AND JAN MAYEN",
			"SVALBARD & JAN MAYEN",
			"SVALBARD",
			"JAN MAYEN",
			"SJ",
			"SJM"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SVALBARD AND JAN MAYEN" );
		}

	} );

	it( "SWAZILAND", function () {
		var names = [
			"SWAZILAND",
			"SWZ",
			"SZ"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SWAZILAND" );
		}

	} );

	it( "SWEDEN", function () {
		var names = [
			"SWEDEN",
			"SWE",
			"SE"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SWEDEN" );
		}

	} );

	it( "SWITZERLAND", function () {
		var names = [
			"SWITZERLAND",
			"CHE",
			"CH"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SWITZERLAND" );
		}

	} );

	it( "SYRIAN ARAB REPUBLIC", function () {
		var names = [
			"SYRIAN ARAB REPUBLIC",
			"SYRIAN ARAB REP",
			"SYRIAN ARAB REP.",
			"SYRIAN ARAB",
			"SYRIA ARAB REPUBLIC",
			"SYRIA ARAB REP",
			"SYRIA ARAB REP.",
			"SYRIA ARAB",
			"SYRIA ARAB",
			"SYRIA ARAB",
			"SYRIA ARAB",
			"SYRIA",
			"SYR",
			"SY"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "SYRIAN ARAB REPUBLIC" );
		}

	} );

	it( "TAIWAN", function () {
		var names = [
			"TAIWAN",
			"TAIWAN, PROVINCE OF CHINA",
			"TAIWAN, CHINA",
			"TAIWAN,CHINA",
			"TAIWAN CHINA",
			"TW",
			"TWN"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "TAIWAN" );
		}

	} );

	it( "TAJIKISTAN", function () {
		var names = [
			"TAJIKISTAN",
			"TJK",
			"TJ"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "TAJIKISTAN" );
		}

	} );

	it( "TANZANIA", function () {
		var names = [
			"UNITED REPUBLIC OF TANZANIA",
			"UNITED REP OF TANZANIA",
			"UNITED REP. OF TANZANIA",
			"REPUBLIC OF TANZANIA",
			"REP. OF TANZANIA",
			"REP OF TANZANIA",
			"UNITED TANZANIA",
			"TANZANIA",
			"TZ",
			"TZA"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "TANZANIA" );
		}

	} );

	it( "THAILAND", function () {
		var names = [
			"THAILAND",
			"THA",
			"TH"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "THAILAND" );
		}

	} );

	it( "TIMOR-LESTE", function () {
		var names = [
			"TIMOR-LESTE",
			"TIMORLESTE",
			"TIMOR LESTE",
			"TLS",
			"TL"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "TIMOR-LESTE" );
		}

	} );

	it( "TOGO", function () {
		var names = [
			"TOGO",
			"TGO",
			"TG"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "TOGO" );
		}

	} );

	it( "TOKELAU", function () {
		var names = [
			"TOKELAU",
			"TOKALAU",
			"TOKELOU",
			"TK",
			"TKL"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "TOKELAU" );
		}

	} );

	it( "TONGA", function () {
		var names = [
			"TONGA",
			"TON",
			"TO"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "TONGA" );
		}

	} );

	it( "TRINIDAD AND TOBAGO", function () {
		var names = [
			"TRINIDAD AND TOBAGO",
			"TRINIDADANDTOBAGO",
			"TRINIDAD & TOBAGO",
			"TRINIDAD TOBAGO",
			"TTO",
			"TT"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "TRINIDAD AND TOBAGO" );
		}

	} );

	it( "TUNISIA", function () {
		var names = [
			"TUNISIA",
			"TUN",
			"TN"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "TUNISIA" );
		}

	} );

	it( "TURKEY", function () {
		var names = [
			"TURKEY",
			"TUR",
			"TR"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "TURKEY" );
		}

	} );

	it( "TURKMENISTAN", function () {
		var names = [
			"TURKMENISTAN",
			"TKM",
			"TM"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "TURKMENISTAN" );
		}

	} );

	it( "TUVALU", function () {
		var names = [
			"TUVALU",
			"TUV",
			"TV"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "TUVALU" );
		}

	} );

	it( "UGANDA", function () {
		var names = [
			"UGANDA",
			"UGA",
			"UG"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "UGANDA" );
		}

	} );

	it( "UKRAINE", function () {
		var names = [
			"UKRAINE",
			"UKRAIN",
			"UKR",
			"UA"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "UKRAINE" );
		}

	} );

	it( "UNITED ARAB EMIRATES", function () {
		var names = [
			"UNITED ARAB EMIRATES",
			"UNITEDARABEMIRATES",
			"UNITED ARAB",
			"UNITED ARABS",
			"UNITED EMIRATES",
			"ARAB EMIRATES",
			"EMIRATES",
			"ARE",
			"AE"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "UNITED ARAB EMIRATES" );
		}

	} );

	it( "UNITED KINGDOM", function () {
		var names = [
			"UNITED KINGDOM",
			"UK",
			"U. K.",
			"U.K.",
			"UK.",
			"U.K",
			"UNITEDKINGDOM",
			"GBR",
			"GB"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "UNITED KINGDOM" );
		}

	} );

	it( "UNITED STATES", function () {
		var names = [
			"UNITED STATES",
			"US",
			"U. S.",
			"U.S.",
			"US.",
			"U.S",
			"UNITEDSTATES",
			"UNITED STATES OF AMERICA",
			"UNITED STATES AMERICA",
			"USA",
			"U. S. A.",
			"US. A.",
			"U. SA",
			"U. S. A",
			"USA.",
			"US.A.",
			"U.SA",
			"U.S.A",
			"U.S.A.",
			"UNITEDSTATESAMERICA",
			"AMERICA",
			"USA",
			"US"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "UNITED STATES" );
		}

	} );

	it( "UNITED STATES MINOR OUTLYING ISLANDS", function () {
		var names = [
			"UNITED STATES MINOR OUTLYING ISLANDS",
			"US MINOR OUTLYING ISLANDS",
			"U.S. MINOR OUTLYING ISLANDS",
			"U. S. MINOR OUTLYING ISLANDS",
			"UNITED STATES OUTLYING ISLANDS",
			"US OUTLYING ISLANDS",
			"U.S. OUTLYING ISLANDS",
			"U. S. OUTLYING ISLANDS",
			"UNITED STATES ISLANDS",
			"US ISLANDS",
			"U.S. ISLANDS",
			"U. S. ISLANDS",
			"UM",
			"UMI"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "UNITED STATES MINOR OUTLYING ISLANDS" );
		}

	} );

	it( "URUGUAY", function () {
		var names = [
			"URUGUAY",
			"URY",
			"UY"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "URUGUAY" );
		}

	} );

	it( "UZBEKISTAN", function () {
		var names = [
			"UZBEKISTAN",
			"UZB",
			"UZ"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "UZBEKISTAN" );
		}

	} );

	it( "VANUATU", function () {
		var names = [
			"VANUATU",
			"VUT",
			"VU"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "VANUATU" );
		}

	} );

	it( "VENEZUELA", function () {
		var names = [
			"VENEZUELA",
			"VEN",
			"VE"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "VENEZUELA" );
		}

	} );

	it( "VIETNAM", function () {
		var names = [
			"VIETNAM",
			"VIET NAM",
			"VNM",
			"VN"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "VIETNAM" );
		}

	} );

	it( "BRITISH VIRGIN ISLANDS", function () {
		var names = [
			"BRITISH VIRGIN ISLANDS",
			"BRITISH ISLANDS",
			"BRITISH VIRGIN ISLES",
			"BRITISH VIRGIN ISLE",
			"VG",
			"VGB"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "BRITISH VIRGIN ISLANDS" );
		}

	} );

	it( "US VIRGIN ISLANDS", function () {
		var names = [
			"VIRGIN ISLANDS",
			"US VIRGIN ISLANDS",
			"US VIRGIN ISLES",
			"US VIRGIN ISLE",
			"U.S. VIRGIN ISLANDS",
			"U.S. VIRGIN ISLES",
			"U.S. VIRGIN ISLE",
			"U. S. VIRGIN ISLANDS",
			"U. S. VIRGIN ISLES",
			"U. S. VIRGIN ISLE",
			"VIR",
			"VI"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "US VIRGIN ISLANDS" );
		}

	} );

	it( "WALLIS AND FUTUNA", function () {
		var names = [
			"WALLIS AND FUTUNA",
			"WALLIS & FUTUNA",
			"WALLIS",
			"FUTUNA",
			"WF",
			"WLF"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "WALLIS AND FUTUNA" );
		}

	} );

	it( "WESTERN SAHARA", function () {
		var names = [
			"WESTERN SAHARA",
			"W. SAHARA",
			"W SAHARA",
			"SAHARA",
			"EH",
			"ESH"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "WESTERN SAHARA" );
		}

	} );

	it( "YEMEN", function () {
		var names = [
			"YEMEN",
			"YEM",
			"YE"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "YEMEN" );
		}

	} );

	it( "ZAMBIA", function () {
		var names = [
			"ZAMBIA",
			"ZMB",
			"ZM"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "ZAMBIA" );
		}

	} );

	it( "ZIMBABWE", function () {
		var names = [
			"ZIMBABWE",
			"ZWE",
			"ZW"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "ZIMBABWE" );
		}

	} );

	it( "ALAND ISLANDS", function () {
		var names = [
			"ALAND ISLANDS",
			"ALAND ISLANDS",
			"ALAND ISLES",
			"ALAND ISLE",
			"AX",
			"ALA"
		];
		var abbr, i;
		var numNames = names.length;

		for ( i = 0; i < numNames; i++ ) {
			abbr = postal.standardization.country( names[ i ] );
			should.exist( abbr );
			abbr.should.equal( "ALAND ISLANDS" );
		}

	} );

} );