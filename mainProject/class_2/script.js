const questionObj = {
    "category": "Entertainment: Video Games",
    "type": "multiple",
    "difficulty": "easy",
    "question": "Who created the digital distribution platform Steam?",
    "correct_answer": "Valve",
    "incorrect_answers": ["Pixeltail Games", "Ubisoft", "Electronic Arts"]
};

//// #1 ////
// Use document.querySelector() to select the "#content-container" 
// <div> and store it in a variable called "containerDiv"

//// #2 ////
// Here, copy and paste your "randomizeArray" from last class (see script_SOLUTION.js if you need it)

//// #3 ////
// Create the function "addQuestion" that takes a question object as a parameter.
// Within the function:
// - Create an <article> element and append it to the containerDiv element (already defined)
// - Create a <p> element and append it to the <article>
// - Change .innerHTML of the <p> to the .question property from the object argument
// - Create a <div> element and append it to the <article>
// - Combine the .correct_answer and .incorrect_answers into a single array
// - For each item in the newly combined array:
//   - Append a <button> element to the <div>
//   - Change the .innerHTML of the <button> to the item's value

//// #4 ////
// Currently, the answers will always display the same way. 
// Modify the "addQuestion" function to randomize the choices using 
// the "randomizeArray" function. Where should this go?

//// #5 ////
// Call addQuestion(questionObj) and view the "index.html" file in the browser

///////////
// BONUS //
///////////
// Alter the "style.css" file to style the website to your liking

// Create a function "addQuestions" (notice the "s"!) that takes an array of question objects
// and calls the "addQuestion" function on each object. 
// A function in the next class will look very similar to this!

// Add a favicon to the site