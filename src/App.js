import React, {useState} from 'react';
import Search from './components/Search';
import Results from './components/Results';
import axios from 'axios';
import Popup from './components/Popup';
import Menu from './components/Menu';

function App(){
  const [state,setState] = useState({
    s:"",
    results: [],
    selected: {}
  });
  const apiurl = "https://api.themoviedb.org/3";
  const apikey = "0f399129c9732e32c185e77852c68f41";
  const search = (e) =>{
    if(e.key==="Enter"){
      axios(apiurl+"/search/movie?api_key="+apikey+"&query="+state.s).then(({data})=>{
        // console.log(data);
        let result = data.results;

        setState(prevState=>{
          return {...prevState, results: result}
        });
      });
    }
  }

  const popular = (e) =>{
    axios(apiurl+"/movie/popular?api_key="+apikey).then(({data})=>{
      // console.log(data);
      let result = data.results;

      setState(prevState=>{
        return {...prevState, results: result}
      });
    });
  }

  const topRated = (e) =>{
    axios(apiurl+"/movie/top_rated?api_key="+apikey).then(({data})=>{
      // console.log(data);
      let result = data.results;

      setState(prevState=>{
        return {...prevState, results: result}
      });
    });
  }

  const nowPlaying = (e) =>{
    axios(apiurl+"/movie/now_playing?api_key="+apikey).then(({data})=>{
      // console.log(data);
      let result = data.results;

      setState(prevState=>{
        return {...prevState, results: result}
      });
    });
  }

  const handleInput = (e)=>{
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s:s}
    });
    console.log(state.s);
  }

  const openPopup = id => {
    axios(apiurl+"/movie/"+id+"?api_key="+apikey).then(({data})=>{
      let result = data;

      setState(prevState=>{
        return {...prevState, selected:result}
      });
    });
  }
  const closePopup = () =>{
    setState(prevState=>{
      return {...prevState, selected: {}}
    });
  }

  return (
    <div className="App">
      <header>
        <h1>The Movie DB</h1>
      </header>
      <main>
        <Menu mostPopular={popular} topRated={topRated} nowPlaying={nowPlaying}/>
        <Search handleInput={handleInput} search={search}/>
        <Results results={state.results} openPopup={openPopup}/>

        {(typeof state.selected.title !="undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
      </main>
    </div>
  );
}
export default App;