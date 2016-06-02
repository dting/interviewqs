const runTests = (shortestPath) => {
  describe('When arr is empty', () => {
    xdescribe('[]', noop);
    it('should be undefined', () => {
      expect(shortestPath([])).toBeUndefined();
    });
  });

  describe('When no valid path can be found', () => {
    xdescribe('[0, 1]', noop);
    it('should be undefined', () => {
      expect(shortestPath([0, 1])).toBeUndefined();
    });

    xdescribe('[1, 0]', noop);
    it('should be undefined', () => {
      expect(shortestPath([1, 0])).toBeUndefined();
    });

    xdescribe('[0, 2, 1]', noop);
    it('should be undefined', () => {
      expect(shortestPath([0, 2, 1])).toBeUndefined();
    });
  });

  describe('When a valid path can be found', () => {
    xdescribe('[1]', noop);
    it('should be shortest path: 1', () => {
      expect(shortestPath([1])).toBe(1);
    });

    xdescribe('[1, 1, 1, 1]', noop);
    it('should be shortest path: 4', () => {
      expect(shortestPath([1, 1, 1, 1])).toBe(4);
    });

    xdescribe('[1, 2, 0, 1]', noop);
    it('should be shortest path: 3', () => {
      expect(shortestPath([1, 2, 0, 1])).toBe(3);
    });
  });

  describe('When multiple paths can be found', () => {
    xdescribe('[4, 2, 1]', noop);
    it('should be shortest path: 1', () => {
      expect(shortestPath([4, 2, 1])).toBe(1);
    });

    xdescribe('[2, 1]', noop);
    it('should be shortest path: 1', () => {
      expect(shortestPath([2, 1])).toBe(1);
    });

    xdescribe('[1, 3, 2, 1, 2, 0, 3, 1]', noop);
    it('should be shortest path: 4', () => {
      expect(shortestPath([1, 3, 2, 1, 2, 0, 3, 1])).toBe(4);
    });
  });
};

xdescribe('PROBLEM:', () => {
  xdescribe(PROBLEM, noop);
});

xdescribe('HINT:', () => {
  xdescribe(HINT, noop);
});

describe('Shortest Path', () => {
  describe('SOLUTIONS:', () => {
    describe('Breadth First Search', () => {
      xdescribe('Worst case time complexity for the BFS shortest path is O(n)', noop);
      runTests(breadthFirstSearchShortestPath);
    });

    describe('Dynamic Programming', () => {
      xdescribe('Worst case time complexity for the dynamic programming shortest path is O(n)', noop);
      describe('Memoizing shortest path starting at the end of arr', () => {
        runTests(dynamicProgrammingShortestPath);
      });

      describe('Reversing arr then memoizing shortest path from start simplifies the logic', () => {
        runTests(dynamicProgrammingReversedShortestPath);
      });
    });

    describe('Recursive', () => {
      describe('Naive', () => {
        xdescribe('Worst case time complexity for the naive recursive shortest path is O(2^n)', noop);
        runTests(recursiveShortestPath);
      });

      describe('Memoized', () => {
        xdescribe('Worst case time complexity for the memoized recursive shortest path is O(n)', noop);
        runTests(recursiveMemoizedShortestPath);
      });
    });
  });
});
