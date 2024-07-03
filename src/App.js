import React, { useState } from 'react'
import Card from './components/Card'
import Header from './components/Header'

const App = () => {
  const [visibleCart,setVisibleCart]=useState(true);
  const handleOnClick=()=>{
    setVisibleCart(prev=>!prev)
  }
  console.log({visibleCart})

  return (
    <div>
      <Header onClick={handleOnClick}/>
      {visibleCart?   <Card/> : <p>jihan</p>
    }
    </div>
  )
}

export default App