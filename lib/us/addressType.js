( function () {
	"use strict";

	module.exports = function ( lines ) {
		var numLines;
		// var nonAddressDataLinex;
		// var informationAttentionLine;
		// var recipientLine;
		// var deliveryAddressLine;
		// var lastLine;
		// var internationalLine;

		if ( !lines ) {
			return null;
		}

		if ( Object.prototype.toString.call( lines ) !== "[object Array]" ) {
			return null;
		}

		numLines = lines.length;

		if  ( numLines === 0 ) {
			return null;
		}

		//	TODO: Implement

		//	If numLines === 1, then we need to parse as a string.
		//	If numLines === 2, similar to one line; need to examine.
		//		Most likely, it is a recipient and then an address.
		//	If numLines === 3, could be:
		//		Individual (section 212)
		//		Rural Route (section 24)
		//		Highway Contract (section 25)
		//		Post Office Box (section 28)
		//		Military (section 225)
		//	If numLines ===4, could be:
		//		International (section A3)
		//	If numLines === 5, could be:
		//		Non-Address Data (section 343.3)
		//		Attention Line (section 214)

	};

} ).call( this );