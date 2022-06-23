import Head from 'next/head'
import Image from 'next/image'
import react from 'react'
import styles from '../styles/Home.module.scss'
import {Navbar} from '../components/Navbar'
import Fade from "react-reveal/Fade"

export default function Home() {
  return (
    <div className="section">
      <div className="container">
        <div className={styles.home_wrap}>
          <div className={styles.image_wrap}>
            <img className={styles.mascot} src='/g_smile.png' alt="UWDSC Mascot"></img>
          </div>
          <div className={styles.club_name}>
            <div className={styles.uni}>
            <Fade bottom cascade>
              University of Waterloo
              </Fade>
            </div>
            <div className={styles.dsc}>
            <Fade bottom cascade>
              Data Science Club
              </Fade>
            </div>
          </div>
        </div>
        <a href="https://linktr.ee/uwdsc" className={styles.home_btn}>
          <div className={styles.btn_txt}>Join us!</div>
        </a>
        <div className={styles.intro}>
          <a className={styles.subtitle}>Welcome to the club!</a>
          <br></br>
          <a className={styles.txt}>We're a passionate, student-led club at the University of Waterloo.</a>
          <br></br>
          <a className={styles.txt}>You can find us in MC 3038, or reach out in our Discord server.</a>
          <br></br>
          <a className={styles.txt}>Insert whatever here.</a>
        </div>
      </div>
    </div>
    
  )
}
