/*******
 * 
 * 
 * Simple Binary Tree implementation with Javascript ES6
 * 
 * 
 ******/


/**
 * Add Node to the tree
 */
const addNode = (val) => {
  return {
    value: val,
    left: null,
    right: null
  }
};

const node = {
  root : null,
  add : (val) => {
    const nd = addNode(val);
    if(!node.root) return node.root = nd;
    let currentNode = node.root;
    while(currentNode){
      if(val < currentNode.value) {
        if(currentNode.left){
          currentNode = currentNode.left;
        }
        else {
          return currentNode.left = nd;
        }
      }
      else {
        if(currentNode.right){
          currentNode= currentNode.right;
        }
        else {
          return currentNode.right = nd;
        }
      }
    }
  },
  /**
   * Works for unbalanced and balanced BT
   */
  largestValue: (tree) => {
    if(!tree)
        return null;
    if(!tree.left && !tree.right)
      return tree.value;
    
    let lh = null, rh = null;

    if(tree.left)
        lh = node.largestValue(tree.left);

    if(tree.right)
        rh = node.largestValue(tree.right);
    
    if(lh > rh && lh > tree.value)
        return lh;

    if(rh > lh && rh > tree.value)
        return rh;
    
    return tree.value;
  },
  lowestValue: (tree) => {
    if(!tree)  
        return null;

    if(!tree.left && !tree.right)
        return tree.value;

    // Recursive function to get the lowest value on the different branches
    let ll = null, rl = null;
    if(tree.left)
      ll = node.lowestValue(tree.left);

    if(tree.right)
       rl = node.lowestValue(tree.right);
    
    // Compare ll and rr and current value - Need to check that ll is a number
    if(typeof ll === 'number' && ll < rl && ll < tree.value)
        return ll;

    if(typeof rl === 'number' && rl < ll && rl < tree.value)
        return rl;
    // Neither ll and rr are the lowest, return the current value.
    return tree.value;
  },

  /**
   * Works just for balanced BT
   */
  minValue: () => {
    if(!node.root) return null;
    let current = node.root;
    while(current.left){
      current = current.left;
    }
    return current.value;
  },
  maxValue: () => {
    if(!node.root) return null;
    let current = node.root;
    while(current.right){
      current = current.right;
    }
    return current.value;
  }
}

// Force unbalanced tree
node.root = {
  value:4,
  right:{
    value: 11,
    right:{
      value: 13
    },
    left:{value:10}
  },
  left:{
    value:4,
    right:{
      value:5
    },
    left:{
      value:2,
      left:{
        value:8
      }
    }
  }
};

// Or create balanced tree (Comment the previous node.root)
//node.add(4);
//node.add(8);
//node.add(2);
//node.add(5);
//node.add(3);