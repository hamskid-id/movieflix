import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { apiKey, baseUrl, ImgBaseUrl } from "../components/baseUrl";
import { DetailsTag } from "../components/datailsrating";
import { FetchDetails, FetchMovie } from "../components/fetch";
import { Layout } from "../components/layout"
import Spinner from "../components/loader/loader";
import { MovieCard } from "../components/moviecard";
import { Text } from "../components/text";
import { TrailerCard } from "../components/trailerCard";

type detail={
    poster_path:string,
    original_title:string,
    overview:string,
    name:string,
    backdrop_path:string,
    genres:{id:number,name:string}[],
    status:string,
    release_date:string,
    runtime:number,
    vote_average:number
}
export const Details=()=>{
    const{
        id,
        type
    }=useParams();

    const[
        data,
        setData
    ]=useState<detail>({} as detail);

    const[
        cast,
        setCast
    ]=useState<[]>([]);

    const[
        trailerdata,
        setTrailerData
    ]=useState<[]>([]);

    const[
        loading,
        setLaoding
    ]=useState<boolean>(true);

    const[
        similardata,
        setSimilarData
    ]=useState<[]>([]);

    useEffect(()=>{
        FetchDetails(setData,`${baseUrl}/${type}/${id}?api_key=${apiKey}&language=en-US&page=1`, setLaoding);
        FetchMovie(setTrailerData,`${baseUrl}/${type}/${id}/videos?api_key=${apiKey}&language=en-US&page=1`, setLaoding);
        FetchMovie(setSimilarData,`${baseUrl}/${type}/${id}/similar?api_key=${apiKey}&language=en-US&page=1`, setLaoding);
    },[])

    if(loading){
        return <Spinner/>
    }

    return(
        <Layout>
            <div 
                className="w-100"
            >
                <div className="w-100 relative pd-5 mb-3">
                    <div  className="wrapper"
                        style={{
                            backgroundImage:`url(${ImgBaseUrl}/original/${data?.backdrop_path})`
                        }}>
                    </div>
                    <div 
                        className="row justfiy-content-start mb-2 relative"
                    >
                        <div className="col-md-3 ">
                            <div className="p-3">
                                <img 
                                    src={`${ImgBaseUrl}/w300/${data?.poster_path}`}
                                    className=" details-poster br-10"
                                />
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="d-flex flex-column p-3">
                                <Text 
                                    title={type==="movie"?data?.original_title:data?.name}
                                    style="display-5 text-azure text-start fw-bold"
                                />
                                <DetailsTag
                                    amount={data?.vote_average}
                                    runtime={data?.runtime}
                                    release_date={data?.release_date}
                                />
                                <div className="d-flex wrap mb-3">
                                    {
                                        data?.genres?.map((gen,index)=>{
                                            const{
                                                name
                                            }=gen
                                            return(
                                                <Text 
                                                    key={index}
                                                    title={name}
                                                    style="fs-6 rounded border text-azure me-2 px-2 py-1 mt-1"
                                                />
                                            )
                                        })
                                    }
                                </div>
                                <Text 
                                    title={data?.overview}
                                    style="fs-6 text-azure text-start mb-2"
                                />
                                <div>
                                    <Text 
                                        title="Trailers and Clips"
                                        style="fs-5 text-start mb-3 c-grey"
                                    />
                                    <TrailerCard
                                        data={trailerdata}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    (type && similardata.length !==0)?(
                    <MovieCard
                        title="You May Also Like"
                        data={similardata}
                        type={type}
                    />
                    ):null
                }
                
            </div>
        </Layout>
    )
}