import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import store from "../store";
import { ImgBaseUrl } from "./baseUrl";
import { Rating } from "./rating";
import { Text } from "./text";
import { FaHotjar,FaBookmark,FaPhotoVideo,FaDesktop } from "react-icons/fa";

export const BookmarksView=()=>{
    const item = useSelector((state:ReturnType<typeof store.getState>)=>state.bookmark);
    const navigate = useNavigate();
    const{
        bookContent
    }=item;
    return(
        <div className="pb-4">
            <div>
                <div className="trendingPar mb-1">
                    <div className="d-flex align-items-center mb-2">
                        <FaHotjar 
                            color="palegreen" 
                            size="1rem"
                            className="me-2"
                        />
                        <Text
                            style="fs-4 fw-bold text-azure text-start"
                            title="Bookmarks"
                        />
                    </div>
                    <Text 
                        style="fs-6 text-azure text-start"
                        title="All movies bookmarked appears here"
                    />
                </div>
            </div>
            <div className="w-100 d-flex wrap justify-content-center">
                {
                    bookContent?.map((items,index)=>{
                        const{
                            poster_path,
                            id,
                            vote_average,
                            original_title,
                            release_date,
                            type
                        }=items;
                        return(
                            <div 
                                className="m-2 movie lightgreen br-10"
                                key={index}>
                                <div
                                    className="d-flex flex-column lightgreen br-10 relative"
                                    onClick={()=>navigate(`/movies/details/${type}/${id}`)}
                                    >
                                        <img 
                                            src={`${ImgBaseUrl}/w300/${poster_path}`}
                                            className="w-100 br-10 mb-3"
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
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {
                bookContent.length ===0  
                    && <Text
                            style="text-azure fs-6"
                            title="Bookmarks List is empty"
                        />
            }
        </div>
    )
}