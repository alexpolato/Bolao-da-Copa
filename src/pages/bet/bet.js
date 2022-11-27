import MakeList from "../../components/list";
import "./bet.css";
import Flag from "../../components/flag";
import { useState } from "react";
import TacaCamp from "../../assets/icons/taca-campeao.png";
import TacaFinal from "../../assets/icons/taca-final.svg";
import TacaSemi from "../../assets/icons/taca-semi.svg";

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
  const [campeao, finalCampeao] = useState({});

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

  function handleCampeaoSelect(teamType, team) {
    finalCampeao((prev) => {
      return {
        ...prev,
        [teamType]: team,
      };
    });
  }

  return (
    <div id="app">
      <main className="cardContainer">
        <div className="cards">
          <div className="cardSemi">
            <div className="card">
              <div className="cardTitle">
                <img alt="" src={TacaSemi} width="50px" height="50px" />
                <h2>Semi-final</h2>
                <img alt="" src={TacaSemi} width="50px" height="50px" />
              </div>
              <ul>
                <li>
                  <div></div>
                  <button
                    onClick={() => handleFinalSelect("team1", semiFinal1.team1)}
                    className="buttonFlags"
                  >
                    <div class="flagWrapper">
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
                      class={`bandPicked ${
                        dragHoverId === "semiFinal1-team2"
                          ? "bandPickedHover"
                          : ""
                      }`}
                      onDrop={drop1}
                      onDragOver={allowDrop}
                    ></div>
                  </button>
                </li>
              </ul>
            </div>
            <div class="card">
              <div class="cardTitle">
                <img alt="" src={TacaSemi} width="50px" height="50px" />
                <h2>Semi-final</h2>
                <img alt="" src={TacaSemi} width="50px" height="50px" />
              </div>
              <ul>
                <li>
                  <button
                    onClick={() => handleFinalSelect("team2", semiFinal2.team1)}
                    class="buttonFlags"
                  >
                    <div class="flagWrapper">
                      <Flag team={semiFinal2.team1} />
                    </div>
                    <div
                      className={`bandPicked ${
                        dragHoverId === "semiFinal2-team1"
                          ? "bandPickedHover"
                          : ""
                      }`}
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
                    className="buttonFlags"
                  >
                    <div class="flagWrapper">
                      <Flag team={semiFinal2.team2} />
                    </div>
                    <div
                      id="team2"
                      onDragEnter={() => setDragHoverId("semiFinal2-team2")}
                      onDragLeave={() => setDragHoverId()}
                      className={`bandPicked ${
                        dragHoverId === "semiFinal2-team2"
                          ? "bandPickedHover"
                          : ""
                      }`}
                      onDrop={drop2}
                      onDragOver={allowDrop}
                    ></div>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="card">
              <div className="cardTitle">
                <img alt="" src={TacaFinal} width="50px" height="50px" />
                <h2>Final</h2>
                <img alt="" src={TacaFinal} width="50px" height="50px" />
              </div>
              <ul>
                <li>
                  <button
                    onClick={() => handleCampeaoSelect("team", final.team1)}
                    className="buttonFlags"
                  >
                    <div className="bandPicked">
                      <Flag team={final.team1} />
                    </div>
                  </button>
                  <strong>vs</strong>
                  <button
                    onClick={() => handleCampeaoSelect("team", final.team2)}
                    className="buttonFlags"
                  >
                    <div className="bandPicked">
                      <Flag team={final.team2} />
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="cardCampeao">
              <img alt="" src={TacaCamp} width="100px" height={100} />
              <ul>
                <li>
                  <div>
                    <Flag team={campeao.team} />
                  </div>
                </li>
              </ul>
            </div>
            <div className="submitButton">
              <button
                onClick={() => {
                  alert(campeao.team);
                }}
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="lista" onDrop="drop(event)">
            <MakeList teams={teams} dragStart={dragStart} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Bet;
