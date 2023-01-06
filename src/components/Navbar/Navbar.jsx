import React from "react"
import NavItem from "../NavItem/NavItem"
import Logo from "../../assets/images/Logo.jpg"
import SearchBar from '../SearchBar/SearchBar'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="Navbar p-8 w-full">
    <div className="flex items-center ml-8 mt-8">
      <img className="Logo" 
      src={Logo}
       alt="a logo" />
      <h1 className="text-8xl text-white ml-8 font-bold">Quick-Save</h1>
      </div>
      <nav className="flex mt-16 items-center ml-8">
        <NavItem title="Home" />
        <NavItem title="Buy list" />
        <NavItem title="Sign in" />
        <NavItem title="Register" />
      </nav>
      <SearchBar />
    </div>
  )
}

export default Navbar
