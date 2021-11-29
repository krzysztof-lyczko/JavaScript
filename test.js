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


var age = 5;
while (age < 10) {
    
    console.log("Your age is less than 10");
    age++;

}

document.write("You are now over 10");