import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl ,apiKey, ImgBaseUrl} from "./baseUrl";
import { Btn } from "./btn";
import { FetchMovie } from "./fetch";
import Spinner from "./loader/loader";
import { Rating } from "./rating";
import { Text } from "./text";


export const Movies=()=>{
    const navigate = useNavigate()
    const[
        data,
        setData
    ]=useState<[]>([]);
    const type = "movie";

     const[
        loading,
        setLaoding
    ]=useState<boolean>(false);

    const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const{
            value
        }=e.currentTarget.search
        FetchMovie(setData,`${baseUrl}/search/movie?api_key=${apiKey}&query=${value}&language=en-US&page=1`, setLaoding);
    }

    useEffect(()=>{
        FetchMovie(setData,`${baseUrl}/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`, setLaoding);
    },[])

    if(loading){
        return <Spinner/>
    }

    return(
        <div>
            <form 
                className="my-3"
                onSubmit={handleSubmit}
            >
                <input  type="text" placeholder="enter your search" name="search" className="p-2 bg bg-dark border rounded border-dark"/>
                <button 
                    className="btn bg-purple text-white btn-md p-2"
                >
                    search
                </button>
            </form>
            <div className="w-100 d-flex wrap justify-content-center">
            {
                    data?.map((item,index)=>{
                        const{
                            poster_path,
                            id,
                            vote_average,
                            original_title,
                            release_date
                        }=item;
                        return(
                            <div 
                                onClick={()=>navigate(`/movies/details/${type}/${id}`)}
                                key={index}
                                className="m-2 movie lightgreen br-10">
                                <div
                                    className="d-flex flex-column  moviesImg"
                                    key={index}
                                    >
                                        <img 
                                            src={`${ImgBaseUrl}/w300/${poster_path}`}
                                            className=" mb-3 w-100 br-10"
                                        />
                                        <div className="d-flex flex-column p-2">
                                            <Text 
                                                style="fs-6 text-white text-start mb-2 cardTitle"
                                                title={original_title}
                                            />
                                            <Rating
                                                amount={vote_average}
                                                date={release_date}
                                            />
                                        </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}