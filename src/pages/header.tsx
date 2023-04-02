
import { useNavigate } from "react-router-dom";
import { NavBrand } from "../components/navbrand";
import { Text } from "../components/text";
import { FaAlignJustify } from "react-icons/fa";

export const Header=()=>{
    const navigate = useNavigate();
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-black">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <NavBrand/></a>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarScroll" 
                        aria-controls="navbarScroll" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <FaAlignJustify
                            color="grey"
                            size="0.5rem"
                            className="navbar-toggler-icon"
                        />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <div className=" nav-link">
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