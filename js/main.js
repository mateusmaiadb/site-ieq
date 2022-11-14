function createGame(player1, hour, player2, details) {
    return `
    <p>${details}</p>
      <li>
        <img src="./assets/bandeiras-dos-países/icon=${player1}.svg" alt="Bandeira do ${player1}" />
        <strong>${hour}</strong>
        <img src="./assets/bandeiras-dos-países/icon=${player2}.svg" alt="Bandeira da ${player2}" />
      </li>
    `
}

function createCard(date, day, games) {
    return `
       <div class="card">
       <h2>${date}<span>${day}</span></h2>
          <ul>
            ${games}
          </ul>
        </div>
    `
}


document.querySelector("#app").innerHTML = `
    <header>
        <img src="/img/ieq-logo-celulas.jpg" alt="Logo da Igreja">
    </header>
        <main id="cards">
        ${createCard("24/11", "quinta", createGame('switzerland', '07:00', 'cameroon', 'Group G')
    + createGame('brazil', '16:00', 'serbia', '1ª Rodada'))}
        
        ${createCard("28/11", "segunda", createGame('cameroon', '07:00', 'serbia', 'Grupo G')
        + createGame('brazil', '13:00', 'switzerland', '2ª Rodada'))}

        ${createCard("02/12", "sexta", createGame('switzerland', '16:00', 'serbia', 'Grupo G')
            + createGame('cameroon', '16:00', 'brazil', '3ª Rodada'))}
        </main>
`