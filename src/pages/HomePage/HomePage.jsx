import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import Pagination from "../../components/Pagination/Pagination"
import SearchBar from "../../components/SearchBar/SearchBar"
import apiKey from "../../apiKey/apiKey"
import React, { useState, useEffect, useRef} from "react"
// import GameListContext from '../../App'
import {useNavigate} from 'react-router-dom'

import { ChevronLeftIcon } from "@heroicons/react/24/solid"
import { ChevronRightIcon } from "@heroicons/react/24/solid"

import Game from "../../components/Game/Game"

import "./HomePage.css"

const HomePage = () => {
  const [mustPlay, setMustPlay] = useState([])
  const [games, setGames] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  const [gameSearch, setGameSearch] = useState("")

  // const [gameList, setGameList] = useContext(GameListContext)
  const navigate = useNavigate()



  useEffect(() => {
    fetch("https://rawg.io/api/collections/must-play/games")
      .then((resp) => resp.json())
      .then(({ results }) => setMustPlay(results))
    console.log(mustPlay)
  }, [])

  const getGamesList = async () => {
    const url = `https://api.rawg.io/api/games?key=${apiKey}&page_size=18&page=${pageNumber}&search=${gameSearch}`
    const response = await fetch(url)
    const resJSON = await response.json()
    console.log(resJSON.results)
    setGames(resJSON.results)
  }

  useEffect(() => {
    getGamesList()
  }, [pageNumber, gameSearch])

  const nextPage = () => {
    setPageNumber((prevValue) => {
      return prevValue + 1
    })
  }

  const previousPage = () => {
    setPageNumber((prevValue) => {
      console.log(prevValue - 1)
      return prevValue - 1
    })
  }

  const searchForGame = (e) => {
    const newValue = e.target.value
    setGameSearch(newValue)
  }

  const ref = useRef(null)
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset
  }

  // const addToGameList =(game)=>{
  //   const newGameList = [...gameList, game]
  //   setGameList(newGameList)
  //   console.log('game added')
  //   console.log(gameList)

  // }
  


  return (
    <div className="HomePage w-[100rem] bg-black">
      <Navbar />

      <h1 className="text-white text-5xl font-bold text-center mt-16 mb-8">
        Must Play Games
      </h1>
      <div className="w-full flex relative justify-center items-center bg-black">
        <div className="max-w-[100rem] flex">
          <ChevronLeftIcon
            onClick={() => scroll(-20)}
            className="w-16 text-white "
          />
          <ul className="flex w-full overflow-x-scroll scroll whitespace-nowrap scrolling-touch scroll-smooth bg-black">
            {mustPlay.map((game) => {
              return (
                <Game
                  key={game.id}
                  title={game.name}
                  img={game.background_image}
                  rating={game.rating}
                />
              )
            })}
          </ul>

          <ChevronRightIcon
            onClick={() => scroll(20)}
            className="w-16 text-white"
          />
        </div>
      </div>
      <h1 className="text-white text-5xl font-bold text-center mt-16 ">
        Find Games
      </h1>

      <div
        id="slider"
        className="GameList w-full flex flex-wrap justify-evenly items-center bg-black"
      >
        <SearchBar
          value={gameSearch}
          onChange={searchForGame}
        />
        {games.map((game) => {
          return (
            <Game
              key={game.id}
              title={game.name}
              img={game.background_image}
              rating={game.rating}
              // onClick={addToGameList}
              onClick={()=>navigate(`/game/${game.name}`)}
            />
          )
        })}
        <Pagination
          next={nextPage}
          previous={previousPage}
          pageNumber={pageNumber}
        />
      </div>
      <Footer />
    </div>
  )
}

export default HomePage
