
function createCard (player1, player2){
    return `
    <div class="card">
        <h2>Semi-final</h2>
        <ul>
        <li>
            <div class="bandContainer" ondrop="drop(event)"></div>
            <strong>vs</strong> 
            <div class="bandContainer" ondrop="drop(event)"></div>
  
        </li>
        </ul>
    </div>
    `
}

const teams = [ 'alemanha', 'arabia-saudita', 'argentina', 'australia', 'belgica', 'brasil', 'camaroes',
'canada','coreia-sul', 'costa-rica', 'croacia', 'dinamarca', 'equador', 'espanha', 'eua', 'franca', 'gana',
'holanda','inglaterra', 'ira', 'japao', 'marrocos', 'mexico', 'gales', 'polonia', 'portugal', 'qatar',
'senegal', 'servia', 'suica','tunisia', 'uruguai'];

function dragStart(event) {
    event.dataTransfer.setData(img, event.target.id);
  }

function makeList (teams){
    let count = 0;
    let ret = '';
    for(let i = 0; i < teams.length; i++){
        
        if (count < 4){
            ret = ret + 
            `<span draggable="true" ondragstart="dragStart(event)" id='bandeira ${i}'><img src="./assets/${teams[i]}.svg" alt="bandeira do ${teams[i]}"></span>`;
        }else{
            ret = ret + 
            `<br><span draggable="true" ondragstart="dragStart(event)" id='bandeira ${i}'><img src="./assets/${teams[i]}.svg" alt="bandeira do ${teams[i]}"></span>`;
            if(count == 4){
                count = 0;
            }
        }
        count++;
    }
    return ret;
}

document.querySelector('#app').innerHTML = `
    <header>
        <div class='title'> Bolão da Copa<div>
    </header>
    <main class="cardContainer">
        <div class="card">
            <h2>Semi-final</h2>
            <ul>
            <li>
                <div class="bandContainer" ondrop="drop(event)">Drop Aqui</div>
                <strong>vs</strong> 
                <div class="bandContainer" ondrop="drop(event)">Drop Aqui</div>

            </li>
            </ul>
        </div>
        <div >
            <h2>Lista das Bandeiras</h2>
            <div class='lista'>${makeList(teams)}</div>
        </div>
    </main>
`