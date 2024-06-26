// Implementing the Stack
class Stack {
    constructor(maxLength = Number.MAX_SAFE_INTEGER) {
        this.stack = [];
        this.maxLength = maxLength;
    }

    push(value) {
        return this.isFull() ? "Stack Overflow" : this.stack.push(value);
    }

    pop() {
        return this.isEmpty() ? "Stack Underflow" : this.stack.pop();
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0 ? true : false;
    }

    isFull() {
        return this.stack.length  === this.maxLength ? true : false;
    }

    traverse() {
        const stack = [];
        this.stack.forEach(item => stack.push(item));
        return stack;
    }
}

// Initializing the Stack
const maxLength = 5;
const stack = new Stack(maxLength);

console.log("Pushing.. " + stack.push(5));
console.log("Pushing.. " + stack.push(15));
console.log("Pushing.. " + stack.push(25));
console.log("Pushing.. " + stack.push(35));
console.log("Pushing.. " + stack.push(45));
console.log("Pushing.. " + stack.push(55));

console.log("Peek: " + stack.peek());
console.log("Stack: " + stack.traverse());

console.log("Popped: " + stack.pop());
console.log("Popped: " + stack.pop());
console.log("Popped: " + stack.pop());

console.log("Stack: " + stack.traverse());
console.log("Peek: " + stack.peek());

console.log("Popped: " + stack.pop());
console.log("Popped: " + stack.pop());
console.log("Popped: " + stack.pop());