const containerDiv = document.querySelector("#content-container");

/// 1 ///
// Here, copy and paste the "URL" variable, "randomizeArray", "addQuestion",
// and "addQuestions" functions from last class (see script_SOLUTION.js if you need them)
const URL = "https://opentdb.com/api.php?amount=10&category=15";

const randomizeArray = arr => {
    const output = [];
    while (arr.length) {
        const randIndex = Math.floor(Math.random() * arr.length);
        output.push(arr.splice(randIndex, 1)[0]);
    }
    return output;
}

const addQuestion = ({
    question,
    correct_answer,
    incorrect_answers
}) => {

    const article = document.createElement("article");
    containerDiv.append(article);

    const p = document.createElement("p");
    article.append(p);
    p.innerHTML = question;

    const div = document.createElement("div");
    article.append(div);

    const answers = randomizeArray([...incorrect_answers, correct_answer]);
    answers.forEach(answer => {
        const button = document.createElement("button");
        div.append(button);
        button.innerHTML = answer;
        button.addEventListener("click", e => {
            if (answer === correct_answer) {
                button.style.backgroundColor = "#78af65";
            } else {
                button.style.backgroundColor = "#b15e6c";
            }
        })
    })
}

const addQuestions = () => {
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            data.results.forEach(addQuestion);
        })
}

/// 2 ///
// Define the function "resetQuiz" that takes no arguments
// and clears the containerDiv before calling addQuestions()
const resetQuiz = () => {
    containerDiv.innerHTML = ""; // Clearing old questions
    addQuestions();
}

/// 3 ///
// Use document.querySelector() to get the "#newQuizButton" element
// and then attach a "click" event listener that triggers the
// "resetQuiz" function
const newQuizButton = document.querySelector("#newQuizButton");
newQuizButton.addEventListener("click", resetQuiz);

/// 4 ///
// Call resetQuiz();
resetQuiz();