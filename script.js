class LinkedList {
  constructor() {
    this.tail = newNode(null, null);
    this.head = newNode(null, this.tail);
  }

  countNodes() {
    let numberOfNodes = 0;
    let currentNode = this.head.nextNode;
    while (currentNode.nextNode != null) {
      numberOfNodes++;
      currentNode = currentNode.nextNode;
    }
    return numberOfNodes;
  }

  firstNode() {
    return this.head.nextNode;
  }

  lastNode() {
    return this.findLastNode();
  }

  at(index) {
    let currentNode = this.head;
    while (index <= 0) {
      if (currentNode.nextNode == null) {
        return "Index does not exist";
      } else {
        currentNode = currentNode.nextNode;
        index--;
      }
      return currentNode;
    }
  }

  pop() {
    let currentNode = this.head;
    let previousNode;
    let previousPreviousNode;

    while (currentNode.nextNode != null) {
      previousPreviousNode = previousNode;
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    previousPreviousNode.nextNode = currentNode;
    return previousNode;
  }

  contains(value) {
    let currentNode = this.head.nextNode;
    while (currentNode.nextNode != null) {
      if (currentNode.value == value) {
        return true;
      } else currentNode = currentNode.nextNode;
    }
    return false;
  }

  find(value) {
    let currentNode = this.head.nextNode;
    while (currentNode.nextNode != null) {
      if (currentNode.value == value) {
        return currentNode;
      } else currentNode = currentNode.nextNode;
    }
    return "Node not found";
  }

  printList() {
    if (this.countNodes() == 0) {
      console.log("List is empty");
    } else {
      let currentNode = this.head.nextNode;
      let nodeString = "( " + currentNode.value + " ) -> ";
      currentNode = currentNode.nextNode;
      while (currentNode.nextNode != null) {
        nodeString += "( " + currentNode.value + " ) -> ";
        currentNode = currentNode.nextNode;
      }
      nodeString += "null";
      console.log(nodeString);
    }
  }

  findLastNode() {
    let currentNode = this.head;
    let previousNode;

    while (currentNode.nextNode != null) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }

    return previousNode;
  }

  append(value) {
    const oldLastNode = this.findLastNode();
    oldLastNode.nextNode = newNode(value, this.tail);
  }

  prepend(value) {
    const oldFirstNode = this.head.nextNode;
    this.head.nextNode = newNode(value, oldFirstNode);
  }
}

const newNode = (value, nextNode) => {
  return { value, nextNode };
};
