import { useContext } from 'react';
import {CountdownContext} from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';


export function Countdown(){
 const {
   minutes, 
   seconds, 
   hasFinished, 
   isActive, 
   startCountdown, 
   resetCoutdown
  } = useContext(CountdownContext)

  const [minutesLeft, minutesRight ] = String(minutes).padStart(2, '0').split('');
  const [secondsLeft, secondsRight ] = String(seconds).padStart(2, '0').split('');

  
  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minutesLeft}</span>
          <span>{minutesRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
    </div>
  
    {hasFinished  ?(
      <button 
      disabled
      className={styles.countdownButton}
      >
        <div>Ciclo Encerrado<img src="icons/check-circle.svg" alt="check"/>
          <div/>
        </div> 
    </button>
    ): (
      <>
        {isActive ? (
          <button 
            type='button'
            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
            onClick={resetCoutdown}
            >
              Abandonar Ciclo 
          </button>
        ) : (
          <button 
            type='button'
            className={styles.countdownButton}
            onClick={startCountdown}
            >
              Iniciar um ciclo  <img src="icons/play.svg" alt="play"/>
          </button>
          ) }
      </>
    ) }
    </div>
  );
}