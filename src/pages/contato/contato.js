import Header from "../../components/header";
import style from "./contato.module.css";
import NeymarBg from "../../assets/icons/neymarjr2.png";

function Contato() {
  return (
    <div className={style.Container}>
      <Header />
      <div className={style.sobre}>
        <div className={style.extras}>
          <img src={NeymarBg} />
        </div>
        <div className={style.center}>
          <div className={style.texto}>
            <h1>
              <span style={{ color: `#f2bd31` }}>Contato</span>
              <br />
            </h1>
            <p>
              <a href="tel:+55(19)98282-2210">Telefone</a>
            </p>
            <p>
              <a href="mailto:contatobolaodacopa@gmail.com?subject=Contato com Bolão da Copa&cc=contatobolaodacopa@gmail.com&bcc=contatobolaodacopa@gmail.com&body">
                Enviar email
              </a>
            </p>
            <p>
              <a href="https://wa.me/5519982822210?text=Ol%C3%A1!">WhatsApp</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contato;
