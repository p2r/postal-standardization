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
			addConfidence: function ( property, importance ) {
				if ( importance === undefined ) {
					importance = 10;
				}

				if ( this.importanceTotal === undefined ) {
					this.importanceTotal = 0;
				}

				if ( property && this.address1 && this.address2 ) {
					if ( this.address1.hasOwnProperty( property ) || this.address2.hasOwnProperty( property ) ) {
						this.importanceTotal += importance;

						if ( this.address1.hasOwnProperty( property ) && this.address2.hasOwnProperty( property ) ) {
							if ( this.address1[ property ] === this.address2[ property ] ) {
								this.confidence += importance;
							}
						}
					}
				}
			},
			calculateConfidence: function () {
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
			},
			similarity: function ( address1, address2, callback ) {

				function determineSimilarity() {
					var validAddressObjects = false;
					if ( address1 && typeof address1 === "object" ) {
						if ( address2 && typeof address2 === "object" ) {
							validAddressObjects = true;
						}
					}

					if ( validAddressObjects ) {
						_this.calculateConfidence();

						_this.confidence = _this.confidence / _this.importanceTotal;
					}
				}

				var _this = this;

				this.confidence = 0;
				this.importanceTotal = 0;

				if ( postal.callbackExists( callback ) ) {
					if ( !address1  ) {
						postal.performCallback( callback, "Address 1 not provided.", this.confidence );
						return;
					}
					if ( !address2  ) {
						postal.performCallback( callback, "Address 2 not provided.", this.confidence );
						return;
					}
				}
				else {
					return;
				}
				this.address1 = address1;
				this.address2 = address2;

				if ( typeof this.address1 === "string" ) {
					postal.standardization.parseAddress( this.address1, function ( err, address ) {
						if ( err ) {
							postal.performCallback( callback, "Could not standardize address 1.", this.confidence );
						}
						this.address1 = address;
						determineSimilarity();
					} );
				}

				if ( typeof this.address2 === "string" ) {
					postal.standardization.parseAddress( this.address2, function ( err, address ) {
						if ( err ) {
							postal.performCallback( callback, "Could not standardize address 2.", this.confidence );
						}
						this.address2 = address;
						determineSimilarity();
					} );
				}

				determineSimilarity();

				postal.performCallback( callback, null, this.confidence );
				return;
			}
		};

	}

	module.exports = postalMatch;

} ).call( this );