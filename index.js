//------------------------------

let hour = 10;

if (hour >= 6 && hour < 12) console.log("Good morning");
else if (hour >= 12 && hour < 18) console.log("Good afternoon");
else console.log("Good evening");

//------------------------------

let number = max(3, 5);
console.log(number);

function max(a, b) {
  // if (a > b) return a;
  // else return b;

  return a > b ? a : b; // using conditional operator
}

//------------------------------

// Using if else
if (cipher_char === from_char) {
  result = result + to_char;
  x++;
} else {
  result = result + clear_char;
}

// Using else if 
if (x > 50) {
  /* do the right thing */
} else if (x > 5) {
  /* do the right thing */
} else {
  /* do the right thing */
}

// Exercise Landscape or Portrait

function isLandscape(width, height) {
  // if (width > height) return true;
  // return false;

  //return (width > height) ? true : false;
  // conditional operator

  return width > height;
}
console.log(isLandscape(800, 600));

//------------------------------
// Exercise - FizzBuzz

// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => fizzBuzz
// Not divisible by 3 or 5 => input
// Not a number => 'Not a number'

const output = fizzBuzz(15);
console.log(output);

function fizzBuzz(input) {
  if (typeof input !== "number") return "Not a number";

  if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";

  if (input % 3 === 0) return "Fizz";

  if (input % 5 === 0) return "Buzz";

  return input;
}

//------------------------------

// Exercise - Demerit Points

// Speed Limit = 70
// 5 -> 1 point
// Use Math.floor(1.3)
// 12 points -> suspended

// checkSpeed(130);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  if (speed <= speedLimit + kmPerPoint) console.log("Ok");
  else {
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12) console.log("License suspended");
    else console.log("Points", points);
  }
}

//------------------------------

//Exercise Even and Odd numbers

showNumbers(10);

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    // option 1
    // if (i % 2 === 0) console.log(i,'EVEN');
    // else console.log(i, 'ODD');

    // option 2
    const message = i % 2 === 0 ? "EVEN" : "ODD";
    console.log(i, message);
  }
}

//------------------------------

// Exercise-Count Truthy

const array = [0, null, undefined, "", 2, 3];

console.log(countTruthy(array));

function countTruthy(array) {
  let count = 0;
  for (let value of array) if (value) count++;
  return count;
}

// Exercise-String Properties

const movie = {
  title: "a",
  releaseYear: 2018,
  rating: 4.5,
  director: "b"
};

showProperties(movie);

function showProperties(obj) {
  for (let key in obj) console.log(key);
  if (typeof obj[key] === "string") console.log(key, obj[key]);
}

//------------------------------

// Sum of multiples 3 and 5

//return the multiples of 3 and 5
//multiples of 3: 3, 6, 9
//multiples of 5: 5, 10

function sum(limit) {
  let sum = 0;

  for (let i = 0; i <= limit; i++) if (i % 3 === 0 || i % 5 === 0) sum += i;

  return sum;
}

console.log(sum(10));

// simple adding

// let num = add (3,6,9,5,10);

// function add (a,b,c,d,e) {
//   return a + b + c + d + e
// }

// console.log(num);

//------------------------------

//Exercise - Grade

const marks = [80, 80, 50];

// Average = (80 + 80 + 50) / 3 = 70

// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

function calculateGrade(marks) {
  const average = calculateAverage(marks);
  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  return "A";
}

function calculateAverage(array) {
  let sum = 0;
  for (let value of array) sum += value;
  return sum / array.length;
}

console.log(calculateGrade(marks));

// console.log(calculateAverage(marks));

//------------------------------

//Exercise - Stars

showStars(10);

function showStars(rows) {
  for (let row = 1; row <= rows; row++) {
    let pattern = "";
    for (
      let i = 0;
      i < row;
      i++ // nested loop (loop inside of another loop)
    )
      pattern += "*";
    console.log(pattern);
  }
}

//------------------------------

//Exercise - Prime Numbers

showPrimes(10);

// Composite & Prime (whose factors are only 1 and itself)

// 12 = 1, 2, 3, 4, 6, 12
// Can be devided evenly by its factors

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++) {
    // 2 - current (number)

    let isPrime = true;
    for (let factor = 2; factor < number; factor++) {
      if (number % factor === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) console.log(number);
  }
}

//Exercise - Prime Numbers 2nd Option

showPrimes(10);

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++)
    if (isPrime(number)) console.log(number);
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;
  return true;
}

//------------------------------

// Section 5 Objects

//Factory Function

function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log(draw);
    }
  };
}
const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);

// We have 2 different circle objects and a single definition of the draw method

