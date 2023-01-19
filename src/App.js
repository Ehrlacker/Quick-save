import {Routes, Route} from "react-router-dom"
import "./App.css"
import {useState} from "react"
import Homepage from "./pages/HomePage/HomePage"
import GameDetails from "./pages/GameDetails/GameDetails"
import BuyList from "./pages/BuyList/BuyList"
import MyLibrary from "./pages/MyLibrary/MyLibrary"
import SignIn from "./pages/SignIn/SignIn"
import useLocalStorage from "./hooks/useLocalStorage"

const App = () => {
	const [buyList, setBuyList] = useLocalStorage("buyList", [])

	const [libraryList, setLibraryList] = useLocalStorage("libraryList", [])

	const [signedIn, setSignedIn] = useState(true)

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
							signedIn={signedIn}
						/>
					}
				/>
				<Route
					path="/BuyList"
					element={
						<BuyList buyList={buyList} setBuyList={setBuyList} signedIn={signedIn} />
					}
				/>
				<Route
					path="/MyLibrary"
					element={
						<MyLibrary
							libraryList={libraryList}
							setLibraryList={setLibraryList}
							signedIn={signedIn}
						/>
					}
				/>
				<Route path="/Game/:name" element={<GameDetails signedIn={signedIn} />} />
				<Route
					path="/SignIn"
					element={<SignIn signedIn={signedIn} setSignedIn={setSignedIn} />}
				/>
			</Routes>
		</div>
	)
}

export default App
