import Head from  'next/head'
import {GetServerSideProps} from 'next'

import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { ChallengeBox } from "../components/ChallengeBox";

import styles from '../styles/pages/Home.module.css'
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";

interface HomeProps{
  level: number;
  currentExpirience: number;
  challengesCompleted: number;
}

export default function Home(props : HomeProps){

  return (
    <ChallengesProvider 
      level={props.level}
      currentExpirience={props.currentExpirience}
      challengesCompleted={props.challengesCompleted}
      >
      <div className={styles.container}>
        <Head>
          <title>Inicio | Move.it</title>
        </Head>

        <ExperienceBar/>

        <CountdownProvider>
            <section>
            <div>
              <Profile/>
              <CompletedChallenges/>
              <Countdown/>
            </div>
            <div>
              <ChallengeBox/>
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async(ctx) => {

  const {level, currentExpirience, challengesCompleted} = ctx.req.cookies;

  return{
    props:{
      level: Number(level),
      currentExpirience: Number(currentExpirience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}