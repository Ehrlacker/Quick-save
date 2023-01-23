import React from "react"

const RegisterButton = ({onClick}) => {
	return (
		<div className="md:flex md:items-center">
			<div className="md:w-1/3"></div>
			<div className="md:w-2/3 flex justify-start">
				<div className="flex flex-col items-center justify-center mb-8">
					<button
						className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded mb-4"
						type="button"
						onClick={onClick}
					>
						Register
					</button>
				</div>
			</div>
		</div>
	)
}

export default RegisterButton
