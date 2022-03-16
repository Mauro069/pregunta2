import { useEffect, useRef, useState } from "react";
import { PreguntasData } from "./Data/Preguntas";

import Header from "./Components/Header";
import Opciones from "./Components/Opciones";
import Timer from "./Components/Timer";

import styles from "./App.module.scss";
import Start from "./Components/Start";
import Finish from "./Components/Finish";

const App = () => {
  const [start, setStart] = useState(false);
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
    if (start === true) {
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
    }
  }, [time, pause, index, start]);

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
      {!start && <Start setStart={setStart} />}
      {start === true && (
        <>
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
            <Finish
              PreguntasData={PreguntasData}
              setViewCorrects={setViewCorrects}
              viewCorrects={viewCorrects}
              acertadas={acertadas}
            />
          )}
        </>
      )}
    </main>
  );
};

export default App;
