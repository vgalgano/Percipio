"use strict";

let phrase = "err is human";

// find number of words in phrase

let numberwords = (str) => {
    str = str.replace(/(^\s*)|(\s*$)/gi,"");
    str = str.replace(/[ ]{2,}/gi," ");
    str = str.replace(/\n /,"\n");
    return str.split(' ').length;
}
document.getElementById('numberwords').innerHTML = numberwords(phrase);
document.getElementById('phrase').innerHTML = phrase;

//Print the last word with the most letters along with today’s date

function findlongestword (str) {
   
    var strSplit = str.match(/[a-zA-Z0-9]+/gi);
    let longestWord = "";
    for (var i = 0; i < strSplit.length; i++){
        if (strSplit[i].length > longestWord.length){
            longestWord = strSplit[i];
        }
    }
    return longestWord;
}


console.log(findlongestword(phrase));
document.getElementById('longestword').innerHTML = findlongestword(phrase);

//Square the previous number and print it out using a different DOM element

var longestlength = (findlongestword(phrase).length);
var sqrlongest = Math.pow(longestlength, 2);
document.getElementById('square').innerHTML = sqrlongest;