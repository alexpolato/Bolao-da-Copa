import Logo from "../assets/icons/logosite-nobg.png";
import "./header.css";
import paths from "../utils/paths";

function Header() {
  return (
    <header>
      <div class="logoContainer">
        <div class="logo">
          <a href={paths.home}>
            <img alt="" src={Logo} width="100px" />
          </a>
        </div>
        <div class="title">Bolão da Copa</div>
      </div>
      <div class="menu">
        <a href={paths.bet}>Bolão</a>
        {/* <a href={paths.}>Regras</a> */}
        <a href={paths.contato}>Contato</a>
      </div>
    </header>
  );
}

export default Header;
