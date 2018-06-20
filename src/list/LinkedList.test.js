import {expect} from "chai";
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
    it ('should prepend a node to the front of the list', () => {
      linkedList.addFront(3);

      expect(linkedList.head.value).to.equal(3);
      expect(linkedList.length).to.equal(1);
    });
    it ('should add a second node to the front of the list', () => {
      linkedList.addFront(3);
      linkedList.addFront(5);


      expect(linkedList.head.value).to.equal(5);

      expect(linkedList.tail.value).to.equal(3);
      expect(linkedList.length).to.equal(2);
    });
    it ('should not allow to add nodes of different types', () => {
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
    it ('should remove a node from the beginning of the list', () => {
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
  describe('addBack', () =>  {
    it ('should append the first node to the list', () => {
      linkedList.addBack(3);

      expect(linkedList.length).to.equal(1);
      expect(linkedList.head.value).to.equal(3);
      expect(linkedList.tail.value).to.equal(3);
    });
    it ('should append a second node at the end of the list', () => {
      linkedList.addBack(3);
      linkedList.addBack(5);

      expect(linkedList.head.value).to.equal(3);
      expect(linkedList.tail.value).to.equal(5);
    });
    it ('should append a third node at the end of the list', () => {
      linkedList.addBack(3);
      linkedList.addBack(5);
      linkedList.addBack(7);

      expect(linkedList.head.value).to.equal(3);
      expect(linkedList.tail.value).to.equal(7);
    });
    it ('should not allow to add nodes of different types', () => {
      linkedList.addBack(3);
      linkedList.addBack(5);

      let badFn = () => { linkedList.addBack("a") };

      expect(badFn).to.throw(Error);

      expect(linkedList.head.value).to.equal(3);

      expect(linkedList.tail.value).to.not.equal("a");
      expect(linkedList.length).to.equal(2);
    });
    it ('should not allow to add null values', () => {
      linkedList.addBack(3);
      linkedList.addBack(5);

      let badFn = () => { linkedList.addBack(null) };

      expect(badFn).to.not.throw(Error);
      expect(linkedList.head.value).to.equal(3);

      expect(linkedList.tail.value).to.not.equal(null);
      expect(linkedList.length).to.equal(2);
    });
  });
  describe('removeBack', () =>  {
    it ('should remove a node from end of the list', () => {
      linkedList.addFront(3);
      linkedList.addFront(5);
      linkedList.addFront(7);

      linkedList.removeBack();

      expect(linkedList.length).to.equal(2);
      expect(linkedList.head.value).to.equal(7);
      expect(linkedList.tail.value).to.equal(5);
    });
    it ('should remove the penultimate node from the list', () => {
      linkedList.addFront(5);
      linkedList.addFront(7);

      linkedList.removeBack();

      expect(linkedList.length).to.equal(1);
      expect(linkedList.head.value).to.equal(7);
      expect(linkedList.tail.value).to.equal(7);
    });
    it ('should remove the last node from the list', () => {
      linkedList.addFront(7);

      linkedList.removeBack();

      expect(linkedList.length).to.equal(0);
      expect(linkedList.head).to.equal(null);
      expect(linkedList.tail).to.equal(null);
    });
    it ('should do nothing if there is an atemt tp remove from an empty list', () => {
      let badFn = () => { linkedList.removeBack(); };

      expect(badFn).to.not.throw(Error);
      expect(linkedList.length).to.equal(0);
      expect(linkedList.head).to.equal(null);
      expect(linkedList.tail).to.equal(null);
    });
  });
  describe('remove', () => {
    beforeEach(function() {
      linkedList.addFront(3);
      linkedList.addFront(4);
      linkedList.addFront(5);
      linkedList.addFront(6);
      linkedList.addFront(7);
    });
    it ('should remove the specified value from the list', () => {
      linkedList.remove(5);

      expect(linkedList.length).to.equal(4);
      expect(linkedList.head.value).to.equal(7);
      expect(linkedList.tail.value).to.equal(3);
      expect(linkedList.includes(5)).to.equal(false);
    });
    it ('should remove an item that is the head', () => {
      linkedList.remove(7);

      expect(linkedList.includes(7)).to.equal(false);
      expect(linkedList.head.value).to.equal(6);
      expect(linkedList.tail.value).to.equal(3);
      expect(linkedList.length).to.equal(4);
    });
    it ('should remove an item that is the tail', () => {
      linkedList.remove(3);

      expect(linkedList.includes(3)).to.equal(false);
      expect(linkedList.head.value).to.equal(7);
      expect(linkedList.tail.value).to.equal(4);
      expect(linkedList.length).to.equal(4);
    });
    it ('should not alter the list when attempting to remove an item not present in the list', () => {
      expect(linkedList.remove(10)).to.equal(false);

      expect(linkedList.length).to.equal(5);
      expect(linkedList.head.value).to.equal(7);
      expect(linkedList.tail.value).to.equal(3);
    });
    it ('should not alter the list when attempting to remove an item of different type from the list', () => {
      expect(linkedList.remove("a")).to.equal(false);

      expect(linkedList.length).to.equal(5);
      expect(linkedList.head.value).to.equal(7);
      expect(linkedList.tail.value).to.equal(3);
    });
    it ('should not alter the list when attempting to remove a null or undefined value from the list', () => {
      expect(linkedList.remove()).to.equal(false);
      expect(linkedList.remove(null)).to.equal(false);
      expect(linkedList.remove(undefined)).to.equal(false);

      expect(linkedList.length).to.equal(5);
      expect(linkedList.head.value).to.equal(7);
      expect(linkedList.tail.value).to.equal(3);
    });
    it ('should not alter the list when removing from an empty list', () => {
      linkedList.clearList();

      let badFn = () => {linkedList.remove(10)};

      expect(badFn).to.not.throw(Error);
      expect(linkedList.length).to.equal(0);
      expect(linkedList.head).to.equal(null);
      expect(linkedList.tail).to.equal(null);
    });
  });
  describe('includes', () => {
    beforeEach(function() {
      linkedList.addFront(3);
      linkedList.addFront(5);
      linkedList.addFront(7);
    });
    it ('should return true if the list contains the value specified', () => {
      expect(linkedList.includes(3)).to.equal(true);
      expect(linkedList.includes(5)).to.equal(true);
      expect(linkedList.includes(7)).to.equal(true);
    });
    it ('should return false if the list does not contain the value specified', () => {
      expect(linkedList.includes(10)).to.equal(false);
    });
    it ('should return false if the value specified is of different type from the list type', () => {
      expect(linkedList.includes("a")).to.equal(false);
    });
    it ('should return false if the value specified is null or undefined', () => {
      expect(linkedList.includes()).to.equal(false);
      expect(linkedList.includes(null)).to.equal(false);
      expect(linkedList.includes(undefined)).to.equal(false);
    });
  });
  describe('enumerate', () => {
    beforeEach(function() {
      linkedList.addBack(3);
      linkedList.addBack(5);
      linkedList.addBack(7);
    });
    it ('should be iterable', () => {
      let isIterable = linkedList != null && typeof linkedList[Symbol.iterator] === 'function';

      expect(isIterable).equal(true);
    });
    it("should loop over the list with a for loop", function() {
      let newArray = [];

      for (let nodeValue of linkedList) {
        newArray.push(nodeValue);
      }

      expect(newArray).to.deep.equal([3, 5, 7]);
    });
    it ('should allow the developer to create an array from the list', () => {
      expect([...linkedList]).to.deep.equal([3, 5, 7]);
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