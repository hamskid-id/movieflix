import { FaStar} from "react-icons/fa";
import { Text } from "./text";

type RateProp={
    amount:number,
    date:string
}
export const Rating=({
    amount,
    date
}:RateProp)=>{
    return(
        <div className="d-flex my-2 align-items-center justify-content-between">
            <div className="d-flex align-items-center">
                <FaStar
                    color="gold"
                    size="1rem"
                    className="me-2"
                />
                <Text
                    title={amount}
                    style="text-azure fs-7"
                />
            </div>
            <Text 
                style="text-azure fs-7"
                title={date}
            />
        </div>
    )
}