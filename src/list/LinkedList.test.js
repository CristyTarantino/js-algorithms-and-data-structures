import {expect} from "chai";
import Node from "../node/Node";
import LinkedList from './LinkedList';

describe('LinkedList', () => {
  let linkedList = new LinkedList();

  afterEach(function() {
    linkedList.clearList();
  });

  it ('should create a LinkedList', () => {
    expect(linkedList).to.be.an.instanceof(LinkedList);
  });
  describe('addFront', () =>  {
    it ('should add the first Node to the front of the list', () => {
      linkedList.addFront(3);

      // $FlowFixMe
      expect(linkedList.head.value).to.equal(3);
      expect(linkedList.length).to.equal(1);
    });
    it ('should add the second Node to the front of the list', () => {
      linkedList.addFront(3);
      linkedList.addFront(5);


      expect(linkedList.head.value).to.equal(5);

      expect(linkedList.tail.value).to.equal(3);
      expect(linkedList.length).to.equal(2);
    });
    it ('should not allow to add Nodes of different types', () => {
      linkedList.addFront(3);

      let badFn = () => { linkedList.addFront("a") };

      expect(badFn).to.throw(Error);

      expect(linkedList.head.value).to.equal(3);

      expect(linkedList.tail.value).to.not.equal("a");
      expect(linkedList.length).to.equal(1);
    });
    it ('should not allow to add null values', () => {
      linkedList.addFront(null);

      let badFnHead = () => { linkedList.head.value };
      let badFnTail = () => { linkedList.tail.value };

      expect(badFnHead).to.throw(Error);
      expect(badFnTail).to.throw(Error);

      expect(linkedList.head).to.equal(null);
      expect(linkedList.tail).to.equal(null);
      expect(linkedList.length).to.equal(0);
    });
    it ('should have the tail next reference to null', () => {
      linkedList.addFront(3);
      linkedList.addFront(5);
      linkedList.addFront(7);

      expect(linkedList.tail.next).to.equal(null);
    });
  });
  describe('removeFront', () =>  {
    beforeEach(function() {
      linkedList.addFront(3);
      linkedList.addFront(5);
      linkedList.addFront(7);
    });
    it ('should remove the last added value from the list', () => {
      linkedList.removeFront();

      expect(linkedList.head.value).to.equal(5);
      expect(linkedList.head.value).to.equal(5);

      expect(linkedList.length).to.equal(2);
    });
    it ('should have head and tail pointing to the same node if the list has only one node left', () => {
      linkedList.removeFront();
      linkedList.removeFront();

      expect(linkedList.head).to.deep.equal(linkedList.tail);
      expect(linkedList.head.value).to.equal(3);
      expect(linkedList.tail.value).to.equal(3);

      expect(linkedList.length).to.equal(1);
    });
    it ('should have head and tail pointing to null if the list is empty', () => {
      linkedList.removeFront();
      linkedList.removeFront();
      linkedList.removeFront();

      expect(linkedList.head).to.equal(null);
      expect(linkedList.head).to.equal(null);

      expect(linkedList.length).to.equal(0);
    });
    it ('should do nothing if we remove from an empty list', () => {
      linkedList.removeFront();
      linkedList.removeFront();
      linkedList.removeFront();
      linkedList.removeFront();

      expect(linkedList.head).to.equal(null);
      expect(linkedList.head).to.equal(null);

      expect(linkedList.length).to.equal(0);
    });
  });
  describe('enumerate', () => {
    beforeEach(function() {
      linkedList.addFront(3);
      linkedList.addFront(5);
      linkedList.addFront(7);
    });
    it ('', () => {

    });
    it ('', () => {

    });
  });
  describe('clearList', () => {
    beforeEach(function() {
      linkedList.addFront(3);
      linkedList.addFront(5);
      linkedList.addFront(7);

      linkedList.clearList();
    });
    it ('should have length equal zero', () => {
      expect(linkedList.length).to.equal(0);
    });
    it ('should have no head or tail', () => {
      expect(linkedList.head).to.equal(null);
      expect(linkedList.tail).to.equal(null);
    });
  });
});