// Constructor Function

function Circle(radius) {
  this.radius = radius; // adding a new property to an empty object
  this.draw = function() {
    // adding a new method to the object
    console.log("draw");
  };
  return this;
}

const circle = new Circle(1);
// operator 'new' creates an empty object then it will set 'this' to point to that new object
// and then 'new' operator will return tha new object from Circle function

//------------------------------

// Exercise 1-Address Object

// Exercise 1-Address Object

const address = {
  street: "Jackson street",
  city: "Miami",
  zipCode: 33021
};

function showAddress(address) {
  for (let key in address) console.log(key, address[key]);
}

showAddress(address);

//------------------------------

// Exercise 2-Factory and Constructor Function

// Factory Function

const currentAddress = createAddress("Jackson street", "Miami", 33021);

function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode
  };
}

console.log(currentAddress);

// Constructor function

let address = new Address("Jackson street", "Miami", 33021);

function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

console.log(address);

//------------------------------

// Exercise 3-Object Equality

let address1 = new Address("Jackson street", "Miami", 33021);
let address2 = new Address("Jackson street", "Miami", 33021);

// Equality operator

// true as both operands are type String (i.e. string primitives):
'foo' === 'foo'

var a = new String('foo');
var b = new String('foo');

// false as a and b are type Object and reference different objects
a == b 

// false as a and b are type Object and reference different objects
a === b 

// true as a and 'foo' are of different type and, the Object (a) 
// is converted to String 'foo' before comparison
a == 'foo'

// logical operator

function A(){ console.log('called A'); return false; }
function B(){ console.log('called B'); return true; }

console.log( A() && B() );
// logs "called A" due to the function call,
// then logs false (which is the resulting value of the operator)

console.log( B() || A() );
// logs "called B" due to the function call,
// then logs true (which is the resulting value of the operator)

// Exercise 4-Blog Post Object

let post = {
  title: "a",
  body: "b",
  author: "c",
  views: 10,
  comments: [
    { author: "a", body: "b" },
    { author: "c", body: "d" }
  ],
  isLive: true
};

console.log(post);

// Constructor Function
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

function areEqual(address1, address2) {
  return (
    address1.street === address2.street &&
    address1.city === address1.city &&
    address1.zipCode === address1.zipCode
  );
}

function areSame(address1, address2) {
  return address1 === address2;
}

console.log(areEqual(address1, address2));

console.log(areSame(address1, address2));

//------------------------------

// Exercise 5-Constructor Functions

let post = new Post("a", "b", "c");

function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

console.log(post);

//------------------------------

// Exercise 6-Price Range Objects

let priceRanges = [
  { label: "$", tooltip: "Inexpensive", minPerPerson: 0, maxPerPerson: 10 },
  { label: "$$", tooltip: "Moderate", minPerPerson: 11, maxPerPerson: 20 },
  { label: "$$$", tooltip: "Expensive", minPerPerson: 21, maxPerPerson: 50 }
];

let restaurants = [{ averagePerPerson: 5 }];


//------------------------------
//------------------------------

function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, не найдено
console.log([4, 5, 8, 12].find(isPrime)); // 5

//------------------------------

// https://tc39.github.io/ecma262/#sec-array.prototype.find
if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
    value: function(predicate) {
     // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return kValue.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return undefined.
      return undefined;
    },
    configurable: true,
    writable: true
  });
}

//------------------------------
//------------------------------
//------------------------------

if (!Array.prototype.findIndex) {
  Array.prototype.findIndex = function(predicate) {
    if (this == null) {
      throw new TypeError('Array.prototype.findIndex called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return i;
      }
    }
    return -1;
  };
}

//------------------------------
//------------------------------
//------------------------------

function Person() {
  // The Person() constructor defines `this` as an instance of itself.
  this.age = 0;

  setInterval(function growUp() {
    // In non-strict mode, the growUp() function defines `this`
    // as the global object (because it's where growUp() is executed.), 
    // which is different from the `this`
    // defined by the Person() constructor.
    this.age++;
  }, 1000);
}

var p = new Person();


//------------------------------
//------------------------------
//------------------------------

function applyAndNew(constructor, args) {
  function partial () {
     return constructor.apply(this, args);
  };
  if (typeof constructor.prototype === "object") {
     partial.prototype = Object.create(constructor.prototype);
  }
  return partial;
}


function myConstructor () {
  console.log("arguments.length: " + arguments.length);
  console.log(arguments);
  this.prop1="val1";
  this.prop2="val2";
};

var myArguments = ["hi", "how", "are", "you", "mr", null];
var myConstructorWithArguments = applyAndNew(myConstructor, myArguments);

