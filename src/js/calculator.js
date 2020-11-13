export default class Input {
	constructor (birthday, planet) {
		this.year = birthday.getFullYear();
		this.month = birthday.getMonth() + 1;
		this.day = birthday.getDate();
		this.planet = planet;
	}
}

Input.prototype.getBirthday = function() {
	return this.month + "/" + this.day + "/" + this.year;
}

Input.prototype.getPlanet = function () {
	return this.planet;
}

Input.prototype.getPlanetOrbitInDays = function() {
	switch (this.planet) {
		case "Mercury":
			return 88;
		case "Venus":
			return 225;
		case "Mars":
			return 687;
		case "Jupiter":
			return 4380;
		case "Saturn":
			return 10585;
		case "Uranus":
			return 30660;
		case "Neptune":
			return 60225;
		case "Pluto":
			return 90520;
		case "Eris":
			return 203670;
		case "Planet 9":
			return 5475000;
	}
}

Input.prototype.getAge = function() {
	const currentDate = new Date();
	let differenceInYears = parseInt(currentDate.getFullYear() - this.year);

	const planetDays = this.getPlanetOrbitInDays();
	const planetYears = 365 / planetDays;

	return parseFloat((differenceInYears * planetYears).toFixed(1));
}

Input.prototype.getNextBirthday = function() {
	const currentDate = new Date();
	return new Date(currentDate.getFullYear(), currentDate.getMonth(), (currentDate.getDate() + this.getPlanetOrbitInDays()));
}

Input.prototype.getNextBirthdayToString = function() {
	const nextBirthday = this.getNextBirthday();
	return (nextBirthday.getMonth() + 1) + "/" + nextBirthday.getDate() + "/" + nextBirthday.getFullYear();
}

Input.prototype.getRace = function() {
	switch (this.planet) {
		case "Mercury":
			return "Mercurian";
		case "Venus":
			return "Venusian";
		case "Mars":
			return "Martian";
		case "Jupiter":
			return "Jovian";
		case "Saturn":
			return "Saturnian";
		case "Uranus":
			return "Uranian";
		case "Neptune":
			return "Neptunian";
		case "Pluto":
			return "Plutonian";
	}
}

Input.prototype.getDistance = function() {
	switch (this.planet) {
		case "Mercury":
			return "99.547 million miles";
		case "Venus":
			return "124.87 million miles";
		case "Mars":
			return "49.874 million miles";
		case "Jupiter":
			return "512.97 million miles";
		case "Saturn":
			return "962.11 million miles";
		case "Uranus":
			return "1.7489 billion miles";
		case "Neptune":
			return "2.7392 billion miles";
		case "Pluto":
			return "3.2182 billion miles";
		case "Eris":
			return "8.8 billion miles";
		case "Planet 9":
			return "5.577e+10 miles";
}