const containerDiv = document.querySelector("#content-container");

/// 1 ///
// Go to https://opentdb.com/
// and retrieve the API URL for the questions you want.
// Set the URL variable to that URL.
const URL = "https://opentdb.com/api.php?amount=10&category=15";

/// 2 ///
// Here, copy and paste the "randomizeArray" and "addQuestion" 
// functions you made last class (see script_SOLUTION.js if you need them)
const randomizeArray = arr => {
    const output = [];
    while (arr.length) {
        const randIndex = Math.floor(Math.random() * arr.length);
        output.push(arr.splice(randIndex, 1)[0]);
    }
    return output;
}

const addQuestion = obj => {
    const article = document.createElement("article");
    containerDiv.append(article);

    const p = document.createElement("p");
    article.append(p);

    p.innerHTML = obj.question;

    const div = document.createElement("div");
    article.append(div);

    const answers = randomizeArray([...obj.incorrect_answers, obj.correct_answer]);

    answers.forEach(answer => {
        const button = document.createElement("button");
        div.append(button);
        button.innerHTML = answer;
        button.addEventListener("click", e => {
            if (answer === obj.correct_answer) {
                button.style.backgroundColor = "#78af65";
            } else {
                button.style.backgroundColor = "#b15e6c";
            }
        })
    })

}

/// 3 ///
// Create the function "addQuestions" that takes no arguments and 
// calls fetch() on the "URL" variable you just established.
// console.log() the returning JSON data and find out how to access the 
// array of question objects.
// WARNING: In case your IP address is blacklisted (due to excessive 
// calls to the API from your network) you can use the variable "backupQuestions"
// (already added as a global variable) in place of the retuning data. 
// It resembles the API's JSON you would normally see.
const addQuestions = () => {
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            data.results.forEach(addQuestion); /// 4 ///
        })
}
/// 4 /// (see above)
// Within the "addQuestions" function, call "addQuestion" on each question object in the array.

/// 5 /// (see above)
// Modify the "addQuestion" function by adding a "click" event listener
// to each answer button. If the answer is correct, give the 
// button a background color of "#78af65" else make it "#b15e6c"
// You can modify an elements background color like this:
// button.style.backgroundColor = "#b15e6c";

/// 6 ///
// Call addQuestions();
addQuestions();