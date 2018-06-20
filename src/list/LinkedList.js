import Node from '../node/Node';

/**
 * A linked list is a sequence of nodes connected to each other by a link to the next and or previous node
 */
export default class LinkedList<T> {
  _head: ?Node<T>;
  _tail: ?Node<T>;
  _length: number;
  _type: string;

  constructor(){
    this._length = 0;
  }

  get head(): ?Node<T> {
    return this._head;
  }

  get tail(): ?Node<T> {
    return this._tail;
  }

  get length(): number {
    return this._length
  }

  addFront<T:any>(value: T):void{
    if(value){
      //create the new node
      let node: ?Node<T> = new Node(value);

      // if the list was empty then Head and Tail should both point to the new node.
      if (this._length) {

        // do not allow different types of Nodes
        if (value.constructor.name !== this._type) {
          throw new Error(`next must be of type ${this._type}`);
        }

        // $FlowFixMe https://github.com/facebook/flow/issues/5727
        node.next = this._head;
      } else {
        this._type = value.constructor.name;

        // $FlowFixMe https://github.com/facebook/flow/issues/5727
        this._tail = node;
      }

      this._head = node;
      this._length++;
    }
  }

  removeFront():void{
    if(this._head && this._length){
      if (this._length === 1){
        this._head = null;
        this._tail = null;
      } else {
        let current: Node<T> = this._head;

        this._head = this._head.next;

        current.next = null;
      }
      this._length--;
    }
  }

  addBack<T:any>(value: T):void{
    if(value){
      //create the new node
      let node: ?Node<T> = new Node(value);

      // if the list was empty therefore no tail
      if (this._tail && this._length) {

        // do not allow different types of Nodes
        if (value.constructor.name !== this._type) {
          throw new Error(`next must be of type ${this._type}`);
        }

        // then Head and Tail should both point to the new node.
        // $FlowFixMe https://github.com/facebook/flow/issues/5727
        this._tail.next = node;
      } else {
        this._type = value.constructor.name;
        this._head = node;
      }

      this._tail = node;
      this._length++;
    }
  }

  removeBack():void{
    if(this._head){
      if (this._length === 1){
        this._head = null;
        this._tail = null;
      } else {
        let current: Node<T> = this._head;

        while(current.next && current.next !== this._tail){
          current = current.next;
        }

        current.next = null;
        this._tail = current;

      }
      this._length--;
    }
  }

  includes<T:any>(value: T):boolean {
    if(this._head && value && (value: any).constructor.name === this._type) {
      // $FlowFixMe https://github.com/facebook/flow/issues/5727
      let current: ?Node<T> = this._head;

      while (current) {
        if (current.value === value) {
          return true;
        }
        current = current.next;
      }
    }

    return false;
  }

  remove(value: T):boolean {
    if(value && this._length && (value: any).constructor.name === this._type) {
      let previous: ?Node<T> = null;
      let current: ?Node<T> = this._head;

      while (current) {
        // 1: Empty list - do nothing
        // 2: Single node: (previous is null)
        // 3: Many nodes
        //    a: node to remove is the first node
        //    b: node to remove is the middle or last
        //    c: node to remove is the last node

        if (current.value === value) {
          if (previous)
          {
            // Case 3c
            if (!current.next)
            {
              this.removeBack();
            } else {
              // Case 3b
              // Before: Head -> 3 -> 5 -> 7
              // After:  Head -> 3 ------> 7
              previous.next = current.next;
              this._length--;
            }
          }
          else
          {
            // Case 2 or 3a
            this.removeFront();
          }

          return true;
        }

        previous = current;
        current = current.next;
      }
    }

    return false;
  }

  // make our class list iterable https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
  // $FlowFixMe https://github.com/facebook/flow/issues/3258
  *[Symbol.iterator]() {
    let current: ?Node<T> = this._head;
    while (current !== null) {
      yield current.value;
      current = current.next;
    }
  }

  clearList(){
    this._head = null;
    this._tail = null;
    this._length = 0;
  }
}