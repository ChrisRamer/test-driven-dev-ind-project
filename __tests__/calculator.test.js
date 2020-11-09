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

	test("should correctly get the inputted planet's orbital period in days on Earth", () => {
		expect(testInput.getPlanetOrbitInDays()).toEqual(88);
	});

	test("should correctly get the user's next birthday on a given planet", () => {
		expect(testInput.getNextBirthday()).toEqual("1/5/2021");
	});
});