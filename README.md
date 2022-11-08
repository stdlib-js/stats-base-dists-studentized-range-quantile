<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Quantile Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Studentized range][studentized-range] distribution [quantile function][quantile-function].

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
quantile = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-studentized-range-quantile@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var quantile = require( 'path/to/vendor/umd/stats-base-dists-studentized-range-quantile/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-studentized-range-quantile@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.quantile;
})();
</script>
```

#### quantile( p, r, v\[, nranges=1] )

Evaluates the [quantile function][quantile-function] for a [studentized range][studentized-range] distribution with sample size `r` and `v` degrees of freedom. Optionally. Optionally, the number of groups whose maximum range is considered can be specified via the `nranges` parameter.

```javascript
var y = quantile( 0.5, 3.0, 2.0 );
// returns ~0.0644

y = quantile( 0.9, 17.0, 2.0 );
// returns ~0.913

y = quantile( 0.5, 3.0, 2.0, 2 );
// returns ~0.01
```

If provided a probability `p` outside the interval `[0,1]`, the function returns `NaN`.

```javascript
var y = quantile( 1.9, 3.0, 2.0 );
// returns NaN

y = quantile( -0.1, 3.0, 2.0 );
// returns NaN
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = quantile( NaN, 2.0, 2.0 );
// returns NaN

y = quantile( 0.0, NaN, 2.0 );
// returns NaN
```

If provided `v < 2` or `r < 2`, the function returns `NaN`.

```javascript
var y = quantile( 0.4, -1.0, 3.0 );
// returns NaN

y = quantile( 0.4, 3.0, 1.5 );
// returns NaN
```

#### quantile.factory( r, v\[, nranges=1] )

Returns a function for evaluating the [quantile function][quantile-function] of an [studentized range][studentized-range] distribution with sample size `r` and `v` degrees of freedom. Optionally, the number of groups whose maximum range is considered can be specified via the `nranges` parameter.

```javascript
var myquantile = quantile.factory( 4.0 );

var y = myquantile( 0.2 );
// returns ~-0.941

y = myquantile( 0.9 );
// returns ~1.533
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-studentized-range-quantile@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var v;
var r;
var p;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    p = randu();
    r = ( randu() * 20.0 ) + 2.0;
    v = ( randu() * 20.0 ) + 2.0;
    y = quantile( p, r, v );
    console.log( 'p: %d, r: %d, v: %d, Q(p;r,v): %d', p.toFixed( 4 ), r.toFixed( 4 ), v.toFixed( 4 ), y.toFixed( 4 ) );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-studentized-range-quantile.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-studentized-range-quantile

[test-image]: https://github.com/stdlib-js/stats-base-dists-studentized-range-quantile/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-studentized-range-quantile/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-studentized-range-quantile/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-studentized-range-quantile?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-studentized-range-quantile.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-studentized-range-quantile/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-studentized-range-quantile/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-studentized-range-quantile/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-studentized-range-quantile/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-studentized-range-quantile/blob/main/branches.md

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

[studentized-range]: https://en.wikipedia.org/wiki/Studentized_range_distribution

</section>

<!-- /.links -->
