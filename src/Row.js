import React, { useEffect, useState } from 'react'
import './Row.css'
import YouTube from 'react-youtube'
import axios from './axios'
import movieTrailer from 'movie-trailer'
const base_url = "https://image.tmdb.org/t/p/original"
function Row(props) {

    const [movies, setmovies] = useState([])
    const [trailerUrl, settrailerUrl] = useState("")
    const handleClick = (movie) => {
        if(trailerUrl){
            settrailerUrl("")
        }else{
            movieTrailer(movie?.title || "").then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                settrailerUrl(urlParams.get("v"))
            }).catch(error => console.log(error))
        }
    }
    const opts = {
        height: '390',
        width: '99%',
        playerVars: {
         
          autoplay: 1,
        }}

    useEffect(() => {
       async function fetchData(){
            const request = await axios.get(props.fetchURL)
            
            setmovies(request.data.results)
            return request;
       }
       fetchData()
    }, [props.fetchURL])
    
    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="row__posters">
                {
                    movies.map(movie => (
                        <img
                        onClick={() => handleClick(movie)} 
                        key={movie.id}
                        className={`row__poster ${props.isLargeRow && "row__posterLarge"}`}
                        alt={movie.name} src={`${base_url}${props.isLargeRow ? movie.poster_path : movie.backdrop_path}`} />
                    ))
                }
            </div>
            {
                trailerUrl && 
                    <YouTube opts={opts} videoId={trailerUrl}/>
                
            }
        </div>
    )
}

export default Row

