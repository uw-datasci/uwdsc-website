import Head from 'next/head'
import Image from 'next/image'
import react from 'react'
import styles from '../styles/Home.module.css'
import {Navbar} from '../components/Navbar'


export default function Home() {
  return (
    <>
    <div className='pad' style={{paddingTop:'150px', paddingLeft:'50px'} }>
      Welcome to the Homepage for UW DSC
    </div>
    </>
  )
}
