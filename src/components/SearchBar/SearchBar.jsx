import React from 'react'

const SearchBar = () => {
  return (
   <form className="SearchBar w-full mt-16 flex mr-8 ml-8 ">
       <input className="w-9/12 h-10" placeholder="Search Games"/>
       <button className="w-2/12 text-white bg-violet-800 ">Search</button>
   </form>
  )
}

export default SearchBar