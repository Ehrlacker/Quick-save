import React from "react"

const SignOut = ({onClick, title}) => {
	return (
		<>
			<p
				className="text-sm mr-4 mb-.5 text-white font-bold hover:scale-105 transition-transform cursor-pointer md:text-3xl mb-.5"
				onClick={onClick}
			>
				{title}
			</p>
		</>
	)
}

export default SignOut
