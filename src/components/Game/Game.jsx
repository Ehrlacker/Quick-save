import React from "react"

import "./Game.css"

const Game = props => {
	return (
		<div className="Game m-8 hover:scale-105" id={props.id}>
			<img className="GameImg " src={props.img} alt="a video game" onClick={props.onClick} />

			<div className="w-full flex justify-end">
				<button
					onClick={props.addOrRemoveFromBuyList}
					className="AddGame bottom-48 left-36"
				>
					{props.addBuyListIcon}
				</button>

				<button
					onClick={props.addOrRemoveFromLibraryList}
					className="AddGame bottom-48 left-36"
				>
					{props.addLibraryListIcon}
				</button>
			</div>

			<div className="flex justify-between items-center w-full mt-2 mb-2">
				<p className="text-white ">Rating: {props.rating}</p>
			</div>

			<h1
				className="text-white font-bold w-full text-xl mb-4 cursor-pointer whitespace-pre-line"
				onClick={props.onClick}
			>
				{props.title}
			</h1>
		</div>
	)
}

export default Game
