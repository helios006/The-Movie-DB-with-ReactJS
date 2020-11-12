import React from 'react';

function Menu ({mostPopular,topRated,nowPlaying}) {
    return (
      <section className="results menu">
      	<button className="button-sample" onClick={mostPopular}>Popular Movie</button>
      	<button className="button-sample" onClick={topRated}>Top Rated Movie</button>
      	<button className="button-sample" onClick={nowPlaying}>Now Playing Movie</button>
      </section> 
    );
}
export default Menu