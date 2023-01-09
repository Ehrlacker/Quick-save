import React, {useState, useEffect} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import apiKey from '../../apiKey/apiKey'

const GameDetails = () => {
    const [game, setGame] = useState({})
    const {name} = useParams()

    useEffect(()=>{
        axios.get(`https://api.rawg.io/api/games?key=${apiKey}&page_size=1&search_exact=true&search=${name}`)
        .then(res=>{
            setGame(res.data)
            console.log(res.data)
        })
    },[name])

  return (
      <div>
    <Navbar />
    <div>
      <h1>{game.name}</h1>
    </div>
    <div>

    </div>
    </div>
  )
}

export default GameDetails