import React from "react"
import Navbar from "../Navbar/Navbar"

const EmptyLibraryList = () => {
	return (
		<div className="BuyList">
			<Navbar />
			<h1 className="text-white text-5xl text-center font-bold h-screen mt-16">
				Please Add some games to the Library list
			</h1>
		</div>
	)
}

export default EmptyLibraryList
