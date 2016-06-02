const noop = () => {};
const PROBLEM = `/**
 * Return shortest path for array, arr
 *
 * Values of arr are the max steps forward allowed from
 * that position in the array. The shortest path is the
 * minimum number of of segments needed to advance past
 * the end of arr.
 */
function shortestPath(arr) {
  // Implementation
}`;

const HINT = `Paths for arr [1, 3, 2, 1, 2, 0, 3, 1] can be represented as a directed graph:

                                  0                      
                                 (1)                     
                                  │                      
                                  1                      
                               (2,3,4)                   
            ┌─────────────────────┼───────────┐          
            2                     3           4          
          (3,4)                  (4)        (5,6)        
      ┌─────┴─────┐               │       ┌───┴───┐      
      3           4               4       5       6      
     (4)        (5,6)           (5,6)    ( )    (7,X)    
      │       ┌───┴───┐       ┌───┴───┐       ┌───┴───┐  
      4       5       6       5       6       7       X  
    (5,6)    ( )    (7,X)    ( )    (7,X)    (X)         
  ┌───┴───┐       ┌───┴───┐       ┌───┴───┐   │          
  5       6       7       X       7       X   X          
 ( )    (7,X)    (X)             (X)                     
      ┌───┴───┐   │               │                      
      7       X   X               X                      
     (X)                                                 
      │                                                  
      X                                                  
`;

function breadthFirstSearchShortestPath(arr) {
  const target = arr.length;
  const seen = new Set();
  let steps = 1;
  let queue = target ? [0] : [];
  while (queue.length) {
    let next = [];
    for (let position of queue) {
      if (!seen.has(position)) {
        const stepSize = arr[position];
        if (target - position <= stepSize) {
          return steps;
        }
        for (let i = position + 1; i <= stepSize + position; i++) {
          next.push(i);
        }
        seen.add(position);
      }
    }
    steps++;
    queue = next;
  }
}

function dynamicProgrammingShortestPath(arr) {
  const target = arr.length;
  const memo = [];
  for (let end = 1; end <= target; end++) {
    const position = target - end;
    const stepSize = arr[position];
    if (end <= stepSize) {
      memo[position] = 1;
    } else {
      // Slicing will cause worst case O(n) extra space requirement (used for simplicity)
      let minSteps = Math.min(...memo.slice(position + 1, position + stepSize + 1).filter((i) => i));
      memo[position] = minSteps === Infinity ? undefined : minSteps + 1;
    }
  }
  return memo[0];
}

function dynamicProgrammingReversedShortestPath(arr) {
  const reversed = arr.slice().reverse();
  const target = reversed.length;
  reversed.forEach((stepSize, position) => {
    if (stepSize === 0) {
      reversed[position] = undefined;
    } else if (stepSize > position) {
      reversed[position] = 1;
    } else {
      // Slicing will cause worst case O(n) extra space requirement (used for simplicity)
      let minSteps = Math.min(...reversed.slice(position - stepSize, position).filter((i) => i));
      reversed[position] = minSteps === Infinity ? undefined : minSteps + 1;
    }
  });
  return reversed[target - 1];
}

function recursiveShortestPath(arr, position = 0) {
  const target = arr.length;
  if (position < target && arr[position] !== 0) {
    const stepSize = arr[position];
    if (target - position <= stepSize) {
      return 1;
    }
    let shortest = 0;
    for (let i = position + 1; i <= position + stepSize; i++) {
      const steps = recursiveShortestPath(arr, i);
      if (steps) {
        if (!shortest) {
          shortest = steps;
        } else {
          shortest = Math.min(steps, shortest);
        }
      }
    }
    return shortest ? shortest + 1 : undefined;
  }
}

function recursiveMemoizedShortestPath(arr) {
  function memoize(fn) {
    const memo = Object.create(null);
    return function(arr, position) {
      if (!(position in memo)) {
        memo[position] = fn(arr, position);
      }
      return memo[position];
    };
  }

  function shortestPath(arr, position = 0) {
    const target = arr.length;
    if (position < target && arr[position] !== 0) {
      const stepSize = arr[position];
      if (target - position <= stepSize) {
        return 1;
      }
      let shortest = 0;
      for (let i = position + 1; i <= position + stepSize; i++) {
        const steps = shortestPath(arr, i);
        if (steps) {
          if (!shortest) {
            shortest = steps;
          } else {
            shortest = Math.min(steps, shortest);
          }
        }
      }
      return shortest ? shortest + 1 : undefined;
    }
  }
  return (shortestPath = memoize(shortestPath))(arr);
}
