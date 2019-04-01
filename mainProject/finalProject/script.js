// API
// https://opentdb.com/

const URL = "https://opentdb.com/api.php?amount=10&category=15";

const containerDiv = document.querySelector("#content-container");

const randomize = arr => {
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
    const answers = randomize([...incorrect_answers, correct_answer]);

    const article = document.createElement("article");
    containerDiv.append(article);

    const p_tag = document.createElement("p");
    p_tag.innerHTML = question;
    article.append(p_tag);

    const answerContainer = document.createElement("div");
    article.append(answerContainer);
    answers.forEach(answer => {
        const input = document.createElement("button");
        answerContainer.append(input);
        input.innerHTML = answer;
        input.addEventListener("click", e => {
            if (answer === correct_answer) {
                input.style.backgroundColor = "#78af65";
            } else {
                input.style.backgroundColor = "#b15e6c";
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

const resetQuiz = () => {
    containerDiv.innerHTML = ""; // Clearing old questions
    addQuestions();
}

const newQuizButton = document.querySelector("#newQuizButton");
newQuizButton.addEventListener("click", resetQuiz);

resetQuiz();