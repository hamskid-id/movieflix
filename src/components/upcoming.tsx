import { useEffect, useState } from "react";
import { apiKey, baseUrl } from "./baseUrl";
import {FetchMovie } from "./fetch";
import { MovieCard } from "./moviecard";

export const UpComing=()=>{
    const[
        data,
        setData
    ]=useState<[]>([]);

    useEffect(()=>{
        FetchMovie(setData,`${baseUrl}/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`);
    },[])
    console.log(data)
    return(
        <>
            <MovieCard
                title="Up Coming"
                data={data}
                type="movie"
            />
        </>
    )
}