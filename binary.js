function Node(value){
	this.value = value;
	this.left = null;
	this.right = null;
}

/**
 * DEPTH FIRST SEARCH
 * */

function walk_bfs(root){
	if(root === null) return;
	
	const queue = [root];
	const ans = [];
	while(queue.length){
		const len = queue.length;
		const level = [];
		for(let i=0; i<len; i++){
			
			const item = queue.shift();
			level.push(item);
			if(item.left) queue.push(item.left);
			if(item.right) queue.push(item.right);
		}
		ans.push(level);
	}
	return ans;
}

//const data = walk_bfs(root);


class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(value) {
	    const newNode = new Node(value);
	    if (this.root === null) {
		    this.root = newNode;
		    return this;
	    }
	    let curr = this.root;
	    while (true) {
		    if (value === curr.value) return undefined;
		    if (value < curr.value) {
			    if (curr.left === null) {
				    curr.left = newNode;
				    return this;
			    }
			    curr = curr.left;
		    } else {
			    if (curr.right === null) {
				    curr.right = newNode;
				    return this;
			    }
			    curr = curr.right;
		    }
	    }
	}

	find(value){
		if(this.root === null) return false;
		let curr = this.root;
		let found = false;
		while(curr && !found){
			if(value < curr.value){
				curr = curr.left;
			}else if(value > curr.value){
				curr = curr.right;
			}else{
				found = true;
			}
		}
		if(!found) return undefined;
		return curr;
	}

	inOrderTraversal(node = this.root, result = []) {
		if (node !== null) {
			this.inOrderTraversal(node.left, result);
			result.push(node.value);
			this.inOrderTraversal(node.right, result);
		}
		return result;
	}
	preOrderTraversal(node = this.root, result = []) {
		if (node !== null) {
			result.push(node.value);
			this.preOrderTraversal(node.left, result);
			this.preOrderTraversal(node.right, result);
		}
		return result;
	}
	postOrderTraversal(node = this.root, result = []) {
		if (node !== null) {
			this.postOrderTraversal(node.left, result);
			this.postOrderTraversal(node.right, result);
			result.push(node.value);
		}
		return result;
	}
}

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(5);

console.log(JSON.stringify(bst, null, 2));

const rs = bst.find(10);
console.log(rs);

console.log("In-order Traversal:", bst.inOrderTraversal());
console.log("Pre-order Traversal:", bst.preOrderTraversal());
console.log("Post-order Traversal:", bst.postOrderTraversal());
