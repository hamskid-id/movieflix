import { useEffect, useRef, useState } from "react"
import { FetchMovie } from "./fetch";
import {FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Text } from "./text";
import { Btn } from "./btn";
import { apiKey, baseUrl,ImgBaseUrl } from "./baseUrl";
import { useNavigate } from "react-router-dom";

export const NowPlaying=()=>{
    const navigate = useNavigate();
    const type = "movie";
    const[
        data,
        setData
    ]=useState<[]>([]);
    const[
        activeSlideIndex,
        setActiveSlideIndex
    ]=useState<number>(0);

    const[
        loading,
        setLaoding
    ]=useState<boolean>(false);

    const[
        activeSlide,
        setActiveSlide
    ]=useState<string>('http://image.tmdb.org/t/p/original/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg');

    useEffect(()=>{
        FetchMovie(setData,`${baseUrl}/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`,setLaoding);
    },[])

    const settings = {
        arrows: false,
        infinite: true,
        className: "center",
        centerPadding: "60px",
        speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange:(oldIndex:number,newIndex:number)=>{
        setActiveSlideIndex(newIndex)
      },
      autoplay: true,
      autoplaySpeed: 2000,
      
      };
    return(
        <div 
            className="w-100 pd-5 relative"
        >
            <div  className="wrapper"
                style={{
                    backgroundImage:`url(${activeSlide})`
                }}>
            </div>
            <Slider {...settings}>
                {
                    data?.map((item,index)=>{
                        const{
                            id,
                            poster_path,
                            backdrop_path,
                            release_date,
                            title,
                            overview
                        }=item;
                        return(
                            <div
                                className="d-flex wrap"
                                key={index}
                                >
                                <div className="wt-50 d-flex flex-column align-items-start p-2"
                                >
                                    <Text
                                        title={title}
                                        style="display-5 mb-4 text-white text-start"
                                    />
                                    <Text
                                        title={overview}
                                        style="fs-6 mb-2 text-start mb-2 c-grey"
                                    />
                                    <Text
                                        title={ release_date}
                                        style="fs-6 mb-4 c-grey"
                                    />
                                    <div className="d-flex">
                                        <Btn
                                            style="btn bg-red btn-md text-white me-2"
                                            title="watch now"
                                            handleClick={()=>navigate(`/movies/details/${type}/${id}`)}
                                        />
                                        <Btn
                                            style="btn btn-red text-white border"
                                            title="watch trailer"
                                            handleClick={()=>navigate(`/movies/details/${type}/${id}`)}
                                        />
                                    </div>
                                </div>
                                <div className="wt-25 p-2">
                                    <img 
                                        src={`${ImgBaseUrl}/w300/${poster_path}`}
                                        className="br-10 w-100"
                                        onClick={()=>activeSlideIndex ===index?setActiveSlide(`${ImgBaseUrl}/original/${backdrop_path}`):null}
                                    />
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}