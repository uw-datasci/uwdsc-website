import Head from 'next/head'
import Image from 'next/image'
import react from 'react'
import styles from '../styles/Home.module.scss'
import {Navbar} from '../components/Navbar'

export default function Home() {
  return (
    <div>
    <div style={{paddingTop:'200px'}}>
      <div style={{display: 'flex', 
      flowdirection: 'row',
      justifyContent:'space-between', 
      // alignItems: 'baseline',
      paddingLeft: '60px',
      }} > 

               <Image
                src='/g_smile.png'
                alt='Not available'
                width={500}
                height={300}
                />
                <div style={{display:'flex', flowdirection:'column', flexFlow: 'column wrap'}}>
        <div style={{fontSize:'48px', fontFamily:'Montserrat', paddingRight:'10px', gap:'1px'}}>
        Welcome to the 
        </div>
        <div style={{fontSize:'57.6px', fontFamily:'Montserrat', paddingRight:'10px', gap:'1px'}}>
          University of Waterloo
        </div>
        <div style={{fontSize:'76.8px', fontFamily:'Montserrat', paddingRight:'10px', gap:'1px'}}>
          Data Science Club
        </div>

      </div>

      </div>

      

    </div>

    <div style={{display:'flex', justifyContent:'center', paddingTop:'150px'}}>
    <button className="bg-green-600 hover:bg-green-600 text-black font-bold py-2 px-4 rounded-full" style={{fontSize:'38.4px', 
  fontFamily:'Montserrat', fontWeight:'bold'}}> 
      Join Us!
    </button>

    </div>

    </div>
  )
}
