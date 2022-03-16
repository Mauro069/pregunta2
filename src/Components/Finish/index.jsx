import styles from "./Finish.module.scss";

const Finish = ({ PreguntasData, setViewCorrects, viewCorrects, acertadas }) => {
  return (
    <>
      <div className={styles.juegoTerminado}>
        {viewCorrects ? (
          <div className={styles.correctas}>
            {PreguntasData.map((pregunta, i) => (
              <div>
                <p>Pregunta {i + 1}</p>
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
  );
};

export default Finish;
