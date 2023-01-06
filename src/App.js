import {Routes, Route} from 'react-router-dom'
import './App.css';
// import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer'
import Homepage from './pages/HomePage/HomePage'

const App=()=> {
  return (
    <div className="App">
    {/* <Navbar /> */}
     <Routes>
       <Route path="/" element={<Homepage />} />
     </Routes>
     {/* <Footer /> */}
    </div>
  );
}

export default App;
