import React from "react"
import NavItem from "../NavItem/NavItem"
import Logo from "../../assets/images/Logo.jpg"
import "./Navbar.css"

const Navbar = props => {
	return (
		<div className="Navbar p-8 w-full flex flex-col items-center justify-center">
			<div className="w-full">
				<div className="flex items-center mt-8">
					<img
						className="Logo w-[100px] md:w-[150px] rounded-full"
						src={Logo}
						alt="a logo"
					/>
					<h1 className="text-5xl text-white ml-8 font-bold md:text-8xl">Quick-Save</h1>
				</div>
				<nav className="flex mt-16 items-center">
					<NavItem page={"/"} title="Home" />
					<NavItem page={"/BuyList"} title="Buy list" />
					<NavItem page={"/MyLibrary"} title="My Library" />
					{/* <NavItem title="Sign in" />
					<NavItem title="Register" /> */}
				</nav>
			</div>
		</div>
	)
}

export default Navbar
