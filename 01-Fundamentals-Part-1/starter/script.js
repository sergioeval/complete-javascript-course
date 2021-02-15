/* first lecture 
let js = 'amazing';
//if (js === 'amazing') alert('JavaScript is fun');

console.log(40+8+23-10)

//values - smalles unit of information
console.log('jonas')
console.log(23)

//variables

let firstName = 'Bob';
console.log(firstName)

// conventions and rules for namming variables
// more than 1 words firstName 
// or first_name this is more popular in ther languages
// we can not use number in the vairable at the start

//new is areserved keyword in js
// another is reserved is function
//name is a reserved keyword 

// do not start a variable with uppercase 

// contats are usually write in uppercase like 
let PI = 3.1415;

// variables should be self descriptive 
// example is
let myFirstJob = 'programmer';
let myCurrentJob = 'Teacher'

//bad example is 
let job1 = 'Programmer'
let job2 = 'Teacher'
*/

/*

// second lecture data types 

//boolean values
let javaScriptIsFun = true;
console.log(javaScriptIsFun)

//get the value type
console.log(typeof javaScriptIsFun)
console.log(typeof 23)
console.log(typeof 'jonas')

// dynamic typing , change the value of a vairable with 
// any other value type

javaScriptIsFun = 'Yes!'
console.log(typeof javaScriptIsFun)

// example of undefine 
// this is an empty variable 
let year;
console.log(typeof year)

year = 1991;
console.log(typeof year)

// this will get you object , but this is a bug in js 
console.log(typeof null)

*/

/*
// video 13 - let, const and var
// when you need to mutate the variable you will use let
// so you can change the value latter in the code 
// or in case of empty variables 
let age = 30;
age = 21

// const is used to declare variables that will not change

const birthDate = 1991;
//then if we try to reasign it
//birthDate = 1990
//console.log(birthDate) // we can not do it becas eof the error

// we can not create empty const variable 
// const job;

// is better to have as little variable mutation in your code

// using the var to declare a variable sould be avoided 
// this is the old way to declare variables 

// you can mutate a variable declared with var
var job = 'programmer'
job = 'teacher'
console.log(job)

// IS not a good idea to don't declare your variabels 
// this is not a good practice 
// you should always propertly declare variables
lastName = 'lastname'
console.log(lastName)

*/


/*
// Video 14 basic operators

// mathematical operators 

const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah)
// 2 ** 3 two to the power of 3 
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)

// we can also use the + opperator to concatenate strings 

const firstName = 'Jonas'
const lastName = 'Schmedtman'
console.log(firstName + ' ' + lastName)
// a better way of doing this is using template strings 
// we are going to see that latter 

// asigments operators 
let x = 10 + 5
x += 10 // this will add 10 to x so it will be 25
console.log(x)
x *= 4 // this will be x = x*4 = 100
console.log(x)
x++ // this will add 1 
console.log(x)
x-- // this wil decrease the value by 1
console.log(x)

// comparison operators 
console.log(ageJonas > ageSarah) // >, <, <=, >=

console.log(ageSarah >= 18)

const isFullAge = ageSarah >= 18
console.log(isFullAge)

console.log(now - 1991 > now - 2018)
*/

/*
// Video 15 .- Operators precedence

const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2020;

console.log(now - 1991 > now - 2018)

// left to right operation 
console.log(25-10-5)

//right to left
let x, y;
x = y = 25-10-5
console.log(x, y)

// groupping has the highest precedence 

// in this case first ageSarah will be devided by 2 
//const avarageAge = ageJonas + ageSarah / 2 // this is not correct for avarege 
const avarageAge = (ageJonas + ageSarah) / 2 // this is correct 
console.log(avarageAge)

*/

/*
// Video 16 .- Coding challenge 

const massJohn = 92
const tallJohn = 1.95

const massMark = 78
const tallMark = 1.69 

const bmiJohn = massJohn / tallJohn**2
const bmiMark = massMark / tallMark**2

console.log(bmiJohn)
console.log(bmiMark)

*/

/*
// Video 17 .- String and template leterals 

const firstName = 'Jonas'
const job = 'teacher'
const birthDate = 1991
const year = 2037

const jonas = "I'm " + firstName + ', a ' + (year-birthDate) + ' years old '+ job +'!'

console.log(jonas)

// using template literals we use back single quotes lke this `` 
// in my key board is altGr+simbolo de una C a un lado del enter 


const jonasNew =  `I'm ${firstName}, a ${year-birthDate} years old ${job}!`

console.log(jonasNew)
console.log(`this is a normal string`)

// to create a multiline string 

console.log(`string 
another line just by 
creating new lines`)
*/

/*
// Video 18 , if else statements 

const age = 15

// will be executed if is true
if (age >= 18) {
    console.log(`Sara can start driving license car`)
} else {
    const yearsLeft = 18 - age
    console.log(`Sara is too young. wait another ${yearsLeft} for exam`)
}


// a variable defined inside the block will not be accessible outside that block
// you have to defined it out side first if you want to access it 

const birthYear = 1998

let century;
if (birthYear <= 2000) {
    century = 20
} else {
    century = 21
}

console.log(century) // century is not accesible like this you will get an error
*/


