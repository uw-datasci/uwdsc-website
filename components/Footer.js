import React from 'react'; 
import {Transition} from "@headlessui/react"; 
import Link from 'next/link';
import Image from 'next/image'
import styles from '../styles/Footer.module.scss'
import Fade from "react-reveal/Fade"

const Footer = () => {
    return (
        <div className="section">
            <div className={styles.footer_wrap}>
                <Fade cascade>Placeholder for Footer (&copy; 2022)</Fade>
            </div>
        </div>
    )
}

export default Footer
