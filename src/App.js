import {Routes, Route} from "react-router-dom"
import "./App.css"
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
	const [signedIn, setSignedIn] = useLocalStorage("signedIn", false)
	const [userProfile, setUserProfile] = useLocalStorage("userProfile", [])

	// const [buyList, setBuyList] = useState([])
	// const [libraryList, setLibraryList] = useState([])
	// const [signedIn, setSignedIn] = useState(true)
	// const [userProfile, setUserProfile] = useState([])

	return (
		<div className="App">
			<Navbar
				signedIn={signedIn}
				setSignedIn={setSignedIn}
				userProfile={userProfile}
				setUserProfile={setUserProfile}
				setBuyList={setBuyList}
			/>
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
							setBuyList={setBuyList}
							libraryList={libraryList}
							setLibraryList={setLibraryList}
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
