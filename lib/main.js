/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isPositiveInteger = require( '@stdlib/assert-is-positive-integer' ).isPrimitive;
var prange = require( '@stdlib/stats-base-dists-studentized-range-cdf' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var abs = require( '@stdlib/math-base-special-abs' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var qtrngo = require( './qtrngo.js' );


// VARIABLES //

var PCUT = 1e-8;
var JMAX = 28;


// MAIN //

/**
* Evaluates the quantile function for a studentized range distribution at probability `p` with `r` samples and `v` degrees of freedom.
*
* ## References
*
* -   Ferreira, D. F., Demetrico, C. G. B., Manly, B. F. J., and Machado, A. de A. 2007. "Quantis da distribuição do máximo da amplitude estudentizada." _Rev. Mat. Est._, São Paulo, 25 (1): 117-135. <http://jaguar.fcav.unesp.br/RME/fasciculos/v25/v25_n1/A8_Daniel.pdf>.
*
* @param {Probability} p - input probability
* @param {PositiveNumber} r - sample size for range (same for each group; must be greater than or equal to `2`)
* @param {PositiveNumber} v - degrees of freedom (must be greater than or equal to `2`)
* @param {PositiveInteger} [nranges=1] - number of groups whose maximum range is considered
* @returns {number} evaluated quantile function
*
* @example
* var y = qrange( 0.5, 3.0, 2.0 );
* // returns ~1.908
*
* @example
* var y = qrange( 0.9, 17.0, 2.0 );
* // returns ~11.237
*
* @example
* var y = qrange( 0.5, 3.0, 2.0, 2 );
* // returns ~2.549
*/
function qrange( p, r, v, nranges ) {
	var aux;
	var e1;
	var e2;
	var q1;
	var q2;
	var p1;
	var p2;
	var j;

	if (
		isnan( r ) ||
		isnan( v ) ||
		r < 2.0 ||
		v < 2.0
	) {
		return NaN;
	}
	if ( isnan( p ) || p < 0.0 || p > 1.0 ) {
		return NaN;
	}
	if ( p === 0.0 ) {
		return 0.0;
	}
	if ( p === 1.0 ) {
		return PINF;
	}
	if ( nranges === void 0 ) {
		nranges = 1;
	}
	else if ( !isPositiveInteger( nranges ) ) {
		return NaN;
	}
	q1 = qtrngo( p, v, r );
	while ( true ) {
		p1 = prange( q1, r, v, nranges );
		if ( p1 > p ) {
			q1 -= 0.4;
		}
		if ( q1 < 0.0 ) {
			q1 = 0.1;
		}
		if ( p1 < p ) {
			break;
		}
	}
	aux = q1;
	if ( abs( p1 - p ) < PCUT ) {
		return NaN;
	}
	q2 = q1 + 0.5;
	while ( true ) {
		p2 = prange( q2, r, v, nranges );
		if ( p2 < p ) {
			q2 += 0.4;
		}
		if ( q2 < 0.0 ) {
			q2 = 1.0;
		}
		if ( p2 > p ) {
			break;
		}
	}
	if ( q2 < q1 ) {
		q2 = q1 + 0.01;
	}
	j = 2;
	while ( j <= JMAX ) {
		p2 = prange( q2, r, v, nranges );
		e1 = p1 - p;
		e2 = p2 - p;
		if ( e2 - e1 !== 0 ) {
			aux = ( ( e2 * q1 ) - ( e1 * q2 ) ) / ( e2 - e1 );
		}
		if ( abs( e1 ) < abs( e2 ) ) {
			if ( abs( p1 - p ) < PCUT * 5.0 ) {
				j = JMAX + 2;
			}
			q1 = aux;
			p1 = prange( q1, r, v, nranges );
		} else {
			q1 = q2;
			p1 = p2;
			q2 = aux;
		}
		j += 1;
	}
	return aux;
}


// EXPORTS //

module.exports = qrange;
