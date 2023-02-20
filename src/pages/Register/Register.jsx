import React, {useState} from "react"
import RegisterInput from "../../components/RegisterInput/RegisterInput"
import RegisterButton from "../../components/RegisterButton/RegisterButton"
import {Navigate} from "react-router-dom"

const SignIn = ({signedIn, setSignedIn, userProfile, setUserProfile}) => {
	const [registerCredentials, setRegisterCredentials] = useState({
		registerFirstName: "",
		registerUserName: "",
		registerPassword: "",
	})

	const [checkUsername, setCheckUsername] = useState(false)
	const [checkPassword, setCheckPassword] = useState(false)
	const [checkName, setCheckName] = useState(false)

	const handleRegister = e => {
		const {id, value} = e.target
		setRegisterCredentials(prevValue => {
			return {...prevValue, [id]: value}
		})
	}

	const submitCredentials = async () => {
		if (registerCredentials.registerFirstName.length === 0) {
			setCheckName(true)
			return
		} else if (
			registerCredentials.registerUserName.length < 5 ||
			registerCredentials.registerUserName.length > 20
		) {
			setCheckUsername(true)
			return
		} else if (
			registerCredentials.registerPassword.length < 5 ||
			registerCredentials.registerPassword.length > 20
		) {
			setCheckPassword(true)
			return
		} else {
			try {
				const response = await fetch(process.env.REACT_APP_serverregister, {
					method: "post",
					headers: {"Content-Type": "application/json"},
					body: JSON.stringify({
						firstName: registerCredentials.registerFirstName,
						username: registerCredentials.registerUserName,
						password: registerCredentials.registerPassword,
					}),
				})
				const data = await response.json()
				setRegisterCredentials({
					registerFirstName: "",
					registerUserName: "",
					registerPassword: "",
				})

				if (data) {
					alert("You are now registered, please sign in!")
				}
			} catch (error) {
				console.error(error)
			}
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
						message="please add a first name"
						style={checkName ? {display: "block"} : {display: "none"}}
					/>

					<RegisterInput
						title="Username"
						id="registerUserName"
						type="text"
						placeholder="Username"
						onChange={handleRegister}
						value={registerCredentials.registerUserName}
						message="please add username between 5-20 characters"
						style={checkUsername ? {display: "block"} : {display: "none"}}
					/>

					<RegisterInput
						title="Password"
						id="registerPassword"
						type="password"
						placeholder="******************"
						onChange={handleRegister}
						value={registerCredentials.registerPassword}
						message="please add password between 5-20 characters"
						style={checkPassword ? {display: "block"} : {display: "none"}}
					/>

					<RegisterButton onClick={submitCredentials} />
				</div>
			</div>
		</div>
	)
}

export default SignIn
