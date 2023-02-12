import React from "react"

const NavItem = ({onClick, title}) => {
	return (
		<>
			<p
				className="text-lg mr-6 text-white font-bold md:text-3xl cursor-pointer hover:scale-105 transition-transform"
				onClick={onClick}
			>
				{title}
			</p>
		</>
	)
}

export default NavItem
