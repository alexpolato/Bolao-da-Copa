

let teams = {
    brasil: `./componentes/${player1}.svg`
};
document.querySelector('#app').innerHTML = `
    <header>
        <div class='title'> Bolão da Copa<div>
    </header>
    <main class="cardContainer">
        ${createCard('Semi', 'final',game('portugal', 'gana'))} 
        ${createCard('Semi', 'final',game('brasil', 'suica'))}
        ${createCard('Semi', 'final',game('camaroes', 'brasil'))}
    </main>
`