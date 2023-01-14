// Create an array that returns the numbers 1-9 within a try…catch block

try {
    lab3array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log(lab3array);
  } catch (error) {
    console.error(error)
  }

// Using the spread operator, create a new array and insert the next three numbers in sequence

lab3array2 = [...lab3array, 10, 11, 12];

console.log(lab3array2)

// Sort and print the original array in reverse, but only the last four digits

lab3array3 = lab3array.sort();
console.log("array sort()", lab3array3)
lab3array3 = lab3array.reverse()
console.log("array reverse()", lab3array3)
var lab3array4 = [];
for (i = lab3array3.length-6; i>=0; i--){
     lab3array4.push(lab3array3[i]);
}
console.log(lab3array4)

// De-structure the first and last elements of first array and sum those values

var sumfirstlast;
var last = lab3array.length - 1;
sumfirst = lab3array[0];
sumlast = lab3array[last];
sumfirstlast = sumfirst + sumlast;
console.log(sumfirstlast)
