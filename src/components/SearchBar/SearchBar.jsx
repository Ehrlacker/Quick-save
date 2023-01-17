import React from "react"
import {MagnifyingGlassIcon} from "@heroicons/react/24/solid"

const SearchBar = props => {
	return (
		<div className="SearchBar w-full mt-16 flex mr-16 ml-16">
			<button className="w-8 text-white " type="button">
				<MagnifyingGlassIcon onClick={props.onClick} />
			</button>
			<input
				className="SearchInput w-10/12 h-10 bg-inherit border-0 text-2xl outline-0 text-white ml-8 font-bold"
				placeholder="Search Games"
				onChange={props.onChange}
				value={props.value}
				type="text"
			/>
		</div>
	)
}

export default SearchBar
