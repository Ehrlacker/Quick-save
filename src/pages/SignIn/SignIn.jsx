import React, {useState} from "react"
import SignInInput from "../../components/SingInInput/SignInInput"
import {Navigate} from "react-router-dom"
import {Link} from "react-router-dom"
import axios from "axios"

const SignIn = ({
	signedIn,
	setSignedIn,
	setUserProfile,
	userProfile,
	setBuyList,
	libraryList,
	setLibraryList,
}) => {
	const [signInCredentials, setSignInCredentials] = useState({
		signInUsername: "",
		signnInPassword: "",
	})

	const handleSignIn = e => {
		const {id, value} = e.target
		setSignInCredentials(prevValue => {
			return {...prevValue, [id]: value}
		})
	}

	const submitEmailPassword = async () => {
		console.log(signInCredentials)
		console.log(userProfile)
		// const url = "http://localhost:3002/buyList"
		// const config = {headers: {"Content-Type": "application/json"}}
		// const data = {
		// 	body: JSON.stringify({
		// 		username: signInCredentials.signInUsername,
		// 		password: signInCredentials.signnInPassword,
		// 	}),
		// }
		// try {
		// 	console.log(signInCredentials)
		// 	axios
		// 		.post(url, config, data)
		// 		.then(response => response.json())
		// 		.then(data => {
		// 			if (data) {
		// 				console.log(data)

		// 				setBuyList(data.buyList[0].buyList)
		// 				setLibraryList(data.libraryList[0].libraryList)
		// 				setUserProfile(data)
		// 				setSignedIn(true)
		// 			}
		// 		})
		// } catch (error) {
		// 	console.log(error)
		// }

		try {
			fetch("http://localhost:3002/signin", {
				method: "post",
				headers: {"Content-Type": "application/json"},
				body: JSON.stringify({
					username: signInCredentials.signInUsername,
					password: signInCredentials.signnInPassword,
				}),
			})
				.then(response => response.json())
				.then(data => {
					if (data) {
						console.log(data)
						// setBuyList(data.buyList[0].buyList)
						// setLibraryList(data.libraryList[0].libraryList)

						if (data.buyList.length !== 0) {
							setBuyList(data.buyList[0].buyList)
						} else {
							return
						}

						if (data.libraryList.length !== 0) {
							setLibraryList(data.libraryList[0].libraryList)
						} else {
							return
						}

						setUserProfile(data)
						setSignedIn(true)
					}
				})
			// .catch(err => {z
			// 	console.log("yessssss", err)
			// })
			//remove
			console.log(signInCredentials)
			console.log(userProfile)
			console.log(userProfile.buyList)
		} catch (error) {
			console.log(error)
		}
	}

	if (signedIn) {
		return <Navigate to="/" />
	}

	return (
		<div className="SignIn">
			{/* <Navbar /> */}

			<div className="w-full flex justify-center items-center mt-32 ">
				<div className="FORM p-4 w-4/5 max-w-sm bg-white rounded-md">
					<h1 className="text-center text-black text-4xl font-bold mb-4">Sign In</h1>

					<SignInInput
						id="signInUsername"
						onChange={handleSignIn}
						placeholder="username"
						label="Username"
						value={signInCredentials.usernameInput}
						type="string"
					/>
					<SignInInput
						id="signnInPassword"
						onChange={handleSignIn}
						label="Password"
						value={signInCredentials.passwordInput}
						type="password"
						placeholder="******************"
					/>

					<div className="md:flex md:items-center">
						<div className="md:w-1/3"></div>
						<div className="md:w-2/3 flex justify-start">
							<div className="flex flex-col items-center justify-center mb-8">
								<button
									onClick={submitEmailPassword}
									className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded mb-4"
									type="submit"
								>
									Sign In
								</button>
								<button
									className="shadow hover:bg-purple-400 focus:shadow-outline focus:outline-none text-black py-2 px-4 rounded"
									type="submit"
								>
									<Link to={"/Register"}>Register</Link>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SignIn

// if (data.buyList !== 0) {
// 	setBuyList(data.buyList[0].buyList)
// } else {
// 	return
// }

// if (data.libraryList !== 0) {
// 	setLibraryList(data.libraryList[0].libraryList)
// } else {
// 	return
// }
