import styles from "./Start.module.scss";

const Start = ({ setStart }) => {
  return (
    <div className={styles.start}>
      <span>
        Tienes 15 segundos para responder 5 preguntas de opción multiple
      </span>
      <button onClick={() => setStart(true)}>Comenzar</button>
    </div>
  );
};

export default Start;
