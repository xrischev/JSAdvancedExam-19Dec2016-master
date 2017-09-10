let expect = require('chai').expect;
let makeList = require('../List.js');

describe('Tests for List class', function () {
    let myList = {};

    beforeEach(function () {
        myList = makeList();
    });

    it('Should contains all the functions', () => {
        expect(typeof myList.addLeft).to.equal('function');
        expect(typeof myList.addRight).to.equal('function');
        expect(typeof myList.clear).to.equal('function');
        expect(typeof myList.toString).to.equal('function');
    });

    it('Should be empty when no elements are added', () => {
        expect(myList.toString()).to.equal('');
    });

    describe('Tests for addLeft(item) function', function () {
        it('Should add number at the beginning when addLeft(item) is called', () => {
            myList.addLeft(5);
            expect(myList.toString()).to.equal('5');
        });

        it('Should add string at the beginning when addLeft(item) is called', () => {
            myList.addLeft('5');
            expect(myList.toString()).to.equal('5');
        });

        it('Should add float at the beginning when addLeft(item) is called', () => {
            myList.addLeft(5.5);
            expect(myList.toString()).to.equal('5.5');
        });

        it('Should add multiply numbers at the beginning when addLeft(item) is called', () => {
            myList.addLeft(5);
            myList.addLeft(4);
            myList.addLeft(3);
            myList.addLeft(2);
            expect(myList.toString()).to.equal('2, 3, 4, 5');
        });
    });

    describe('Tests for addRight(item) function', function () {
        it('Should add number at the beginning when addRight(item) is called', () => {
            myList.addRight(5);
            expect(myList.toString()).to.equal('5');
        });

        it('Should add string at the beginning when addRight(item) is called', () => {
            myList.addRight('5');
            expect(myList.toString()).to.equal('5');
        });

        it('Should add float at the beginning when addRight(item) is called', () => {
            myList.addRight(5.5);
            expect(myList.toString()).to.equal('5.5');
        });

        it('Should add multiply numbers at the beginning when addRight(item) is called', () => {
            myList.addRight(5);
            myList.addRight(4);
            myList.addRight(3);
            myList.addRight(2);
            expect(myList.toString()).to.equal('5, 4, 3, 2');
        });
    });

    describe('Tests for clear() function', function () {
        it('Should do nothing when called on empty list', () => {
            myList.clear();
            expect(myList.toString()).to.equal('');
        });

        it('Should clear the list when called on non-empty list with one element in it', () => {
            myList.addRight(5);
            myList.clear();

            expect(myList.toString()).to.equal('');
        });

        it('Should clear the list when called on non-empty list with multiply elements in it', () => {
            myList.addRight(5);
            myList.addRight(4);
            myList.addRight(3);
            myList.addRight(2);
            myList.clear();

            expect(myList.toString()).to.equal('');
        });

        it('Should clear the list when called on non-empty list with multiply elements in it', () => {
            myList.addRight(5);
            myList.addRight({test: 'asd', another: 5555});
            myList.addRight(false);
            myList.addRight(undefined);
            myList.clear();

            expect(myList.toString()).to.equal('');
        });
    });

    describe('Tests for toString function (even that we tested it already)', function () {
        it('Should print correctly empty list', () => {
            expect(myList + '').to.equal('');
        });

        it('Should print correctly list', () => {
            myList.addRight(5);
            myList.addRight(4);
            myList.addRight(3);
            myList.addRight(2);

            expect(myList.toString()).to.equal('5, 4, 3, 2');
        });
    });
});