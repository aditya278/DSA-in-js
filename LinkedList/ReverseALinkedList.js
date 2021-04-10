/**
 * Input: Head of following linked list 
 * 1->2->3->4->NULL 
 * Output: Linked list should be changed to, 
 * 4->3->2->1->NULL
 */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addNewHeadNode(newValue) {
        const newNode = new Node(newValue);
        newNode.next = this.head;
        this.head = newNode;
    }

    reverseList() {
        let prev = null;
        let current = this.head;
        while(current !== null) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }

    printList() {
        let temp = this.head;
        while(temp !== null) {
            console.log(temp.value);
            console.log(' -> ');
            temp = temp.next;
        }
        console.log(' NULL ');
    }
}

function main() {
    const myLinkedList = new LinkedList();
    myLinkedList.addNewHeadNode(10);
    myLinkedList.addNewHeadNode(8);
    myLinkedList.addNewHeadNode(6);
    myLinkedList.addNewHeadNode(4);
    myLinkedList.addNewHeadNode(2);

    myLinkedList.printList();
    myLinkedList.reverseList();
    myLinkedList.printList();
}

main();