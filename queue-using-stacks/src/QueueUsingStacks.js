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

/**
 * Provided Stack class
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

class Queue {
  constructor() {
    this.size = 0;
    this.stackIn = new Stack();
    this.stackOut = new Stack();
  }

  enqueue(element) {
    this.size++;
    this.stackIn.push(element);
  }

  dequeue() {
    if (this.size) {
      if (!this.stackOut.size) {
        while (this.stackIn.size) {
          this.stackOut.push(this.stackIn.pop());
        }
      }
      this.size--;
      return this.stackOut.pop();
    }
  }
}
