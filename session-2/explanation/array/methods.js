const cars = ["Honda", "Hyundai", "Toyota"];

const booleanValue = false;

// Advance Filter with Seperation of Concern function
function filterCarsByRegion(value) {
	if (!booleanValue && value !== "Honda") {
		return true;
	}
	return false;
}

function filterByCheapestPrice(value) {
	if (!booleanValue && value !== "Honda") {
		return true;
	}
	return false;
}

const filteredCarsByRegion = cars.filter(
	(value) => filterCarsByRegion(value) && filterByCheapestPrice(value)
);

console.log(filteredCarsByRegion);
