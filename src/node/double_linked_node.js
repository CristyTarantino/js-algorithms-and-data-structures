/**
 * A node is the basic form of data structure.
 * It basically consists of a member variable which holds the value and the address of the next node and previous node
 */
export default class DoubleLinkedNode {
  prev: DoubleLinkedNode | null;
  value: any;
  next: DoubleLinkedNode | null;

  constructor(value: any, prev?: DoubleLinkedNode, next?: DoubleLinkedNode){
    this.value = value;
    this.prev = prev || null;
    this.next = next || null;
  }
}