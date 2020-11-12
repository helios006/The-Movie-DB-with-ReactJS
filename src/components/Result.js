import React from 'react'
function Result({result,openPopup}) {
	return (
		<div className="result" onClick={()=>openPopup(result.id)}>
			<img src={"https://image.tmdb.org/t/p/w400"+result.poster_path} alt={result.title}/>
			<h3>{result.original_title}</h3>
			<h3>Vote Rate : {result.vote_average}</h3>
			<h3>Released Date : {result.release_date}</h3>
		</div>
	)
}

export default Result