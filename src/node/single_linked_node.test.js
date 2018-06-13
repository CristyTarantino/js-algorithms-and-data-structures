import { expect } from "chai";
import SingleLinkedNode from "./single_linked_node";

describe('SingleLinkedNode', function () {
  it ('should create a node type with a null as value and next', function(){
    // +------+------+
    // | null | null +
    // +------+------+
    let first: SingleLinkedNode = new SingleLinkedNode();

    expect(first).to.have.property('value', null);
    expect(first).to.have.property('next', null);
  });
  it ('should create a node type with a member variable which holds a numeric value and the address of the next node as null', function(){
    // +------+------+
    // | 3 | null +
    // +------+------+
    let first: SingleLinkedNode = new SingleLinkedNode(3);

    expect(first).to.have.property('value', 3);
    expect(first).to.have.property('next', null);
  });
  it('should create a node type with a member variable which holds a numeric value and the address of the next node', function () {

    // 1. ARRANGE
    // +-----+------+
    // |  3  | null +
    // +-----+------+
    let first: SingleLinkedNode = new SingleLinkedNode(3);

    // +-----+------+    +-----+------+
    // |  3  | null +    |  5  | null +
    // +-----+------+    +-----+------+
    let middle: SingleLinkedNode = new SingleLinkedNode(5);

    // 2. ACT
    // +-----+------+    +-----+------+
    // |  3  |  *---+--->|  5  | null +
    // +-----+------+    +-----+------+
    first.next = middle;

    // 3. ASSERT
    expect(first.next.value).to.equal(5);
    expect(middle.next).to.equal(null);
  });
  it('should create a node type with null address of the next node', function () {

    // 1. ARRANGE
    // +-----+------+
    // |  3  | null +
    // +-----+------+
    let first: SingleLinkedNode = new SingleLinkedNode(3);

    // +-----+------+    +-----+------+
    // |  3  | null +    |  5  | null +
    // +-----+------+    +-----+------+
    let last: SingleLinkedNode = new SingleLinkedNode(5);

    // 2. ACT
    // +-----+------+    +-----+------+
    // |  3  |  *---+--->|  5  | null +
    // +-----+------+    +-----+------+
    first.next = last;

    // 3. ASSERT
    expect(last.next).to.equal(null);
  });
});