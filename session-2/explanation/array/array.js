const movies = [
	"Bohemian Rhapsody",
	"Insidious",
	"Spiderman",
	"Dst",
	"Film A",
	"Film B",
];

// Display all elements
console.log(movies);

// Get Index
console.log(movies[1]);

// Change value by its index
movies[0] = "Film A";
console.log(movies);

// Create new one element by specify the index number
movies[6] = "wkwkwk";
console.log(movies);

// Create new element by push helper instance
movies.push("Film D");
console.log(movies);

// Take out last element of array
movies.pop();
console.log(movies);

// Take out first element of array
movies.shift();
console.log(movies);

// Append new element at the first index
movies.unshift("Cars", "Film C", "Spiderman 2");
console.log(movies);