console.log(new myConstructorWithArguments);
// (internal log of myConstructor):           arguments.length: 6
// (internal log of myConstructor):           ["hi", "how", "are", "you", "mr", null]
// (log of "new myConstructorWithArguments"): {prop1: "val1", prop2: "val2"}

//------------------------------
//------------------------------
//------------------------------

var stringArray = ['Blue', 'Humpback', 'Beluga'];
var numericStringArray = ['80', '9', '700'];
var numberArray = [40, 1, 5, 200];
var mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

console.log('stringArray:', stringArray.join());
console.log('Sorted:', stringArray.sort());

console.log('numberArray:', numberArray.join());
console.log('Sorted without a compare function:', numberArray.sort());
console.log('Sorted with compareNumbers:', numberArray.sort(compareNumbers));

console.log('numericStringArray:', numericStringArray.join());
console.log('Sorted without a compare function:', numericStringArray.sort());
console.log('Sorted with compareNumbers:', numericStringArray.sort(compareNumbers));

console.log('mixedNumericArray:', mixedNumericArray.join());
console.log('Sorted without a compare function:', mixedNumericArray.sort());
console.log('Sorted with compareNumbers:', mixedNumericArray.sort(compareNumbers));

//------------------------------
//------------------------------
//------------------------------

function returnInt(element) {
  return parseInt(element, 10)
}

['1', '2', '3'].map(returnInt); // [1, 2, 3]
// Actual result is an array of numbers (as expected)

// Same as above, but using the concise arrow function syntax
['1', '2', '3'].map( str => parseInt(str) )

// A simpler way to achieve the above, while avoiding the "gotcha":
['1', '2', '3'].map(Number)  // [1, 2, 3]

// But unlike parseInt(), Number() will also return a float or (resolved) exponential notation:
['1.1', '2.2e2', '3e300'].map(Number)  // [1.1, 220, 3e+300]

// For comparison, if we use parseInt() on the array above:
['1.1', '2.2e2', '3e300'].map( str => parseInt(str) ) // [1, 2, 3]

// --------

let xs = ['10', '10', '10']

xs = xs.map(parseInt)

console.log(xs)
// Actual result of 10,NaN,2 may be unexpected based on the above description.

// --------

let numbers = [1, 2, 3, 4]
let filteredNumbers = numbers.map(function(num, index) {
  if (index < 3) {
     return num
  }
})
// index goes from 0, so the filterNumbers are 1,2,3 and undefined.
// filteredNumbers is [1, 2, 3, undefined]
// numbers is still [1, 2, 3, 4]

//------------------------------
//------------------------------
//------------------------------

// Grouping objects by a property

let people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];

function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    let key = obj[property]
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(obj)
    return acc
  }, {})
}

let groupedPeople = groupBy(people, 'age')
// groupedPeople is:
// { 
//   20: [
//     { name: 'Max', age: 20 }, 
//     { name: 'Jane', age: 20 }
//   ], 
//   21: [{ name: 'Alice', age: 21 }] 
// }

// Bonding arrays contained in an array of objects using the spread operator and initialValue

// friends - an array of objects 
// where object field "books" is a list of favorite books 
let friends = [{
  name: 'Anna',
  books: ['Bible', 'Harry Potter'],
  age: 21
}, {
  name: 'Bob',
  books: ['War and peace', 'Romeo and Juliet'],
  age: 26
}, {
  name: 'Alice',
  books: ['The Lord of the Rings', 'The Shining'],
  age: 18
}]

// allbooks - list which will contain all friends' books +  
// additional list contained in initialValue
let allbooks = friends.reduce(function(accumulator, currentValue) {
  return [...accumulator, ...currentValue.books]
}, ['Alphabet'])

// allbooks = [
//   'Alphabet', 'Bible', 'Harry Potter', 'War and peace', 
//   'Romeo and Juliet', 'The Lord of the Rings',
//   'The Shining'
// ]

//------------------------------
//------------------------------
//------------------------------

let arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  { },
  { id: null },
  { id: NaN },
  { id: 'undefined' }
]

let invalidEntries = 0

function isNumber(obj) {
  return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj)
}

function filterByID(item) {
  if (isNumber(item.id) && item.id !== 0) {
    return true
  } 
  invalidEntries++
  return false;
}

let arrByID = arr.filter(filterByID)

console.log('Filtered Array\n', arrByID)
// Filtered Array
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log('Number of Invalid Entries = ', invalidEntries)
// Number of Invalid Entries = 5

//------------------------------
//------------------------------
//------------------------------

// Hoisting 

