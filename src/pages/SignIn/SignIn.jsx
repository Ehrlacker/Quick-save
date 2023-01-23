import React, {useState, useEffect} from "react"
import Navbar from "../../components/Navbar/Navbar"
import {Navigate} from "react-router-dom"
import {Link} from "react-router-dom"

const SignIn = ({signedIn, setSignedIn}) => {
	// const [emailInput, setEmailInput] = useState([])
	// const [passwordInput, setPasswordInput] = useState([])

	const [signInCredentials, setSignInCredentials] = useState({
		signInEmail: "",
		signnInPassword: "",
	})

	// const handleEmailChange = e => {
	// 	const newEmail = e.target.value
	// 	setEmailInput(newEmail)
	// }

	// const handlePasswordChange = e => {
	// 	const newPassword = e.target.value
	// 	setPasswordInput(newPassword)
	// }

	const handleSignIn = e => {
		const {id, value} = e.target
		setSignInCredentials(prevValue => {
			return {...prevValue, [id]: value}
		})

		// console.log(signInCredentials)
	}

	// useEffect(() => {
	// 	fetch("http//localhost:3002").then(resp => resp.json())
	// }, [])

	const submitEmailPassword = e => {
		// setSignInCredentials({
		// 	signInEmail: "",
		// 	signnInPassword: "",
		// })

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
				if (data === "success") {
					console.log("successss")
				}
			})
		console.log(signInCredentials)
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
					<div className=" w-11/12 md:flex md:items-center mb-6">
						<div className="md:w-1/3">
							<label
								className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
								htmlFor="inline-full-name"
							>
								email
							</label>
						</div>
						<div className="md:w-2/3">
							<input
								onChange={handleSignIn}
								className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
								id="signInEmail"
								type="email"
								placeholder="email@email.com"
								value={signInCredentials.emailInput}
							/>
						</div>
					</div>
					<div className="w-11/12 md:flex md:items-center mb-6">
						<div className="md:w-1/3">
							<label
								className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
								htmlFor="inline-password"
							>
								Password
							</label>
						</div>
						<div className="md:w-2/3">
							<input
								onChange={handleSignIn}
								className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
								id="signnInPassword"
								type="password"
								placeholder="******************"
								value={signInCredentials.passwordInput}
							/>
						</div>
					</div>

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
