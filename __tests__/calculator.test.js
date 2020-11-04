/*
import Rectangle from '../src/js/rectangle.js';

describe('Rectangle', () => {

	let rectangle;

	beforeEach(() => {
		rectangle = new Rectangle(3, 5);
	});

	test('should correctly create a rectangle object using two sides', () => {
		expect(rectangle.side1).toEqual(3);
		expect(rectangle.side2).toEqual(5);
	});

	test('should correctly create a rectangle object using two siddes', () => {
		expect(rectangle.getArea()).toEqual(15);
	});
});
*/

import Birthday from '../src/js/calculator.js';

describe('Calculator', () => {

	let birthday;

	beforeEach(() => {
		birthday = new Birthday(new Date(1997, 7, 20));
	});

	test('should correctly get the inputted birthday as a formatted string', () => {
		expect(birthday.getBirthday()).toEqual("8/20/1997");
	});
});