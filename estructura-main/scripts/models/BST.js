class TreeNode {
    constructor(data) {
        this.data = data; 
        this.left = null; 
        this.right = null; 
    }
}

class BST {
    constructor() {
        this.root = null; 
    }

    insert(data) {
        if (this.search(data.id)) {
            return false;
        }
        const newNode = new TreeNode(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
        return true;
    }

    insertNode(node, newNode) {
        if (newNode.data.id < node.data.id) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    search(id) {
        return this.searchNode(this.root, id);
    }

    searchNode(node, id) {
        if (node === null) {
            return null;
        }
        if (id < node.data.id) {
            return this.searchNode(node.left, id);
        } else if (id > node.data.id) {
            return this.searchNode(node.right, id);
        } else {
            return node.data;
        }
    }

    findMin() {
        return this.findMinNode(this.root);
    }

    findMinNode(node) {
        if (node.left === null) {
            return node.data;
        } else {
            return this.findMinNode(node.left);
        }
    }

    findMax() {
        return this.findMaxNode(this.root);
    }

    findMaxNode(node) {
        if (node.right === null) {
            return node.data;
        } else {
            return this.findMaxNode(node.right);
        }
    }

    inOrder(callback) {
        this.inOrderTraversal(this.root, callback);
    }

    inOrderTraversal(node, callback) {
        if (node !== null) {
            this.inOrderTraversal(node.left, callback);
            callback(node.data);
            this.inOrderTraversal(node.right, callback);
        }
    }
}

export { BST, TreeNode };
