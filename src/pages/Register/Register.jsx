import React, {useState} from "react"
import Navbar from "../../components/Navbar/Navbar"
import {Navigate} from "react-router-dom"

const SignIn = ({signedIn, setSignedIn, userProfile, setUserProfile}) => {
	const [registerCredentials, setRegisterCredentials] = useState({
		registerFirstName: "",
		registerLastName: "",
		registerUserName: "",
		registerEmail: "",
		registerPassword: "",
	})

	const handleRegister = e => {
		const {id, value} = e.target
		setRegisterCredentials(prevValue => {
			return {...prevValue, [id]: value}
		})
	}

	const submitCredentials = e => {
		fetch("http://localhost:3002/register", {
			method: "post",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({
				firstName: registerCredentials.registerFirstName,
				lastName: registerCredentials.registerLastName,
				username: registerCredentials.registerUserName,
				email: registerCredentials.registerEmail,
				password: registerCredentials.registerPassword,
			}),
		})
			.then(response => response.json())
			.then(user => {
				if (user) {
					// addUser(user)
					setUserProfile(prevValue => {
						return [...prevValue, user]
					})
					console.log(userProfile)
				}
			})
	}

	if (signedIn) {
		return <Navigate to="/" />
	}

	return (
		<div className="SignIn">
			<Navbar />

			<div className="w-full flex justify-center items-center mt-32 ">
				<div className="FORM p-4 w-4/5 max-w-sm bg-white rounded-md">
					<h1 className="text-center text-black text-4xl font-bold mb-4">Register</h1>

					<div className=" w-11/12 md:flex md:items-center mb-6">
						<div className="md:w-1/3">
							<label
								className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
								htmlFor="inline-first-name"
							>
								First Name
							</label>
						</div>
						<div className="md:w-2/3">
							<input
								className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
								id="registerFirstName"
								type="text"
								placeholder="First Name"
								value={registerCredentials.registerFirstName}
								onChange={handleRegister}
							/>
						</div>
					</div>

					<div className=" w-11/12 md:flex md:items-center mb-6">
						<div className="md:w-1/3">
							<label
								className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
								htmlFor="inline-last-name"
							>
								Last Name
							</label>
						</div>
						<div className="md:w-2/3">
							<input
								className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
								id="registerLastName"
								type="text"
								placeholder="Last Name"
								value={registerCredentials.registerLastName}
								onChange={handleRegister}
							/>
						</div>
					</div>

					<div className=" w-11/12 md:flex md:items-center mb-6">
						<div className="md:w-1/3">
							<label
								className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
								htmlFor="inline-username"
							>
								Username
							</label>
						</div>
						<div className="md:w-2/3">
							<input
								className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
								id="registerUserName"
								type="text"
								placeholder="Username"
								value={registerCredentials.registerUserName}
								onChange={handleRegister}
							/>
						</div>
					</div>

					<div className=" w-11/12 md:flex md:items-center mb-6">
						<div className="md:w-1/3">
							<label
								className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
								htmlFor="inline-email"
							>
								email
							</label>
						</div>
						<div className="md:w-2/3">
							<input
								className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
								id="registerEmail"
								type="email"
								placeholder="email@email.com"
								value={registerCredentials.registerEmail}
								onChange={handleRegister}
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
								className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
								id="registerPassword"
								type="password"
								placeholder="******************"
								value={registerCredentials.registerPassword}
								onChange={handleRegister}
							/>
						</div>
					</div>

					<div className="md:flex md:items-center">
						<div className="md:w-1/3"></div>
						<div className="md:w-2/3 flex justify-start">
							<div className="flex flex-col items-center justify-center mb-8">
								<button
									className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded mb-4"
									type="button"
									onClick={submitCredentials}
								>
									Register
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
