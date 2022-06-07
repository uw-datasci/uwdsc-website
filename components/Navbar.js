
import React from 'react'; 
import {Transition} from "@headlessui/react"; 
import Link from 'next/link';
import Image from 'next/image'
import styles from '../styles/Home.module.scss'


const Navbar = () => {
  return (
    <nav className='shodow-sm fixed w-full z-10'> 
    <div className='w-full'>
    <div className='flex items-center h-22 w-full'>
        <div className='flex items-center mx-18 justify-evenly w-full' >
            <div className='flex justify-center items-center flex-shrink-0' style={{padding:'20px'}} >
                <Image

                src='/uwdsc_logo.png'
                alt='UWaterloo Data Science Club Logo'
                width={70}
                height={70}
                />
            </div>

            <div className='hidden md:block'>
                <div className='flex ml-10 items-baseline space-x-4' style={{fontWeight:'bold', fontSize:'20px'}}>
                    <div className={styles.Nav_Item}>
                        <Link href='/about'> About </Link>
                    </div>
                </div>
            </div>
            <div className='hidden md:block'>
                <div className='flex ml-10 items-baseline space-x-4 Nav-Item' style={{fontWeight:'bold', fontSize:'20px'}}>
                    <div className={styles.Nav_Item}>
                        <Link href='/events'> Events </Link>
                    </div>
                </div>
            </div>
            <div className='hidden md:block'>
                <div className='flex ml-10 items-baseline space-x-4 Nav-Item' style={{fontWeight:'bold', fontSize:'20px'}}>
                    <div className={styles.Nav_Item}>
                        <Link href='/about/team'> Meet the team </Link>
                    </div>
                </div>
            </div>
            <div className='hidden md:block'>
                <div className='flex ml-10 items-baseline space-x-4 Nav-Item' style={{fontWeight:'bold', fontSize:'20px'}}>
                    <div className={styles.Nav_Item}>
                        <Link href='/resources'> Resources </Link>
                    </div>
                </div>
            </div>
            <div className='hidden md:block'>
                <div className='flex ml-10 items-baseline space-x-4 Nav-Item' style={{fontWeight:'bold', fontSize:'20px'}}>
                    <div className={styles.Nav_Item}>
                        <Link href='/about/contact'> Contact </Link>
                    </div>
                </div>
            </div>

        
            <div
      className="md:w-14 md:h-4 w-12 h-4 flex items-center bg-green-500 rounded-full p-1 cursor-pointer"
    >
      {/* Switch */}
      <div
        className =  "bg-white md:w-5 md:h-5 h-5 w-5 rounded-full shallow-md"
      ></div>
    </div>
        
        </div>

    </div>

    </div>
    </nav>
  )
}

export default Navbar