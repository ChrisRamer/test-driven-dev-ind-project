// AMAZING SITE https://www.exploratorium.edu/ronh/age/

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

Input.prototype.getPlanetYears = function() {
	switch (this.planet) {
		case "Mercury":
			return 0.24;
		case "Venus":
			return 0.62;
		case "Earth":
			return 1;
		case "Mars":
			return 1.88
		case "Jupiter":
			return 11.86
		case "Saturn":
			return 29;
		case "Uranus":
			return 84;
		case "Neptune":
			return 165;
		case "Pluto":
			return 248;
		case "Planet 9":
			return 15000;
	}
}