class ThisQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(value) {
        return this.queue.length === this.maxLength ? "Queue Overflow" : this.queue.push(value);
    }

    dequeue() {
        return this.queue.length === 0 ? "Queue Underflow" : this.queue.shift();
    }

    len() {
        return this.queue.length;
    }

    first() {
        return this.queue[0];
    }

    last() {
        return this.queue[this.queue.length - 1];
    }
}

class Stack {
    constructor() {
        this.queue1 = new ThisQueue();
        this.queue2 = new ThisQueue();
    }

    push(value) {
        // Enqueue to Queue2
        this.queue2.enqueue(value);

        while(this.queue1.len() > 0) {
            this.queue2.enqueue(this.queue1.dequeue());
        }

        [this.queue1, this.queue2] = [this.queue2, this.queue1];
    }

    pop() {
        return this.queue1.dequeue();
    }

    peek() {
        return this.queue1.first();
    }
}

const s = new Stack();
s.push(5);
s.push(15);
s.push(25);
console.log("Peek: " + s.peek());
console.log(s.pop());
console.log(s.pop());
console.log(s.pop());