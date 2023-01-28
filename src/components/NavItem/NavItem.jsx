import React from "react"
import {Link} from "react-router-dom"

const NavItem = ({page, onClick, title}) => {
	return (
		<>
			<p className="text-lg mr-6 text-white font-bold md:text-3xl">
				<Link to={page} onClick={onClick}>
					{title}
				</Link>
			</p>
		</>
	)
}

export default NavItem
