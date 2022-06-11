import Head from 'next/head'
import Image from 'next/image'
import react from 'react'
import styles from '../styles/Home.module.css'
import {Navbar} from '../components/Navbar'
import React, { useState,useEffect } from 'react';
import {useTheme} from 'next-themes';  
import { theme } from '../tailwind.config'

let x= 0; 
let y=1;


let getimage = () =>{
  if(theme === 'light'){
    return <Image
                    src='/uwwhale.svg'
                    alt='Not available'
                    width={500}
                    height={250}
      />


  }
  else{
    return <Image
                    src='/whale_dark.svg'
                    alt='Not available'
                    width={500}
                    height={250}
      />

  }
} 

export default function Home() {

  const {theme,setTheme} = useTheme();

  useEffect(()=>{
    setTheme('dark')
  },[])
  
  if (theme === ''){
    return null 
  }

  

  else{
    console.log(theme)
    return (
      <div>
          <div className='light:light dark:dark' style={{paddingTop:'200px'}}>
            <div style={{display: 'flex', 
            flowdirection: 'row',
            justifyContent:'space-between', 
            // alignItems: 'baseline',
            paddingLeft: '60px',
            }} > 

            {getimage()}
                
          
            <div style={{display:'flex', flowdirection:'column', flexFlow: 'column wrap', transform:`scaleY(1)`  }}>
              <p style={{fontSize:'48px', fontFamily:'Montserrat', transform:`translate(${x}px, 25px)`}}>
              Welcome to the 
              </p>
              <p style={{fontSize:'57.6px', fontFamily:'Montserrat', transform:`translate(${x}px, 0px)` }}>
                Univeristy of Waterloo
              </p>
              <p style={{fontSize:'76.8px', fontFamily:'Montserrat', transform:`translate(${x}px, -25px)` }}>
                Data Science Club
              </p>
      
            </div>
      
            </div>
      
            
      
          </div>
      
          <div style={{display:'flex', justifyContent:'center', paddingTop:'150px'}}>
          <button className="joinus hover:joinus text-black font-bold py-2 px-4 rounded-full" style={{fontSize:'38.4px', 
        fontFamily:'Montserrat', fontWeight:'bold', backgroundColor:'#98BA8C'}}> 
            Join Us!
          </button>
      
          </div>
      
          </div>
      
     
          
        )
  }

    

  
}

// 76.8 
// 57.6 
// 48 