import Alemanha from "../assets/alemanha.svg";
import ArabiaSaudita from "../assets/arabia-saudita.svg";
import Argentina from "../assets/argentina.svg";
import Australia from "../assets/australia.svg";
import Belgica from "../assets/belgica.svg";
import Brasil from "../assets/brasil.svg";
import Camaroes from "../assets/camaroes.svg";
import Canada from "../assets/canada.svg";
import CoreiaSul from "../assets/coreia-sul.svg";
import CostaRica from "../assets/costa-rica.svg";
import Croacia from "../assets/croacia.svg";
import Dinamarca from "../assets/dinamarca.svg";
import Equador from "../assets/equador.svg";
import Espanha from "../assets/espanha.svg";
import Eua from "../assets/eua.svg";
import Franca from "../assets/franca.svg";
import Gana from "../assets/gana.svg";
import Holanda from "../assets/holanda.svg";
import Inglaterra from "../assets/inglaterra.svg";
import Ira from "../assets/ira.svg";
import Japao from "../assets/japao.svg";
import Marrocos from "../assets/marrocos.svg";
import Mexico from "../assets/mexico.svg";
import Gales from "../assets/gales.svg";
import Polonia from "../assets/polonia.svg";
import Portugal from "../assets/portugal.svg";
import Qatar from "../assets/qatar.svg";
import Senegal from "../assets/senegal.svg";
import Servia from "../assets/servia.svg";
import Suica from "../assets/suica.svg";
import Tunisia from "../assets/tunisia.svg";
import Uruguai from "../assets/uruguai.svg";

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
