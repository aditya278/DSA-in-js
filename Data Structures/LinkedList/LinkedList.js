// A Class for the Linked List
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addNewHeadNode (value) {
        const newNode = new Node(value, null);
        if(this.tail) {
            this.tail.next = newNode;
        }
        else {
            this.head = newNode;
        }
        this.tail = newNode;
    }

    addNewNodeAt(index, value) {
        const newNode = new Node(value, null);
        let ptr = this.head;
        let prev = null;
        let idx = 0;
        while(ptr) {
            if(idx === index) {
                prev.next = newNode;
                newNode.next = ptr.next;
            }
            idx++;
            prev = ptr;
            ptr = ptr.next;
        }
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

    deleteNodeByValue(value) {
        let prev = null;
        let ptr = this.head;
        while(ptr.next) {
            if(ptr.value === value) {
                prev.next = ptr.next;
                delete this.ptr;
                break;
            }
            else {
                prev = ptr;
                ptr = ptr.next;
            }
        }
    }
    
    updateValueAt(index, value) {
        let ptr = this.head;
        let idx = 0;
        while(ptr) {
            idx++;
            if(idx === index) {
                ptr.value = value;
                break;
            }
            ptr = ptr.next;
        }
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
    linkedList.addNewHeadNode(5);
    linkedList.addNewHeadNode(15);
    linkedList.addNewHeadNode(25);
    console.log(linkedList.traverse());
    linkedList.addNewHeadNode(35);
    linkedList.addNewNodeAt(2, 45);
    console.log("Before Update: " + linkedList.traverse());
    linkedList.updateValueAt(3,12);
    console.log("After Update: " + linkedList.traverse());
    linkedList.addNewHeadNode(55);
    console.log(linkedList.traverse());
    linkedList.deleteNodeByValue(35);
    console.log(linkedList.traverse());
}

main();