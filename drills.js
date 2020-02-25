//Creating a singly linked list
const LinkedList = require('./LinkedList');
const SLL = new LinkedList();

const main = function(list) {
    list.insertLast('Apollo');
    list.insertLast('Boomer');
    list.insertLast('Helo');
    list.insertLast('Husker');
    list.insertLast('Starbuck');
    list.insertFirst('Tauhida');
    list.remove('Husker');
    list.insertBefore('Athena', 'Boomer');
    list.insertAfter('Hotdog', 'Helo');
    list.insertAt('Kat', 2);
    list.remove('Tauhida');
    return list;
};
console.log(main(SLL));

//Supplemental functions for a linked list
const display = function(list) {
    const displayNodes = [];
    if (list.head === null) {
      console.log('nothing to display!');
      return;
    };
    let currNode = list.head;
    while (currNode !== null) {
      displayNodes.push(currNode.value);
      currNode = currNode.next;
    };
    return displayNodes;
  };
  console.log(display(SLL));
  
  const size = function(list) {
    let listSize = 0;
    if (list.head === null) {
      console.log('no list!');
      return;
    };
    let currNode = list.head;
    while (currNode !== null) {
      listSize++;
      currNode = currNode.next
    };
    return `The size of the list is ${listSize}.`;
  };
  console.log(size(SLL));
  
  const isEmpty = function(list) {
    if (list.head === null) {
      return 'The list is empty!';
    } else {
      return 'The list is not empty!';
    };
  };
  console.log(isEmpty(SLL));
  
  const findPrevious = function(list, beforeItem) {
    if (list.head === null) {
      console.log('no list!');
      return;
    };
    let currNode = list.head;
    let prevNode = list.head;
    while ((currNode !== null) && (currNode.value !== beforeItem)) {
      prevNode = currNode;
      currNode = currNode.next;
    };
    if (currNode === null) {
      return 'item not found!';
    };
    return `The item before ${beforeItem} is ${prevNode.value}.`;
  };
  console.log(findPrevious(SLL, 'Athena'));
  
  const findLast = function(list) {
    if (list.head === null) {
      console.log('no list!');
      return;
    };
    let currNode = list.head;
    while (currNode.next !== null) {
      currNode = currNode.next;
    };
    return `The last item in the list is ${currNode.value}.`;
  };
  console.log(findLast(SLL));

//Mystery program
//This function removes duplicate values from the linked list.
//Polynomial time O(n^2) - inputs are run through and compared to all other inputs

//Reverse a list
const reverseList = function(list) {
    if (list.head === null) {
      console.log('no list!');
      return;
    };
    let currNode = list.head;
    while (currNode !== null) {
      list.remove(currNode.value);
      list.insertFirst(currNode.value);
      currNode = currNode.next;
    };
    return list;
  };
  reverseList(SLL);
  console.log(display(SLL));

//3rd from the end
const thirdFromEnd = function(list) {
  if (list.head === null) {
    console.log('no list!');
    return;
  };
  if (list.head.next.next === null) {
    console.log('not enough items in the list!');
    return;
  }
  let currNode = list.head;
  let prevNode = list.head;
  let prevPrevNode = list.head;
  while ((currNode.next !== null)) {
    prevPrevNode = prevNode;
    prevNode = currNode;
    currNode = currNode.next;
  };
  return `The third value from the end is ${prevPrevNode.value}.`
};
console.log(thirdFromEnd(SLL));

//Middle of a list
const middle = function(list) {
    if (list.head === null) {
      console.log('no list!');
      return;
    };
    let count = 0;
    let currNode = list.head;
    while (currNode !== null) {
      count++
      currNode = currNode.next;
    };
    const middle = Math.ceil(count / 2);
    currNode = list.head;
    count = 1;
    while (count < middle) {
      currNode = currNode.next;
      count++;
    }
    return `The middle item is ${currNode.value}.`
  };
  console.log(middle(SLL));
  
//Cycle in a list

//Sorting a list