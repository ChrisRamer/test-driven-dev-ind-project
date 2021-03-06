import Input from "../src/js/calculator.js";

let testInput;
const birthday = new Date(1997, 7, 20);

describe("Birthday", () => {
	
	beforeEach(() => {
		testInput = new Input(birthday, "");
	});

	test("should correctly get the inputted birthday as a formatted string", () => {
		expect(testInput.getBirthday()).toEqual("8/20/1997");
	});

});

describe("Mercury", () => {

	beforeEach(() => {
		testInput = new Input(birthday, "Mercury");
	});

	test("should correctly get the inputted planet name", () => {
		expect(testInput.getPlanet()).toEqual("Mercury");
	});

	test("should correctly get the inputted planet's orbital period in days on Earth", () => {
		expect(testInput.getPlanetOrbitInDays()).toEqual(88);
	});

	test("should correctly get the user's age on a given planet", () => {
		expect(testInput.getAge()).toEqual(95.4);
	});

	test("should correctly get the user's next birthday on a given planet", () => {
		expect(testInput.getNextBirthdayToString()).toEqual("The future...");
	});

	test("should correctly get the user's race on the given planet", () => {
		expect(testInput.getRace()).toEqual("Mercurian");
	});

	test("should correctly get the distance the given planet is from Earth", () => {
		expect(testInput.getDistance()).toEqual("99.547 million miles");
	});
});

describe("Venus", () => {

	beforeEach(() => {
		testInput = new Input(birthday, "Venus");
	});

	test("should correctly get the inputted planet name", () => {
		expect(testInput.getPlanet()).toEqual("Venus");
	});

	test("should correctly get the inputted planet's orbital period in days on Earth", () => {
		expect(testInput.getPlanetOrbitInDays()).toEqual(225);
	});

	test("should correctly get the user's age on a given planet", () => {
		expect(testInput.getAge()).toEqual(37.3);
	});

	test("should correctly get the user's next birthday on a given planet", () => {
		expect(testInput.getNextBirthdayToString()).toEqual("The future...");
	});

	test("should correctly get the user's race on the given planet", () => {
		expect(testInput.getRace()).toEqual("Venusian");
	});

	test("should correctly get the distance the given planet is from Earth", () => {
		expect(testInput.getDistance()).toEqual("124.87 million miles");
	});
});

describe("Mars", () => {

	beforeEach(() => {
		testInput = new Input(birthday, "Mars");
	});

	test("should correctly get the inputted planet name", () => {
		expect(testInput.getPlanet()).toEqual("Mars");
	});

	test("should correctly get the inputted planet's orbital period in days on Earth", () => {
		expect(testInput.getPlanetOrbitInDays()).toEqual(687);
	});

	test("should correctly get the user's age on a given planet", () => {
		expect(testInput.getAge()).toEqual(12.2);
	});

	test("should correctly get the user's next birthday on a given planet", () => {
		expect(testInput.getNextBirthdayToString()).toEqual("The future...");
	});

	test("should correctly get the user's race on the given planet", () => {
		expect(testInput.getRace()).toEqual("Martian");
	});

	test("should correctly get the distance the given planet is from Earth", () => {
		expect(testInput.getDistance()).toEqual("49.874 million miles");
	});
});

describe("Jupiter", () => {

	beforeEach(() => {
		testInput = new Input(birthday, "Jupiter");
	});

	test("should correctly get the inputted planet name", () => {
		expect(testInput.getPlanet()).toEqual("Jupiter");
	});

	test("should correctly get the inputted planet's orbital period in days on Earth", () => {
		expect(testInput.getPlanetOrbitInDays()).toEqual(4380);
	});

	test("should correctly get the user's age on a given planet", () => {
		expect(testInput.getAge()).toEqual(1.9);
	});

	test("should correctly get the user's next birthday on a given planet", () => {
		expect(testInput.getNextBirthdayToString()).toEqual("The future...");
	});

	test("should correctly get the user's race on the given planet", () => {
		expect(testInput.getRace()).toEqual("Jovian");
	});

	test("should correctly get the distance the given planet is from Earth", () => {
		expect(testInput.getDistance()).toEqual("512.97 million miles");
	});
});

describe("Saturn", () => {

	beforeEach(() => {
		testInput = new Input(birthday, "Saturn");
	});

	test("should correctly get the inputted planet name", () => {
		expect(testInput.getPlanet()).toEqual("Saturn");
	});

	test("should correctly get the inputted planet's orbital period in days on Earth", () => {
		expect(testInput.getPlanetOrbitInDays()).toEqual(10585);
	});

	test("should correctly get the user's age on a given planet", () => {
		expect(testInput.getAge()).toEqual(0.8);
	});

	test("should correctly get the user's next birthday on a given planet", () => {
		expect(testInput.getNextBirthdayToString()).toEqual("The future...");
	});

	test("should correctly get the user's race on the given planet", () => {
		expect(testInput.getRace()).toEqual("Saturnian");
	});

	test("should correctly get the distance the given planet is from Earth", () => {
		expect(testInput.getDistance()).toEqual("962.11 million miles");
	});
});

