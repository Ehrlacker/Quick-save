import React, {useRef} from "react"
import NavItem from "../NavItem/NavItem"
import Logo from "../../assets/images/Logo.jpg"
import SignOut from "../../components/SignOut/SignOut"

import "./Navbar.css"

const Navbar = ({signedIn, setSignedIn, setUserProfile, userProfile}) => {
	const ref = useRef(null)

	const signOutIfSignedIn = () => {
		setSignedIn(false)
		setUserProfile([])
		console.log("signed outtttttttttttt")
		console.log(signedIn)
	}
	console.log(signedIn)

	return (
		<div className="Navbar p-8 w-full flex flex-col items-center justify-center">
			<div className="w-full">
				<div className="flex items-center mt-8">
					<img
						className="Logo w-[100px] md:w-[150px] rounded-full"
						src={Logo}
						alt="a logo"
					/>
					<h1 className="text-4xl text-white ml-4 font-bold md:text-8xl">Quick-Save</h1>
				</div>

				<nav className="navBarListItems flex mt-16 items-center justify-between">
					<div className="flex">
						<NavItem page={"/"} title="Home" />
						<NavItem page={"/BuyList"} title="Buy list" />
						<NavItem page={"/MyLibrary"} title="My Library" />
					</div>
					<div className="flex" ref={ref}>
						<div style={signedIn ? {display: "none"} : {display: "block"}}>
							<NavItem page={"/SignIn"} title="Sign In" />
						</div>
						<div style={signedIn ? {display: "block"} : {display: "none"}}>
							<SignOut title="Sign Out" onClick={signOutIfSignedIn} />
						</div>

						<div
							style={
								signedIn ? {display: "none"} : {display: "block", marginRight: 10}
							}
						>
							<NavItem page={"/Register"} title="Register" />
						</div>
					</div>
				</nav>
			</div>
		</div>
	)
}

export default Navbar
//style={signedIn ? {display: "block"} : {display: "none"}}
