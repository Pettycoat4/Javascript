var NumberOfChildren = 3;

var partnersName = "Steve";

var geographicLocation = "Brooklyn";

var jobTitle = "Nurse";


console.log("You will be a " + jobTitle + " in " + geographicLocation + 
	" and married to " + partnersName + " with " + 
	NumberOfChildren + " kids.");

// **********************************************
console.log(" ");
// **********************************************



var currentYear = 2014;
var birthYear = 1990;
var age = currentYear - birthYear;

console.log("They are either " + age + " or " + (age - 1) );

// **********************************************
console.log(" ");
// **********************************************


var currentAge = 40;
var maxAge = 95;
var perDium = 2;

var yearsLeft = maxAge - currentAge;
var myEats = yearsLeft * 365 * 2;

console.log("You will need " + myEats + " to last you until the ripe old age of " + maxAge + " .");


// **********************************************
console.log(" ");
// **********************************************


var cel = 41;
var far = cel * 9 / 5 + 32;

console.log(cel + "C is " + far + " F")


// **********************************************
console.log(" ");
// **********************************************



var farenheit = 85;
var celsius = farenheit - 32 * 5 / 9

console.log(farenheit + " F is " + celsius + " C.")


// **********************************************
console.log(" ");
// **********************************************

function sayMyName(name) {
	console.log("Hi " + name + "!");
}

sayMyName("Christina");
sayMyName("Jenni");
sayMyName("Nicole");


// **********************************************
console.log(" ");
// **********************************************

function addNumbers(num1,num2) {
	var result = num1 + num2;
	return result;   //return stores the info.
}

var future = addNumbers(2014,4);

var num = addNumbers(10,2)

console.log(addNumbers(2018,4) + addNumbers(4,5));
console.log(addNumbers(future,num));

console.log(future);


// **********************************************
console.log(" ");
// **********************************************

var timesICalledMyFunction = 0;

function myfunction() {
	timesICalledMyFunction + 1;
}

myfunction()
myfunction()
myfunction()
myfunction()


// **********************************************
console.log(" ");
// **********************************************


function tellFortune(numChildren,partnerName,location,job) {
	var yourFortune = "You will have " + numChildren + " with " + partnerName + 
	" and you will live in " + location + " while you work as a " + job;
	return yourFortune
}

console.log(tellFortune(5,"Sam","Ohio","Nurse"));
console.log(tellFortune(2,"Joe","Portland","Drug Dealer"));
console.log(tellFortune(0,"Mike","Long Island","Bodega Owner"));



// **********************************************
console.log(" ");
// **********************************************

function calculateAge(birthYear,currentYear) {
	var yourAge = currentYear - birthYear;
	var yourAgeMinus = currentYear - birthYear -1;
	return "Your current age is either " + yourAge + " or " +
	yourAgeMinus;

}
var currentYear = new Date().getFullYear();


console.log(calculateAge(1922,2014));
console.log(calculateAge(1985,2024));


console.log("BONUS " + calculateAge(1951,currentYear));

// **********************************************
console.log(" ");
// **********************************************





var reallyOld = 115;
function calculateSupply(age,amountPerDay) {
	var yearsLeft = reallyOld - age;
	var howMuchFood = yearsLeft *  365 * amountPerDay;

	return "You will need " + Math.round(howMuchFood) + " to last you until the ripe old age of " + reallyOld;


}

console.log(calculateSupply(47,4.353344543));



// **********************************************
console.log(" ");
// **********************************************

















