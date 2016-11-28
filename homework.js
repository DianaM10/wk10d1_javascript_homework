//Section 1

//what types are these? Write your answer in a comment beside it.

1;  //number (primative)
"cat"; //string (primative)
true; //boolean (primative)
[]; //array
{}; //hash
1.1; //number (primative)
undefined; //undefined (primative)

//Section 2

// what is the truthy/falsiness values of the following
// write your answer in a comment beside it
// you can use an if to test this...
1; //true
"cat"; //true
true; //true
NaN; //undefined
[]; //true, undefined
{}; //true, undefined
undefined; //undefined
""; //undefined
0;


//Section 3

//Using examples that are different from above...

//3.1 Assign a variable that is a number
var number = 10;
//3.2 Assign a variable that is a string
var myString = "This is a string";
//3.3 Assign a variable that is a boolean
var myBoolean = true;

//3.4 Assign a variable that is an object
var caesar = {
  city: "Rome"
};

//Section 4
//4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false

if (true) {
  console.log( "hello" );
} else {
  console.log( "bye" );
}

//Section 5
var animals = ["raccoon","hedgehog","mouse","gerbil"];

//5.1. Assign the first element to a variable 
var first = animals[0];

//5.2. Assign the last element to a variable
var last = animals.pop();

//5.3. Assign the length of an array to a variable
var size = animals.length;

//5.4. Add an item to the end of the array
animals.push("goose");

//5.5. Add an item to the start of the array
animals.unshift("octopus");

//5.6. Assign the index of hedgehog to a variable
var index = animals[2];

//Section 6

//6.1 Create an array of 5 vegetables
var vegetables = ["onion", "spinach", "mushroom", "leek", "pepper"];

//6.2 Loop over the array and write to the console using a "while"
var text = "";
var i = 0;
while (i < vegetables.length) {
  text += vegetables[i] + " ";
  i ++;
}
console.log(text);

//6.3 Loop again using a "for" with a counter

for (var i=0; i<vegetables.length; i++ ) {
  console.log(vegetables[i]);
}
//6.4 Loop again using a "for of"

for ( var veg of vegetables) {
  console.log(veg);
}

//Section 7
var accounts = [
  { name: 'jay',
    amount: 125.50,
    type: 'personal'
  },
  { name: 'val',
    amount: 55125.10,
    type: 'business'
  },
  { name: 'marc',
    amount: 400.00,
    type: 'personal'
  },
  { name: 'keith',
    amount: 220.25,
    type: 'business'
  },
  { name: 'rick',
    amount: 1.00,
    type: 'personal'
  },
];
//7.1 Calculate the total cash in accounts
// var total = 0;


// var totalCash = function(){
//  var total = 0;
//  for(var i = 0; i < accounts.length; i++){
//    total = total + accounts[i].amount;
//  }
//  return total;
// }

// console.log(totalCash());

var total = 0;
for( var item in accounts) {
  total += accounts[item].amount
}

console.log(total)

//7.2 Find the amount of money in the account with the largest balance

var max = Math.max.apply(null, accounts.map(item => item.amount));
console.log(max)


var amounts = [];
for( var item in accounts) {
  amounts.push(accounts[item].amount);
}
console.log(Math.max(...amounts));

//7.3 Find the name of the account with the smallest balance

var amounts = [];
for( var item in accounts) {
  amounts.push(accounts[item].amount);
}
var min = Math.min(...amounts);

for ( item in accounts) {
  if (accounts[item].amount === min) {
    console.log(accounts[item].name);
  }
}

//7.4 Calculate the average bank account value

var total = 0;
for( var item in accounts) {
  total += accounts[item].amount
}
var average = total/accounts.length;
console.log(average)


//7.5 Find the value of marcs bank account

for ( var item in accounts) {
  if (accounts[item].name === "marc"){
console.log(accounts[item].amount);
}
}

//7.6 Find the holder of the largest bank account
for ( var item in accounts) {
  if (accounts[item].amount === max){
console.log(accounts[item].name);
}
}
//7.7 Calculate the total cash in business accounts
var businessTotal = 0;
for (var item in accounts) {
  if (accounts[item].type === "business") {
    businessTotal += accounts[item].amount;
  }
}
console.log(businessTotal);

//7.8 Find the largest personal account owner
var amounts = [];
for ( var item in accounts) {
  if(accounts[item].type === "personal") {
      amounts.push(accounts[item].amount);
    }
}
console.log(Math.max(...amounts));


//Section 8
//Assign a variable myPerson to a hash, giving them a name, height, favourite food and an eat method


var myPerson =
{name: "bart",
height: 3,
favFood: "Pizza"};

var eat = function(personHash) {
  var food = personHash.favFood;
  console.log("Eating " + food);
}

eat(myPerson);









