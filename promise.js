const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emotion) => {
	let result = Array();
	const theaterIXX = await promiseTheaterIXX();
	const theaterVGC = await promiseTheaterVGC();
	result = theaterIXX.concat(theaterVGC);
	const filtered = result.filter((review) => review["hasil"] === emotion);
	return filtered.length;
};

module.exports = {
	promiseOutput,
};
