// PENGGUNAAN OBJECT
const human = {
	name: "Dhafa",
	deadliftPr: 60,
	benchpressPr: 30,
	squatPr: 20,
	run() {
		console.log(this.name + " sedang berlari");
	},
};

// PENGGUNAAN CLASS
class Human {
	name;
	deadliftPr;
	benchpressPr;
	squatPr;

	constructor() {
		this.name = "Dhafa";
		this.deadliftPr = 60;
		this.brenchpressPr = 30;
		this.squatPr = 20;
	}

	run() {
		console.log(this.name + " sedang berlari");
	}

	walk() {}
}

const manusia = new Human();
console.log("Name : " + manusia.name);
console.log("Deadlift : " + manusia.deadliftPr);

manusia.run();

// best practice
const car = {
	name: "Honda Civic",
	model: "Sedan",
	speed: 200,
	color: "red",
	year: 2000,
};

// sebelum dimutasi
console.log(car);

car.name = "BMW";

function getCar(car = {}) {
	if (Object.keys(car).length === 0) throw Error("Car is required");
	return car;
}

const myCar = getCar(car);

// sesudah dimutasi
console.log(myCar);
