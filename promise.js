const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emotion) => {
	let count = 0;
	let results = [];
	const theaterIXX = await promiseTheaterIXX();
	const theaterVGC = await promiseTheaterVGC();
	results = theaterIXX.concat(theaterVGC);
	for (const film in results) {
		if (results[film]["hasil"] === emotion) {
			count++;
		}
	}
	return count;
};

module.exports = {
	promiseOutput,
};
