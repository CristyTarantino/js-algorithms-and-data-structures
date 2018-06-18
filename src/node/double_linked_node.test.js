import { expect } from "chai";
import DoubleLinkedNode from "./double_linked_node";
import SingleLinkedNode from "./single_linked_node";

describe('DoubleLinkedNode', function () {
  it ('should create a DoubleLinkedNode with null prev reference', function(){
    // +------+------+------+
    // | null | null | null |
    // +------+------+------+
    let first: DoubleLinkedNode<number> = new DoubleLinkedNode();

    expect(first).to.be.an.instanceof(DoubleLinkedNode);
    expect(first).to.be.an.instanceof(SingleLinkedNode);
  });
  it ('should create a DoubleLinkedNode with null property prev', function(){
    // +------+------+------+
    // | null |   3  | null |
    // +------+------+------+
    let first: DoubleLinkedNode<number> = new DoubleLinkedNode(3);

    expect(first).to.have.property('prev', null);
  });
  it('should allow to create 2 DoubleLinkedNodes linked to each other', function () {

    // 1. ARRANGE
    // +------+------+------+
    // | null |   3  | null |
    // +------+------+------+
    let first: DoubleLinkedNode<number> = new DoubleLinkedNode(3);

    // +------+------+------+    +------+------+------+
    // | null |   3  | null |    | null |   5  | null |
    // +------+------+------+    +------+------+------+
    let last: DoubleLinkedNode<number> = new DoubleLinkedNode(5);

    // 2. ACT
    // +------+------+------+    +------+------+------+
    // | null |   3  |  *---+--->|      |   5  | null |
    // |      |      |      |<---+--*   |      |      |
    // +------+------+------+    +------+------+------+
    first.next = last;
    last.prev = first;

    // 3. ASSERT
    expect(first.next.value).to.equal(5);
    // $FlowFixMe
    expect(last.prev.value).to.equal(3);
    expect(last.next).to.equal(null);
    expect(first.prev).to.equal(null);
  });
  it('should allow to change prev to null', function () {
    let first: DoubleLinkedNode<number> = new DoubleLinkedNode(3);

    let last: DoubleLinkedNode<number> = new DoubleLinkedNode(5);

    first.next = last;
    last.prev = first;

    first.next = null;
    last.prev = null;

    expect(first.next).to.equal(null);
    expect(first.prev).to.equal(null);
  });
  it ('should not allow to change prev to a non DoubleLinkedNode Object', function(){
    let first: DoubleLinkedNode<number> = new DoubleLinkedNode(3);

    let last: Array<number> = [1, 2, 3];

    // $FlowFixMe
    let badFn = function () { first.prev = last };
    // $FlowFixMe
    expect(badFn).to.throw(Error);
  });
  it ('should not allow to change prev to a SingleLinkedNode Object', function(){
    let first: DoubleLinkedNode<number> = new DoubleLinkedNode(3);

    let last: SingleLinkedNode<number> = new SingleLinkedNode(5);

    // $FlowFixMe
    let badFn = function () { first.prev = last };
    // $FlowFixMe
    expect(badFn).to.throw(Error);
  });
  it('should not allow to change prev to undefined', function () {
    let first: DoubleLinkedNode<number> = new DoubleLinkedNode(3);
    first.prev = undefined;

    expect(first.prev).to.equal(null);
  });
});