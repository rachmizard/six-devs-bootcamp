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

	// constructor argument dibuat object dengan menggunakan class, lalu di destructuring di dalam constructor
	// contoh destructuring: const { name, deadliftPr, benchpressPr, squatPr } = human;
	constructor({ name, deadliftPr, benchpressPr, squatPr }) {
		this.name = name;
		this.deadliftPr = deadliftPr;
		this.brenchpressPr = benchpressPr;
		this.squatPr = squatPr;
	}

	run() {
		console.log(this.name + " sedang berlari");
	}

	walk() {
		console.log(this.name + " sedang berjalan");
	}
}

const manusia = new Human({
	name: "Dhafa",
	deadliftPr: 60,
	benchpressPr: 30,
	squatPr: 20,
});

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

function getCar(car = {}) {
	if (Object.keys(car).length === 0) throw Error("Car is required");
	return car;
}

// sebelum dimutasi
console.log(car);

car.name = "BMW";

const myCar = getCar(car);

// sesudah dimutasi
console.log(myCar);
