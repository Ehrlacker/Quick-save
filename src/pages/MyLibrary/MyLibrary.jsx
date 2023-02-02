import React, {useEffect} from "react"
import Game from "../../components/Game/Game"
import Footer from "../../components/Footer/Footer"
import {Navigate} from "react-router-dom"
import {BuildingLibraryIcon} from "@heroicons/react/24/solid"
import {useNavigate} from "react-router-dom"
// import EmptylibraryList from "../../components/EmptyLibraryList/EmptyLibraryList"
import "./MyLibrary.css"

const MyLibraryList = ({libraryList, setLibraryList, signedIn, userProfile, setUserProfile}) => {
	const navigate = useNavigate()

	const removeFromLibraryList = game => {
		const newLibraryList = libraryList.filter(libraryListGame => {
			return libraryListGame.id !== game.id
		})
		setLibraryList(newLibraryList)
	}

	const updateLibraryList = async () => {
		if (userProfile.length === 0) {
			return
		}
		await fetch("http://localhost:3002/libraryList", {
			method: "post",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify([{userProfile}, {libraryList}]),
		})
			.then(response => response.json())
			.then(data => {
				if (data) {
					console.log(data)
					setUserProfile(data)
					// setBuyList(data.buyList[0].buyList)
				}
			})
	}

	useEffect(() => {
		updateLibraryList()
	}, [libraryList])

	if (!signedIn) {
		return <Navigate to="/SignIn" />
	} else {
		if (libraryList.length === 0) {
			return (
				<div className="BuyList">
					{/* <Navbar signedIn={signedIn} /> */}
					<h1 className="text-white text-5xl text-center font-bold h-screen mt-16">
						Please Add some games to the Library list
					</h1>
				</div>
			)
		} else {
			return (
				<div className="BuyList">
					{/* <Navbar signedIn={signedIn} /> */}

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
									onClick={() => navigate(`/game/${game.name}`)}
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
