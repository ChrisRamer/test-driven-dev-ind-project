// AMAZING SITE https://www.exploratorium.edu/ronh/age/

export default class Birthday {
	constructor (birthday) {
		this.year = birthday.getFullYear();
		this.month = birthday.getMonth() + 1;
		this.day = birthday.getDate();
	}

	getBirthday() {
		return this.month + "/" + this.day + "/" + this.year;
	}
}