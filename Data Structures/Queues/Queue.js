// Implementing the Queue
class Queue {
    constructor(maxLength) {
        this.queue = [];
        this.maxLength = maxLength;
    }

    enqueue(value) {
        return this.queue.length === this.maxLength ? "Queue Overflow" : this.queue.push(value);
    }

    dequeue() {
        return this.queue.length === 0 ? "Queue Underflow" : this.queue.shift();
    }

    front() {
        return this.queue[0];
    }

    last() {
        return this.queue[this.queue.length - 1];
    }

    traverse() {
        const queue = [];
        this.queue.forEach(item => queue.push(item));
        return queue;
    }
}

// Initializing the Queue
const queue = new Queue(5);
console.log("Enqueuing.. " + queue.enqueue(5));
console.log("Enqueuing.. " + queue.enqueue(15));
console.log("Enqueuing.. " + queue.enqueue(25));
console.log("Enqueuing.. " + queue.enqueue(35));
console.log("Enqueuing.. " + queue.enqueue(45));
console.log("Enqueuing.. " + queue.enqueue(55));

console.log("First: " + queue.front());
console.log("Queue: " + queue.traverse());
console.log("Last: " + queue.last());

console.log("Dequeued: " + queue.dequeue());
console.log("Dequeued: " + queue.dequeue());
console.log("Dequeued: " + queue.dequeue());

console.log("First: " + queue.front());
console.log("Queue: " + queue.traverse());
console.log("Last: " + queue.last());

console.log("Dequeued: " + queue.dequeue());
console.log("Dequeued: " + queue.dequeue());
console.log("Dequeued: " + queue.dequeue());