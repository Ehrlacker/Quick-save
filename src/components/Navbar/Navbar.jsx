import React, { useRef, useState } from "react"
import NavItem from "../NavItem/NavItem"
import Logo from "../../assets/images/Logo.jpg"
import Hamburger from "hamburger-react"
import SignOut from "../../components/SignOut/SignOut"
import NavLogo from '../NavLogo/NavLogo'

import "./Navbar.css"

const Navbar = ({ signedIn, setSignedIn, setUserProfile, userProfile, setBuyList }) => {
	const ref = useRef(null)
	const [isOpen, setOpen] = useState(false);

	const signOutIfSignedIn = () => {
		setSignedIn(false)
		setUserProfile([])
	}

	if (isOpen) {
		return (
			<div className="Navbar flex flex-col items-center justify-center">
				<div className="w-full flex justify-between">
					<NavLogo />


					<nav className="navBarListItems p-2 flex flex-col mt-2 items-end justify-center absolute top-1 right-4 bg-indigo-800 md:top-8">
						<Hamburger color="white" toggled={isOpen} toggle={setOpen} />
						<div className="flex flex-col items-end justify-end">

							<NavItem page={"/"} title="Home" />
							<NavItem page={"/BuyList"} title="Buy list" />
							<NavItem page={"/MyLibrary"} title="Library" />
						</div>


						<div className="flex flex-col items-center justify-center w-full" ref={ref}>
							<div style={signedIn ? { display: "none" } : { display: "block" }}>
								<NavItem page={"/SignIn"} title="Sign In" />
							</div>


							<div style={signedIn ? { display: "block" } : { display: "none" }}>
								<SignOut title="Sign Out" onClick={signOutIfSignedIn} />
							</div>

							<div className="flex justify-end items-end "
								style={
									signedIn ? { display: "none" } : { display: "block" }
								}
							>
								<NavItem page={"/Register"} title="Register"  />
								
							</div>
						</div>




					</nav>
				</div>
			</div>

		)
	} return (
		<div className="Navbar flex items-center justify-between">
			<NavLogo />
			<div className="absolute top-1 right-4 md:top-8">
				<Hamburger color="white" toggled={isOpen} toggle={setOpen} />
			</div>
		</div>
	)
}

export default Navbar
