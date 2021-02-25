import { type } from 'os';
import {createContext, useState, ReactNode, useEffect} from 'react';
import challanges from '../../challenges.json'

interface Challenge {
  type: 'body | eye';
  description: string;
  amount: number;
}

interface ChallengesContextData{
  level: number;
  currentExpirience: number;
  experienceToNextlevel: number;
  challengesCompleted: number;
  activeChallenge: Challenge;
  levelUp: () => void;
  startNewChallenge:() => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
}

interface ChallengesProviderPorps{
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({children}: ChallengesProviderPorps) {
  const [level, setLevel] = useState(1);
  const [currentExpirience, setcurrentExpirience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const [activeChallenge, setactiveChallenge] = useState(null);

  const experienceToNextlevel = Math.pow((level + 1)* 4, 2);

  useEffect(() => {
    Notification.requestPermission();
  }, [])

  function levelUp (){
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengesIndex = Math.floor(Math.random() * challanges.length);
    const challenge = challanges[randomChallengesIndex];

    setactiveChallenge(challenge);

    new Audio('/notification.mp3').play();

    if( Notification.permission == 'granted'){
      new Notification('Novo Desafio 🎉!', {
        body: `Valendo ${challenge.amount}xp!`
      })
    }
  }

  function resetChallenge(){
    setactiveChallenge(null);
  }

  function completeChallenge(){
    if (!activeChallenge){
      return;
    }

    const {amount} = activeChallenge;

    let finalExperience = currentExpirience + amount;

    if (finalExperience > experienceToNextlevel) {
      finalExperience = finalExperience - experienceToNextlevel;
      levelUp();
    }

    setcurrentExpirience(finalExperience);
    setactiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }
  
  return(
    <ChallengesContext.Provider 
      value={{
        level, 
        currentExpirience, 
        experienceToNextlevel,
        challengesCompleted, 
        activeChallenge,
        levelUp,
        startNewChallenge,
        resetChallenge,
        completeChallenge
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}