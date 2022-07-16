import React from 'react'
import {useState} from 'react'
import useEffect from 'react'


const PastEvent = () => {

   const [fulldisplay, setFulldisplay] = useState(false)

   let display = () => { if(fulldisplay) 
    { return 
    (<div> fulldisplay </div>) 
}return 
(<div> not fulldisplay </div>)
} 
  return (
    <div>
        <div> 
            <h1> E-leetcode </h1>
            <button> View Details</button>
        </div>
        <div> 
            <div> 
                June 17,2022 
            </div>
            <div>
            7:00 PM EDT     
            </div> 
            <div> 
                STC 0060 
            </div>
        </div>
        {display()}
    </div>
  )
}

export default PastEvent