import React from 'react'; 
import {Transition} from "@headlessui/react"; 
import Link from 'next/link';
import Image from 'next/image'
import styles from '../styles/Banner.module.scss'
import Fade from "react-reveal/Fade"

const Banner = () => {
    return (
        <div className="section">
            <div className={styles.banner_wrap}>
                <img className={styles.mascot} src='/VEchoLeft.png' alt="left mascot"></img>
                <div className="subtitle">
                    <div className={styles.title}>
                        <Fade bottom cascade>Executive Team</Fade>
                    </div>
                </div>
                <img className={styles.mascot} src='/VEchoRight.png' alt="right mascot"></img>
            </div>
        </div>
    )
}

export default Banner
