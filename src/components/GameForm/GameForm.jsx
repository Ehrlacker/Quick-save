import React, {useState} from "react"

const GameForm = ({value1, value2, firstChange, secondChange, keyPress}) => {
	const [inputs, setInputs] = useState({
		store: "",
		price: "",
	})

	const handleStorePriceInputs = e => {
		const {name, value} = e.target
		setInputs(prevValue => {
			return {
				...prevValue,
				[name]: value,
			}
		})
	}

	return (
		<form className=" flex justify-center  items-center">
			<input
				name="store"
				onChange={handleStorePriceInputs}
				className="rounded w-1/4 mr-2"
				placeholder="Store name"
				value={inputs.title}
				onKeyPress={keyPress}
			/>
			<input
				name="price"
				onChange={handleStorePriceInputs}
				className="w-1/4  rounded"
				placeholder="Price"
				value={inputs.content}
				onKeyPress={keyPress}
			/>
		</form>
	)
}

export default GameForm
