/**
 * A node is the basic form of data structure.
 * It basically consists of a member variable which holds the value and the address of the next node
 */
export default class SingleLinkedNode<T: any> {
  _value: ?T;
  _next: ?SingleLinkedNode<T>;

  constructor(value?: ?T , next?: ?SingleLinkedNode<T>): void {
    this.value = value;
    this.next = next;
  }

  get value(): ?T {
    return this._value;
  }

  set value(value: ?T): void {
    this._value = value || null;
  }

  get next(): ?SingleLinkedNode<T> {
    return this._next;
  }

  set next(next: ?SingleLinkedNode<T>): void {
    if (next && next.constructor.name !== this.constructor.name){
      throw new Error(`next must be of type ${this.constructor.name}`);
    }

    this._next = next || null;
  }
}