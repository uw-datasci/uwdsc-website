import React from 'react'
import styles from '../styles/main.module.scss'

import Navbar from './Navbar'
export default function Layout({ children }) {
    return (
      <>
      <Navbar />
        <main className='pad'>{children}</main>
      </>
    )
  }