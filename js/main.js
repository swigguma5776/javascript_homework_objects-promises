//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function favFoods(person){
    for (let i = 0; i < Object.keys(person).length; i++){
        if (Array.isArray(Object.values(person)[i])){
            console.log(`My favorite ${Object.keys(person)[i]}'s are: \n`)
            Object.values(person)[i].forEach(element => console.log(element))
        } else {
            console.log(`My favorite ${Object.keys(person)[i]} is: \n`)
            console.log(Object.values(person)[i])
        }
    } 
    console.log(Object.values(person.shakes[0]).forEach(element => console.log(element)))   
}

console.log(favFoods(person3))


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


function Person(name, age){
    this.name = name;
    this.age = age;

    // print info method
    this.printInfo = () => {console.log(`Hi my name is ${this.name} and I am ${this.age} years old.`)}

     // increment age method
     this.addAge = () => {this.age++; console.log(`Now I am ${this.age} years old`)}

}

let myPerson = new Person('Alex', 30)
let myPerson2 = new Person('Henri', 4); 

myPerson.printInfo()
myPerson.addAge()
myPerson.addAge()
myPerson.addAge()

myPerson2.printInfo()
myPerson2.addAge()


// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if 
    it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

async function checkString (str){
    return new Promise( (yep, nope) => {
        str.length > 10 ? yep('Big word') : nope('Small Number')
    })
    .then( (result)=> console.log(result))
    .catch( (error)=> console.log(error))
}

console.log(checkString('Hi how are you today?'))

// ============== Code Wars # 1 =============== // 

// My grandfather always predicted how old people would get, and right 
// before he passed away he revealed his secret!
// In honor of my grandfather's memory we will write a function using his formula!

// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.

predictAge = (arr) => {
    let ageList = []
    for (let a in arr){
        ageList.push(arr[a]**2)
    }
    let sum = 0
    ageList.forEach(item => sum += item)
    return Math.floor(sum ** .5 / 2)
}

console.log(predictAge([65, 60, 75, 55, 60, 63, 64, 45]))

// ============== Code Wars # 1 =============== // 

// Given a random non-negative number, you have to return the digits 
// of this number within an array in reverse order.


digitize = (num) => {
    let newNum = num.toString()
    newList = []
    for(let i = 0; i < newNum.length; i++){
        newList.push(parseFloat(newNum[i]))
    }
    return newList.reverse()
}

console.log(digitize(3842))





