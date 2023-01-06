import React from 'react'
import './Game.css'

const Game = (props) => {
  return (
    <div className="Game w-2/3"
     id={props.id}>
        <h1>{props.title}</h1>
        <img src={props.img} alt="a video game" />
        <div>
        <p>Rating: {props.rating}</p>
        <button>Add</button>
        </div>
    </div>
  )
}

export default Game