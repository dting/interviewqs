xdescribe('PROBLEM:', () => {
  xdescribe(PROBLEM, noop);
});

xdescribe('EXAMPLE:', () => {
  xdescribe(EXAMPLE, noop);
});

const runTests = (shortestSumOfSquares) => {
  describe('n = 1', () => {
    it('Should equal [1]', () => {
      expect(shortestSumOfSquares(1)).toEqual([1]);
    });
  });
  describe('n = 2', () => {
    it('Should equal [1, 1]', () => {
      expect(shortestSumOfSquares(2)).toEqual([1, 1]);
    });
  });
  describe('n = 3', () => {
    it('Should equal [1, 1, 1]', () => {
      expect(shortestSumOfSquares(3)).toEqual([1, 1, 1]);
    });
  });
  describe('n = 4', () => {
    it('Should equal [2]', () => {
      expect(shortestSumOfSquares(4)).toEqual([2]);
    });
  });
  describe('n = 5', () => {
    it('Should equal [1, 2]', () => {
      expect(shortestSumOfSquares(5)).toEqual([1, 2]);
    });
  });
  describe('n = 6', () => {
    it('Should equal [1, 1, 2]', () => {
      expect(shortestSumOfSquares(6)).toEqual([1, 1, 2]);
    });
  });
  describe('n = 7', () => {
    it('Should equal [1, 1, 1, 2]', () => {
      expect(shortestSumOfSquares(7)).toEqual([1, 1, 1, 2]);
    });
  });
  describe('n = 8', () => {
    it('Should equal [2, 2]', () => {
      expect(shortestSumOfSquares(8)).toEqual([2, 2]);
    });
  });
  describe('n = 9', () => {
    it('Should equal [3]', () => {
      expect(shortestSumOfSquares(9)).toEqual([3]);
    });
  });
  describe('n = 10', () => {
    it('Should equal [1, 3]', () => {
      expect(shortestSumOfSquares(10)).toEqual([1, 3]);
    });
  });
  describe('n = 11', () => {
    it('Should equal [1, 1, 3]', () => {
      expect(shortestSumOfSquares(11)).toEqual([1, 1, 3]);
    });
  });
  describe('n = 12', () => {
    it('Should equal [2, 2, 2]', () => {
      expect(shortestSumOfSquares(12)).toEqual([2, 2, 2]);
    });
  });
  describe('n = 13', () => {
    it('Should equal [2, 3]', () => {
      expect(shortestSumOfSquares(13)).toEqual([2, 3]);
    });
  });
  describe('n = 14', () => {
    it('Should equal [1, 2, 3]', () => {
      expect(shortestSumOfSquares(14)).toEqual([1, 2, 3]);
    });
  });
  describe('n = 15', () => {
    it('Should equal [1, 1, 2, 3]', () => {
      expect(shortestSumOfSquares(15)).toEqual([1, 1, 2, 3]);
    });
  });
};

describe('Shortest Sum of Square', () => {
  describe('SOLUTIONS', () => {
    describe('Recursive memoized', () => {
      runTests(recursiveMemoizedShortestSumOfSquares);
    });

    describe('Bottom up dynamic programming', () => {
      runTests(dynamicProgrammingShortestSumOfSquares);
    });
  })
});