// Example 1 
// Only y is hoisted

x = 1; // Initialize x, and if not already declared, declare it - but no hoisting as there is no var in the statement.
console.log(x + " " + y); // '1 undefined'
//This prints value of y as undefined as JavaScript only hoists declarations 
var y = 2; // Declare and Initialize y


// Example 2 
// No hoisting, but since initialization also causes declaration (if not already declared), variables are available.

a = 'Cran'; //Initialize a
b = 'berry'; //Initialize b
console.log(a + "" + b); // 'Cranberry'



console.log('Filtered Array\n', arrByID)
// Filtered Array
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log('Number of Invalid Entries = ', invalidEntries)
// Number of Invalid Entries = 5

// Concatenating two arrays

const letters = ['a', 'b', 'c'];
const numbers = [1, 2, 3];

letters.concat(numbers);
// result in ['a', 'b', 'c', 1, 2, 3]

// Concatenating three arrays

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers = num1.concat(num2, num3);

console.log(numbers); 
// results in [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Concatenating values to an array

const letters = ['a', 'b', 'c'];

const alphaNumeric = letters.concat(1, [2, 3]);

console.log(alphaNumeric); 
// results in ['a', 'b', 'c', 1, 2, 3]


// Concatenating nested arrays

const num1 = [[1]];
const num2 = [2, [3]];

const numbers = num1.concat(num2);

console.log(numbers);
// results in [[1], 2, [3]]

// modify the first element of num1
num1[0].push(4);

console.log(numbers);
// results in [[1, 4], 2, [3]]

// Rest parameters

//From arguments to an array

// Before rest parameters, "arguments" could be converted to a normal array using:

function f(a, b) {

  let normalArray = Array.prototype.slice.call(arguments)
  // -- or --
  let normalArray = [].slice.call(arguments)
  // -- or --
  let normalArray = Array.from(arguments)

  let first = normalArray.shift()  // OK, gives the first argument
  let first = arguments.shift()    // ERROR (arguments is not a normal array)
}

// Now, you can easily gain access to a normal array using a rest parameter

function f(...args) {
  let normalArray = args
  let first = normalArray.shift() // OK, gives the first argument
}

// Destructuring rest parameters

function f(...[a, b, c]) {
  return a + b + c;
}

f(1)          // NaN (b and c are undefined)
f(1, 2, 3)    // 6
f(1, 2, 3, 4) // 6 (the fourth parameter is not destructured)


// This keyword

// Ex 1

// An object can be passed as the first argument to call or apply and this will be bound to it.
var obj = {a: 'Custom'};

// This property is set on the global object
var a = 'Global';

function whatsThis() {
  return this.a;  // The value of this is dependent on how the function is called
}

whatsThis();          // 'Global'
whatsThis.call(obj);  // 'Custom'
whatsThis.apply(obj); // 'Custom'

// Ex 2

function add(c, d) {
  return this.a + this.b + c + d;
}

var o = {a: 1, b: 3};

// The first parameter is the object to use as
// 'this', subsequent parameters are passed as 
// arguments in the function call
add.call(o, 5, 7); // 16

// The first parameter is the object to use as
// 'this', the second is an array whose
// members are used as the arguments in the function call
add.apply(o, [10, 20]); // 34


// Conditional catch-blocks

try {
  myroutine(); // may throw three types of exceptions
} catch (e) {
  if (e instanceof TypeError) {
    // statements to handle TypeError exceptions
  } else if (e instanceof RangeError) {
    // statements to handle RangeError exceptions
  } else if (e instanceof EvalError) {
    // statements to handle EvalError exceptions
  } else {
    // statements to handle any unspecified exceptions
    logMyErrors(e); // pass exception object to error handler
  }
}

// Nested try-blocks

try {
  try {
    throw new Error('oops');
  }
  finally {
    console.log('finally');
  }
}
catch (ex) {
  console.error('outer', ex.message);
}

// Output:
// "finally"
// "outer" "oops"


// Changing this 

// Ex 1

// An object can be passed as the first argument to call or apply and this will be bound to it.
var obj = {a: 'Custom'};

// This property is set on the global object
var a = 'Global';

function whatsThis() {
  return this.a;  // The value of this is dependent on how the function is called
}

whatsThis();          // 'Global'
whatsThis.call(obj);  // 'Custom'
whatsThis.apply(obj); // 'Custom'

// Ex 2

function add(c, d) {
  return this.a + this.b + c + d;
}

var o = {a: 1, b: 3};

// The first parameter is the object to use as
// 'this', subsequent parameters are passed as 
// arguments in the function call
add.call(o, 5, 7); // 16

