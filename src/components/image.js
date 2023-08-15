import React, { useState } from 'react'

const Image = () => {
    
    
    const[isExist,setIsExist]=useState(true)
  return (
    <div>
        {isExist&&<h1>yes</h1>}
        <button onClick={()=>{
            setIsExist(!isExist)
        }}>
            click
        </button>
        
    </div>
  )
}

export default Image