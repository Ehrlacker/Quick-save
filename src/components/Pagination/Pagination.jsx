import React from "react"

const Pagination = ({ totalPosts, postsPerPage, paginate }) => {
  let pages = []
  for (let i = 1; i <= Math.ceil( totalPosts  / postsPerPage); i++) {
    pages.push(i)
    console.log(pages)
  }
  return (
    <nav className= "w-full h-16 flex justify-center items-center">
      <ul className="flex ">
        {pages.map((number) => {
          return (
            <li key={number} className="page-Number ">
              <a onClick={()=> paginate(number)}href="!#" className="page-link text-white text-3xl m-2">
                {number}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Pagination
