function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

// Add to head
LinkedList.prototype.addToHead = function (value) {
  var newNode = new Node(value, this.head, null);

  if (this.head) this.head.prev = newNode;
  else this.tail = newNode;

  this.head = newNode;
};

// Using Add to Head

let ll = new LinkedList();

ll.addToHead(100);
console.log('1-> '. ll);

ll.addToHead(200);
console.log('2-> ', ll);

ll.addToHead(300);
console.log('3-> ', ll);


// Add to Tail
LinkedList.prototype.addToTail = function (value) {
    var newNode = new Node(value, null, this.tail);

    if(this.tail) this.tail.next = newNode;
    else this.head = newNode;

    this.tail = newNode;
}

// Using Add to Head

ll.addToTail(80);
console.log('1-> '. ll);

ll.addToTail(50);
console.log('2-> ', ll);

ll.addToTail(30);
console.log('3-> ', ll);