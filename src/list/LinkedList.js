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
      let node: Node<T> = new Node(value);

      // if the list was empty then Head and Tail should both point to the new node.
      if(!this._length){
        this._type = value.constructor.name;

        // $FlowFixMe https://github.com/facebook/flow/issues/5727
        this._tail = node;
      } else {

        // do not allow different types of Nodes
        if(value.constructor.name !== this._type) {
          throw new Error(`next must be of type ${this._type}`);
        }

        // $FlowFixMe https://github.com/facebook/flow/issues/5727
        node.next = this._head;
      }

      this._head = node;
      this._length++;
    }
  }

  removeFront():void{
    if(this._length !== 0){
      if (this._length === 1){
        this._head = null;
        this._tail = null;
      } else {
        let currentFront = this._head;
        // $FlowFixMe
        this._head = this.head.next;
        // $FlowFixMe
        currentFront.next = null;
      }
      this._length--;
    }
  }

  addBack<T:any>(value: T):void{
    if(value){
      //create the new node
      let node: Node<T> = new Node(value);

      // if the list was empty then Head and Tail should both point to the new node.
      if(!this._length){
        this._type = value.constructor.name;

        // $FlowFixMe https://github.com/facebook/flow/issues/5727
        this._head = node;
      } else {

        // do not allow different types of Nodes
        if(value.constructor.name !== this._type) {
          throw new Error(`next must be of type ${this._type}`);
        }

        // $FlowFixMe https://github.com/facebook/flow/issues/5727
        this._tail.next = node;
      }

      this._tail = node;
      this._length++;
    }
  }

  removeBack():void{
    if(this._length !== 0){
      if (this._length === 1){
        this._head = null;
        this._tail = null;
      } else {
        let currentBack: ?Node<T> = this._head;

        // $FlowFixMe https://github.com/facebook/flow/issues/5727
        while(currentBack.next !== this._tail){
          // $FlowFixMe https://github.com/facebook/flow/issues/5727
          currentBack = currentBack.next;
        }

        // $FlowFixMe https://github.com/facebook/flow/issues/5727
        currentBack.next = null;
        this._tail = currentBack;

      }
      this._length--;
    }
  }

  contains<T:any>(value: T):boolean {
    return true;
  }

  enumerate():string {
    let currentBack: ?Node<T> = this._head;
    let stringList = '';

    while(currentBack !== null){
      // $FlowFixMe https://github.com/facebook/flow/issues/5727
      stringList += currentBack.value.toString() + ', ';
      // $FlowFixMe https://github.com/facebook/flow/issues/5727
      currentBack = currentBack.next;
    }

    console.log(stringList);

    return stringList;
  }

  clearList(){
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

//
// public bool Contains(T item)
// {
//   LinkedListNode<T> current = Head;
//   while (current != null)
//   {
//     if (current.Value.Equals(item))
//     {
//       return true;
//     }
//
//     current = current.Next;
//   }
//
//   return false;
// }

// public bool Remove(T item)
// {
//   LinkedListNode<T> previous = null;
//   LinkedListNode<T> current = Head;
//
//   // 1: Empty list - do nothing
//   // 2: Single node: (previous is null)
//   // 3: Many nodes
//   //    a: node to remove is the first node
//   //    b: node to remove is the middle or last
//
//   while (current != null)
//   {
//     if (current.Value.Equals(item))
//     {
//       // it's a node in the middle or end
//       if (previous != null)
//       {
//         // Case 3b
//
//         // Before: Head -> 3 -> 5 -> null
//         // After:  Head -> 3 ------> null
//         previous.Next = current.Next;
//
//         // it was the end - so update Tail
//         if (current.Next == null)
//         {
//           Tail = previous;
//         }
//
//         Count--;
//       }
//       else
//       {
//         // Case 2 or 3a
//         RemoveFirst();
//       }
//
//       return true;
//     }
//
//     previous = current;
//     current = current.Next;
//   }
//
//   return false;
// }
}