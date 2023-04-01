import { useEffect, useState } from "react";
import { apiKey, baseUrl, ImgBaseUrl } from "./baseUrl";
import { FetchMovie } from "./fetch";
import { MovieCard } from "./moviecard";
import { Rating } from "./rating";
import { Text } from "./text"

export const TopRated=()=>{
    const[
        data,
        setData
    ]=useState<[]>([]);

    useEffect(()=>{
        FetchMovie(setData,`${baseUrl}/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`);
    },[])
    return(
        <>
            <MovieCard
                title="Top Rated"
                data={data}
                type="movie"
            />
        </>
    )
}