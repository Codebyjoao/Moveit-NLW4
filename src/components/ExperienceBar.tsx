import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar(){
  const {currentExpirience,  experienceToNextlevel,} = useContext(ChallengesContext);

  const percentTonextLevel = Math.round(currentExpirience * 100) / experienceToNextlevel;

  return(
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{width:  `${percentTonextLevel}%`}}/>
        
        <span className={styles.currentExperience} style={{left: `${percentTonextLevel}%`}}>{ currentExpirience} xp</span>
      </div>
      <span>{ experienceToNextlevel} xp</span>
    </header>
  );
}