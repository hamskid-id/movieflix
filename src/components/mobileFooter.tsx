
import { FaHotjar,FaBookmark,FaPhotoVideo,FaDesktop } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Text } from "./text";

export const MobileFooter=()=>{
    const navigate = useNavigate()
    return(
        <div className="mobilefooter">
        {
            [
                {
                    icon:<FaHotjar color="palegreen" size="1rem"/>,
                    name:"Trending",
                    route:"/"
                },{
                    icon:<FaPhotoVideo color="palegreen" size="1rem"/>,
                    name:"Movies",
                    route:"/movies"
                },{
                    icon:<FaDesktop color="palegreen" size="1rem"/>,
                    name:"TV Shows",
                    route:"/tv"
                },{
                    icon:<FaBookmark color="palegreen" size="1rem"/>,
                    name:"Bookmarks",
                    route:"/bookmarks"
                }
            ].map((navroute,index)=>{
                const{
                    icon,
                    name,
                    route
                }=navroute;
                return(
                    <div key={index} 
                        className="d-flex flex-column align-items-center"
                        onClick={()=>navigate(route)}
                    >
                        <span>
                            {icon}
                        </span>
                        <Text
                            title={name}
                            style="text-white mobileFooterFont"
                        />

                    </div>
                )
            })
        }
    </div>
    )
}