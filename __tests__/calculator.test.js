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