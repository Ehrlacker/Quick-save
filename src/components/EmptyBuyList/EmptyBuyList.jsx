import React from "react"
import Navbar from "../Navbar/Navbar"

const EmptyBuyList = ({signedIn}) => {
	return (
		<div signedIn={signedIn} className="BuyList">
			<Navbar />
			<h1 className="text-white text-5xl text-center font-bold h-screen mt-16">
				Please Add some games to the Buy list
			</h1>
		</div>
	)
}

export default EmptyBuyList
