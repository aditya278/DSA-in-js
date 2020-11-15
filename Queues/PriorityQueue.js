// Along with the data, we also provide the priority of that entry in the queue
// If the priorities of all the elements are the same in the Queue then it works as a normal queue
// Otherwise, the elements having higher priority will be sent ahead in the queue
class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    printQueue() {
        return this.queue;
    }

    isEmpty() {
        return this.queue.length > 0 ? false : true;
    }

    enqueue(element) {
        if(this.isEmpty()) {
            this.queue.push(element);
        }
        else {
            let added = false;

            for(let i=0; i<this.queue.length; i++) {
                if(element[1] < this.queue[i][1]) {
                    this.queue.splice(i, 0, element);
                    added = true;
                    break;
                }
            }

            if(!added) {
                this.queue.push(element);
            }
        }
    }

    dequeue() {
        return this.queue.shift();
    }
}