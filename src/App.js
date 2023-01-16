import {Routes, Route} from "react-router-dom"
import "./App.css"
import {useState} from "react"
import Homepage from "./pages/HomePage/HomePage"
import GameDetails from "./pages/GameDetails/GameDetails"
import BuyList from "./pages/BuyList/BuyList"
import MyLibrary from "./pages/MyLibrary/MyLibrary"
import useLocalStorage from "./hooks/useLocalStorage"

const App = () => {
	const [buyList, setBuyList] = useState([])
	// const [libraryList, setLibraryList] = useState([])
	const [libraryList, setLibraryList] = useLocalStorage("libraryList", [])
	//  useLocalStorage("favorites", [])

	return (
		<div className="App">
			<Routes>
				<Route
					path="/"
					element={
						<Homepage
							libraryList={libraryList}
							setLibraryList={setLibraryList}
							buyList={buyList}
							setBuyList={setBuyList}
						/>
					}
				/>
				<Route
					path="/BuyList"
					element={<BuyList buyList={buyList} setBuyList={setBuyList} />}
				/>
				<Route
					path="/MyLibrary"
					element={
						<MyLibrary libraryList={libraryList} setLibraryList={setLibraryList} />
					}
				/>
				<Route path="/Game/:name" element={<GameDetails />} />
			</Routes>
		</div>
	)
}

export default App
