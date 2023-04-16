// Obter referências a elementos DOM
const body = document.querySelector("body"),
  hourHand = document.querySelector(".hora"),
  minuteHand = document.querySelector(".minuto"),
  secondHand = document.querySelector(".segundos"),
  modeSwitch = document.querySelector(".mode-switch");

// verifique se o modo já está definido como "Modo escuro" no armazenamento local
if (localStorage.getItem("mode") === "Modo Escuro") {
  // adicionar classe "escura" ao corpo e definir o modo Alternar texto para "Modo de Luz"
  body.classList.add("escuro");
  modeSwitch.textContent = "Modo Claro";
}

// adicionar um ouvinte de eventos de clique ao modo Alternar
modeSwitch.addEventListener("click", () => {
  // alternar a classe "escuro" no elemento body
  body.classList.toggle("dark");
  // verificar se a classe "escura" está atualmente presente no elemento body
  const isDarkMode = body.classList.contains("escuro");
  // modo de configuração Alternar texto com base na presença de classe "escura"
  modeSwitch.textContent = isDarkMode ? "Modo Claro" : "Modo Escuro";
  // definir o item "modo" de armazenamento local com base na presença de classe "escura"
  localStorage.setItem("mode", isDarkMode ? "Modo Claro" : "Modo Claro");
});

const updateTime = () => {
  // Obtenha a hora atual e calcule os graus para os ponteiros do relógio
  let date = new Date(),
    secToDeg = (date.getSeconds() / 60) * 360,
    minToDeg = (date.getMinutes() / 60) * 360,
    hrToDeg = (date.getHours() / 12) * 360;

  // Gire os ponteiros do relógio no grau apropriado com base na hora atual
  secondHand.style.transform = `rotate(${secToDeg}deg)`;
  minuteHand.style.transform = `rotate(${minToDeg}deg)`;
  hourHand.style.transform = `rotate(${hrToDeg}deg)`;
};

// chamar atualização Tempo para definir os ponteiros do relógio a cada segundo
setInterval(updateTime, 1000);

//chamar a função de tempo de atualização no carregamento da página
updateTime();

// Codigo feito por Pewiebe