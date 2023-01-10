import React, { useState, useEffect } from "react"
import Navbar from "../../components/Navbar/Navbar"
import { useParams } from "react-router-dom"
import axios from "axios"
import apiKey from "../../apiKey/apiKey"
import "./GameDetails.css"
import Footer from "../../components/Footer/Footer"
import { ChevronLeftIcon } from "@heroicons/react/24/solid"
import { ChevronRightIcon } from "@heroicons/react/24/solid"

const GameDetails = () => {
  const [game, setGame] = useState([])
  const { name } = useParams()

  useEffect(() => {
    axios
      .get(
        `https://api.rawg.io/api/games?key=${apiKey}&page_size=1&search_exact=true&search=${name}`
      )
      .then((res) => {
        setGame(res.data.results)
        console.log(res.data.results)
      })
      .catch((err) => console.log(err))
  }, [name])

  return (
    <div className="GameDetails bg-black">
      <Navbar />

      <div className="w-full">
        {game.map((x) => {
          return (
            <div className="GameContainer bg-black mt-16" key={x.id}>
              <h1 className="text-5xl font-bold text-white mb-8">{x.name}</h1>
              <img
                className="CoverImage"
                src={x.background_image}
                alt="a game"
              />

              <div className="w-full flex relative justify-center items-center bg-black">
                <ChevronLeftIcon className="w-16 text-white " />

                <ul className=" ScrollBar flex items-center w-full h-30 overflow-x-scroll scroll whitespace-nowrap scrolling-touch scroll-smooth bg-black mt-8">
                  {x.short_screenshots.map((shot) => {
                    return (
                      <img
                        className=" ScrollImage mr-4 ml-4 max-w-8"
                        src={shot.image}
                        alt="a game"
                      />
                    )
                  })}
                </ul>
                <ChevronRightIcon className="w-16 text-white " />
              </div>
              <h1 className="text-wite font-bold text-5xl text-white mt-16">
                Details
              </h1>
              <div className="Game-DetailsContainer w-full mt-16">
                <p className="text-white">Release date: {x.released}</p>
                <p className="text-white">Rating: {x.rating}</p>
              </div>
              
            </div>
          )
        })}
      </div>

      <Footer />
    </div>
  )
}

export default GameDetails
