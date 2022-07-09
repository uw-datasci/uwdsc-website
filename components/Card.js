import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Card.module.scss';
import Fade from "react-reveal/Fade";
//import { execOnce } from 'next/dist/shared/lib/utils';

const Card = ({name, profile, position}) => {
    return (
        <div className={styles.card_wrap}>
            <img className={styles.pfp} src={profile} alt="Executive's profile picture"></img>
            <h1>{name}</h1>
            <h2>{position}</h2>
        </div>
    )
}

export default Card
