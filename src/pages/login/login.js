import style from "./login.module.css";
import Header from "../../components/header";
import NeymarBg from "../../assets/icons/neymarjr2.png";
import api from "../../config/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Navigate, redirect, Route } from "react-router-dom";
import paths from "../../utils/paths";
import Bet from "../bet/bet";

function Login() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [id, setId] = useState("");

  const navigate = useNavigate();

  async function login(e) {
    e.preventDefault();
    try {
      const result = await api.post("auth/login", {
        username: name,
        password: pass,
      });
      console.log(result);
      if (result.data == "Username or password invalid") {
        alert("Username or password invalid");
      } else {
        setId(result.data.id);
        localStorage.setItem("userID", id);
        alert("Logado!");
        navigate("/bet");
      }
    } catch (error) {
      console.log("Authorization failed : " + error.message);
    }
  }
  async function register(e) {
    e.preventDefault();
    try {
      const result = await api.post("auth/register", {
        username: name,
        password: pass,
      });
      console.log(result);
      if (result.data == "User already exists") {
        alert("User already exists");
      } else {
        setId(result.data.id);
        localStorage.setItem("userID", id);
        alert("Registrado!");
      }
    } catch (error) {
      console.log("Authorization failed : " + error.message);
    }
  }
  // .then((response) => {
  //   console.log(result);
  //   console.log(response);
  // })
  // // Salva o ID que vem no result no localstorage e manda ele pra '/bet'
  // .catch((error) => {
  //   console.error(error);
  // });

  return (
    <div className={style.Container}>
      <Header />
      <div className={style.formContainer}>
        <h1 className={style.login}>Iniciar sessão</h1>
        <form>
          <input
            className={style.inputContainer}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome de Usuario"
          />
          <p>
            <input
              className={style.inputContainer}
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Senha"
            />
          </p>
          <p>
            {/* <div className={style.checkbox}>
                <input
                  type="checkbox"
                  name="manterlogado"
                  id="manterlogado"
                  value=""
                />
                <label for="manterlogado">Manter-me logado</label>
              </div> */}
          </p>
          <p>
            <button
              className={style.inputBotao}
              onClick={(e) => {
                login(e);
              }}
            >
              Logar
            </button>
            <button
              className={style.inputBotao}
              onClick={(e) => {
                register(e);
              }}
            >
              Cadastrar
            </button>
          </p>
        </form>
        {/* <button className={style.inputBotao} type="submit">
            Logar
          </button> */}
        {/* </p> */}
      </div>
      <div className={style.neymar}>
        <img src={NeymarBg} />
      </div>
    </div>
  );
}

export default Login;
