import React, {useState} from "react"
import SignInInput from "../../components/SingInInput/SignInInput"
import {Navigate} from "react-router-dom"
import {Link} from "react-router-dom"

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
	const [signinErrorMessage, setErrorMessage] = useState("")

	const handleSignIn = e => {
		const {id, value} = e.target
		setSignInCredentials(prevValue => {
			return {...prevValue, [id]: value}
		})
	}

	const submitEmailPassword = async () => {
		try {
			await fetch(
				process.env.REACT_APP_serversignin,

				{
					method: "post",
					headers: {"Content-Type": "application/json"},
					body: JSON.stringify({
						username: signInCredentials.signInUsername,
						password: signInCredentials.signnInPassword,
					}),
				},
			)
				.then(
					setSignInCredentials({
						signInUsername: "",
						signnInPassword: "",
					}),
				)
				//response.statusCode !== 200
				.then(response => response.json())
				.then(data => {
					if (data.id) {
						setBuyList(data.buyList)
						setLibraryList(data.libraryList)
						setUserProfile(data)
						setSignedIn(true)
					} else {
						setErrorMessage(data.errors)
					}
				})
		} catch (error) {}
	}

	if (signedIn) {
		return <Navigate to="/" />
	}

	return (
		<div className="SignIn">
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
					<p className="text-red-500 text-center">{signinErrorMessage}</p>
				</div>
			</div>
		</div>
	)
}

export default SignIn
