import React, {useState} from "react"
import Navbar from "../../components/Navbar/Navbar"
import RegisterInput from "../../components/RegisterInput/RegisterInput"
import RegisterButton from "../../components/RegisterButton/RegisterButton"
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

	const submitCredentials = () => {
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
				console.log(user)
				// if (user) {
				// 	setUserProfile(prevValue => {
				// 		return [...prevValue, user]
				// 	})
				// 	console.log(userProfile)
				// }
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

					<RegisterInput
						title="First Name"
						id="registerFirstName"
						type="text"
						onChange={handleRegister}
						placeholder="First Name"
						value={registerCredentials.registerFirstName}
					/>

					<RegisterInput
						title="Last Name"
						id="registerLastName"
						type="text"
						placeholder="Last Name"
						onChange={handleRegister}
						value={registerCredentials.registerLastName}
					/>

					<RegisterInput
						title="Username"
						id="registerUserName"
						type="text"
						placeholder="Username"
						onChange={handleRegister}
						value={registerCredentials.registerUserName}
					/>

					<RegisterInput
						title="email"
						id="registerEmail"
						type="email"
						placeholder="Email"
						onChange={handleRegister}
						value={registerCredentials.registerEmail}
					/>

					<RegisterInput
						title="Password"
						id="registerPassword"
						type="password"
						placeholder="******************"
						onChange={handleRegister}
						value={registerCredentials.registerPassword}
					/>

					<RegisterButton onClick={submitCredentials} />
				</div>
			</div>
		</div>
	)
}

export default SignIn
