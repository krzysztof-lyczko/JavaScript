/*
var youLikeMeat = true;

if (youLikeMeat) {
    document.write(" Here is the meat menu... ");
} else {
    document.write(" Here is the vegan menu... ")
}

var myNum = 8;

if (myNum > 9) {
    document.write(" myNum is greater than 9...");
} else {
    document.write(" myNum is less than 9...")
}

var myAge = 21;

if (myAge > 30) {
    document.write(" you are over 30!...");

} else if (myAge > 20) {
    document.write(" you are over 20!...");

} else if (myAge > 10) {
    document.write(" you are over 10!...");

} else {
    document.write(" you are below minimum age!...")
}



if (myAge >= 18 && myAge <= 30) {
    document.write(" You can come...")

}

if (myAge < 18 || myAge > 30) {
    document.write(" You can't come!...")
}

// #16 While Loops

var age = 5;

while (age < 10) {
    console.log(" Your age is less than 10...");
    age++;
}
document.write(" You are now over 10...");


// #17 For Loops

for (nmbr = 5; nmbr < 10; nmbr++) {
    console.log(" Your number is less than 10...");
}
document.write(" Your number is now over 10...");



var links = document.getElementsByTagName("a")

for (i = 1; i <= links.length; i++) {
    console.log(" This is link number " + i);
}
document.write(" All links now looped...");



// #18 Break & Continue

for (i = 0; i < 10; i++) {

    if (i === 5 || i === 3) {
        continue;
    }

    console.log(i);

    if (i === 7) {
        break;
    }
}

console.log("I've broken out of the loop");



// #19 Practical Example using Loops

var links = document.getElementsByTagName("a");

for (i = 0; i < links.length; i++) {
    
    links[i].className = "link-" + i;

}



// #20 Functions & #21 Variable Scope

function getAvarage(a, b) {

    var average = (a + b) / 2; //local variable
    console.log(average);
    return average
}

var myResult = getAvarage(7, 11); //global variable

console.log("the average is " + myResult);



function logResult(){

    console.log("the average is " + myResult + " inside the function");

}

logResult();




//#22 Numbers

var a = 5;
var b = 5;

console.log(a + b);

console.log(Math.round(7.8));
console.log(Math.floor(7.8));
console.log(Math.ceil(7.8));
console.log(Math.max(7, 4, 8, 9, 1));
console.log(Math.PI);



// #23 NaN

var a = 6;
var b = 5;

console.log(a * b);

if (isNaN(a)){

    console.log("that's not a number");

} else {

    console.log("meaning of life is " + (a * b));
}


*/

//#24 Strings

var myString = "I Am A String ninja"

console.log(myString.length);
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
console.log(myString.indexOf("String"));

if (myString.indexOf("ninja") === -1) {
    console.log("the word ninja is not in the string")

} else {
    console.log("the word ninja starts at postion " + myString.indexOf("ninja"));
}


var string1 = "abc"
var string2 = "bcd"

//console.log(string1.toLowerCase === string2.toLowerCase)
console.log(string1 < string2);