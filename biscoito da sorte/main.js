const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const fortuneCookie = document.querySelector("#fortuneCookie");
const btnOpenAnother = document.querySelector("#btnOpenAnother");
let fortuneText = document.getElementById("fortuneText");
let randomNumber = Math.round(Math.random() * 10);

const fortunes = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "A vida trará coisas boas se tiver paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
  "Não compense na ira o que lhe falta na razão.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A maior de todas as torres começa no solo.",
  "Não há que ser forte. Há que ser flexível.",
  "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
  "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
  "A juventude não é uma época da vida, é um estado de espírito.",
  "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos."
];

let myFortune = "";

//Events
fortuneCookie.addEventListener('click', handleOpenCookie)
btnOpenAnother.addEventListener('click', handleOpenAnotherCookie)
document.addEventListener('keydown', handleEnter)


//Callbacks
function handleOpenCookie(event) {
  event.preventDefault();
  toggleScreen();
  myFortune = fortunes[randomNumber];
  //console.log(fortuneText);
  document.getElementById('fortuneText').innerText = myFortune;
}

function handleOpenAnotherCookie(event) {
  event.preventDefault();
  toggleScreen();
  randomNumber = Math.round(Math.random() * 10);
}

function handleEnter(e){
  if(e.key == 'Enter' && screen2.classList.contains('hide')) {
    handleOpenAnotherCookie(e);
  }
}

function toggleScreen() {
  screen1.classList.toggle('hide');
  screen2.classList.toggle('hide');
}