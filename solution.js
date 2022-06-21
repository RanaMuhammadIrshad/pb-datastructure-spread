"use strict";
/* 
#### 1. Combining Arrays 
* Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array. 
* Once again create two arrays. Save all elements of both arrays to another variable. */
console.log(`*******01-A*******`);
const euroCountries = ["Germany", "Belgium", "Netherlands"];
const asianCountries = ["Pakistan", "India", "China"];
console.log([...euroCountries, ...asianCountries]);
console.log(`*******01-B*******`);
const mergeCountries = [...euroCountries, ...asianCountries];
console.log(mergeCountries);

/* 
#### 2. Copying Arrays
* Copy an array using the spread operator. Store the copied array in another variable.  */
console.log(`*******02*******`);
const copyEuroCountries = [...euroCountries];
console.log(copyEuroCountries);

/* 

#### 3. Find the Largest... 
Create a function to find the largest number in an array. */

console.log(`*******03*******`);

const arr = [-1, 1, -20, 5, 10, 25, 50];

function largestNum(arr) {
  return Math.max(...arr);
}

const largestReturned = largestNum(arr);
console.log(largestReturned);

/* 
#### 4. Find the Smallest
Create a function to find the smallest number in an array. */
console.log(`*******04*******`);

const smallestNum = function (arr) {
  return Math.min(...arr);
};

const smallestReturned = smallestNum(arr);
console.log(smallestReturned);

/* 
#### 5. Clone and Merge
Given two objects:
```javascript
const person = {name: "John"}
const job = {role: "Teacher"}
```
* 5.1 Clone the person object.
* 5.2 Merge these two objects into one object: "employee". Use the spread operator to do so. 
* 5.3 Then change the values of the properties in the employee object.
 */
console.log(`*******05*******`);
const person = { name: "John" };
const job = { role: "Teacher" };
//5.1 Clone the person object.
const clonePerson = { ...person };
console.log(clonePerson);
//5.2 Merge these two objects into one object: "employee". Use the spread operator to do so.
const employee = { ...person, ...job };
console.log(employee);
//5.3 Then change the values of the properties in the employee object.
employee.name = "Smith";
employee.role = "Web-developer";
console.log(employee);

/* 
#### Bonus: 6.  Is the average a whole number?
Create a function that takes 4 integers as parameters and returns true or false depending on whether the average of all the arguments is a whole number or not.
* Examples
* isWhole(1, 2, 3, 4) ➞ false
* isWhole(9, 2, 2, 5) ➞ false

* Once you have created a function, pass in an array as an argument which contains four elements - check if this method still outputs the correct result! */

console.log(`*******06*******`);

function isWhole(a, b, c, d) {
  let NumAvg = (a + b + c + d) / arguments.length;

  if (Number.isInteger(NumAvg)) {
    return true;
  } else {
    return false;
  }
}

// const retValue = isWhole(1,2,3,4);
// const retValue = isWhole(9,2,2,5);
// const retValue = isWhole(4,4,4,4);
const retValue = isWhole(...[9, 2, 2, 5]);

console.log(retValue);
