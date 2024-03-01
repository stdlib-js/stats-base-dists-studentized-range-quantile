/** @license Apache-2.0 */

'use strict';

/**
* Evaluate the quantile function for a studentized range distribution.
*
* @module @stdlib/stats-base-dists-studentized-range-quantile
*
* @example
* var quantile = require( '@stdlib/stats-base-dists-studentized-range-quantile' );
*
* var y = quantile( 0.5, 3.0, 2.0 );
* // returns ~1.908
*
* y = quantile( 0.1, 3.0, 4.0 );
* // returns ~0.627
*
* var myquantile = quantile.factory( 3.0, 3.0 );
*
* y = myquantile( 0.5 );
* // returns ~1.791
*
* y = myquantile( 0.8 );
* // returns ~3.245
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property/dist' );
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;
