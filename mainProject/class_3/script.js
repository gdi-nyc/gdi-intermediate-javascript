const containerDiv = document.querySelector("#content-container");

/// 1 ///
// Go to https://opentdb.com/
// and retrieve the API URL for the questions you want.
// Set the URL variable to that URL.
const URL = "";

/// 2 ///
// Here, copy and paste the "randomizeArray" and "addQuestion" 
// functions you made last class (see script_SOLUTION.js if you need them)

/// 3 ///
// Create the function "addQuestions" that takes no arguments and 
// calls fetch() on the "URL" variable you just established.
// console.log() the returning JSON data and find out how to access the 
// array of question objects.
// WARNING: In case your IP address is blacklisted (due to excessive 
// calls to the API from your network) you can use the variable "backupQuestions"
// (already added as a global variable) in place of the retuning data. 
// It resembles the API's JSON you would normally see.

/// 4 ///
// Within the "addQuestions" function, call "addQuestion" on each question object in the array.

/// 5 ///
// Modify the "addQuestion" function by adding a "click" event listener
// to each answer button. If the answer is correct, give the 
// button a background color of "#78af65" else make it "#b15e6c"
// You can modify an elements background color like this:
// button.style.backgroundColor = "#b15e6c";

/// 6 ///
// Call addQuestions();

///////////
// BONUS //
///////////
// Modify the "addQuestions" function so that in the event the response
// is erroneous, the "backupQuestions" data is used instead. This will
// allow the user to always see some questions, even if the API is down
// or if there the user is not connected to the internet.

// Modify the "addQuestion" function so that additional information from
// the question object is visualized, such as the difficulty or category.