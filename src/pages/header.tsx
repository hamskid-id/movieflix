
import { useNavigate } from "react-router-dom";
import { NavBrand } from "../components/navbrand";
import { Text } from "../components/text";
import { FaAlignJustify } from "react-icons/fa";

export const Header=()=>{
    const navigate = useNavigate();
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-black shadow">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <NavBrand/>
                    </a>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <div className="nav-link">
                                {
                                    [
                                        {
                                            name:"Home",
                                            route:"/"
                                        },{
                                            name:"Movies",
                                            route:"/movies"
                                        },{
                                            name:"Tv Series",
                                            route:"/tv"
                                        },{
                                            name:"Bookmarks",
                                            route:"/bookmarks"
                                        }
                                    ].map((routes,index)=>{
                                        const{
                                            name,
                                            route
                                        }=routes
                                        return <Text title={name} handleClick={()=>navigate(route)} style="text-white fs-6"/>
                                    })
                                }
                        </div>
                    </div>
                </div>
                </nav>
        </>
    )
}