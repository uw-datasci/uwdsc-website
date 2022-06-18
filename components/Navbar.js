
import React from 'react'; 
import {Transition} from "@headlessui/react"; 
import Link from 'next/link';
import Image from 'next/image'
import styles from '../styles/Navbar.module.scss'

const Navbar = () => {
    return (
        <div className="section">
                <div className={styles.nav_wrap}>
                    <Link href='/'>
                    <img className={styles.navbar_logo} src='/uwdsc_logo.png' alt="logo"></img>
                    </Link>
                    <div className={styles.links_wrapper}>
                        <div className={styles.nav_item}>
                            <Link href='/about'> About </Link>
                        </div>
                        <div className={styles.nav_item}>
                            <Link href='/events'> Events </Link>
                        </div>
                        <div className={styles.nav_item}>
                            <Link href='/about/team'> Meet the Team </Link>
                        </div>
                        <div className={styles.nav_item}>
                            <Link href='/resources'> Resources </Link>
                        </div>
                        <div className={styles.nav_item}>
                            <Link href='/about/contact'> Contact </Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Navbar
