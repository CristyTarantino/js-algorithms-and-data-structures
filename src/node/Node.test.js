import { expect } from "chai";
import Node from "./Node";

describe('Node', function () {
  it ('should create a Node with null value and null next reference', function(){
    // +------+------+
    // | null | null +
    // +------+------+
    let first: Node<number> = new Node();

    expect(first).to.be.an.instanceof(Node);
    expect(first).to.have.property('value', null);
    expect(first).to.have.property('next', null);
  });
  it ('should create a Node with property value and next', function(){
    // +------+------+
    // | 3    | null +
    // +------+------+
    let first: Node<number> = new Node(3);

    expect(first).to.have.property('value', 3);
    expect(first).to.have.property('next', null);
  });
  it('should create 2 Nodes where the first of them should have a numeric value and the reference to the second node', function () {

    // 1. ARRANGE
    // +-----+------+
    // |  3  | null +
    // +-----+------+
    let first: Node<number> = new Node(3);

    // +-----+------+    +-----+------+
    // |  3  | null +    |  5  | null +
    // +-----+------+    +-----+------+
    let last: Node<number> = new Node(5);

    // 2. ACT
    // +-----+------+    +-----+------+
    // |  3  |  *---+--->|  5  | null +
    // +-----+------+    +-----+------+
    first.next = last;

    // 3. ASSERT
    expect(first.next.value).to.equal(5);
    expect(last.next).to.equal(null);
  });
  it('should allow to change value for a node', function () {
    let first: Node<number> = new Node(3);
    first.value = 4;

    expect(first.value).to.equal(4);
  });
  it('should allow to change value to null', function () {
    let first: Node<number> = new Node(3);
    first.value = null;

    expect(first.value).to.equal(null);
  });
  it('should allow to change next to null', function () {
    let first: Node<number> = new Node(3);
    let last: Node<number> = new Node(5);


    first.next = last;
    first.next = null;

    expect(first.next).to.equal(null);
  });
  it ('should not allow to change next to a non Node Object', function(){
    let first: Node<number> = new Node(3);

    let last: Array<number> = [1, 2, 3];

    let badFn = () => { first.next = last };
    expect(badFn).to.throw(Error);
  });
  it('should not allow to change value to undefined', function () {
    let first: Node<number> = new Node(3);
    first.value = undefined;

    expect(first.value).to.equal(null);
  });
  it('should not allow to change next to undefined', function () {
    let first: Node<number> = new Node(3);
    first.next = undefined;

    expect(first.next).to.equal(null);
  });
});