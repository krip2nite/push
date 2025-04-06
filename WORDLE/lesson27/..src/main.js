//References to DOM elements
const submitBtnElem = document.getElementById("submit-button");
const formELem = document.getElementById("guess-word");
const InputWordElem = document.querySelector(".word-input");
const playAgainElem = document.getElementById("play-again");
const gameOverElem = document.getElementById("game-over");
const coloredLettersElem = document.querySelector(".colored-letters");
let letterElems;
//global variables
let finishMessage;
let word;
let guessedWord;
let tries;
let allowedTries;
let flOver = false;
const words = ["const", "script", "java", "cycle", "image", "variable"];
//functions
function getWord(){
    const index = Math.floor(Math.random() * words.length);
    const res = words[index];
    return res;
}
function startGame(){
    word = getWord();
    tries = 0;
    flOver = false;
    allowedTries = getAllowedTries();
    playAgainElem.style.display = "none";
    gameOverElem.innerHTML = "";
    InputWordElem.value = "";
    submitBtnElem.disabled = true;
    coloredLettersElem.innerHTML = getLetterDivs();
    letterElems = document.querySelectorAll(".letter")
    
}
function coloringLetters(){
    const wordArr = Array.from(guessedWord) // making array of letters from word
    wordArr.forEach((l, i) => {
        let color = 'red';
        if (word.includes(l)){
            color = guessedWord[i] == word[i] ? "green" : "yellow";
        }
        letterElems[i].innerHTML = l;
        letterElems[i].style.color = color;
    })
}
function getAllowedTries(){
    const res = word.length + 1;
    return res;
}
function getLetterDivs(){
    const divs = [];
    for (let i = 0; i< word.length; i++)
    {
        divs.push('<div class="letter"></div>');
    }
    return divs.join("");
}
function onInput(){
    // if(InputWordElem.value.length == word.length)
    //     submitBtnElem.disabled = false;
    // else
    //     submitBtnElem.disabled = true;
    // same code ->
    submitBtnElem.disabled = InputWordElem.value.length !== word.length;
}
function onSubmit(event){
    event.preventDefault();
    guessedWord = InputWordElem.value;
    tries++;
    coloringLetters();
    const messageGameOver = isGameOver();
    if (messageGameOver){
        finishMessage = messageGameOver;
        finishGame();
    }
    
}
function isGameOver(){
    let res = "";
    if (word === guessedWord)
        res = `Congratulations. You are the winner with ${tries} tries`;
    else if(tries === allowedTries)
        res = `Unfortunatly you have used all your tries`;
    return res;
}
function finishGame(){
    playAgainElem.style.display = "block";
    gameOverElem.innerHTML = finishMessage;
    flOver = true;
    submitBtnElem.disabled = true;
}
//actions and event handlers definitions
startGame();