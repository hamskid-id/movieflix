import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl ,apiKey, ImgBaseUrl} from "./baseUrl";
import { FetchGenre, FetchMovie } from "./fetch";
import Spinner from "./loader/loader";
import { Rating } from "./rating";
import { Text } from "./text";
import { FaDesktop } from "react-icons/fa";
import { Bookmarks } from "./bookmarks";
import { FaSistrix } from "react-icons/fa";
import { HeadLayout } from "./headlayout";
import { bookActions } from "../store/bookmarksSlice";
import { useDispatch } from "react-redux";

export const Tv=()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const[
        genre,
        setGenre
    ]=useState<[]>([]);

    const[
        data,
        setData
    ]=useState<[]>([]);

    const[
        loading,
        setLaoding
    ]=useState<boolean>(false);

    const type="tv";
    const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const{
            value
        }=e.currentTarget.search
        FetchMovie(setData,`${baseUrl}/search/tv?api_key=${apiKey}&query=${value}&language=en-US&page=1`,setLaoding);
    }
    useEffect(()=>{
        FetchMovie(setData,`${baseUrl}/tv/popular?api_key=${apiKey}&language=en-US&page=1`,setLaoding);
        FetchGenre(setGenre,`${baseUrl}/genre/movie/list?api_key=${apiKey}&language=en-US&page=1`, setLaoding);
    },[])

    if(loading){
        return <Spinner/>
    }

    return(
        <div className="pb-4">
            <HeadLayout
                title="TV Shows"
                subTitle="Discover Popular TV Shows that you'd love"
                handleSubmit={handleSubmit}
                gen={genre}
                movieType={type}
                setData={setData}
                setLaoding={setLaoding}  
            />
            <div className="w-100 d-flex wrap justify-content-center">
            {
                    data?.map((item,index)=>{
                        const{
                            poster_path,
                            id,
                            vote_average,
                            original_name,
                            first_air_date
                        }=item;
                        return(
                            <div 
                                key={index}
                                className="m-2 movie lightgreen br-10">
                                <div
                                    onClick={()=>navigate(`/movies/details/${type}/${id}`)}
                                    className=" d-flex flex-column  moviesImg relative"
                                    >
                                        <img 
                                            src={`${ImgBaseUrl}/w300/${poster_path}`}
                                            className="w-100 mb-3 br-10"
                                        />
                                        <div className="d-flex flex-column p-2">
                                            <Text 
                                                style="fs-6 text-azure text-start mb-2 cardTitle"
                                                title={original_name}
                                            />
                                            <Rating
                                                amount={vote_average}
                                                date={first_air_date}
                                            />
                                        </div>
                                        <Bookmarks
                                            handleClick={()=>
                                                dispatch(
                                                    bookActions.addToBookmarked({
                                                        poster_path,
                                                        id,
                                                        vote_average,
                                                        original_title:original_name,
                                                        release_date:first_air_date,
                                                        type
                                                    })
                                                )
                                            }
                                        />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}