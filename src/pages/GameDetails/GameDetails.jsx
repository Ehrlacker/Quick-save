import React, {useState, useEffect, useRef} from "react"
import EmptyGameDetails from "../../components/EmptyGameDetails/EmptyGameDetails"
import {useParams} from "react-router-dom"
import axios from "axios"
import "./GameDetails.css"
import Footer from "../../components/Footer/Footer"
import {ChevronLeftIcon} from "@heroicons/react/24/solid"
import {ChevronRightIcon} from "@heroicons/react/24/solid"
import BackgroundImage from "../../assets/images/ribbon-light-space.jpeg"

const GameDetails = ({signedIn}) => {
	const [game, setGame] = useState([])
	const {name} = useParams()

	useEffect(() => {
		axios
			.get(
				`https://api.rawg.io/api/games?key=${process.env.REACT_APP_apikey}&page_size=1&search_exact=true&search=${name}`,
			)
			.then(res => {
				setGame(res.data.results)
			})
			.catch(err => console.log(err))
	}, [name])

	const ref = useRef(null)
	const scroll = scrollOffset => {
		ref.current.scrollLeft += scrollOffset
	}

	if (game.length === 0) {
		return <EmptyGameDetails />
	} else {
		return (
			<div className="GameDetails block">
				<div className="GameDetailsPageContainer bg-black w-full">
					{game.map(x => {
						return (
							<div
								className="GameContainer bg-black flex justify-center items-center flex-col"
								key={x.id}
							>
								<h1 className="text-3xl text-center font-bold text-white mb-8 mr-4 ml-4 mt-16 md:text-5xl">
									{x.name}
								</h1>
								<img
									className="CoverImage w-3/4"
									src={
										x.background_image === null
											? BackgroundImage
											: x.background_image
									}
									alt="a game"
								/>

								<div className="w-9/12 flex relative  bg-black">
									<ChevronLeftIcon
										onClick={() => scroll(-400)}
										className="w-16 text-white"
									/>

									<ul
										ref={ref}
										className="ScrollBar flex items-center w-full h-30 overflow-x-scroll scroll  whitespace-nowrap scrolling-touch scroll-smooth bg-black mt-8"
									>
										{x.short_screenshots.map(shot => {
											return (
												<img
													key={shot.id}
													className="ScrollImage mr-4 ml-4 w-2/5 h-auto"
													src={shot.image}
													alt="a game"
												/>
											)
										})}
									</ul>
									<ChevronRightIcon
										onClick={() => scroll(400)}
										className="w-16 text-white "
									/>
								</div>

								<h1 className="text-wite font-bold text-5xl text-white mt-16">
									Details
								</h1>
								<div className="GameDetailsContainer w-9/12 mt-16 mb-16">
									<div className="mt-4">
										<h3 className="font-bold text-white">Release date:</h3>
										<p className="text-white">{x.released}</p>
									</div>
									<div className="mt-4">
										<h3 className="font-bold text-white">Rating: </h3>
										<p className="text-white">{x.rating}</p>
									</div>
									<div className="mt-4">
										<h3 className="font-bold text-white">Platforms:</h3>
										<ul className="flex flex-wrap">
											{game.map(x => {
												return x.platforms.map(y => {
													return (
														<li key={y.id} className=" text-white mr-4">
															* {y.platform.name}
														</li>
													)
												})
											})}
										</ul>
									</div>
								</div>
							</div>
						)
					})}
				</div>

				<Footer />
			</div>
		)
	}
}

export default GameDetails
