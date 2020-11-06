import Input from "../src/js/calculator.js";

describe("Calculator", () => {

	let testInput;

	beforeEach(() => {
		testInput = new Input(new Date(1997, 7, 20), "Mercury");
	});

	test("should correctly get the inputted birthday as a formatted string", () => {
		expect(testInput.getBirthday()).toEqual("8/20/1997");
	});

	test("should correctly get the inputted planet name", () => {
		expect(testInput.getPlanet()).toEqual("Mercury");
	});

	test("should correctly get the inputted planet's years", () => {
		expect(testInput.getPlanetYears()).toEqual(0.24);
	});
});