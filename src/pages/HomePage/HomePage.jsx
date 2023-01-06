import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import axios from "axios"
import React, { useState, useEffect } from "react"
import Game from "../../components/Game/Game"


const HomePage = () => {
  const [games, setGames] = useState([])

  useEffect(() => {
    axios
      .get("https://api.rawg.io/api/games?key=80ff4978e7cb40d5b6f3ed212e2f977c")
      .then((res) => {
        console.log(res.data)
        setGames((prevValue) => {
          return [...prevValue, res.data]
        })
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="HomePage w-[100rem] ">
      <Navbar />
      <div className="GameList w-full flex">
        {Object.values(games).map((x) => {
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
        })}
      </div>
      <Footer />
    </div>
  )
}

export default HomePage
