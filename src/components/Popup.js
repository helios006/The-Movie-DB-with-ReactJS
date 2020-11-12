import React from 'react'

function Popup({ selected, closePopup }) {
	return (
		<section className="popup">
			<div className="content">
				<h2>{ selected.title } <span>({ selected.release_date })</span></h2>
				<p className="rating">Vote rate: {selected.vote_average}</p>
				<div className="plot">
					<img src={"https://image.tmdb.org/t/p/w400"+selected.poster_path} />
					<p>{selected.overview}</p>
				</div>
				<button className="close" onClick={closePopup}>Close</button>
			</div>
		</section>
	)
}

export default Popup