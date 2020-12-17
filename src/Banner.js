import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from './axios'
import request from './Request'
function Banner() {

    const [movie, setmovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const requests = await axios.get(request.fetchNetflixOriginals)
            setmovie(requests.data.results[Math.floor(Math.random() * requests.data.results.length - 1)])
        }
        fetchData();
    },[])



    return (
       <header 
       style={{
           backgroundSize: "cover",
           backgroundPosition:"center center",
           
           backgroundImage: `url(
            https://image.tmdb.org/t/p/original${movie?.backdrop_path}
           )`
       }}
       className="banner">
            <div className="banner_contents">
           <h1 className="banner__title">
              {
                  movie?.title || movie?.name || movie?.original_name
              } 
           </h1>
           <div className="banner__buttons">
              <button className="banner__button">Play</button>
              <button className="banner__button">My List</button>
           </div>
           <h1 className="banner__description">
               {movie?.overview}
           </h1>
           <div className="banner__fadebuttom">

           </div>
           <br />
           <br />
            </div>
       </header>
    )
}

export default Banner
