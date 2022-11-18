// VOID CASE
const user = {
	name: "Dhafa",
	age: 22,
	amount: 10000,
};

const movie = {
	name: "Hentai The Movie",
	ticketPrice: 10000,
	minAge: 13,
};

function ticketValidation(user, movie) {
	const isAdult = user.age >= movie.minAge;
	const worthiness = user.amount >= movie.ticketPrice;

	if (isAdult && worthiness) {
		return console.log(
			`Selamat ${user.name}, kamu berhasil membeli tiket ${movie.name} dengan harga ${movie.ticketPrice}`
		);
	}

	if (!isAdult && !worthiness)
		return console.log(
			"Gagal membeli tiket karena emang ga layak dari segi apapun"
		);

	if (!isAdult)
		return console.log("Gagal membeli tiket karena belum cukup umur");

	if (!worthiness)
		return console.log("Gagal membeli tiket karena uang kurang");
}

ticketValidation(user, movie);

// WITH RETURN DATA TYPE CASE

// function ticketValidation(user, movie){
//     const isAdult = user.age >= movie.minAge;
//     const worthiness = user.amount >= movie.ticketPrice;

//     if(isAdult && worthiness) {
//       return {
//       	isValid: true,
// 				name: user.name,
//         reason: ''
//       }
//     }

//     if(isAdult && !worthiness) {
//       return {
//           isValid: false,
//           name: user.name,
//           reason: 'Kamu ga punya duit'
//        }
//     }

//     if(!isAdult && worthiness) {
// 	    return {
//           isValid: false,
//           name: user.name,
//           reason: 'Kamu belum dewasa'
//       }
//     }

//     if(!isAdult && !worthiness) {
// 	    return {
// 					isValid: false,
//           name: user.name,
//           reason: 'Kamu gak layak'
//       }
//     }
// }

// const check = ticketValidation(user, movie);

// if(check.isValid)  {
// 	console.log(`Selamat ${check.name}`);
// }
