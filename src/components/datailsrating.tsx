import { FaStar} from "react-icons/fa";
import { Text } from "./text";

type RateProp={
    amount:number,
    runtime:number,
    release_date:string

}
export const DetailsTag=({
    amount,
    runtime,
    release_date
}:RateProp)=>{
    return(
        <div className="d-flex align-items-center my-3">
            <FaStar
                color="gold"
                size="1rem"
                className="me-2"
            />
            <Text
                title={amount}
                style="text-azure fs-7 me-2 ms-0"
            />
            <Text
                title="."
                style="text-azure fs-7 me-2"
            />
            <Text
                title={runtime}
                style="text-azure fs-7 me-2"
            />
            <Text
                title="."
                style="text-azure fs-7 me-2"
            />
            <Text
                title={release_date}
                style="text-azure fs-7"
            />
            
        </div>
    )
}