console.log("Person 1 : show ticket");
console.log("Person 2 : show ticket");

const wifeBringingTicks = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("ticket");
	}, 3000);
});

const getPopCorn = wifeBringingTicks.then((t) => {
	console.log("wife : I got the tickets");
	console.log("Husband : Should we go in?");
	console.log("Wife : No, feeling Hungry");
	return new Promise((resolve, reject) => resolve(`${t} popcorn`));
});

const butterPopcorn = getPopCorn.then((t) => {
	console.log("Husband : Okay I will get some popcorn...Here you go");
	console.log("Wife : Not this one I need butter pop corn");
	console.log("Husband : It is !! Shall we go now ? or anything else...");
	console.log("wife : Yes !!!!");
	return new Promise((resolve, reject) => resolve(`Pesron 3 : show ${t}`));
});

const getColdDrinks = butterPopcorn.then((t) => {
	console.log("Wife : Ooh wait wait..Please get me cold drinks");
	console.log("Husband : here your drink! lets go!!");
	return new Promise((resolve, reject) => resolve(`${t} cold drinks`));
});

getColdDrinks.then((t) => console.log(t));

console.log("Person 4 : show ticket");
console.log("Person 5 : show ticket");
