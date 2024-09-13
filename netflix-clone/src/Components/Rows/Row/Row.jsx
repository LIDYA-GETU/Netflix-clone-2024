import React, { useEffect, useState } from 'react'
import "./row.css";
import axios from '../../../Utils/Axios';
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";


function Row({title,fetchUrl,islargeRow}){
   const[movies,setMovie] =useState([]);
   const [trailerUrl,setTrailerUrl] =useState("");
   const base_url = "https://image.tmdb.org/t/p/original";
   useEffect(()=>{
      (async()=>{
            try{
                  console.log(fetchUrl);
                  const request=await axios.get(fetchUrl);
                  setMovie(request.data.results)
            } catch(error){
                  console.log("error",error);
            }
      })()
   },[fetchUrl])
   const handleClick=(movie)=>{
      if (trailerUrl){
            setTrailerUrl('')
      }else {
            movieTrailer(movie?.title||movie?.name||movie?.original_name)
            .then((url)=>{
                  console.log(url);
                  const urlparams=new URLSearchParams(new URL(url).search)
                  console.log(urlparams);
                  console.log(urlparams.get('v'));
                  setTrailerUrl(urlparams.get('v'));
            })
            
      }
   }
   const opts = {
     height: "390",
     width: "100%",
     playerVars: {
       autoplay: 1,
     },
   };
   console.log(movies);
   console.log(trailerUrl);
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {movies?.map((movie, index) => {
         return <img
            onClick={() => handleClick(movie)}
            key={index}
            src={`${base_url}${
              islargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row__poster ${islargeRow && "row__posterLarge"}`}
          />;
        })}
      </div>

      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}
export default Row;
