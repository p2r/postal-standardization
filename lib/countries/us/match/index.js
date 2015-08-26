( function () {
	"use strict";

	var commonPostalMatch = require( "../../../common/match" );

	function usPostalMatch( postal, config ) {

		commonPostalMatch.call( postal, config );

		postal.match.calculateConfidence = function () {
			this.addConfidence( "country" );
			this.addConfidence( "zip" );
			this.addConfidence( "state" );
			this.addConfidence( "city" );
			this.addConfidence( "street" );
			this.addConfidence( "number" );
			this.addConfidence( "type" );
			this.addConfidence( "prefix" );
			this.addConfidence( "suffix" );

			this.addConfidence( "street1" );
			this.addConfidence( "street2" );
			this.addConfidence( "type1" );
			this.addConfidence( "type2" );
			this.addConfidence( "prefix1" );
			this.addConfidence( "prefix2" );
			this.addConfidence( "suffix1" );
			this.addConfidence( "suffix2" );

			this.addConfidence( "sec_unit_type" );
			this.addConfidence( "sec_unit_num" );

			this.addConfidence( "po_box" );
			this.addConfidence( "rural_route" );
			this.addConfidence( "highway_contract" );
		};
	}

	module.exports = usPostalMatch;

} ).call( this );