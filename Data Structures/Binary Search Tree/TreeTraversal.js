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

    //Left - Center - Right : Inorder
    inOrder() {
        if(this.root === null) {
            return null;
        }
        const result = [];
        
        function traverseInOrder(node) {
            if(node.left)
                traverseInOrder(node.left);
            result.push(node.data);
            if(node.right)
                traverseInOrder(node.right)
        }
        traverseInOrder(this.root);
        return result;
    }

    //Center - Left - Right : PreOrder
    preOrder() {
        if(this.root === null)
            return null;

        const result = [];

        function traversePreOrder(node) {
            result.push(node.data);
            node.left && traversePreOrder(node.left);
            node.right && traversePreOrder(node.right);
        }

        traversePreOrder(this.root);
        return result;
    }

    //Left - Right - Center : PostOrder
    preOrder() {
        if(this.root === null)
            return null;

        const result = [];

        function traversePostOrder(node) {
            node.left && traversePostOrder(node.left);
            node.right && traversePostOrder(node.right);
            result.push(node.data);
        }

        traversePostOrder(this.root);
        return result;
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
bst.add(10);

console.log(bst.inOrder());
console.log(bst.preOrder());