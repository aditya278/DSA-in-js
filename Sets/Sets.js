class MySet {
    constructor() {
        this.collection = [];
    }

    // Returns all the values in the Set
    values() {
        return this.collection;
    }

    // Checks if the element is present in the set or not
    has(element) {
        return this.collection.includes(element);
    }

    // Add the element to the set (only when it is not already present in the set)
    add(element) {
        if(!this.has(element)) {
            this.collection.push(element);
            return true;
        }
        return false;
    }

    // Remove the element from the set
    remove(element) {
        if(this.has(element)) {
            this.collection.splice((this.collection.indexOf(element)), 1);
            return true;
        }
        return false;
    }

    // Return the size of the Set
    size() {
        return this.collection.length;
    }

    // Return the Union of two sets as a new Set
    union(otherSet) {
        let unionSet = new MySet();
        let firstSet = this.values();
        let secondSet = otherSet.values();
        firstSet.forEach(item => {
            unionSet.add(item);
        });
        secondSet.forEach(item => {
            unionSet.add(item);
        });
        return unionSet;
    }

    // Return the Intersection of two sets as a new Set
    intersection(otherSet) {
        let intersectionSet = new MySet();
        let firstSet = this.values();
        firstSet.forEach(item => {
            if(otherSet.has(item)) {
                intersectionSet.add(item);
            }
        });

        return intersectionSet;
    }

    // Return the difference (all the items that are in one set but not in other set) of two sets as a new Set
    difference(otherSet) {
        let diffSet = new MySet();
        let firstSet = this.values();
        firstSet.forEach(item => {
            if(!otherSet.has(item)) {
                diffSet.add(item);
            }
        });
        return diffSet;
    }

    // Return true if the set is a subset of the given set
    subset(otherSet) {
        let firstSet = this.values();
        let isSubset = true;
        firstSet.forEach(item => {
            if(!otherSet.has(item)) {
                isSubset = false;
                return;
            }
        });
        return isSubset;
    }
}

let setA = new MySet();
let setB = new MySet();

setA.add('a');
setB.add('b');
setB.add('c');
setB.add('d');
setB.add('a');

console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());
