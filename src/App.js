import { useEffect, useRef, useState } from "react";
import { PreguntasData } from "./Data/Preguntas";

import Header from "./Components/Header";
import Opciones from "./Components/Opciones";
import Timer from "./Components/Timer";

import styles from "./App.module.scss";

const App = () => {
  const [index, setIndex] = useState(0);
  const [acertadas, setAcertadas] = useState(0);
  const [time, setTime] = useState(15);
  const [pause, setPause] = useState(false);
  const [viewCorrects, setViewCorrects] = useState(false);

  const myRef = useRef(null);

  function restaSegundos() {
    let ref = myRef.current.value;
    setTime(ref);
  }

  useEffect(() => {
    let intervalo = null;
    if (pause === false) {
      intervalo = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    }
    if (time === 0) {
      setPause(true);
      clearInterval(intervalo);
    }

    if (!PreguntasData[index]?.pregunta) {
      setTime(0);
      setPause(true);
    }

    return () => clearInterval(intervalo);
  }, [time, pause, index]);

  const onClick = (opcion, pregunta) => {
    if (opcion === pregunta) {
      setAcertadas(acertadas + 1);
      setIndex(index + 1);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <main>
      <Header />
      <div>
        <div className={styles.pregunta}>
          {PreguntasData[index]?.pregunta && !pause
            ? PreguntasData[index]?.pregunta
            : "Juego terminado"}
        </div>
        <Opciones
          pause={pause}
          index={index}
          onClick={onClick}
          PreguntasData={PreguntasData}
        />
      </div>
      <Timer
        PreguntasData={PreguntasData}
        myRef={myRef}
        index={index}
        time={time}
        restaSegundos={restaSegundos}
      />
      {pause && (
        <>
          <div className={styles.juegoTerminado}>
            {viewCorrects ? (
              <div className={styles.correctas}>
                {PreguntasData.map((pregunta, i) => (
                  <div>
                    <p>Pregunta {i}</p>
                    <h2>{pregunta.opcionCorrecta}</h2>
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.mensaje}>
                <h2>
                  {acertadas === PreguntasData.length
                    ? "¡Felicitaciones! Acertaste todas"
                    : "Juego terminado"}
                </h2>
                <h2 className={styles.acertadas}>Acertadas: {acertadas}</h2>
              </div>
            )}
          </div>
          <div className={styles.buttons}>
            <button
              className={styles.playAgain}
              onClick={() => window.location.reload()}
            >
              Volver a jugar
            </button>
            <button
              className={styles.viewCorrects}
              onClick={() => setViewCorrects(!viewCorrects)}
            >
              {!viewCorrects ? "Ver respuestas" : "Ocultar"}
            </button>
          </div>
        </>
      )}
    </main>
  );
};

export default App;
