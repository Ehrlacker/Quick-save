import React from "react"
import {Link} from "react-router-dom"

const NavItem = ({page, onClick, title, description}) => {
	return (
		<>
			<p
				className="text-sm mr-4 mb-.5 text-white font-bold hover:scale-105 transition-transform md:text-3xl mb-.5"
				onClick={onClick}
			>
				<Link to={page}>{title}</Link>
				{description}
			</p>
		</>
	)
}

export default NavItem
