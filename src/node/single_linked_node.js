/**
 * A node is the basic form of data structure.
 * It basically consists of a member variable which holds the value and the address of the next node
 */
export default class SingleLinkedNode {
  _value: any;
  _next: SingleLinkedNode | null;

  constructor(value?: any , next?: SingleLinkedNode){
    this._value = value || null;
    this._next = next || null;
  }

  get value() {
    return this._value;
  }

  set value(value: any) {
    this._value = value;
  }

  get next() {
    return this._next;
  }

  set next(next: SingleLinkedNode) {
    this._next = next;
  }
}