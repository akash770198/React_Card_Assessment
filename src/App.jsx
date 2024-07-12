import React from 'react'
import BasketballPlayerCard from './BasketballPlayerCard'
import playersData from './playersData'
import './BasketballPlayerCard.css'


function App() {
  console.log("hi there");

  return (
    <div className="BasketBallContainer">
      {playersData.map((player, index) => {
        return (
          <BasketballPlayerCard
          key={index}
          name = {player.name}
          image={player.image}
          position={player.position}
          stats={player.stats}
          />
        )
      })}
    </div>
  )
}

export default App
