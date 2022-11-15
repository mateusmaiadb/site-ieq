
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

document.querySelector("#cards").innerHTML = createCard("19/11", "sábado", "Culto de casais - Noite Italiana" +
                                            createInfo("massa", "Horário: 19:30", "Igreja Local"))
                                          + createCard("26/11", "sábado", "Festa da multiplicação" +
                                            createInfo("festa", "Horário: 19:30", "Igreja Local"))