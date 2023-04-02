import { NavBrand } from "./navbrand"
export const Footer=()=>{
    return(
        <div className="d-flex flex-column align-items-center justify-content-center py-5 bg bg-black shadow px-2">
            <NavBrand color="text-white"/>
            <div className="d-flex wrap justify-content-between wrap wt-50 mt-5">
                {
                    [
                        "Home","Live","You must watch","Term of services","Contacts Us","FAQ","Recent release","Term of services","Premium","Top IMDB","About Us","Privacy policy"
                    ].map((item,index)=>{
                        return(
                            <a 
                                href="#"
                                key={index}
                                className="link wt-30 text-start mb-4"
                            >
                                {item}
                            </a>
                        )
                    })
                }

            </div>
            <img 
                src="https://res.cloudinary.com/hamskid/image/upload/v1680270182/tmdb_vqqxw2.svg" 
                alt="object not found"
                className="tmbd my-3"
            />
        </div>
    )
}