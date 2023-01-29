import React, {useState} from "react"
import Navbar from "../../components/Navbar/Navbar"
import SignInInput from "../../components/SingInInput/SignInInput"
import {Navigate} from "react-router-dom"
import {Link} from "react-router-dom"

const SignIn = ({signedIn, setSignedIn, setUserProfile, userProfile}) => {
	const [signInCredentials, setSignInCredentials] = useState({
		signInEmail: "",
		signnInPassword: "",
	})

	const handleSignIn = e => {
		const {id, value} = e.target
		setSignInCredentials(prevValue => {
			return {...prevValue, [id]: value}
		})
	}

	const submitEmailPassword = e => {
		fetch("http://localhost:3002/signin", {
			method: "post",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({
				email: signInCredentials.signInEmail,
				password: signInCredentials.signnInPassword,
			}),
		})
			.then(response => response.json())
			.then(data => {
				if (data) {
					// if (data === "success")
					console.log(data)
					setUserProfile(data)
					console.log(userProfile)

					setSignedIn(true)
					return <Navigate to="/" />
				}
			})
		//remove
		console.log(signInCredentials)
		console.log(userProfile)
	}

	if (signedIn) {
		console.log("successss")
		return <Navigate to="/" />
	}

	return (
		<div className="SignIn">
			<Navbar />

			<div className="w-full flex justify-center items-center mt-32 ">
				<div className="FORM p-4 w-4/5 max-w-sm bg-white rounded-md">
					<h1 className="text-center text-black text-4xl font-bold mb-4">Sign In</h1>

					<SignInInput
						id="signInEmail"
						onChange={handleSignIn}
						placeholder="email@email.com"
						label="Email"
						value={signInCredentials.emailInput}
						type="email"
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
