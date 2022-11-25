







//cria cards
function createCard(date, day, eventName) {
  return `
  <div class="card">
  <h2>${date}<span>${day}</span></h2>
  <ul>
  ${eventName}
  </ul>
  </div>
  `
}
//cria informações do card
function createInfo(imagem, hour, details) {
  return `
  <p>${details}</p>
  <li><img src="/img/icon=${imagem}.jpg" alt="Teste ${imagem}" /></li>
  <p>${hour}</p>
  `
}


function clickMenu(){
  document.getElementById('#itens')
  if(itens.style.display == 'block'){
    itens.style.display = 'none'
  }else{
    itens.style.display = 'block'
  }
}

document.querySelector("#cards").innerHTML = createCard("19/11", "sábado", "Culto de casais - Noite Italiana" +
createInfo("massa", "Horário: 19:30", "Igreja Local"))
+ createCard("26/11", "sábado", "Festa da multiplicação" +
createInfo("festa", "Horário: 19:30", "Igreja Local"))



const hamburger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () =>{
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})


document.querySelectorAll("nav-link").forEach(n => n.addEventListener("click", () =>{
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))