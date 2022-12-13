import MakeList from "../../components/list";
import style from "./bet.module.css";
import Flag from "../../components/flag";
import { useState } from "react";
import TacaCamp from "../../assets/icons/taca-campeao.png";
import TacaFinal from "../../assets/icons/taca-final.svg";
import TacaSemi from "../../assets/icons/taca-semi.svg";
import Header from "../../components/header";
import api from "../../config/api";

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

  const [time1, setTime1] = useState();
  const [time2, setTime2] = useState();
  const [time3, setTime3] = useState();
  const [time4, setTime4] = useState();
  const [time5, setTime5] = useState();
  const [time6, setTime6] = useState();
  const [time7, setTime7] = useState();

  async function sendBet(e) {
    e.preventDefault();
    try {
      const result = await api.post("/bets/bet", {
        user_id: localStorage.getItem("userID"),
        semi_final_1_team_1: semiFinal1.team1,
        semi_final_1_team_2: semiFinal1.team2,
        semi_final_2_team_1: semiFinal2.team1,
        semi_final_2_team_2: semiFinal2.team2,
        final_team_1: final.team1,
        final_team_2: final.team2,
        champion: campeao.team,
      });
      alert("oii!");
      console.log(result);
      if (result.data === "You already voted") {
        alert("You already voted");
      } else {
        alert("Sucess voted");
      }
    } catch (error) {
      console.log("Authorization failed : " + error.message);
    }
  }

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

  function handleFinalSelect(event, teamType, team) {
    event.preventDefault();
    semiFinal((prev) => {
      return {
        ...prev,
        [teamType]: team,
      };
    });
  }

  function handleCampeaoSelect(event, teamType, team) {
    event.preventDefault();
    finalCampeao((prev) => {
      return {
        ...prev,
        [teamType]: team,
      };
    });
  }

  return (
    <div className={style.app}>
      <Header />
      <main className={style.cardContainer}>
        <form>
          <div className={style.cards}>
            <div className={style.cardSemi}>
              <div className={style.card}>
                <div className={style.cardTitle}>
                  <img alt="" src={TacaSemi} width="50px" height="50px" />
                  <h2>Semi-final</h2>
                  <img alt="" src={TacaSemi} width="50px" height="50px" />
                </div>
                <ul>
                  <li>
                    <button
                      onClick={(event) =>
                        handleFinalSelect(event, "team1", semiFinal1.team1)
                      }
                      value={time1}
                      setTime1
                      className={style.buttonFlags}
                    >
                      <div className={style.flagWrapper}>
                        {semiFinal1.team1 && <Flag team={semiFinal1.team1} />}
                      </div>
                      <div
                        onDragEnter={() => setDragHoverId("semiFinal1-team1")}
                        onDragLeave={() => setDragHoverId()}
                        id="team1"
                        className={`${style.bandPicked} ${
                          dragHoverId === "semiFinal1-team1"
                            ? style.bandPickedHover
                            : ""
                        }`}
                        onDrop={drop1}
                        onDragOver={allowDrop}
                      ></div>
                    </button>
                    <strong>vs</strong>
                    <button
                      onClick={(event) =>
                        handleFinalSelect(event, "team1", semiFinal1.team2)
                      }
                      value={time2}
                      className={style.buttonFlags}
                    >
                      <div className={style.flagWrapper}>
                        <Flag team={semiFinal1.team2} />
                      </div>
                      <div
                        id="team2"
                        onDragEnter={() => setDragHoverId("semiFinal1-team2")}
                        onDragLeave={() => setDragHoverId()}
                        className={`${style.bandPicked} ${
                          dragHoverId === "semiFinal1-team2"
                            ? style.bandPickedHover
                            : ""
                        }`}
                        onDrop={drop1}
                        onDragOver={allowDrop}
                      ></div>
                    </button>
                  </li>
                </ul>
              </div>
              <div className={style.card}>
                <div className={style.cardTitle}>
                  <img alt="" src={TacaSemi} width="50px" height="50px" />
                  <h2>Semi-final</h2>
                  <img alt="" src={TacaSemi} width="50px" height="50px" />
                </div>
                <ul>
                  <li>
                    <button
                      onClick={(event) =>
                        handleFinalSelect(event, "team2", semiFinal2.team1)
                      }
                      className={style.buttonFlags}
                      value={time3}
                    >
                      <div className={style.flagWrapper}>
                        <Flag team={semiFinal2.team1} />
                      </div>
                      <div
                        className={`${style.bandPicked} ${
                          dragHoverId === "semiFinal2-team1"
                            ? style.bandPickedHover
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
                      onClick={(event) =>
                        handleFinalSelect(event, "team2", semiFinal2.team2)
                      }
                      className={style.buttonFlags}
                      value={time4}
                    >
                      <div className={style.flagWrapper}>
                        <Flag team={semiFinal2.team2} />
                      </div>
                      <div
                        id="team2"
                        onDragEnter={() => setDragHoverId("semiFinal2-team2")}
                        onDragLeave={() => setDragHoverId()}
                        className={`${style.bandPicked} ${
                          dragHoverId === "semiFinal2-team2"
                            ? style.bandPickedHover
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
              <div className={style.card}>
                <div className={style.cardTitle}>
                  <img alt="" src={TacaFinal} width="50px" height="50px" />
                  <h2>Final</h2>
                  <img alt="" src={TacaFinal} width="50px" height="50px" />
                </div>
                <ul>
                  <li>
                    <button
                      onClick={(event) =>
                        handleCampeaoSelect(event, "team", final.team1)
                      }
                      value={time5}
                      className={style.buttonFlags}
                    >
                      <div className={style.bandPicked}>
                        <Flag team={final.team1} />
                      </div>
                    </button>
                    <strong>vs</strong>
                    <button
                      onClick={(event) =>
                        handleCampeaoSelect(event, "team", final.team2)
                      }
                      value={time6}
                      className={style.buttonFlags}
                    >
                      <div className={style.bandPicked}>
                        <Flag team={final.team2} />
                      </div>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className={style.cardCampeao}>
                <img alt="" src={TacaCamp} width="100px" height={100} />
                <ul>
                  <li>
                    <div>
                      <Flag team={campeao.team} value={time7} />
                    </div>
                  </li>
                </ul>
              </div>
              <div className={style.submitButton}>
                <button
                  type="submit"
                  onClick={(e) => {
                    if (
                      semiFinal1.team1 &&
                      semiFinal1.team2 &&
                      semiFinal2.team1 &&
                      semiFinal2.team2 &&
                      final.team1 &&
                      final.team2 &&
                      campeao.team !== undefined
                    ) {
                      if (
                        semiFinal1.team1 !== semiFinal1.team2 &&
                        semiFinal1.team1 !== semiFinal2.team1 &&
                        semiFinal1.team1 !== semiFinal2.team2 &&
                        semiFinal1.team2 !== semiFinal2.team1 &&
                        semiFinal1.team2 !== semiFinal2.team2 &&
                        semiFinal2.team1 !== semiFinal2.team2
                      ) {
                        alert(campeao.team);
                        setTime1(semiFinal1.team1);
                        setTime2(semiFinal1.team2);
                        setTime3(semiFinal2.team1);
                        setTime4(semiFinal2.team2);
                        setTime5(final.team1);
                        setTime6(final.team2);
                        setTime7(campeao.team);
                        sendBet(e);
                      } else {
                        alert(
                          "Erro: em algum dos jogos ha times se repetindo!"
                        );
                      }
                    } else {
                      alert("Erro: aposta incompleta!");
                    }
                  }}
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </form>
        <div>
          <div className={style.lista} onDrop="drop(event)">
            <MakeList teams={teams} dragStart={dragStart} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Bet;
