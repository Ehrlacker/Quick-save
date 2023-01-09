import React from "react"
import NavItem from "../NavItem/NavItem"
import Logo from "../../assets/images/Logo.jpg"
import './Navbar.css'

const Navbar = (props) => {
  return (
    <div className="Navbar p-8 w-full flex flex-col items-center justify-center">


    <div className="w-full">
    <div className="flex items-center mt-8">
      <img className="Logo" 
      src={Logo}
       alt="a logo" />
      <h1 className="text-8xl text-white ml-8 font-bold">Quick-Save</h1>
      </div>
      <nav className="flex mt-16 items-center">
        <NavItem title="Home" />
        <NavItem title="Buy list" />
        <NavItem title="Sign in" />
        <NavItem title="Register" />
      </nav>
      </div>
     
    </div>
  )
}

export default Navbar
