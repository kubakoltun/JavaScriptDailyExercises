function frequencies(s) {
  const occ = s.split('').reduce((a, c) => { a[c] = ~~a[c] + 1; return a; }, {});
  return Object.keys(occ).map(k => [k, occ[k]]);
}

class Node {
  constructor(value, frequency, left, right) {
    this.value = value;
    this.frequency = frequency;
    this.left = left;
    this.right = right;
  }
}

function buildTree(freqs) {
  let nodes = freqs.map(f => new Node(f[0], f[1])).sort((a, b) => b.frequency - a.frequency);
  
  while (nodes.length !== 1) {
    let right = nodes.pop();
    let left = nodes.pop();
    
    if (left.value && right.value && left.value > right.value) {
      const l = left;
      left = right;
      right = l;
    }
    
    const node = new Node(null, left.frequency + right.frequency, left, right);
    
    const index = nodes.findIndex(n => n.frequency < node.frequency);
    if (index === -1) {
      nodes.push(node);
    } else {
      nodes.splice(index, 0, node);
    }
  }
  
  return nodes[0];
}

function buildEncodingTable(tree) {
  const table = {};
  const stack = [];
  stack.push({ node: tree, path: '' });

  while (stack.length) {
    const current = stack.pop();
    
    if (current.node.value) {
      table[current.node.value] = current.path;
    } else {
      stack.push({ node: current.node.left, path: current.path + '0' });
      stack.push({ node: current.node.right, path: current.path + '1' });
    }
  }
  
  return table;
}

function decodeChar(tree, bits, index) {
  let current = tree;
  
  while (!current.value) {
    current = bits[index++] === '0' ? current.left : current.right;
  }
  
  return [current.value, index];
}

function encode(freqs,s) {
  if (freqs.length <= 1) {
    return null;
  }
  
  const tree = buildTree(freqs);
  const table = buildEncodingTable(tree);
  
  return s.split('').map(c => table[c]).join('');
}

function decode(freqs,bits) {
  if (freqs.length <= 1) {
    return null;
  }
  
  const tree = buildTree(freqs);
  let index = 0;
  let output = '';
  
  while (index < bits.length) {
    const [char, nextIndex] = decodeChar(tree, bits, index);
    output += char;
    index = nextIndex;
  }
  
  return output;
}
