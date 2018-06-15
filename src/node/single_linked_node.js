/**
 * A node is the basic form of data structure.
 * It basically consists of a member variable which holds the value and the address of the next node
 */
export default class SingleLinkedNode {
  _value: any;
  _next: SingleLinkedNode | null;
  _type: string;

  constructor(value?: any , next?: SingleLinkedNode){
    this._value = value || null;
    this._next = next || null;
    if (value){
      this._type = value.constructor.name;
    }
  }

  get value() {
    return this._value;
  }

  set value(value: any) {
    if (!this._type){
      this._type = value.constructor.name;
    } else if (value.constructor.name !== this._type) {
      throw new Error(`the value specified is not of type ${this._type}` );
    }

    this._value = value;
  }

  get next() {
    return this._next;
  }

  set next(next: SingleLinkedNode) {
    if (next.constructor.name !== this.constructor.name) {
      throw new Error(`next must be of type ${this.constructor.name}`);
    }

    this._next = next;
  }
}