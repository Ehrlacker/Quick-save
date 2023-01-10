import React from "react"
import { Link } from "react-router-dom"

const NavItem = (props) => {
  return (
    <>
      <p className="text-3xl mr-6 text-white font-bold">
      <Link to={props.page}>{props.title}</Link>
        
      </p>
    </>
  )
}

export default NavItem