/*
// video 19 .- Second challenge 


const massJohn = 92
const tallJohn = 1.95

const massMark = 78
const tallMark = 1.69 

const bmiJohn = massJohn / tallJohn**2
const bmiMark = massMark / tallMark**2


if (bmiJohn > bmiMark) {
    console.log(`El Indice de masa de Jonh(${bmiJohn}) es mayor que el se Mark(${bmiMark})`)
} else {
    console.log(`EL Indice de masa de Marck(${bmiMark}) es mayor que el se John(${bmiJohn})`)
}
*/


/*
//Video 20 .- Type Conversion and Coercion

// conversion , is when we convert it manually 
// coercion , is when JS converts it automatically 

const inputYear = '1991'
console.log(Number(inputYear)) // this will convert the string to number
console.log(inputYear + 19) // this will concatenate the stringn and not sum it
console.log(Number(inputYear) + 19) // converting and then sum it 


//we get NaN if we try to convert something to a number , but not a number 
console.log(Number('Jonas'))

// we can algo convert to string 
console.log(String(23), 23)

// Type Coercion

console.log('i am ' + 23 + ' Years old')

// this will automatically convert the strings to numbers
// but if you use + thwy all will be converted to strings ann then concateneted
console.log('23' - '10' - 3)
console.log('23' + '10' + 3)
// multiplyer will convert them to numbers, the same for /
console.log('23' * '10')

// comparison will also convert them to numbers
console.log('23' > '20')


// guest the output 
// is 10 becaus first we are concatenating to 11

let n = '1' + 1
n = n - 1
console.log(n)
*/


/*
// Video 21 .- truhly and Falsy values

// 5 falsy values : 0, '', undefine, null, NaN
// these falsy values will be converted to false if we try to convert them to boolean 
// everything else is going to be true 

console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean('jonas')) // this will be true
console.log(Boolean({}))
console.log(Boolean(''))

const money = 100 // in the if statement will be converted to false 
if (money) {
    console.log('dont spend ir all')
} else {
    console.log('You should get a job')
}

let height;
// in this case , we can get into a problem if height is Zero , because 0 is a falsy 
// value also 
//height = 45 // with this you get true 
height = 0 // with this we get false but is no undefined 
if (height) {
    console.log('Yei height is defined')
} else {
    console.log('is not defined')
}
*/

/*
// Video 22 .- Equality operators == vs ===

const age = '18'

// will not perform conversion coercion
if (age === 18) console.log('You just became an adult (strict)')

// will perform conversion coercion
if (age == 18) console.log('you just became adult (loose)')

// getting the value from eny web page

const favourite = Number(prompt('WHat is your favourite number?: '))

console.log(favourite)
console.log(typeof favourite)

if (favourite === 23) { // using == '23' is the same as 23 here
    console.log('Cool 23 is an amazing number')
} else if (favourite === 7) {
    console.log('Seven is also a cool number')
} else {
    console.log('Number is not 23 or 7 ')
}

if (favourite !== 23) { // this is also a strict form of equality , the loose is !=
    console.log('Why not the 23?')
}

*/

/*
// video 23 .- Boolean logic

// video 24 .- Logicl Operators 

const hasDriverLicense = true
const hasGoodVision = true 


console.log(hasDriverLicense && hasGoodVision) // the is the AND operator in JS
console.log(hasDriverLicense || hasGoodVision) // this is the OR operator in JS
console.log(!hasDriverLicense) // this is the NOT Operator 


// if (hasDriverLicense && hasGoodVision) {
//     console.log('Shara is able to drive')
// } else {
//     console.log('Someone else should drive ')
// }

const isTired = false
console.log(hasDriverLicense && hasGoodVision && isTired)


if (hasDriverLicense && hasGoodVision && !isTired) {
    console.log('Shara is able to drive')
} else {
    console.log('Someone else should drive ')
}
*/

/*
// Video 26 .- The Switch statement 
// we need to use the break stamenet so the execution do not continue

const day = 'thursday'
switch (day) {
    case 'monday': // is comparing in strict equality way like ===
        console.log('Plan my course structure')
        console.log('Go to conding meetup')
        break
    case 'tuesday':
        console.log('Prepare theory videos')
        break
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples')
        break
    case 'friday':
        console.log('Record videos')
        break
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend ')
        break
    default:
        console.log('Not a valid day')
}



// doing this in if else 
console.log('FROM HERE IS IF ELSE ')

if (day === 'monday') {
    console.log('Plan my course structure')
    console.log('Go to conding meetup')
} else if (day === 'tuesday') {
    console.log('Prepare theory videos')
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples')
} else if (day === 'friday') {
    console.log('Record videos')
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend ')
} else {
    console.log('Not a valid day')
}

*/


/*
// video 27 .- statements and expressions 

// this is an expressions 
3+2
1991
true && false && !false 

// these are statements (if is an stamenets)

if (23>10) {
    const str = '23 is bigger'
}

// you can only insert espressions in literals , not statements
console.log(`I'm ${2037 - 1991}`)

*/



// Video 28 .- the conditional (ternary) operator 

const age = 24
age >= 18 ? console.log('I like to drink wine') : 
console.log('I like to drink watter') 

// mustly we use it like this 
const drink = age >= 18 ? 'Wine':'Water'
console.log(drink)

