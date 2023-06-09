import { useEffect, useState } from "react";
import { apiKey, baseUrl } from "./baseUrl";
import {FetchMovie } from "./fetch";
import { MovieCard } from "./moviecard";

export const UpComing=()=>{
    const[
        data,
        setData
    ]=useState<[]>([]);

    const[
        loading,
        setLaoding
    ]=useState<boolean>(true);


    useEffect(()=>{
        FetchMovie(setData,`${baseUrl}/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`, setLaoding);
    },[])
    console.log(data)
    return(
        <>
            <MovieCard
                title="UpComing Movies"
                data={data}
                type="movie"
            />
        </>
    )
}