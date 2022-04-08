import generateJoke from "./generateJoke"
import './styles/main.scss'
import mmbSrc from  './assets/mmb.png';

console.log(generateJoke());
console.log("1")

const body = document.createElement('body');
const mmb = document.querySelector('#mmb');

mmb.src = mmbSrc


const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke)

generateJoke()