import { useEffect, useState } from "react";
import { apiKey, baseUrl} from "./baseUrl";
import { FetchMovie } from "./fetch";
import Spinner from "./loader/loader";
import { MovieCard } from "./moviecard";

export const TopRated=()=>{
    const[
        data,
        setData
    ]=useState<[]>([]);

    const[
        loading,
        setLaoding
    ]=useState<boolean>(false);

    useEffect(()=>{
        FetchMovie(setData,`${baseUrl}/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,setLaoding);
    },[])

     if(loading){
        return <Spinner/>
    }

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