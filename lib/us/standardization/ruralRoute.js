( function () {
	"use strict";

	//	Publication 28
	//
	//	24 Rural Route Addresses
	//	http://pe.usps.gov/text/pub28/28c2_021.htm
	//
	//	Tweaked a little

	var clean = require( "../clean" );
	var logStatus = require( "../logStatus");

	var ruralRoute = {
		routeRegEx: /^R\s*(?:R)?\s*(\d+)\s*BOX\s*(\S+)\s*$/i,
		parse: function ( routeString ) {
			var routeParts;
			var cleanRoute = clean( routeString );

			logStatus( "parse" );

			if ( !routeString ) {
				return;
			}
			cleanRoute = clean( routeString );
			if ( !cleanRoute ) {
				return;
			}
			cleanRoute = cleanRoute.toUpperCase();

			logStatus( "parse", "cleanRoute", cleanRoute );

			cleanRoute = cleanRoute.replace( /#/gi, "" );
			cleanRoute = cleanRoute.replace( /\./gi, "" );
			cleanRoute = cleanRoute.replace( /rural\s*route/gi, "RR" );
			cleanRoute = cleanRoute.replace( /rural\s*number/gi, "RR" );
			cleanRoute = cleanRoute.replace( /rural\s*/gi, "R" );
			cleanRoute = cleanRoute.replace( /route\s*/gi, "R" );

			if ( this.routeRegEx.test( cleanRoute ) ) {
				routeParts = cleanRoute.match( this.routeRegEx );
				cleanRoute = "RR " + routeParts[ 1 ] + " BOX " + routeParts[ 2 ];
			}
			else {
				cleanRoute = null;
				logStatus( "parse", null, "test failed" );
			}

			return cleanRoute;
		}
	};

	module.exports = ruralRoute;

} ).call( this );