( function () {
	"use strict";

	var displayLogging = false;

	module.exports = function ( functionName, propertyName, value ) {
		var logString = "";
		var valueString;

		if ( arguments.length === 1 ) {
			if ( typeof functionName === "boolean" ) {
				displayLogging = functionName;
				return;
			}
		}

		if ( displayLogging ) {
			if ( arguments.length > 0 ) {
				if ( arguments.length > 2 ) {
					if ( typeof value === "object" || Array.isArray( value ) ) {
						valueString = JSON.stringify( value, null, "\t" );
					}
					else {
						valueString = "" + value;
					}
				}

				if ( functionName ) {
					logString += functionName + "()";
					if ( propertyName ) {
						logString += ": ";
					}
					else {
						if ( arguments.length > 2 ) {
							logString += " = ";
						}
					}
				}
				if ( propertyName ) {
					logString += propertyName;

					if ( arguments.length > 2 ) {
						logString += " = ";
					}
				}
				if ( arguments.length > 2 ) {
					logString += valueString;
				}
			}

			console.info( logString );
		}
	};

} ).call( this );