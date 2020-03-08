//------------------------------

let hour = 10;

if (hour >= 6 && hour < 12) 
    console.log('Good morning');

else if (hour hour >=12 && hour < 18) 
    console.log('Good afternoon');

else
 console.log('Good evening';)


 //------------------------------

 let number = max (3,5);
console.log(number);

function max(a,b) {
  // if (a > b) return a;
  // else return b;

return (a > b) ? a : b; // using conditional operator

}

//------------------------------

// Exercise Landscape or Portrait

function isLandscape(width, height) {
    // if (width > height) return true;
    // return false;
  
    //return (width > height) ? true : false;
    // conditional operator
  
    return (width > height);
  
  }
  console.log(isLandscape(800,600));

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
  if (typeof input !== 'number')
  return 'Not a number';

  if ((input % 3 === 0) && (input % 5 === 0))
  return 'FizzBuzz';

  if (input % 3 === 0)
  return 'Fizz';

  if (input % 5 === 0)
  return 'Buzz'

  return input;
}

//------------------------------

// Exercise - Demerit Points

// Speed Limit = 70
// 5 -> 1 point
// Use Math.floor(1.3)
// 12 points -> suspended

checkSpeed (130);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
if (speed <= speedLimit + kmPerPoint)
console.log('Ok');
else {
  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= 12)
  console .log('License suspended');
  else
  console.log('Points', points);
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
  const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
  console.log(i,message);
}
}

//------------------------------

// Exercise-Count Truthy

const array = [0, null, undefined, '', 2, 3];

console.log(countTruthy(array));

function countTruthy(array) {
  let count = 0;
  for (let value of array)
  if (value)
  count++;
  return count;
}

// Exercise-String Properties

const movie = {
  title: 'a',
  releaseYear: 2018,
  rating: 4.5,
  director: 'b'
};

showProperties(movie);

function showProperties(obj){
for (let key in obj)
console.log(key);
if (typeof obj[key] === 'string')
console.log(key, obj[key]);
}

//------------------------------

// Sum of multiples 3 and 5

//return the multiples of 3 and 5
//multiples of 3: 3, 6, 9
//multiples of 5: 5, 10

function sum(limit) {
  let sum = 0;

  for (let i = 0; i <= limit; i++)
    if (i % 3 === 0 || i % 5 === 0)
  sum+= i;

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
  if (average < 60) return 'F';
  if (average < 70) return 'D';
  if (average < 80) return 'C';
  if (average < 90) return 'B';
  return 'A';
}

function calculateAverage(array) { 
  let sum = 0;
  for ( let value of array)
    sum += value;
  return sum / array.length;

}

console.log(calculateGrade(marks));

// console.log(calculateAverage(marks));


//------------------------------

//Exercise - Stars

showStars(10);

function showStars(rows) {
  for (let row = 1; row <= rows; row++) {
    let pattern = '';
    for (let i = 0; i < row; i++) // nested loop (loop inside of another loop)
      pattern += '*';
    console.log(pattern);
  } 
}

//------------------------------

