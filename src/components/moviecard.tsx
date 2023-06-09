import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch} from "react-redux";
import Slider from "react-slick";
import { ImgBaseUrl } from "./baseUrl";
import { Rating } from "./rating";
import { Text } from "./text"
import { useNavigate } from "react-router-dom";
import { Bookmarks } from "./bookmarks";
import { bookActions } from "../store/bookmarksSlice";
type CardProp={
    title:string,
    data:[],
    type:string
}
export const MovieCard=({
    title,
    data,
    type
}:CardProp)=>{

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const settings = {
        arrows: false,
        infinite: true,
        className: "center",
        beforeChange:()=>{

        },
        centerPadding: "60px",
        speed: 3000,
      slidesToShow: 6,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll:2,
            centerMode:false,
          }
        }
        ]
      };
    return(
        <div 
            className="w-100 pd-2x"
        >
            <div>
                <Text
                    title={title}
                    style="text-azure fs-6 text-start"
                />
            </div>
            <Slider {...settings}>
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
                            <div className="m-4 p-2">
                                <div
                                    className="d-flex flex-column lightgreen br-10 relative"
                                    key={index}
                                    >
                                        <img 
                                            src={`${ImgBaseUrl}/w300/${poster_path}`}
                                            className="w-100 br-10 mb-3"
                                            onClick={()=>navigate(`/movies/details/${type}/${id}`)}
                                        />
                                        <div className="d-flex flex-column p-2">
                                            <Text 
                                                style="fs-6 text-azure text-start mb-2 cardTitle"
                                                title={original_title}
                                            />
                                            <Rating
                                                amount={vote_average}
                                                date={release_date}
                                            />
                                        </div>
                                        <Bookmarks
                                            handleClick={()=>
                                                dispatch(
                                                    bookActions.addToBookmarked({
                                                        poster_path,
                                                        id,
                                                        vote_average,
                                                        original_title,
                                                        release_date,
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
            </Slider>
        </div>
    )
}