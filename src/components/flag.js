import Alemanha from "../assets/flags/alemanha.svg";
import ArabiaSaudita from "../assets/flags/arabia-saudita.svg";
import Argentina from "../assets/flags/argentina.svg";
import Australia from "../assets/flags/australia.svg";
import Belgica from "../assets/flags/belgica.svg";
import Brasil from "../assets/flags/brasil.svg";
import Camaroes from "../assets/flags/camaroes.svg";
import Canada from "../assets/flags/canada.svg";
import CoreiaSul from "../assets/flags/coreia-sul.svg";
import CostaRica from "../assets/flags/costa-rica.svg";
import Croacia from "../assets/flags/croacia.svg";
import Dinamarca from "../assets/flags/dinamarca.svg";
import Equador from "../assets/flags/equador.svg";
import Espanha from "../assets/flags/espanha.svg";
import Eua from "../assets/flags/eua.svg";
import Franca from "../assets/flags/franca.svg";
import Gana from "../assets/flags/gana.svg";
import Holanda from "../assets/flags/holanda.svg";
import Inglaterra from "../assets/flags/inglaterra.svg";
import Ira from "../assets/flags/ira.svg";
import Japao from "../assets/flags/japao.svg";
import Marrocos from "../assets/flags/marrocos.svg";
import Mexico from "../assets/flags/mexico.svg";
import Gales from "../assets/flags/gales.svg";
import Polonia from "../assets/flags/polonia.svg";
import Portugal from "../assets/flags/portugal.svg";
import Qatar from "../assets/flags/qatar.svg";
import Senegal from "../assets/flags/senegal.svg";
import Servia from "../assets/flags/servia.svg";
import Suica from "../assets/flags/suica.svg";
import Tunisia from "../assets/flags/tunisia.svg";
import Uruguai from "../assets/flags/uruguai.svg";

const image = {
  alemanha: Alemanha,
  "arabia-saudita": ArabiaSaudita,
  argentina: Argentina,
  australia: Australia,
  belgica: Belgica,
  brasil: Brasil,
  camaroes: Camaroes,
  canada: Canada,
  "coreia-sul": CoreiaSul,
  "costa-rica": CostaRica,
  croacia: Croacia,
  dinamarca: Dinamarca,
  equador: Equador,
  espanha: Espanha,
  eua: Eua,
  franca: Franca,
  gana: Gana,
  holanda: Holanda,
  inglaterra: Inglaterra,
  ira: Ira,
  japao: Japao,
  marrocos: Marrocos,
  mexico: Mexico,
  gales: Gales,
  polonia: Polonia,
  portugal: Portugal,
  qatar: Qatar,
  senegal: Senegal,
  servia: Servia,
  suica: Suica,
  tunisia: Tunisia,
  uruguai: Uruguai,
};

function Flag({ team, dragStart }) {
  if (!team) return null;

  return (
    <img
      draggable="true"
      id={team}
      onDragStart={dragStart}
      src={image[team]}
      alt={`bandeira do ${image[team]}`}
    />
  );
}

export default Flag;
