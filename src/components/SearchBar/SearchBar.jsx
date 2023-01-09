import React from "react"
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"

const SearchBar = (props) => {
  return (
    <form className="SearchBar w-full mt-16 flex ml-28">
      <button className="w-8 text-white " type="submit">
        <MagnifyingGlassIcon />
      </button>
      <input
        className="SearchInput w-10/12 h-10 bg-inherit border-0 text-2xl outline-0 text-white ml-8 font-bold"
        placeholder="Search Games"
        onChange={props.onChange}
        value={props.value}
      />
    </form>
  )
}

export default SearchBar

// w-2/12
