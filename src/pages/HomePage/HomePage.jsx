import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
// import axios from "axios"

import React, { useState, useEffect } from "react"
import Game from "../../components/Game/Game"
import "./HomePage.css"

const HomePage = () => {
  const [games, setGames] = useState([])
 

  const getGamesList = async () => {
    const url =
      "https://api.rawg.io/api/games?key=845be540750447de9e2986ca0a7995a3&page_size=18"
    const response = await fetch(url)
    const resJSON = await response.json()
    console.log(resJSON.results)
    setGames(resJSON.results)
  }

  useEffect(() => {
    getGamesList()
  }, [])

 

  return (
    <div className="HomePage w-[100rem] ">
      <Navbar />
      <div className="GameList w-full flex flex-wrap justify-center items-center bg-black">
        {/* {Object.values(games).map((x) => {
          console.log(x)
          return x.results.map((game) => {
            return (
              <Game
                key={game.id}
                title={game.name}
                img={game.background_image}
                rating={game.rating}
              />
            )
          })
        })} */}

        {games.map((game) => {
          return (
            <Game
              key={game.id}
              title={game.name}
              img={game.background_image}
              rating={game.rating}
            />
          )
        })}
        {/* <Pagination postsPerPage={postsPerPage} totalPosts={games.length} paginate={paginate}/> */}
      </div>
      <Footer />
    </div>
  )
}

export default HomePage
