import React from "react"

const NavItem = (props) => {
  return (
    <>
      <p className="text-3xl mr-6 text-white font-bold">
        {props.title}
        {props.link}
      </p>
    </>
  )
}

export default NavItem
