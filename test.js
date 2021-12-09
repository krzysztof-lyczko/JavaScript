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



// #25 Slice and Split Strings

var str = "Hello, world";
var str2 = str.slice(2, 9);
var str3 = str.slice(2)

var tags = "meat, ham, salami, pork, beef, chicken"

var tagsArray = tags.split(",")



// #26 Arrays

var myArray = [];
myArray[0] = 25;
myArray[1] = 35;
myArray[2] = true;
myArray[3] = "hello";
myArray[2] = false;

var myArray2 = [10, 20,"hi",false];
console.log(myArray2.length);
console.log(myArray2.sort());
console.log(myArray2.reverse())

var myArray3 = new Array();

var myArray4 = new Array(5);



// #28 Objects

var myArray = new Array()
myArray[0] = 8;
myArray[1] = "hello";

var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "Shaun";
myCar.drive = function () { console.log("now driving"); };

myCar.drive();

var myCar2 = {
    maxSpeed: 70,
    driver: "Krzysztof",
    drive: function (speed, time) 
    { console.log(speed*time); }
};

console.log(myCar2.maxSpeed);
myCar2.drive(50, 3);


// #29 THIS Keyword



var myCar2 = {
    maxSpeed: 70,
    driver: "Krzysztof",
    drive: function (speed, time) {
        console.log(speed * time);
    },
    logDriver: function () {
        console.log("driver name is " + this.driver);
    }
}



var myCar3 = {
    maxSpeed: 70,
    driver: "filem",
    drive: function (speed, time) {
        console.log(speed * time);
    },
    test: function () {
        console.log(this);
    }
}

myCar2.logDriver();
myCar3.test();
console.log(myCar2.maxSpeed);
myCar2.drive(50, 3);



// #30 Constructor Functions



var Car = function (maxSpeed, driver) {

    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function (speed, time) {
        console.log(speed * time);
    };
    this.logDriver = function () {
        console.log("driver name is " + this.driver);
    };
}

var myCar = new Car(70, "Krzysztof");
var myCar2 = new Car(30, "Leon");
var myCar3 = new Car(50, "Filemon");
var myCar4 = new Car(120, "Kamil");

myCar.drive(30, 5);
myCar.logDriver();


// #31 The Date Object

var myDate = new Date();
console.log(myDate);

var myFutureDate = new Date(2400, 4, 11, 16, 40, 2);
var myPastDate = new Date(1545, 4, 11);

console.log(myPastDate);
console.log(myFutureDate);


var birthday = new Date(2000, 4, 11, 22, 30, 15);
var birthday2 = new Date(2000, 4, 11, 22, 30, 15);

console.log(birthday.getMonth());
console.log(birthday.getFullYear());
console.log(birthday.getDate());
console.log(birthday.getDay());
console.log(birthday.getHours());
console.log(birthday.getTime());

if (birthday.getTime == birthday2.getTime) {

    console.log("birthdays are equal")

} else {
    console.log("birthdays are not equal")
}



// #40 onClick Event

var content = document.getElementById("content")
var button = document.getElementById("show-more")

button.onclick = function () {

    if (content.className == "open") {
        //shrink the box
        content.className = "";
        button.innerHTML = "Show More";
    } else {
        //expand the box
        content.className = "open";
        button.innerHTML = "Show Less";
    }
}



// #41 Window onLoad Event

function setUpEvents() {

    var content = document.getElementById("content")
    var button = document.getElementById("show-more")

    button.onclick = function () {

        if (content.className == "open") {
            //shrink the box
            content.className = "";
            button.innerHTML = "Show More";
        } else {
            //expand the box
            content.className = "open";
            button.innerHTML = "Show Less";
        }
    }

}



window.onload = function () {
    setUpEvents();
};




// #42 JavaScript Timers


var colorChanger = document.getElementById("color-changer");
var colors = ["red", "blue", "green", "pink"];
var counter = 0;

function changeColor() {

    if (counter >= colors.length) {
        counter = 0;
    }

    colorChanger.style.background = colors[counter];
    counter++;

}

var myTimer = setInterval(changeColor, 500);

colorChanger.onclick = function () {

    clearInterval(myTimer);
    colorChanger.innerHTML = "timer stopped";
}

*/

// #44 Accessing Form Elements

var myForm = document.forms.myForm;
var message = document.getElementById("message");

myForm.onsubmit = function () {

    if (myForm.name.value == "") {
        message.innerHTML = "please eneter a name";
        return false;
    } else {
        message.innerHTML = "";
        return true;
    }

};