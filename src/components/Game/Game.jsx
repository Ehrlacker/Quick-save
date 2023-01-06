import React from 'react'
import './Game.css'

const Game = (props) => {
  return (
    <div className="Game m-8"
     id={props.id}>
        <h1 className="text-white font-bold text-2xl text-center mt-4 mb-4">{props.title}</h1>
        <img className="Game-img" src={props.img} alt="a video game" />
        <div className="flex justify-between items-center w-full mt-2 mb-2">
        <p className="text-white font-bold ml-4">Rating: {props.rating}</p>
        <button className="text-white font-bold mr-4">Add</button>
        </div>
    </div>
  )
}

export default Game