// The first parameter is the object to use as
// 'this', the second is an array whose
// members are used as the arguments in the function call
add.apply(o, [10, 20]); // 34

// Scope

function exampleFunction() {
  var x = "declared inside function";  // x can only be used in exampleFunction
  console.log("Inside function");
  console.log(x);
}

console.log(x);  // Causes error

//----------------------------

var x = "declared outside function";

exampleFunction();

function exampleFunction() {
    console.log("Inside function");
    console.log(x);
}

console.log("Outside function");
console.log(x);

// Array.reduce()

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

//----------------------

let maxCallback = ( acc, cur ) => Math.max( acc.x, cur.x );
let maxCallback2 = ( max, cur ) => Math.max( max, cur );

// reduce without initialValue
[ { x: 2 }, { x: 22 }, { x: 42 } ].reduce( maxCallback ); // NaN
[ { x: 2 }, { x: 22 }            ].reduce( maxCallback ); // 22
[ { x: 2 }                       ].reduce( maxCallback ); // { x: 2 }
[                                ].reduce( maxCallback ); // TypeError

// map & reduce with initialValue; better solution, also works for empty or larger arrays
[ { x: 22 }, { x: 42 } ].map( el => el.x ).reduce( maxCallback2, -Infinity );

// Using for without a statement

function showOffsetPos(sId) {

  var nLeft = 0, nTop = 0;

  for (

    var oItNode = document.getElementById(sId); /* initialization */

    oItNode; /* condition */

    nLeft += oItNode.offsetLeft, nTop += oItNode.offsetTop, oItNode = oItNode.offsetParent /* final-expression */

  ); /* semicolon */ 

  console.log('Offset position of \'' + sId + '\' element:\n left: ' + nLeft + 'px;\n top: ' + nTop + 'px;');

}

/* Example call: */

showOffsetPos('content');

// Output:
// "Offset position of "content" element:
// left: 0px;
// top: 153px;"

// Sorting 

function sortEggsInNest(a, b) {
  if (a > b) {
    return 1;
  } else if (b > a) {
    return -1;
  } else {
    return 0;
  }
}

// function sortEggsInNest(a, b) {
//   return a > b ? 1 : b > a ? -1 : 0;
// }

// Descending order

function sortEggsInNest(a, b) {
  if (a > b) {
    return -1;;
  } else if (b > a) {
    return 1;;
  } else {
    return 0;
  }
}

// function sortEggsInNest(a, b) {
//   return a > b ? -1 : b > a ? 1 : 0;
// }

// Find all prime numbers in an array

let array = [4, 6, 8, 9, 12, 53, -17, 2, 5, 7, 31, 97, -1, 17];

function isPrime(num) {
    if (num <= 1)
        return false;
    else if (num === 2)
        return true;
    else {
        for (let i = 2; i < num; i++)
            if (num % i === 0)
                return false;
        return true;
    }
}

console.log(array.filter(isPrime));   // [53, 2, 5, 7, 31, 97, 17]

//Slice

// Using slice, create newCar from myCar.
let myHonda = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } }
let myCar = [myHonda, 2, 'cherry condition', 'purchased 1997']
let newCar = myCar.slice(0, 2)

// Display the values of myCar, newCar, and the color of myHonda
//  referenced from both arrays.
console.log('myCar = ' + JSON.stringify(myCar))
console.log('newCar = ' + JSON.stringify(newCar))
console.log('myCar[0].color = ' + myCar[0].color)
console.log('newCar[0].color = ' + newCar[0].color)

// Change the color of myHonda.
myHonda.color = 'purple'
console.log('The new color of my Honda is ' + myHonda.color)

// Display the color of myHonda referenced from both arrays.
console.log('myCar[0].color = ' + myCar[0].color)
console.log('newCar[0].color = ' + newCar[0].color)

function applyAndNew(constructor, args) {
  function partial () {
     return constructor.apply(this, args);
  };
  if (typeof constructor.prototype === "object") {
     partial.prototype = Object.create(constructor.prototype);
  }
  return partial;
}


function myConstructor () {
  console.log("arguments.length: " + arguments.length);
  console.log(arguments);
  this.prop1="val1";
  this.prop2="val2";
};

const myArguments = ["hi", "how", "are", "you", "mr", null];
const myConstructorWithArguments = applyAndNew(myConstructor, myArguments);

console.log(new myConstructorWithArguments);
//  (internal log of myConstructor):           arguments.length: 6
//  (internal log of myConstructor):           ["hi", "how", "are", "you", "mr", null]
//  (log of "new myConstructorWithArguments"): {prop1: "val1", prop2: "val2"}