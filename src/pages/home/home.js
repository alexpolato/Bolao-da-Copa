import style from "./home.module.css";
import Header from "../../components/header";
import NeymarBg from "../../assets/icons/neymarjr.png";

function Home() {
  return (
    <div className={style.Container}>
      <Header />
      <div>
        <selection className={style.sobre}>
          <div className={style.extras}>
            <img src={NeymarBg} alt="neymar bg" />
          </div>
          <div className={style.center}>
            <div className={style.intro}>
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
    </div>
  );
}

export default Home;
