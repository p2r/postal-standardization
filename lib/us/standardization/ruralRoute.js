( function () {
	"use strict";

	var clean = require( "../clean" );

	module.exports = function ( route ) {

		var routeRegex;
		var routeParts;
		var cleanRoute = clean( route );

		if ( !cleanRoute ) {
			return null;
		}

		//	Publication 28
		//
		//	24 Rural Route Addresses
		//	http://pe.usps.gov/text/pub28/28c2_021.htm
		//
		//	Tweaked a little

		cleanRoute = cleanRoute.replace( /#/gi, "" );
		cleanRoute = cleanRoute.replace( /\./gi, "" );
		cleanRoute = cleanRoute.replace( /rural\s*route/gi, "RR" );
		cleanRoute = cleanRoute.replace( /rural\s*number/gi, "RR" );
		cleanRoute = cleanRoute.replace( /rural\s*/gi, "R" );
		cleanRoute = cleanRoute.replace( /route\s*/gi, "R" );

		routeRegex = /^R\s*(?:R)?\s*(\d+)\s*BOX\s*(\S+)\s*$/i;

		if ( routeRegex.test( cleanRoute ) ) {
			routeParts = cleanRoute.match( routeRegex );
			cleanRoute = "RR " + routeParts[ 1 ] + " BOX " + routeParts[ 2 ];
		}
		else {
			cleanRoute = null;
		}

		return cleanRoute;
	};

} ).call( this );