class Queue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    enQueue(value) {

        while(this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }

        this.stack1.push(value);

        while(this.stack2.length > 0) {
            this.stack1.push(this.stack2.pop());
        }
    }

    deQueue() {
        return this.stack1.length > 0 ? this.stack1.pop() : "Queue Underflow";
    }

    front() {
        return this.stack1.length > 0 ? this.stack1[0] : "Queue Empty";
    }

    rear() {
        return this.stack1.length > 0 ? this.stack1[this.stack1.length - 1] : "Queue Empty";
    }

}

const q = new Queue();
q.enQueue(5);
q.enQueue(15);
q.enQueue(25);
q.enQueue(35);
console.log(q.deQueue());
console.log(q.deQueue());
console.log(q.deQueue());
console.log(q.deQueue());
console.log(q.deQueue());