import Node from "./Node";

/**
 * Double linked node
 * It basically consists of a member variable which holds the value and the addresses of the next and previous nodes
 */
export default class DoublyLinkedNode<T:any> extends Node<T> {
  _prev: ?DoublyLinkedNode<T>;

  constructor(value?: ?T , prev?: ?DoublyLinkedNode<T>, next?: ?DoublyLinkedNode<T>): void {
    super(value, next);
    this.prev = prev;
  }

  get prev(): ?DoublyLinkedNode<T> {
    return this._prev;
  }

  set prev(prev: ?DoublyLinkedNode<T>): void {
    if (prev && prev.constructor.name !== this.constructor.name){
      throw new Error(`next must be of type ${this.constructor.name}`);
    }

    this._prev = prev || null;
  }
}