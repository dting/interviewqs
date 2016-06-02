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
