import React from "react"
import {Link} from "react-router-dom"

const NavItem = props => {
	return (
		<>
			<p className="text-lg mr-6 text-white font-bold md:text-3xl">
				<Link to={props.page}>{props.title}</Link>
			</p>
		</>
	)
}

export default NavItem
