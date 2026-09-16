// STEP 1: Print text to the browser console is string ""

console.log("Hello world!");

// STEP 2: Variables

// Store text values in variables

const userName = "Bhora";
const favoriteAnimal = "Cat";


// Print the variables to the console

console.log("User Name: " + userName);
console.log("Favorite Animal " + favoriteAnimal );

// STEP 3: User interaction
// Display a pop-up message

alert("Tervettuloa minun hienolle nettisivulle!");


// Ask the user for their name

const visitorName = prompt("Mikä on nimesi?");
// Print the user's answer

console.log(visitorName);

console.log("Terve " + visitorName + "! Tervetuloa javascriptin pariin!");


// Ask the user for their favorite animal
const visitorFavoriteAnimal = prompt("Mikä on lempieläimesi?")

// Create a sentence using both answers

console.log("Hello, " + visitorName + "! Your favorite animal is " + visitorFavoriteAnimal + ".");

// ⭐⭐ BONUS Ask the user for their favorite animal.If their favorite animal is "Blue Elephant", print: Great choice! That's my favorite animal too!
// ⭐⭐ BONUS Otherwise, print: Nice! Your favorite animal is [animal]. Can you figure out how to do this using if / else?

if (visitorFavoriteAnimal.toLowerCase() === "blue elephant") {
    console.log("Great choice! That's my favorite animal too!");
} else {
    console.log("Nice! Your favorite animal is " + visitorFavoriteAnimal + ".");
}


