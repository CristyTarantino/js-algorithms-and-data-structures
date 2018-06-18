import SingleLinkedNode from "./single_linked_node";

/**
 * Double linked node
 * It basically consists of a member variable which holds the value and the addresses of the next and previous nodes
 */
export default class DoubleLinkedNode<T:any> extends SingleLinkedNode<T> {
  _prev: ?DoubleLinkedNode<T>;

  constructor(value?: ?T , prev?: ?DoubleLinkedNode<T>, next?: ?DoubleLinkedNode<T>): void {
    super(value, next);
    this.prev = prev;
  }

  get prev(): ?DoubleLinkedNode<T> {
    return this._prev;
  }

  set prev(prev: ?DoubleLinkedNode<T>): void {
    if (prev && prev.constructor.name !== this.constructor.name){
      throw new Error(`next must be of type ${this.constructor.name}`);
    }

    this._prev = prev || null;
  }
}