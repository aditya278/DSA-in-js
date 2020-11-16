// Unlike a Tree Data Structure, a Binary Search Tree only has a maximum of 2 child nodes to every parent node
// Each Left Sub Tree is less than or equal to the parent node, and each right sub tree is greater than or equal
// the parent node. Since it uses Binary Search Principle, on average the operations skips half of the tree
// So each operation takes log(n)

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

    findMin() {
        // left most child node of the BST is the Min node
        let currentNode = this.root;
        while(currentNode.left) {
            currentNode = currentNode.left;
        }
        return currentNode;
    }

    findMax() {
        // Right Most child node of the BST is the Max node
        let currentNode = this.root;
        while(currentNode.right) {
            currentNode = currentNode.right;
        }
        return currentNode;
    }

    isPresent(data) {
        let currentNode = this.root;
        while(currentNode) {
            if(currentNode.data === data) {
                return true;
            }
            else if(currentNode.data > data) {
                // Search on the Left Side
                currentNode = currentNode.left;
            }
            else {
                // Search on the right side
                currentNode = currentNode.right;
            }
        }
        return false;
    }

    remove(data) {
        const removeNode = (node, data) => {
            // If the Tree is empty
            if(!node)
                return null;
            
                
            if(data < node.data) {
                // Data is in Left sub tree
                node.left = removeNode(node.left, data);
                return node;
            }
            else if(data > node.data) {
                node.right = removeNode(node.right, data);
                return node;
            }
            else {
                // If the selected node does not have any child
                if(node.left === null && this.right === null)
                    return null;
                
                // If node has no left child, then replace the reference node with the right child
                if(!node.left)
                    return node.right;
                
                // If node has no right child, then replace the reference node with the left child
                if(!node.right)
                    return node.left;

                // If node has both the childs, then replace the reference with the left most child of the right sub tree of the node
                let tempNode = node.right;
                while(tempNode.left) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            }
        }
        // Remove the "data" node, by starting to look from the root of the tree
        this.root = removeNode(this.root, data);
    }
}

const bst = new BST();

bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(7);
bst.remove(4);

console.log(bst.findMin());
console.log(bst.findMax());
bst.remove(7);
console.log(bst.findMax());
console.log(bst.isPresent(4));