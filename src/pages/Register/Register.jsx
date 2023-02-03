import React, {useState} from "react"
import RegisterInput from "../../components/RegisterInput/RegisterInput"
import RegisterButton from "../../components/RegisterButton/RegisterButton"
import {Navigate} from "react-router-dom"
import axios from "axios"

const SignIn = ({signedIn, setSignedIn, userProfile, setUserProfile}) => {
	const [registerCredentials, setRegisterCredentials] = useState({
		registerFirstName: "",
		// registerLastName: "",
		registerUserName: "",
		// registerEmail: "",
		registerPassword: "",
	})

	const handleRegister = e => {
		const {id, value} = e.target
		setRegisterCredentials(prevValue => {
			return {...prevValue, [id]: value}
		})
	}

	const submitCredentials = () => {
		// const url = "http://localhost:3002/buyList"
		// const config = {headers: {"Content-Type": "application/json"}}
		// const data = {
		// 	body: JSON.stringify({
		// 		firstName: registerCredentials.registerFirstName,
		// 		username: registerCredentials.registerUserName,
		// 		password: registerCredentials.registerPassword,
		// 	}),
		// }
		// try {
		// 	axios
		// 		.post(url, config, data)
		// 		.then(response => response.json())
		// 		.then(user => {
		// 			console.log("ttttttt")
		// 			console.log(user)
		// 		})
		// } catch (error) {
		// 	console.log(error)
		// }
		try {
			console.log("workssss")
			fetch("http://localhost:3002/register", {
				method: "post",
				headers: {"Content-Type": "application/json"},
				body: JSON.stringify({
					firstName: registerCredentials.registerFirstName,
					// lastName: registerCredentials.registerLastName,
					username: registerCredentials.registerUserName,
					// email: registerCredentials.registerEmail,
					password: registerCredentials.registerPassword,
				}),
			})
				.then(response => response.json())
				.then(user => {
					console.log("ttttttt")
					console.log(user)
				})
		} catch (error) {
			console.log("yesss", error)
		}
	}

	if (signedIn) {
		return <Navigate to="/" />
	}

	return (
		<div className="SignIn">
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
						title="Username"
						id="registerUserName"
						type="text"
						placeholder="Username"
						onChange={handleRegister}
						value={registerCredentials.registerUserName}
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
