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
    this.data = [];
    this.size = 0;
  }

  push(element) {
    this.data.push(element);
    this.size++;
  }

  pop() {
    this.size--;
    return this.data.pop();
  }
}
`;
