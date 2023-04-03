import { useEffect, useState } from "react";
import { apiKey, baseUrl } from "./baseUrl";
import { FetchMovie } from "./fetch";
import Spinner from "./loader/loader";
import { MovieCard } from "./moviecard";

export const Latest=()=>{
    const[
        data,
        setData
    ]=useState<[]>([]);
    const[
        loading,
        setLaoding
    ]=useState<boolean>(true);

    useEffect(()=>{
        FetchMovie(setData,`${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`,setLaoding);
    },[])

    if(loading){
        return <Spinner/>
    }

    return(
        <>
            <MovieCard
                title="Latest Movies"
                data={data}
                type="movie"

            />
        </>
    )
}