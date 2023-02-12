import React from "react"
import {Link} from "react-router-dom"

const NavItem = ({page, onClick, title, description}) => {
	return (
		<>
			<p
				className="text-lg mr-6 text-white font-bold md:text-3xl hover:scale-105 transition-transform"
				onClick={onClick}
			>
				<Link to={page}>{title}</Link>
				{description}
			</p>
		</>
	)
}

export default NavItem
