const noop = () => {};
const PROBLEM = `/**
 * Implement a queue using only provided Stack class
 *
 * FIFO (First In First Out)
 */
class Queue {
  constructor() {
    this.size = 0;
    // Your code
  }

  enqueue(element) {
    // Your code
  }

  dequeue() {
    // Your code
  }
}

/**
 * Provided Stack class
 *
 * LIFO (Last In First Out)
 */
class Stack {
  constructor() {
    this.size = 0;
    this.data = [];
  }

  push(element) {
    this.data.push(element);
  }

  pop() {
    return this.data.pop();
  }
}
`;
