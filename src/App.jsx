import { useState } from 'react'
import './App.css'
import JSConfetti from 'js-confetti'
import 'animate.css';



function App() {
  const [showTeam, useShowTeam] = useState(false)
  const jsConfetti = new JSConfetti()


  return (
    <>
      <div className='rounded-xl shadow-2xl p-5 bg-slate-800 text-white'>
        <h1 className='font-bold text-4xl up'>DotComma++ Team</h1>
      </div>
      <div 
          className={showTeam ? 'animate__animated animate__fadeIn card flex flex-col gap-5 text-start text-xl bg-blue-950 text-white mt-10 rounded-lg' : 'hidden'}
      >
          <p>🟢 Alejandre de la Vega Ben-Hur</p>
          <p>🟢 Arreola González José Ángel</p>
          <p>🟢 Santoyo Corona Fernando Getsemaní</p>
          <p>🟢 Tinoco Díaz Victor Emanuel</p>
          <p>🟢 Tovar Pantoja Moisés Alejandro</p>
      </div>
      <button 
        type="button" 
        className='bg-blue-600 text-white text-2xl p-3 rounded-2xl fixed right-10 bottom-10'
        onClick={ () =>  {
          useShowTeam(!showTeam)
          jsConfetti.addConfetti({
            emojis: ['🥵', '🍆', '🍑', '✨', '💦'],
         })
        }}
      >
        {showTeam ? 'Hide Team' : 'Show Team'}
      </button>

      

      
      
    </>
  )
}

export default App
