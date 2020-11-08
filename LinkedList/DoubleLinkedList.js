class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToHead(value) {
        const newNode = new Node(null, value, this.head);
        if(this.head) {
            this.head.prev = newNode;
        }
        else {
            this.tail = newNode;
        }
        this.head = newNode;
    }

    addToTail(value) {
        const newNode = new Node(this.tail, value, null);
        if(this.tail) {
            this.tail.next = newNode;
        }
        else {
            this.head = newNode;
        }
        this.tail = newNode;
    }

    addNewNodeAt(index, value) {
        const newNode = new Node(this.tail, value, this.head);
        let ptr = this.head;
        let idx = 0;
        while(ptr) {
            if(idx === index) {
                newNode.prev = ptr.prev;
                newNode.next = ptr.next;
                
            }
            idx++;
            ptr = ptr.next;
        }
    }

    traverse(order = 'asc') {
        let list = [];
        if(order === 'asc') {
            let ptr = this.head;
            while(ptr) {
                list.push(ptr.value);
                ptr = ptr.next;
            }
            return list;
        }
        else {
            let ptr = this.tail;
            while(ptr) {
                list.push(ptr.value);
                ptr = ptr.prev;
            }
            return list;
        }
    }

    deleteNodeByValue(value) {
        let ptr = this.head;
        while(ptr.next) {
            if(ptr.value === value) {
                ptr.prev.next = ptr.next;
                ptr.next.prev = ptr.prev;
                delete this.ptr;
                break;
            }
            ptr = ptr.next;
        }
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
    linkedList.addToHead(10);
    linkedList.addToHead(20);
    linkedList.addToHead(30);
    linkedList.addToHead(40);
    console.log(linkedList.traverse());
    console.log(linkedList.traverse('desc'));
    linkedList.addToTail(50);
    linkedList.addToTail(60);
    console.log(linkedList.traverse());
    console.log(linkedList.traverse('desc'));
    linkedList.deleteNodeByValue(20);
    console.log(linkedList.traverse());
}
main();