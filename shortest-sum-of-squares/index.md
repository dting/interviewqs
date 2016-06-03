---
layout: page
title: Shortest Sum of Squares
---

# Problem

```javascript
/**
 * Return shortest array containing root of squares that sum to n
 *
 * Result should should be sorted smallest to largest.
 */
function shortestSumOfSquares(n) {
  // Your code
}
```

# Example

```
For n = 12:

Squares: 1, 4, 9

Possible sum of squares:
    1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1
    1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 4
    1 + 1 + 1 + 1 + 4 + 4
    1 + 1 + 1 + 9
    4 + 4 + 4

Shortest sum of squares is:
    4 + 4 + 4
    2^2 + 2^2 + 2^2

Since we want the roots, the answer is:
   [2, 2, 2]
```

# Solutions

[ShortestSumOfSquares](https://github.com/dting/interviewqs/blob/gh-pages/shortest-sum-of-squares/src/ShortestSumOfSquares.js)

[Tests](tests.html)

# Notes

This question is a variation of the [Change-making problem](https://en.wikipedia.org/wiki/Change-making_problem), using square numbers less than n as the coin values.
