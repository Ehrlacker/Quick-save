import {Routes, Route} from "react-router-dom"
import "./App.css"
import {useState} from "react"
import Homepage from "./pages/HomePage/HomePage"
import GameDetails from "./pages/GameDetails/GameDetails"
import BuyList from "./pages/BuyList/BuyList"
import MyLibrary from "./pages/MyLibrary/MyLibrary"
import SignIn from "./pages/SignIn/SignIn"
import Register from "./pages/Register/Register"
import Navbar from "./components/Navbar/Navbar"
import useLocalStorage from "./hooks/useLocalStorage"

const App = () => {
	const [buyList, setBuyList] = useLocalStorage("buyList", [])
	const [libraryList, setLibraryList] = useLocalStorage("libraryList", [])
	const [signedIn, setSignedIn] = useState(false)
	const [userProfile, setUserProfile] = useLocalStorage("userProfile", [])

	return (
		<div className="App">
			<Navbar signedIn={signedIn} setSignedIn={setSignedIn} setUserProfile={setUserProfile} />
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
							userProfile={userProfile}
							setUserProfile={setUserProfile}
							setSignedIn={setSignedIn}
						/>
					}
				/>
				<Route
					path="/BuyList"
					element={
						<BuyList
							buyList={buyList}
							setBuyList={setBuyList}
							signedIn={signedIn}
							userProfile={userProfile}
							setUserProfile={setUserProfile}
							setSignedIn={setSignedIn}
						/>
					}
				/>
				<Route
					path="/MyLibrary"
					element={
						<MyLibrary
							libraryList={libraryList}
							setLibraryList={setLibraryList}
							signedIn={signedIn}
							userProfile={userProfile}
							setUserProfile={setUserProfile}
							setSignedIn={setSignedIn}
						/>
					}
				/>
				<Route path="/Game/:name" element={<GameDetails signedIn={signedIn} />} />
				<Route
					path="/SignIn"
					element={
						<SignIn
							signedIn={signedIn}
							setSignedIn={setSignedIn}
							userProfile={userProfile}
							setUserProfile={setUserProfile}
						/>
					}
				/>
				<Route
					path="/Register"
					element={
						<Register
							signedIn={signedIn}
							setSignedIn={setSignedIn}
							userProfile={userProfile}
							setUserProfile={setUserProfile}
						/>
					}
				/>
			</Routes>
		</div>
	)
}

export default App
