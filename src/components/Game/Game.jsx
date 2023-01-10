import React from "react"
import { PlusCircleIcon } from "@heroicons/react/24/solid"
import "./Game.css"

const Game = (props) => {
  return (
    <div className="Game m-8 hover:scale-105" id={props.id}>
      <img
        className="Game-img"
        src={props.img}
        alt="a video game"
        onClick={props.onClick}
      />

      <button onClick={()=>{props.addToBuyList({name: props.title, rating: props.rating, image: props.img})}} className="AddGame">
        <PlusCircleIcon />
      </button>

      <div className="flex justify-between items-center w-full mt-2 mb-2">
        <p className="text-white ">Rating: {props.rating}</p>
      </div>
      <h1
        className="text-white font-bold w-full text-xl mb-4 cursor-pointer"
        onClick={props.onClick}
      >
        {props.title}
      </h1>
      
    </div>
  )
}

export default Game
