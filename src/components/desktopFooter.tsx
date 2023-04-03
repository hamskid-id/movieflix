import { NavBrand } from "./navbrand"

export const DesktopFooter=()=>{
    return(
        <div className="desktopFooter py-5 bg bg-black shadow px-2">
                <NavBrand color="text-white"/>
                <img 
                    src="https://res.cloudinary.com/hamskid/image/upload/v1680270182/tmdb_vqqxw2.svg" 
                    alt="object not found"
                    className="tmbd my-3"
                />
         </div>
    )
}