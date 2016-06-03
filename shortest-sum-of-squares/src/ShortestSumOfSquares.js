/**
 * NOTES:
 * - Bitwise OR operator used to floor. If larger than 32 bit numbers are expected Math.floor should be used instead.
 */

const isSquareNumber = (sqrt, x) => sqrt * sqrt === x;

function memoize(fn) {
  const memo = Object.create(null);
  return function(x) {
    if (!(x in memo)) {
      memo[x] = fn(x);
    }
    return memo[x];
  }
}

function recursiveMemoizedShortestSumOfSquares(n) {
  function _shortestSumOfSquare(x) {
    const floorSqrt = Math.sqrt(x) | 0;
    if (isSquareNumber(floorSqrt, x)) {
      // Base case if x is a square number, roots is a single element with value sqrt x
      return [floorSqrt];
    } else if (_shortestSumOfSquare(x - 1).length === 1) {
      // Base case if x - 1 is a square number, roots is 1 and shortest sum of square for x - 1
      return [1].concat(..._shortestSumOfSquare(x - 1));
    } else {
      let minLength = x; // minLength is equal to x because that is the sum of 1^2, x times
      let min = 1;
      for (let i = 1, y = i * i; y <= x && minLength !== 2; i++, y = i * i) {
        const length = 1 + _shortestSumOfSquare(x - y).length;
        if (length < minLength) {
          minLength = length;
          min = y;
        }
      }
      return _shortestSumOfSquare(min).slice().concat(..._shortestSumOfSquare(x - min));
    }
  }

  return (_shortestSumOfSquare = memoize(_shortestSumOfSquare))(n);
}

function dynamicProgrammingShortestSumOfSquares(n) {
  const SQUARES = Array.from(new Array(Math.sqrt(n) | 0).keys()).map(i => Math.pow(i + 1, 2));
  const shortest = [[]];
  for (let i = 1; i <= n; i++) {
    const table = [];
    for (let square of SQUARES) {
      if (square > i) {
        break;
      }
      table.push([i - (i - square)].concat(...shortest[i - square]));
    }
    for (let entry of table) {
      if (!shortest[i] || shortest[i].length > entry.length) {
        shortest[i] = entry;
      }
    }
  }
  return shortest[n].map(square => Math.sqrt(square) | 0);
}
