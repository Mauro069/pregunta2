import styles from "./Timer.module.scss";

const Timer = ({ PreguntasData, index, myRef, time, restaSegundos }) => {
  const porcentajeBG = `${(100 / 15) * time}%`;

  return PreguntasData && PreguntasData[index]?.pregunta ? (
    <div className={styles.timer} style={{ width: porcentajeBG }}>
      <h1 ref={myRef} onChange={restaSegundos}>
        {time}'
      </h1>
    </div>
  ) : (
    <h1 className={styles.timer0}>0'</h1>
  );
};

export default Timer;
