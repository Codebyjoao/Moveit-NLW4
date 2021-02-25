import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile(){
  const {level} = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="http://github.com/Codebyjoao.png" alt="João Gonçalves"/>
      <div>
        <strong>João Gonçalves</strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
          Level {level}
        </p>
      </div>
    </div>
  )
}