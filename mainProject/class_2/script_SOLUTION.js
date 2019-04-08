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
const containerDiv = document.querySelector("#content-container");

//// #1b ////
// Create the "addP" function here
const addP = str => {
    const p = document.createElement("p");
    p.innerText = str;
    containerDiv.append(p);
}

//// #2 ////
// Here, copy and paste your "randomizeArray" from last class (see script_SOLUTION.js if you need it)
const randomizeArray = arr => {
    const output = [];
    while (arr.length) {
        const randIndex = Math.floor(Math.random() * arr.length);
        output.push(arr.splice(randIndex, 1)[0]);
    }
    return output;
}

//// #3 ////
// Create the function "addQuestion" that takes a question object as a parameter.
const addQuestion = obj => {
    // Within the function:
    // - Create an <article> element and append it to the containerDiv element (already defined)
    const article = document.createElement("article");
    containerDiv.append(article);

    // - Create a <p> element and append it to the <article>
    const p = document.createElement("p");
    article.append(p);

    // - Change .innerHTML of the <p> to the .question property from the object argument
    p.innerHTML = obj.question;

    // - Create a <div> element and append it to the <article>
    const div = document.createElement("div");
    article.append(div);

    // - Combine the .correct_answer and .incorrect_answers into a single array
    const answers = randomizeArray([...obj.incorrect_answers, obj.correct_answer]); //// #4 ////

    // - For each item in the newly combined array:
    answers.forEach(answer => {
        //   - Append a <button> element to the <div>
        const button = document.createElement("button");
        div.append(button);
        //   - Change the .innerHTML of the <button> to the item's value
        button.innerHTML = answer;
    })
}

//// #4 //// (see above)
// Currently, the answers will always display the same way. 
// Modify the "addQuestion" function to randomize the choices using 
// the "randomizeArray" function. Where should this go?

//// #5 ////
// Call addQuestion(questionObj) and view the "index.html" file in the browser
addQuestion(questionObj);