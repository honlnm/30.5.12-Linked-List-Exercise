/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  _get(idx) {
    let cur = this.head;
    let count = 0;

    while (cur !== null && count != idx) {
      count += 1;
      cur = cur.next;
    }

    return cur;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length = this.length + 1;
    }
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length = this.length + 1;
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) {
      return null;
    } else if (!this.head.next) {
      const currentNode = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return currentNode["val"];
    } else {
      let currentNode = this.head;
      while (currentNode.next.next) {
        currentNode = currentNode.next;
      }
      const popped = currentNode.next.val;
      currentNode.next = null;
      this.tail = currentNode;
      this.next = null;
      this.length = this.length - 1;
      return popped;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) {
      return null;
    } else if (!this.head.next) {
      const first = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return first["val"];
    } else {
      const first = this.head;
      const second = first.next;
      this.head = second;
      this.length = this.length - 1;
      return first["val"];
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currentNode = this.head;
    let count = 0;
    while (currentNode) {
      if (count === idx) {
        return currentNode["val"];
      }
      count++;
      currentNode = currentNode.next;
    }
    return -1;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let currentNode = this.head;
    let count = 0;
    while (currentNode) {
      if (count === idx) {
        currentNode["val"] = val;
      }
      count++;
      currentNode = currentNode.next;
    }
    return -1;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);

    let prev = this._get(idx - 1);

    let newNode = new Node(val);
    newNode.next = prev.next;
    prev.next = newNode;

    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let currentNode = this.head;
    let count = 0;
    if (!this.head) {
      return -1
    } else if (!this.head.next && idx === 0) {
      const removed = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return removed;
    } else {
      while (currentNode) {
        if (count === idx) {
          currentNode.next = currentNode.next.next;
        }
        count++;
        currentNode = currentNode.next;
      }
    }
    return -1;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (!this.head) {
      return 0
    }

    let currentNode = this.head;
    let sum = 0;

    while (currentNode) {
      sum += currentNode.val;
      currentNode = currentNode.next
    }
    let total = (sum / this.length)
    return total;
  }
}

module.exports = LinkedList;
