"use strict";
//
let items = ["meat", "vegetables", "cake", "drinks", "snacks"];
//
function doCheck(numLetters){
    
    const threshold = 20;
    if (numLetters >= threshold) {
      console.log(`Total number of letters (${numLetters}) meets or exceeds threshold (${threshold})`);
    } else {
      console.log(`Total number of letters (${numLetters}) does not meet threshold (${threshold})`);
    }

}
//
function getNumLetters(arrayitems, callback){
	//
    const numLetters = arrayitems.reduce((acc,word) => acc + word.length, 0);
    // We then use the reduce() method to iterate over the array and 
    // accumulate the length of each word in the acc variable, starting with an initial value of 0
    return callback(numLetters);
}
//
getNumLetters(items, doCheck)

//
