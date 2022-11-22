
const teams = [
    {team:'alemanha'},
    {team:'arabia-saudita'},
    {team:'argentina'},
    {team:'australia'},
    {team:'belgica'},
    {team:'brasil'},
    {team:'camaroes'},
    {team:'canada'},
    {team:'coreia-sul'},
    {team:'costa-rica'},
    {team:'croacia'},
    {team:'dinamarca'},
    {team:'equador'},
    {team:'espanha'},
    {team:'eua'},
    {team:'franca'},
    {team:'gales'},
    {team:'gana'},
    {team:'holanda'},
    {team:'inglaterra'},
    {team:'ira'},
    {team:'japao'},
    {team:'marrocos'},
    {team:'mexico'},
    {team:'polonia'},
    {team:'portugal'},
    {team:'qatar'},
    {team:'senegal'},
    {team:'servia'},
    {team:'suica'},
    {team:'tunisia'},
    {team:'uruguai'
}];
function creatList (i, teams){
    return`<img src="./assets/${teams[i]['team']}.svg" alt="baideira do ${teams[i]['team']}">`
}

function makeList (teams){
    for(let i = 0; i < teams.length; i++){
        creatList(i, teams);
    }
}

document.querySelector('#app').innerHTML = 
`
    <main class="cardContainer">
        oii
        ${makeList(teams)} 
    </main>
`