import styles from "./Opciones.module.scss";

const Opciones = ({ index, onClick, PreguntasData, pause }) => {
  return (
    <div className={styles.opciones}>
      {PreguntasData && PreguntasData[index]?.pregunta && !pause
        ? PreguntasData[index]?.opciones.map((opcion, i) => (
            <p key={i}>
              <button
                onClick={() =>
                  onClick(opcion, PreguntasData[index].opcionCorrecta)
                }
              >
                {opcion}
              </button>
            </p>
          ))
        : null}
    </div>
  );
};

export default Opciones;
