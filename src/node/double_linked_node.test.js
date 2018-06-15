import { expect } from "chai";
import DoubleLinkedNode from "./double_linked_node";

describe('DoubleLinkedNode', function () {
  it ('should create a DoubleLinkedNode node with a null as value and next', function(){
    // +------+------+
    // | null | null +
    // +------+------+
    let first: DoubleLinkedNode = new DoubleLinkedNode();

    expect(first).to.be.an.instanceof(DoubleLinkedNode);
    expect(first).to.have.property('value', null);
    expect(first).to.have.property('next', null);
  });
  it ('should create a DoubleLinkedNode with a member variable which holds a numeric value and the address of the next node as null', function(){
    // +------+------+
    // | 3 | null +
    // +------+------+
    let first: DoubleLinkedNode = new DoubleLinkedNode(3);

    expect(first).to.have.property('value', 3);
    expect(first).to.have.property('next', null);
  });
  it('should create a DoubleLinkedNode with a member variable which holds a numeric value and the address of the next node', function () {

    // 1. ARRANGE
    // +-----+------+
    // |  3  | null +
    // +-----+------+
    let first: DoubleLinkedNode = new DoubleLinkedNode(3);

    // +-----+------+    +-----+------+
    // |  3  | null +    |  5  | null +
    // +-----+------+    +-----+------+
    let middle: DoubleLinkedNode = new DoubleLinkedNode(5);

    // 2. ACT
    // +-----+------+    +-----+------+
    // |  3  |  *---+--->|  5  | null +
    // +-----+------+    +-----+------+
    first.next = middle;

    // 3. ASSERT
    expect(first.next.value).to.equal(5);
    expect(middle.next).to.equal(null);
  });
  it('should create a DoubleLinkedNode with null address of the next node', function () {

    // 1. ARRANGE
    // +-----+------+
    // |  3  | null +
    // +-----+------+
    let first: DoubleLinkedNode = new DoubleLinkedNode(3);

    // +-----+------+    +-----+------+
    // |  3  | null +    |  5  | null +
    // +-----+------+    +-----+------+
    let last: DoubleLinkedNode = new DoubleLinkedNode(5);

    // 2. ACT
    // +-----+------+    +-----+------+
    // |  3  |  *---+--->|  5  | null +
    // +-----+------+    +-----+------+
    first.next = last;

    // 3. ASSERT
    expect(last.next).to.equal(null);
  });
});