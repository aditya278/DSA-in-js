class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToHeadOrTail(value) {
        const newNode = new Node(this.tail, value, this.head);
        if(this.head) {
            this.head.prev = newNode;
            this.tail.next = newNode;
        }
        else {
            this.tail = newNode;
        }
        this.head = newNode;
    }

    traverse() {
        let list = [];
        let ptr = this.head;
        do {
            list.push(ptr.value);
            ptr = ptr.next;
        }while(ptr !== this.head);
        return list;
    }
}

class Node {
    constructor(prev, value, next) {
        this.prev = prev;
        this.value = value;
        this.next = next;
    }
}


function main() {
    const linkedList = new LinkedList();
    linkedList.addToHeadOrTail(10);
    linkedList.addToHeadOrTail(20);
    linkedList.addToHeadOrTail(30);
    console.log(linkedList.traverse());
}
main();