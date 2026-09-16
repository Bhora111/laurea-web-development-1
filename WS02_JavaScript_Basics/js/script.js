// STEP 1: Print text to the browser console
console.log("Hello world!");

// STEP 2: Variables
// Store text values in variables
const userName = "Bhora";
const favoriteAnimal = "Cat";

// Print the variables to the console
console.log("User Name: " + userName);
console.log("Favorite Animal: " + favoriteAnimal);

// STEP 3: User interaction
// Display a pop-up message
alert("Tervetuloa minun hienolle nettisivulleni!");

// Print the variables to the console
console.log("My name is " + userName);
console.log("My favorite animal is " + favoriteAnimal);

// Ask the user for their name
const visitorName = prompt("Mikä on nimesi?");

// Print the user's answer
console.log("Terve " + visitorName + "! Tervetuloa JavaScriptin pariin!");

// Ask the user for their favorite animal
const visitorFavoriteAnimal = prompt("Mikä on lempieläimesi?");

// Create a sentence using both answers
console.log("Hello, " + visitorName + "! Your favorite animal is " + visitorFavoriteAnimal + ".");

// ⭐⭐ BONUS: If / Else statement
if (visitorFavoriteAnimal.toLowerCase() === "blue elephant") {
    console.log("Great choice! That's my favorite animal too!");
} else {
    console.log("Nice! Your favorite animal is " + visitorFavoriteAnimal + ".");
}