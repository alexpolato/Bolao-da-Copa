import "./home.css";

function Home() {
  return (
    <div className="Container">
      <selection class="sobre">
        <div class="extras">
          <img src="neymarjr.png" alt="" />
        </div>
        <div class="center">
          <div class="texto-sobre">
            <h1>
              <span style={{ color: `#f2bd31` }}>
                O melhor site para o seu bolão!
              </span>
              <br />
            </h1>
            <p>Crie seu grupo e convide amigos para participar.</p>
            <button>Login</button>
            <button>Cadastrar</button>
          </div>
        </div>
      </selection>
    </div>
  );
}

export default Home;