describe("Uranus", () => {

	beforeEach(() => {
		testInput = new Input(birthday, "Uranus");
	});

	test("should correctly get the inputted planet name", () => {
		expect(testInput.getPlanet()).toEqual("Uranus");
	});

	test("should correctly get the inputted planet's orbital period in days on Earth", () => {
		expect(testInput.getPlanetOrbitInDays()).toEqual(30660);
	});

	test("should correctly get the user's age on a given planet", () => {
		expect(testInput.getAge()).toEqual(0.3);
	});

	test("should correctly get the user's next birthday on a given planet", () => {
		expect(testInput.getNextBirthdayToString()).toEqual("The future...");
	});

	test("should correctly get the user's race on the given planet", () => {
		expect(testInput.getRace()).toEqual("Uranian");
	});

	test("should correctly get the distance the given planet is from Earth", () => {
		expect(testInput.getDistance()).toEqual("1.7489 billion miles");
	});
});

describe("Neptune", () => {

	beforeEach(() => {
		testInput = new Input(birthday, "Neptune");
	});

	test("should correctly get the inputted planet name", () => {
		expect(testInput.getPlanet()).toEqual("Neptune");
	});

	test("should correctly get the inputted planet's orbital period in days on Earth", () => {
		expect(testInput.getPlanetOrbitInDays()).toEqual(60225);
	});

	test("should correctly get the user's age on a given planet", () => {
		expect(testInput.getAge()).toEqual(0.1);
	});

	test("should correctly get the user's next birthday on a given planet", () => {
		expect(testInput.getNextBirthdayToString()).toEqual("The future...");
	});

	test("should correctly get the user's race on the given planet", () => {
		expect(testInput.getRace()).toEqual("Neptunian");
	});

	test("should correctly get the distance the given planet is from Earth", () => {
		expect(testInput.getDistance()).toEqual("2.7392 billion miles");
	});
});

describe("Pluto", () => {

	beforeEach(() => {
		testInput = new Input(birthday, "Pluto");
	});

	test("should correctly get the inputted planet name", () => {
		expect(testInput.getPlanet()).toEqual("Pluto");
	});

	test("should correctly get the inputted planet's orbital period in days on Earth", () => {
		expect(testInput.getPlanetOrbitInDays()).toEqual(90520);
	});

	test("should correctly get the user's age on a given planet", () => {
		expect(testInput.getAge()).toEqual(0.1);
	});

	test("should correctly get the user's next birthday on a given planet", () => {
		expect(testInput.getNextBirthdayToString()).toEqual("The future...");
	});

	test("should correctly get the user's race on the given planet", () => {
		expect(testInput.getRace()).toEqual("Plutonian");
	});

	test("should correctly get the distance the given planet is from Earth", () => {
		expect(testInput.getDistance()).toEqual("3.2182 billion miles");
	});
});

describe("Eris", () => {

	beforeEach(() => {
		testInput = new Input(birthday, "Eris");
	});

	test("should correctly get the inputted planet name", () => {
		expect(testInput.getPlanet()).toEqual("Eris");
	});

	test("should correctly get the inputted planet's orbital period in days on Earth", () => {
		expect(testInput.getPlanetOrbitInDays()).toEqual(203670);
	});

	test("should correctly get the user's age on a given planet", () => {
		expect(testInput.getAge()).toEqual(0);
	});

	test("should correctly get the user's next birthday on a given planet", () => {
		expect(testInput.getNextBirthdayToString()).toEqual("The future...");
	});

	test("should correctly get the distance the given planet is from Earth", () => {
		expect(testInput.getDistance()).toEqual("8.8 billion miles");
	});
});

describe("Planet 9", () => {

	beforeEach(() => {
		testInput = new Input(birthday, "Planet 9");
	});

	test("should correctly get the inputted planet name", () => {
		expect(testInput.getPlanet()).toEqual("Planet 9");
	});

	test("should correctly get the inputted planet's orbital period in days on Earth", () => {
		expect(testInput.getPlanetOrbitInDays()).toEqual(5475000);
	});

	test("should correctly get the user's age on a given planet", () => {
		expect(testInput.getAge()).toEqual(0);
	});

	test("should correctly get the user's next birthday on a given planet", () => {
		expect(testInput.getNextBirthdayToString()).toEqual("The future...");
	});

	test("should correctly get the distance the given planet is from Earth", () => {
		expect(testInput.getDistance()).toEqual("5.577e+10 miles");
	});
});