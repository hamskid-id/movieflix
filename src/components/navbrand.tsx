import { FaFilm } from "react-icons/fa";
import { Text } from "./text";

type navProp={
    color?:string
}
export const NavBrand=({
    color
}:navProp)=>{
    return(
        <div className="d-flex align-items-center">
            <FaFilm
                color="palegreen"
                size="2.5rem"
                className="me-1"
            />
            <Text
                title="movieFlix"
                style={`${color? color:`text-white`} fs-3`}
            />
        </div>
    )
}