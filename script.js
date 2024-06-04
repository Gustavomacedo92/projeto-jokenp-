const resultado = document.querySelector(".resultado");
const pontoHumano = document.querySelector("#ponto-humano");
const pontoMaquina = document.querySelector("#ponto-alexa");

let pontoHuman = 0;
let pontoMachine = 0;

const playHuman = (humanChoise) => {
  playTheGmame(humanChoise, playMachine());
};

const playMachine = () => {
  const choeses = ["pedra", "papel", "tesoura"];
  const randownunber = Math.floor(Math.random() * 3);
  return choeses[randownunber];
};

const playTheGmame = (maquin, human) => {
  console.log("humano    " + human + "     maquina  " + maquin);

  if (human === maquin) {
    resultado.innerHTML = "empatou";
  } else if (
    (human === "pedra" && maquin === "teoura") ||
    (human === "papel" && maquin === "pedra") ||
    (human === "tesoura" && maquin === "papel")
  ) {
    pontoHuman++;
    pontoHumano.innerHTML = pontoHuman;
    resultado.innerHTML = " voce ganhou";
  } else {
    pontoMachine++;
    pontoMaquina.innerHTML = pontoMachine;
    resultado.innerHTML = " voce perdeu";
  }
};
