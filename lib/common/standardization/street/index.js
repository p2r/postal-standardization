( function () {
	"use strict";

	var streetType = require( "./type");
	var streetPrefix = require( "./prefix");
	var streetSuffix = require( "./suffix");
	var streetNumber = require( "./number");
	var unitType = require( "../unitType");

	module.exports = {
		type: streetType,
		unit: unitType,
		prefix: streetPrefix,
		suffix: streetSuffix,
		number: streetNumber
	};

} ).call( this );