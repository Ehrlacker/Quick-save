import {Routes, Route} from 'react-router-dom'
import './App.css';
import{createContext, useState} from 'react'
import Homepage from './pages/HomePage/HomePage'
import GameDetails from './pages/GameDetails/GameDetails'

export const GameListContext = createContext()

const App=()=> {
  const[gameList, setGameList] = useState([])
  return (
    <div className="App">
   <GameListContext.Provider value={[gameList, setGameList]}>
     <Routes>
       <Route path="/" element={<Homepage />} />
       <Route path="/Game/name:" element={<GameDetails />} />
     </Routes>
     </GameListContext.Provider>
     
    </div>
  );
}

export default App;
