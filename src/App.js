import {Routes, Route} from 'react-router-dom'
import './App.css';
import{useState} from 'react'
import Homepage from './pages/HomePage/HomePage'
import GameDetails from './pages/GameDetails/GameDetails'
import BuyList from './pages/BuyList/BuyList'


const App=()=> {
  

  const [buyList, setBuyList] = useState([])

  return (
    <div className="App">
   
     <Routes>
       <Route path="/" element={<Homepage buyList={buyList} setBuyList={setBuyList} />} />
       <Route path="/BuyList" element={<BuyList buyList={buyList} setBuyList={setBuyList} />} />
       <Route path="/Game/:name" element={<GameDetails />} />
     </Routes>
     
     
    </div>
  );
}

export default App;
