import React, {useEffect} from "react"
import Game from "../../components/Game/Game"

import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"

import EmptyBuyList from "../../components/EmptyBuyList/EmptyBuyList"
import "./BuyList.css"
// import useLocalStorage from "../../hooks/useLocalStorage"

const BuyList = ({buyList, setBuyList}) => {
	const removeFromBuyList = game => {
		const newBuyList = buyList.filter(buyListGame => {
			return buyListGame.id !== game.id
		})
		setBuyList(newBuyList)
		saveToLocalStorage(newBuyList)
	}

	useEffect(() => {
		const gameBuyList = JSON.parse(localStorage.getItem("video-game-buy-list"))
		setBuyList(gameBuyList)
	}, [setBuyList])

	const saveToLocalStorage = items => {
		localStorage.setItem("video-game-buy-list", JSON.stringify(items))
	}

	if (buyList.length === 0) {
		return <EmptyBuyList />
	} else {
		return (
			<div className="BuyList">
				<Navbar />

				<div className="BuyGameList w-full flex flex-wrap justify-evenly bg-black mt-16">
					{buyList.map(game => {
						return (
							<Game
								id={game.id}
								key={game.id}
								title={game.name}
								img={game.background_image}
								rating={game.rating}
								addOrRemoveFromBuyList={() => removeFromBuyList(game)}
							/>
						)
					})}
				</div>
				<Footer />
			</div>
		)
	}
}

export default BuyList
