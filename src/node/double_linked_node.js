import SingleLinkedNode from "./single_linked_node";

/**
 * Double linked node
 * It basically consists of a member variable which holds the value and the addresses of the next and previous nodes
 */
export default class DoubleLinkedNode extends SingleLinkedNode {
  _prev: DoubleLinkedNode | null;

  constructor(value?: any, prev?: DoubleLinkedNode, next?: DoubleLinkedNode){
    super(value, next);
    this._prev = prev || null;
  }

  get prev() {
    return this._prev;
  }

  set prev(prev: DoubleLinkedNode) {
    if (prev.constructor.name !== this.constructor.name) {
      throw new Error(`next must be of type ${this.constructor.name}`);
    }

    this._prev = prev;
  }
}