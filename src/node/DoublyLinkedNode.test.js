import { expect } from "chai";
import DoublyLinkedNode from "./DoublyLinkedNode";
import Node from "./Node";

describe('DoublyLinkedNode', function () {
  it ('should create a DoublyLinkedNode with null prev reference', function(){
    // +------+------+------+
    // | null | null | null |
    // +------+------+------+
    let first: DoublyLinkedNode<number> = new DoublyLinkedNode();

    expect(first).to.be.an.instanceof(DoublyLinkedNode);
    expect(first).to.be.an.instanceof(Node);
  });
  it ('should create a DoublyLinkedNode with null property prev', function(){
    // +------+------+------+
    // | null |   3  | null |
    // +------+------+------+
    let first: DoublyLinkedNode<number> = new DoublyLinkedNode(3);

    expect(first).to.have.property('prev', null);
  });
  it('should allow to create 2 DoublyLinkedNodes linked to each other', function () {

    // 1. ARRANGE
    // +------+------+------+
    // | null |   3  | null |
    // +------+------+------+
    let first: DoublyLinkedNode<number> = new DoublyLinkedNode(3);

    // +------+------+------+    +------+------+------+
    // | null |   3  | null |    | null |   5  | null |
    // +------+------+------+    +------+------+------+
    let last: DoublyLinkedNode<number> = new DoublyLinkedNode(5);

    // 2. ACT
    // +------+------+------+    +------+------+------+
    // | null |   3  |  *---+--->|      |   5  | null |
    // |      |      |      |<---+--*   |      |      |
    // +------+------+------+    +------+------+------+
    first.next = last;
    last.prev = first;

    let prevValue = last.prev.value;
    let nextValue = first.next.value;

    // 3. ASSERT
    expect(nextValue).to.equal(5);
    expect(prevValue).to.equal(3);
    expect(last.next).to.equal(null);
    expect(first.prev).to.equal(null);
  });
  it('should allow to change prev to null', function () {
    let first: DoublyLinkedNode<number> = new DoublyLinkedNode(3);

    let last: DoublyLinkedNode<number> = new DoublyLinkedNode(5);

    first.next = last;
    last.prev = first;

    first.next = null;
    last.prev = null;

    expect(first.next).to.equal(null);
    expect(first.prev).to.equal(null);
  });
  it ('should not allow to change prev to a non DoublyLinkedNode Object', function(){
    let first: DoublyLinkedNode<number> = new DoublyLinkedNode(3);

    let last: Array<number> = [1, 2, 3];

    let badFn = () => { first.prev = last };
    expect(badFn).to.throw(Error);
  });
  it ('should not allow to change prev to a Node Object', function(){
    let first: DoublyLinkedNode<number> = new DoublyLinkedNode(3);

    let last: Node<number> = new Node(5);

    let badFn = () => { first.prev = last };
    expect(badFn).to.throw(Error);
  });
  it('should not allow to change prev to undefined', function () {
    let first: DoublyLinkedNode<number> = new DoublyLinkedNode(3);
    first.prev = undefined;

    expect(first.prev).to.equal(null);
  });
});