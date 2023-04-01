
import { useNavigate } from "react-router-dom";
import { NavBrand } from "../components/navbrand";
import { Text } from "../components/text";
import { FaAlignJustify } from "react-icons/fa";

export const Header=()=>{
    const navigate = useNavigate();
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><NavBrand/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    
                    <FaAlignJustify
                        color="grey"
                        size="0.5rem"
                        className="navbar-toggler-icon"
                    />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                    {/* <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Link
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><hr className="dropdown-divider"></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link disabled">Link</a>
                        </li>
                    </ul> */}
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
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
                                    return <Text title={name} handleClick={()=>navigate(route)} style="text-dark fs-6"/>
                                })
                            }
                    </div>
                    </div>
                </div>
                </nav>
        </>
        // <div className="d-flex justify-content-between py-3 mb-2 pd-2x">
        //     <NavBrand/>
           
        // </div>
    )
}