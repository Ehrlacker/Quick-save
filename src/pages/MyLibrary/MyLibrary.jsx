import React from "react"
import Game from "../../components/Game/Game"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import {BuildingLibraryIcon} from "@heroicons/react/24/solid"
import EmptylibraryList from "../../components/EmptyLibraryList/EmptyLibraryList"
import "./MyLibrary.css"
// import useLocalStorage from "../../hooks/useLocalStorage"

const MyLibraryList = ({libraryList, setLibraryList}) => {
	const removeFromLibraryList = game => {
		const newLibraryList = libraryList.filter(libraryListGame => {
			return libraryListGame.id !== game.id
		})
		setLibraryList(newLibraryList)
	}

	// useEffect(() => {
	// 	const gameBuyList = JSON.parse(localStorage.getItem("video-game-buy-list"))
	// 	setBuyList(gameBuyList)
	// }, [setBuyList])

	// const saveToLocalStorage = items => {
	// 	localStorage.setItem("video-game-buy-list", JSON.stringify(items))
	// }

	if (libraryList.length === 0) {
		return <EmptylibraryList />
	} else {
		return (
			<div className="BuyList">
				<Navbar />

				<div className="BuyGameList w-full flex flex-wrap justify-evenly bg-black mt-16">
					{libraryList.map(game => {
						return (
							<Game
								id={game.id}
								key={game.id}
								title={game.name}
								img={game.background_image}
								rating={game.rating}
								addLibraryListIcon={
									<BuildingLibraryIcon className="hover:text-red-500" />
								}
								addOrRemoveFromLibraryList={() => removeFromLibraryList(game)}
							/>
						)
					})}
				</div>
				<Footer />
			</div>
		)
	}
}

export default MyLibraryList
