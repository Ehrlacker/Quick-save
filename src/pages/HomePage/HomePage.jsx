import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import Pagination from "../../components/Pagination/Pagination"
import SearchBar from "../../components/SearchBar/SearchBar"
// import SignIn from "../../components/SignIn/SignIn"
import apiKey from "../../apiKey/apiKey"
import React, {useState, useEffect, useRef} from "react"
import {useNavigate} from "react-router-dom"
// import {Navigate} from "react-router-dom"
import {ChevronLeftIcon} from "@heroicons/react/24/solid"
import {ChevronRightIcon} from "@heroicons/react/24/solid"
import {PlusCircleIcon} from "@heroicons/react/24/solid"
import {BuildingLibraryIcon} from "@heroicons/react/24/solid"
import Game from "../../components/Game/Game"
import BackgroundImage from "../../assets/images/ribbon-light-space.jpeg"
import "./HomePage.css"

const HomePage = ({buyList, setBuyList, libraryList, setLibraryList, signedIn}) => {
	const [mustPlay, setMustPlay] = useState([])
	const [games, setGames] = useState([])
	const [pageNumber, setPageNumber] = useState(1)
	const [gameSearch, setGameSearch] = useState("")
	const [gameInputValue, setGameInputValue] = useState("")
	const [dontCallApiAgain, setDontCallApiAgain] = useState(0)
	const navigate = useNavigate()

	//MustPlayGames api call
	useEffect(() => {
		fetch("https://rawg.io/api/collections/must-play/games")
			.then(resp => resp.json())
			.then(({results}) => setMustPlay(results))
	}, [])

	//FindGames api call
	const getGamesList = async () => {
		const url = `https://api.rawg.io/api/games?key=${apiKey}&page_size=18&page=${pageNumber}&search=${gameSearch}&search_precise=true`
		const response = await fetch(url)
		const resJSON = await response.json()
		console.log(resJSON.results)
		setGames(resJSON.results)
		if (resJSON.next === null) {
			setDontCallApiAgain(1)
		}
	}

	useEffect(() => {
		getGamesList()
	}, [pageNumber, gameSearch])

	const nextPage = () => {
		if (dontCallApiAgain === 1) {
			return
		} else {
			setPageNumber(prevValue => {
				return prevValue + 1
			})
		}
	}

	const previousPage = () => {
		if (pageNumber <= 1) {
			return
		} else {
			setPageNumber(prevValue => {
				console.log(prevValue - 1)
				return prevValue - 1
			})
			setDontCallApiAgain(0)
		}
	}

	const handleSearchOnChange = e => {
		const newValue = e.target.value
		setGameInputValue(newValue)
	}
	//Search for game on click
	const SearchForGame = e => {
		setGameSearch(gameInputValue)
		setGameInputValue("")
		setDontCallApiAgain(0)
		setPageNumber(1)
		console.log(gameInputValue)
	}
	//Search for game on Key Press
	const keyPressSearch = e => {
		if (e.charCode === 13) {
			setGameSearch(gameInputValue)
			setGameInputValue("")
			setDontCallApiAgain(0)
			setPageNumber(1)
			console.log(gameInputValue)
		} else {
			return
		}
	}

	const addToBuyList = game => {
		if (signedIn === false) {
			alert("Please Sign In")
			return
		}
		const alreadyExists = buyList.some(buy => buy["id"] === game.id)
		if (alreadyExists === false) {
			const newBuyList = [...buyList, game]
			setBuyList(newBuyList)
			alert(`${game.name} added to Buy List`)
		} else {
			alert(`Warning! ${game.name} already added to Buy List`)
		}
	}

	const addToLibraryList = game => {
		if (signedIn === false) {
			alert("Please Sign In")
			return
		}
		const alreadyExists = libraryList.some(library => library["id"] === game.id)
		if (alreadyExists === false) {
			const newLibraryList = [...libraryList, game]
			setLibraryList(newLibraryList)

			alert(`${game.name} added to library List`)
		} else {
			alert(`Warning! ${game.name} already added to Library List`)
		}
	}

	//Chevron Icon scroll
	const ref = useRef(null)
	const scroll = scrollOffset => {
		ref.current.scrollLeft += scrollOffset
	}

	return (
		<div className="HomePage bg-black w-screen h-full block bg-no-repeat bg-cover">
			<Navbar signedIn={signedIn} />

			<h1 className="text-white text-4xl font-bold text-center mt-16 mb-8">
				Must Play Games
			</h1>
			<div className=" flex w-full h-auto">
				<ChevronLeftIcon
					onClick={() => scroll(-400)}
					className="w-16 text-white cursor-pointer"
				/>
				<ul
					className="HomeScrollBar w-full h-full flex overflow-x-scroll scroll whitespace-nowrap scrolling-touch scroll-smooth bg-black"
					ref={ref}
				>
					{mustPlay.map(game => {
						return (
							<Game
								key={game.id}
								title={game.name}
								img={game.background_image}
								rating={game.rating}
								addOrRemoveFromBuyList={() => addToBuyList(game)}
								onClick={() => navigate(`/game/${game.name}`)}
								addBuyListIcon={
									<PlusCircleIcon className="hover:text-green-500 w-6" />
								}
								addLibraryListIcon={
									<BuildingLibraryIcon className="hover:text-green-500 w-6" />
								}
								addOrRemoveFromLibraryList={() => addToLibraryList(game)}
							/>
						)
					})}
				</ul>

				<ChevronRightIcon
					onClick={() => scroll(400)}
					className="w-16 text-white cursor-pointer"
				/>
			</div>
			<h1 className="text-white text-5xl font-bold text-center mt-16 ">Find Games</h1>
			<div
				id="slider"
				className="GameList w-full flex flex-wrap justify-center items-center bg-black"
			>
				<SearchBar
					value={gameInputValue}
					onChange={handleSearchOnChange}
					onClick={SearchForGame}
					keySearch={keyPressSearch}
				/>
				{games.map(game => {
					return (
						<Game
							key={game.id}
							title={game.name}
							img={
								game.background_image === null
									? BackgroundImage
									: game.background_image
							}
							rating={game.rating}
							addOrRemoveFromBuyList={() => addToBuyList(game)}
							onClick={() => navigate(`/game/${game.name}`)}
							addBuyListIcon={<PlusCircleIcon className="hover:text-green-500 w-6" />}
							addLibraryListIcon={
								<BuildingLibraryIcon className="hover:text-green-500 w-6" />
							}
							addOrRemoveFromLibraryList={() => addToLibraryList(game)}
						/>
					)
				})}
				<Pagination next={nextPage} previous={previousPage} pageNumber={pageNumber} />
			</div>
			<Footer />
		</div>
	)
}

export default HomePage
