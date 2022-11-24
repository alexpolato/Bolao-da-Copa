import MakeList from "../../components/lista";
import "./bet.css";
import Flag from "../../components/flag";
import { useState } from "react";

function Bet() {
  const teams = [
    "alemanha",
    "arabia-saudita",
    "argentina",
    "australia",
    "belgica",
    "brasil",
    "camaroes",
    "canada",
    "coreia-sul",
    "costa-rica",
    "croacia",
    "dinamarca",
    "equador",
    "espanha",
    "eua",
    "franca",
    "gana",
    "holanda",
    "inglaterra",
    "ira",
    "japao",
    "marrocos",
    "mexico",
    "gales",
    "polonia",
    "portugal",
    "qatar",
    "senegal",
    "servia",
    "suica",
    "tunisia",
    "uruguai",
  ];

  const [dragHoverId, setDragHoverId] = useState();
  const [dragElement, setDragElement] = useState();
  const [semiFinal1, setSemiFinal1] = useState({});
  const [semiFinal2, setSemiFinal2] = useState({});
  const [final, semiFinal] = useState({});

  function dragStart(event) {
    setDragElement(event.target.id);
  }

  function drop1(event) {
    event.preventDefault();
    setDragHoverId();
    setSemiFinal1((prev) => {
      return {
        ...prev,
        [event.target.id]: dragElement,
      };
    });
  }
  function drop2(event) {
    event.preventDefault();
    setDragHoverId();
    setSemiFinal2((prev) => {
      return {
        ...prev,
        [event.target.id]: dragElement,
      };
    });
  }

  function allowDrop(event) {
    event.preventDefault();
  }

  function handleFinalSelect(teamType, team) {
    semiFinal((prev) => {
      return {
        ...prev,
        [teamType]: team,
      };
    });
  }

  return (
    <main class="cardContainer">
      <div class="cards">
        <h2>Monte a Semi-final da Copa</h2>
        <div class="cardSemi">
          <div class="card">
            <h2>Semi-final 1</h2>
            <ul>
              <li>
                <button
                  onClick={() => handleFinalSelect("team1", semiFinal1.team1)}
                  class="buttonFlags"
                >
                  <div className="flagWrapper">
                    <Flag team={semiFinal1.team1} />
                  </div>
                  <div
                    onDragEnter={() => setDragHoverId("semiFinal1-team1")}
                    onDragLeave={() => setDragHoverId()}
                    id="team1"
                    class={`bandPicked ${
                      dragHoverId === "semiFinal1-team1"
                        ? "bandPickedHover"
                        : ""
                    }`}
                    onDrop={drop1}
                    onDragOver={allowDrop}
                  ></div>
                </button>
                <strong>vs</strong>
                <button
                  onClick={() => handleFinalSelect("team1", semiFinal1.team2)}
                  class="buttonFlags"
                >
                  <div className="flagWrapper">
                    <Flag team={semiFinal1.team2} />
                  </div>
                  <div
                    id="team2"
                    onDragEnter={() => setDragHoverId("semiFinal1-team2")}
                    onDragLeave={() => setDragHoverId()}
                    class="bandPicked"
                    onDrop={drop1}
                    onDragOver={allowDrop}
                  ></div>
                </button>
              </li>
            </ul>
          </div>
          <div class="card">
            <h2>Semi-final 2</h2>
            <ul>
              <li>
                <button
                  onClick={() => handleFinalSelect("team2", semiFinal2.team1)}
                  class="buttonFlags"
                >
                  <div className="flagWrapper">
                    <Flag team={semiFinal2.team1} />
                  </div>
                  <div
                    class="bandPicked"
                    id="team1"
                    onDragEnter={() => setDragHoverId("semiFinal2-team1")}
                    onDragLeave={() => setDragHoverId()}
                    onDrop={drop2}
                    onDragOver={allowDrop}
                  ></div>
                </button>
                <strong>vs</strong>
                <button
                  onClick={() => handleFinalSelect("team2", semiFinal2.team2)}
                  class="buttonFlags"
                >
                  <div className="flagWrapper">
                    <Flag team={semiFinal2.team2} />
                  </div>
                  <div
                    id="team2"
                    onDragEnter={() => setDragHoverId("semiFinal2-team2")}
                    onDragLeave={() => setDragHoverId()}
                    class="bandPicked"
                    onDrop={drop2}
                    onDragOver={allowDrop}
                  ></div>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div class="cardFinal">
          <div class="card">
            <h2>Final</h2>
            <ul>
              <li>
                <div class="bandPicked">
                  <Flag team={final.team1} />
                </div>
                <strong>vs</strong>
                <div class="bandPicked">
                  <Flag team={final.team2} />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <h2>Escolha os times aqui!</h2>
        <div class="lista" ondrop="drop(event)">
          <MakeList teams={teams} dragStart={dragStart} />
        </div>
      </div>
    </main>
  );
}

export default Bet;
