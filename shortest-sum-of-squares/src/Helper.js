const noop = () => {};
const PROBLEM = `/**
 * Return shortest array containing root of squares that sum to n 
 *
 * Result should should be sorted smallest to largest.
 */
function shortestSumOfSquares(n) {
  // Your code
}
`;

const EXAMPLE = `
For n = 12:

Squares: 1, 4, 9

Possible sum of squares:
    1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1
    1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 4
    1 + 1 + 1 + 1 + 4 + 4
    4 + 4 + 4
    1 + 1 + 1 + 9

Shortest sum of squares is:

    4 + 4 + 4
    2^2 + 2^2 + 2^2

Since we want the roots, the answer is:

   [2, 2, 2]
`;
