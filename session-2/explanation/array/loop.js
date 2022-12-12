const movies = [
	"Bohemian Rhapsody",
	"Insidious",
	"Spiderman",
	"Dst",
	"Film A",
	"Film B",
];

// method one
for (let i = 0; i < movies.length; i + 2) {
	console.log(movies[i]);
}

// method two
movies.forEach((value, index) => {
	console.log(`${index + 1}. ${value}`);
});

// method three
for (const movie of movies) {
	console.log(movie);
}

// Difference between foreach and map methods

const moviesRef = [];
movies.forEach((a, b) => {
	moviesRef.push(`${b} - ${a}`);
});

console.log(moviesRef);

const moviesMap = movies.map((a, b) => {
	return `Movie = ${a}`;
});

console.log(moviesMap);

const filmCategories = [
	{
		name: "Horor",
	},
	{
		name: "Comedy",
	},
	{
		name: "Action",
	},
];

const categoriesArrayOfString = filmCategories.map((category) => category.name);
console.log(categoriesArrayOfString);

const categories = [];
filmCategories.forEach((value) => {
	categories.push(value.name);
});
console.log(categories);
