// question 1

// var rank; for declaration and var rank = "bluebelt"; for initialising

// question 2

// var person = {}; is the empty object without the properties and with the properties (keys and values) it is:

var person = {
    name: "Jamie",
    house: "Lannister"
}

// question 3

//  the variable is var outOfStock; and when assigned a boolean value it's var outOfStock = true; and for the if.. else it is:

var outOfStock = true;

if(outOfStock === true) {
    console.log("Out of stock");

}

else {
    console.log("In stock");
}

// question 4

// my array of five numbers will look like this: var myArrayOfNumbers = [1, 2, 3, 4, 5]; and when I loop through the array and console log each value it will look like this:

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

// question 5

// my for loop that counts from 15 to 25 will look like this: 
for(var count = 15; count <= 25; count++) {
    console.log(count);
}

// question 6

// using the same loop and only log the value of the counter variable if its equal to 20 will look like this:

for(var count = 15; count <= 25; count++) {
    console.log(20);
}

// question 7

// an array of two objects, each object must have the same three properties(with different values): string, number and boolean:

var rank = [

    {

beltRank: "brazilian jiu jitsu bluebelt",
yearsOfTraining: 3,
stillActive: false

}

    {

beltRank: "brazilian jiu jitsu whitebelt",
yearsOfTraining: 1;
stillActive: true

}

];

console.log(rank.length);

// 2

for(var i = 0; i < rank.length; i++) {

 console.log(rank[i].yearsOfTraining);
 console.log(rank[i].stillActive);   
}

// question 8

// Create a function called whatIDontLike that accepts one argument:

function whatIDontLike() {

    console.log("I dont like");
}

whatIDontLike();

function whatIDontLike(myDislikes) {

    console.log(myDislikes);
}

whatIDontLike("Too much whining");

// question 9

// create a function that accepts two arguments, inside the function, subtract the second argument from the first and console log the result


// question 10

// create an empty array, create a function that accepts one argument - inside the function add the argument to the array, call the function and pass in a value of any type

var myEmptyArray = [];

function myFunction(myArgument) {
    console.log(myArgument);
}

myFunction("hello");

function myFunction(myArgument) {
    myEmptyArray = [myArgument];
}

myFunction("This is my value");

// comments to the teachers: I was having a really hard time with the questions 9 and 10, I think I got the question 10 to work but I didn't get any answer for the question 9 as I didn't quite understand the question. I'd really like some tips and tricks on what went wrong here! I'm on a busy schedule at the moment, so stress is ruining some of my focus here. Best regards, Mikal




    
