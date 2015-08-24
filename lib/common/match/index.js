( function () {
	"use strict";

	function postalMatch( postal, config ) {

		if ( !postal ) {
			return;
		}

		if ( config ) {
			//	TODO: any configuration?
		}

		postal.match = {
			similarity: function ( address1, address2, callback ) {

				function calculateSimilarity() {

					function addConfidence( property, importance ) {
						if ( importance === undefined ) {
							importance = 10;
						}

						if ( property ) {
							if ( address1.hasOwnProperty( property ) || address2.hasOwnProperty( property ) ) {
								importanceTotal += importance;

								if ( address1.hasOwnProperty( property ) && address2.hasOwnProperty( property ) ) {
									if ( address1[ property ] === address2[ property ] ) {
										confidence += importance;
									}
								}
							}
						}
					}

					var validAddressObjects = false;
					if ( address1 && typeof address1 === "object" ) {
						if ( address2 && typeof address2 === "object" ) {
							validAddressObjects = true;
						}
					}

					if ( validAddressObjects ) {
						addConfidence( "country" );
						addConfidence( "zip" );
						addConfidence( "state" );
						addConfidence( "city" );
						addConfidence( "street" );
						addConfidence( "number" );
						addConfidence( "type" );
						addConfidence( "prefix" );
						addConfidence( "suffix" );

						addConfidence( "street1" );
						addConfidence( "street2" );
						addConfidence( "type1" );
						addConfidence( "type2" );
						addConfidence( "prefix1" );
						addConfidence( "prefix2" );
						addConfidence( "suffix1" );
						addConfidence( "suffix2" );

						addConfidence( "sec_unit_type" );
						addConfidence( "sec_unit_num" );

						addConfidence( "po_box" );
						addConfidence( "rural_route" );
						addConfidence( "highway_contract" );

						confidence = confidence / importanceTotal;
					}
				}

				var confidence = 0;
				var importanceTotal = 0;

				if ( postal.callbackExists( callback ) ) {
					if ( !address1  ) {
						postal.performCallback( callback, "Address 1 not provided.", confidence );
						return;
					}
					if ( !address2  ) {
						postal.performCallback( callback, "Address 2 not provided.", confidence );
						return;
					}
				}
				else {
					return;
				}

				if ( typeof address1 === "string" ) {
					postal.standardization.parseAddress( address1, function ( err, address ) {
						if ( err ) {
							postal.performCallback( callback, "Could not standardize address 1.", confidence );
						}
						address1 = address;
						calculateSimilarity();
					} );
				}

				if ( typeof address2 === "string" ) {
					postal.standardization.parseAddress( address2, function ( err, address ) {
						if ( err ) {
							postal.performCallback( callback, "Could not standardize address 2.", confidence );
						}
						address2 = address;
						calculateSimilarity();
					} );
				}

				calculateSimilarity();
				postal.performCallback( callback, null, confidence );
				return;
			}
		};

	}

	module.exports = postalMatch;

} ).call( this );