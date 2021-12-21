console.clear()

//NULL and UNDEFINED

var mVar
console.log(mVar) //returns "undefined"

mVar = null
console.log(mVar) //returns "null"

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// JS - CONDITIONAL STATEMENTS (If,Else and Switch)
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

if (7>5) {
    console.log(true);
}

if (5>7) {
    console.log(true);
} else {
    console.log(false);
}

//Switch - replaces if else if

var currDay =  "Wed";

if (currDay === "Mon") {
    console.log('Time is 16:00');
    } else if (currDay === "Tue") {
        console.log('Time is 16:30');
    } else if (currDay === "Wed") {
        console.log('Time is 17:00');
    }

switch (currDay) {
    case 'Mon':
        console.log('Time is 16:00');
        break;

    case 'Tue':
        console.log('Time is 16:30');
        break;

    case 'Wed':
        console.log('Time is 17:00');
        break;
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// JS - ARITHMETIC OPERATORS
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//List of Operators
// 1. Addition {+}
// 2. Subtraction {-}
// 3. Multiplication {*}
// 4. Division {/}
// 5. Increment {++}
// 6. Decrement {--}

var num1 = 10;
var num2 = 15;
var num3 = 20;
var num4 = 25;

//Addition
console.log(num1 + num2);

//Subtraction
console.log(num2 - num1);

//Multiplication
console.log(num2*num1);

//Division
console.log(num2/num1);

//Modulus
console.log(num2 % num1); //returns remainder

//Increment - Post and Pre
console.log(num1 ++); // Post: returns 10

console.log(num1); // returns 11 because in previous step num1 was printed and then increased by 1 on POST

console.log(++num2); // Pre: returns 16

//Decrement - Post and Pre

console.log(num3--); // returns 20

console.log(num3); // returns 19

console.log(--num4); // returns 24

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// JS - ASSIGNMENT OPERATORS (Assign values to operators)
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//List of Assignment Operators
// 1. =
// 2. +=
// 3. -=
// 4. *=
// 5. /=
// 6. %=

var num1 = 15;
var num2 = 30;
var num3 = 45;

// =

num1 = 20;

// +=

num2 += 10; num2 = num2 + 10
console.log(num2); //returns 40

// 3. to 6. works similar to 2. where num1 = num1 {operator} num2

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// JS - COMPARISON AND LOGICAL OPERATORS
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------


//COMPARISON OPERATORS

if (5=='5') { //compares only the values and not the type
    console.log(true);
}

if (5 === '5') { //compares only values AND type
    console.log(true);
} else {console.log(false);}

if (5 != '4') { // != stands for "not equal to", and only tests value and not type
    console.log(true);
} else {console.log(false);}

if (5 !== '5') { //tests value AND type
    console.log(true);
} else {console.log(false);}

if (5 < 10) {
    console.log(true);
} else {
    console.log(false);
}

// <= "less than OR equal to"
// >= "greater han or equal to"

//LOGICAL OPERATORS: &&, ||, !

//&& - "AND AND"
if (5 < 10 && 10 > 15) { //both need to be true for it to print "true"
    console.log(true);
} else {
    console.log(false);
}

//|| - "OR"
if (5 < 10 || 10 > 15) { //only ONE needs to be true to print "true"
    console.log(true);
} else {
    console.log(false);
}

//! - "NOT" - "If NOT(true) returns false and if NOT(false) returns true"
console.log(!(5 < 10)) //negates the condition - "if NOT 5 < 10" which prints "false"

//TERNARY OPERATOR (expression) ? a : b {if it returns true, a is executed and if it returns false, b is executed}
2<3 ? console.log(true):console.log(false);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// JS - IMPLICIT TYPE COERCION
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// "Type Coercion" - Convert var type from one to another. Implicit - by JS. Explicit - by us.

var mStr = "Hello"
var mNum = 5
var mSum = mStr + mNum

console.log(mSum); //returns a string because JS converts mNum to string

console.log(+"2"); //returns integer

if ("Apple" || 5) {
    console.log(true); //returns true due to implicit coercion from string/integer to boolean
} else {
    console.log(false);
}

//NOTE: above does not work for 0, null, undefined and empty value - RETURNS FALSE

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// JS - EXPLICIT TYPE COERCION
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Explicit - Conversion of type by us through programming

var mNum = 15

//To String

console.log(typeof(mNum)) //returns number

console.log(typeof(String(mNum))); //returns string (works for integer, boolean, null, undefined and empty)

//To Number

var mStr = "5"

console.log(typeof(Number(mStr))); //returns number (works for number strings, boolean (true - 1 or false - 0))

//NOTE: NaN is still of type NUMBER

//To Boolean

console.log(Boolean(1)); //returns true as type boolean (works for string (true), null (false), undefined(false), empty(false))

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// JS - OBJECTS
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// "Objects" = Complex data type handler

var mCars = { //holds car model and top speed
    "p1" : "350 km/h", 
    "gallardo" : "320 km/h",
    "veyron" : "409 km/h",
    "agera" : "429 km/h"
}

console.log(mCars); //prints list
console.log(typeof(mCars)); //returns object

var mAgera = { //returns classification of agera
    name: "Agera",
    manufacturer: {
        name: "Koenigsegg",
        location: "Sweden"
    },
    topSpeed: 429,
    color: "Black",
    spoilers: false,
    applyBrakes: function() { //when this function is called, after 5 sec it should tell me that car has stopped
        setTimeout(function() {
            console.log("Car Stopped");
        }, 5000)
    }
}

console.log(mAgera.name) //returns "Agera"
console.log(mAgera.manufacturer.location); //returns "Sweden"

console.log(mAgera.applyBrakes()); //returns "Car Stopped" after 5sec

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// JS - ARRAYS PART 1
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
