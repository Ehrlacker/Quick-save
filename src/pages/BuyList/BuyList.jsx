import React, {useEffect} from "react"
import Game from "../../components/Game/Game"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import GameForm from "../../components/GameForm/GameForm"
import "./BuyList.css"
import useLocalStorage from "../../hooks/useLocalStorage"

const BuyList = ({buyList, setBuyList}) => {
	// const [firstInput, setFirstInput] = useState("")
	// const [secondInput, setSecondInput] = useState("")
	const [firstInput, setFirstInput] = useLocalStorage("firstInput", [])
	const [secondInput, setSecondInput] = useLocalStorage("secondInput", [])

	const handleFirstInput = e => {
		const newValue = e.target.value
		setFirstInput(newValue)
		console.log(firstInput)
	}

	const handleSecondInput = e => {
		const newValue = e.target.value
		setSecondInput(newValue)
		console.log(secondInput)
	}

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

	return (
		<div className="BuyList">
			<Navbar />

			<div className="BuyGameList w-full flex flex-wrap justify-evenly items-center bg-black">
				{buyList.map(game => {
					return (
						<div key={game.id}>
							<Game
								id={game.id}
								key={game.id}
								title={game.name}
								img={game.background_image}
								rating={game.rating}
								addOrRemoveFromBuyList={() => removeFromBuyList(game)}
							/>
							<GameForm
								key={game.id}
								firstChange={handleFirstInput}
								secondChange={handleSecondInput}
								value1={firstInput}
								value2={secondInput}
							/>
						</div>
					)
				})}
			</div>
			<Footer />
		</div>
	)
}

export default BuyList
