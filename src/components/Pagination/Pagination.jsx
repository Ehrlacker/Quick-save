import React from "react"

const Pagination = props => {
	return (
		<div className="w-full flex justify-center items-center">
			<div className="flex m-4">
				<button
					className="text-white m-4 text-2xl font-bold hover:scale-105 transition-transform"
					onClick={props.previous}
				>
					Previous
				</button>
				<p className="text-white m-4 text-2xl font-bold">{props.pageNumber}</p>
				<button
					className="text-white m-4 text-2xl font-bold hover:scale-105 transition-transform"
					onClick={props.next}
				>
					Next
				</button>
			</div>
		</div>
	)
}

export default Pagination
