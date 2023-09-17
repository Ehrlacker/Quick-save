import React from "react"
import { Link } from "react-router-dom"
import Logo from "../../assets/images/Logo.jpg"


const NavLogo = () => {
  return (
    <div className="flex items-center mt-2 max-w-3xl mb-4 ml-2 md:mt-4">
      <Link to={"/"} title="Home">
        <img
          className="Logo w-[40px] md:w-[100px] rounded-full"
          src={Logo}
          alt="a logo"
        />
      </Link>
      <h1 className="LogoH1 text-3xl text-white ml-4 font-bold md:text-6xl">Quick-Save</h1>
    </div>
  )
}

export default NavLogo