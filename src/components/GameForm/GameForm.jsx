import React from "react"

const GameForm = ({value1, value2, firstChange, secondChange}) => {
	return (
		<form className=" flex justify-center  items-center">
			<input
				name="store"
				onChange={firstChange}
				className="rounded w-1/4 mr-2"
				placeholder="Store name"
				value={value1}
			/>
			<input
				name="price"
				onChange={secondChange}
				className="w-1/4  rounded"
				placeholder="Price"
				value={value2}
			/>
		</form>
	)
}

export default GameForm
