xdescribe('PROBLEM:', () => {
  xdescribe(PROBLEM, noop);
});

describe('Queue Using Stacks', () => {
  let queue;
  describe('Constructor', () => {
    beforeEach(() => {
      queue = new Queue();
    });

    it('Should construct an empty Queue', () => {
      expect(queue.size).toBe(0);
    });
  });

  describe('#enqueue', () => {
    beforeEach(() => {
      queue = new Queue();
    });

    it('Should increment size', () => {
      queue.enqueue(1);
      expect(queue.size).toBe(1);
      queue.enqueue(1);
      expect(queue.size).toBe(2);
      queue.enqueue(4);
      expect(queue.size).toBe(3);
    });
  });

  describe('#dequeue', () => {
    beforeEach(() => {
      queue = new Queue();
    });

    describe('When queue is empty', () => {
      it('Should be undefined', () => {
        expect(queue.dequeue()).toBeUndefined();
      });

      it('Should not decrement size', () => {
        expect(queue.size).toBe(0);
        queue.dequeue();
        expect(queue.size).toBe(0);
      });
    });

    describe('When queue has elements', () => {
      beforeEach(() => {
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        queue.enqueue(5);
        queue.enqueue(6);
      });

      it('Should return elements in FIFO order', () => {
        expect(queue.dequeue()).toBe(1);
        expect(queue.dequeue()).toBe(2);
        expect(queue.dequeue()).toBe(3);
        expect(queue.dequeue()).toBe(4);
        expect(queue.dequeue()).toBe(5);
        expect(queue.dequeue()).toBe(6);
      });

      it('Should decrement size until queue is empty', () => {
        expect(queue.size).toBe(6);
        queue.dequeue();
        expect(queue.size).toBe(5);
        queue.dequeue();
        expect(queue.size).toBe(4);
        queue.dequeue();
        expect(queue.size).toBe(3);
        queue.dequeue();
        expect(queue.size).toBe(2);
        queue.dequeue();
        expect(queue.size).toBe(1);
        queue.dequeue();
        expect(queue.size).toBe(0);
        queue.dequeue();
        expect(queue.size).toBe(0);
      });
    });
  });

  describe('Mixed enqueue and dequeue operations', () => {
    beforeEach(() => {
      queue = new Queue();
    });

    it('Should return elements correctly in FIFO order', () => {
      const dequeued = [];

      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      dequeued.push(queue.dequeue());
      dequeued.push(queue.dequeue());

      queue.enqueue(4);
      queue.enqueue(5);

      dequeued.push(queue.dequeue());
      dequeued.push(queue.dequeue());

      queue.enqueue(6);

      dequeued.push(queue.dequeue());
      dequeued.push(queue.dequeue());

      expect(dequeued).toEqual([1,2,3,4,5,6]);
    });
  });
});
