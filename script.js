function saudacao() {
  const hora = new Date().getHours();
  const mensagemHorario = document.getElementById('saudacao');

  if(hora >= 0 && hora < 6){
    mensagemHorario.textContent = "Boa madrugada!";
  } else if(hora >= 6 && hora < 12){
    mensagemHorario.textContent = "Bom dia!";
  } else if(hora >= 12 && hora < 18){
    mensagemHorario.textContent = "Boa tarde!";
  } else {
    mensagemHorario.textContent = "Boa noite!";
  }
}

saudacao();


const softskills = [
  "Criatividade",
  "Ética",
  "Autoconhecimento",
  "Forte Controle Emocional",
  "Paciência",
  "Lealdade"
];

const lista = document.getElementById("lista-habilidades");


for(let i = 0; i < softskills.length; i++){
  const item = document.createElement("li");
  item.textContent = softskills[i];
  lista.appendChild(item);
}