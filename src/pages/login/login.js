import style from "./login.module.css";
import Header from "../../components/header";
import NeymarBg from "../../assets/icons/neymarjr2.png";

function Login() {
  return (
    <div className={style.Container}>
      <Header />
      <div className={style.formContainer}>
        <h1 className={style.login}>Iniciar sessão</h1>
        <form action="/bet" method="post">
          <input
            className={style.inputContainer}
            type="text"
            name="Usuario"
            placeholder="Nome de Usuario"
          />
          <p>
            <input
              className={style.inputContainer}
              type="password"
              name="Senha"
              placeholder="Senha"
            />
          </p>
          <p>
            <div className={style.checkbox}>
              <input
                type="checkbox"
                name="manterlogado"
                id="manterlogado"
                value=""
              />
              <label for="manterlogado">Manter-me logado</label>
            </div>
          </p>
          <p>
            {" "}
            <button className={style.inputBotao} type="submit">
              Cadastrar
            </button>
            <button className={style.inputBotao} type="submit">
              Logar
            </button>
          </p>
        </form>
      </div>
      <div className={style.neymar}>
        <img src={NeymarBg} />
      </div>
    </div>
  );
}

export default Login;
