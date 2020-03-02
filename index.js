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
