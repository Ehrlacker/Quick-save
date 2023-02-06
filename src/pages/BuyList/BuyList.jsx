import React, {useEffect} from "react"
import Game from "../../components/Game/Game"
import {Navigate} from "react-router-dom"
import Footer from "../../components/Footer/Footer"
import {PlusCircleIcon} from "@heroicons/react/24/solid"
// import EmptyBuyList from "../../components/EmptyBuyList/EmptyBuyList"
import "./BuyList.css"
import {useNavigate} from "react-router-dom"

const BuyList = ({buyList, setBuyList, signedIn, userProfile, setUserProfile}) => {
	const navigate = useNavigate()

	const removeFromBuyList = async game => {
		const newBuyList = buyList.filter(buyListGame => {
			return buyListGame.id !== game.id
		})
		setBuyList(newBuyList)
		await updateBuyList()
	}

	// useEffect(() => {
	const updateBuyList = async () => {
		if (userProfile.length === 0) {
			return
		}

		await fetch("http://localhost:3002/buyList", {
			// await fetch("https://quick-save-server.onrender.com/buyList", {
			method: "post",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify([userProfile, buyList]),
		})
			.then(response => response.json())
			.then((data, err) => {
				if (data) {
					setUserProfile(data)
				}
			})
	}
	// 	updateBuyList()
	// }, [buyList, userProfile])

	useEffect(() => {
		updateBuyList()
	}, [buyList])

	if (!signedIn) {
		return <Navigate to="/SignIn" />
	} else {
		if (buyList.length === 0) {
			return (
				<div className="BuyList">
					<h1 className="text-white text-5xl text-center font-bold h-screen mt-16">
						Please Add some games to the Buy list
					</h1>
				</div>
			)
		} else {
			return (
				<div className="BuyList bg-cover bg-no-repeat w-full h-full">
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
									addOrRemoveFromBuyList={() => {
										removeFromBuyList(game)
									}}
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

export default BuyList
