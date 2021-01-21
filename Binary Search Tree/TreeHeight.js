class Node {
    constructor(data, left = null, right = null) {
        this.left = left;
        this.data = data;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    add(data) {
        const node = this.root;
        if(!node) {
            this.root = new Node(data);
            return;
        }
        else {
            const searchTree = (node) => {
                if(data < node.data) {
                    // Search on the Left side
                    if(!node.left) {
                        node.left = new Node(data);
                        return;
                    }
                    else {
                        return searchTree(node.left);
                    }
                }
                else if(data > node.data) {
                    // Search on the Right Side
                    if(!node.right) {
                        node.right = new Node(data);
                        return;
                    }
                    else {
                        return searchTree(node.right);
                    }
                }
                else {
                    return null;
                }
            }
            return searchTree(node);
        }
    }

    //NEW CODE FROM HERE
    isBalanced() {
        return (this.findMinHeight() >= this.findMaxHeight() - 1);
    }

    //First node from top without any one of it's child
    findMinHeight(node = this.root) {
        if(node === null) {
            return -1;
        }

        const left = this.findMinHeight(node.left);
        const right = this.findMinHeight(node.right);

        if(left < right)
            return left + 1;
        else
            return right + 1;

    }

    //Last node from top
    findMaxHeight(node = this.root) {
        if(node === null) {
            return -1;
        }

        const left = this.findMaxHeight(node.left);
        const right = this.findMaxHeight(node.right);
        if(left > right)
            return left + 1;
        else
            return right + 1;
    }
}

const bst = new BST();

bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);


console.log(bst.isBalanced())
console.log(bst.findMinHeight())
console.log(bst.findMaxHeight())
bst.add(10);
console.log(bst.isBalanced())
console.log(bst.findMinHeight())
console.log(bst.findMaxHeight())