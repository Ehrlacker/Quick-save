import React from "react"
import Game from "../../components/Game/Game"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import {Navigate} from "react-router-dom"
import {BuildingLibraryIcon} from "@heroicons/react/24/solid"
import EmptylibraryList from "../../components/EmptyLibraryList/EmptyLibraryList"
import "./MyLibrary.css"

const MyLibraryList = ({libraryList, setLibraryList, signedIn}) => {
	const removeFromLibraryList = game => {
		const newLibraryList = libraryList.filter(libraryListGame => {
			return libraryListGame.id !== game.id
		})
		setLibraryList(newLibraryList)
	}

	if (signedIn === false) {
		return <Navigate to="/SignIn" />
	} else {
		if (libraryList.length === 0) {
			return <EmptylibraryList />
		} else {
			return (
				<div className="BuyList">
					<Navbar signedIn={signedIn} />

					<div className="BuyGameList w-full flex flex-wrap justify-evenly bg-black mt-16 h-full">
						{libraryList.map(game => {
							return (
								<Game
									id={game.id}
									key={game.id}
									title={game.name}
									img={game.background_image}
									rating={game.rating}
									addLibraryListIcon={
										<BuildingLibraryIcon className="hover:text-red-500 w-6" />
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
}

export default MyLibraryList
