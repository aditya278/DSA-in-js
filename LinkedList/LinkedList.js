// A Class for the Linked List
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addNewNode (value) {
        const newNode = new Node(value, null);
        if(this.tail) {
            this.tail.next = newNode;
        }
        else {
            this.head = newNode;
        }
        this.tail = newNode;
    }

    traverse () {
        let list = [];
        let ptr = this.head;
        while(ptr) {
            list.push(ptr.value);
            ptr = ptr.next;
        }
        return list;
    }

}

// A Node class defining the structure of the node
class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

function main() {
    const linkedList = new LinkedList();
    linkedList.addNewNode(5);
    linkedList.addNewNode(15);
    linkedList.addNewNode(25);
    console.log(linkedList.traverse());
    linkedList.addNewNode(35);
    linkedList.addNewNode(45);
    linkedList.addNewNode(55);
    console.log(linkedList.traverse());
}

main();