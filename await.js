console.log("Person 1 : show ticket");
console.log("Person 2 : show ticket");

const preMovie = async () => {
	const wifeBringingTicks = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("ticket");
		}, 3000);
	});

	const getPopCorn = new Promise((resolve, reject) => resolve(`popcorn`));

	const butterPopcorn = new Promise((resolve, reject) =>
		resolve(`butter popcorn`)
	);

	const getColdDrinks = new Promise((resolve, reject) =>
		resolve(`Cold drinks`)
	);

	let ticket = await wifeBringingTicks;

	console.log("wife : I got the tickets");
	console.log("Husband : Should we go in?");
	console.log("Wife : No, feeling Hungry");

	let popcorn = await getPopCorn;

	console.log(`Husband : Okay I will get some ${popcorn}...Here you go`);
	console.log("Wife : Not this one I need butter pop corn");

	let butter = await butterPopcorn;

	console.log(
		`husband : Here you ${butter}! Shall we go now ? or anything else...`
	);
	console.log("wife : Yes !!!!...hurry up!!");

	let drinks = await getColdDrinks;

	console.log("Wife : Ooh wait wait..Please get me cold drinks");
	console.log("Husband : here your drink! lets go!!");

	return ticket;
};

preMovie().then((m) => console.log(`Person 3 : show ${m}`));

console.log("Person 4 : show ticket");
console.log("Person 5 : show ticket");
