import React from "react"
import Game from "../../components/Game/Game"

import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import {PlusCircleIcon} from "@heroicons/react/24/solid"
import EmptyBuyList from "../../components/EmptyBuyList/EmptyBuyList"
import "./BuyList.css"

const BuyList = ({buyList, setBuyList}) => {
	const removeFromBuyList = game => {
		const newBuyList = buyList.filter(buyListGame => {
			return buyListGame.id !== game.id
		})
		setBuyList(newBuyList)
	}

	if (buyList.length === 0) {
		return <EmptyBuyList />
	} else {
		return (
			<div className="BuyList bg-cover bg-no-repeat w-full h-full">
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
								addBuyListIcon={
									<PlusCircleIcon className="hover:text-red-500 w-6" />
								}
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
